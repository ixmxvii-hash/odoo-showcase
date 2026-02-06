import { MetadataRoute } from "next";
import { cities, orderedIndustryRoutes } from "@/lib/industryData";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://icit.local";

export default function sitemap(): MetadataRoute.Sitemap {
  const industryOverviewPaths = orderedIndustryRoutes.map(([slug]) => `/${slug}`);

  const staticPages: MetadataRoute.Sitemap = [
    "",
    "/applications",
    "/roi-calculator",
    "/why-icit",
    "/contact",
    ...industryOverviewPaths,
  ].map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: path === "" ? 1 : industryOverviewPaths.includes(path) ? 0.85 : 0.8,
  }));

  const dynamicPages: MetadataRoute.Sitemap = Object.keys(cities).flatMap((city) =>
    orderedIndustryRoutes.map(([slug]) => ({
      url: `${siteUrl}/${city}/${slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    }))
  );

  return [...staticPages, ...dynamicPages];
}
