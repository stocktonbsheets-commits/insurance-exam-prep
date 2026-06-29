import Link from "next/link";
import { tracks } from "@/lib/content";

export function Paywall({
  track,
  title,
}: {
  track: keyof typeof tracks;
  title: string;
}) {
  return (
    <div className="mt-8 flex flex-col items-center gap-3 rounded-2xl bg-background p-10 text-center shadow-sm shadow-black/5 ring-1 ring-black/[.06] dark:ring-white/[.1]">
      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-50 text-2xl dark:bg-brand-900/40">
        🔒
      </span>
      <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
        {title} is part of full access
      </h2>
      <p className="max-w-md text-sm text-zinc-600 dark:text-zinc-400">
        You've seen the free preview module — unlock every module, the full
        question bank, and the {tracks[track]} practice exam for $75.
      </p>
      <Link
        href="/pricing"
        className="mt-2 flex h-11 items-center justify-center rounded-full bg-brand-600 px-6 text-sm font-medium text-white transition-colors hover:bg-brand-700"
      >
        See pricing
      </Link>
    </div>
  );
}
