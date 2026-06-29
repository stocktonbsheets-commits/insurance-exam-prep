import Link from "next/link";
import { PageHero } from "../page-hero";

export default function PartnersPage() {
  return (
    <div className="flex flex-1 flex-col">
      <PageHero
        eyebrow="Partners"
        title="Help your people pass the Idaho exam — for free, or for a referral fee."
        subtitle="If you're an Idaho insurance agency hiring new producers, or you teach an optional exam-prep or insurance course, this is built for the moment your people need to actually pass Pearson VUE."
      />
      <main className="mx-auto w-full max-w-3xl flex-1 px-6 pb-16">

      <div className="grid gap-6 sm:grid-cols-2">
        <div className="rounded-2xl bg-background p-6 shadow-sm shadow-black/5 ring-1 ring-black/[.06] dark:ring-white/[.1]">
          <h2 className="font-semibold text-zinc-900 dark:text-zinc-50">
            For agencies
          </h2>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            Get your new hires from "just hired" to "exam-ready" in days, not
            weeks. Ask about free seats or a bulk rate for your next hiring
            round.
          </p>
        </div>
        <div className="rounded-2xl bg-background p-6 shadow-sm shadow-black/5 ring-1 ring-black/[.06] dark:ring-white/[.1]">
          <h2 className="font-semibold text-zinc-900 dark:text-zinc-50">
            For instructors & educators
          </h2>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            This doesn't compete with your course — it's what your students
            do next, whether they took an optional course or are heading
            straight to the exam. Point them here with a referral link or
            discount code and we'll track every signup back to you.
          </p>
        </div>
      </div>

      <div className="mt-10 rounded-2xl bg-background p-6 shadow-sm shadow-black/5 ring-1 ring-black/[.06] dark:ring-white/[.1]">
        <h2 className="font-semibold text-zinc-900 dark:text-zinc-50">
          How it works
        </h2>
        <ol className="mt-3 flex flex-col gap-3 text-sm text-zinc-600 dark:text-zinc-400">
          <li>
            1. We give you a referral link and/or a Stripe promo code for
            your students, e.g.
            <code className="mt-1.5 block w-fit rounded-md bg-black/[.05] px-2 py-1 text-xs dark:bg-white/[.1]">
              idahoexamprep.com/pricing?ref=youragency
            </code>
          </li>
          <li>
            2. Anyone who buys through your link or code is tracked back to
            you automatically.
          </li>
          <li>
            3. We settle up on referral fees, or comp seats, depending on
            what we agree to.
          </li>
        </ol>
      </div>

      <div className="mt-10 flex flex-col items-center gap-3 text-center">
        <p className="text-zinc-600 dark:text-zinc-400">
          Want a referral link or a discount code to send to your people?
        </p>
        <a
          href="mailto:contact@idahoexamprep.org?subject=Idaho%20Exam%20Prep%20Partnership"
          className="flex h-11 items-center justify-center rounded-full bg-brand-600 px-6 text-sm font-medium text-white transition-colors hover:bg-brand-700"
        >
          Get in touch
        </a>
        <Link href="/pricing" className="text-sm text-zinc-500 hover:underline">
          Or just see the pricing page
        </Link>
      </div>
      </main>
    </div>
  );
}
