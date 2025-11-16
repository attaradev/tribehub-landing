"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart3, Calendar, CreditCard, Users } from "lucide-react"

const features = [
  {
    icon: Users,
    title: "Member HQ",
    stage: "Private alpha",
    description:
      "Every member's complete record in one place: contact info, contribution history, event attendance, and roles. No more scattered spreadsheets or lost information.",
    detail: "Built for how you actually work: mobile money tracking, WhatsApp integration, and works offline when connectivity is spotty.",
    iconGradient: "from-primary/30 to-primary/5",
  },
  {
    icon: CreditCard,
    title: "Contribution Engine",
    stage: "In design",
    description:
      "Track dues, pledges, and payments automatically. Supports mobile money, bank transfers, and cash with smart reminders that do the chasing for you.",
    detail: "Made for African payments: MTN Mobile Money, Vodafone Cash, AirtelTigo Money integration, plus flexible payment schedules and automated WhatsApp/SMS reminders.",
    iconGradient: "from-accent/30 to-accent/5",
  },
  {
    icon: Calendar,
    title: "Event Operations",
    stage: "Scoping",
    description:
      "Plan meetings and events without the coordination chaos. RSVP tracking, volunteer management, and automated reminders all from your phone.",
    detail: "Built for real community events: manage cancellations, track who actually showed up, coordinate logistics, and send follow-ups without manual back-and-forth.",
    iconGradient: "from-secondary/80 to-secondary/40",
  },
  {
    icon: BarChart3,
    title: "Actionable Insights",
    stage: "Research",
    description:
      "Know exactly who's active, who's behind on dues, and which events resonate most without digging through spreadsheets. Simple reports you can actually use.",
    detail: "The metrics that matter to community leaders: membership growth, contribution trends, event attendance patterns, and financial summaries ready to share with your executive team.",
    iconGradient: "from-primary/25 via-accent/20 to-primary/5",
  },
]

export function Features() {
  return (
    <section
      id="product"
      className="py-14 md:py-20 lg:py-28 bg-gradient-to-b from-transparent via-primary/8 to-transparent relative"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-6 mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground text-balance leading-[1.1]">
            Core modules designed for African communities
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed pt-2">
            We're starting with these four foundational modules. As our founding partners use them, we'll build additional capabilities based on real needs, not assumptions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <Card
                key={feature.title}
                className="relative border border-border/60 bg-card/90 backdrop-blur hover:border-primary/50 hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-primary/8 via-accent/8 to-transparent pointer-events-none rounded-xl" />
                <CardHeader className="relative space-y-6 pb-6">
                  <div className="flex items-start gap-6">
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${feature.iconGradient} rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-primary/70 font-semibold mb-2">
                        <span className="h-2 w-2 rounded-full bg-primary/70" />
                        {feature.stage}
                      </div>
                      <CardTitle className="text-foreground text-2xl md:text-3xl group-hover:text-primary transition-colors">{feature.title}</CardTitle>
                    </div>
                  </div>
                  <CardDescription className="text-base md:text-lg text-muted-foreground leading-relaxed font-medium">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="relative pt-0 pb-8">
                  <p className="text-base text-muted-foreground/80 leading-relaxed">{feature.detail}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
