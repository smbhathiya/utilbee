import type { MetadataRoute } from "next"
import { ALL_TOOLS } from "@/lib/tools-registry"
import { SITE_CONFIG } from "@/lib/seo"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_CONFIG.url

  const toolRoutes: MetadataRoute.Sitemap = ALL_TOOLS.map((tool) => ({
    url: `${baseUrl}${tool.href}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: tool.isPopular ? 0.9 : 0.8,
  }))

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1.0,
    },
    ...toolRoutes,
  ]
}
