/**
 * Entrypoint for make.fun bounty:
 * Famous Last Words: The Funniest Epitaph (u-riidzhsn-famous-last-words-the-funniest-epitaph-ff177406)
 *
 * Deterministically writes a single-line tombstone epitaph to
 * $MAKEFUN_OUTPUT_DIR/entry.txt (or /output/entry.txt if unset).
 */

import * as fs from "node:fs";
import * as path from "node:path";

// Final polished epitaph: genuine twist, black comedy, single dying speech
const EPITAPH: string =
  "Don't call an ambulance, I'm just gathering evidence for a lawsuit.";

function run(): void {
  if (EPITAPH.length < 1 || EPITAPH.length > 150) {
    throw new Error(`Invalid epitaph length: ${EPITAPH.length} (must be 1..150 chars)`);
  }

  const outputDir: string = process.env.MAKEFUN_OUTPUT_DIR || "/output";
  fs.mkdirSync(outputDir, { recursive: true });

  const outputPath: string = path.join(outputDir, "entry.txt");
  fs.writeFileSync(outputPath, EPITAPH, { encoding: "utf8" });
}

run();
