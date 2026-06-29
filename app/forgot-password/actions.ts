"use server";

import crypto from "crypto";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { sendMail } from "@/lib/mail";

export async function requestPasswordReset(formData: FormData) {
  const email = String(formData.get("email") ?? "").trim().toLowerCase();
  if (!email) return;

  const user = await prisma.user.findUnique({ where: { email } });
  // Always behave the same whether or not the account exists, so this can't be used to find out who has an account.
  if (!user?.passwordHash) return;

  const token = crypto.randomBytes(32).toString("hex");
  const expires = new Date(Date.now() + 1000 * 60 * 60);

  await prisma.verificationToken.create({
    data: { identifier: email, token, expires },
  });

  const origin = process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000";
  const resetUrl = `${origin}/reset-password?token=${token}&email=${encodeURIComponent(email)}`;

  await sendMail({
    to: email,
    subject: "Reset your Idaho Exam Prep password",
    html: `<p>Click the link below to set a new password. This link expires in 1 hour.</p><p><a href="${resetUrl}">${resetUrl}</a></p>`,
  });
}

export async function requestPasswordResetAndRedirect(formData: FormData) {
  await requestPasswordReset(formData);
  redirect("/forgot-password?sent=1");
}
