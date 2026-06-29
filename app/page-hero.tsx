export function PageHero({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: React.ReactNode;
}) {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-brand-50/40 to-background dark:from-brand-900/10 dark:to-background">
      <svg
        className="pointer-events-none absolute -top-24 right-0 h-[320px] w-[480px] opacity-[0.05] dark:opacity-[0.08]"
        viewBox="0 0 480 320"
        fill="none"
        aria-hidden="true"
      >
        <circle cx="360" cy="80" r="150" fill="var(--color-brand-500)" />
      </svg>
      <div className="relative mx-auto w-full max-w-3xl px-6 pt-16 pb-10">
        {eyebrow && (
          <p className="text-sm font-medium uppercase tracking-wide text-zinc-500">
            {eyebrow}
          </p>
        )}
        <h1 className="mt-1 text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-2 max-w-xl text-zinc-600 dark:text-zinc-400">{subtitle}</p>
        )}
      </div>
    </div>
  );
}
