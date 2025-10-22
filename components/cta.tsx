"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTA() {
  return (
    <section id="cta" className="py-14 md:py-20 bg-gradient-to-b from-transparent to-primary/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <div className="space-y-3">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground text-balance">
            Join the founding cohort
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            We’re inviting a small group of community operators to shape TribeHub with us. Tell us about your organisation
            and we’ll share the next build milestone.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2 shadow-lg hover:shadow-xl transition-all"
          >
            <a href="mailto:hello@tribehub.co?subject=TribeHub%20Waitlist">
              Join the waitlist <ArrowRight className="w-4 h-4" />
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-border hover:bg-muted bg-transparent"
          >
            <a href="mailto:hello@tribehub.co?subject=TribeHub%20Intro%20Call">Book an intro call</a>
          </Button>
        </div>

        <p className="text-sm text-foreground/60">
          First invitations roll out in Q4 2025. We’ll keep you updated with transparent progress notes.
        </p>
      </div>
    </section>
  )
}
