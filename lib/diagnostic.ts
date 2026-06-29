import { modules, type Module } from "@/lib/content";
import { questionsBySlug, type Question } from "@/lib/questions";
import { shuffle } from "@/lib/shuffle";

export type DiagnosticQuestion = Question & {
  moduleSlug: string;
  moduleTitle: string;
};

const QUESTIONS_PER_MODULE = 2;

export function buildDiagnostic(track: Module["track"]): DiagnosticQuestion[] {
  const trackModules = modules.filter((m) => m.track === track);
  const picked = trackModules.flatMap((m) => {
    const bank = questionsBySlug[m.slug] ?? [];
    return shuffle(bank)
      .slice(0, QUESTIONS_PER_MODULE)
      .map((q) => ({ ...q, moduleSlug: m.slug, moduleTitle: m.title }));
  });
  return shuffle(picked);
}

export type WeakArea = {
  moduleSlug: string;
  moduleTitle: string;
  correct: number;
  total: number;
};

export function weakAreas(
  questions: DiagnosticQuestion[],
  answers: (number | null)[]
): WeakArea[] {
  const byModule = new Map<string, WeakArea>();
  questions.forEach((q, i) => {
    const entry =
      byModule.get(q.moduleSlug) ??
      { moduleSlug: q.moduleSlug, moduleTitle: q.moduleTitle, correct: 0, total: 0 };
    entry.total += 1;
    if (answers[i] === q.correctIndex) entry.correct += 1;
    byModule.set(q.moduleSlug, entry);
  });
  return Array.from(byModule.values()).sort(
    (a, b) => a.correct / a.total - b.correct / b.total
  );
}
