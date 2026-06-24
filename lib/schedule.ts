import { modules } from "@/lib/content";

const WEEKDAY_INDEX: Record<string, number> = {
  sun: 0,
  mon: 1,
  tue: 2,
  wed: 3,
  thu: 4,
  fri: 5,
  sat: 6,
};

export function buildScheduleDates(examDate: Date, studyDays: string[]): Date[] {
  const allowedIndexes = new Set(studyDays.map((d) => WEEKDAY_INDEX[d]));
  const dates: Date[] = [];
  const cursor = new Date();
  cursor.setHours(0, 0, 0, 0);
  cursor.setDate(cursor.getDate() + 1);

  while (cursor < examDate && dates.length < 60) {
    if (allowedIndexes.has(cursor.getDay())) {
      dates.push(new Date(cursor));
    }
    cursor.setDate(cursor.getDate() + 1);
  }

  return dates;
}

export type ScheduledModule = {
  moduleSlug: string;
  scheduledOn: string; // ISO date string
  completed: boolean;
};

export function buildModuleSchedule(
  examDate: Date,
  studyDays: string[],
  track?: "life-health" | "property-casualty"
): ScheduledModule[] {
  const dates = buildScheduleDates(examDate, studyDays);
  const moduleSlugs = (track ? modules.filter((m) => m.track === track) : modules).map(
    (m) => m.slug
  );

  return moduleSlugs.map((slug, i) => {
    const dateIndex =
      dates.length === 0
        ? 0
        : Math.min(dates.length - 1, Math.floor((i * dates.length) / moduleSlugs.length));
    const scheduledOn = dates[dateIndex] ?? examDate;
    return { moduleSlug: slug, scheduledOn: scheduledOn.toISOString(), completed: false };
  });
}

export const STUDY_DAYS = [
  { key: "mon", label: "Mon" },
  { key: "tue", label: "Tue" },
  { key: "wed", label: "Wed" },
  { key: "thu", label: "Thu" },
  { key: "fri", label: "Fri" },
  { key: "sat", label: "Sat" },
  { key: "sun", label: "Sun" },
];
