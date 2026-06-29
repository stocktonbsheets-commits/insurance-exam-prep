import Link from "next/link";
import { notFound } from "next/navigation";
import { modules, tracks, videoSearchUrl } from "@/lib/content";
import { userHasTrackAccess } from "@/lib/billing";
import { estimatedMinutes, trackIconPath } from "@/lib/module-meta";
import { Paywall } from "../../paywall";

export function generateStaticParams() {
  return modules.map((m) => ({ slug: m.slug }));
}

export default async function ModulePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const module = modules.find((m) => m.slug === slug);

  if (!module) {
    notFound();
  }

  const unlocked = module.free || (await userHasTrackAccess(module.track));

  const isLifeHealth = module.track === "life-health";

  return (
    <div className="flex flex-1 flex-col">
      <div
        className={[
          "relative overflow-hidden bg-gradient-to-b to-background dark:to-background",
          isLifeHealth ? "from-brand-50/60 dark:from-brand-900/15" : "from-accent-50/60 dark:from-accent-900/15",
        ].join(" ")}
      >
        <svg
          className="pointer-events-none absolute -top-28 right-0 h-[380px] w-[560px] opacity-[0.06] dark:opacity-[0.1]"
          viewBox="0 0 600 400"
          fill="none"
          aria-hidden="true"
        >
          <circle cx="450" cy="100" r="170" fill={isLifeHealth ? "var(--color-brand-500)" : "var(--color-accent-500)"} />
        </svg>
        <div className="relative mx-auto w-full max-w-3xl px-6 pt-10 pb-8">
          <Link
            href="/study"
            className="inline-flex items-center gap-1 text-sm font-medium text-zinc-600 hover:text-brand-600 dark:text-zinc-400 dark:hover:text-brand-300"
          >
            ← Back to Study Plan
          </Link>

          <div className="mt-5 flex items-start gap-4">
            <span
              className={[
                "flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl shadow-sm",
                isLifeHealth
                  ? "bg-brand-100 text-brand-700 dark:bg-brand-900/50 dark:text-brand-200"
                  : "bg-accent-100 text-accent-700 dark:bg-accent-900/50 dark:text-accent-200",
              ].join(" ")}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d={trackIconPath(module.track)} />
              </svg>
            </span>
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-zinc-500">
                {tracks[module.track]}
              </p>
              <h1 className="mt-0.5 text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50">
                {module.title}
              </h1>
              <div className="mt-2 flex flex-wrap items-center gap-3 text-sm text-zinc-600 dark:text-zinc-400">
                <span>{module.summary}</span>
                <span className="shrink-0 rounded-full bg-white/70 px-2.5 py-0.5 text-xs font-medium text-zinc-500 shadow-sm dark:bg-zinc-800/70 dark:text-zinc-400">
                  ~{estimatedMinutes(module)} min
                </span>
              </div>
              {unlocked && (
                <div className="mt-4 flex flex-wrap items-center gap-3">
                  <Link
                    href={`/quiz/${module.slug}`}
                    className="inline-flex h-10 items-center justify-center gap-1.5 rounded-full bg-brand-600 px-5 text-sm font-medium text-white transition-colors hover:bg-brand-700"
                  >
                    Skip straight to the quiz
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 6 6 6-6 6" /></svg>
                  </Link>
                  <span className="text-xs text-zinc-500">
                    Prefer to read first? Keep scrolling.
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <main className="mx-auto w-full max-w-3xl flex-1 px-6 pb-16">
      {!unlocked && <Paywall track={module.track} title={module.title} />}

      {unlocked && (
        <>
      <a
        href={videoSearchUrl(module.videoSearch)}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 flex items-center gap-3 rounded-lg border border-black/[.08] p-3 text-sm transition-colors hover:bg-black/[.03] dark:border-white/[.145] dark:hover:bg-white/[.06]"
      >
        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-zinc-100 text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400">
          ▶
        </span>
        <span className="text-zinc-600 dark:text-zinc-400">
          Search YouTube for extra explanations on {module.title}
        </span>
      </a>

      <div className="mt-10 flex items-center gap-2">
        <span
          className={[
            "flex h-8 w-8 items-center justify-center rounded-lg",
            isLifeHealth
              ? "bg-brand-50 text-brand-600 dark:bg-brand-900/40 dark:text-brand-200"
              : "bg-accent-50 text-accent-600 dark:bg-accent-900/40 dark:text-accent-200",
          ].join(" ")}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z" />
          </svg>
        </span>
        <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
          Key Concepts
        </h2>
      </div>
      <div className="mt-4 flex flex-col gap-4">
        {module.concepts.map((concept, i) => (
          <div
            key={i}
            className={[
              "rounded-xl border p-4 shadow-sm shadow-black/[.02]",
              isLifeHealth
                ? "border-black/[.06] bg-gradient-to-br from-background to-brand-50/20 dark:border-white/[.1] dark:to-brand-900/10"
                : "border-black/[.06] bg-gradient-to-br from-background to-accent-50/20 dark:border-white/[.1] dark:to-accent-900/10",
            ].join(" ")}
          >
            <div className="flex items-start gap-3">
              <span
                className={[
                  "mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold",
                  isLifeHealth
                    ? "bg-brand-100 text-brand-700 dark:bg-brand-900/50 dark:text-brand-200"
                    : "bg-accent-100 text-accent-700 dark:bg-accent-900/50 dark:text-accent-200",
                ].join(" ")}
              >
                {i + 1}
              </span>
              <div className="min-w-0 flex-1">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-medium text-zinc-900 dark:text-zinc-50">
                    {concept.title}
                  </h3>
                  <a
                    href={videoSearchUrl(`${concept.title} ${module.title} insurance exam`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 text-xs font-medium text-zinc-400 hover:underline dark:text-zinc-500"
                  >
                    ▶ Watch
                  </a>
                </div>
                <p className="mt-2 text-zinc-700 dark:text-zinc-300">
                  {concept.explanation}
                </p>
                <p className="mt-3 rounded-md border-l-2 border-brand-500 bg-brand-50 p-3 text-sm text-brand-900 dark:bg-brand-900/30 dark:text-brand-100">
                  <span className="font-semibold">Exam focus: </span>
                  {concept.examFocus}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 flex items-center gap-2">
        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m21.7 18-8-14a2 2 0 0 0-3.4 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.7-3Z" /><path d="M12 9v4" /><path d="M12 17h.01" />
          </svg>
        </span>
        <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
          Watch Out For This on the Exam
        </h2>
      </div>
      <ul className="mt-4 flex flex-col gap-4">
        {module.examTraps.map((trap, i) => (
          <li
            key={i}
            className="flex gap-3 rounded-xl border border-amber-300 bg-gradient-to-br from-amber-50 to-amber-50/40 p-4 text-amber-900 shadow-sm shadow-black/[.02] dark:border-amber-800 dark:from-amber-950 dark:to-amber-950/60 dark:text-amber-200"
          >
            <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-200 text-xs font-bold text-amber-800 dark:bg-amber-800 dark:text-amber-200">
              !
            </span>
            <span>{trap}</span>
          </li>
        ))}
      </ul>

      <div
        className={[
          "mt-10 flex flex-wrap items-center justify-between gap-4 rounded-2xl p-6 shadow-sm",
          isLifeHealth
            ? "bg-gradient-to-br from-brand-600 to-brand-800"
            : "bg-gradient-to-br from-accent-500 to-accent-700",
        ].join(" ")}
      >
        <div>
          <p className="font-semibold text-white">Ready to test yourself?</p>
          <p className="text-sm text-white/80">
            {module.concepts.length} concepts, instant feedback on every question.
          </p>
        </div>
        <Link
          href={`/quiz/${module.slug}`}
          className="inline-flex h-11 shrink-0 items-center justify-center rounded-full bg-white px-6 font-medium text-zinc-900 transition-colors hover:bg-zinc-100"
        >
          Take the quiz for this module
        </Link>
      </div>
        </>
      )}
      </main>
    </div>
  );
}
