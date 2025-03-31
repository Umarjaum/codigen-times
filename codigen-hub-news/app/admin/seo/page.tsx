import Link from "next/link"

export const metadata = {
  title: "SEO Information - CodiGen Hub News",
  description: "SEO and sitemap information for CodiGen Hub News administrators",
}

export default function SeoInfoPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">SEO Information</h1>

      <div className="space-y-8 max-w-3xl">
        <section className="p-6 border rounded-lg">
          <h2 className="text-xl font-bold mb-4">Sitemap Index</h2>
          <p className="mb-4">The sitemap index that organizes all sitemaps is available at:</p>
          <div className="bg-muted p-3 rounded-md mb-4">
            <code>https://codigen-hub-news.netlify.app/sitemap-index.xml</code>
          </div>
          <p className="mb-2">
            This sitemap index contains links to all other sitemaps on the site. Submit this URL to Google Search
            Console to ensure all your content is properly indexed.
          </p>
        </section>

        <section className="p-6 border rounded-lg">
          <h2 className="text-xl font-bold mb-4">News Sitemap</h2>
          <p className="mb-4">The news sitemap for Google News submission is available at:</p>
          <div className="bg-muted p-3 rounded-md mb-4">
            <code>https://codigen-hub-news.netlify.app/news-sitemap.xml</code>
          </div>
          <p className="mb-2">
            This sitemap contains the 50 most recent articles and automatically updates as new content is published.
          </p>
        </section>

        <section className="p-6 border rounded-lg">
          <h2 className="text-xl font-bold mb-4">Archive Sitemap</h2>
          <p className="mb-4">The archive sitemap containing all articles is available at:</p>
          <div className="bg-muted p-3 rounded-md mb-4">
            <code>https://codigen-hub-news.netlify.app/archive-sitemap.xml</code>
          </div>
          <p className="mb-2">
            This sitemap contains all articles, including those that have been removed from the news sitemap.
          </p>
        </section>

        <section className="p-6 border rounded-lg">
          <h2 className="text-xl font-bold mb-4">Images Sitemap</h2>
          <p className="mb-4">The images sitemap for better image indexing is available at:</p>
          <div className="bg-muted p-3 rounded-md mb-4">
            <code>https://codigen-hub-news.netlify.app/images-sitemap.xml</code>
          </div>
          <p className="mb-2">
            This sitemap contains all images from articles with proper metadata to improve image search visibility.
          </p>
        </section>

        <section className="p-6 border rounded-lg">
          <h2 className="text-xl font-bold mb-4">Regular Sitemap</h2>
          <p className="mb-4">The regular sitemap for general search engines is available at:</p>
          <div className="bg-muted p-3 rounded-md mb-4">
            <code>https://codigen-hub-news.netlify.app/sitemap.xml</code>
          </div>
          <p className="mb-2">This sitemap includes all pages on your site and is automatically updated.</p>
        </section>

        <section className="p-6 border rounded-lg">
          <h2 className="text-xl font-bold mb-4">Structured Data</h2>
          <p className="mb-4">Your site includes the following structured data for better SEO:</p>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li>
              <strong>NewsArticle</strong> - On each article page
            </li>
            <li>
              <strong>WebSite</strong> - On the homepage
            </li>
            <li>
              <strong>ItemList</strong> - For article listings
            </li>
          </ul>
          <p className="text-sm text-muted-foreground">
            You can test your structured data using the{" "}
            <a
              href="https://search.google.com/test/rich-results"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Google Rich Results Test
            </a>
            .
          </p>
        </section>

        <section className="p-6 border rounded-lg">
          <h2 className="text-xl font-bold mb-4">Google News Submission</h2>
          <p className="mb-4">To submit your site to Google News:</p>
          <ol className="list-decimal pl-5 space-y-2">
            <li>
              Ensure your site meets{" "}
              <a
                href="https://support.google.com/news/publisher-center/answer/6016113"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Google News content policies
              </a>
            </li>
            <li>
              Create a Publisher Center account at{" "}
              <a
                href="https://publishercenter.google.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                publishercenter.google.com
              </a>
            </li>
            <li>Add and verify your publication</li>
            <li>Submit the sitemap index URL in Google Search Console</li>
          </ol>
        </section>

        <div className="flex justify-center mt-8">
          <Link
            href="/"
            className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
          >
            Return to Home
          </Link>
        </div>
      </div>
    </main>
  )
}

