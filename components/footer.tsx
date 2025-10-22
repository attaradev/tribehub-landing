"use client"

export function Footer() {
  return (
    <footer className="bg-muted/50 border-t border-border py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold">T</span>
              </div>
              <span className="font-bold text-foreground">TribeHub</span>
            </div>
            <p className="text-sm text-foreground/60">
              We&apos;re building the operating system for member-led organisations—thoughtfully, with operators at the table.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-foreground/60">
              <li>
                <a href="#product" className="hover:text-foreground transition-colors">
                  Product pillars
                </a>
              </li>
              <li>
                <a href="#roadmap" className="hover:text-foreground transition-colors">
                  Founding cohort
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-foreground transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-foreground/60">
              <li>
                <a href="mailto:hello@tribehub.co" className="hover:text-foreground transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#cta" className="hover:text-foreground transition-colors">
                  Join waitlist
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Build notes (coming soon)
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Policies</h4>
            <ul className="space-y-2 text-sm text-foreground/60">
              <li>
                <span className="text-foreground/60">Privacy policy (in draft)</span>
              </li>
              <li>
                <span className="text-foreground/60">Terms of service (coming soon)</span>
              </li>
              <li>
                <span className="text-foreground/60">Cookies & consent playbook (coming soon)</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-foreground/60">
          <p>&copy; 2025 TribeHub Labs. Building intentionally for community operators.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-foreground transition-colors">
              Twitter
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              LinkedIn
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Facebook
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
