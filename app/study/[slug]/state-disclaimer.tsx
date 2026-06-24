"use client";

import { useEffect, useState } from "react";
import { stateName, stateDoiSearchUrl } from "@/lib/states";

export function StateDisclaimer() {
  const [name, setName] = useState<string | undefined>();

  useEffect(() => {
    const code = window.localStorage.getItem("selected-state");
    setName(stateName(code ?? undefined));
  }, []);

  if (!name) {
    return (
      <div className="mt-4 rounded-lg border border-blue-200 bg-blue-50 p-4 text-sm text-blue-900 dark:border-blue-900 dark:bg-blue-950 dark:text-blue-200">
        These concepts are common across most states, but exact numbers (CE
        hours, notice periods, fees) vary. Pick your state on the{" "}
        <a href="/" className="underline">
          homepage
        </a>{" "}
        to get a direct link to verify your state's specifics.
      </div>
    );
  }

  return (
    <a
      href={stateDoiSearchUrl(name)}
      target="_blank"
      rel="noopener noreferrer"
      className="mt-4 flex items-center gap-3 rounded-lg border border-blue-200 bg-blue-50 p-4 text-sm text-blue-900 hover:bg-blue-100 dark:border-blue-900 dark:bg-blue-950 dark:text-blue-200 dark:hover:bg-blue-900"
    >
      <span>
        These concepts are common across most states, but exact numbers (CE
        hours, notice periods, fees) vary by state.{" "}
        <span className="font-semibold underline">
          Verify the specifics for {name} →
        </span>
      </span>
    </a>
  );
}
