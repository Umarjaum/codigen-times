import { getArticles } from "@/lib/articles"

// This function generates static files at build time
export async function generateStaticParams() {
  return [{}] // Generate one instance of this route
}

export async function GET() {
  const articles = await getArticles(1000) // Get up to 1000 articles
  const baseUrl = "https://codigen-hub-news.netlify.app"

  // Get current date in W3C format
  const currentDate = new Date().toISOString()

  // Sort articles by date (newest first)
  const sortedArticles = [...articles].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  // Create XML sitemap for all articles
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sortedArticles
  .map(
    (article) => `
<url>
  <loc>${baseUrl}/article/${article.slug}</loc>
  <lastmod>${new Date(article.date).toISOString()}</lastmod>
  <changefreq>monthly</changefreq>
  <priority>0.5</priority>
</url>
`,
  )
  .join("")}
</urlset>`

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
    },
  })
}

