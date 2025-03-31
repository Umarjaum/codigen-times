import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { getArticleBySlug, getRelatedArticles } from "@/lib/articles"
import { formatDate } from "@/lib/utils"
import { Card, CardContent } from "@/components/ui/card"
import type { Metadata } from "next"
import { Calendar, Clock, User, Tag } from "lucide-react"

type Props = {
  params: {
    slug: string
  }
}

// Generate metadata for SEO
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = await getArticleBySlug(params.slug)

  if (!article) {
    return {
      title: "Article Not Found",
    }
  }

  return {
    title: article.title,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: "article",
      publishedTime: article.date,
      authors: [article.author],
      images: [
        {
          url: article.coverImage,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
    },
  }
}

export default async function ArticlePage({ params }: Props) {
  const article = await getArticleBySlug(params.slug)

  if (!article) {
    notFound()
  }

  const relatedArticles = await getRelatedArticles(article.category, article.slug)

  // Calculate reading time (rough estimate)
  const readingTime = Math.ceil(article.content.split(" ").length / 200)

  return (
    <main className="container mx-auto px-4 py-8">
      <article className="max-w-4xl mx-auto">
        {/* Article Header */}
        <header className="mb-8">
          <Link
            href={`/category/${article.category.toLowerCase()}`}
            className="inline-block bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm mb-4 hover:bg-primary/90 transition-colors"
          >
            {article.category}
          </Link>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">{article.title}</h1>
          <p className="text-xl text-muted-foreground mb-6 leading-relaxed">{article.excerpt}</p>

          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6 border-b border-gray-200 dark:border-gray-800 pb-6">
            <div className="flex items-center">
              <User className="mr-1 h-4 w-4 text-primary" />
              <span>{article.author}</span>
            </div>
            <div className="flex items-center">
              <Calendar className="mr-1 h-4 w-4 text-primary" />
              <span>{formatDate(article.date)}</span>
            </div>
            <div className="flex items-center">
              <Clock className="mr-1 h-4 w-4 text-primary" />
              <span>{readingTime} min read</span>
            </div>
            <div className="flex items-center">
              <Tag className="mr-1 h-4 w-4 text-primary" />
              <span>{article.category}</span>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        <div className="relative aspect-[16/9] w-full mb-8 rounded-lg overflow-hidden shadow-lg">
          <Image
            src={article.coverImage || "/placeholder.svg"}
            alt={article.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute bottom-0 left-0 w-full h-1/6 bg-gradient-to-t from-black/30 to-transparent"></div>
        </div>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none dark:prose-invert mb-12 leading-relaxed">
          {article.content.split("\n\n").map((paragraph, index) => (
            <p key={index} className={index === 0 ? "text-lg font-medium" : ""}>
              {paragraph}
            </p>
          ))}
        </div>

        {/* Article Schema Data (hidden) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "NewsArticle",
              headline: article.title,
              image: [article.coverImage],
              datePublished: article.date,
              dateModified: article.date,
              author: {
                "@type": "Person",
                name: article.author,
              },
              publisher: {
                "@type": "Organization",
                name: "CodiGen Hub News",
                logo: {
                  "@type": "ImageObject",
                  url: "https://codigen-hub-news.netlify.app/logo.png",
                },
              },
              description: article.excerpt,
              mainEntityOfPage: {
                "@type": "WebPage",
                "@id": `https://codigen-hub-news.netlify.app/article/${article.slug}`,
              },
              articleBody: article.content,
              articleSection: article.category,
              keywords: [article.category, "news", "codigen hub", article.title.split(" ").join(", ")],
              isAccessibleForFree: "True",
            }),
          }}
        />
      </article>

      {/* Related Articles */}
      <section className="max-w-4xl mx-auto mt-12 border-t pt-12">
        <h2 className="text-2xl font-semibold mb-6 relative pl-4 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-primary before:rounded-full">
          Related Articles
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {relatedArticles.map((relatedArticle) => (
            <Link key={relatedArticle.slug} href={`/article/${relatedArticle.slug}`} className="group">
              <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-transparent hover:border-primary/20">
                <div className="relative aspect-[16/9]">
                  <Image
                    src={relatedArticle.coverImage || "/placeholder.svg"}
                    alt={relatedArticle.title}
                    fill
                    className="object-cover hover-scale"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                    {relatedArticle.title}
                  </h3>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>{formatDate(relatedArticle.date)}</span>
                    <span className="text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                      Read more →
                    </span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}

