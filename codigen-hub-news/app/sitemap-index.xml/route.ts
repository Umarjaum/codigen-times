// This function generates static files at build time
export async function generateStaticParams() {
  return [{}] // Generate one instance of this route
}

export async function GET() {
  const baseUrl = "https://codigen-hub-news.netlify.app"

  // Get current date in W3C format
  const currentDate = new Date().toISOString()

  // Create XML sitemap index
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${baseUrl}/sitemap.xml</loc>
    <lastmod>${currentDate}</lastmod>
  </sitemap>
  <sitemap>
    <loc>${baseUrl}/news-sitemap.xml</loc>
    <lastmod>${currentDate}</lastmod>
  </sitemap>
  <sitemap>
    <loc>${baseUrl}/archive-sitemap.xml</loc>
    <lastmod>${currentDate}</lastmod>
  </sitemap>
  <sitemap>
    <loc>${baseUrl}/images-sitemap.xml</loc>
    <lastmod>${currentDate}</lastmod>
  </sitemap>
</sitemapindex>`

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
    },
  })
}

