"use client"

export function Footer() {
  return (
    <footer className="bg-muted/50 border-t border-border py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-primary" role="img" aria-label="TribeHub logo">
                <rect width="32" height="32" rx="6" fill="currentColor"/>
                <circle cx="10" cy="12" r="3" fill="white" opacity="0.9"/>
                <circle cx="22" cy="12" r="3" fill="white" opacity="0.9"/>
                <circle cx="16" cy="21" r="3" fill="white" opacity="0.9"/>
                <line x1="12" y1="13" x2="14" y2="19" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.7"/>
                <line x1="20" y1="13" x2="18" y2="19" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.7"/>
              </svg>
              <span className="font-bold text-foreground">TribeHub</span>
            </div>
            <p className="text-sm text-foreground/60">
              Community management software built in Ghana, for Africa. One platform to manage members, track contributions, and organize events without the chaos.
            </p>
          </div>

          <nav aria-label="Product navigation">
            <h4 className="font-semibold text-foreground mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-foreground/60">
              <li>
                <a href="#product" className="hover:text-foreground transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#roadmap" className="hover:text-foreground transition-colors">
                  Founding partners
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-foreground transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </nav>

          <nav aria-label="Company navigation">
            <h4 className="font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-foreground/60">
              <li>
                <a href="mailto:hello@tribehub.co" className="hover:text-foreground transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-foreground transition-colors">
                  Become a partner
                </a>
              </li>
              <li>
                <span className="text-foreground/60" aria-label="Build notes coming soon">
                  Build notes (coming soon)
                </span>
              </li>
            </ul>
          </nav>

          <nav aria-label="Legal navigation">
            <h4 className="font-semibold text-foreground mb-4">Policies</h4>
            <ul className="space-y-2 text-sm text-foreground/60">
              <li>
                <a href="/privacy" className="hover:text-foreground transition-colors">
                  Privacy policy
                </a>
              </li>
              <li>
                <a href="/terms" className="hover:text-foreground transition-colors">
                  Terms of service
                </a>
              </li>
              <li>
                <span className="text-foreground/60">Cookies & consent playbook (coming soon)</span>
              </li>
            </ul>
          </nav>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-foreground/60">
          <p>&copy; 2025 TribeHub. Built in Ghana for African communities.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <span>🇬🇭 Made in Accra</span>
            <span>·</span>
            <span>Supporting communities across Africa</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
