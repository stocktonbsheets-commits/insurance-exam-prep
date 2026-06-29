import { testimonials } from "@/lib/testimonials";

export function TestimonialsSection() {
  if (testimonials.length === 0) return null;

  return (
    <div className="mt-16 grid w-full gap-6 text-left sm:grid-cols-3">
      {testimonials.map((t, i) => (
        <div
          key={i}
          className="rounded-2xl bg-background p-5 shadow-sm shadow-black/5 ring-1 ring-black/[.06] dark:ring-white/[.1]"
        >
          <p className="text-zinc-700 dark:text-zinc-300">&ldquo;{t.quote}&rdquo;</p>
          <p className="mt-3 text-sm font-medium text-zinc-900 dark:text-zinc-50">
            {t.name}
          </p>
          <p className="text-xs text-zinc-500">{t.detail}</p>
        </div>
      ))}
    </div>
  );
}
