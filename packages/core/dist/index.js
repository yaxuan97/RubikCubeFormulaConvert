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
import { transform } from './transform.js';
export function convert(formula, spec) {
    const ast = parse(formula);
    const transformed = transform(ast, spec);
    const output = serialize(transformed);
    return { input: formula, output, spec };
}
//# sourceMappingURL=index.js.map