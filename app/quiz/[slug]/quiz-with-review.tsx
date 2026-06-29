"use client";

import { useEffect, useState } from "react";
import type { Question } from "@/lib/questions";
import { getMissed } from "@/lib/missed";
import { Quiz } from "./quiz-client";

export function QuizWithReview({ slug, questions }: { slug: string; questions: Question[] }) {
  const [mode, setMode] = useState<"full" | "missed">("full");
  const [missed, setMissed] = useState<Question[]>([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setMissed(getMissed(slug));
    setHydrated(true);
  }, [slug]);

  function refreshMissed() {
    setMissed(getMissed(slug));
  }

  if (!hydrated) return null;

  return (
    <div>
      <div className="mt-6 flex items-center gap-2">
        <button
          onClick={() => {
            refreshMissed();
            setMode("full");
          }}
          className={[
            "rounded-full px-4 py-1.5 text-sm font-medium transition-colors",
            mode === "full"
              ? "bg-brand-600 text-white"
              : "border border-black/[.08] text-zinc-600 hover:bg-black/[.04] dark:border-white/[.145] dark:text-zinc-400 dark:hover:bg-white/[.06]",
          ].join(" ")}
        >
          Full quiz
        </button>
        <button
          onClick={() => {
            refreshMissed();
            setMode("missed");
          }}
          className={[
            "rounded-full px-4 py-1.5 text-sm font-medium transition-colors",
            mode === "missed"
              ? "bg-brand-600 text-white"
              : "border border-black/[.08] text-zinc-600 hover:bg-black/[.04] dark:border-white/[.145] dark:text-zinc-400 dark:hover:bg-white/[.06]",
          ].join(" ")}
        >
          Review missed ({missed.length})
        </button>
      </div>

      {mode === "full" ? (
        <Quiz key="full" slug={slug} questions={questions} />
      ) : missed.length === 0 ? (
        <div className="mt-8 rounded-lg border border-black/[.08] p-4 text-sm text-zinc-600 dark:border-white/[.145] dark:text-zinc-400">
          Nothing missed yet on this module — nice work. Take the full quiz
          and anything you get wrong will show up here for focused review.
        </div>
      ) : (
        <Quiz
          key="missed"
          slug={`${slug}-missed-review`}
          questions={missed}
          questionCount={missed.length}
          missedTrackingSlug={slug}
        />
      )}
    </div>
  );
}
