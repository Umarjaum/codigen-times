import { getArticles } from "@/lib/articles"

// This function generates static files at build time
export async function generateStaticParams() {
  return [{}] // Generate one instance of this route
}

export async function GET() {
  const articles = await getArticles(1000) // Get up to 1000 articles
  const baseUrl = "https://codigen-hub-news.netlify.app"

  // Create XML sitemap for images
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${articles
  .map(
    (article) => `
<url>
  <loc>${baseUrl}/article/${article.slug}</loc>
  <image:image>
    <image:loc>${article.coverImage.startsWith("/") ? baseUrl + article.coverImage : article.coverImage}</image:loc>
    <image:title>${article.title}</image:title>
    <image:caption>${article.excerpt}</image:caption>
  </image:image>
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

