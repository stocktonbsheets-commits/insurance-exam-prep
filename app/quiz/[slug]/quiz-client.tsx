"use client";

import { useState } from "react";
import type { Question } from "@/lib/questions";

export function Quiz({ questions }: { questions: Question[] }) {
  const [answers, setAnswers] = useState<(number | null)[]>(
    questions.map(() => null)
  );
  const [submitted, setSubmitted] = useState(false);

  const score = answers.reduce(
    (total: number, answer, i) =>
      total + (answer === questions[i].correctIndex ? 1 : 0),
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

  return (
    <div className="mt-8 flex flex-col gap-8">
      {questions.map((q, qi) => (
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
                  className={[
                    "rounded-md border px-3 py-2 text-left text-sm transition-colors",
                    isCorrect
                      ? "border-green-500 bg-green-50 dark:bg-green-950"
                      : isWrongSelected
                      ? "border-red-500 bg-red-50 dark:bg-red-950"
                      : isSelected
                      ? "border-zinc-900 dark:border-zinc-50"
                      : "border-black/[.08] dark:border-white/[.145]",
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
          onClick={() => setSubmitted(true)}
          disabled={answers.some((a) => a === null)}
          className="h-12 rounded-full bg-foreground px-6 font-medium text-background transition-colors hover:bg-[#383838] disabled:opacity-40 dark:hover:bg-[#ccc]"
        >
          Submit Answers
        </button>
      ) : (
        <div className="rounded-lg border border-black/[.08] p-4 text-center dark:border-white/[.145]">
          <p className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
            You scored {score} / {questions.length}
          </p>
        </div>
      )}
    </div>
  );
}
