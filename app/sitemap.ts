import type { MetadataRoute } from "next";
import { modules } from "@/lib/content";

const BASE_URL = process.env.NEXT_PUBLIC_APP_URL ?? "https://idahoexamprep.org";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/study",
    "/pricing",
    "/about",
    "/faq",
    "/partners",
    "/terms",
    "/privacy",
    "/signin",
    "/signup",
  ].map((path) => ({
    url: `${BASE_URL}${path}`,
    changeFrequency: "weekly" as const,
  }));

  const studyRoutes = modules.map((m) => ({
    url: `${BASE_URL}/study/${m.slug}`,
    changeFrequency: "monthly" as const,
  }));

  return [...staticRoutes, ...studyRoutes];
}
