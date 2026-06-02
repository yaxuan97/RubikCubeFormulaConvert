import { Axis, Sign, BaseFace, SliceFace, WideFace, Modifier, AxisAngle } from './types.js';
export declare function modifierAngle(mod: Modifier): 90 | -90 | 180;
export declare function baseMoveDef(face: BaseFace, modifier: Modifier): AxisAngle;
export declare function sliceMoveDef(face: SliceFace, modifier: Modifier): AxisAngle;
interface WideDecomp {
    baseFace: BaseFace;
    baseMod: Modifier;
    sliceFace: SliceFace;
    sliceMod: Modifier;
}
export declare function wideDecompose(face: WideFace, modifier: Modifier): WideDecomp;
export declare function axisSignToBaseFace(axis: Axis, sign: Sign): BaseFace;
export declare function axisSignToSliceFace(axis: Axis, _sign: Sign): SliceFace;
export declare function axisToWideBase(axis: Axis): {
    base: BaseFace;
    slice: SliceFace;
};
export declare function isBaseFace(f: string): f is BaseFace;
export declare function isSliceFace(f: string): f is SliceFace;
export declare function isWideFace(f: string): f is WideFace;
export declare function isRotationFace(f: string): f is 'x' | 'y' | 'z';
export {};
//# sourceMappingURL=moves.d.ts.map