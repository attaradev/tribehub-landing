"use client"

import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-lg">T</span>
          </div>
          <span className="font-bold text-xl text-foreground">TribeHub</span>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#hero" className="text-foreground/70 hover:text-foreground transition-colors">
            Overview
          </a>
          <a href="#product" className="text-foreground/70 hover:text-foreground transition-colors">
            Product
          </a>
          <a href="#roadmap" className="text-foreground/70 hover:text-foreground transition-colors">
            Roadmap
          </a>
          <a href="#faq" className="text-foreground/70 hover:text-foreground transition-colors">
            FAQ
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <Button asChild variant="ghost" className="hidden sm:inline-flex">
            <a href="mailto:hello@tribehub.app?subject=TribeHub%20Intro">Talk to us</a>
          </Button>
          <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <a href="mailto:hello@tribehub.app?subject=TribeHub%20Waitlist">Join waitlist</a>
          </Button>
        </div>
      </div>
    </header>
  )
}
