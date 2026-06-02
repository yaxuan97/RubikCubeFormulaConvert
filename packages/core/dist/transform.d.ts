import { AstNode, TransformSpec } from './types.js';
export declare function transform(nodes: AstNode[], spec: TransformSpec): AstNode[];
/**
 * Flatten AST: expand all groups to plain move sequences.
 * Groups with repeat > 1 are expanded to repeated flat moves.
 */
export declare function flattenAst(nodes: AstNode[]): AstNode[];
//# sourceMappingURL=transform.d.ts.map