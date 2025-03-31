import { getArticles } from "@/lib/articles"

// This function generates static files at build time
export async function generateStaticParams() {
  return [{}] // Generate one instance of this route
}

export async function GET() {
  const articles = await getArticles(100) // Get up to 100 articles
  const baseUrl = "https://codigen-hub-news.netlify.app"

  // Get current date in W3C format
  const currentDate = new Date().toISOString()

  // Sort articles by date (newest first)
  const sortedArticles = [...articles].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  // Take only the 50 most recent articles
  const recentArticles = sortedArticles.slice(0, 50)

  // Create XML sitemap for news
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">
${recentArticles
  .map(
    (article) => `
<url>
  <loc>${baseUrl}/article/${article.slug}</loc>
  <lastmod>${currentDate}</lastmod>
  <news:news>
    <news:publication>
      <news:name>CodiGen Hub News</news:name>
      <news:language>en</news:language>
    </news:publication>
    <news:publication_date>${new Date(article.date).toISOString()}</news:publication_date>
    <news:title>${article.title}</news:title>
    <news:keywords>${article.category},news,codigen hub</news:keywords>
  </news:news>
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

