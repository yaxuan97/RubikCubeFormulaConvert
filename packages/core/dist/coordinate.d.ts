import { Axis, Sign, BaseFace } from './types.js';
export type Vec3 = [number, number, number];
export type Mat3 = [Vec3, Vec3, Vec3];
export declare const IDENTITY: Mat3;
export declare function faceToDirection(face: BaseFace): Vec3;
export declare function directionToFace(v: Vec3): BaseFace;
export declare function cross(a: Vec3, b: Vec3): Vec3;
export declare function dot(a: Vec3, b: Vec3): number;
export declare function vecNorm(v: Vec3): number;
/** Multiply matrix by vector: M * v */
export declare function matVecMul(m: Mat3, v: Vec3): Vec3;
/** Multiply two matrices: A * B */
export declare function matMul(a: Mat3, b: Mat3): Mat3;
/** Transpose (which equals inverse for orthonormal rotation matrices) */
export declare function matTranspose(m: Mat3): Mat3;
/** Rotation matrix for right-hand rotation around given axis */
export declare function rotationMatrix(axis: Axis, angleDeg: number): Mat3;
/**
 * Build observer pose matrix from facing and headUp directions.
 * Columns of the resulting matrix are: right, up, forward (in cube coords).
 * Multiplying this matrix by a cube-coord vector gives the observer-coord vector.
 */
export declare function poseToMatrix(facing: BaseFace, headUp: BaseFace): Mat3;
/**
 * Snap a vector to the nearest axis direction (±X, ±Y, ±Z).
 * Returns the axis and sign of the closest unit axis.
 */
export declare function quantizeDirection(v: Vec3): {
    axis: Axis;
    sign: Sign;
};
/**
 * Snap angle (degrees) to nearest of {0, +90, -90, 180}.
 * Does NOT normalize — caller should pass angles already in [-180, 180].
 */
export declare function quantizeAngle(deg: number): 0 | 90 | -90 | 180;
/**
 * Convert from (axis, sign, angle) to rotation vector v = axis_direction * angle.
 * sign=1 means the positive axis direction, sign=-1 means negative.
 * angle is in degrees, following right-hand rule.
 */
export declare function toRotationVector(axis: Axis, sign: Sign, angle: number): Vec3;
export declare function axisDirection(axis: Axis, sign: Sign): Vec3;
/** Convert a face→axis+sign mapping */
export declare function faceToAxisSign(face: BaseFace): {
    axis: Axis;
    sign: Sign;
};
//# sourceMappingURL=coordinate.d.ts.map