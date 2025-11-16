"use client"

import { Card, CardContent } from "@/components/ui/card"

const steps = [
  {
    number: "01",
    badge: "15-minute conversation",
    title: "Share your reality",
    description: "Tell us about your community: how you manage members now, what's working, and what's making you want to pull your hair out. We'll have a straight conversation about whether we're actually the right fit for each other.",
  },
  {
    number: "02",
    badge: "1-hour deep dive",
    title: "Map your workflows",
    description:
      "Walk us through a typical month: tracking contributions, planning events, communicating with members. We'll identify exactly where TribeHub can save you time and what features would make the biggest difference for you specifically.",
  },
  {
    number: "03",
    badge: "Monthly sessions + ongoing access",
    title: "Build it together",
    description:
      "Get early access to prototypes and new features as we build them. Test with your real community, give brutally honest feedback, and watch your input directly shape what we create. This is genuine co-design, not beta testing.",
  },
  {
    number: "04",
    badge: "Dedicated onboarding + support",
    title: "Launch with confidence",
    description:
      "When you're ready to roll out TribeHub to your full community, we'll personally help you migrate data, train your team, and get everything set up right. Direct access to our team whenever you need it. No tickets, no waiting.",
  },
]

export function HowItWorks() {
  return (
    <section id="roadmap" className="py-14 md:py-20 lg:py-28 bg-gradient-to-b from-background via-muted/50 to-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 opacity-15">
        <div className="absolute top-1/3 left-1/3 w-[500px] h-[500px] bg-primary/25 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/3 w-[500px] h-[500px] bg-accent/25 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6 mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground text-balance leading-[1.1]">
            Your journey as a founding partner
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed pt-2">
            From first conversation to launch day, here's exactly what working together looks like. No surprises, no hidden commitments.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {steps.map((step, index) => (
            <div key={step.number} className="relative group">
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-28 left-[55%] w-[calc(100%-55%)] h-0.5 bg-gradient-to-r from-primary/50 via-primary/30 to-transparent" />
              )}
              <Card className="border border-border/60 bg-card/90 backdrop-blur hover:border-primary/50 hover:shadow-xl transition-all duration-300 h-full group-hover:-translate-y-1">
                <CardContent className="pt-12 pb-12 px-8">
                  <div className="space-y-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 via-accent/15 to-transparent group-hover:from-primary/30 group-hover:via-accent/25 flex items-center justify-center text-xl font-bold text-primary transition-all duration-300 group-hover:scale-110">
                      {step.number}
                    </div>
                    <div className="space-y-2">
                      <span className="text-xs uppercase tracking-wider text-primary/70 font-semibold">{step.badge}</span>
                      <h3 className="font-bold text-foreground text-xl leading-tight group-hover:text-primary transition-colors">{step.title}</h3>
                    </div>
                    <p className="text-base text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
