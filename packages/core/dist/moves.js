import { faceToAxisSign } from './coordinate.js';
// ── Modifier → angle ──────────────────────────────
export function modifierAngle(mod) {
    if (mod === "'")
        return -90;
    if (mod === '2')
        return 180;
    return 90;
}
// ── Base face → axis-angle ───────────────────────
export function baseMoveDef(face, modifier) {
    const { axis, sign } = faceToAxisSign(face);
    return { axis, sign, angle: modifierAngle(modifier) };
}
// ── Slice face → axis-angle ──────────────────────
// M = same axis as L (turns with L, not R)
// E = same axis as D
// S = same axis as F
const SLICE_AXIS = {
    M: { axis: 'X', sign: -1 }, // M follows L direction
    E: { axis: 'Y', sign: -1 }, // E follows D direction
    S: { axis: 'Z', sign: 1 }, // S follows F direction
};
export function sliceMoveDef(face, modifier) {
    const { axis, sign } = SLICE_AXIS[face];
    return { axis, sign, angle: modifierAngle(modifier) };
}
export function wideDecompose(face, modifier) {
    const inv = (m) => m === "'" ? '' : m === '' ? "'" : '2';
    switch (face) {
        case 'r': return { baseFace: 'R', baseMod: modifier, sliceFace: 'M', sliceMod: inv(modifier) };
        case 'l': return { baseFace: 'L', baseMod: modifier, sliceFace: 'M', sliceMod: modifier };
        case 'u': return { baseFace: 'U', baseMod: modifier, sliceFace: 'E', sliceMod: inv(modifier) };
        case 'd': return { baseFace: 'D', baseMod: modifier, sliceFace: 'E', sliceMod: modifier };
        case 'f': return { baseFace: 'F', baseMod: modifier, sliceFace: 'S', sliceMod: modifier };
        case 'b': return { baseFace: 'B', baseMod: modifier, sliceFace: 'S', sliceMod: inv(modifier) };
    }
}
// ── Axis-angle → base face lookup ────────────────
const AXIS_SIGN_TO_FACE = {
    'X,1': 'R', 'X,-1': 'L',
    'Y,1': 'U', 'Y,-1': 'D',
    'Z,1': 'F', 'Z,-1': 'B',
};
export function axisSignToBaseFace(axis, sign) {
    return AXIS_SIGN_TO_FACE[`${axis},${sign}`];
}
// ── Axis-angle → slice face lookup ───────────────
// M is along X, E along Y, S along Z
const AXIS_SIGN_TO_SLICE = {
    'X,-1': 'M',
    'X,1': 'M',
    'Y,-1': 'E',
    'Y,1': 'E',
    'Z,1': 'S',
    'Z,-1': 'S',
};
export function axisSignToSliceFace(axis, _sign) {
    return AXIS_SIGN_TO_SLICE[`${axis},1`];
}
// ── Axis-angle → wide face lookup ────────────────
const AXIS_TO_WIDE = {
    X: { base: 'R', slice: 'M' },
    Y: { base: 'U', slice: 'E' },
    Z: { base: 'F', slice: 'S' },
};
export function axisToWideBase(axis) {
    return AXIS_TO_WIDE[axis];
}
// ── Is functions ──────────────────────────────────
export function isBaseFace(f) {
    return ['R', 'L', 'U', 'D', 'F', 'B'].includes(f);
}
export function isSliceFace(f) {
    return ['M', 'E', 'S'].includes(f);
}
export function isWideFace(f) {
    return ['r', 'l', 'u', 'd', 'f', 'b'].includes(f);
}
export function isRotationFace(f) {
    return ['x', 'y', 'z'].includes(f);
}
//# sourceMappingURL=moves.js.map