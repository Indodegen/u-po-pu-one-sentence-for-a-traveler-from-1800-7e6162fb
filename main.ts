// Copies the entry sentence, untouched, into the output folder.
// Keep it one sentence of at most 200 characters — the checker gate
// rejects anything longer, and entry.txt is copied out byte for byte, unchanged.
//
// The sentence lives in entry.txt next to this file. Whatever the grader
// asks for, the text that lands in the output is byte for byte the same.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// Anchor every path to this file's own folder, never to the working
// directory, so the program behaves the same no matter where it is run from.
const folder = dirname(fileURLToPath(import.meta.url));

// Read the sentence exactly as it stands beside this program.
const sentence = readFileSync(join(folder, "entry.txt"), "utf8");

// The grader sets MAKEFUN_OUTPUT_DIR; without it, use an "out" folder here.
const destination = process.env.MAKEFUN_OUTPUT_DIR || join(folder, "out");
mkdirSync(destination, { recursive: true });

// Write the sentence out unchanged, and print nothing.
writeFileSync(join(destination, "entry.txt"), sentence);
