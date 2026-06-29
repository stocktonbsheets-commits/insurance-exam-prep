import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  const email = typeof body?.email === "string" ? body.email.trim() : "";
  const track = typeof body?.track === "string" ? body.track : "";
  const score = Number(body?.score);
  const total = Number(body?.total);

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Valid email required" }, { status: 400 });
  }
  if (!track || !Number.isFinite(score) || !Number.isFinite(total)) {
    return NextResponse.json({ error: "Invalid diagnostic result" }, { status: 400 });
  }

  await prisma.lead.create({ data: { email, track, score, total } });

  return NextResponse.json({ ok: true });
}
