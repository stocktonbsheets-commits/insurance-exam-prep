"use server";

import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { buildModuleSchedule } from "@/lib/schedule";
import { revalidatePath } from "next/cache";

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
  const scheduleEntries = buildModuleSchedule(examDate, studyDays).map((s) => ({
    moduleSlug: s.moduleSlug,
    scheduledOn: new Date(s.scheduledOn),
  }));

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
