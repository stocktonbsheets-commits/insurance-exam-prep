"use client";

import { useState } from "react";
import { toggleModuleComplete } from "./actions";

export function CompleteToggle({
  moduleScheduleId,
  initialCompleted,
}: {
  moduleScheduleId: string;
  initialCompleted: boolean;
}) {
  const [completed, setCompleted] = useState(initialCompleted);
  const [pending, setPending] = useState(false);

  return (
    <input
      type="checkbox"
      checked={completed}
      disabled={pending}
      onChange={async (e) => {
        const next = e.target.checked;
        setPending(true);
        setCompleted(next);
        await toggleModuleComplete(moduleScheduleId, next);
        setPending(false);
      }}
      className="h-5 w-5 accent-zinc-900 dark:accent-zinc-50"
    />
  );
}
