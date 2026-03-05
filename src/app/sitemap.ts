import type { MetadataRoute } from "next";

import { siteConfig } from "@/lib/constants/site";

const pages = ["/", "/pricing", "/calculator", "/work", "/contact", "/start-project"];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return pages.map((path) => ({
    url: `${siteConfig.url}${path === "/" ? "" : path}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: path === "/" ? 1 : 0.8,
  }));
}
