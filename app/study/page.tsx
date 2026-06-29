import Link from "next/link";
import { modules, tracks } from "@/lib/content";
import { MasteryBadge } from "./mastery-badge";
import { TrackProgress } from "./track-progress";
import { getCurrentUserPurchasedTracks, hasTrackAccess } from "@/lib/billing";
import {
  CATEGORY_ORDER,
  categoryFor,
  categoryIconPath,
  estimatedMinutes,
  trackIconPath,
} from "@/lib/module-meta";

export default async function StudyPage() {
  const purchasedTracks = await getCurrentUserPurchasedTracks();

  return (
    <div className="flex flex-1 flex-col">
      <div className="relative overflow-hidden bg-gradient-to-b from-brand-50/50 to-background dark:from-brand-900/15 dark:to-background">
        <svg
          className="pointer-events-none absolute -top-32 right-0 h-[400px] w-[600px] opacity-[0.06] dark:opacity-[0.1]"
          viewBox="0 0 600 400"
          fill="none"
          aria-hidden="true"
        >
          <circle cx="450" cy="100" r="180" fill="var(--color-brand-500)" />
          <circle cx="200" cy="250" r="140" fill="var(--color-accent-400)" />
        </svg>
        <div className="relative mx-auto w-full max-w-3xl px-6 pt-16 pb-10">
          <h1 className="text-3xl font-extrabold tracking-tight text-zinc-900 sm:text-4xl dark:text-zinc-50">
            Study Plan
          </h1>
          <p className="mt-2 max-w-xl text-zinc-600 dark:text-zinc-400">
            Work through each module at your own pace, then take the matching
            quiz. The first module in each track is free — the rest unlock with{" "}
            <Link href="/pricing" className="font-medium text-brand-600 hover:underline dark:text-brand-300">
              full access
            </Link>
            .
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link
              href="/quiz"
              className="inline-flex items-center gap-1.5 rounded-full border border-black/[.08] bg-background px-4 py-1.5 text-sm font-medium text-zinc-700 shadow-sm transition-colors hover:border-brand-300 dark:border-white/[.145] dark:text-zinc-300"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M9.5 9a2.5 2.5 0 1 1 3.5 2.3c-.7.4-1.2 1-1.2 1.9" /><path d="M12 17h.01" /></svg>
              Browse all quizzes
            </Link>
            <Link
              href="/schedule"
              className="inline-flex items-center gap-1.5 rounded-full border border-black/[.08] bg-background px-4 py-1.5 text-sm font-medium text-zinc-700 shadow-sm transition-colors hover:border-brand-300 dark:border-white/[.145] dark:text-zinc-300"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" /></svg>
              Build a study schedule
            </Link>
          </div>
        </div>
      </div>

      <main className="mx-auto w-full max-w-3xl flex-1 px-6 pb-16">
      {Object.entries(tracks).map(([trackKey, trackLabel]) => {
        const trackModules = modules.filter((m) => m.track === trackKey);

        return (
          <section key={trackKey} className="mt-10">
            <h2 className="flex items-center gap-2 text-xl font-semibold text-zinc-900 dark:text-zinc-50">
              <span
                className={[
                  "flex h-7 w-7 items-center justify-center rounded-lg",
                  trackKey === "life-health"
                    ? "bg-brand-50 text-brand-600 dark:bg-brand-900/40 dark:text-brand-200"
                    : "bg-accent-50 text-accent-600 dark:bg-accent-900/40 dark:text-accent-200",
                ].join(" ")}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d={trackIconPath(trackKey as "life-health" | "property-casualty")} />
                </svg>
              </span>
              {trackLabel}
            </h2>
            <TrackProgress slugs={trackModules.map((m) => m.slug)} />

            {CATEGORY_ORDER.map((category) => {
              const categoryModules = trackModules.filter(
                (m) => categoryFor(m.slug) === category
              );
              if (categoryModules.length === 0) return null;

              return (
                <div key={category} className="mt-6">
                  <div className="flex items-center gap-2 text-sm font-semibold text-zinc-500 dark:text-zinc-400">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d={categoryIconPath(category)} />
                    </svg>
                    {category}
                  </div>
                  <ul className="mt-3 flex flex-col gap-3">
                    {categoryModules.map((m) => {
                      const locked = !m.free && !hasTrackAccess(purchasedTracks, m.track);
                      return (
                        <li key={m.slug}>
                          <div
                            className={[
                              "group flex items-center gap-4 rounded-2xl border-y border-r border-l-4 p-4 shadow-sm shadow-black/[.02] transition-all",
                              locked
                                ? "border-black/[.06] border-l-zinc-200 bg-zinc-50/50 dark:border-white/[.08] dark:border-l-zinc-700 dark:bg-zinc-900/40"
                                : m.track === "life-health"
                                ? "border-black/[.06] border-l-brand-500 bg-gradient-to-br from-background to-brand-50/30 hover:-translate-y-0.5 hover:shadow-md dark:border-white/[.1] dark:to-brand-900/20"
                                : "border-black/[.06] border-l-accent-500 bg-gradient-to-br from-background to-accent-50/30 hover:-translate-y-0.5 hover:shadow-md dark:border-white/[.1] dark:to-accent-900/20",
                            ].join(" ")}
                          >
                            <Link href={`/study/${m.slug}`} className="flex min-w-0 flex-1 items-center gap-4">
                              <span
                                className={[
                                  "flex h-11 w-11 shrink-0 items-center justify-center rounded-xl",
                                  locked
                                    ? "bg-zinc-100 text-zinc-400 dark:bg-zinc-800 dark:text-zinc-600"
                                    : m.track === "life-health"
                                    ? "bg-brand-50 text-brand-600 dark:bg-brand-900/40 dark:text-brand-200"
                                    : "bg-accent-50 text-accent-600 dark:bg-accent-900/40 dark:text-accent-200",
                                ].join(" ")}
                              >
                                <svg
                                  width="18"
                                  height="18"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                >
                                  <path d={trackIconPath(m.track)} />
                                </svg>
                              </span>

                              <div className="min-w-0 flex-1">
                                <div className="flex items-center gap-2 font-medium text-zinc-900 dark:text-zinc-50">
                                  {m.title}
                                </div>
                                <div className="text-sm text-zinc-600 dark:text-zinc-400">
                                  {m.summary}
                                </div>
                                <div className="mt-1 text-xs text-zinc-400">
                                  ~{estimatedMinutes(m)} min read
                                </div>
                              </div>
                            </Link>

                            {locked ? (
                              <span className="flex shrink-0 items-center gap-1 rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400">
                                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                  <rect x="4" y="11" width="16" height="10" rx="2" />
                                  <path d="M8 11V7a4 4 0 0 1 8 0v4" />
                                </svg>
                                Locked
                              </span>
                            ) : (
                              <div className="flex shrink-0 items-center gap-2">
                                <MasteryBadge slug={m.slug} />
                                <Link
                                  href={`/quiz/${m.slug}`}
                                  className="flex h-8 w-8 items-center justify-center rounded-full border border-black/[.08] text-zinc-500 transition-colors hover:border-brand-300 hover:text-brand-600 dark:border-white/[.145] dark:text-zinc-400 dark:hover:text-brand-300"
                                  title="Jump to quiz"
                                >
                                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="m9 6 6 6-6 6" />
                                  </svg>
                                </Link>
                              </div>
                            )}
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })}
          </section>
        );
      })}
      </main>
    </div>
  );
}
