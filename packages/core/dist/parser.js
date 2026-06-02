import { ParseError } from './types.js';
import { isBaseFace, isSliceFace, isWideFace, isRotationFace } from './moves.js';
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
export function parse(input) {
    let i = 0;
    function skipWhitespace() {
        while (i < input.length && /\s/.test(input[i]))
            i++;
    }
    function peek() {
        return i < input.length ? input[i] : null;
    }
    function consume() {
        return input[i++];
    }
    function parseFormula() {
        const moves = [];
        while (true) {
            skipWhitespace();
            const ch = peek();
            if (ch === null || ch === ')')
                break;
            if (ch === '(') {
                moves.push(parseGroup());
            }
            else if (isRotationFaceChar(ch)) {
                moves.push(parseRotation());
            }
            else if (isFaceChar(ch)) {
                moves.push(parseMove());
            }
            else {
                throw new ParseError(`Unexpected character '${ch}'`, i);
            }
        }
        return moves;
    }
    function isFaceChar(ch) {
        const upper = ch.toUpperCase();
        return isBaseFace(upper) || isSliceFace(upper) || isWideFace(ch);
    }
    function isRotationFaceChar(ch) {
        return isRotationFace(ch.toLowerCase());
    }
    function parseMove() {
        const faceChar = consume();
        const modifier = parseModifier();
        // Preserve case for wide faces (lowercase), uppercase for base/slice
        let face;
        if (isWideFace(faceChar)) {
            face = faceChar;
        }
        else {
            face = faceChar.toUpperCase();
        }
        return { type: 'move', face, modifier };
    }
    function parseRotation() {
        const faceChar = consume().toLowerCase();
        const modifier = parseModifier();
        return { type: 'rotation', face: faceChar, modifier };
    }
    function parseModifier() {
        const ch = peek();
        if (ch === "'") {
            consume();
            return "'";
        }
        if (ch === '2') {
            consume();
            return '2';
        }
        // ² (superscript 2), ' (smart quote)
        if (ch === '²') {
            consume();
            return '2';
        }
        if (ch === '’' || ch === '′') {
            consume();
            return "'";
        }
        return '';
    }
    function parseGroup() {
        consume(); // '('
        const moves = parseFormula();
        skipWhitespace();
        if (peek() !== ')') {
            throw new ParseError('Unclosed group', i);
        }
        consume(); // ')'
        skipWhitespace();
        let repeat = 1;
        // Optional * before the number
        if (peek() === '*') {
            consume();
            skipWhitespace();
        }
        if (peek() !== null && /\d/.test(peek())) {
            let numStr = '';
            while (peek() !== null && /\d/.test(peek())) {
                numStr += consume();
            }
            repeat = parseInt(numStr, 10);
        }
        return { type: 'group', moves, repeat };
    }
    return parseFormula();
}
//# sourceMappingURL=parser.js.map