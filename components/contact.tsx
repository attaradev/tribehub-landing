"use client"

import { ContactForm } from "@/components/contact-form"
import { Mail, MessageSquare, Users } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-14 md:py-20 lg:py-28 bg-gradient-to-b from-background via-primary/5 to-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 opacity-30">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent/15 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-16 lg:gap-20 items-start">
          {/* Left column - Content (takes 2 columns) */}
          <div className="lg:col-span-2 space-y-10">
            <div className="space-y-5">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-[1.1]">
                Let's talk about your community
              </h2>
              <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
                We're recruiting founding partners to build TribeHub together. If you're managing an active community and tired of piecing together disconnected tools, let's talk.
              </p>
            </div>

            <div className="space-y-7">
              <div className="flex gap-5">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    Become a founding partner
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Co-design features through monthly sessions, test prototypes with your real community, and lock in lifetime pricing before general launch. You'll have direct access to our team and genuine influence over what we build.
                  </p>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center shrink-0">
                  <MessageSquare className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    See what we're building
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Book a walkthrough of our current prototypes and roadmap. No sales pitch, no pressure. Just an honest conversation about what we're creating and whether it makes sense for your community.
                  </p>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    Just have questions
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Not sure if TribeHub is right for you? Want to understand how it works before committing? Ask us anything. We're here to help you make the right decision, even if that means recommending something else.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground leading-relaxed">
                Prefer email? Reach us directly at{" "}
                <a
                  href="mailto:hello@tribehub.co"
                  className="text-primary hover:underline font-medium"
                >
                  hello@tribehub.co
                </a>
              </p>
            </div>
          </div>

          {/* Right column - Form (takes 3 columns) */}
          <div className="lg:col-span-3 bg-card/90 border border-border/70 rounded-3xl p-10 md:p-12 shadow-xl backdrop-blur">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}
