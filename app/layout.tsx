import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Insurance Exam Prep",
  description: "Free study plan and practice quizzes for insurance licensing exams.",
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
      <body className="min-h-full flex flex-col">
        <header className="border-b border-black/[.08] dark:border-white/[.145]">
          <nav className="mx-auto flex max-w-3xl items-center justify-between px-6 py-4">
            <Link href="/" className="font-semibold text-zinc-900 dark:text-zinc-50">
              Insurance Exam Prep
            </Link>
            <div className="flex gap-6 text-sm font-medium text-zinc-600 dark:text-zinc-400">
              <Link href="/study" className="hover:text-zinc-900 dark:hover:text-zinc-50">
                Study Plan
              </Link>
              <Link href="/quiz" className="hover:text-zinc-900 dark:hover:text-zinc-50">
                Quizzes
              </Link>
            </div>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
