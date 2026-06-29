import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { stripe } from "@/lib/stripe";
import { PLANS, type Plan } from "@/lib/billing";

export async function POST(req: Request) {
  const session = await auth();
  if (!session?.user?.id || !session.user.email) {
    return NextResponse.json({ error: "Sign in required" }, { status: 401 });
  }

  const body = await req.json().catch(() => null);
  const plan = body?.plan as Plan | undefined;
  const referral = typeof body?.referral === "string" ? body.referral.slice(0, 64) : undefined;
  if (!plan || !(plan in PLANS)) {
    return NextResponse.json({ error: "Invalid plan" }, { status: 400 });
  }

  const priceId = process.env[PLANS[plan].priceEnvVar];
  if (!priceId) {
    return NextResponse.json(
      { error: `Missing ${PLANS[plan].priceEnvVar} environment variable` },
      { status: 500 }
    );
  }

  const origin = req.headers.get("origin") ?? "http://localhost:3000";

  const checkoutSession = await stripe.checkout.sessions.create({
    mode: "payment",
    payment_method_types: ["card"],
    line_items: [{ price: priceId, quantity: 1 }],
    client_reference_id: session.user.id,
    customer_email: session.user.email,
    allow_promotion_codes: true,
    metadata: { plan, userId: session.user.id, ...(referral ? { referral } : {}) },
    success_url: `${origin}/purchase/success?plan=${plan}`,
    cancel_url: `${origin}/pricing`,
  });

  return NextResponse.json({ url: checkoutSession.url });
}
