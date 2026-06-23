import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center bg-zinc-50 dark:bg-black">
      <main className="flex w-full max-w-3xl flex-col items-center gap-10 py-24 px-6 text-center">
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
            Pass Your Insurance License Exam
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400">
            A free, structured study plan and practice quizzes for the Idaho
            Life &amp; Health and Property &amp; Casualty producer exams.
          </p>
        </div>
        <div className="flex flex-col gap-4 sm:flex-row">
          <Link
            href="/study"
            className="flex h-12 items-center justify-center rounded-full bg-foreground px-6 text-background font-medium transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc]"
          >
            Start Studying
          </Link>
          <Link
            href="/quiz"
            className="flex h-12 items-center justify-center rounded-full border border-solid border-black/[.08] px-6 font-medium transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a]"
          >
            Practice Quizzes
          </Link>
        </div>
      </main>
    </div>
  );
}
