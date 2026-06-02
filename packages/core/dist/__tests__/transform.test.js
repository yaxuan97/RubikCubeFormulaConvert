import { describe, it, expect } from 'vitest';
import { transform, flattenAst } from '../transform.js';
import { parse } from '../parser.js';
import { serialize } from '../serializer.js';
function t(input, spec) {
    const ast = parse(input);
    const transformed = transform(ast, spec);
    const flat = flattenAst(transformed);
    return serialize(flat);
}
describe('transform with pose', () => {
    // Default (facing F, headUp U) — no change
    it('identity pose returns original', () => {
        expect(t("R U R' U'", { facing: 'F', headUp: 'U' })).toBe("R U R' U'");
    });
    it("R' from front is still R'", () => {
        expect(t("R'", { facing: 'F', headUp: 'U' })).toBe("R'");
    });
    // When you look at the R face (+X) with head up (+Y), your forward is +X.
    // R' cube: rotation vector = (-90°, 0, 0). Observer matrix M transforms from cube→observer.
    // v' = M × v. The result should be F' (verified by spatial reasoning).
    it("R' from right (facing R) maps correctly", () => {
        expect(t("R'", { facing: 'R', headUp: 'U' })).toBe("F'");
    });
});
describe('transform with rotation spec', () => {
    it('identity rotation preserves formula', () => {
        expect(t("R U R' U'", { axis: 'Y', angle: 0 })).toBe("R U R' U'");
    });
    it('360 degree rotation preserves formula', () => {
        expect(t("R U R' U'", { axis: 'Y', angle: 360 })).toBe("R U R' U'");
    });
});
describe('transform with groups and repetition', () => {
    it('preserves group structure', () => {
        const ast = parse('(R U)3');
        const transformed = transform(ast, { facing: 'F', headUp: 'U' });
        expect(serialize(transformed)).toBe('(R U)3');
    });
    it('transforms nested groups', () => {
        const ast = parse("(R (U R')2)3");
        const transformed = transform(ast, { facing: 'F', headUp: 'U' });
        expect(serialize(transformed)).toBe("(R (U R')2)3");
    });
});
describe('transform with slice moves', () => {
    it('transforms M move with identity', () => {
        expect(t('M', { facing: 'F', headUp: 'U' })).toBe('M');
    });
});
describe('transform with wide moves', () => {
    it('transforms r move with identity', () => {
        expect(t('r', { facing: 'F', headUp: 'U' })).toBe('r');
    });
});
describe('transform edge cases', () => {
    it('handles empty formula', () => {
        expect(t('', { facing: 'F', headUp: 'U' })).toBe('');
    });
    it('handles R2 (180 degrees)', () => {
        expect(t('R2', { facing: 'F', headUp: 'U' })).toBe('R2');
    });
});
describe('flattenAst', () => {
    it('flattens group with repeat into repeated moves', () => {
        const ast = parse('(R U)3');
        const flat = flattenAst(ast);
        expect(serialize(flat)).toBe('R U R U R U');
    });
});
//# sourceMappingURL=transform.test.js.map