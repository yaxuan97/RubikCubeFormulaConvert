# Cube Converter

> Transform Rubik's Cube formulas between viewing perspectives.

[中文版](README_zhCN.md)

Given a cube formula and an observer pose (which face you're looking at, which way your head is tilted), **Cube Converter** computes the equivalent formula from that viewpoint. Under the hood, each move is modeled as a rotation vector in 3D space; changing your perspective is just a coordinate transform.

```
$ cube-convert "R'" --facing R
F'
```

## Packages

| Package | Description |
|---------|-------------|
| [`@cube/core`](./packages/core) | Zero-dependency TS library: parser, serializer, transform engine |
| [`@cube/cli`](./packages/cli) | Command-line tool wrapping `@cube/core` |
| [`@cube/web`](./packages/web) | Browser app with a 3D cube viewer (React + Three.js) |

## Quick Start

### CLI

```bash
# Install dependencies
pnpm install

# Identity (no change)
echo "R U R' U'" | pnpm cli

# Look from the right face — R' becomes F'
echo "R'" | pnpm cli -f R

# Tilt your head right (rotate observer around Y)
echo "R U R' U'" | pnpm cli -ry 90

# Read from file, write to file
pnpm cli -i scramble.txt -o result.txt -f B
```

### Library

```ts
import { convert } from '@cube/core';

const result = convert("R U R' U'", { facing: 'L', headUp: 'U' });
console.log(result.output);
// → L D L' D'
```

### Web App

```bash
pnpm dev:web
```

Opens a browser app with:
- A **3D cube** you can drag to rotate and click to pick a facing face
- **View controls** — set facing face, head-up direction, and tilt shortcuts
- **Formula input** with live conversion
- **Color scheme** selector (WCA / Japanese / White Bottom)

## Supported Notation

| Category | Examples |
|----------|----------|
| Face turns | `R`, `R'`, `R2`, `L`, `U`, `D`, `F`, `B` |
| Slice moves | `M`, `E`, `S` |
| Wide moves | `r`, `u'`, `f2` |
| Cube rotations | `x`, `y'`, `z2` |
| Groups | `(R U R' U')` |
| Repetition | `(R U)3`, `(R U)*3` |
| Nesting | `(R (U R')2)3` |

Case-insensitive. Whitespace is optional.

## How It Works

1. **Parse** — the formula string is parsed into an AST.
2. **Transform** — each move's rotation vector is transformed by the observer's rotation matrix (built from `facing` + `headUp` or direct axis-angle). The transformed vector is quantized back to the nearest grid-aligned move.
3. **Serialize** — the AST is serialized back to a formula string, preserving group structure.

```
Observer: looking at F face, head pointing U (identity)
  pose matrix = I
  R' rotation vector = (-90°, 0, 0)
  result = (-90°, 0, 0) → R'

Observer: looking at R face, head pointing U
  pose matrix = Ry(90°)
  R' rotation vector = (-90°, 0, 0)
  result = (0, 0, -90°) → F'
```

## Project Structure

```
.
├── packages/
│   ├── core/src/
│   │   ├── types.ts        # All type definitions
│   │   ├── coordinate.ts   # Vec3/Mat3 math, pose matrices
│   │   ├── moves.ts        # Face ↔ axis-angle mappings
│   │   ├── parser.ts       # Formula string → AST
│   │   ├── serializer.ts   # AST → formula string
│   │   ├── transform.ts    # Core transformation logic
│   │   └── index.ts        # Public API
│   ├── cli/src/
│   │   ├── args.ts         # Argument parser
│   │   └── index.ts        # CLI entry point
│   └── web/src/
│       ├── App.tsx
│       └── components/
│           ├── CubeViewer.tsx     # 3D cube (Three.js)
│           ├── ViewSelector.tsx   # Perspective controls
│           ├── FormulaInput.tsx   # Formula text area
│           └── ResultDisplay.tsx  # Output with copy button
├── docs/
│   └── superpowers/
│       ├── specs/      # Design spec
│       └── plans/      # Implementation plan
└── tsconfig.base.json
```

## Development

```bash
# Install
pnpm install

# Build core library
pnpm build

# Run all tests (35 tests, vitest)
pnpm test

# Dev server for web app
pnpm dev:web
```

## Tech Stack

- **Language:** TypeScript
- **Build:** pnpm workspaces, tsc, Vite
- **Test:** Vitest
- **Web:** React 18, Three.js 0.160
- **CLI runtime:** tsx

## License

MIT
