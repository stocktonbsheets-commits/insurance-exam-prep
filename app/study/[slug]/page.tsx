import Link from "next/link";
import { notFound } from "next/navigation";
import { modules, tracks, videoSearchUrl } from "@/lib/content";

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

      <a
        href={videoSearchUrl(module.videoSearch)}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 flex items-center gap-4 rounded-lg border border-red-200 bg-red-50 p-4 transition-colors hover:bg-red-100 dark:border-red-900 dark:bg-red-950 dark:hover:bg-red-900"
      >
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-red-600 text-white">
          ▶
        </span>
        <span>
          <span className="block font-medium text-red-900 dark:text-red-100">
            Watch videos on {module.title}
          </span>
          <span className="block text-sm text-red-700 dark:text-red-300">
            Opens a YouTube search so you can pick a real video to watch
          </span>
        </span>
      </a>

      <h2 className="mt-10 text-lg font-semibold text-zinc-900 dark:text-zinc-50">
        Key Concepts
      </h2>
      <div className="mt-4 flex flex-col gap-4">
        {module.concepts.map((concept, i) => (
          <div
            key={i}
            className="rounded-lg border border-black/[.08] p-4 dark:border-white/[.145]"
          >
            <div className="flex items-start justify-between gap-3">
              <h3 className="font-medium text-zinc-900 dark:text-zinc-50">
                {concept.title}
              </h3>
              <a
                href={videoSearchUrl(`${concept.title} ${module.title} insurance exam`)}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 text-xs font-medium text-red-700 hover:underline dark:text-red-400"
              >
                ▶ Watch
              </a>
            </div>
            <p className="mt-2 text-zinc-700 dark:text-zinc-300">
              {concept.explanation}
            </p>
            <p className="mt-3 rounded-md bg-blue-50 p-3 text-sm text-blue-900 dark:bg-blue-950 dark:text-blue-200">
              <span className="font-semibold">Exam focus: </span>
              {concept.examFocus}
            </p>
          </div>
        ))}
      </div>

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
