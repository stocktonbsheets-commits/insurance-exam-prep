import Link from "next/link";
import { modules } from "@/lib/content";
import { questionsBySlug } from "@/lib/questions";
import { TrackPicker } from "./track-picker";
import { TestimonialsSection } from "./testimonials-section";
import { ProductPreview } from "./product-preview";

export default function Home() {
  const totalQuestions = Object.values(questionsBySlug).reduce(
    (sum, qs) => sum + qs.length,
    0
  );

  return (
    <div className="relative flex flex-col flex-1 overflow-hidden bg-gradient-to-b from-brand-50/40 to-background dark:from-brand-900/10 dark:to-background">
      <svg
        className="pointer-events-none absolute -top-24 left-1/2 -z-0 h-[600px] w-[1200px] -translate-x-1/2 opacity-[0.07] dark:opacity-[0.1]"
        viewBox="0 0 1200 600"
        fill="none"
        aria-hidden="true"
      >
        <circle cx="250" cy="180" r="220" fill="var(--color-brand-500)" />
        <circle cx="950" cy="120" r="160" fill="var(--color-accent-400)" />
        <circle cx="850" cy="420" r="200" fill="var(--color-brand-400)" />
      </svg>
      <main className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center gap-4 px-6 py-20 text-center">
        <span className="rounded-full bg-brand-50 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-brand-700 dark:bg-brand-900/40 dark:text-brand-200">
          Built from the official Idaho exam content outline
        </span>
        <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-zinc-900 sm:text-6xl dark:text-zinc-50">
          Pass your Idaho insurance exam{" "}
          <span className="bg-gradient-to-r from-brand-600 to-brand-400 bg-clip-text text-transparent">
            the first time.
          </span>
        </h1>
        <p className="text-xl font-semibold text-brand-600 dark:text-brand-300">
          Stop reading. Start passing.
        </p>
        <p className="max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
          Most Idaho exam prep is hours of dense reading with a handful of
          questions bolted on. This course flips that: practice questions
          first, explanations the moment you miss one, and a real practice
          exam — every module mapped directly to Pearson VUE's official
          Idaho content outline, not generic national material.
        </p>

        <div className="mt-8 w-full">
          <ProductPreview />
        </div>

        <div className="mt-12 w-full">
          <TrackPicker />
        </div>

        <div className="mt-12 grid w-full grid-cols-3 gap-4 rounded-2xl bg-background p-6 shadow-sm shadow-black/5 ring-1 ring-black/[.06] dark:ring-white/[.1]">
          <div className="flex flex-col items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-50 text-brand-600 dark:bg-brand-900/40 dark:text-brand-200">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z" /></svg>
            </span>
            <p className="text-2xl font-bold text-brand-600 dark:text-brand-300">
              {modules.length}
            </p>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">Study modules</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-50 text-brand-600 dark:bg-brand-900/40 dark:text-brand-200">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M9.5 9a2.5 2.5 0 1 1 3.5 2.3c-.7.4-1.2 1-1.2 1.9" /><path d="M12 17h.01" /></svg>
            </span>
            <p className="text-2xl font-bold text-brand-600 dark:text-brand-300">
              {totalQuestions}+
            </p>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">Practice questions</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent-50 text-accent-600 dark:bg-accent-900/40 dark:text-accent-200">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 1v22" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
            </span>
            <p className="text-2xl font-bold text-accent-600 dark:text-accent-300">$75</p>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">One-time, no subscription</p>
          </div>
        </div>

        <div className="mt-6 flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-500">
            <path d="M12 2 3 6v6c0 5 4 8 9 10 5-2 9-5 9-10V6Z" />
          </svg>
          Trusted by Sheets Advisory Group
        </div>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/pricing"
            className="flex h-11 items-center justify-center rounded-full bg-accent-500 px-6 text-sm font-medium text-white shadow-sm shadow-accent-900/20 transition-colors hover:bg-accent-600"
          >
            See pricing
          </Link>
          <Link
            href="/diagnostic"
            className="flex h-11 items-center justify-center rounded-full border border-black/[.08] px-6 text-sm font-medium text-zinc-700 transition-colors hover:bg-black/[.04] dark:border-white/[.145] dark:text-zinc-300 dark:hover:bg-white/[.06]"
          >
            Take the free readiness check
          </Link>
        </div>

        <div className="mt-16 grid w-full gap-6 text-left sm:grid-cols-3">
          <div className="rounded-2xl bg-background p-5 shadow-sm shadow-black/5 ring-1 ring-black/[.06] dark:ring-white/[.1]">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-50 text-brand-600 dark:bg-brand-900/40 dark:text-brand-200">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2 3 6v6c0 5 4 8 9 10 5-2 9-5 9-10V6Z" /></svg>
            </span>
            <p className="mt-3 font-medium text-zinc-900 dark:text-zinc-50">
              Idaho-specific, not generic
            </p>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
              State law modules cite real Idaho Code sections — the same
              statutes your exam actually tests.
            </p>
          </div>
          <div className="rounded-2xl bg-background p-5 shadow-sm shadow-black/5 ring-1 ring-black/[.06] dark:ring-white/[.1]">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-50 text-brand-600 dark:bg-brand-900/40 dark:text-brand-200">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 17a5 5 0 1 0-5-5" /><path d="M12 17v3" /><path d="M12 8V5" /></svg>
            </span>
            <p className="mt-3 font-medium text-zinc-900 dark:text-zinc-50">
              Every question, explained
            </p>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
              Miss one and you get the reasoning immediately — so wrong
              answers turn into things you actually remember.
            </p>
          </div>
          <div className="rounded-2xl bg-background p-5 shadow-sm shadow-black/5 ring-1 ring-black/[.06] dark:ring-white/[.1]">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-50 text-brand-600 dark:bg-brand-900/40 dark:text-brand-200">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 12 2 2 4-4" /><circle cx="12" cy="12" r="10" /></svg>
            </span>
            <p className="mt-3 font-medium text-zinc-900 dark:text-zinc-50">
              A real practice exam
            </p>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
              50 timed questions, 70% to pass, answers hidden until you
              finish — the same per-question pace and bar as the real Idaho
              exam.
            </p>
          </div>
        </div>

        <TestimonialsSection />
      </main>
    </div>
  );
}
