export type Axis = 'X' | 'Y' | 'Z';
export type Sign = 1 | -1;
export interface AxisAngle {
    axis: Axis;
    sign: Sign;
    angle: 0 | 90 | -90 | 180;
}
export type BaseFace = 'R' | 'L' | 'U' | 'D' | 'F' | 'B';
export type SliceFace = 'M' | 'E' | 'S';
export type WideFace = 'r' | 'l' | 'u' | 'd' | 'f' | 'b';
export type Face = BaseFace | SliceFace | WideFace;
export type Modifier = '' | "'" | '2';
export type RotationFace = 'x' | 'y' | 'z';
export interface MoveNode {
    type: 'move';
    face: Face;
    modifier: Modifier;
}
export interface GroupNode {
    type: 'group';
    moves: AstNode[];
    repeat: number;
}
export interface RotationNode {
    type: 'rotation';
    face: RotationFace;
    modifier: Modifier;
}
export type AstNode = MoveNode | GroupNode | RotationNode;
export interface PoseSpec {
    facing: BaseFace;
    headUp: BaseFace;
}
export interface RotationSpec {
    axis: Axis;
    angle: number;
}
export type TransformSpec = PoseSpec | RotationSpec;
export interface TransformResult {
    input: string;
    output: string;
    spec: TransformSpec;
}
export declare class ParseError extends Error {
    readonly position: number;
    constructor(message: string, position: number);
}
export declare class ValidationError extends Error {
    constructor(message: string);
}
//# sourceMappingURL=types.d.ts.map