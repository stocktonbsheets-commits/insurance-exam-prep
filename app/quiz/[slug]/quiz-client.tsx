"use client";

import { useEffect, useState } from "react";
import type { Question } from "@/lib/questions";
import { shuffle } from "@/lib/shuffle";

type StoredHistory = {
  lastScore: number;
  lastTotal: number;
  attempts: number;
};

function storageKey(slug: string) {
  return `quiz-history:${slug}`;
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

function freshQuiz(questions: Question[], count: number) {
  const randomized = randomizeQuestions(questions, count);
  return { displayQuestions: randomized, answers: randomized.map(() => null) };
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
  const count = Math.min(questionCount ?? 8, questions.length);
  const [displayQuestions, setDisplayQuestions] = useState<Question[]>([]);
  const [answers, setAnswers] = useState<(number | null)[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [history, setHistory] = useState<StoredHistory | null>(null);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const raw = window.localStorage.getItem(storageKey(slug));
    if (raw) {
      try {
        setHistory(JSON.parse(raw));
      } catch {
        // ignore malformed stored data
      }
    }
    const { displayQuestions, answers } = freshQuiz(questions, count);
    setDisplayQuestions(displayQuestions);
    setAnswers(answers);
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
    const updated: StoredHistory = {
      lastScore: score,
      lastTotal: displayQuestions.length,
      attempts: (history?.attempts ?? 0) + 1,
    };
    setHistory(updated);
    window.localStorage.setItem(storageKey(slug), JSON.stringify(updated));
  }

  function retake() {
    const next = freshQuiz(questions, count);
    setDisplayQuestions(next.displayQuestions);
    setAnswers(next.answers);
    setSubmitted(false);
  }

  if (!hydrated) {
    return null;
  }

  return (
    <div className="mt-8 flex flex-col gap-8">
      {history && !submitted && (
        <div className="rounded-lg border border-black/[.08] p-4 text-sm text-zinc-600 dark:border-white/[.145] dark:text-zinc-400">
          Last attempt: {history.lastScore} / {history.lastTotal} ({history.attempts}{" "}
          attempt{history.attempts === 1 ? "" : "s"} so far). This is a fresh set of
          questions in a new order.
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
        <div className="flex flex-col items-center gap-4 rounded-lg border border-black/[.08] p-4 text-center dark:border-white/[.145]">
          <p className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
            You scored {score} / {displayQuestions.length}
          </p>
          <button
            onClick={retake}
            className="h-12 rounded-full bg-foreground px-6 font-medium text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc]"
          >
            Retake with New Questions
          </button>
        </div>
      )}
    </div>
  );
}
