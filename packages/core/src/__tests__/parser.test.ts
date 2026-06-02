import { describe, it, expect } from 'vitest';
import { parse } from '../parser.js';
import { MoveNode, GroupNode, RotationNode } from '../types.js';

describe('parse', () => {
  it('parses a single base move', () => {
    const result = parse('R');
    expect(result).toEqual([{ type: 'move', face: 'R', modifier: '' }]);
  });

  it('parses inverse move', () => {
    const result = parse("R'");
    expect(result).toEqual([{ type: 'move', face: 'R', modifier: "'" }]);
  });

  it('parses double move', () => {
    const result = parse('R2');
    expect(result).toEqual([{ type: 'move', face: 'R', modifier: '2' }]);
  });

  it('parses lowercase (normalized to uppercase)', () => {
    const result = parse('m');
    expect(result).toEqual([{ type: 'move', face: 'M', modifier: '' }]);
  });

  it('parses a sequence', () => {
    const result = parse("R U R' U'");
    expect(result).toEqual([
      { type: 'move', face: 'R', modifier: '' },
      { type: 'move', face: 'U', modifier: '' },
      { type: 'move', face: 'R', modifier: "'" },
      { type: 'move', face: 'U', modifier: "'" },
    ]);
  });

  it('parses slice moves', () => {
    const result = parse("M E S'");
    expect(result).toEqual([
      { type: 'move', face: 'M', modifier: '' },
      { type: 'move', face: 'E', modifier: '' },
      { type: 'move', face: 'S', modifier: "'" },
    ]);
  });

  it('parses wide moves', () => {
    const result = parse("r u' f2");
    expect(result).toEqual([
      { type: 'move', face: 'r', modifier: '' },
      { type: 'move', face: 'u', modifier: "'" },
      { type: 'move', face: 'f', modifier: '2' },
    ]);
  });

  it('parses rotation moves', () => {
    const result = parse("x y' z2");
    expect(result).toEqual([
      { type: 'rotation', face: 'x', modifier: '' },
      { type: 'rotation', face: 'y', modifier: "'" },
      { type: 'rotation', face: 'z', modifier: '2' },
    ]);
  });

  it('parses grouped moves', () => {
    const result = parse("(R U R' U')");
    expect(result).toEqual([
      {
        type: 'group',
        moves: [
          { type: 'move', face: 'R', modifier: '' },
          { type: 'move', face: 'U', modifier: '' },
          { type: 'move', face: 'R', modifier: "'" },
          { type: 'move', face: 'U', modifier: "'" },
        ],
        repeat: 1,
      },
    ]);
  });

  it('parses group with repeat count', () => {
    const result = parse('(R U)3');
    expect(result).toEqual([
      {
        type: 'group',
        moves: [
          { type: 'move', face: 'R', modifier: '' },
          { type: 'move', face: 'U', modifier: '' },
        ],
        repeat: 3,
      },
    ]);
  });

  it('parses group with star-repeat', () => {
    const result = parse('(R U)*3');
    expect(result).toEqual([
      {
        type: 'group',
        moves: [
          { type: 'move', face: 'R', modifier: '' },
          { type: 'move', face: 'U', modifier: '' },
        ],
        repeat: 3,
      },
    ]);
  });

  it('parses nested groups', () => {
    const result = parse("(R (U R')2)3");
    expect(result).toEqual([
      {
        type: 'group',
        moves: [
          { type: 'move', face: 'R', modifier: '' },
          {
            type: 'group',
            moves: [
              { type: 'move', face: 'U', modifier: '' },
              { type: 'move', face: 'R', modifier: "'" },
            ],
            repeat: 2,
          },
        ],
        repeat: 3,
      },
    ]);
  });

  it('parses empty string as empty array', () => {
    expect(parse('')).toEqual([]);
    expect(parse('  ')).toEqual([]);
  });

  it('throws on invalid character', () => {
    expect(() => parse('R Q')).toThrow("Unexpected character 'Q'");
  });
});
