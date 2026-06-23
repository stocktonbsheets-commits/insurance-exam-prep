import Link from "next/link";
import { modules, tracks } from "@/lib/content";
import { questionsBySlug } from "@/lib/questions";

export default function QuizIndexPage() {
  return (
    <main className="mx-auto w-full max-w-3xl flex-1 px-6 py-16">
      <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
        Practice Quizzes
      </h1>
      <p className="mt-2 text-zinc-600 dark:text-zinc-400">
        Pick a topic to test what you know.
      </p>

      {Object.entries(tracks).map(([trackKey, trackLabel]) => (
        <section key={trackKey} className="mt-10">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
            {trackLabel}
          </h2>
          <ul className="mt-4 flex flex-col gap-3">
            {modules
              .filter((m) => m.track === trackKey)
              .map((m) => (
                <li key={m.slug}>
                  <Link
                    href={`/quiz/${m.slug}`}
                    className="flex items-center justify-between rounded-lg border border-black/[.08] p-4 transition-colors hover:bg-black/[.03] dark:border-white/[.145] dark:hover:bg-white/[.06]"
                  >
                    <span className="font-medium text-zinc-900 dark:text-zinc-50">
                      {m.title}
                    </span>
                    <span className="text-sm text-zinc-500">
                      {questionsBySlug[m.slug]?.length ?? 0} questions
                    </span>
                  </Link>
                </li>
              ))}
          </ul>
        </section>
      ))}
    </main>
  );
}
