import Link from "next/link";
import { notFound } from "next/navigation";
import { modules, tracks } from "@/lib/content";
import { questionsBySlug } from "@/lib/questions";
import { Quiz } from "../../quiz/[slug]/quiz-client";
import { userHasTrackAccess } from "@/lib/billing";
import { Paywall } from "../../paywall";

export function generateStaticParams() {
  return Object.keys(tracks).map((track) => ({ track }));
}

export default async function ExamPage({
  params,
}: {
  params: Promise<{ track: string }>;
}) {
  const { track } = await params;

  if (!(track in tracks)) {
    notFound();
  }

  const trackKey = track as keyof typeof tracks;
  const trackModules = modules.filter((m) => m.track === trackKey);
  const allQuestions = trackModules.flatMap((m) => questionsBySlug[m.slug] ?? []);
  const unlocked = await userHasTrackAccess(trackKey);

  // Idaho's real exams run ~1.5-1.6 min/question (Life/Health: 75 scored
  // questions in 120 min; Property/Casualty: 80 questions in 120 min). We
  // keep that same pace here, just over fewer questions.
  const secondsPerQuestion = trackKey === "life-health" ? 96 : 90;

  return (
    <main className="mx-auto w-full max-w-3xl flex-1 px-6 py-16">
      <Link href="/exam" className="text-sm text-zinc-600 hover:underline dark:text-zinc-400">
        ← Back to Practice Exams
      </Link>
      <h1 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
        {tracks[trackKey]} Practice Exam
      </h1>
      <p className="mt-2 text-zinc-600 dark:text-zinc-400">
        50 random questions pulled from every topic in this track, timed at
        the same per-question pace as the real Idaho exam. You need 70%
        correct to pass. The real exam is longer (75-86 questions for Life
        and Health, 80 for Property and Casualty) — this is a shorter run at
        the same speed and bar, not a 1:1 replica.
      </p>
      {unlocked ? (
        <Quiz
          slug={`exam-${trackKey}`}
          questions={allQuestions}
          questionCount={50}
          passThreshold={70}
          instantFeedback={false}
          timed
          secondsPerQuestion={secondsPerQuestion}
        />
      ) : (
        <Paywall track={trackKey} title={`${tracks[trackKey]} Practice Exam`} />
      )}
    </main>
  );
}
