"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { shiftSchedule } from "./actions";

export function ShiftControl() {
  const [days, setDays] = useState(1);
  const [pending, setPending] = useState(false);
  const router = useRouter();

  async function shift() {
    setPending(true);
    await shiftSchedule(days);
    setPending(false);
    router.refresh();
  }

  return (
    <div className="mt-8 flex flex-wrap items-center gap-3 rounded-lg border border-black/[.08] p-4 dark:border-white/[.145]">
      <span className="text-sm font-medium text-zinc-900 dark:text-zinc-50">
        Exam date moved?
      </span>
      <input
        type="number"
        value={days}
        onChange={(e) => setDays(Number(e.target.value))}
        className="w-16 rounded-md border border-black/[.08] bg-transparent px-2 py-1 text-sm dark:border-white/[.145]"
      />
      <span className="text-sm text-zinc-600 dark:text-zinc-400">days</span>
      <button
        onClick={shift}
        disabled={pending}
        className="h-9 rounded-full border border-black/[.08] px-4 text-sm font-medium transition-colors hover:bg-black/[.04] disabled:opacity-60 dark:border-white/[.145] dark:hover:bg-white/[.06]"
      >
        {pending ? "Shifting…" : "Shift every date"}
      </button>
    </div>
  );
}
