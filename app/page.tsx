import Link from "next/link";
import { modules } from "@/lib/content";
import { questionsBySlug } from "@/lib/questions";
import { TrackPicker } from "./track-picker";

export default function Home() {
  const totalQuestions = Object.values(questionsBySlug).reduce(
    (sum, qs) => sum + qs.length,
    0
  );

  return (
    <div className="flex flex-col flex-1 bg-gradient-to-b from-zinc-50 to-white dark:from-zinc-950 dark:to-black">
      <main className="mx-auto flex w-full max-w-4xl flex-col items-center gap-4 px-6 py-20 text-center">
        <span className="rounded-full bg-zinc-900 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-white dark:bg-zinc-50 dark:text-zinc-900">
          Free exam prep — all 50 states
        </span>
        <h1 className="mt-2 text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl dark:text-zinc-50">
          What are you studying for?
        </h1>
        <p className="max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
          Pick your state and license track to build a personalized study
          schedule around your exam date — plus deep-dive lessons, quizzes,
          and a full practice exam.
        </p>

        <div className="mt-8 w-full">
          <TrackPicker />
        </div>

        <div className="mt-12 grid w-full grid-cols-3 gap-4 rounded-2xl border border-black/[.08] p-6 dark:border-white/[.145]">
          <div>
            <p className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">
              {modules.length}
            </p>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">Study modules</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">
              {totalQuestions}+
            </p>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">Practice questions</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">100%</p>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">Free, no signup</p>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/study"
            className="flex h-11 items-center justify-center rounded-full border border-black/[.08] px-6 text-sm font-medium transition-colors hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-white/[.06]"
          >
            Browse all study modules
          </Link>
          <Link
            href="/exam"
            className="flex h-11 items-center justify-center rounded-full border border-black/[.08] px-6 text-sm font-medium transition-colors hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-white/[.06]"
          >
            Jump to a practice exam
          </Link>
        </div>
      </main>
    </div>
  );
}
