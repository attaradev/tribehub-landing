"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "When will TribeHub be ready to use?",
    answer:
      "We're targeting Q2 2026 for general launch. Early adopters get access to working prototypes much sooner. We're building with a select group of founding communities to ensure we get it right before opening up.",
  },
  {
    question: "Will TribeHub have more than these four modules?",
    answer:
      "Absolutely. These four modules are just the foundation we're starting with. As we work with early adopters, we'll build additional capabilities based on what your communities actually need: communication tools, document management, volunteer coordination, and more. You'll help shape what comes next.",
  },
  {
    question: "Who should join as an early adopter?",
    answer:
      "Leaders of alumni groups, religious organizations, or professional associations in Ghana and across Africa. If you're managing 50+ members, spending weekends on admin work, and tired of juggling WhatsApp groups with Excel spreadsheets, you're exactly who we want to work with.",
  },
  {
    question: "What's the time commitment for early adopters?",
    answer:
      "About 2-4 hours per month: one live session to discuss your workflows and challenges, feedback on prototypes we share, and occasional check-ins. We work around your schedule and make participation flexible. The value you get (early access, influence over features, and lifetime discounts) far outweighs the time invested.",
  },
  {
    question: "What does 'lifetime discount' actually mean?",
    answer:
      "Early adopters lock in significantly lower pricing than general launch rates, and that rate stays with you forever, even as we add new features. There's zero cost during the development phase. We only charge when you start using TribeHub for your live community operations, and you'll know the exact pricing upfront.",
  },
  {
    question: "What if TribeHub doesn't fit my community's needs?",
    answer:
      "No pressure, no hard feelings. If we discover another solution works better for you, we'll tell you honestly. If you join as an early adopter but things aren't working out, you can opt out anytime. We're building genuine partnerships with communities, not locking anyone into commitments.",
  },
  {
    question: "Do I need technical skills to be an early adopter?",
    answer:
      "Not at all. We need your expertise in running communities, not coding. If you can use WhatsApp and Excel, you're qualified. We're designing TribeHub to be simple enough that any treasurer, secretary, or coordinator can use it, and your real-world experience helps us get there.",
  },
]

export function FAQ() {
  return (
    <section id="faq" className="py-14 md:py-20 lg:py-28 bg-gradient-to-b from-background via-muted/20 to-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 opacity-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground text-balance leading-[1.1]">Common questions</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed pt-2">
            Still curious? <a href="#contact" className="text-primary hover:underline font-semibold">Reach out</a>, we're happy to talk through anything that's on your mind.
          </p>
        </div>

        <Accordion
          type="single"
          collapsible
          className="divide-y divide-border/60 border border-border/60 rounded-3xl bg-card/90 backdrop-blur shadow-lg"
        >
          {faqs.map((faq, index) => (
            <AccordionItem key={faq.question} value={`item-${index}`} className="px-6 md:px-8">
              <AccordionTrigger className="text-base md:text-lg font-semibold text-foreground py-6 hover:text-primary transition-colors">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground leading-relaxed pb-6">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
