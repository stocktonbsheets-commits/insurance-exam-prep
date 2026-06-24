"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { STATES } from "@/lib/states";
import { modules } from "@/lib/content";

const STORAGE_KEY = "selected-state";

const TRACK_CARDS = [
  {
    key: "life-health" as const,
    label: "Life & Health",
    description: "Life insurance, health plans, annuities, Medicare, and state L&H law.",
    gradient: "from-indigo-500 to-blue-600",
  },
  {
    key: "property-casualty" as const,
    label: "Property & Casualty",
    description: "Homeowners, auto, commercial liability, bonds, and state P&C law.",
    gradient: "from-emerald-500 to-teal-600",
  },
];

export function TrackPicker() {
  const [state, setState] = useState("");

  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved) setState(saved);
  }, []);

  function selectState(code: string) {
    setState(code);
    if (code) {
      window.localStorage.setItem(STORAGE_KEY, code);
    } else {
      window.localStorage.removeItem(STORAGE_KEY);
    }
  }

  function trackHref(trackKey: string) {
    const params = new URLSearchParams({ track: trackKey });
    if (state) params.set("state", state);
    return `/schedule?${params.toString()}`;
  }

  function combinedHref() {
    const params = new URLSearchParams();
    if (state) params.set("state", state);
    const qs = params.toString();
    return qs ? `/schedule?${qs}` : "/schedule";
  }

  return (
    <div className="w-full">
      <div className="mx-auto flex w-full max-w-sm flex-col gap-2">
        <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
          Which state are you licensing in?
        </label>
        <select
          value={state}
          onChange={(e) => selectState(e.target.value)}
          className="rounded-md border border-black/[.08] bg-white px-3 py-2 text-zinc-900 dark:border-white/[.145] dark:bg-zinc-900 dark:text-zinc-50"
        >
          <option value="">Select a state (optional)</option>
          {STATES.map((s) => (
            <option key={s.code} value={s.code}>
              {s.name}
            </option>
          ))}
        </select>
        <p className="text-xs text-zinc-500">
          General concepts are the same everywhere. State law specifics (CE
          hours, notice periods) vary — we&apos;ll point you to your state&apos;s
          official source for those.
        </p>
      </div>

      <div className="mt-8 grid w-full gap-5 sm:grid-cols-2">
        {TRACK_CARDS.map((track) => {
          const count = modules.filter((m) => m.track === track.key).length;
          return (
            <Link
              key={track.key}
              href={trackHref(track.key)}
              className="group relative overflow-hidden rounded-2xl border border-black/[.08] p-6 text-left shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg dark:border-white/[.145]"
            >
              <div
                className={`absolute inset-0 -z-10 bg-gradient-to-br ${track.gradient} opacity-0 transition-opacity group-hover:opacity-10`}
              />
              <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
                {track.label}
              </h2>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                {track.description}
              </p>
              <p className="mt-4 text-sm font-medium text-zinc-900 dark:text-zinc-50">
                {count} modules →
              </p>
            </Link>
          );
        })}
      </div>

      <Link
        href={combinedHref()}
        className="mt-3 inline-block text-sm font-medium text-zinc-600 hover:underline dark:text-zinc-400"
      >
        Studying for both? Build a combined schedule →
      </Link>
    </div>
  );
}
