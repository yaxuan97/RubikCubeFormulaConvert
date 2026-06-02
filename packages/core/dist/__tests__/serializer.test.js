import { describe, it, expect } from 'vitest';
import { serialize } from '../serializer.js';
import { parse } from '../parser.js';
describe('serialize', () => {
    it('serializes a single basic move', () => {
        expect(serialize([{ type: 'move', face: 'R', modifier: '' }])).toBe('R');
    });
    it('serializes inverse and double moves', () => {
        expect(serialize([{ type: 'move', face: 'R', modifier: "'" }])).toBe("R'");
        expect(serialize([{ type: 'move', face: 'U', modifier: '2' }])).toBe('U2');
    });
    it('serializes a sequence with spaces', () => {
        const seq = [
            { type: 'move', face: 'R', modifier: '' },
            { type: 'move', face: 'U', modifier: '' },
            { type: 'move', face: 'R', modifier: "'" },
            { type: 'move', face: 'U', modifier: "'" },
        ];
        expect(serialize(seq)).toBe("R U R' U'");
    });
    it('serializes wide moves in lowercase', () => {
        expect(serialize([{ type: 'move', face: 'r', modifier: '' }])).toBe('r');
        expect(serialize([{ type: 'move', face: 'u', modifier: "'" }])).toBe("u'");
    });
    it('serializes rotation moves in lowercase', () => {
        const nodes = parse('x y z2');
        expect(serialize(nodes)).toBe('x y z2');
    });
    it('serializes groups', () => {
        const nodes = parse('(R U)3');
        expect(serialize(nodes)).toBe('(R U)3');
    });
    it('serializes nested groups', () => {
        const nodes = parse("(R (U R')2)3");
        const result = serialize(nodes);
        // Parse and re-serialize should be stable
        expect(parse(result)).toEqual(nodes);
    });
    it('round-trips complex formulas', () => {
        const inputs = [
            "R U R' U'",
            "r U r' U'",
            "M2 E S'",
            "x y' z2",
            "(R U R' U')6",
            "(r (U R')2)3",
        ];
        for (const input of inputs) {
            expect(serialize(parse(input))).toBe(input);
        }
    });
});
//# sourceMappingURL=serializer.test.js.map