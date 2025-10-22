"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "What stage is TribeHub in right now?",
    answer:
      "We are in a private build with a handful of founding organisations. Core modules are moving through design and prototype sprints before we open a broader beta.",
  },
  {
    question: "Who is a great fit for early access?",
    answer:
      "Operators who steward member-driven clubs, associations, or networks with at least one person dedicated to community operations. You value thoughtful tooling and want a say in how it’s built.",
  },
  {
    question: "How do feedback cycles work?",
    answer:
      "We run monthly workshops, share interactive prototypes, and open async channels for day-to-day input. Decisions and updates are documented so you always know what’s shipping next.",
  },
  {
    question: "How is pricing handled?",
    answer:
      "Founding cohort partners receive preferred pricing once we launch generally. There’s no charge to participate in research or preview the product ahead of launch.",
  },
]

export function FAQ() {
  return (
    <section id="faq" className="py-8 md:py-14 lg:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-10">
          <h2 className="text-4xl md:text-5xl font-semibold text-foreground text-balance">Questions, answered</h2>
          <p className="text-lg text-foreground/60">
            If you have more, reach out—every conversation shapes what we ship.
          </p>
        </div>

        <Accordion
          type="single"
          collapsible
          className="divide-y divide-border/80 border border-border/70 rounded-2xl bg-card/80 backdrop-blur"
        >
          {faqs.map((faq, index) => (
            <AccordionItem key={faq.question} value={`item-${index}`} className="px-5">
              <AccordionTrigger className="text-base text-foreground py-4">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-foreground/60 leading-relaxed pb-5">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
