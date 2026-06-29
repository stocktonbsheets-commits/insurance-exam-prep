"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const LINKS = [
  { href: "/study", label: "Study" },
  { href: "/exam", label: "Practice Exam" },
];

function isActive(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function NavLinks({ authSlot }: { authSlot: React.ReactNode }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="hidden items-center gap-6 text-sm font-medium text-zinc-600 sm:flex dark:text-zinc-400">
        {LINKS.map((link) => {
          const active = isActive(pathname, link.href);
          return (
            <Link
              key={link.href}
              href={link.href}
              className={[
                "relative py-1 transition-colors hover:text-brand-600 dark:hover:text-brand-300",
                active ? "text-brand-600 dark:text-brand-300" : "",
              ].join(" ")}
            >
              {link.label}
              {active && (
                <span className="absolute -bottom-[17px] left-0 right-0 h-0.5 rounded-full bg-brand-600 dark:bg-brand-300" />
              )}
            </Link>
          );
        })}
        <Link
          href="/pricing"
          className={[
            "rounded-full px-4 py-1.5 text-white transition-colors",
            isActive(pathname, "/pricing")
              ? "bg-accent-600"
              : "bg-brand-600 hover:bg-brand-700",
          ].join(" ")}
        >
          Pricing
        </Link>
        {authSlot}
      </div>

      <button
        onClick={() => setOpen((o) => !o)}
        className="flex h-9 w-9 items-center justify-center rounded-lg text-zinc-600 sm:hidden dark:text-zinc-400"
        aria-label="Toggle menu"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          {open ? <path d="M18 6 6 18M6 6l12 12" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
        </svg>
      </button>

      {open && (
        <div className="absolute left-0 right-0 top-full border-b border-black/[.06] bg-background px-6 py-4 shadow-md sm:hidden dark:border-white/[.1]">
          <div className="flex flex-col gap-3 text-sm font-medium text-zinc-600 dark:text-zinc-400">
            {LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={isActive(pathname, link.href) ? "text-brand-600 dark:text-brand-300" : ""}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/pricing"
              onClick={() => setOpen(false)}
              className="w-fit rounded-full bg-brand-600 px-4 py-1.5 text-white"
            >
              Pricing
            </Link>
            <div onClick={() => setOpen(false)}>{authSlot}</div>
          </div>
        </div>
      )}
    </>
  );
}
