"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"

const focusAreas = ["Alumni groups", "Religious groups", "Professional associations"]

const roadmap = [
  {
    label: "Unified Member HQ",
    status: "Private alpha",
    badgeClass: "bg-primary/15 text-primary",
    description: "Every member's profile, history, and activity in one place. No more scattered spreadsheets or lost records.",
  },
  {
    label: "Automated Contributions",
    status: "In design",
    badgeClass: "bg-orange-500/20 text-orange-600 dark:bg-orange-500/25 dark:text-orange-400 border border-orange-500/30 dark:border-orange-400/30",
    description: "Track dues and payments effortlessly with mobile money integration. No more chasing members for receipts.",
  },
  {
    label: "Event Ops",
    status: "Scoping",
    badgeClass: "bg-secondary text-secondary-foreground",
    description: "Plan events, manage RSVPs, and coordinate volunteers without the back-and-forth WhatsApp chaos.",
  },
]

export function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden pt-20 pb-16 md:pt-24 md:pb-20 lg:pt-32 lg:pb-28">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 pointer-events-none" />
      <div className="absolute top-32 right-0 w-72 h-72 bg-accent/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-12 left-0 w-[26rem] h-[26rem] bg-primary/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left content */}
          <div className="space-y-8 md:space-y-10">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full hover:bg-primary/15 transition-colors">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm font-semibold text-primary">Early adopter program now accepting applications</span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold text-foreground leading-[1.1] text-balance">
                Stop juggling tools. Start building community.
              </h1>

              <p className="text-lg md:text-xl text-foreground/70 leading-relaxed text-balance max-w-xl pt-2">
                One platform built for African community leaders to manage members, track contributions, and organize events without the spreadsheet chaos or endless WhatsApp threads.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-primary-foreground gap-2 shadow-lg hover:shadow-xl transition-all"
              >
                <a href="#contact">
                  Become an early adopter <ArrowRight className="w-4 h-4" />
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-border hover:bg-muted/60 bg-background/60 backdrop-blur"
              >
                <a href="#product">Explore what we're building</a>
              </Button>
            </div>

            <div className="grid sm:grid-cols-3 gap-4 pt-2 text-sm text-foreground/70">
              {focusAreas.map((area) => (
                <div key={area} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-primary to-accent" />
                  <span>{area}</span>
                </div>
              ))}
            </div>

            <p className="text-sm text-foreground/60 pt-1">
              <strong className="text-foreground">Launching Q2 2026.</strong> Join our founding partners to shape features,
              test prototypes, and lock in lifetime discounts before general launch.
            </p>
          </div>

          {/* Right visual - Product roadmap spotlight */}
          <div className="relative h-full min-h-[32rem]">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/15 to-primary/10 rounded-3xl blur-3xl" />
            <div className="relative bg-card/90 backdrop-blur border border-border/80 rounded-3xl p-10 shadow-2xl overflow-hidden">
              <div className="space-y-8">
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-foreground/50">Early Adopter Roadmap</p>
                    <h3 className="text-foreground font-semibold text-xl mt-3 leading-relaxed">
                      What we&apos;re building together
                    </h3>
                  </div>
                  <div className="px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold">
                    Collaborative build
                  </div>
                </div>

                <div className="space-y-5">
                  {roadmap.map((item) => (
                    <div
                      key={item.label}
                      className="group rounded-2xl border border-border/70 bg-background/60 p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-lg"
                    >
                      <div className="flex items-center justify-between gap-3 mb-3">
                        <h4 className="font-semibold text-foreground">{item.label}</h4>
                        <span className={`text-xs font-semibold px-3 py-1 rounded-full ${item.badgeClass}`}>
                          {item.status}
                        </span>
                      </div>
                      <p className="text-sm text-foreground/60 leading-relaxed">{item.description}</p>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-6 pt-6 border-t border-border/60">
                  <div>
                    <p className="text-xs uppercase tracking-wide text-foreground/50 mb-2">How we work</p>
                    <p className="text-sm text-foreground/70 leading-relaxed">Monthly build sessions and async prototype drops.</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wide text-foreground/50 mb-2">What you get</p>
                    <p className="text-sm text-foreground/70 leading-relaxed">
                      A dedicated partner channel and influence over launch priorities.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
