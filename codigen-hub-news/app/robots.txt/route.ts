// This function generates static files at build time
export async function generateStaticParams() {
  return [{}] // Generate one instance of this route
}

export async function GET() {
  const robotsTxt = `# https://www.robotstxt.org/robotstxt.html
User-agent: *
Allow: /

# Sitemaps
Sitemap: https://codigen-hub-news.netlify.app/sitemap-index.xml
`

  return new Response(robotsTxt, {
    headers: {
      "Content-Type": "text/plain",
    },
  })
}

