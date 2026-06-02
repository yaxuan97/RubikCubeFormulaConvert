#!/usr/bin/env node
import { parseArgs, printHelp } from './args.js';
import { convert, ParseError, ValidationError } from '@cube/core';
import { readFileSync, writeFileSync } from 'node:fs';

async function main() {
  const opts = parseArgs(process.argv);

  if (opts.help) {
    printHelp();
    process.exit(0);
  }

  if (opts.version) {
    const pkg = JSON.parse(readFileSync(new URL('../package.json', import.meta.url), 'utf-8'));
    console.log(pkg.version);
    process.exit(0);
  }

  // Get input
  let formula: string;
  if (opts.inputFile) {
    formula = readFileSync(opts.inputFile, 'utf-8').trim();
  } else if (opts.formula) {
    formula = opts.formula;
  } else if (!process.stdin.isTTY) {
    // Read from pipe
    const chunks: Buffer[] = [];
    for await (const chunk of process.stdin) {
      chunks.push(Buffer.from(chunk));
    }
    formula = Buffer.concat(chunks).toString('utf-8').trim();
  } else {
    console.error('Error: No formula provided. Use --help for usage.');
    process.exit(2);
  }

  try {
    const result = convert(formula, opts.spec);

    let output: string;
    if (opts.json) {
      output = JSON.stringify(result, null, 2);
    } else if (opts.compact) {
      output = result.output.replace(/\s/g, '');
    } else if (opts.pretty) {
      output = colorize(result.output);
    } else {
      output = result.output;
    }

    if (opts.outputFile) {
      writeFileSync(opts.outputFile, output + '\n');
    } else {
      console.log(output);
    }
  } catch (e) {
    if (e instanceof ParseError) {
      console.error(`Parse error: ${e.message}`);
      process.exit(1);
    } else if (e instanceof ValidationError) {
      console.error(`Validation error: ${e.message}`);
      process.exit(1);
    }
    throw e;
  }
}

function colorize(formula: string): string {
  const colors: Record<string, string> = {
    R: '\x1b[31m', L: '\x1b[38;5;208m',
    U: '\x1b[37m', D: '\x1b[33m',
    F: '\x1b[32m', B: '\x1b[34m',
    r: '\x1b[31m', l: '\x1b[38;5;208m',
    u: '\x1b[37m', d: '\x1b[33m',
    f: '\x1b[32m', b: '\x1b[34m',
  };
  const reset = '\x1b[0m';

  return formula.replace(/[RLUDFBrludfbMESxyz]['′’ʹ2]?/g, (match) => {
    const face = match[0];
    const color = colors[face] || '\x1b[36m';
    return color + match + reset;
  });
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
