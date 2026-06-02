import {
  AstNode, MoveNode, GroupNode, RotationNode,
  PoseSpec, RotationSpec, TransformSpec,
  BaseFace, SliceFace, Modifier, Face, AxisAngle, Axis, Sign,
} from './types.js';
import {
  Mat3, IDENTITY, poseToMatrix, rotationMatrix,
  matVecMul, matTranspose, matMul,
  quantizeDirection, quantizeAngle, axisDirection,
} from './coordinate.js';
import {
  baseMoveDef, sliceMoveDef, wideDecompose,
  axisSignToBaseFace, axisSignToSliceFace, axisToWideBase,
  modifierAngle, isBaseFace, isSliceFace, isWideFace,
} from './moves.js';

// ── Build observer transform matrix ───────────────

function buildObserverMatrix(spec: TransformSpec): Mat3 {
  if ('facing' in spec) {
    return poseToMatrix(spec.facing, spec.headUp);
  } else {
    return rotationMatrix(spec.axis, spec.angle);
  }
}

// ── Transform a single axis-angle ─────────────────
//
// Instead of converting the full rotation vector (axis * sign * angle)
// through the matrix and back (which loses the distinction between e.g.
// R' and L — physically equivalent but different face names), we
// transform only the axis direction vector and keep the angle unchanged.

function transformAxisAngle(aa: AxisAngle, M: Mat3): AxisAngle {
  if (aa.angle === 0) return aa;

  // Get the unit direction vector along the rotation axis
  const dir = axisDirection(aa.axis, aa.sign);
  // Transform it to the observer frame
  const dirp = matVecMul(M, dir);
  // Snap to the nearest axis
  const { axis, sign } = quantizeDirection(dirp);

  return { axis, sign, angle: aa.angle };
}

// ── Map axis-angle back to a move face ────────────

function axisAngleToFace(aa: AxisAngle): { face: BaseFace; modifier: Modifier } {
  if (aa.angle === 0) {
    return { face: 'R' as BaseFace, modifier: '' as Modifier };
  }
  const mod: Modifier = aa.angle === -90 ? "'" : aa.angle === 180 ? '2' : '';
  const baseFace = axisSignToBaseFace(aa.axis, aa.sign);
  return { face: baseFace, modifier: mod };
}

// ── Transform a single AST node ───────────────────

function transformNode(node: AstNode, M: Mat3): AstNode {
  switch (node.type) {
    case 'move':
      return transformMoveNode(node, M);
    case 'rotation':
      return transformRotationNode(node, M);
    case 'group':
      return {
        type: 'group',
        moves: node.moves.map(n => transformNode(n, M)),
        repeat: node.repeat,
      };
  }
}

function transformMoveNode(node: MoveNode, M: Mat3): AstNode {
  if (isBaseFace(node.face as string)) {
    const aa = baseMoveDef(node.face as BaseFace, node.modifier);
    const taa = transformAxisAngle(aa, M);
    const { face, modifier } = axisAngleToFace(taa);
    return { type: 'move', face, modifier };
  }

  if (isSliceFace(node.face as string)) {
    const aa = sliceMoveDef(node.face as SliceFace, node.modifier);
    const taa = transformAxisAngle(aa, M);
    const sliceFace = axisSignToSliceFace(taa.axis, taa.sign);
    const mod: Modifier = taa.angle === -90 ? "'" : taa.angle === 180 ? '2' : '';
    return { type: 'move', face: sliceFace, modifier: mod };
  }

  if (isWideFace(node.face as string)) {
    const decomp = wideDecompose(node.face as any, node.modifier);
    const baseNode: MoveNode = { type: 'move', face: decomp.baseFace, modifier: decomp.baseMod };
    const sliceNode: MoveNode = { type: 'move', face: decomp.sliceFace, modifier: decomp.sliceMod };

    const tBase = transformNode(baseNode, M) as MoveNode;
    const tSlice = transformNode(sliceNode, M) as MoveNode;

    const baseFace = tBase.face as BaseFace;
    const baseAxisMap: Record<string, 'X' | 'Y' | 'Z'> = { R: 'X', L: 'X', U: 'Y', D: 'Y', F: 'Z', B: 'Z' };
    const baseAxis = baseAxisMap[baseFace];
    const { base: expectedBase, slice: expectedSlice } = axisToWideBase(baseAxis);

    if (tSlice.face === expectedSlice) {
      const wideMap: Record<string, string> = { R: 'r', L: 'l', U: 'u', D: 'd', F: 'f', B: 'b' };
      const wideFace = wideMap[tBase.face] as Face;
      const wideMod: Modifier = tBase.modifier;
      return { type: 'move', face: wideFace, modifier: wideMod };
    }

    // Can't recombine, return as group
    return { type: 'group', moves: [tBase, tSlice], repeat: 1 };
  }

  return node;
}

function transformRotationNode(node: RotationNode, M: Mat3): AstNode {
  const axisMap: Record<string, 'X' | 'Y' | 'Z'> = { x: 'X', y: 'Y', z: 'Z' };
  const axis = axisMap[node.face];
  const angle = modifierAngle(node.modifier);

  const rotMat = rotationMatrix(axis, angle);
  // R_observed = M × R_cube × M^(-1)
  const combined = matMul(matMul(M, rotMat), matTranspose(M));

  // Extract axis-angle from combined rotation matrix
  const trace = combined[0][0] + combined[1][1] + combined[2][2];
  let extractedAngle = Math.acos(Math.max(-1, Math.min(1, (trace - 1) / 2))) * 180 / Math.PI;

  if (Math.abs(extractedAngle) < 1) {
    return { type: 'move', face: 'R' as Face, modifier: '' as Modifier };
  }

  const rx = combined[2][1] - combined[1][2];
  const ry = combined[0][2] - combined[2][0];
  const rz = combined[1][0] - combined[0][1];

  const { axis: qAxis } = quantizeDirection([rx, ry, rz]);
  const vp = [rx, ry, rz];
  const idx: Record<string, number> = { X: 0, Y: 1, Z: 2 };
  const signedMag = vp[idx[qAxis]] > 0 ? extractedAngle : -extractedAngle;
  const qAngle = quantizeAngle(signedMag);

  const mod: Modifier = qAngle === -90 ? "'" : qAngle === 180 ? '2' : '';
  const rotFaceMap: Record<string, 'x' | 'y' | 'z'> = { X: 'x', Y: 'y', Z: 'z' };
  return { type: 'rotation', face: rotFaceMap[qAxis], modifier: mod };
}

// ── Public API ────────────────────────────────────

export function transform(nodes: AstNode[], spec: TransformSpec): AstNode[] {
  const M = buildObserverMatrix(spec);
  return nodes.map(n => transformNode(n, M));
}

/**
 * Flatten AST: expand all groups to plain move sequences.
 * Groups with repeat > 1 are expanded to repeated flat moves.
 */
export function flattenAst(nodes: AstNode[]): AstNode[] {
  const result: AstNode[] = [];
  for (const node of nodes) {
    switch (node.type) {
      case 'move':
      case 'rotation':
        result.push(node);
        break;
      case 'group': {
        const flatChildren = flattenAst(node.moves);
        for (let i = 0; i < node.repeat; i++) {
          result.push(...flatChildren);
        }
        break;
      }
    }
  }
  return result;
}
