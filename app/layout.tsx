import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import { AuthButton } from "./auth-button";
import { NavLinks } from "./nav-links";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const TITLE = "Idaho Insurance Exam Prep";
const DESCRIPTION =
  "Pass your Idaho insurance producer exam — study modules, explained quizzes, and a full practice exam built from the official content outline.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: "website",
    siteName: "Idaho Exam Prep",
  },
  twitter: {
    card: "summary",
    title: TITLE,
    description: DESCRIPTION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-surface">
        <header className="sticky top-0 z-20 border-b border-black/[.06] bg-gradient-to-r from-brand-50/70 via-background/90 to-accent-50/50 backdrop-blur-sm dark:border-white/[.1] dark:from-brand-900/20 dark:via-background/90 dark:to-accent-900/15">
          <nav className="relative mx-auto flex max-w-3xl items-center justify-between px-6 py-4">
            <Link href="/" className="flex items-center gap-2 font-semibold text-zinc-900 dark:text-zinc-50">
              <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-sm">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2 4 6v6c0 5 4 8 8 10 4-2 8-5 8-10V6Z" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              </span>
              Idaho Exam Prep
            </Link>
            <NavLinks authSlot={<AuthButton />} />
          </nav>
        </header>
        {children}
        <footer className="border-t border-black/[.06] py-8 dark:border-white/[.1]">
          <div className="mx-auto flex max-w-3xl flex-wrap items-center justify-between gap-4 px-6 text-sm text-zinc-500">
            <span>© Idaho Exam Prep</span>
            <div className="flex items-center gap-5">
              <Link href="/about" className="hover:text-brand-600 dark:hover:text-brand-300">
                About
              </Link>
              <Link href="/faq" className="hover:text-brand-600 dark:hover:text-brand-300">
                FAQ
              </Link>
              <Link href="/partners" className="hover:text-brand-600 dark:hover:text-brand-300">
                Partners
              </Link>
              <Link href="/terms" className="hover:text-brand-600 dark:hover:text-brand-300">
                Terms
              </Link>
              <Link href="/privacy" className="hover:text-brand-600 dark:hover:text-brand-300">
                Privacy
              </Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
