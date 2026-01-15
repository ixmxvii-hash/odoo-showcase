import { MetadataRoute } from "next";
import { cities, industrySlugMap } from "@/lib/industryData";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://icit.local";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    "",
    "/applications",
    "/roi-calculator",
    "/why-icit",
    "/contact",
  ].map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: path === "" ? 1 : 0.8,
  }));

  const dynamicPages: MetadataRoute.Sitemap = Object.keys(cities).flatMap((city) =>
    Object.keys(industrySlugMap).map((slug) => ({
      url: `${siteUrl}/${city}/${slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    }))
  );

  return [...staticPages, ...dynamicPages];
}
