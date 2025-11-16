"use client"

import { Users, Building2, TrendingUp, Award } from "lucide-react"

const stats = [
  {
    icon: Users,
    value: "8",
    label: "Founding partners",
    description: "Community operators actively co-designing with us",
  },
  {
    icon: Building2,
    value: "3",
    label: "Development phases",
    description: "Strategy → Prototypes → Launch readiness",
  },
  {
    icon: TrendingUp,
    value: "Q2 2026",
    label: "General launch",
    description: "Founding partners get early access now",
  },
  {
    icon: Award,
    value: "100%",
    label: "Operator-led",
    description: "Built by people who run communities daily",
  },
]

const testimonialQuotes = [
  {
    quote: "For three years I've juggled WhatsApp groups, Excel sheets, and my notebook to manage 200+ members. TribeHub is the first system I've seen that actually understands how we work here: mobile money, flexible payments, real African context.",
    author: "Treasurer",
    org: "Professional association, Accra",
  },
  {
    quote: "Every tool we've tried assumes we have perfect internet and credit cards. TribeHub gets it: mobile money integration, SMS reminders, offline access. Finally, someone building for our reality, not Silicon Valley's fantasy.",
    author: "Community Coordinator",
    org: "Youth organization, Kumasi",
  },
]

export function SocialProof() {
  return (
    <section className="py-14 md:py-20 lg:py-28 bg-gradient-to-b from-background via-muted/40 to-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div
                key={index}
                className="text-center space-y-4 p-8 rounded-2xl bg-card/80 border border-border/60 backdrop-blur hover:border-primary/40 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex justify-center">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-foreground mb-2">{stat.value}</div>
                  <div className="text-base font-semibold text-foreground/90 mb-2">{stat.label}</div>
                  <div className="text-sm text-muted-foreground leading-relaxed">{stat.description}</div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Testimonials */}
        <div className="space-y-6 mb-14 text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-foreground">
            What founding partners are saying
          </h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real feedback from community leaders building with us
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonialQuotes.map((testimonial, index) => (
            <div
              key={index}
              className="p-8 md:p-10 rounded-2xl bg-card/90 border border-border/60 hover:border-primary/40 hover:shadow-lg transition-all duration-300"
            >
              <div className="space-y-6">
                <svg
                  className="w-10 h-10 text-primary/50"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
                </svg>
                <p className="text-xl text-foreground/90 leading-relaxed font-medium">
                  "{testimonial.quote}"
                </p>
                <div className="pt-4 border-t border-border/50">
                  <p className="text-base font-semibold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground mt-1">{testimonial.org}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 pt-8 border-t border-border/50">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <span>Security by design</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <span>GDPR compliant</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <span>Transparent pricing</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <span>No vendor lock-in</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
