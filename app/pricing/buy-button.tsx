"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import type { Plan } from "@/lib/billing";

export function BuyButton({
  plan,
  label,
  signedIn,
  highlighted,
}: {
  plan: Plan;
  label: string;
  signedIn: boolean;
  highlighted?: boolean;
}) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  async function handleClick() {
    if (!signedIn) {
      router.push(`/signin?next=/pricing`);
      return;
    }
    setLoading(true);
    setError(null);
    const referral = window.localStorage.getItem("referral") ?? undefined;
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ plan, referral }),
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
        return;
      }
      setError(data.error ?? "Couldn't start checkout. Please try again.");
    } catch {
      setError("Couldn't reach checkout. Check your connection and try again.");
    }
    setLoading(false);
  }

  return (
    <div className="flex flex-col gap-2">
      <button
        onClick={handleClick}
        disabled={loading || label === "Unlocked"}
        className={[
          "flex h-11 w-full items-center justify-center gap-2 rounded-full px-6 text-sm font-semibold transition-colors disabled:cursor-default disabled:opacity-60",
          highlighted
            ? "bg-accent-500 text-white hover:bg-accent-600"
            : "bg-brand-600 text-white hover:bg-brand-700",
        ].join(" ")}
      >
        {loading && (
          <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
            />
          </svg>
        )}
        {loading ? "Redirecting to checkout…" : label}
      </button>
      {error && (
        <p className="text-xs text-red-600 dark:text-red-400" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
