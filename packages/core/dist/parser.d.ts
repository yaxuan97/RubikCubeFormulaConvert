import { AstNode } from './types.js';
/**
 * Parse a formula string into an AST array.
 * Grammar:
 *   formula  = (move | rotation | group)*
 *   move     = face modifier
 *   rotation = rotationFace modifier
 *   group    = '(' formula ')' [('*')? digit+]
 *   face     = R|L|U|D|F|B|M|E|S|r|l|u|d|f|b
 *   rotationFace = x|y|z
 *   modifier = "'" | "2" | ε
 *
 * Case-insensitive for base faces, case-preserving for wide faces.
 * Whitespace ignored.
 */
export declare function parse(input: string): AstNode[];
//# sourceMappingURL=parser.d.ts.map