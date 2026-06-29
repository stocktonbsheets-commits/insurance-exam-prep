import type { Module } from "@/lib/content";

export type Category = "Foundations" | "Idaho Law & Regulation" | "Advanced & Specialty Lines";

export const CATEGORY_ORDER: Category[] = [
  "Foundations",
  "Advanced & Specialty Lines",
  "Idaho Law & Regulation",
];

const FOUNDATION_SLUGS = new Set([
  "lh-life-basics",
  "lh-policy-provisions",
  "lh-health-basics",
  "pc-property-basics",
  "pc-casualty-basics",
]);

export function categoryFor(slug: string): Category {
  if (slug.includes("regulation")) return "Idaho Law & Regulation";
  if (FOUNDATION_SLUGS.has(slug)) return "Foundations";
  return "Advanced & Specialty Lines";
}

const CATEGORY_ICON_PATHS: Record<Category, string> = {
  Foundations:
    'M4 19.5A2.5 2.5 0 0 1 6.5 17H20 M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z',
  "Idaho Law & Regulation":
    'M12 3 4 7v2h16V7Z M5 9v8 M19 9v8 M3 21h18 M7 9v2a2 2 0 1 1-4 0V9h4Z M21 9v2a2 2 0 1 1-4 0V9h4Z',
  "Advanced & Specialty Lines":
    'M12 2 9.5 8.5 3 9l5 4.5L6.5 21 12 17l5.5 4-1.5-7.5 5-4.5-6.5-.5Z',
};

export function categoryIconPath(category: Category): string {
  return CATEGORY_ICON_PATHS[category];
}

const TRACK_ICON_PATHS: Record<"life-health" | "property-casualty", string> = {
  "life-health": "M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8Z",
  "property-casualty": "M12 3 4 7v6c0 5 4 7.5 8 9 4-1.5 8-4 8-9V7Z",
};

export function trackIconPath(track: "life-health" | "property-casualty"): string {
  return TRACK_ICON_PATHS[track];
}

export function estimatedMinutes(module: Module): number {
  return Math.max(5, module.concepts.length * 3);
}
