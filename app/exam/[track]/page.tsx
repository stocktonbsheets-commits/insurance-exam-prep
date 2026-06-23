import Link from "next/link";
import { notFound } from "next/navigation";
import { modules, tracks } from "@/lib/content";
import { questionsBySlug } from "@/lib/questions";
import { Quiz } from "../../quiz/[slug]/quiz-client";

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

  return (
    <main className="mx-auto w-full max-w-3xl flex-1 px-6 py-16">
      <Link href="/exam" className="text-sm text-zinc-600 hover:underline dark:text-zinc-400">
        ← Back to Practice Exams
      </Link>
      <h1 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
        {tracks[trackKey]} Practice Exam
      </h1>
      <p className="mt-2 text-zinc-600 dark:text-zinc-400">
        30 random questions pulled from every topic in this track. You need
        70% correct to pass, matching Idaho's real exam threshold.
      </p>
      <Quiz
        slug={`exam-${trackKey}`}
        questions={allQuestions}
        questionCount={30}
        passThreshold={70}
      />
    </main>
  );
}
