import Link from "next/link";
import { requestPasswordResetAndRedirect } from "./actions";

export default async function ForgotPasswordPage({
  searchParams,
}: {
  searchParams: Promise<{ sent?: string }>;
}) {
  const { sent } = await searchParams;

  return (
    <main className="flex flex-1 items-center justify-center bg-gradient-to-b from-brand-50/40 to-background px-6 py-16 dark:from-brand-900/10 dark:to-background">
      <div className="w-full max-w-sm rounded-2xl bg-background p-8 shadow-sm shadow-black/5 ring-1 ring-black/[.06] dark:ring-white/[.1]">
        <h1 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
          Reset your password
        </h1>

        {sent ? (
          <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">
            If an account exists for that email, a reset link is on its way.
            Check your inbox — the link expires in 1 hour.
          </p>
        ) : (
          <>
            <p className="mt-1 text-sm text-zinc-500">
              Enter your account email and we&apos;ll send you a reset link.
            </p>
            <form action={requestPasswordResetAndRedirect} className="mt-6 flex flex-col gap-4">
              <div>
                <label className="block text-sm font-medium text-zinc-900 dark:text-zinc-50">
                  Email
                </label>
                <input
                  name="email"
                  type="email"
                  required
                  className="mt-1.5 w-full rounded-xl border border-black/[.08] bg-transparent px-3.5 py-2.5 transition-colors focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-100 dark:border-white/[.145] dark:focus:ring-brand-900/40"
                />
              </div>
              <button
                type="submit"
                className="mt-2 h-11 rounded-full bg-brand-600 font-medium text-white transition-colors hover:bg-brand-700"
              >
                Send reset link
              </button>
            </form>
          </>
        )}

        <p className="mt-6 text-center text-sm text-zinc-600 dark:text-zinc-400">
          <Link href="/signin" className="font-medium text-brand-600 hover:underline dark:text-brand-300">
            Back to sign in
          </Link>
        </p>
      </div>
    </main>
  );
}
