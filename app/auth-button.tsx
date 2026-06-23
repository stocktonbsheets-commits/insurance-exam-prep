import Link from "next/link";
import { auth, signOut } from "@/lib/auth";

export async function AuthButton() {
  const session = await auth();

  if (!session?.user) {
    return (
      <Link
        href="/signin"
        className="rounded-full border border-black/[.08] px-4 py-1.5 text-sm font-medium transition-colors hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-white/[.06]"
      >
        Sign in
      </Link>
    );
  }

  return (
    <form
      action={async () => {
        "use server";
        await signOut();
      }}
      className="flex items-center gap-3"
    >
      <span className="text-sm text-zinc-600 dark:text-zinc-400">
        {session.user.name ?? session.user.email}
      </span>
      <button
        type="submit"
        className="rounded-full border border-black/[.08] px-4 py-1.5 text-sm font-medium transition-colors hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-white/[.06]"
      >
        Sign out
      </button>
    </form>
  );
}
