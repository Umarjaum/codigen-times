import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { getArticlesByCategory, getCategoryInfo } from "@/lib/articles"
import { formatDate } from "@/lib/utils"
import { Card, CardContent } from "@/components/ui/card"
import type { Metadata } from "next"

type Props = {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const category = await getCategoryInfo(params.slug)

  if (!category) {
    return {
      title: "Category Not Found",
    }
  }

  return {
    title: `${category.name} News - CodiGen Hub`,
    description: `Latest ${category.name} news and updates from CodiGen Hub News`,
  }
}

export default async function CategoryPage({ params }: Props) {
  const category = await getCategoryInfo(params.slug)

  if (!category) {
    notFound()
  }

  const articles = await getArticlesByCategory(params.slug)

  return (
    <main className="container mx-auto px-4 py-8">
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4 relative inline-block">
          {category.name}
          <span className="absolute -bottom-2 left-1/4 right-1/4 h-1 bg-primary rounded-full"></span>
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">{category.description}</p>
      </header>

      {articles.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <Link key={article.slug} href={`/article/${article.slug}`} className="group">
              <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-transparent hover:border-primary/20">
                <div className="relative aspect-[16/9]">
                  <Image
                    src={article.coverImage || "/placeholder.svg"}
                    alt={article.title}
                    fill
                    className="object-cover hover-scale"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{article.title}</h3>
                  <p className="text-muted-foreground mb-3 line-clamp-2">{article.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-muted-foreground">
                      <span>{formatDate(article.date)}</span>
                      <span className="mx-2">•</span>
                      <span>{article.author}</span>
                    </div>
                    <span className="text-primary text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                      Read article →
                    </span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      ) : (
        <div className="text-center py-12 bg-muted/50 rounded-lg">
          <p className="text-muted-foreground">No articles found in this category.</p>
        </div>
      )}
    </main>
  )
}

