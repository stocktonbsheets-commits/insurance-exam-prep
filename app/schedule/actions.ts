"use server";

import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { modules } from "@/lib/content";
import { revalidatePath } from "next/cache";

const WEEKDAY_INDEX: Record<string, number> = {
  sun: 0,
  mon: 1,
  tue: 2,
  wed: 3,
  thu: 4,
  fri: 5,
  sat: 6,
};

function buildScheduleDates(examDate: Date, studyDays: string[]): Date[] {
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

export async function createStudyPlan(formData: FormData) {
  const session = await auth();
  if (!session?.user?.id) {
    throw new Error("Not signed in");
  }

  const examDateRaw = formData.get("examDate");
  const studyDays = formData.getAll("studyDays").map((d) => String(d));

  if (typeof examDateRaw !== "string" || !examDateRaw || studyDays.length === 0) {
    throw new Error("Missing exam date or study days");
  }

  const examDate = new Date(examDateRaw);
  const dates = buildScheduleDates(examDate, studyDays);

  const moduleSlugs = modules.map((m) => m.slug);
  const scheduleEntries = moduleSlugs.map((slug, i) => {
    const dateIndex =
      dates.length === 0
        ? 0
        : Math.min(
            dates.length - 1,
            Math.floor((i * dates.length) / moduleSlugs.length)
          );
    return { moduleSlug: slug, scheduledOn: dates[dateIndex] ?? examDate };
  });

  await prisma.studyPlan.upsert({
    where: { userId: session.user.id },
    create: {
      userId: session.user.id,
      examDate,
      studyDays,
      moduleSchedules: { create: scheduleEntries },
    },
    update: {
      examDate,
      studyDays,
      moduleSchedules: {
        deleteMany: {},
        create: scheduleEntries,
      },
    },
  });

  revalidatePath("/schedule");
}

export async function toggleModuleComplete(moduleScheduleId: string, completed: boolean) {
  const session = await auth();
  if (!session?.user?.id) {
    throw new Error("Not signed in");
  }

  await prisma.moduleSchedule.update({
    where: { id: moduleScheduleId },
    data: { completedAt: completed ? new Date() : null },
  });

  revalidatePath("/schedule");
}
