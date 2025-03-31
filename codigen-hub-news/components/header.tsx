"use client"

import type React from "react"

import Link from "next/link"
import { useState } from "react"
import { usePathname, useRouter } from "next/navigation"
import { Menu, X, Search, Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useTheme } from "next-themes"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const pathname = usePathname()
  const router = useRouter()
  const { theme, setTheme } = useTheme()
  const [searchQuery, setSearchQuery] = useState("")

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const toggleSearch = () => setIsSearchOpen(!isSearchOpen)

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`)
      setIsSearchOpen(false)
      setSearchQuery("")
    }
  }

  const isActive = (path: string) => {
    return pathname === path
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMenu}>
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle menu</span>
          </Button>

          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold text-primary">CodiGen Hub News</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="/"
            className={`text-sm font-medium ${isActive("/") ? "text-primary" : "text-muted-foreground"} hover:text-primary`}
          >
            Home
          </Link>
          <Link
            href="/categories"
            className={`text-sm font-medium ${isActive("/categories") ? "text-primary" : "text-muted-foreground"} hover:text-primary`}
          >
            Categories
          </Link>
          <Link href="/category/technology" className="text-sm font-medium text-muted-foreground hover:text-primary">
            Technology
          </Link>
          <Link href="/category/business" className="text-sm font-medium text-muted-foreground hover:text-primary">
            Business
          </Link>
          <Link href="/category/science" className="text-sm font-medium text-muted-foreground hover:text-primary">
            Science
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" onClick={toggleSearch} className="hover:text-primary">
            <Search className="h-5 w-5" />
            <span className="sr-only">Search</span>
          </Button>

          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="hover:text-primary"
          >
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-white md:hidden flex flex-col">
          <div className="container flex h-16 items-center justify-between border-b">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-xl font-bold text-red-600">CodiGen Hub News</span>
            </Link>
            <Button variant="ghost" size="icon" onClick={toggleMenu} className="text-red-600 hover:bg-gray-100">
              <X className="h-6 w-6" />
              <span className="sr-only">Close menu</span>
            </Button>
          </div>
          <div className="flex-1 overflow-y-auto">
            <nav className="container grid gap-6 p-6">
              <Link
                href="/"
                className="text-lg font-medium text-red-600 hover:text-red-800 border-b border-gray-100 pb-3"
                onClick={toggleMenu}
              >
                Home
              </Link>
              <Link
                href="/categories"
                className="text-lg font-medium text-red-600 hover:text-red-800 border-b border-gray-100 pb-3"
                onClick={toggleMenu}
              >
                Categories
              </Link>
              <Link
                href="/category/technology"
                className="text-lg font-medium text-red-600 hover:text-red-800 border-b border-gray-100 pb-3"
                onClick={toggleMenu}
              >
                Technology
              </Link>
              <Link
                href="/category/business"
                className="text-lg font-medium text-red-600 hover:text-red-800 border-b border-gray-100 pb-3"
                onClick={toggleMenu}
              >
                Business
              </Link>
              <Link
                href="/category/science"
                className="text-lg font-medium text-red-600 hover:text-red-800 border-b border-gray-100 pb-3"
                onClick={toggleMenu}
              >
                Science
              </Link>
              <Link
                href="/category/health"
                className="text-lg font-medium text-red-600 hover:text-red-800 border-b border-gray-100 pb-3"
                onClick={toggleMenu}
              >
                Health
              </Link>
              <Link
                href="/category/entertainment"
                className="text-lg font-medium text-red-600 hover:text-red-800 border-b border-gray-100 pb-3"
                onClick={toggleMenu}
              >
                Entertainment
              </Link>
              <Link
                href="/category/sports"
                className="text-lg font-medium text-red-600 hover:text-red-800 border-b border-gray-100 pb-3"
                onClick={toggleMenu}
              >
                Sports
              </Link>
            </nav>
          </div>
          <div className="container p-4 border-t">
            <div className="flex justify-between">
              <Button
                variant="outline"
                className="w-full text-red-600 border-red-600 hover:bg-red-50"
                onClick={() => {
                  setTheme(theme === "dark" ? "light" : "dark")
                  toggleMenu()
                }}
              >
                {theme === "dark" ? (
                  <>
                    <Sun className="mr-2 h-4 w-4" /> Light Mode
                  </>
                ) : (
                  <>
                    <Moon className="mr-2 h-4 w-4" /> Dark Mode
                  </>
                )}
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Search Overlay */}
      {isSearchOpen && (
        <div className="fixed inset-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container flex h-16 items-center justify-between">
            <div className="flex-1">
              <form onSubmit={handleSearch}>
                <div className="relative">
                  <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    name="q"
                    placeholder="Search articles..."
                    className="pl-8 w-full"
                    autoFocus
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </form>
            </div>
            <Button variant="ghost" size="icon" onClick={toggleSearch}>
              <X className="h-6 w-6" />
              <span className="sr-only">Close search</span>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}

