"use client";

import { useState } from "react";
import { rescheduleModule } from "./actions";

export function DatePicker({
  moduleScheduleId,
  initialDate,
}: {
  moduleScheduleId: string;
  initialDate: string;
}) {
  const [date, setDate] = useState(initialDate);
  const [pending, setPending] = useState(false);

  return (
    <input
      type="date"
      value={date}
      disabled={pending}
      onChange={async (e) => {
        const next = e.target.value;
        if (!next) return;
        setPending(true);
        setDate(next);
        await rescheduleModule(moduleScheduleId, next);
        setPending(false);
      }}
      className="rounded-md border border-black/[.08] bg-transparent px-2 py-1 text-sm dark:border-white/[.145]"
    />
  );
}
