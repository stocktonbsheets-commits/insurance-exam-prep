import Link from "next/link";
import { modules } from "@/lib/content";
import { questionsBySlug } from "@/lib/questions";

const TRACK_CARDS = [
  {
    key: "life-health" as const,
    label: "Life & Health",
    description: "Life insurance, health plans, annuities, Medicare, and Idaho L&H law.",
    gradient: "from-indigo-500 to-blue-600",
  },
  {
    key: "property-casualty" as const,
    label: "Property & Casualty",
    description: "Homeowners, auto, commercial liability, bonds, and Idaho P&C law.",
    gradient: "from-emerald-500 to-teal-600",
  },
];

export default function Home() {
  const totalQuestions = Object.values(questionsBySlug).reduce(
    (sum, qs) => sum + qs.length,
    0
  );

  return (
    <div className="flex flex-col flex-1 bg-gradient-to-b from-zinc-50 to-white dark:from-zinc-950 dark:to-black">
      <main className="mx-auto flex w-full max-w-4xl flex-col items-center gap-4 px-6 py-20 text-center">
        <span className="rounded-full bg-zinc-900 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-white dark:bg-zinc-50 dark:text-zinc-900">
          Free Idaho exam prep
        </span>
        <h1 className="mt-2 text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl dark:text-zinc-50">
          What are you studying for?
        </h1>
        <p className="max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
          Pick your license track to build a personalized study schedule built
          around your exam date — plus deep-dive lessons, quizzes, and a full
          practice exam.
        </p>

        <div className="mt-8 grid w-full gap-5 sm:grid-cols-2">
          {TRACK_CARDS.map((track) => {
            const count = modules.filter((m) => m.track === track.key).length;
            return (
              <Link
                key={track.key}
                href={`/schedule?track=${track.key}`}
                className="group relative overflow-hidden rounded-2xl border border-black/[.08] p-6 text-left shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg dark:border-white/[.145]"
              >
                <div
                  className={`absolute inset-0 -z-10 bg-gradient-to-br ${track.gradient} opacity-0 transition-opacity group-hover:opacity-10`}
                />
                <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
                  {track.label}
                </h2>
                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                  {track.description}
                </p>
                <p className="mt-4 text-sm font-medium text-zinc-900 dark:text-zinc-50">
                  {count} modules →
                </p>
              </Link>
            );
          })}
        </div>

        <Link
          href="/schedule"
          className="mt-3 text-sm font-medium text-zinc-600 hover:underline dark:text-zinc-400"
        >
          Studying for both? Build a combined schedule →
        </Link>

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
