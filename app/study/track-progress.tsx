"use client";

import { useEffect, useState } from "react";
import { readHistory } from "../quiz/[slug]/quiz-client";

export function TrackProgress({ slugs }: { slugs: string[] }) {
  const [started, setStarted] = useState<number | null>(null);

  useEffect(() => {
    const count = slugs.filter((slug) => readHistory(slug) !== null).length;
    setStarted(count);
  }, [slugs]);

  if (started === null) return null;

  const percent = Math.round((started / slugs.length) * 100);

  return (
    <div className="mt-3 flex items-center gap-3">
      <div className="h-1.5 w-full max-w-xs overflow-hidden rounded-full bg-zinc-200 dark:bg-zinc-800">
        <div
          className="h-full rounded-full bg-brand-500 transition-all"
          style={{ width: `${percent}%` }}
        />
      </div>
      <span className="shrink-0 text-xs font-medium text-zinc-500">
        {started}/{slugs.length} started
      </span>
    </div>
  );
}
