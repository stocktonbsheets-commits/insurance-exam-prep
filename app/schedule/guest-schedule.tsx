"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { modules } from "@/lib/content";
import { buildModuleSchedule, STUDY_DAYS, type ScheduledModule } from "@/lib/schedule";

type GuestPlan = {
  examDate: string;
  studyDays: string[];
  schedule: ScheduledModule[];
};

const STORAGE_KEY = "guest-study-plan";

export function GuestSchedule() {
  const [plan, setPlan] = useState<GuestPlan | null>(null);
  const [hydrated, setHydrated] = useState(false);

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
    if (!examDateRaw || studyDays.length === 0) return;

    const examDate = new Date(examDateRaw);
    const schedule = buildModuleSchedule(examDate, studyDays);
    save({ examDate: examDateRaw, studyDays, schedule });
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

  if (!hydrated) {
    return null;
  }

  if (!plan) {
    return (
      <form
        action={buildPlan}
        className="mt-8 flex flex-col gap-6"
      >
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
        <button
          type="submit"
          className="h-12 w-fit rounded-full bg-foreground px-6 font-medium text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc]"
        >
          Build My Schedule
        </button>
      </form>
    );
  }

  const moduleBySlug = new Map(modules.map((m) => [m.slug, m]));
  const completedCount = plan.schedule.filter((s) => s.completed).length;

  return (
    <div>
      <div className="mt-6 flex items-center justify-between">
        <p className="text-zinc-600 dark:text-zinc-400">
          Exam date: {new Date(plan.examDate).toLocaleDateString()}
        </p>
        <span className="text-sm text-zinc-600 dark:text-zinc-400">
          {completedCount} / {plan.schedule.length} done
        </span>
      </div>

      <ul className="mt-6 flex flex-col gap-3">
        {plan.schedule.map((s) => {
          const module = moduleBySlug.get(s.moduleSlug);
          if (!module) return null;
          return (
            <li
              key={s.moduleSlug}
              className="flex items-center gap-4 rounded-lg border border-black/[.08] p-4 dark:border-white/[.145]"
            >
              <input
                type="checkbox"
                checked={s.completed}
                onChange={(e) => toggle(s.moduleSlug, e.target.checked)}
                className="h-5 w-5 accent-zinc-900 dark:accent-zinc-50"
              />
              <div>
                <Link
                  href={`/study/${module.slug}`}
                  className="font-medium text-zinc-900 hover:underline dark:text-zinc-50"
                >
                  {module.title}
                </Link>
                <div className="text-sm text-zinc-500">
                  {new Date(s.scheduledOn).toLocaleDateString(undefined, {
                    weekday: "short",
                    month: "short",
                    day: "numeric",
                  })}
                </div>
              </div>
            </li>
          );
        })}
      </ul>

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
