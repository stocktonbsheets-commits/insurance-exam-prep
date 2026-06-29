import { resetPassword } from "./actions";

export default async function ResetPasswordPage({
  searchParams,
}: {
  searchParams: Promise<{ token?: string; email?: string }>;
}) {
  const { token, email } = await searchParams;

  if (!token || !email) {
    return (
      <main className="flex flex-1 items-center justify-center px-6 py-16 text-center">
        <p className="text-zinc-600 dark:text-zinc-400">
          This reset link is missing required info. Request a new one from
          the sign-in page.
        </p>
      </main>
    );
  }

  return (
    <main className="flex flex-1 items-center justify-center bg-gradient-to-b from-brand-50/40 to-background px-6 py-16 dark:from-brand-900/10 dark:to-background">
      <div className="w-full max-w-sm rounded-2xl bg-background p-8 shadow-sm shadow-black/5 ring-1 ring-black/[.06] dark:ring-white/[.1]">
        <h1 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
          Set a new password
        </h1>

        <form action={resetPassword} className="mt-6 flex flex-col gap-4">
          <input type="hidden" name="token" value={token} />
          <input type="hidden" name="email" value={email} />
          <div>
            <label className="block text-sm font-medium text-zinc-900 dark:text-zinc-50">
              New password
            </label>
            <input
              name="password"
              type="password"
              required
              minLength={8}
              className="mt-1.5 w-full rounded-xl border border-black/[.08] bg-transparent px-3.5 py-2.5 transition-colors focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-100 dark:border-white/[.145] dark:focus:ring-brand-900/40"
            />
            <p className="mt-1.5 text-xs text-zinc-500">At least 8 characters.</p>
          </div>
          <button
            type="submit"
            className="mt-2 h-11 rounded-full bg-brand-600 font-medium text-white transition-colors hover:bg-brand-700"
          >
            Update password
          </button>
        </form>
      </div>
    </main>
  );
}
