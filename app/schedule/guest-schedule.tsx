"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { modules } from "@/lib/content";
import {
  buildModuleSchedule,
  daysUntil,
  parseDateOnly,
  STUDY_DAYS,
  type ScheduledModule,
} from "@/lib/schedule";
import { CATEGORY_ORDER, categoryFor, categoryIconPath } from "@/lib/module-meta";

type GuestPlan = {
  examDate: string;
  studyDays: string[];
  track?: "life-health" | "property-casualty";
  schedule: ScheduledModule[];
};

const STORAGE_KEY = "guest-study-plan";

export function GuestSchedule({
  track: trackFromQuery,
}: {
  track?: "life-health" | "property-casualty";
}) {
  const [plan, setPlan] = useState<GuestPlan | null>(null);
  const [hydrated, setHydrated] = useState(false);
  const [shiftDays, setShiftDays] = useState(1);

  useEffect(() => {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (raw) {
      try {
        setPlan(JSON.parse(raw));
      } catch {
        // ignore malformed data
      }
    }
    setHydrated(true);
  }, []);

  function save(next: GuestPlan) {
    setPlan(next);
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  }

  function buildPlan(formData: FormData) {
    const examDateRaw = String(formData.get("examDate") ?? "");
    const studyDays = formData.getAll("studyDays").map((d) => String(d));
    const trackRaw = String(formData.get("track") ?? "");
    const track =
      trackRaw === "life-health" || trackRaw === "property-casualty" ? trackRaw : undefined;
    if (!examDateRaw || studyDays.length === 0) return;

    const examDate = parseDateOnly(examDateRaw);
    const schedule = buildModuleSchedule(examDate, studyDays, track);
    save({ examDate: examDateRaw, studyDays, track, schedule });
  }

  function toggle(moduleSlug: string, completed: boolean) {
    if (!plan) return;
    save({
      ...plan,
      schedule: plan.schedule.map((s) =>
        s.moduleSlug === moduleSlug ? { ...s, completed } : s
      ),
    });
  }

  function reschedule(moduleSlug: string, scheduledOn: string) {
    if (!plan) return;
    save({
      ...plan,
      schedule: plan.schedule.map((s) =>
        s.moduleSlug === moduleSlug
          ? { ...s, scheduledOn: parseDateOnly(scheduledOn).toISOString() }
          : s
      ),
    });
  }

  function shiftAll() {
    if (!plan || !shiftDays) return;
    save({
      ...plan,
      schedule: plan.schedule.map((s) => {
        const d = new Date(s.scheduledOn);
        d.setDate(d.getDate() + shiftDays);
        return { ...s, scheduledOn: d.toISOString() };
      }),
    });
  }

  if (!hydrated) {
    return null;
  }

  if (!plan) {
    return (
      <form action={buildPlan} className="mt-8 flex flex-col gap-6">
        <div>
          <label className="block text-sm font-medium text-zinc-900 dark:text-zinc-50">
            Exam date
          </label>
          <input
            type="date"
            name="examDate"
            required
            className="mt-2 rounded-md border border-black/[.08] bg-transparent px-3 py-2 dark:border-white/[.145]"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-zinc-900 dark:text-zinc-50">
            Which days can you study?
          </label>
          <div className="mt-2 flex flex-wrap gap-3">
            {STUDY_DAYS.map((day) => (
              <label
                key={day.key}
                className="flex items-center gap-2 rounded-md border border-black/[.08] px-3 py-2 text-sm dark:border-white/[.145]"
              >
                <input type="checkbox" name="studyDays" value={day.key} />
                {day.label}
              </label>
            ))}
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-zinc-900 dark:text-zinc-50">
            Which track?
          </label>
          <div className="mt-2 flex flex-wrap gap-3">
            <label className="flex items-center gap-2 rounded-md border border-black/[.08] px-3 py-2 text-sm dark:border-white/[.145]">
              <input
                type="radio"
                name="track"
                value="life-health"
                defaultChecked={trackFromQuery === "life-health"}
              />
              Life & Health
            </label>
            <label className="flex items-center gap-2 rounded-md border border-black/[.08] px-3 py-2 text-sm dark:border-white/[.145]">
              <input
                type="radio"
                name="track"
                value="property-casualty"
                defaultChecked={trackFromQuery === "property-casualty"}
              />
              Property & Casualty
            </label>
            <label className="flex items-center gap-2 rounded-md border border-black/[.08] px-3 py-2 text-sm dark:border-white/[.145]">
              <input type="radio" name="track" value="" defaultChecked={!trackFromQuery} />
              Both tracks
            </label>
          </div>
        </div>
        <button
          type="submit"
          className="h-12 w-fit rounded-full bg-brand-600 px-6 font-medium text-white transition-colors hover:bg-brand-700"
        >
          Build My Schedule
        </button>
      </form>
    );
  }

  const moduleBySlug = new Map(modules.map((m) => [m.slug, m]));
  const completedCount = plan.schedule.filter((s) => s.completed).length;
  const examDate = parseDateOnly(plan.examDate);
  const remainingDays = daysUntil(examDate);

  return (
    <div>
      <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-zinc-600 dark:text-zinc-400">
            Exam date: {examDate.toLocaleDateString()}
          </p>
          <p className="text-sm font-medium text-brand-600 dark:text-brand-300">
            {remainingDays > 0
              ? `${remainingDays} day${remainingDays === 1 ? "" : "s"} until your exam`
              : remainingDays === 0
              ? "Exam is today"
              : "Exam date has passed"}
          </p>
        </div>
        <span className="text-sm text-zinc-600 dark:text-zinc-400">
          {completedCount} / {plan.schedule.length} done
        </span>
      </div>

      {CATEGORY_ORDER.map((category) => {
        const categoryEntries = plan.schedule.filter(
          (s) => categoryFor(s.moduleSlug) === category
        );
        if (categoryEntries.length === 0) return null;

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
              {categoryEntries.map((s) => {
                const module = moduleBySlug.get(s.moduleSlug);
                if (!module) return null;
                const locked = !module.free;
                return (
                  <li
                    key={s.moduleSlug}
                    className="flex items-center justify-between gap-4 rounded-lg border border-black/[.08] p-4 dark:border-white/[.145]"
                  >
                    <div className="flex items-center gap-4">
                      <input
                        type="checkbox"
                        checked={s.completed}
                        disabled={locked}
                        onChange={(e) => toggle(s.moduleSlug, e.target.checked)}
                        className="h-5 w-5 accent-zinc-900 dark:accent-zinc-50"
                      />
                      <Link
                        href={locked ? "/pricing" : `/study/${module.slug}`}
                        className="font-medium text-zinc-900 hover:underline dark:text-zinc-50"
                      >
                        {module.title}
                      </Link>
                      {locked && <span className="text-xs text-zinc-400">🔒</span>}
                    </div>
                    <input
                      type="date"
                      value={new Date(s.scheduledOn).toISOString().slice(0, 10)}
                      onChange={(e) => reschedule(s.moduleSlug, e.target.value)}
                      className="rounded-md border border-black/[.08] bg-transparent px-2 py-1 text-sm dark:border-white/[.145]"
                    />
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}

      <div className="mt-8 flex flex-wrap items-center gap-3 rounded-lg border border-black/[.08] p-4 dark:border-white/[.145]">
        <span className="text-sm font-medium text-zinc-900 dark:text-zinc-50">
          Exam date moved?
        </span>
        <input
          type="number"
          value={shiftDays}
          onChange={(e) => setShiftDays(Number(e.target.value))}
          className="w-16 rounded-md border border-black/[.08] bg-transparent px-2 py-1 text-sm dark:border-white/[.145]"
        />
        <span className="text-sm text-zinc-600 dark:text-zinc-400">days</span>
        <button
          onClick={shiftAll}
          className="h-9 rounded-full border border-black/[.08] px-4 text-sm font-medium transition-colors hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-white/[.06]"
        >
          Shift every date
        </button>
      </div>

      <p className="mt-4 text-sm text-zinc-500">
        Locked modules need{" "}
        <Link href="/pricing" className="text-brand-600 hover:underline dark:text-brand-300">
          full access
        </Link>{" "}
        to study and check off.
      </p>

      <button
        onClick={() => {
          window.localStorage.removeItem(STORAGE_KEY);
          setPlan(null);
        }}
        className="mt-6 h-10 rounded-full border border-black/[.08] px-5 text-sm font-medium transition-colors hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-white/[.06]"
      >
        Rebuild Schedule
      </button>
    </div>
  );
}
