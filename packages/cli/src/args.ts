import { BaseFace, PoseSpec, RotationSpec, TransformSpec } from '@cube/core';

export interface CLIOptions {
  spec: TransformSpec;
  formula?: string;
  inputFile?: string;
  outputFile?: string;
  pretty: boolean;
  json: boolean;
  compact: boolean;
  help: boolean;
  version: boolean;
}

export function parseArgs(argv: string[]): CLIOptions {
  const args = argv.slice(2);
  const opts: CLIOptions = {
    spec: { facing: 'F', headUp: 'U' },
    pretty: false,
    json: false,
    compact: false,
    help: false,
    version: false,
  };

  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    switch (arg) {
      case '-f': case '--facing':
        opts.spec = { ...opts.spec, facing: args[++i] as BaseFace } as PoseSpec;
        break;
      case '-h': case '--head-up':
        opts.spec = { ...opts.spec, headUp: args[++i] as BaseFace } as PoseSpec;
        break;
      case '-rx': case '--rotate-x':
        opts.spec = { axis: 'X', angle: Number(args[++i]) };
        break;
      case '-ry': case '--rotate-y':
        opts.spec = { axis: 'Y', angle: Number(args[++i]) };
        break;
      case '-rz': case '--rotate-z':
        opts.spec = { axis: 'Z', angle: Number(args[++i]) };
        break;
      case '-i': case '--input':
        opts.inputFile = args[++i];
        break;
      case '-o': case '--output':
        opts.outputFile = args[++i];
        break;
      case '--pretty':
        opts.pretty = true;
        break;
      case '--json':
        opts.json = true;
        break;
      case '--compact':
        opts.compact = true;
        break;
      case '--help':
        opts.help = true;
        break;
      case '--version':
        opts.version = true;
        break;
      default:
        if (!arg.startsWith('-') && !opts.formula && !opts.inputFile) {
          opts.formula = arg;
        }
    }
  }

  return opts;
}

export function printHelp(): void {
  console.log(`cube-convert — Magic Cube Formula Converter

Usage:
  cube-convert <formula> [options]
  echo <formula> | cube-convert [options]

Options:
  -f, --facing <face>    Face you're looking at (R/L/U/D/F/B, default: F)
  -h, --head-up <face>   Direction your head points (R/L/U/D/F/B, default: U)
  -rx, --rotate-x <deg>  Rotate observer around X axis (degrees)
  -ry, --rotate-y <deg>  Rotate observer around Y axis (degrees)
  -rz, --rotate-z <deg>  Rotate observer around Z axis (degrees)
  -i, --input <file>     Read formula from file
  -o, --output <file>    Write result to file
  --pretty               Color-highlighted output
  --json                 Output as JSON
  --compact              Remove all spaces from output
  --help                 Show this help
  --version              Show version

Examples:
  cube-convert "R U R' U'" --facing L
  echo "M2 E S'" | cube-convert -ry 90
  cube-convert -i scramble.txt -o result.txt -f B`);
}
