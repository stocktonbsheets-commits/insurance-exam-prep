"use client";

import { useEffect, useState } from "react";
import { readHistory } from "../quiz/[slug]/quiz-client";

export function MasteryBadge({ slug }: { slug: string }) {
  const [bestPercent, setBestPercent] = useState<number | null>(null);

  useEffect(() => {
    const history = readHistory(slug);
    setBestPercent(history?.bestPercent ?? null);
  }, [slug]);

  if (bestPercent === null) {
    return (
      <span className="shrink-0 rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400">
        Not started
      </span>
    );
  }

  const mastered = bestPercent >= 90;
  const passing = bestPercent >= 70;

  return (
    <span
      className={[
        "shrink-0 rounded-full px-3 py-1 text-xs font-semibold",
        mastered
          ? "bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300"
          : passing
          ? "bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300"
          : "bg-red-100 text-red-800 dark:bg-red-950 dark:text-red-300",
      ].join(" ")}
    >
      {mastered ? "Mastered" : `Best ${bestPercent}%`}
    </span>
  );
}
