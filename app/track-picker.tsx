"use client";

import Link from "next/link";
import { modules } from "@/lib/content";

const TRACK_CARDS = [
  {
    key: "life-health" as const,
    label: "Life & Health",
    description: "Life insurance, health plans, annuities, Medicare, and Idaho L&H law.",
    mark: "L",
  },
  {
    key: "property-casualty" as const,
    label: "Property & Casualty",
    description: "Homeowners, auto, commercial liability, bonds, and Idaho P&C law.",
    mark: "P",
  },
];

export function TrackPicker() {
  function trackHref(trackKey: string) {
    return `/schedule?${new URLSearchParams({ track: trackKey }).toString()}`;
  }

  return (
    <div className="w-full">
      <div className="mt-2 grid w-full gap-5 sm:grid-cols-2">
        {TRACK_CARDS.map((track) => {
          const count = modules.filter((m) => m.track === track.key).length;
          return (
            <Link
              key={track.key}
              href={trackHref(track.key)}
              className="group rounded-2xl bg-background p-6 text-left shadow-sm shadow-black/5 ring-1 ring-black/[.06] transition-all hover:-translate-y-1 hover:shadow-md hover:ring-brand-300 dark:ring-white/[.1] dark:hover:ring-brand-700"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 text-base font-semibold text-brand-700 dark:bg-brand-900/40 dark:text-brand-200">
                {track.mark}
              </span>
              <h2 className="mt-4 text-xl font-semibold text-zinc-900 dark:text-zinc-50">
                {track.label}
              </h2>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                {track.description}
              </p>
              <p className="mt-4 text-sm font-medium text-brand-600 dark:text-brand-300">
                {count} modules →
              </p>
            </Link>
          );
        })}
      </div>

      <Link
        href="/schedule"
        className="mt-5 inline-flex items-center gap-1.5 rounded-full border border-black/[.08] bg-background px-4 py-2 text-sm font-medium text-zinc-700 shadow-sm transition-colors hover:border-brand-300 hover:text-brand-700 dark:border-white/[.145] dark:text-zinc-300 dark:hover:text-brand-300"
      >
        Studying for both? Build a combined schedule
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      </Link>
    </div>
  );
}
