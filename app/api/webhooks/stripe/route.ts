import { NextResponse } from "next/server";
import Stripe from "stripe";
import { stripe } from "@/lib/stripe";
import { prisma } from "@/lib/prisma";
import { tracksUnlockedBy, type Plan } from "@/lib/billing";

export async function POST(req: Request) {
  const signature = req.headers.get("stripe-signature");
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  if (!signature || !webhookSecret) {
    return NextResponse.json({ error: "Missing signature or secret" }, { status: 400 });
  }

  const payload = await req.text();

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(payload, signature, webhookSecret);
  } catch {
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const checkoutSession = event.data.object as Stripe.Checkout.Session;
    const userId = checkoutSession.client_reference_id;
    const plan = checkoutSession.metadata?.plan as Plan | undefined;

    if (userId && plan) {
      const newTracks = tracksUnlockedBy(plan);
      const user = await prisma.user.findUnique({
        where: { id: userId },
        select: { purchasedTracks: true },
      });
      const merged = Array.from(new Set([...(user?.purchasedTracks ?? []), ...newTracks]));

      try {
        await prisma.$transaction([
          prisma.user.update({
            where: { id: userId },
            data: { purchasedTracks: merged },
          }),
          prisma.purchase.create({
            data: {
              userId,
              track: plan,
              stripeSessionId: checkoutSession.id,
              amountCents: checkoutSession.amount_total ?? 0,
              referral: checkoutSession.metadata?.referral ?? null,
            },
          }),
        ]);
      } catch (err) {
        // Stripe retries webhooks; a duplicate stripeSessionId means we already processed this one.
        const isDuplicate =
          err instanceof Object && "code" in err && (err as { code?: string }).code === "P2002";
        if (!isDuplicate) throw err;
      }
    }
  }

  return NextResponse.json({ received: true });
}
