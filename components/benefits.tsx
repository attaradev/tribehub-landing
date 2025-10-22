"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Headphones, Shield, Sparkles, Zap } from "lucide-react"

const benefits = [
  {
    icon: Sparkles,
    title: "Operators at the table",
    description:
      "Founding teams co-design with us from day one so the product feels like it was built for your rituals—not a generic tool you need to bend.",
  },
  {
    icon: Zap,
    title: "Momentum without busywork",
    description:
      "Automation works behind the scenes to handle the repetitive tasks, so you can focus on building relationships and strategy.",
  },
  {
    icon: Shield,
    title: "Trustworthy by default",
    description:
      "Privacy, member consent, and data governance are foundational—we’re designing controls with guidance from compliance experts.",
  },
  {
    icon: Headphones,
    title: "Partner-level support",
    description:
      "You get a dedicated product partner, async channels, and real humans who understand what running a community really takes.",
  },
]

export function Benefits() {
  return (
    <section className="py-14 md:py-20 lg:py-28 bg-gradient-to-b from-transparent via-primary/6 to-transparent relative">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-4xl md:text-5xl font-semibold text-foreground text-balance">Why teams partner with us</h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            TribeHub is a long-term build. We’re committed to shipping with care, clarity, and the level of partnership
            community leaders deserve.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <Card key={index} className="border border-border/70 bg-card/80 backdrop-blur group transition-all duration-300 hover:border-primary/50 hover:-translate-y-1">
                <CardContent className="pt-8 pb-10">
                  <div className="space-y-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary/15 via-accent/15 to-transparent group-hover:from-primary/20 group-hover:via-accent/20 rounded-lg flex items-center justify-center transition-all">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground text-lg">{benefit.title}</h3>
                      <p className="text-sm text-foreground/60 mt-2 leading-relaxed">{benefit.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
