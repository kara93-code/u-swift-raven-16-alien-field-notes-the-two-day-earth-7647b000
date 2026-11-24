// Alien Field Notes: The Two Day Earth Review
// One-line review of planet Earth, written by an alien tourist.
// Writes the review to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR/entry.txt).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const REVIEW =
  "Earth: they take your water at security, then sell it back to you for $6. Four stars — the galaxy's politest robbery, and the clouds were lovely.";

function main(): void {
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), REVIEW, "utf8");
}

main();
