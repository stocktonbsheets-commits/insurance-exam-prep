import Link from "next/link";
import { signUp } from "./actions";

export default function SignUpPage() {
  return (
    <main className="mx-auto w-full max-w-sm flex-1 px-6 py-16">
      <h1 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
        Create your account
      </h1>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        Save your study schedule and progress across devices.
      </p>

      <form action={signUp} className="mt-6 flex flex-col gap-4">
        <div>
          <label className="block text-sm font-medium text-zinc-900 dark:text-zinc-50">
            Name
          </label>
          <input
            name="name"
            type="text"
            className="mt-1 w-full rounded-md border border-black/[.08] bg-transparent px-3 py-2 dark:border-white/[.145]"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-zinc-900 dark:text-zinc-50">
            Email
          </label>
          <input
            name="email"
            type="email"
            required
            className="mt-1 w-full rounded-md border border-black/[.08] bg-transparent px-3 py-2 dark:border-white/[.145]"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-zinc-900 dark:text-zinc-50">
            Password
          </label>
          <input
            name="password"
            type="password"
            required
            minLength={8}
            className="mt-1 w-full rounded-md border border-black/[.08] bg-transparent px-3 py-2 dark:border-white/[.145]"
          />
          <p className="mt-1 text-xs text-zinc-500">At least 8 characters.</p>
        </div>
        <button
          type="submit"
          className="mt-2 h-11 rounded-full bg-foreground font-medium text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc]"
        >
          Create Account
        </button>
      </form>

      <p className="mt-4 text-sm text-zinc-600 dark:text-zinc-400">
        Already have an account?{" "}
        <Link href="/signin" className="font-medium text-zinc-900 hover:underline dark:text-zinc-50">
          Sign in
        </Link>
      </p>
    </main>
  );
}
