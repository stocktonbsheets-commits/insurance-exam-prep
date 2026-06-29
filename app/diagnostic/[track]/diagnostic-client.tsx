"use client";

import { useState } from "react";
import Link from "next/link";
import type { DiagnosticQuestion } from "@/lib/diagnostic";
import { weakAreas } from "@/lib/diagnostic";

export function DiagnosticQuiz({
  track,
  trackLabel,
  questions,
}: {
  track: string;
  trackLabel: string;
  questions: DiagnosticQuestion[];
}) {
  const [answers, setAnswers] = useState<(number | null)[]>(questions.map(() => null));
  const [email, setEmail] = useState("");
  const [unlocked, setUnlocked] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const allAnswered = answers.every((a) => a !== null);
  const score = answers.reduce(
    (total: number, a, i) => total + (a === questions[i]?.correctIndex ? 1 : 0),
    0
  );
  const percent = Math.round((score / questions.length) * 100);

  function selectAnswer(qi: number, oi: number) {
    setAnswers((prev) => {
      const next = [...prev];
      next[qi] = oi;
      return next;
    });
  }

  async function submitEmail(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;
    setSubmitting(true);
    setError("");
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, track, score, total: questions.length }),
      });
      if (!res.ok) throw new Error();
      setUnlocked(true);
    } catch {
      setError("Something went wrong — try again.");
    } finally {
      setSubmitting(false);
    }
  }

  if (allAnswered && !unlocked) {
    return (
      <div className="mt-10 flex flex-col items-center gap-4 rounded-2xl bg-background p-8 text-center shadow-sm shadow-black/5 ring-1 ring-black/[.06] dark:ring-white/[.1]">
        <span className="text-4xl">🔒</span>
        <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
          Your results are ready
        </h2>
        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          Enter your email to see your score and a breakdown of exactly which
          topics to study before test day.
        </p>
        <form onSubmit={submitEmail} className="mt-2 flex w-full max-w-sm flex-col gap-3">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className="h-11 rounded-full border border-black/[.08] px-4 text-sm dark:border-white/[.145] dark:bg-zinc-900"
          />
          <button
            type="submit"
            disabled={submitting}
            className="h-11 rounded-full bg-brand-600 px-6 font-medium text-white transition-colors hover:bg-brand-700 disabled:opacity-60"
          >
            {submitting ? "Scoring..." : "See my results"}
          </button>
          {error && <p className="text-sm text-red-600 dark:text-red-400">{error}</p>}
        </form>
      </div>
    );
  }

  if (allAnswered && unlocked) {
    const weak = weakAreas(questions, answers).filter((w) => w.correct / w.total < 1);
    return (
      <div className="mt-10 flex flex-col gap-6">
        <div className="flex flex-col items-center gap-2 rounded-2xl bg-background p-8 text-center shadow-sm shadow-black/5 ring-1 ring-black/[.06] dark:ring-white/[.1]">
          <p className="text-3xl font-bold text-zinc-900 dark:text-zinc-50">{percent}%</p>
          <p className="text-zinc-600 dark:text-zinc-400">
            {score} / {questions.length} correct on this diagnostic
          </p>
          <p className="mt-2 text-sm font-medium text-zinc-700 dark:text-zinc-300">
            {percent >= 80
              ? "Strong start — a focused review of your weak spots and you're exam-ready."
              : percent >= 60
              ? "You're on track, but there are clear gaps to close before test day."
              : "This is exactly why a diagnostic matters — there's real work to do before you sit the exam."}
          </p>
        </div>

        {weak.length > 0 && (
          <div className="rounded-2xl bg-background p-6 shadow-sm shadow-black/5 ring-1 ring-black/[.06] dark:ring-white/[.1]">
            <h3 className="font-semibold text-zinc-900 dark:text-zinc-50">
              Topics to review first
            </h3>
            <ul className="mt-3 flex flex-col gap-2">
              {weak.map((w) => (
                <li
                  key={w.moduleSlug}
                  className="flex items-center justify-between rounded-lg border border-amber-300 bg-amber-50 px-4 py-2 text-sm text-amber-900 dark:border-amber-800 dark:bg-amber-950 dark:text-amber-200"
                >
                  <span>{w.moduleTitle}</span>
                  <span className="font-mono">
                    {w.correct}/{w.total}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <Link
          href="/pricing"
          className="flex h-12 items-center justify-center rounded-full bg-brand-600 px-6 font-medium text-white transition-colors hover:bg-brand-700"
        >
          Get full access to close these gaps — {trackLabel}
        </Link>
      </div>
    );
  }

  return (
    <div className="mt-8 flex flex-col gap-6">
      {questions.map((q, qi) => (
        <div
          key={qi}
          className="rounded-lg border border-black/[.08] p-4 dark:border-white/[.145]"
        >
          <p className="font-medium text-zinc-900 dark:text-zinc-50">
            {qi + 1}. {q.question}
          </p>
          <div className="mt-3 flex flex-col gap-2">
            {q.options.map((option, oi) => {
              const isSelected = answers[qi] === oi;
              return (
                <button
                  key={oi}
                  onClick={() => selectAnswer(qi, oi)}
                  className={[
                    "rounded-md border px-3 py-2 text-left text-sm transition-all duration-150 hover:border-brand-400 hover:-translate-y-0.5 active:translate-y-0",
                    isSelected
                      ? "border-zinc-900 dark:border-zinc-50"
                      : "border-black/[.08] dark:border-white/[.145]",
                  ].join(" ")}
                >
                  {option}
                </button>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
