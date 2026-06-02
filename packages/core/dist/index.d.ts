export type { Axis, Sign, AxisAngle, BaseFace, SliceFace, WideFace, Face, Modifier, MoveNode, GroupNode, RotationNode, AstNode, PoseSpec, RotationSpec, TransformSpec, TransformResult, } from './types.js';
export { ParseError, ValidationError } from './types.js';
export { parse } from './parser.js';
export { serialize } from './serializer.js';
export { transform, flattenAst } from './transform.js';
import { PoseSpec, RotationSpec, TransformResult } from './types.js';
export declare function convert(formula: string, spec: PoseSpec | RotationSpec): TransformResult;
//# sourceMappingURL=index.d.ts.map