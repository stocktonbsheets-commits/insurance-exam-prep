import Link from "next/link";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { modules } from "@/lib/content";
import { createStudyPlan } from "./actions";
import { CompleteToggle } from "./complete-toggle";
import { DatePicker } from "./date-picker";
import { GuestSchedule } from "./guest-schedule";
import { STUDY_DAYS } from "@/lib/schedule";

export default async function SchedulePage() {
  const session = await auth();

  if (!session?.user) {
    return (
      <main className="mx-auto w-full max-w-3xl flex-1 px-6 py-16">
        <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
          My Study Schedule
        </h1>
        <p className="mt-2 text-zinc-600 dark:text-zinc-400">
          Build a schedule right now as a guest — it&apos;s saved in this
          browser only.{" "}
          <Link href="/signup" className="font-medium text-zinc-900 hover:underline dark:text-zinc-50">
            Create an account
          </Link>{" "}
          to save it permanently and access it from any device.
        </p>
        <GuestSchedule />
      </main>
    );
  }

  const plan = await prisma.studyPlan.findUnique({
    where: { userId: session.user.id },
    include: { moduleSchedules: { orderBy: { scheduledOn: "asc" } } },
  });

  if (!plan) {
    return (
      <main className="mx-auto w-full max-w-3xl flex-1 px-6 py-16">
        <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
          Build Your Study Schedule
        </h1>
        <p className="mt-2 text-zinc-600 dark:text-zinc-400">
          Tell us your exam date and which days you can study. We&apos;ll
          spread the {modules.length} modules across that window.
        </p>

        <form action={createStudyPlan} className="mt-8 flex flex-col gap-6">
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
      </main>
    );
  }

  const moduleBySlug = new Map(modules.map((m) => [m.slug, m]));
  const completedCount = plan.moduleSchedules.filter((s) => s.completedAt).length;

  return (
    <main className="mx-auto w-full max-w-3xl flex-1 px-6 py-16">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
          My Study Schedule
        </h1>
        <span className="text-sm text-zinc-600 dark:text-zinc-400">
          {completedCount} / {plan.moduleSchedules.length} done
        </span>
      </div>
      <p className="mt-2 text-zinc-600 dark:text-zinc-400">
        Exam date: {plan.examDate.toLocaleDateString()}
      </p>

      <ul className="mt-8 flex flex-col gap-3">
        {plan.moduleSchedules.map((s) => {
          const module = moduleBySlug.get(s.moduleSlug);
          if (!module) return null;
          return (
            <li
              key={s.id}
              className="flex items-center justify-between gap-4 rounded-lg border border-black/[.08] p-4 dark:border-white/[.145]"
            >
              <div className="flex items-center gap-4">
                <CompleteToggle
                  moduleScheduleId={s.id}
                  initialCompleted={!!s.completedAt}
                />
                <Link
                  href={`/study/${module.slug}`}
                  className="font-medium text-zinc-900 hover:underline dark:text-zinc-50"
                >
                  {module.title}
                </Link>
              </div>
              <DatePicker
                moduleScheduleId={s.id}
                initialDate={s.scheduledOn.toISOString().slice(0, 10)}
              />
            </li>
          );
        })}
      </ul>

      <form
        action={createStudyPlan}
        className="mt-10 rounded-lg border border-black/[.08] p-4 dark:border-white/[.145]"
      >
        <p className="text-sm font-medium text-zinc-900 dark:text-zinc-50">
          Need to change your plan?
        </p>
        <div className="mt-3 flex flex-col gap-4">
          <input
            type="date"
            name="examDate"
            defaultValue={plan.examDate.toISOString().slice(0, 10)}
            required
            className="w-fit rounded-md border border-black/[.08] bg-transparent px-3 py-2 dark:border-white/[.145]"
          />
          <div className="flex flex-wrap gap-3">
            {STUDY_DAYS.map((day) => (
              <label
                key={day.key}
                className="flex items-center gap-2 rounded-md border border-black/[.08] px-3 py-2 text-sm dark:border-white/[.145]"
              >
                <input
                  type="checkbox"
                  name="studyDays"
                  value={day.key}
                  defaultChecked={plan.studyDays.includes(day.key)}
                />
                {day.label}
              </label>
            ))}
          </div>
          <button
            type="submit"
            className="h-10 w-fit rounded-full border border-black/[.08] px-5 text-sm font-medium transition-colors hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-white/[.06]"
          >
            Rebuild Schedule
          </button>
        </div>
      </form>
    </main>
  );
}
