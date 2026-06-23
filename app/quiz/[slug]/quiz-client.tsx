"use client";

import { useEffect, useState } from "react";
import type { Question } from "@/lib/questions";
import { shuffle } from "@/lib/shuffle";

type StoredResult = {
  questions: Question[];
  answers: (number | null)[];
  score: number;
};

function storageKey(slug: string) {
  return `quiz-result:${slug}`;
}

function randomizeQuestions(questions: Question[], count: number): Question[] {
  return shuffle(questions)
    .slice(0, count)
    .map((q) => {
      const optionOrder = shuffle(q.options.map((_, i) => i));
      return {
        question: q.question,
        options: optionOrder.map((i) => q.options[i]),
        correctIndex: optionOrder.indexOf(q.correctIndex),
      };
    });
}

export function Quiz({
  slug,
  questions,
  questionCount,
}: {
  slug: string;
  questions: Question[];
  questionCount?: number;
}) {
  const [displayQuestions, setDisplayQuestions] = useState<Question[]>([]);
  const [answers, setAnswers] = useState<(number | null)[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [locked, setLocked] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const raw = window.localStorage.getItem(storageKey(slug));
    if (raw) {
      try {
        const stored: StoredResult = JSON.parse(raw);
        setDisplayQuestions(stored.questions);
        setAnswers(stored.answers);
        setSubmitted(true);
        setLocked(true);
        setHydrated(true);
        return;
      } catch {
        // ignore malformed stored data, fall through to a fresh quiz
      }
    }
    const randomized = randomizeQuestions(questions, questionCount ?? questions.length);
    setDisplayQuestions(randomized);
    setAnswers(randomized.map(() => null));
    setHydrated(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slug]);

  const score = answers.reduce(
    (total: number, answer, i) =>
      total + (answer === displayQuestions[i]?.correctIndex ? 1 : 0),
    0
  );

  function selectAnswer(questionIndex: number, optionIndex: number) {
    if (submitted) return;
    setAnswers((prev) => {
      const next = [...prev];
      next[questionIndex] = optionIndex;
      return next;
    });
  }

  function submit() {
    setSubmitted(true);
    setLocked(true);
    window.localStorage.setItem(
      storageKey(slug),
      JSON.stringify({ questions: displayQuestions, answers, score })
    );
  }

  if (!hydrated) {
    return null;
  }

  return (
    <div className="mt-8 flex flex-col gap-8">
      {locked && (
        <div className="rounded-lg border border-amber-400 bg-amber-50 p-4 text-sm text-amber-800 dark:border-amber-700 dark:bg-amber-950 dark:text-amber-200">
          You&apos;ve already taken this quiz. Here are your submitted answers
          and score.
        </div>
      )}

      {displayQuestions.map((q, qi) => (
        <div
          key={qi}
          className="rounded-lg border border-black/[.08] p-4 dark:border-white/[.145]"
        >
          <p className="font-medium text-zinc-900 dark:text-zinc-50">
            {qi + 1}. {q.question}
          </p>
          <div className="mt-3 flex flex-col gap-2">
            {q.options.map((option, oi) => {
              const isSelected = answers[qi] === oi;
              const isCorrect = submitted && oi === q.correctIndex;
              const isWrongSelected =
                submitted && isSelected && oi !== q.correctIndex;

              return (
                <button
                  key={oi}
                  onClick={() => selectAnswer(qi, oi)}
                  disabled={submitted}
                  className={[
                    "rounded-md border px-3 py-2 text-left text-sm transition-colors",
                    isCorrect
                      ? "border-green-500 bg-green-50 dark:bg-green-950"
                      : isWrongSelected
                      ? "border-red-500 bg-red-50 dark:bg-red-950"
                      : isSelected
                      ? "border-zinc-900 dark:border-zinc-50"
                      : "border-black/[.08] dark:border-white/[.145]",
                    submitted ? "cursor-default" : "",
                  ].join(" ")}
                >
                  {option}
                </button>
              );
            })}
          </div>
        </div>
      ))}

      {!submitted ? (
        <button
          onClick={submit}
          disabled={answers.some((a) => a === null)}
          className="h-12 rounded-full bg-foreground px-6 font-medium text-background transition-colors hover:bg-[#383838] disabled:opacity-40 dark:hover:bg-[#ccc]"
        >
          Submit Answers
        </button>
      ) : (
        <div className="rounded-lg border border-black/[.08] p-4 text-center dark:border-white/[.145]">
          <p className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
            You scored {score} / {displayQuestions.length}
          </p>
        </div>
      )}
    </div>
  );
}
