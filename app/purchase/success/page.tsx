import Link from "next/link";

export default async function PurchaseSuccessPage({
  searchParams,
}: {
  searchParams: Promise<{ plan?: string }>;
}) {
  const { plan } = await searchParams;

  return (
    <main className="mx-auto flex w-full max-w-2xl flex-1 flex-col items-center gap-4 px-6 py-24 text-center">
      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-50 text-3xl dark:bg-brand-900/40">
        ✅
      </span>
      <h1 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
        You're all set
      </h1>
      <p className="text-zinc-600 dark:text-zinc-400">
        {plan === "bundle"
          ? "Both tracks are now fully unlocked."
          : "Full access to this track is now unlocked."}{" "}
        Your account is updating now — give it a few seconds before you
        start.
      </p>
      <Link
        href="/study"
        className="mt-2 flex h-11 items-center justify-center rounded-full bg-brand-600 px-6 text-sm font-medium text-white transition-colors hover:bg-brand-700"
      >
        Start studying
      </Link>
    </main>
  );
}
