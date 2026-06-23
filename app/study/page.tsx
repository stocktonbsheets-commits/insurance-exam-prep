import Link from "next/link";
import { modules, tracks } from "@/lib/content";

export default function StudyPage() {
  return (
    <main className="mx-auto w-full max-w-3xl flex-1 px-6 py-16">
      <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
        Study Plan
      </h1>
      <p className="mt-2 text-zinc-600 dark:text-zinc-400">
        Work through each module at your own pace, then take the matching quiz.
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
                    href={`/study/${m.slug}`}
                    className="block rounded-lg border border-black/[.08] p-4 transition-colors hover:bg-black/[.03] dark:border-white/[.145] dark:hover:bg-white/[.06]"
                  >
                    <div className="font-medium text-zinc-900 dark:text-zinc-50">
                      {m.title}
                    </div>
                    <div className="text-sm text-zinc-600 dark:text-zinc-400">
                      {m.summary}
                    </div>
                  </Link>
                </li>
              ))}
          </ul>
        </section>
      ))}
    </main>
  );
}
