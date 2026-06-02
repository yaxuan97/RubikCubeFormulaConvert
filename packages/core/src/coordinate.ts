import { Axis, Sign, BaseFace, PoseSpec, ValidationError } from './types.js';

// ── Vector & Matrix types ─────────────────────────

export type Vec3 = [number, number, number];
export type Mat3 = [Vec3, Vec3, Vec3]; // row-major

// ── Identity ──────────────────────────────────────

export const IDENTITY: Mat3 = [[1,0,0], [0,1,0], [0,0,1]];

// ── Face ↔ direction vector ──────────────────────

const FACE_DIR: Record<BaseFace, Vec3> = {
  R: [ 1,  0,  0],
  L: [-1,  0,  0],
  U: [ 0,  1,  0],
  D: [ 0, -1,  0],
  F: [ 0,  0,  1],
  B: [ 0,  0, -1],
};

const DIR_FACE: Record<string, BaseFace> = {
  '1,0,0': 'R', '-1,0,0': 'L',
  '0,1,0': 'U', '0,-1,0': 'D',
  '0,0,1': 'F', '0,0,-1': 'B',
};

export function faceToDirection(face: BaseFace): Vec3 {
  return [...FACE_DIR[face]] as Vec3;
}

export function directionToFace(v: Vec3): BaseFace {
  const key = v.map(x => Math.round(x)).join(',');
  return DIR_FACE[key];
}

// ── Vector operations ─────────────────────────────

export function cross(a: Vec3, b: Vec3): Vec3 {
  return [
    a[1] * b[2] - a[2] * b[1],
    a[2] * b[0] - a[0] * b[2],
    a[0] * b[1] - a[1] * b[0],
  ];
}

export function dot(a: Vec3, b: Vec3): number {
  return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
}

export function vecNorm(v: Vec3): number {
  return Math.sqrt(dot(v, v));
}

// ── Matrix operations ─────────────────────────────

/** Multiply matrix by vector: M * v */
export function matVecMul(m: Mat3, v: Vec3): Vec3 {
  return [
    m[0][0] * v[0] + m[0][1] * v[1] + m[0][2] * v[2],
    m[1][0] * v[0] + m[1][1] * v[1] + m[1][2] * v[2],
    m[2][0] * v[0] + m[2][1] * v[1] + m[2][2] * v[2],
  ];
}

/** Multiply two matrices: A * B */
export function matMul(a: Mat3, b: Mat3): Mat3 {
  const r: Mat3 = [[0,0,0],[0,0,0],[0,0,0]];
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      for (let k = 0; k < 3; k++) {
        r[i][j] += a[i][k] * b[k][j];
      }
    }
  }
  return r;
}

/** Transpose (which equals inverse for orthonormal rotation matrices) */
export function matTranspose(m: Mat3): Mat3 {
  return [
    [m[0][0], m[1][0], m[2][0]],
    [m[0][1], m[1][1], m[2][1]],
    [m[0][2], m[1][2], m[2][2]],
  ];
}

// ── Rotation matrix builders ──────────────────────

/** Rotation matrix for right-hand rotation around given axis */
export function rotationMatrix(axis: Axis, angleDeg: number): Mat3 {
  const a = (angleDeg * Math.PI) / 180;
  const c = Math.cos(a);
  const s = Math.sin(a);
  switch (axis) {
    case 'X': return [[1, 0, 0], [0, c, -s], [0, s, c]];
    case 'Y': return [[c, 0, s], [0, 1, 0], [-s, 0, c]];
    case 'Z': return [[c, -s, 0], [s, c, 0], [0, 0, 1]];
  }
}

// ── Pose matrix: facing + headUp → Mat3 ───────────

/**
 * Build observer pose matrix from facing and headUp directions.
 * Columns of the resulting matrix are: right, up, forward (in cube coords).
 * Multiplying this matrix by a cube-coord vector gives the observer-coord vector.
 */
export function poseToMatrix(facing: BaseFace, headUp: BaseFace): Mat3 {
  const forward = faceToDirection(facing);
  const up = faceToDirection(headUp);

  // Validate orthogonality
  if (Math.abs(dot(forward, up)) > 0.001) {
    throw new ValidationError(
      `facing (${facing}) and headUp (${headUp}) must be orthogonal`
    );
  }

  // right = up × forward (right-hand: thumb=up, fingers=forward → palm faces right)
  const right = cross(up, forward);

  // Matrix: rows are right, up, forward in cube coords
  // So matrix * cube_vector = observer_vector
  return [right, up, forward];
}

// ── Quantumization ────────────────────────────────

/**
 * Snap a vector to the nearest axis direction (±X, ±Y, ±Z).
 * Returns the axis and sign of the closest unit axis.
 */
export function quantizeDirection(v: Vec3): { axis: Axis; sign: Sign } {
  const abs: [number, number, number] = [Math.abs(v[0]), Math.abs(v[1]), Math.abs(v[2])];
  let maxIdx = 0;
  if (abs[1] > abs[maxIdx]) maxIdx = 1;
  if (abs[2] > abs[maxIdx]) maxIdx = 2;
  const axes: Axis[] = ['X', 'Y', 'Z'];
  return { axis: axes[maxIdx], sign: (v[maxIdx] > 0 ? 1 : -1) as Sign };
}

/**
 * Snap angle (degrees) to nearest of {0, +90, -90, 180}.
 * Does NOT normalize — caller should pass angles already in [-180, 180].
 */
export function quantizeAngle(deg: number): 0 | 90 | -90 | 180 {
  // Normalize to [-180, 180]
  let a = ((deg % 360) + 540) % 360 - 180;
  if (a > 135) a = 180;
  else if (a > 45) a = 90;
  else if (a < -135) a = 180;
  else if (a < -45) a = -90;
  else a = 0;
  return a as 0 | 90 | -90 | 180;
}

// ── Axis-angle vector conversion ─────────────────

/**
 * Convert from (axis, sign, angle) to rotation vector v = axis_direction * angle.
 * sign=1 means the positive axis direction, sign=-1 means negative.
 * angle is in degrees, following right-hand rule.
 */
export function toRotationVector(axis: Axis, sign: Sign, angle: number): Vec3 {
  const dir = axisDirection(axis, sign);
  return [dir[0] * angle, dir[1] * angle, dir[2] * angle];
}

export function axisDirection(axis: Axis, sign: Sign): Vec3 {
  switch (axis) {
    case 'X': return [sign, 0, 0];
    case 'Y': return [0, sign, 0];
    case 'Z': return [0, 0, sign];
  }
}

/** Convert a face→axis+sign mapping */
export function faceToAxisSign(face: BaseFace): { axis: Axis; sign: Sign } {
  switch (face) {
    case 'R': return { axis: 'X', sign: 1 };
    case 'L': return { axis: 'X', sign: -1 };
    case 'U': return { axis: 'Y', sign: 1 };
    case 'D': return { axis: 'Y', sign: -1 };
    case 'F': return { axis: 'Z', sign: 1 };
    case 'B': return { axis: 'Z', sign: -1 };
  }
}
