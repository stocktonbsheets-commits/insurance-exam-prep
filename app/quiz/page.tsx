import Link from "next/link";
import { modules, tracks } from "@/lib/content";
import { questionsBySlug } from "@/lib/questions";
import { getCurrentUserPurchasedTracks, hasTrackAccess } from "@/lib/billing";

export default async function QuizIndexPage() {
  const purchasedTracks = await getCurrentUserPurchasedTracks();

  return (
    <main className="mx-auto w-full max-w-3xl flex-1 px-6 py-16">
      <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
        Practice Quizzes
      </h1>
      <p className="mt-2 text-zinc-600 dark:text-zinc-400">
        Pick a topic to test what you know.
      </p>

      {Object.entries(tracks).map(([trackKey, trackLabel]) => {
        const trackUnlocked = hasTrackAccess(purchasedTracks, trackKey as "life-health" | "property-casualty");
        return (
          <section key={trackKey} className="mt-10">
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
              {trackLabel}
            </h2>
            <ul className="mt-4 flex flex-col gap-3">
              <li>
                <Link
                  href={`/quiz/mixed/${trackKey}`}
                  className="flex items-center justify-between rounded-lg border border-zinc-900 p-4 transition-colors hover:bg-black/[.03] dark:border-zinc-50 dark:hover:bg-white/[.06]"
                >
                  <span className="font-medium text-zinc-900 dark:text-zinc-50">
                    Mixed Quiz (all topics){!trackUnlocked && " 🔒"}
                  </span>
                  <span className="text-sm text-zinc-500">12 random questions</span>
                </Link>
              </li>
              {modules
                .filter((m) => m.track === trackKey)
                .map((m) => {
                  const locked = !m.free && !trackUnlocked;
                  return (
                    <li
                      key={m.slug}
                      className="flex items-center gap-2 rounded-lg border border-black/[.08] dark:border-white/[.145]"
                    >
                      <Link
                        href={`/quiz/${m.slug}`}
                        className="flex flex-1 items-center justify-between rounded-l-lg p-4 transition-colors hover:bg-black/[.03] dark:hover:bg-white/[.06]"
                      >
                        <span className="font-medium text-zinc-900 dark:text-zinc-50">
                          {m.title}
                          {locked && <span className="ml-2 text-xs text-zinc-400">🔒</span>}
                        </span>
                        <span className="text-sm text-zinc-500">
                          {questionsBySlug[m.slug]?.length ?? 0} questions, shuffled
                        </span>
                      </Link>
                      <Link
                        href={`/challenge/${m.slug}`}
                        title="Timed Challenge: 25 seconds per question"
                        className="mr-2 shrink-0 rounded-full px-3 py-1.5 text-xs font-medium text-zinc-500 transition-colors hover:bg-black/[.05] hover:text-zinc-900 dark:hover:bg-white/[.08] dark:hover:text-zinc-50"
                      >
                        ⏱ Timed
                      </Link>
                    </li>
                  );
                })}
            </ul>
          </section>
        );
      })}
    </main>
  );
}
