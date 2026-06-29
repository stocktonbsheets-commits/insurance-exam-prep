"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { migrateGuestPlan } from "./actions";

const STORAGE_KEY = "guest-study-plan";

type GuestPlan = {
  examDate: string;
  studyDays: string[];
  track?: "life-health" | "property-casualty";
};

export function MigrateGuestPlan() {
  const [guestPlan, setGuestPlan] = useState<GuestPlan | null>(null);
  const [importing, setImporting] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return;
    try {
      setGuestPlan(JSON.parse(raw));
    } catch {
      // ignore malformed data
    }
  }, []);

  if (!guestPlan) return null;

  async function importPlan() {
    setImporting(true);
    await migrateGuestPlan(guestPlan!.examDate, guestPlan!.studyDays, guestPlan!.track);
    window.localStorage.removeItem(STORAGE_KEY);
    setImporting(false);
    router.refresh();
  }

  function dismiss() {
    window.localStorage.removeItem(STORAGE_KEY);
    setGuestPlan(null);
  }

  return (
    <div className="mb-6 flex flex-wrap items-center justify-between gap-3 rounded-lg border border-brand-300 bg-brand-50 p-4 text-sm dark:border-brand-800 dark:bg-brand-900/30">
      <span className="text-brand-900 dark:text-brand-100">
        We found a study schedule you built as a guest. Import it into your
        account?
      </span>
      <div className="flex shrink-0 gap-2">
        <button
          onClick={importPlan}
          disabled={importing}
          className="h-9 rounded-full bg-brand-600 px-4 text-sm font-medium text-white transition-colors hover:bg-brand-700 disabled:opacity-60"
        >
          {importing ? "Importing…" : "Import it"}
        </button>
        <button
          onClick={dismiss}
          className="h-9 rounded-full border border-black/[.08] px-4 text-sm font-medium transition-colors hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-white/[.06]"
        >
          Dismiss
        </button>
      </div>
    </div>
  );
}
