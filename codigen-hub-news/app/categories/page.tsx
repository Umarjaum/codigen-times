import Link from "next/link"
import { getAllCategories } from "@/lib/articles"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata = {
  title: "Categories - CodiGen Hub News",
  description: "Browse all news categories on CodiGen Hub News",
}

export default async function CategoriesPage() {
  const categories = await getAllCategories()

  return (
    <main className="container mx-auto px-4 py-8">
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4">News Categories</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Browse all our news categories to find the content that interests you the most.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => (
          <Link key={category.slug} href={`/category/${category.slug}`} className="group">
            <Card className="h-full hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="group-hover:text-primary transition-colors">{category.name}</CardTitle>
                <CardDescription>{category.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{category.articleCount} articles</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </main>
  )
}

