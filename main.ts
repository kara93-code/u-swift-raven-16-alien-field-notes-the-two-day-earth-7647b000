// Alien Field Notes: The Two Day Earth Review
// One-line review of planet Earth, written by an alien tourist.
// Writes the review to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR/entry.txt).
import { chmodSync, mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const REVIEW =
  "Earth: they take your water at security, then sell it back to you for $6. Four stars — the galaxy's politest robbery, and the clouds were lovely.";

function main(): void {
  // The gate needs 1–200 characters of real text: fail loudly instead of
  // ever writing an entry the judge cannot score.
  if (REVIEW.length < 1 || REVIEW.length > 200 || REVIEW.trim().length === 0) {
    throw new Error(`review must be 1-200 characters, got ${REVIEW.length}`);
  }
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  const outFile = join(outDir, "entry.txt");
  writeFileSync(outFile, REVIEW, {
    encoding: "utf8",
    mode: 0o644,
  });
  // writeFileSync's mode is masked by umask: force 0644 so the grader
  // can always read the entry.
  chmodSync(outFile, 0o644);
}

main();
