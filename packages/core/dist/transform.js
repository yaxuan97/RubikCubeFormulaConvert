import { poseToMatrix, rotationMatrix, matVecMul, matTranspose, matMul, quantizeDirection, quantizeAngle, axisDirection, } from './coordinate.js';
import { baseMoveDef, sliceMoveDef, wideDecompose, axisSignToBaseFace, axisSignToSliceFace, axisToWideBase, modifierAngle, isBaseFace, isSliceFace, isWideFace, } from './moves.js';
// ── Build observer transform matrix ───────────────
function buildObserverMatrix(spec) {
    if ('facing' in spec) {
        return poseToMatrix(spec.facing, spec.headUp);
    }
    else {
        return rotationMatrix(spec.axis, spec.angle);
    }
}
// ── Transform a single axis-angle ─────────────────
//
// Instead of converting the full rotation vector (axis * sign * angle)
// through the matrix and back (which loses the distinction between e.g.
// R' and L — physically equivalent but different face names), we
// transform only the axis direction vector and keep the angle unchanged.
function transformAxisAngle(aa, M) {
    if (aa.angle === 0)
        return aa;
    // Get the unit direction vector along the rotation axis
    const dir = axisDirection(aa.axis, aa.sign);
    // Transform it to the observer frame
    const dirp = matVecMul(M, dir);
    // Snap to the nearest axis
    const { axis, sign } = quantizeDirection(dirp);
    return { axis, sign, angle: aa.angle };
}
// ── Map axis-angle back to a move face ────────────
function axisAngleToFace(aa) {
    if (aa.angle === 0) {
        return { face: 'R', modifier: '' };
    }
    const mod = aa.angle === -90 ? "'" : aa.angle === 180 ? '2' : '';
    const baseFace = axisSignToBaseFace(aa.axis, aa.sign);
    return { face: baseFace, modifier: mod };
}
// ── Transform a single AST node ───────────────────
function transformNode(node, M) {
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
function transformMoveNode(node, M) {
    if (isBaseFace(node.face)) {
        const aa = baseMoveDef(node.face, node.modifier);
        const taa = transformAxisAngle(aa, M);
        const { face, modifier } = axisAngleToFace(taa);
        return { type: 'move', face, modifier };
    }
    if (isSliceFace(node.face)) {
        const aa = sliceMoveDef(node.face, node.modifier);
        const taa = transformAxisAngle(aa, M);
        const sliceFace = axisSignToSliceFace(taa.axis, taa.sign);
        const mod = taa.angle === -90 ? "'" : taa.angle === 180 ? '2' : '';
        return { type: 'move', face: sliceFace, modifier: mod };
    }
    if (isWideFace(node.face)) {
        const decomp = wideDecompose(node.face, node.modifier);
        const baseNode = { type: 'move', face: decomp.baseFace, modifier: decomp.baseMod };
        const sliceNode = { type: 'move', face: decomp.sliceFace, modifier: decomp.sliceMod };
        const tBase = transformNode(baseNode, M);
        const tSlice = transformNode(sliceNode, M);
        const baseFace = tBase.face;
        const baseAxisMap = { R: 'X', L: 'X', U: 'Y', D: 'Y', F: 'Z', B: 'Z' };
        const baseAxis = baseAxisMap[baseFace];
        const { base: expectedBase, slice: expectedSlice } = axisToWideBase(baseAxis);
        if (tSlice.face === expectedSlice) {
            const wideMap = { R: 'r', L: 'l', U: 'u', D: 'd', F: 'f', B: 'b' };
            const wideFace = wideMap[tBase.face];
            const wideMod = tBase.modifier;
            return { type: 'move', face: wideFace, modifier: wideMod };
        }
        // Can't recombine, return as group
        return { type: 'group', moves: [tBase, tSlice], repeat: 1 };
    }
    return node;
}
function transformRotationNode(node, M) {
    const axisMap = { x: 'X', y: 'Y', z: 'Z' };
    const axis = axisMap[node.face];
    const angle = modifierAngle(node.modifier);
    const rotMat = rotationMatrix(axis, angle);
    // R_observed = M × R_cube × M^(-1)
    const combined = matMul(matMul(M, rotMat), matTranspose(M));
    // Extract axis-angle from combined rotation matrix
    const trace = combined[0][0] + combined[1][1] + combined[2][2];
    let extractedAngle = Math.acos(Math.max(-1, Math.min(1, (trace - 1) / 2))) * 180 / Math.PI;
    if (Math.abs(extractedAngle) < 1) {
        return { type: 'move', face: 'R', modifier: '' };
    }
    const rx = combined[2][1] - combined[1][2];
    const ry = combined[0][2] - combined[2][0];
    const rz = combined[1][0] - combined[0][1];
    const { axis: qAxis } = quantizeDirection([rx, ry, rz]);
    const vp = [rx, ry, rz];
    const idx = { X: 0, Y: 1, Z: 2 };
    const signedMag = vp[idx[qAxis]] > 0 ? extractedAngle : -extractedAngle;
    const qAngle = quantizeAngle(signedMag);
    const mod = qAngle === -90 ? "'" : qAngle === 180 ? '2' : '';
    const rotFaceMap = { X: 'x', Y: 'y', Z: 'z' };
    return { type: 'rotation', face: rotFaceMap[qAxis], modifier: mod };
}
// ── Public API ────────────────────────────────────
export function transform(nodes, spec) {
    const M = buildObserverMatrix(spec);
    return nodes.map(n => transformNode(n, M));
}
/**
 * Flatten AST: expand all groups to plain move sequences.
 * Groups with repeat > 1 are expanded to repeated flat moves.
 */
export function flattenAst(nodes) {
    const result = [];
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
//# sourceMappingURL=transform.js.map