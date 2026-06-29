import Link from "next/link";
import { tracks } from "@/lib/content";

export default function DiagnosticPage() {
  return (
    <main className="mx-auto w-full max-w-2xl flex-1 px-6 py-16 text-center">
      <h1 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl dark:text-zinc-50">
        Are you ready to pass?
      </h1>
      <p className="mx-auto mt-3 max-w-lg text-zinc-600 dark:text-zinc-400">
        Take a free 2-minute diagnostic pulled from every topic on the Idaho
        exam outline. We'll score you and show exactly which areas need more
        study before test day.
      </p>

      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {Object.entries(tracks).map(([key, label]) => (
          <Link
            key={key}
            href={`/diagnostic/${key}`}
            className="flex flex-col gap-2 rounded-2xl bg-background p-6 text-left shadow-sm shadow-black/5 ring-1 ring-black/[.06] transition-shadow hover:shadow-md dark:ring-white/[.1]"
          >
            <span className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
              {label}
            </span>
            <span className="text-sm text-zinc-600 dark:text-zinc-400">
              Free readiness check across every {label} topic.
            </span>
          </Link>
        ))}
      </div>
    </main>
  );
}
