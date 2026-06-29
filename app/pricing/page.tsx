import { Suspense } from "react";
import { auth } from "@/lib/auth";
import { getCurrentUserPurchasedTracks } from "@/lib/billing";
import { BuyButton } from "./buy-button";
import { CaptureReferral } from "./capture-referral";

export default async function PricingPage() {
  const session = await auth();
  const purchasedTracks = await getCurrentUserPurchasedTracks();
  const ownsBundle = purchasedTracks.includes("bundle");

  return (
    <div className="flex flex-1 flex-col">
      <div className="relative overflow-hidden bg-gradient-to-b from-brand-50/40 to-background text-center dark:from-brand-900/10 dark:to-background">
        <svg
          className="pointer-events-none absolute -top-24 left-1/2 h-[320px] w-[600px] -translate-x-1/2 opacity-[0.05] dark:opacity-[0.08]"
          viewBox="0 0 600 320"
          fill="none"
          aria-hidden="true"
        >
          <circle cx="300" cy="80" r="170" fill="var(--color-brand-500)" />
        </svg>
        <div className="relative mx-auto w-full max-w-4xl px-6 pt-16 pb-10">
          <p className="text-sm font-medium uppercase tracking-wide text-zinc-500">
            Pricing
          </p>
          <h1 className="mt-1 text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl dark:text-zinc-50">
            One price. Pass your Idaho exam.
          </h1>
          <p className="mx-auto mt-2 max-w-xl text-zinc-600 dark:text-zinc-400">
            Full access to every module, the complete question bank, the
            timed challenge mode, and a full-length practice exam built from
            the official Idaho content outline — no subscription, pay once.
          </p>
        </div>
      </div>
      <main className="mx-auto w-full max-w-4xl flex-1 px-6 pb-16 text-center">
      <Suspense fallback={null}>
        <CaptureReferral />
      </Suspense>

      <div className="mt-2 grid gap-6 sm:grid-cols-3">
        <div className="flex flex-col gap-4 rounded-2xl bg-background p-6 text-left shadow-sm shadow-black/5 ring-1 ring-black/[.06] dark:ring-white/[.1]">
          <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
            Life & Health
          </h2>
          <p className="text-3xl font-bold text-zinc-900 dark:text-zinc-50">
            $75
          </p>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            Every L&H module, quiz bank, and practice exam.
          </p>
          <BuyButton
            plan="life-health"
            label={purchasedTracks.includes("life-health") || ownsBundle ? "Unlocked" : "Get L&H access"}
            signedIn={!!session?.user}
          />
        </div>

        <div className="relative flex flex-col gap-4 rounded-2xl bg-gradient-to-br from-brand-600 to-brand-800 p-6 text-left shadow-lg shadow-brand-900/20 sm:-my-3 sm:scale-105">
          <span className="absolute -top-3 left-6 rounded-full bg-accent-500 px-3 py-1 text-xs font-semibold text-white">
            Best value
          </span>
          <h2 className="text-lg font-semibold text-white">
            Both tracks
          </h2>
          <p className="text-3xl font-bold text-white">
            $100
          </p>
          <p className="text-sm text-brand-100">
            Life & Health and Property & Casualty, fully unlocked.
          </p>
          <BuyButton
            plan="bundle"
            label={ownsBundle ? "Unlocked" : "Get full access"}
            signedIn={!!session?.user}
            highlighted
          />
        </div>

        <div className="flex flex-col gap-4 rounded-2xl bg-background p-6 text-left shadow-sm shadow-black/5 ring-1 ring-black/[.06] dark:ring-white/[.1]">
          <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
            Property & Casualty
          </h2>
          <p className="text-3xl font-bold text-zinc-900 dark:text-zinc-50">
            $75
          </p>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            Every P&C module, quiz bank, and practice exam.
          </p>
          <BuyButton
            plan="property-casualty"
            label={purchasedTracks.includes("property-casualty") || ownsBundle ? "Unlocked" : "Get P&C access"}
            signedIn={!!session?.user}
          />
        </div>
      </div>

      <div className="mt-6 flex items-center justify-center gap-2 text-sm font-medium text-brand-700 dark:text-brand-300">
        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M9 12l2 2 4-4" />
          <circle cx="12" cy="12" r="9" />
        </svg>
        7-day money-back guarantee — not the right fit? Full refund, no questions asked.
      </div>

      <div className="mt-3 flex items-center justify-center gap-2 text-xs text-zinc-500">
        <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect x="5" y="11" width="14" height="9" rx="2" />
          <path d="M8 11V7a4 4 0 0 1 8 0v4" />
        </svg>
        Secure checkout powered by Stripe — card, Apple Pay, or Google Pay
      </div>

      <p className="mt-6 text-sm text-zinc-500">
        Already tried the free preview module? Full access picks up right
        where you left off — your progress is saved.
      </p>

      <div className="mt-16 text-left">
        <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
          How this compares
        </h2>
        <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
          Most national exam-prep providers bundle generic 50-state content
          with pre-licensing hours you don't need in Idaho, often at
          $150–$300+. This is exam-prep only, Idaho-specific, and a flat
          one-time price.
        </p>

        <div className="mt-5 overflow-hidden rounded-2xl bg-background shadow-sm shadow-black/5 ring-1 ring-black/[.06] dark:ring-white/[.1]">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-black/[.06] dark:border-white/[.1]">
                <th className="px-5 py-3 text-left font-medium text-zinc-500">
                  &nbsp;
                </th>
                <th className="px-5 py-3 text-left font-semibold text-brand-700 dark:text-brand-300">
                  Idaho Exam Prep
                </th>
                <th className="px-5 py-3 text-left font-medium text-zinc-500">
                  Typical national provider
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-black/[.06] dark:divide-white/[.1]">
              <tr>
                <td className="px-5 py-3 font-medium text-zinc-700 dark:text-zinc-300">
                  Price
                </td>
                <td className="px-5 py-3 font-semibold text-zinc-900 dark:text-zinc-50">
                  $75–$100, one time
                </td>
                <td className="px-5 py-3 text-zinc-500">
                  Often $150–$300+
                </td>
              </tr>
              <tr>
                <td className="px-5 py-3 font-medium text-zinc-700 dark:text-zinc-300">
                  Subscription?
                </td>
                <td className="px-5 py-3 font-semibold text-zinc-900 dark:text-zinc-50">
                  No — pay once, keep access
                </td>
                <td className="px-5 py-3 text-zinc-500">
                  Often yes, or bundled with pre-licensing hours Idaho doesn't require
                </td>
              </tr>
              <tr>
                <td className="px-5 py-3 font-medium text-zinc-700 dark:text-zinc-300">
                  Idaho-specific content?
                </td>
                <td className="px-5 py-3 font-semibold text-zinc-900 dark:text-zinc-50">
                  Yes — real Idaho Code citations
                </td>
                <td className="px-5 py-3 text-zinc-500">
                  Usually generic 50-state material
                </td>
              </tr>
              <tr>
                <td className="px-5 py-3 font-medium text-zinc-700 dark:text-zinc-300">
                  Setup
                </td>
                <td className="px-5 py-3 font-semibold text-zinc-900 dark:text-zinc-50">
                  Sign up, pay, start studying — no account hoops
                </td>
                <td className="px-5 py-3 text-zinc-500">
                  Often requires enrollment in a full course package
                </td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
      </main>
    </div>
  );
}
