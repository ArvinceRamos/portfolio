import type { MetadataRoute } from "next";
import { profile } from "@/content/profile";
import { projects } from "@/content/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: profile.siteUrl, lastModified: now, priority: 1 },
    ...projects.map((p) => ({
      url: `${profile.siteUrl}/work/${p.slug}`,
      lastModified: now,
      priority: 0.8,
    })),
  ];
}
