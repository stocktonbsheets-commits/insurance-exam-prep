import Link from "next/link";
import { signIn } from "@/lib/auth";

export default function SignInPage() {
  return (
    <main className="mx-auto w-full max-w-sm flex-1 px-6 py-16">
      <h1 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
        Sign in
      </h1>

      <form
        action={async (formData) => {
          "use server";
          await signIn("credentials", {
            email: formData.get("email"),
            password: formData.get("password"),
            redirectTo: "/schedule",
          });
        }}
        className="mt-6 flex flex-col gap-4"
      >
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
            className="mt-1 w-full rounded-md border border-black/[.08] bg-transparent px-3 py-2 dark:border-white/[.145]"
          />
        </div>
        <button
          type="submit"
          className="mt-2 h-11 rounded-full bg-foreground font-medium text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc]"
        >
          Sign In
        </button>
      </form>

      <div className="mt-6 flex items-center gap-3 text-sm text-zinc-500">
        <span className="h-px flex-1 bg-black/[.08] dark:bg-white/[.145]" />
        or
        <span className="h-px flex-1 bg-black/[.08] dark:bg-white/[.145]" />
      </div>

      <form
        action={async () => {
          "use server";
          await signIn("github", { redirectTo: "/schedule" });
        }}
        className="mt-6"
      >
        <button
          type="submit"
          className="h-11 w-full rounded-full border border-black/[.08] font-medium transition-colors hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-white/[.06]"
        >
          Continue with GitHub
        </button>
      </form>

      <p className="mt-4 text-sm text-zinc-600 dark:text-zinc-400">
        Don&apos;t have an account?{" "}
        <Link href="/signup" className="font-medium text-zinc-900 hover:underline dark:text-zinc-50">
          Sign up
        </Link>
      </p>
    </main>
  );
}
