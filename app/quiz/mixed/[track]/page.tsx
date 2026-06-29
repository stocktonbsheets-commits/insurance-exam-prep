import Link from "next/link";
import { notFound } from "next/navigation";
import { modules, tracks } from "@/lib/content";
import { questionsBySlug } from "@/lib/questions";
import { Quiz } from "../../[slug]/quiz-client";
import { userHasTrackAccess } from "@/lib/billing";
import { Paywall } from "../../../paywall";

export function generateStaticParams() {
  return Object.keys(tracks).map((track) => ({ track }));
}

export default async function MixedQuizPage({
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

  return (
    <main className="mx-auto w-full max-w-3xl flex-1 px-6 py-16">
      <Link href="/quiz" className="text-sm text-zinc-600 hover:underline dark:text-zinc-400">
        ← Back to Quizzes
      </Link>
      <h1 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
        {tracks[trackKey]} Mixed Quiz
      </h1>
      <p className="mt-2 text-zinc-600 dark:text-zinc-400">
        12 random questions pulled from every topic in this track, in a fresh
        mix every time you take it.
      </p>
      {unlocked ? (
        <Quiz slug={`mixed-${trackKey}`} questions={allQuestions} questionCount={12} />
      ) : (
        <Paywall track={trackKey} title={`${tracks[trackKey]} Mixed Quiz`} />
      )}
    </main>
  );
}
