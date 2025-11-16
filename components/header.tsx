"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

const navItems = [
  { href: "#hero", label: "Overview" },
  { href: "#product", label: "Product" },
  { href: "#roadmap", label: "Roadmap" },
  { href: "#faq", label: "FAQ" },
]

export function Header() {
  const [open, setOpen] = useState(false)

  const handleNavClick = () => {
    setOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-2" aria-label="TribeHub home">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-primary" role="img" aria-label="TribeHub logo">
            <rect width="32" height="32" rx="6" fill="currentColor"/>
            <circle cx="10" cy="12" r="3" fill="white" opacity="0.9"/>
            <circle cx="22" cy="12" r="3" fill="white" opacity="0.9"/>
            <circle cx="16" cy="21" r="3" fill="white" opacity="0.9"/>
            <line x1="12" y1="13" x2="14" y2="19" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.7"/>
            <line x1="20" y1="13" x2="18" y2="19" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.7"/>
          </svg>
          <span className="font-bold text-xl text-foreground">TribeHub</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium" aria-label="Main navigation">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-foreground/70 hover:text-foreground transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <Button asChild variant="ghost">
            <a href="#contact">Get in touch</a>
          </Button>
          <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <a href="#contact">Become a partner</a>
          </Button>
        </div>

        {/* Mobile Actions */}
        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Open menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <SheetHeader>
                <SheetTitle className="text-left">Menu</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-4 mt-8" aria-label="Mobile navigation">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={handleNavClick}
                    className="text-lg font-medium text-foreground/70 hover:text-foreground transition-colors"
                  >
                    {item.label}
                  </a>
                ))}
                <div className="pt-4 border-t border-border flex flex-col gap-3">
                  <Button asChild variant="ghost" onClick={handleNavClick}>
                    <a href="#contact">Get in touch</a>
                  </Button>
                  <Button
                    asChild
                    className="bg-primary hover:bg-primary/90 text-primary-foreground"
                    onClick={handleNavClick}
                  >
                    <a href="#contact">Become a partner</a>
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
