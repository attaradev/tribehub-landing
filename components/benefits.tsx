"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Headphones, Shield, Sparkles, Zap } from "lucide-react"

const benefits = [
  {
    icon: Sparkles,
    title: "Built with you, not for you",
    description:
      "You're not just testing features, you're co-designing them. Through monthly sessions and real-time feedback, you'll shape a platform that actually fits how your community works, not how Silicon Valley thinks you should work.",
  },
  {
    icon: Zap,
    title: "Get your weekends back",
    description:
      "Stop spending Saturday afternoons chasing dues or updating spreadsheets. TribeHub automates the repetitive busywork (reminders, reports, follow-ups) so you can focus on the relationships and impact that matter.",
  },
  {
    icon: Shield,
    title: "Security you can stand behind",
    description:
      "Your members trust you with their data. We take that seriously. From day one, we're building with data protection, member privacy, and compliance guidance from legal experts because trust is earned, not assumed.",
  },
  {
    icon: Headphones,
    title: "Real support, no runaround",
    description:
      "When you need help, you'll talk to actual humans who understand community work, not bots or generic support queues. Direct access to our team through dedicated channels, plain answers, and genuine care.",
  },
]

export function Benefits() {
  return (
    <section className="py-14 md:py-20 lg:py-28 bg-gradient-to-b from-background via-muted/30 to-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 opacity-20">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
      </div>
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6 mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground text-balance leading-[1.1]">
            Why community leaders choose TribeHub
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed pt-2">
            We're not rushing to launch a half-baked product. We're building TribeHub the right way: slowly, deliberately, and in true partnership with community leaders who know what actually works.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <Card key={index} className="border border-border/60 bg-card/90 backdrop-blur group transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:-translate-y-2">
                <CardContent className="pt-12 pb-12 px-8">
                  <div className="space-y-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary/20 via-accent/15 to-transparent group-hover:from-primary/30 group-hover:via-accent/25 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground text-xl mb-4 group-hover:text-primary transition-colors">{benefit.title}</h3>
                      <p className="text-base text-muted-foreground leading-relaxed">{benefit.description}</p>
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
