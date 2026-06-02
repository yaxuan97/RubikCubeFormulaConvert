// ── Axes ──────────────────────────────────────────
// ── Errors ────────────────────────────────────────
export class ParseError extends Error {
    position;
    constructor(message, position) {
        super(`${message} at position ${position}`);
        this.name = 'ParseError';
        this.position = position;
    }
}
export class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = 'ValidationError';
    }
}
//# sourceMappingURL=types.js.map