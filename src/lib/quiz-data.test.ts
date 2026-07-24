import { describe, it, expect } from "vitest";
import { readFileSync } from "node:fs";
import { manifestSchema, sectionDataSchema } from "./quiz-data";

function loadJson(path: string): unknown {
  return JSON.parse(readFileSync(path, "utf-8"));
}

describe("wygenerowane dane spełniają schemat zod", () => {
  it("index.json parsuje się przez manifestSchema", () => {
    const manifest = manifestSchema.parse(loadJson("public/data/index.json"));
    expect(manifest.sections.length).toBeGreaterThan(0);
    const sumaZLicznikow = manifest.sections.reduce((n, s) => n + s.questionCount, 0);
    expect(manifest.totalQuestions).toBe(sumaZLicznikow);
  });

  it("każdy plik działu parsuje się i ma zgodną liczbę pytań", () => {
    const manifest = manifestSchema.parse(loadJson("public/data/index.json"));
    for (const section of manifest.sections) {
      const data = sectionDataSchema.parse(loadJson(`public/data/${section.file}`));
      expect(data.questions.length).toBe(section.questionCount);
      expect(data.id).toBe(section.id);
    }
  });
});
