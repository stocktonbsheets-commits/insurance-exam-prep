import Link from "next/link";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { modules } from "@/lib/content";
import { createStudyPlan } from "./actions";
import { CompleteToggle } from "./complete-toggle";
import { DatePicker } from "./date-picker";
import { GuestSchedule } from "./guest-schedule";
import { MigrateGuestPlan } from "./migrate-guest-plan";
import { ShiftControl } from "./shift-control";
import { STUDY_DAYS, daysUntil } from "@/lib/schedule";
import { getCurrentUserPurchasedTracks, hasTrackAccess } from "@/lib/billing";
import { CATEGORY_ORDER, categoryFor, categoryIconPath } from "@/lib/module-meta";
import { PageHero } from "../page-hero";

export default async function SchedulePage({
  searchParams,
}: {
  searchParams: Promise<{ track?: string }>;
}) {
  const { track: trackRaw } = await searchParams;
  const track =
    trackRaw === "life-health" || trackRaw === "property-casualty" ? trackRaw : undefined;
  const trackModules = track ? modules.filter((m) => m.track === track) : modules;
  const session = await auth();

  if (!session?.user) {
    return (
      <div className="flex flex-1 flex-col">
        <PageHero
          title="My Study Schedule"
          subtitle={
            <>
              Build a schedule right now as a guest — it&apos;s saved in this
              browser only.{" "}
              <Link href="/signup" className="font-medium text-brand-600 hover:underline dark:text-brand-300">
                Create an account
              </Link>{" "}
              to save it permanently and access it from any device.
            </>
          }
        />
        <main className="mx-auto w-full max-w-3xl flex-1 px-6 pb-16">
          <GuestSchedule track={track} />
        </main>
      </div>
    );
  }

  const plan = await prisma.studyPlan.findUnique({
    where: { userId: session.user.id },
    include: { moduleSchedules: { orderBy: { scheduledOn: "asc" } } },
  });

  if (!plan) {
    return (
      <div className="flex flex-1 flex-col">
        <PageHero
          title="Build Your Study Schedule"
          subtitle={`Tell us your exam date and which days you can study. We'll spread the ${trackModules.length} modules across that window.`}
        />
        <main className="mx-auto w-full max-w-3xl flex-1 px-6 pb-16">
        <MigrateGuestPlan />

        <form action={createStudyPlan} className="mt-2 flex flex-col gap-6 rounded-2xl bg-background p-6 shadow-sm shadow-black/5 ring-1 ring-black/[.06] dark:ring-white/[.1]">
          <div>
            <label className="block text-sm font-medium text-zinc-900 dark:text-zinc-50">
              Exam date
            </label>
            <input
              type="date"
              name="examDate"
              required
              className="mt-2 rounded-xl border border-black/[.08] bg-transparent px-3.5 py-2.5 transition-colors focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-100 dark:border-white/[.145] dark:focus:ring-brand-900/40"
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
                  className="flex items-center gap-2 rounded-full border border-black/[.08] px-3.5 py-2 text-sm transition-colors hover:bg-black/[.03] dark:border-white/[.145] dark:hover:bg-white/[.06]"
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
              <label className="flex items-center gap-2 rounded-full border border-black/[.08] px-3.5 py-2 text-sm transition-colors hover:bg-black/[.03] dark:border-white/[.145] dark:hover:bg-white/[.06]">
                <input
                  type="radio"
                  name="track"
                  value="life-health"
                  defaultChecked={track === "life-health"}
                />
                Life & Health
              </label>
              <label className="flex items-center gap-2 rounded-full border border-black/[.08] px-3.5 py-2 text-sm transition-colors hover:bg-black/[.03] dark:border-white/[.145] dark:hover:bg-white/[.06]">
                <input
                  type="radio"
                  name="track"
                  value="property-casualty"
                  defaultChecked={track === "property-casualty"}
                />
                Property & Casualty
              </label>
              <label className="flex items-center gap-2 rounded-full border border-black/[.08] px-3.5 py-2 text-sm transition-colors hover:bg-black/[.03] dark:border-white/[.145] dark:hover:bg-white/[.06]">
                <input type="radio" name="track" value="" defaultChecked={!track} />
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
        </main>
      </div>
    );
  }

  const moduleBySlug = new Map(modules.map((m) => [m.slug, m]));
  const completedCount = plan.moduleSchedules.filter((s) => s.completedAt).length;
  const purchasedTracks = await getCurrentUserPurchasedTracks();
  const remainingDays = daysUntil(plan.examDate);

  const planTracks = new Set(
    plan.moduleSchedules
      .map((s) => moduleBySlug.get(s.moduleSlug)?.track)
      .filter((t): t is "life-health" | "property-casualty" => !!t)
  );
  const inferredTrack = planTracks.size === 1 ? Array.from(planTracks)[0] : undefined;

  return (
    <div className="flex flex-1 flex-col">
      <PageHero
        title="My Study Schedule"
        subtitle={
          <>
            Exam date: {plan.examDate.toLocaleDateString()} —{" "}
            <span className="font-medium text-brand-600 dark:text-brand-300">
              {remainingDays > 0
                ? `${remainingDays} day${remainingDays === 1 ? "" : "s"} until your exam`
                : remainingDays === 0
                ? "exam is today"
                : "exam date has passed"}
            </span>
          </>
        }
      />
      <main className="mx-auto w-full max-w-3xl flex-1 px-6 pb-16">
      <div className="flex items-center justify-end">
        <span className="text-sm text-zinc-600 dark:text-zinc-400">
          {completedCount} / {plan.moduleSchedules.length} done
        </span>
      </div>

      {CATEGORY_ORDER.map((category) => {
        const categoryEntries = plan.moduleSchedules.filter(
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
                const locked = !module.free && !hasTrackAccess(purchasedTracks, module.track);
                return (
                  <li
                    key={s.id}
                    className="flex items-center justify-between gap-4 rounded-lg border border-black/[.08] p-4 dark:border-white/[.145]"
                  >
                    <div className="flex items-center gap-4">
                      {locked ? (
                        <input type="checkbox" disabled className="h-5 w-5" />
                      ) : (
                        <CompleteToggle
                          moduleScheduleId={s.id}
                          initialCompleted={!!s.completedAt}
                        />
                      )}
                      <Link
                        href={locked ? "/pricing" : `/study/${module.slug}`}
                        className="font-medium text-zinc-900 hover:underline dark:text-zinc-50"
                      >
                        {module.title}
                      </Link>
                      {locked && <span className="text-xs text-zinc-400">🔒</span>}
                    </div>
                    <DatePicker
                      moduleScheduleId={s.id}
                      initialDate={s.scheduledOn.toISOString().slice(0, 10)}
                    />
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}

      <ShiftControl />

      <p className="mt-4 text-sm text-zinc-500">
        Locked modules need{" "}
        <Link href="/pricing" className="text-brand-600 hover:underline dark:text-brand-300">
          full access
        </Link>{" "}
        to study and check off.
      </p>

      <form
        action={createStudyPlan}
        className="mt-6 rounded-lg border border-black/[.08] p-4 dark:border-white/[.145]"
      >
        <p className="text-sm font-medium text-zinc-900 dark:text-zinc-50">
          Need to change your plan?
        </p>
        <div className="mt-3 flex flex-col gap-4">
          <input type="hidden" name="track" value={inferredTrack ?? ""} />
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
    </div>
  );
}
