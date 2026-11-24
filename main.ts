// One Word for the Boss — the entry is a single word describing the boss.
//
// The boss in question rules the office the way a feudal lord rules a
// manor: every request arrives as a decree, every deadline as an edict,
// and every "quick question" as an audience you did not ask for. The
// word has to land on its own, with no caption and no explanation, so
// it is the grandest title a subordinate can hand a manager with a
// straight face.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const BOSS_WORD = "Overlord";

// The gate only accepts UTF-8 text of 1 to 30 characters that is not
// only white space, and the judge only scores a single word, so refuse
// to write anything that would fail either check.
if (
  BOSS_WORD.length < 1 ||
  BOSS_WORD.length > 30 ||
  BOSS_WORD.trim().length === 0 ||
  /\s/.test(BOSS_WORD)
) {
  throw new Error("entry word fails the 1-30 character single-word gate");
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), BOSS_WORD, "utf8");
