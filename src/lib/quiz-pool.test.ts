import { describe, it, expect } from "vitest";
import { shuffle, shuffleOptions, buildPool } from "./quiz-pool";
import type { Question, SectionData } from "./quiz-data";

function q(id: string, correct: 0 | 1 | 2 | 3): Question {
  return {
    id,
    section: "S",
    topic: "T",
    question: "Q?",
    options: ["a", "b", "c", "d"],
    correctIndex: correct,
    explanation: "",
    tags: [],
  };
}
function section(id: number, n: number): SectionData {
  return {
    id,
    title: `S${id}`,
    questions: Array.from({ length: n }, (_, i) => q(`${id}-t-${i}`, (i % 4) as 0 | 1 | 2 | 3)),
  };
}

describe("shuffle", () => {
  it("zwraca permutację, nie mutuje wejścia", () => {
    const input = [1, 2, 3, 4, 5];
    const out = shuffle(input, seq([0.5, 0.1, 0.9, 0.3]));
    expect(out).toHaveLength(5);
    expect([...out].sort()).toEqual([1, 2, 3, 4, 5]);
    expect(input).toEqual([1, 2, 3, 4, 5]);
  });
});

describe("shuffleOptions", () => {
  it("zachowuje poprawną treść na nowym correctIndex (dla dowolnego rng)", () => {
    for (let seed = 0; seed < 20; seed++) {
      const original = q("x", 2); // poprawna = "c"
      const r = shuffleOptions(original, mulberry32(seed));
      expect(r.options[r.correctIndex]).toBe("c");
      expect([...r.options].sort()).toEqual(["a", "b", "c", "d"]);
    }
  });
});

describe("buildPool", () => {
  it("łączy działy i przycina do liczby łącznej", () => {
    const pool = buildPool([section(1, 30), section(2, 30)], 20, mulberry32(1));
    expect(pool).toHaveLength(20);
  });
  it("'all' zwraca wszystkie pytania z sumy działów", () => {
    const pool = buildPool([section(1, 30), section(2, 30)], "all", mulberry32(1));
    expect(pool).toHaveLength(60);
  });
  it("każde pytanie w puli ma zachowaną poprawną treść po losowaniu opcji", () => {
    const pool = buildPool([section(1, 8)], "all", mulberry32(3));
    for (const item of pool) {
      expect(["a", "b", "c", "d"]).toContain(item.options[item.correctIndex]);
      expect([...item.options].sort()).toEqual(["a", "b", "c", "d"]);
    }
  });
});

// deterministyczne rng do testów
function seq(values: number[]): () => number {
  let i = 0;
  return () => values[i++ % values.length];
}
function mulberry32(seed: number): () => number {
  let a = seed >>> 0;
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
