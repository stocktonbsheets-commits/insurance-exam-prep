import Link from "next/link";
import { tracks } from "@/lib/content";

export default function ExamIndexPage() {
  return (
    <main className="mx-auto w-full max-w-3xl flex-1 px-6 py-16">
      <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
        Practice Exam
      </h1>
      <p className="mt-2 text-zinc-600 dark:text-zinc-400">
        A longer, full-length practice exam pulling questions from every topic
        in a track. Idaho's real exams require roughly 70% to pass — this
        practice exam uses the same bar.
      </p>

      <ul className="mt-8 flex flex-col gap-3">
        {Object.entries(tracks).map(([trackKey, trackLabel]) => (
          <li key={trackKey}>
            <Link
              href={`/exam/${trackKey}`}
              className="flex items-center justify-between rounded-lg border border-zinc-900 p-4 transition-colors hover:bg-black/[.03] dark:border-zinc-50 dark:hover:bg-white/[.06]"
            >
              <span className="font-medium text-zinc-900 dark:text-zinc-50">
                {trackLabel} Practice Exam
              </span>
              <span className="text-sm text-zinc-500">30 questions, 70% to pass</span>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
