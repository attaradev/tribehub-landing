import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Search, Home, ArrowLeft } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-background">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-2xl w-full text-center space-y-8">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">T</span>
            </div>
            <span className="font-bold text-2xl text-foreground">TribeHub</span>
          </div>
        </div>

        {/* Icon */}
        <div className="flex justify-center">
          <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center">
            <Search className="w-12 h-12 text-muted-foreground" />
          </div>
        </div>

        {/* Content */}
        <div className="space-y-4">
          <h1 className="text-6xl md:text-7xl font-bold text-foreground">
            404
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
            Page not found
          </h2>
          <p className="text-lg text-muted-foreground max-w-md mx-auto">
            Looks like this page hasn't been built yet. Let's get you back to exploring TribeHub.
          </p>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <Link href="/">
              <Home className="mr-2 h-4 w-4" />
              Go home
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/#contact">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Get in touch
            </Link>
          </Button>
        </div>

        {/* Helper links */}
        <div className="pt-8 border-t border-border/50 max-w-md mx-auto">
          <p className="text-sm text-muted-foreground mb-4">
            Looking for something specific?
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Link href="/#product" className="text-primary hover:underline">
              Product pillars
            </Link>
            <Link href="/#roadmap" className="text-primary hover:underline">
              Founding cohort
            </Link>
            <Link href="/#faq" className="text-primary hover:underline">
              FAQ
            </Link>
            <Link href="/#contact" className="text-primary hover:underline">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
