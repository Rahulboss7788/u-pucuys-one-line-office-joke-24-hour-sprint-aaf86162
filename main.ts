// SPDX-License-Identifier: MIT
// One-Line Office Joke entry for make.fun competition
// u-pucuys-one-line-office-joke-24-hour-sprint-aaf86162
//
// Writes a single original joke about the meeting that should have been
// an email to /output/entry.txt.
// Run with Node 22: `node main.ts`

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// The joke: the meeting that should have been an email ends with one
// action item — another meeting, so everyone can read the email out loud.
const LINE =
  "The meeting that should have been an email ended with one action item: another meeting, so we could all read the email out loud together.";

const OUTPUT = "/output/entry.txt";

mkdirSync(dirname(OUTPUT), { recursive: true });
writeFileSync(OUTPUT, LINE, "utf8");

// Read-back self-check: the gate needs 1–200 characters of real text.
const written = readFileSync(OUTPUT, "utf8");
if (written !== LINE) throw new Error("read-back mismatch: entry.txt differs from the line");
if ([...written].length < 1 || [...written].length > 200) {
  throw new Error(`entry length ${[...written].length} is outside the 1–200 character gate`);
}
if (written.trim().length === 0) throw new Error("entry is only whitespace");
console.log(`Wrote ${[...LINE].length} characters to ${OUTPUT} (read-back verified)`);
