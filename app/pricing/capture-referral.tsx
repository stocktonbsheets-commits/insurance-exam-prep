"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

export function CaptureReferral() {
  const params = useSearchParams();

  useEffect(() => {
    const ref = params.get("ref");
    if (ref) {
      window.localStorage.setItem("referral", ref.slice(0, 64));
    }
  }, [params]);

  return null;
}
