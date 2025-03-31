import Link from "next/link"
import Image from "next/image"
import { getArticles, getFeaturedArticle } from "@/lib/articles"
import { formatDate } from "@/lib/utils"
import { ArrowRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
// Add structured data to the home page
import { generateWebsiteStructuredData, generateNewsListStructuredData } from "./structured-data"

export default async function Home() {
  const articles = await getArticles()
  const featuredArticle = await getFeaturedArticle()
  const topStories = await getArticles(3) // Get top 3 articles for Top Stories

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center text-primary">CodiGen Hub News</h1>

      {/* Featured Article */}
      <section className="mb-16">
        <h2 className="sr-only">Featured Story</h2>
        <div className="max-w-6xl mx-auto">
          <Link href={`/article/${featuredArticle.slug}`} className="block group">
            <div className="relative overflow-hidden rounded-xl shadow-lg">
              <div className="aspect-video w-full">
                <Image
                  src={featuredArticle.coverImage || "/placeholder.svg"}
                  alt={featuredArticle.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  priority
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <div className="flex items-center space-x-2 mb-3">
                  <span className="inline-block bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                    {featuredArticle.category}
                  </span>
                  <span className="text-white/80 text-sm">Featured</span>
                </div>
                <h3 className="text-2xl md:text-4xl font-bold text-white mb-3 group-hover:text-primary/90 transition-colors">
                  {featuredArticle.title}
                </h3>
                <p className="text-white/80 mb-4 line-clamp-2 md:line-clamp-3 max-w-3xl">{featuredArticle.excerpt}</p>
                <div className="flex items-center text-white/70 text-sm">
                  <span>{formatDate(featuredArticle.date)}</span>
                  <span className="mx-2">•</span>
                  <span>{featuredArticle.author}</span>
                  <span className="ml-auto md:flex items-center hidden">
                    <span className="text-primary mr-2">Read full story</span>
                    <ArrowRight className="h-4 w-4 text-primary" />
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Top Stories */}
      <section className="mb-16">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold relative pl-4 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-primary before:rounded-full">
            Top Stories
          </h2>
          <Link href="/categories" className="text-primary flex items-center hover:underline font-medium">
            More stories <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {topStories.map((story, index) => (
            <Link key={story.slug} href={`/article/${story.slug}`} className="group">
              <div className="flex flex-col h-full bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 border border-transparent hover:border-primary/20">
                <div className="relative aspect-[16/9] w-full">
                  <Image src={story.coverImage || "/placeholder.svg"} alt={story.title} fill className="object-cover" />
                  <div className="absolute top-2 left-2 bg-primary text-primary-foreground px-2 py-1 rounded text-xs">
                    {story.category}
                  </div>
                  <div className="absolute top-2 right-2 bg-black text-white w-6 h-6 flex items-center justify-center rounded-full text-xs font-bold">
                    {index + 1}
                  </div>
                </div>
                <div className="p-4 flex-1 flex flex-col">
                  <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {story.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2 mb-3 flex-1">{story.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground mt-auto">
                    <span>{formatDate(story.date)}</span>
                    <span className="text-primary group-hover:underline">Read more</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Latest Articles */}
      <section className="mb-16">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold relative pl-4 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-primary before:rounded-full">
            Latest News
          </h2>
          <Link href="/categories" className="text-primary flex items-center hover:underline font-medium">
            View all categories <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <Link key={article.slug} href={`/article/${article.slug}`} className="group">
              <Card className="h-full overflow-hidden card-hover border border-transparent">
                <div className="relative aspect-[16/9]">
                  <Image
                    src={article.coverImage || "/placeholder.svg"}
                    alt={article.title}
                    fill
                    className="object-cover hover-scale"
                  />
                  <div className="absolute top-2 left-2 bg-primary text-primary-foreground px-2 py-1 rounded text-xs">
                    {article.category}
                  </div>
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
      </section>

      {/* Categories Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6 relative pl-4 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-primary before:rounded-full">
          Browse by Category
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          <Link
            href="/category/technology"
            className="bg-white dark:bg-gray-900 hover:bg-primary/5 border border-gray-200 dark:border-gray-800 hover:border-primary/30 px-4 py-3 rounded-lg text-center transition-all duration-300 flex flex-col items-center justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-primary mb-2"
            >
              <rect x="4" y="4" width="16" height="16" rx="2" />
              <rect x="9" y="9" width="6" height="6" />
              <path d="M15 2v2" />
              <path d="M15 20v2" />
              <path d="M2 15h2" />
              <path d="M20 15h2" />
            </svg>
            <span className="font-medium">Technology</span>
          </Link>
          <Link
            href="/category/business"
            className="bg-white dark:bg-gray-900 hover:bg-primary/5 border border-gray-200 dark:border-gray-800 hover:border-primary/30 px-4 py-3 rounded-lg text-center transition-all duration-300 flex flex-col items-center justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-primary mb-2"
            >
              <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
            </svg>
            <span className="font-medium">Business</span>
          </Link>
          <Link
            href="/category/science"
            className="bg-white dark:bg-gray-900 hover:bg-primary/5 border border-gray-200 dark:border-gray-800 hover:border-primary/30 px-4 py-3 rounded-lg text-center transition-all duration-300 flex flex-col items-center justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-primary mb-2"
            >
              <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
              <polyline points="14 2 14 8 20 8" />
              <path d="M9 15v-6" />
              <path d="M12 12v3" />
              <path d="M15 9v6" />
            </svg>
            <span className="font-medium">Science</span>
          </Link>
          <Link
            href="/category/health"
            className="bg-white dark:bg-gray-900 hover:bg-primary/5 border border-gray-200 dark:border-gray-800 hover:border-primary/30 px-4 py-3 rounded-lg text-center transition-all duration-300 flex flex-col items-center justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-primary mb-2"
            >
              <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
            </svg>
            <span className="font-medium">Health</span>
          </Link>
          <Link
            href="/category/entertainment"
            className="bg-white dark:bg-gray-900 hover:bg-primary/5 border border-gray-200 dark:border-gray-800 hover:border-primary/30 px-4 py-3 rounded-lg text-center transition-all duration-300 flex flex-col items-center justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-primary mb-2"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="m9 12 2 2 4-4" />
            </svg>
            <span className="font-medium">Entertainment</span>
          </Link>
          <Link
            href="/category/sports"
            className="bg-white dark:bg-gray-900 hover:bg-primary/5 border border-gray-200 dark:border-gray-800 hover:border-primary/30 px-4 py-3 rounded-lg text-center transition-all duration-300 flex flex-col items-center justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-primary mb-2"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M5.5 5.5 18 18" />
              <path d="M18.5 5.5 6 18" />
            </svg>
            <span className="font-medium">Sports</span>
          </Link>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="mb-16 rounded-xl overflow-hidden">
        <div className="bg-red-600 p-8 md:p-12 relative">
          <div className="absolute inset-0 bg-[url('/placeholder.svg')] opacity-10 mix-blend-overlay"></div>
          <div className="relative z-10 max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 text-white">Stay Updated</h2>
            <p className="mb-6 text-white/90">
              Subscribe to our newsletter to receive the latest news and updates directly in your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex h-12 w-full rounded-md border border-white/20 bg-white/10 px-4 py-2 text-white placeholder:text-white/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                required
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-white text-red-600 hover:bg-white/90 h-12 px-6 py-2"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Sitemap Information (hidden in production) */}
      <div className="mt-12 p-4 border border-dashed border-muted-foreground rounded-lg">
        <h3 className="text-lg font-semibold mb-2">Sitemap Information (For Administrators)</h3>
        <p className="text-sm text-muted-foreground mb-2">
          The news sitemap for Google News submission is available at:
        </p>
        <code className="block p-2 bg-muted rounded text-sm mb-2">
          https://codigen-hub-news.netlify.app/news-sitemap.xml
        </code>
        <p className="text-sm text-muted-foreground">
          Submit this URL to Google Search Console to improve your news content indexing.
        </p>
      </div>

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(await generateWebsiteStructuredData()),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(await generateNewsListStructuredData()),
        }}
      />
    </main>
  )
}

