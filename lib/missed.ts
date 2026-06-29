import type { Question } from "@/lib/questions";

function missedKey(slug: string) {
  return `quiz-missed:${slug}`;
}

export function getMissed(slug: string): Question[] {
  if (typeof window === "undefined") return [];
  const raw = window.localStorage.getItem(missedKey(slug));
  if (!raw) return [];
  try {
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

export function recordResult(slug: string, question: Question, wasCorrect: boolean) {
  if (typeof window === "undefined") return;
  const list = getMissed(slug);
  const idx = list.findIndex((q) => q.question === question.question);

  if (wasCorrect) {
    if (idx !== -1) list.splice(idx, 1);
  } else if (idx === -1) {
    list.push(question);
  } else {
    list[idx] = question;
  }

  window.localStorage.setItem(missedKey(slug), JSON.stringify(list));
}
