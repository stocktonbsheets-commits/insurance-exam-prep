import { PageHero } from "../page-hero";

export default function PrivacyPage() {
  return (
    <div className="flex flex-1 flex-col">
      <PageHero title="Privacy Policy" subtitle="Last updated June 2026." />
      <main className="mx-auto w-full max-w-2xl flex-1 px-6 pb-16">
        <div className="flex flex-col gap-6 text-sm text-zinc-700 dark:text-zinc-300">
          <section>
            <h2 className="font-semibold text-zinc-900 dark:text-zinc-50">
              What we collect
            </h2>
            <p className="mt-2">
              When you create an account, we store your name, email address,
              and a securely hashed version of your password — we never
              store your password in plain text. If you build a study
              schedule, we store your exam date, study days, and progress on
              each module so it can sync across devices.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-zinc-900 dark:text-zinc-50">
              Payments
            </h2>
            <p className="mt-2">
              Payments are processed by Stripe. We never see or store your
              full card number — Stripe handles that directly. We keep a
              record of what you purchased and when, so we can grant access
              and process refunds.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-zinc-900 dark:text-zinc-50">
              How we use your data
            </h2>
            <p className="mt-2">
              Your data is used to run your account, unlock the content
              you&apos;ve paid for, and respond if you contact us. We don&apos;t
              sell your information to third parties.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-zinc-900 dark:text-zinc-50">
              Referral tracking
            </h2>
            <p className="mt-2">
              If you arrive via a partner referral link, we record which
              partner referred you alongside your purchase, so we can
              attribute and pay out referrals correctly.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-zinc-900 dark:text-zinc-50">
              Your data, your control
            </h2>
            <p className="mt-2">
              Email contact@idahoexamprep.org to request a copy of your data
              or to have your account and associated data deleted.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-zinc-900 dark:text-zinc-50">
              Contact
            </h2>
            <p className="mt-2">
              Questions about this policy? Email contact@idahoexamprep.org.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
