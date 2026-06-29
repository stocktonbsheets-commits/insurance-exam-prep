"use client";

import { useEffect, useRef, useState } from "react";
import type { Question } from "@/lib/questions";
import { shuffle } from "@/lib/shuffle";
import { recordResult } from "@/lib/missed";

type StoredHistory = {
  lastScore: number;
  lastTotal: number;
  attempts: number;
  bestPercent: number;
};

export function storageKey(slug: string) {
  return `quiz-history:${slug}`;
}

export function readHistory(slug: string): StoredHistory | null {
  if (typeof window === "undefined") return null;
  const raw = window.localStorage.getItem(storageKey(slug));
  if (!raw) return null;
  try {
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

function randomizeQuestions(
  questions: Question[],
  count: number,
  avoid: Set<string>
): Question[] {
  const unseen = questions.filter((q) => !avoid.has(q.question));
  const seen = questions.filter((q) => avoid.has(q.question));
  const ordered = [...shuffle(unseen), ...shuffle(seen)].slice(0, count);
  return shuffle(ordered).map((q) => {
    const optionOrder = shuffle(q.options.map((_, i) => i));
    return {
      question: q.question,
      options: optionOrder.map((i) => q.options[i]),
      correctIndex: optionOrder.indexOf(q.correctIndex),
      explanation: q.explanation,
    };
  });
}

function freshQuiz(questions: Question[], count: number, avoid: Set<string>) {
  const randomized = randomizeQuestions(questions, count, avoid);
  return { displayQuestions: randomized, answers: randomized.map(() => null) };
}

function formatClock(seconds: number) {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m}:${s.toString().padStart(2, "0")}`;
}

const ENCOURAGEMENT = {
  great: ["Nailed it 🔥", "You're crushing this module.", "Exam-ready on this one."],
  good: ["Solid work.", "Good progress — a couple more passes and this'll stick.", "Getting there."],
  keepGoing: ["Worth another lap.", "This is exactly what retakes are for.", "Reread the trap callouts above, then try again."],
};

function pick(list: string[]) {
  return list[Math.floor(Math.random() * list.length)];
}

export function Quiz({
  slug,
  questions,
  questionCount,
  passThreshold,
  instantFeedback = true,
  timed = false,
  secondsPerQuestion = 25,
  missedTrackingSlug,
}: {
  slug: string;
  questions: Question[];
  questionCount?: number;
  passThreshold?: number;
  instantFeedback?: boolean;
  timed?: boolean;
  secondsPerQuestion?: number;
  missedTrackingSlug?: string;
}) {
  const count = Math.min(questionCount ?? 8, questions.length);
  const totalSeconds = count * secondsPerQuestion;
  const [displayQuestions, setDisplayQuestions] = useState<Question[]>([]);
  const [answers, setAnswers] = useState<(number | null)[]>([]);
  const [history, setHistory] = useState<StoredHistory | null>(null);
  const [hydrated, setHydrated] = useState(false);
  const [message, setMessage] = useState("");
  const [timeLeft, setTimeLeft] = useState(totalSeconds);
  const [timedOut, setTimedOut] = useState(false);
  const [attemptKey, setAttemptKey] = useState(0);
  const [current, setCurrent] = useState(0);
  const [flagged, setFlagged] = useState<Set<number>>(new Set());
  const [submitted, setSubmitted] = useState(false);
  const [confirmingSubmit, setConfirmingSubmit] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const seenQuestionsRef = useRef<Set<string>>(new Set());

  useEffect(() => {
    setHistory(readHistory(slug));
    const { displayQuestions, answers } = freshQuiz(questions, count, seenQuestionsRef.current);
    displayQuestions.forEach((q) => seenQuestionsRef.current.add(q.question));
    setDisplayQuestions(displayQuestions);
    setAnswers(answers);
    setTimeLeft(totalSeconds);
    setTimedOut(false);
    setCurrent(0);
    setFlagged(new Set());
    setSubmitted(false);
    setConfirmingSubmit(false);
    setHydrated(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slug, attemptKey]);

  const allAnswered = answers.length > 0 && answers.every((a) => a !== null);
  const finished = instantFeedback ? allAnswered || timedOut : submitted || timedOut;
  const score = answers.reduce(
    (total: number, answer, i) =>
      total + (answer === displayQuestions[i]?.correctIndex ? 1 : 0),
    0
  );

  useEffect(() => {
    if (!timed || !hydrated) return;
    intervalRef.current = setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 1) {
          if (intervalRef.current) clearInterval(intervalRef.current);
          setTimedOut(true);
          return 0;
        }
        return t - 1;
      });
    }, 1000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [timed, hydrated, attemptKey]);

  useEffect(() => {
    if (finished && intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  }, [finished]);

  useEffect(() => {
    if (!hydrated || !finished) return;
    const percent = Math.round((score / displayQuestions.length) * 100);
    const updated: StoredHistory = {
      lastScore: score,
      lastTotal: displayQuestions.length,
      attempts: (history?.attempts ?? 0) + 1,
      bestPercent: Math.max(percent, history?.bestPercent ?? 0),
    };
    window.localStorage.setItem(storageKey(slug), JSON.stringify(updated));
    setHistory(updated);
    setMessage(
      percent >= 90
        ? pick(ENCOURAGEMENT.great)
        : percent >= 70
        ? pick(ENCOURAGEMENT.good)
        : pick(ENCOURAGEMENT.keepGoing)
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [finished]);

  function selectAnswer(questionIndex: number, optionIndex: number) {
    if (timedOut || finished) return;
    if (instantFeedback && answers[questionIndex] !== null) return; // locked once answered

    if (instantFeedback) {
      const q = displayQuestions[questionIndex];
      recordResult(missedTrackingSlug ?? slug, q, optionIndex === q.correctIndex);
    }
    setAnswers((prev) => {
      const next = [...prev];
      next[questionIndex] = optionIndex;
      return next;
    });
  }

  function toggleFlag(questionIndex: number) {
    setFlagged((prev) => {
      const next = new Set(prev);
      if (next.has(questionIndex)) next.delete(questionIndex);
      else next.add(questionIndex);
      return next;
    });
  }

  function submitExam() {
    displayQuestions.forEach((q, i) => {
      recordResult(missedTrackingSlug ?? slug, q, answers[i] === q.correctIndex);
    });
    setSubmitted(true);
  }

  function handleSubmitClick() {
    if (!allAnswered && !confirmingSubmit) {
      setConfirmingSubmit(true);
      return;
    }
    submitExam();
  }

  function retake() {
    setAttemptKey((k) => k + 1);
    setMessage("");
  }

  if (!hydrated) {
    return null;
  }

  const answeredCount = answers.filter((a) => a !== null).length;
  const timeFraction = timed ? timeLeft / totalSeconds : 1;

  return (
    <div className="mt-8 flex flex-col gap-8">
      <div className="flex items-center gap-3">
        <div className="h-2 flex-1 overflow-hidden rounded-full bg-zinc-200 dark:bg-zinc-800">
          <div
            className="h-full rounded-full bg-brand-500 transition-all"
            style={{ width: `${(answeredCount / displayQuestions.length) * 100}%` }}
          />
        </div>
        <span className="shrink-0 text-xs font-medium text-zinc-500">
          {answeredCount}/{displayQuestions.length}
        </span>
        {timed && (
          <span
            className={[
              "shrink-0 rounded-full px-2.5 py-1 text-xs font-mono font-medium tabular-nums",
              timeFraction < 0.1
                ? "bg-red-100 text-red-700 dark:bg-red-950 dark:text-red-300"
                : timeFraction < 0.25
                ? "bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-300"
                : "bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400",
            ].join(" ")}
          >
            ⏱ {formatClock(timeLeft)}
          </span>
        )}
      </div>

      {timedOut && !allAnswered && (
        <div className="rounded-2xl border border-amber-300 bg-amber-50 p-4 text-sm text-amber-900 shadow-sm shadow-black/5 dark:border-amber-800 dark:bg-amber-950 dark:text-amber-200">
          Time's up — here's how you did. Unanswered questions count as missed.
        </div>
      )}

      {history && answeredCount === 0 && !timedOut && (
        <div className="rounded-2xl bg-background p-4 text-sm text-zinc-600 shadow-sm shadow-black/5 ring-1 ring-black/[.06] dark:text-zinc-400 dark:ring-white/[.1]">
          Best so far: {history.bestPercent}% · {history.attempts} attempt
          {history.attempts === 1 ? "" : "s"}. Fresh questions in a new order this time.
        </div>
      )}

      {!instantFeedback && !finished ? (
        <div className="flex flex-col gap-4">
          <div className="flex flex-wrap gap-2">
            {displayQuestions.map((_, qi) => {
              const isAnswered = answers[qi] !== null;
              const isFlagged = flagged.has(qi);
              const isCurrent = qi === current;
              return (
                <button
                  key={qi}
                  onClick={() => setCurrent(qi)}
                  className={[
                    "relative flex h-9 w-9 items-center justify-center rounded-lg border text-sm font-medium transition-colors",
                    isCurrent
                      ? "border-brand-600 bg-brand-600 text-white"
                      : isAnswered
                      ? "border-brand-200 bg-brand-50 text-brand-700 dark:border-brand-800 dark:bg-brand-900/40 dark:text-brand-200"
                      : "border-black/[.08] text-zinc-500 hover:border-brand-300 dark:border-white/[.145] dark:text-zinc-400",
                  ].join(" ")}
                  title={isFlagged ? "Flagged for review" : undefined}
                >
                  {qi + 1}
                  {isFlagged && (
                    <span className="absolute -top-1 -right-1 h-2.5 w-2.5 rounded-full bg-amber-500" />
                  )}
                </button>
              );
            })}
          </div>

          {(() => {
            const q = displayQuestions[current];
            const isFlagged = flagged.has(current);
            return (
              <div className="rounded-2xl bg-background p-5 shadow-sm shadow-black/5 ring-1 ring-black/[.06] dark:ring-white/[.1]">
                <div className="flex items-start justify-between gap-3">
                  <p className="font-medium text-zinc-900 dark:text-zinc-50">
                    {current + 1}. {q.question}
                  </p>
                  <button
                    onClick={() => toggleFlag(current)}
                    className={[
                      "flex shrink-0 items-center gap-1 rounded-full border px-2.5 py-1 text-xs font-medium transition-colors",
                      isFlagged
                        ? "border-amber-300 bg-amber-50 text-amber-800 dark:border-amber-800 dark:bg-amber-950 dark:text-amber-300"
                        : "border-black/[.08] text-zinc-500 hover:border-amber-300 hover:text-amber-700 dark:border-white/[.145] dark:text-zinc-400",
                    ].join(" ")}
                  >
                    {isFlagged ? "Flagged" : "Flag for review"}
                  </button>
                </div>
                <div className="mt-3 flex flex-col gap-2">
                  {q.options.map((option, oi) => {
                    const isSelected = answers[current] === oi;
                    return (
                      <button
                        key={oi}
                        onClick={() => selectAnswer(current, oi)}
                        className={[
                          "rounded-xl border px-3.5 py-2.5 text-left text-sm transition-all duration-150",
                          isSelected
                            ? "border-brand-600 bg-brand-50 dark:bg-brand-900/30"
                            : "border-black/[.08] hover:border-brand-400 hover:-translate-y-0.5 active:translate-y-0 dark:border-white/[.145]",
                        ].join(" ")}
                      >
                        {option}
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })()}

          <div className="flex items-center justify-between gap-3">
            <div className="flex gap-2">
              <button
                onClick={() => setCurrent((c) => Math.max(0, c - 1))}
                disabled={current === 0}
                className="h-10 rounded-full border border-black/[.08] px-4 text-sm font-medium transition-colors disabled:opacity-40 hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-white/[.06]"
              >
                ← Previous
              </button>
              <button
                onClick={() => setCurrent((c) => Math.min(displayQuestions.length - 1, c + 1))}
                disabled={current === displayQuestions.length - 1}
                className="h-10 rounded-full border border-black/[.08] px-4 text-sm font-medium transition-colors disabled:opacity-40 hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-white/[.06]"
              >
                Next →
              </button>
            </div>

            <div className="flex items-center gap-3">
              {confirmingSubmit && !allAnswered && (
                <span className="text-xs text-amber-700 dark:text-amber-400">
                  {displayQuestions.length - answeredCount} unanswered — submit anyway?
                </span>
              )}
              <button
                onClick={handleSubmitClick}
                className={[
                  "h-10 rounded-full px-5 text-sm font-medium text-white transition-colors",
                  confirmingSubmit && !allAnswered
                    ? "bg-red-600 hover:bg-red-700"
                    : "bg-brand-600 hover:bg-brand-700",
                ].join(" ")}
              >
                {confirmingSubmit && !allAnswered ? "Submit anyway" : "Submit Exam"}
              </button>
            </div>
          </div>
        </div>
      ) : (
        displayQuestions.map((q, qi) => {
          const locked = (instantFeedback && answers[qi] !== null) || timedOut || finished;
          const revealed = instantFeedback ? answers[qi] !== null || timedOut : finished;
          const isReview = !instantFeedback && finished;
          const wasCorrect = answers[qi] === q.correctIndex;
          const wasAnswered = answers[qi] !== null;
          return (
            <div
              key={qi}
              className={[
                "rounded-2xl p-5 shadow-sm shadow-black/5 ring-1 transition-shadow",
                isReview
                  ? wasCorrect
                    ? "border-l-4 border-l-green-500 bg-green-50/40 ring-black/[.06] dark:bg-green-950/15 dark:ring-white/[.1]"
                    : "border-l-4 border-l-red-500 bg-red-50/40 ring-black/[.06] dark:bg-red-950/15 dark:ring-white/[.1]"
                  : "bg-background ring-black/[.06] dark:ring-white/[.1]",
              ].join(" ")}
            >
              <div className="flex items-start justify-between gap-3">
                <p className="font-medium text-zinc-900 dark:text-zinc-50">
                  {qi + 1}. {q.question}
                </p>
                {isReview && (
                  <span
                    className={[
                      "shrink-0 rounded-full px-2.5 py-1 text-xs font-semibold",
                      wasCorrect
                        ? "bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300"
                        : "bg-red-100 text-red-800 dark:bg-red-900/50 dark:text-red-300",
                    ].join(" ")}
                  >
                    {wasCorrect ? "Correct" : wasAnswered ? "Incorrect" : "Skipped"}
                  </span>
                )}
              </div>
              <div className="mt-3 flex flex-col gap-2">
                {q.options.map((option, oi) => {
                  const isSelected = answers[qi] === oi;
                  const isCorrect = revealed && oi === q.correctIndex;
                  const isWrongSelected = revealed && isSelected && oi !== q.correctIndex;

                  return (
                    <button
                      key={oi}
                      onClick={() => selectAnswer(qi, oi)}
                      disabled={locked}
                      className={[
                        "rounded-xl border px-3.5 py-2.5 text-left text-sm transition-all duration-150",
                        isCorrect
                          ? "border-green-500 bg-green-50 scale-[1.01] dark:bg-green-950"
                          : isWrongSelected
                          ? "border-red-500 bg-red-50 dark:bg-red-950"
                          : isSelected
                          ? "border-zinc-900 dark:border-zinc-50"
                          : "border-black/[.08] dark:border-white/[.145]",
                        locked ? "cursor-default" : "hover:border-brand-400 hover:-translate-y-0.5 active:translate-y-0",
                      ].join(" ")}
                    >
                      {option}
                    </button>
                  );
                })}
              </div>
              {revealed && q.explanation && (
                <p className="mt-3 rounded-xl bg-blue-50 p-3 text-sm text-blue-900 dark:bg-blue-950 dark:text-blue-200">
                  <span className="font-semibold">
                    {answers[qi] === q.correctIndex ? "Why: " : "Why you missed it: "}
                  </span>
                  {q.explanation}
                </p>
              )}
            </div>
          );
        })
      )}

      {finished && (
        <div className="flex flex-col items-center gap-4 rounded-2xl bg-background p-6 text-center shadow-sm shadow-black/5 ring-1 ring-black/[.06] dark:ring-white/[.1]">
          <p className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
            You scored {score} / {displayQuestions.length}
            {" "}({Math.round((score / displayQuestions.length) * 100)}%)
          </p>
          <p className="text-zinc-600 dark:text-zinc-400">{message}</p>
          {passThreshold != null && (
            <p
              className={[
                "rounded-full px-4 py-1 text-sm font-semibold",
                score / displayQuestions.length >= passThreshold / 100
                  ? "bg-green-100 text-green-800 dark:bg-green-950 dark:text-green-300"
                  : "bg-red-100 text-red-800 dark:bg-red-950 dark:text-red-300",
              ].join(" ")}
            >
              {score / displayQuestions.length >= passThreshold / 100
                ? `PASS (need ${passThreshold}%)`
                : `NOT YET — need ${passThreshold}% to pass`}
            </p>
          )}
          <button
            onClick={retake}
            className="h-12 rounded-full bg-brand-600 px-6 font-medium text-white transition-colors hover:bg-brand-700"
          >
            {timed ? "Try Again, New Clock" : "Retake with New Questions"}
          </button>
        </div>
      )}
    </div>
  );
}
