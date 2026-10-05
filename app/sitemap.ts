import type { MetadataRoute } from "next";
import { projects } from "@/lib/projects";
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://tshally.vercel.app",
      changeFrequency: "monthly",
      priority: 1,
    },
    ...projects.map((p) => ({
      url: `https://tshally.vercel.app/work/${p.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
