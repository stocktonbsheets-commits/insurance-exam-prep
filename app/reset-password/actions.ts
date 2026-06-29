"use server";

import bcrypt from "bcryptjs";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";

export async function resetPassword(formData: FormData) {
  const email = String(formData.get("email") ?? "").trim().toLowerCase();
  const token = String(formData.get("token") ?? "");
  const password = String(formData.get("password") ?? "");

  if (!email || !token || password.length < 8) {
    throw new Error("Password must be at least 8 characters.");
  }

  const record = await prisma.verificationToken.findUnique({
    where: { identifier_token: { identifier: email, token } },
  });

  if (!record || record.expires < new Date()) {
    throw new Error("This reset link is invalid or has expired. Request a new one.");
  }

  const passwordHash = await bcrypt.hash(password, 10);
  await prisma.user.update({ where: { email }, data: { passwordHash } });
  await prisma.verificationToken.delete({
    where: { identifier_token: { identifier: email, token } },
  });

  redirect("/signin?reset=1");
}
