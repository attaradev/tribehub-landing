"use client"

import { CheckCircle2 } from "lucide-react"

const painPoints = [
  "Chasing members for dues through endless WhatsApp messages, calls, and follow-ups",
  "Juggling spreadsheets, notebooks, and apps that never talk to each other",
  "Losing track of who paid, who's active, and who volunteered for what",
  "Spending your weekends buried in admin work instead of building community",
]

const vision = [
  {
    stat: "Hours",
    label: "Back in your week",
    detail: "Automate the busywork that eats your time",
  },
  {
    stat: "One",
    label: "Unified platform",
    detail: "Replace your stack of disconnected tools",
  },
  {
    stat: "Zero",
    label: "Tech expertise required",
    detail: "Built for operators, not engineers",
  },
]

export function Story() {
  return (
    <section className="py-14 md:py-20 lg:py-28 relative overflow-hidden bg-gradient-to-b from-background via-muted/20 to-background">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 opacity-30">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent/30 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-primary/30 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left: The Problem */}
          <div className="space-y-6">
            <div className="inline-block">
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                The reality
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              Running a community shouldn't feel like a second full-time job
            </h2>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              If you're leading an alumni group, religious organization, or professional association, this probably sounds all too familiar:
            </p>

            <div className="space-y-3 pt-4">
              {painPoints.map((point, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 text-foreground/80"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-destructive/60 mt-2.5 shrink-0" />
                  <p className="text-base">{point}</p>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <p className="text-lg font-medium text-foreground">
                There has to be a better way. <span className="text-primary">And there is.</span>
              </p>
            </div>
          </div>

          {/* Right: The Vision */}
          <div className="space-y-6">
            <div className="inline-block">
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                The vision
              </span>
            </div>

            <h3 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
              What if you could spend your time building, not managing?
            </h3>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              TribeHub handles the busywork automatically, so you can focus on what you actually signed up for:
              building relationships, creating impact, and growing your community.
            </p>

            <div className="grid gap-6 pt-4">
              {vision.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-5 rounded-xl bg-gradient-to-br from-card/80 to-card/40 border border-border/50 backdrop-blur"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-bold text-foreground">{item.stat}</span>
                      <span className="text-base font-semibold text-foreground/80">{item.label}</span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4 p-4 bg-primary/5 border-l-4 border-primary rounded-r-lg">
              <p className="text-sm text-foreground/70 italic">
                "Every tool out there is built for Silicon Valley startups or European nonprofits. They don't understand mobile money, WhatsApp coordination, or how we actually run things here. TribeHub gets it because it's built by people who live this reality."
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                - Founding partner, Accra
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
