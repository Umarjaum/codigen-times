import { getArticles } from "@/lib/articles"

export async function generateWebsiteStructuredData() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "CodiGen Hub News",
    url: "https://codigen-hub-news.netlify.app",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://codigen-hub-news.netlify.app/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  }
}

export async function generateNewsListStructuredData() {
  const articles = await getArticles(10)

  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: articles.map((article, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `https://codigen-hub-news.netlify.app/article/${article.slug}`,
      item: {
        "@type": "NewsArticle",
        headline: article.title,
        image: article.coverImage,
        datePublished: article.date,
        author: {
          "@type": "Person",
          name: article.author,
        },
      },
    })),
  }
}

