import type { MetadataRoute } from "next"
import { getArticles, getAllCategories } from "@/lib/articles"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://codigen-hub-news.netlify.app"

  // Get all articles
  const articles = await getArticles(100) // Get up to 100 articles

  // Get all categories
  const categories = await getAllCategories()

  // Base routes
  const routes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/categories`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/admin/seo`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.5,
    },
  ]

  // Article routes
  const articleRoutes = articles.map((article) => ({
    url: `${baseUrl}/article/${article.slug}`,
    lastModified: new Date(article.date),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }))

  // Category routes
  const categoryRoutes = categories.map((category) => ({
    url: `${baseUrl}/category/${category.slug}`,
    lastModified: new Date(),
    changeFrequency: "daily" as const,
    priority: 0.9,
  }))

  return [...routes, ...articleRoutes, ...categoryRoutes]
}

