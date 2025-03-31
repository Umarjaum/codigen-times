import Link from "next/link"
import Image from "next/image"
import { getArticles } from "@/lib/articles"
import { formatDate } from "@/lib/utils"
import { Card, CardContent } from "@/components/ui/card"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Search Results - CodiGen Hub News",
  description: "Search for articles on CodiGen Hub News",
}

export default async function SearchPage({
  searchParams,
}: {
  searchParams: { q: string }
}) {
  const query = searchParams.q || ""
  const allArticles = await getArticles(100) // Get all articles for searching

  // Filter articles based on search query
  const searchResults = allArticles.filter((article) => {
    const searchContent =
      `${article.title} ${article.excerpt} ${article.content} ${article.author} ${article.category}`.toLowerCase()
    return searchContent.includes(query.toLowerCase())
  })

  return (
    <main className="container mx-auto px-4 py-8">
      <header className="mb-12">
        <h1 className="text-3xl font-bold mb-4">Search Results</h1>
        <p className="text-muted-foreground">
          {searchResults.length} results found for "{query}"
        </p>
      </header>

      {searchResults.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {searchResults.map((article) => (
            <Link key={article.slug} href={`/article/${article.slug}`} className="group">
              <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="relative aspect-[16/9]">
                  <Image
                    src={article.coverImage || "/placeholder.svg"}
                    alt={article.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-2 left-2 bg-primary text-primary-foreground px-2 py-1 rounded text-xs">
                    {article.category}
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{article.title}</h3>
                  <p className="text-muted-foreground mb-3 line-clamp-2">{article.excerpt}</p>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <span>{formatDate(article.date)}</span>
                    <span className="mx-2">•</span>
                    <span>{article.author}</span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-muted-foreground mb-4">No articles found matching your search.</p>
          <Link
            href="/"
            className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
          >
            Return to Home
          </Link>
        </div>
      )}
    </main>
  )
}

