import { PageHero } from "../page-hero";

export default function TermsPage() {
  return (
    <div className="flex flex-1 flex-col">
      <PageHero title="Terms of Service" subtitle="Last updated June 2026." />
      <main className="mx-auto w-full max-w-2xl flex-1 px-6 pb-16">
        <div className="flex flex-col gap-6 text-sm text-zinc-700 dark:text-zinc-300">
          <section>
            <h2 className="font-semibold text-zinc-900 dark:text-zinc-50">
              What you&apos;re buying
            </h2>
            <p className="mt-2">
              Idaho Exam Prep sells one-time digital access to study modules,
              quizzes, and a practice exam for the Idaho insurance producer
              licensing exam. Purchases are a single payment for permanent
              access to the track(s) you buy — there is no subscription and
              no recurring charge.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-zinc-900 dark:text-zinc-50">
              Refunds
            </h2>
            <p className="mt-2">
              You&apos;re covered by a 7-day money-back guarantee from the
              date of purchase. Email contact@idahoexamprep.org and
              you&apos;ll get a full refund, no questions asked.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-zinc-900 dark:text-zinc-50">
              No guarantee of exam results
            </h2>
            <p className="mt-2">
              This course is study material, not a guarantee that you will
              pass the Idaho producer licensing exam. Content is checked
              against Pearson VUE&apos;s official Idaho content outline, but
              the exam itself is administered by Pearson VUE and the Idaho
              Department of Insurance, not by us.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-zinc-900 dark:text-zinc-50">
              Not affiliated with the State of Idaho
            </h2>
            <p className="mt-2">
              Idaho Exam Prep is an independent study tool. It is not
              produced, endorsed by, or affiliated with the Idaho Department
              of Insurance or Pearson VUE.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-zinc-900 dark:text-zinc-50">
              Account responsibility
            </h2>
            <p className="mt-2">
              You&apos;re responsible for keeping your account credentials
              secure. Access is for your personal use only and isn&apos;t
              transferable to another person.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-zinc-900 dark:text-zinc-50">
              Changes to these terms
            </h2>
            <p className="mt-2">
              We may update these terms as the course evolves. Material
              changes will be reflected on this page with an updated date.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-zinc-900 dark:text-zinc-50">
              Contact
            </h2>
            <p className="mt-2">
              Questions about these terms? Email contact@idahoexamprep.org.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
