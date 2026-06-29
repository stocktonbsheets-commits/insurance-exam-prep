"use client";

import { useState } from "react";

const SAMPLE_QUESTIONS = [
  {
    question: "3. The coinsurance clause in a property policy penalizes:",
    options: ["Multiple insurers", "Underinsuring", "Overinsuring", "Filing too many claims"],
    correctIndex: 1,
    explanation:
      "Coinsurance penalizes carrying less coverage than required — the payout is reduced using (insurance carried ÷ insurance required) × loss.",
  },
  {
    question: "1. Which type of life insurance has no cash value?",
    options: ["Whole life", "Universal life", "Term life", "Variable life"],
    correctIndex: 2,
    explanation:
      "Term life is pure death-benefit protection for a fixed period with no savings component — that's why it's the cheapest form of life insurance.",
  },
  {
    question: "2. An umbrella policy pays out:",
    options: [
      "Before the underlying policy",
      "Instead of the underlying policy",
      "Only after underlying limits are exhausted",
      "Only for auto claims",
    ],
    correctIndex: 2,
    explanation:
      "Umbrella coverage only kicks in after underlying policy limits are exhausted — it never replaces primary liability coverage.",
  },
];

export function ProductPreview() {
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const q = SAMPLE_QUESTIONS[index];

  function next() {
    setIndex((i) => (i + 1) % SAMPLE_QUESTIONS.length);
    setSelected(null);
  }

  return (
    <div className="mx-auto w-full max-w-lg overflow-hidden rounded-2xl bg-background shadow-xl shadow-black/10 ring-1 ring-black/[.08] dark:ring-white/[.1]">
      <div className="flex items-center gap-2 border-b border-black/[.06] bg-zinc-50 px-4 py-2.5 dark:border-white/[.08] dark:bg-zinc-900">
        <span className="h-2.5 w-2.5 rounded-full bg-zinc-300 dark:bg-zinc-700" />
        <span className="h-2.5 w-2.5 rounded-full bg-zinc-300 dark:bg-zinc-700" />
        <span className="h-2.5 w-2.5 rounded-full bg-zinc-300 dark:bg-zinc-700" />
        <span className="ml-2 rounded-full bg-white px-3 py-0.5 text-xs text-zinc-400 dark:bg-zinc-800">
          idahoexamprep.com/quiz
        </span>
      </div>

      <div className="p-5 text-left">
        <p className="text-xs font-medium text-zinc-400">
          Try it yourself — click an answer
        </p>
        <p className="mt-2 text-sm font-medium text-zinc-900 dark:text-zinc-50">
          {q.question}
        </p>

        <div className="mt-3 flex flex-col gap-2 text-sm">
          {q.options.map((option, i) => {
            const isCorrect = selected !== null && i === q.correctIndex;
            const isWrongSelected = selected === i && i !== q.correctIndex;
            return (
              <button
                key={i}
                onClick={() => setSelected(i)}
                disabled={selected !== null}
                className={[
                  "rounded-md border px-3 py-2 text-left transition-all",
                  isCorrect
                    ? "border-green-500 bg-green-50 font-medium text-green-800 dark:bg-green-950 dark:text-green-300"
                    : isWrongSelected
                    ? "border-red-500 bg-red-50 text-red-800 dark:bg-red-950 dark:text-red-300"
                    : "border-black/[.08] text-zinc-600 hover:border-brand-300 dark:border-white/[.1] dark:text-zinc-400",
                  selected === null ? "cursor-pointer" : "cursor-default",
                ].join(" ")}
              >
                {option}
              </button>
            );
          })}
        </div>

        {selected !== null && (
          <>
            <div className="mt-3 rounded-md border-l-2 border-brand-500 bg-brand-50 p-3 text-xs text-brand-900 dark:bg-brand-900/30 dark:text-brand-100">
              <span className="font-semibold">
                {selected === q.correctIndex ? "Correct — why: " : "Why: "}
              </span>
              {q.explanation}
            </div>
            <button
              onClick={next}
              className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-brand-600 hover:underline dark:text-brand-300"
            >
              Try another question
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 6 6 6-6 6" /></svg>
            </button>
          </>
        )}
      </div>
    </div>
  );
}
