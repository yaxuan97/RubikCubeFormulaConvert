// Types
export type {
  Axis, Sign, AxisAngle,
  BaseFace, SliceFace, WideFace, Face, Modifier,
  MoveNode, GroupNode, RotationNode, AstNode,
  PoseSpec, RotationSpec, TransformSpec, TransformResult,
} from './types.js';

// Errors
export { ParseError, ValidationError } from './types.js';

// Parser
export { parse } from './parser.js';

// Serializer
export { serialize } from './serializer.js';

// Transform
export { transform, flattenAst } from './transform.js';

// High-level convenience
import { parse } from './parser.js';
import { serialize } from './serializer.js';
import { transform, flattenAst } from './transform.js';
import { PoseSpec, RotationSpec, TransformResult } from './types.js';

export function convert(formula: string, spec: PoseSpec | RotationSpec): TransformResult {
  const ast = parse(formula);
  const transformed = transform(ast, spec);
  const flat = flattenAst(transformed);
  const output = serialize(flat);
  return { input: formula, output, spec };
}
