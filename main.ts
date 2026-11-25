// Dear Production — a tiny apology CLI.
// Prints a single apology line, optionally SHOUTING it.

const LINE = "To the production database: I am sorry I treated your staging environment like a suggestion.";

const USAGE = `Usage: node main.ts [options]

Options:
  --shout   Print the apology in uppercase.
  --help    Show this help text and exit.`;

function renderLine(shout: boolean): string {
  return shout ? LINE.toUpperCase() : LINE;
}

function hasFlag(flag: string): boolean {
  const args = process.argv.slice(2);
  return args.some((arg) => arg === flag);
}

function main(): void {
  if (hasFlag("--help")) {
    console.error(USAGE);
    return;
  }

  console.log(renderLine(hasFlag("--shout")));
}

main();
