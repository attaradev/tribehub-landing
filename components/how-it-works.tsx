"use client"

import { Card, CardContent } from "@/components/ui/card"

const steps = [
  {
    number: "01",
    title: "Apply for early access",
    description: "Share how your organisation runs today and the gaps you want to close. We prioritise aligned teams.",
    meta: "10-minute intake",
  },
  {
    number: "02",
    title: "Strategy workshop",
    description:
      "We map your critical workflows with your operators so we can design the first release around real scenarios.",
    meta: "Remote, collaborative",
  },
  {
    number: "03",
    title: "Prototype sprints",
    description:
      "Review interactive journeys every few weeks, leave feedback asynchronously, and watch the product take shape.",
    meta: "Figma & product previews",
  },
  {
    number: "04",
    title: "Launch readiness",
    description:
      "Co-create success metrics, migrate essential data, and prepare your team for onboarding with our support.",
    meta: "Guided rollout",
  },
]

export function HowItWorks() {
  return (
    <section id="roadmap" className="py-14 md:py-20 lg:py-28 bg-muted/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground text-balance">
            How the founding cohort comes to life
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            TribeHub is a collaboration. These are the moments we move through together to ensure the product mirrors the way your community truly operates.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-5">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-24 left-[55%] w-[calc(100%-55%)] h-px bg-gradient-to-r from-primary/40 to-transparent" />
              )}
              <Card className="border border-border/70 bg-card/80 backdrop-blur hover:border-primary/50 transition-colors h-full">
                <CardContent className="pt-7 pb-8">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-base font-semibold text-primary">
                      {step.number}
                    </div>
                    <span className="text-xs uppercase tracking-wide text-foreground/50">{step.meta}</span>
                  </div>
                  <h3 className="font-semibold text-foreground text-xl mt-6 leading-tight">{step.title}</h3>
                  <p className="text-sm text-foreground/60 mt-3 leading-relaxed">{step.description}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
