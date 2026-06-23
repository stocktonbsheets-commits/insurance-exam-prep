import Link from "next/link";
import { notFound } from "next/navigation";
import { modules, tracks } from "@/lib/content";

export function generateStaticParams() {
  return modules.map((m) => ({ slug: m.slug }));
}

export default async function ModulePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const module = modules.find((m) => m.slug === slug);

  if (!module) {
    notFound();
  }

  return (
    <main className="mx-auto w-full max-w-3xl flex-1 px-6 py-16">
      <Link href="/study" className="text-sm text-zinc-600 hover:underline dark:text-zinc-400">
        ← Back to Study Plan
      </Link>
      <p className="mt-4 text-sm font-medium uppercase tracking-wide text-zinc-500">
        {tracks[module.track]}
      </p>
      <h1 className="mt-1 text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
        {module.title}
      </h1>
      <p className="mt-2 text-zinc-600 dark:text-zinc-400">{module.summary}</p>

      <h2 className="mt-8 text-lg font-semibold text-zinc-900 dark:text-zinc-50">
        Key Concepts
      </h2>
      <ul className="mt-4 flex flex-col gap-4">
        {module.points.map((point, i) => (
          <li
            key={i}
            className="rounded-lg border border-black/[.08] p-4 text-zinc-800 dark:border-white/[.145] dark:text-zinc-200"
          >
            {point}
          </li>
        ))}
      </ul>

      <h2 className="mt-10 text-lg font-semibold text-zinc-900 dark:text-zinc-50">
        Watch Out For This on the Exam
      </h2>
      <ul className="mt-4 flex flex-col gap-4">
        {module.examTraps.map((trap, i) => (
          <li
            key={i}
            className="rounded-lg border border-amber-400 bg-amber-50 p-4 text-amber-900 dark:border-amber-700 dark:bg-amber-950 dark:text-amber-200"
          >
            {trap}
          </li>
        ))}
      </ul>

      <Link
        href={`/quiz/${module.slug}`}
        className="mt-10 inline-flex h-12 items-center justify-center rounded-full bg-foreground px-6 font-medium text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc]"
      >
        Take the quiz for this module
      </Link>
    </main>
  );
}
