import { PageHero } from "../page-hero";

const FAQS = [
  {
    q: "Do I need to take a pre-licensing course before this?",
    a: "No — Idaho is one of the few states that doesn't require pre-licensing education hours at all. You can go straight to the exam. This course exists for exactly that situation: instead of sitting through a mandatory-feeling course you don't need, you get straight to practicing what's actually tested.",
  },
  {
    q: "Is this only for Idaho, or does it cover other states too?",
    a: "Idaho only. Every module — including general Life/Health and Property/Casualty content — is checked against Pearson VUE's official Idaho content outline, and the Idaho Insurance Law modules cite real Idaho Code and IDAPA sections. If you're testing in another state, this isn't built for that exam.",
  },
  {
    q: "How long do I have access after I buy?",
    a: "Access doesn't expire. It's a one-time payment, not a subscription — once you buy a track (or the bundle), it's unlocked on your account for as long as the course exists.",
  },
  {
    q: "What's the difference between the free preview and full access?",
    a: "The free preview includes the first module of each track and a handful of quiz questions, so you can see the content and format before paying. Full access unlocks every module, the complete question bank, the timed challenge mode, missed-question review, and the full-length practice exam for that track.",
  },
  {
    q: "I bought one track — can I add the other later?",
    a: "Yes. If you already own Life & Health or Property & Casualty and decide you need both, contact us and we'll get you upgraded to the bundle rather than paying full price twice.",
  },
  {
    q: "What if something's wrong — a bad question, a content error, a billing issue?",
    a: "Email contact@idahoexamprep.org with what happened. This is a small, independently-run course, so issues get handled directly by a real person, not a support queue.",
  },
  {
    q: "What if it's not the right fit for me?",
    a: "You're covered by a 7-day money-back guarantee. Email contact@idahoexamprep.org within 7 days of buying and you'll get a full refund, no questions asked.",
  },
  {
    q: "Is the practice exam the same as the real Idaho exam?",
    a: "It's built to the same per-question pace and pass bar — 50 timed questions, 70% to pass, answers hidden until you finish — using questions drawn from the same content areas Pearson VUE scores. The real Idaho exam is longer (75-86 questions for Life and Health, 80 for Property and Casualty), so think of this as a shorter run at the same speed and difficulty, not a 1:1 length match. It's not a leaked or copied version of the real exam; no prep course can ethically offer that.",
  },
];

export default function FAQPage() {
  return (
    <div className="flex flex-1 flex-col">
      <PageHero title="Frequently asked questions" />
      <main className="mx-auto w-full max-w-2xl flex-1 px-6 pb-16">
      <div className="flex flex-col gap-6">
        {FAQS.map((item, i) => (
          <div
            key={i}
            className="rounded-lg border border-black/[.08] p-4 dark:border-white/[.145]"
          >
            <h2 className="font-medium text-zinc-900 dark:text-zinc-50">
              {item.q}
            </h2>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              {item.a}
            </p>
          </div>
        ))}
      </div>

      <p className="mt-8 text-sm text-zinc-500">
        Something else on your mind? Email{" "}
        <a
          href="mailto:contact@idahoexamprep.org"
          className="text-brand-600 hover:underline dark:text-brand-300"
        >
          contact@idahoexamprep.org
        </a>
        .
      </p>
      </main>
    </div>
  );
}
