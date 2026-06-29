import Link from "next/link";
import { notFound } from "next/navigation";
import { modules } from "@/lib/content";
import { questionsBySlug } from "@/lib/questions";
import { Quiz } from "../../quiz/[slug]/quiz-client";
import { userHasTrackAccess } from "@/lib/billing";
import { Paywall } from "../../paywall";

export function generateStaticParams() {
  return modules.map((m) => ({ slug: m.slug }));
}

export default async function ChallengePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const module = modules.find((m) => m.slug === slug);
  const questions = questionsBySlug[slug];

  if (!module || !questions) {
    notFound();
  }

  const unlocked = module.free || (await userHasTrackAccess(module.track));

  return (
    <main className="mx-auto w-full max-w-3xl flex-1 px-6 py-16">
      <Link href="/quiz" className="text-sm text-zinc-600 hover:underline dark:text-zinc-400">
        ← Back to Quizzes
      </Link>
      <h1 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
        {module.title}: Timed Challenge
      </h1>
      <p className="mt-2 text-zinc-600 dark:text-zinc-400">
        25 seconds per question, on the clock. Answers are revealed at the end — this is
        about pace under pressure, not a learning pass.
      </p>
      {unlocked ? (
        <Quiz
          slug={`challenge-${slug}`}
          questions={questions}
          instantFeedback={false}
          timed
          secondsPerQuestion={25}
        />
      ) : (
        <Paywall track={module.track} title={`${module.title} Timed Challenge`} />
      )}
    </main>
  );
}
