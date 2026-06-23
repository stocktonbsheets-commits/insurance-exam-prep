import Link from "next/link";
import { notFound } from "next/navigation";
import { modules } from "@/lib/content";
import { questionsBySlug } from "@/lib/questions";
import { Quiz } from "./quiz-client";

export function generateStaticParams() {
  return modules.map((m) => ({ slug: m.slug }));
}

export default async function QuizPage({
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

  return (
    <main className="mx-auto w-full max-w-3xl flex-1 px-6 py-16">
      <Link href="/quiz" className="text-sm text-zinc-600 hover:underline dark:text-zinc-400">
        ← Back to Quizzes
      </Link>
      <h1 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
        {module.title} Quiz
      </h1>
      <Quiz questions={questions} />
    </main>
  );
}
