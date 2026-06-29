import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export type Plan = "life-health" | "property-casualty" | "bundle";

export const PLANS: Record<Plan, { label: string; priceCents: number; priceEnvVar: string }> = {
  "life-health": {
    label: "Life & Health — full access",
    priceCents: 7500,
    priceEnvVar: "STRIPE_PRICE_LH",
  },
  "property-casualty": {
    label: "Property & Casualty — full access",
    priceCents: 7500,
    priceEnvVar: "STRIPE_PRICE_PC",
  },
  bundle: {
    label: "Both tracks — full access",
    priceCents: 10000,
    priceEnvVar: "STRIPE_PRICE_BUNDLE",
  },
};

export function tracksUnlockedBy(plan: Plan): Array<"life-health" | "property-casualty"> {
  if (plan === "bundle") return ["life-health", "property-casualty"];
  return [plan];
}

export function hasTrackAccess(
  purchasedTracks: string[],
  track: "life-health" | "property-casualty"
): boolean {
  return purchasedTracks.includes(track) || purchasedTracks.includes("bundle");
}

export async function getCurrentUserPurchasedTracks(): Promise<string[]> {
  const session = await auth();
  if (!session?.user?.id) return [];
  const user = await prisma.user.findUnique({
    where: { id: session.user.id },
    select: { purchasedTracks: true },
  });
  return user?.purchasedTracks ?? [];
}

export async function userHasTrackAccess(
  track: "life-health" | "property-casualty"
): Promise<boolean> {
  const purchasedTracks = await getCurrentUserPurchasedTracks();
  return hasTrackAccess(purchasedTracks, track);
}
