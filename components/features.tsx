"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart3, Calendar, CreditCard, Users } from "lucide-react"

const features = [
  {
    icon: Users,
    title: "Member HQ",
    stage: "Private alpha",
    description:
      "A living profile for every member with roles, history, and context in one place so your whole team stays aligned.",
    detail: "We’re pairing operators with our design team to shape flexible fields, tags, and automations.",
    iconGradient: "from-primary/30 to-primary/5",
  },
  {
    icon: CreditCard,
    title: "Contribution Engine",
    stage: "In design",
    description:
      "Configurable contribution flows that handle dues, pledges, and fundraising without endless spreadsheet work.",
    detail: "Design sprints are focused on reliable payment rails, transparent reporting, and gentle reminders members trust.",
    iconGradient: "from-accent/30 to-accent/5",
  },
  {
    icon: Calendar,
    title: "Rituals & Events",
    stage: "Scoping",
    description:
      "Plan gatherings, track RSVPs, and capture follow-ups from the same workspace you use to run the rest of your community.",
    detail: "We’re mapping the ideal operator journey—from idea to run-of-show—to make coordination calm and predictable.",
    iconGradient: "from-secondary/80 to-secondary/40",
  },
  {
    icon: BarChart3,
    title: "Insight Layers",
    stage: "Research",
    description:
      "Story-driven dashboards that surface trends your board, staff, and members can act on without digging.",
    detail: "Open research sessions are shaping the narratives you need: retention, dues health, volunteer momentum, and more.",
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
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground text-balance">
            The pillars we&apos;re building first
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Every module is co-created with founding teams so you launch with workflows that feel tailored, not generic
            software bolted together.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-7">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <Card
                key={feature.title}
                className="relative border border-border/70 bg-card/80 backdrop-blur hover:border-primary/50 transition-all duration-300"
              >
                <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-primary/5 via-accent/5 to-transparent pointer-events-none" />
                <CardHeader className="relative space-y-4">
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-12 h-12 bg-gradient-to-br ${feature.iconGradient} rounded-xl flex items-center justify-center shadow-sm`}
                    >
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="inline-flex items-center gap-2 text-xs uppercase tracking-wide text-foreground/50">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary/60" />
                        {feature.stage}
                      </div>
                      <CardTitle className="text-foreground text-2xl mt-2">{feature.title}</CardTitle>
                    </div>
                  </div>
                  <CardDescription className="text-base text-foreground/70 leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="relative pt-0">
                  <p className="text-sm text-foreground/60 leading-relaxed">{feature.detail}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
