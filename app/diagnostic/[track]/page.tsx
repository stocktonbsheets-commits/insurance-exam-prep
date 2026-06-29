import { notFound } from "next/navigation";
import { tracks } from "@/lib/content";
import { buildDiagnostic } from "@/lib/diagnostic";
import { DiagnosticQuiz } from "./diagnostic-client";

export function generateStaticParams() {
  return Object.keys(tracks).map((track) => ({ track }));
}

export default async function DiagnosticTrackPage({
  params,
}: {
  params: Promise<{ track: string }>;
}) {
  const { track } = await params;
  if (!(track in tracks)) {
    notFound();
  }
  const trackKey = track as keyof typeof tracks;
  const questions = buildDiagnostic(trackKey);

  return (
    <main className="mx-auto w-full max-w-2xl flex-1 px-6 py-16">
      <p className="text-sm font-medium uppercase tracking-wide text-zinc-500">
        Free Diagnostic
      </p>
      <h1 className="mt-1 text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
        {tracks[trackKey]} Readiness Check
      </h1>
      <p className="mt-2 text-zinc-600 dark:text-zinc-400">
        {questions.length} questions, one from nearly every topic on the
        exam. Answer them all, then enter your email to see your score and
        exactly which topics to study.
      </p>
      <DiagnosticQuiz track={trackKey} trackLabel={tracks[trackKey]} questions={questions} />
    </main>
  );
}
