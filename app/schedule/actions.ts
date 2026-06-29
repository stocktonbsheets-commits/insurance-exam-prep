"use server";

import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { buildModuleSchedule, parseDateOnly } from "@/lib/schedule";
import { revalidatePath } from "next/cache";

async function savePlan(
  userId: string,
  examDateRaw: string,
  studyDays: string[],
  track: "life-health" | "property-casualty" | undefined
) {
  const examDate = parseDateOnly(examDateRaw);
  const scheduleEntries = buildModuleSchedule(examDate, studyDays, track).map((s) => ({
    moduleSlug: s.moduleSlug,
    scheduledOn: new Date(s.scheduledOn),
  }));

  await prisma.studyPlan.upsert({
    where: { userId },
    create: {
      userId,
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

export async function createStudyPlan(formData: FormData) {
  const session = await auth();
  if (!session?.user?.id) {
    throw new Error("Not signed in");
  }

  const examDateRaw = formData.get("examDate");
  const studyDays = formData.getAll("studyDays").map((d) => String(d));
  const trackRaw = formData.get("track");
  const track =
    trackRaw === "life-health" || trackRaw === "property-casualty" ? trackRaw : undefined;

  if (typeof examDateRaw !== "string" || !examDateRaw || studyDays.length === 0) {
    throw new Error("Missing exam date or study days");
  }

  await savePlan(session.user.id, examDateRaw, studyDays, track);
}

export async function migrateGuestPlan(
  examDateRaw: string,
  studyDays: string[],
  track?: "life-health" | "property-casualty"
) {
  const session = await auth();
  if (!session?.user?.id) {
    throw new Error("Not signed in");
  }
  if (!examDateRaw || studyDays.length === 0) return;

  await savePlan(session.user.id, examDateRaw, studyDays, track);
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

export async function rescheduleModule(moduleScheduleId: string, scheduledOn: string) {
  const session = await auth();
  if (!session?.user?.id) {
    throw new Error("Not signed in");
  }

  await prisma.moduleSchedule.update({
    where: { id: moduleScheduleId },
    data: { scheduledOn: parseDateOnly(scheduledOn) },
  });

  revalidatePath("/schedule");
}

export async function shiftSchedule(deltaDays: number) {
  const session = await auth();
  if (!session?.user?.id) {
    throw new Error("Not signed in");
  }
  if (!Number.isFinite(deltaDays) || deltaDays === 0) return;

  const plan = await prisma.studyPlan.findUnique({
    where: { userId: session.user.id },
    include: { moduleSchedules: true },
  });
  if (!plan) return;

  await prisma.$transaction(
    plan.moduleSchedules.map((s) => {
      const next = new Date(s.scheduledOn);
      next.setDate(next.getDate() + deltaDays);
      return prisma.moduleSchedule.update({
        where: { id: s.id },
        data: { scheduledOn: next },
      });
    })
  );

  revalidatePath("/schedule");
}
