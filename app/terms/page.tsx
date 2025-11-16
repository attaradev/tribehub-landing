import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "TribeHub's terms of service and usage guidelines. Review our terms for website usage and founding partner participation.",
  alternates: {
    canonical: "/terms",
  },
  openGraph: {
    title: "Terms of Service — TribeHub",
    description: "TribeHub's terms of service and usage guidelines. Review our terms for website usage and founding partner participation.",
    url: "https://tribehub.co/terms",
    siteName: "TribeHub",
    locale: "en_GH",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <Button asChild variant="ghost" className="mb-8">
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to home
          </Link>
        </Button>

        <article className="prose prose-lg dark:prose-invert max-w-none">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Terms of Service
          </h1>
          <p className="text-muted-foreground text-lg mb-8">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>

          <div className="space-y-8 text-foreground/80">
            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                1. Introduction and Acceptance
              </h2>
              <p>
                Welcome to TribeHub ("we," "our," or "us"). These Terms of Service ("Terms") govern your access
                to and use of the TribeHub website and services. By accessing or using our website, you agree to
                be bound by these Terms.
              </p>
              <p>
                <strong>Important:</strong> TribeHub is currently in development. These terms apply to our pre-launch
                website, waitlist, and founding cohort (early adopter) program. Additional terms will apply when the full platform launches.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                2. Eligibility
              </h2>
              <p>
                You must be at least 18 years old and have the legal capacity to enter into these Terms. By using
                TribeHub, you represent and warrant that you meet these requirements.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                3. Permitted Use
              </h2>
              <p>You may use TribeHub to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Learn about our community operations platform</li>
                <li>Join our waitlist for product updates</li>
                <li>Apply to participate in our founding cohort program</li>
                <li>Contact us with questions or feedback</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
                Prohibited Activities
              </h3>
              <p>You agree not to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide false or misleading information</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Use automated tools to scrape or collect data from our website</li>
                <li>Interfere with the proper functioning of our website</li>
                <li>Use the website for any illegal purpose</li>
                <li>Impersonate another person or organization</li>
                <li>Violate any applicable laws or regulations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                4. Founding Cohort (Early Adopter) Program
              </h2>
              <p>
                Our founding cohort is a group of early adopters who help shape TribeHub during development.
                If you're accepted into this program:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>You'll receive early access to prototypes and product previews as an early adopter</li>
                <li>You may provide feedback and participate in co-design sessions</li>
                <li>You'll receive preferred pricing upon general launch (details to be confirmed)</li>
                <li>Participation is voluntary and can be discontinued at any time</li>
                <li>Specific cohort terms will be provided upon acceptance</li>
              </ul>
              <p className="mt-4">
                We reserve the right to accept or decline applications at our discretion. As an early adopter,
                you'll have significant influence on product direction and feature priorities.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                5. Intellectual Property
              </h2>
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
                Our Content
              </h3>
              <p>
                All content on the TribeHub website, including text, graphics, logos, icons, images, and software,
                is the property of TribeHub or its licensors and is protected by copyright, trademark, and other
                intellectual property laws.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
                Your Feedback
              </h3>
              <p>
                If you provide feedback, suggestions, or ideas about TribeHub, you grant us a perpetual, worldwide,
                royalty-free license to use, modify, and incorporate that feedback into our products and services
                without obligation to you.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                6. Third-Party Services
              </h2>
              <p>
                Our website may contain links to third-party websites or services. We are not responsible for the
                content, privacy policies, or practices of any third-party sites. Your use of third-party services
                is governed by their respective terms and policies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                7. Disclaimers and Limitations of Liability
              </h2>
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
                "As Is" Basis
              </h3>
              <p>
                TribeHub is provided "as is" and "as available" without warranties of any kind, either express or
                implied. We do not guarantee that the website will be uninterrupted, error-free, or secure.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
                Limitation of Liability
              </h3>
              <p>
                To the maximum extent permitted by law, TribeHub shall not be liable for any indirect, incidental,
                special, consequential, or punitive damages resulting from your use of or inability to use the website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                8. Indemnification
              </h2>
              <p>
                You agree to indemnify and hold harmless TribeHub, its affiliates, and their respective officers,
                directors, employees, and agents from any claims, damages, losses, liabilities, and expenses
                (including legal fees) arising from your use of the website or violation of these Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                9. Privacy
              </h2>
              <p>
                Your use of TribeHub is also governed by our{" "}
                <Link href="/privacy" className="text-primary hover:underline">
                  Privacy Policy
                </Link>
                . Please review it to understand how we collect, use, and protect your personal information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                10. Changes to Terms
              </h2>
              <p>
                We reserve the right to modify these Terms at any time. We will notify you of significant changes
                by posting the updated Terms on this page and updating the "Last updated" date. Your continued use
                of the website after changes are posted constitutes acceptance of the modified Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                11. Termination
              </h2>
              <p>
                We may suspend or terminate your access to TribeHub at any time, with or without cause or notice.
                Upon termination, all provisions of these Terms that by their nature should survive will remain in
                effect, including intellectual property provisions, disclaimers, and limitations of liability.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                12. Governing Law and Dispute Resolution
              </h2>
              <p>
                These Terms shall be governed by and construed in accordance with the laws of [Your Jurisdiction],
                without regard to its conflict of law provisions.
              </p>
              <p>
                Any disputes arising from these Terms or your use of TribeHub shall be resolved through good faith
                negotiation. If negotiation fails, disputes will be resolved through binding arbitration in
                accordance with [Arbitration Rules], except where prohibited by law.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                13. Severability
              </h2>
              <p>
                If any provision of these Terms is found to be unenforceable or invalid, that provision will be
                limited or eliminated to the minimum extent necessary, and the remaining provisions will remain in
                full force and effect.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                14. Entire Agreement
              </h2>
              <p>
                These Terms, together with our Privacy Policy, constitute the entire agreement between you and
                TribeHub regarding your use of the website and supersede all prior agreements and understandings.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                15. Contact Information
              </h2>
              <p>
                If you have questions about these Terms, please contact us:
              </p>
              <ul className="list-none space-y-2 mt-4">
                <li>Email: <a href="mailto:legal@tribehub.co" className="text-primary hover:underline">legal@tribehub.co</a></li>
                <li>General inquiries: <a href="mailto:hello@tribehub.co" className="text-primary hover:underline">hello@tribehub.co</a></li>
              </ul>
            </section>

            <div className="mt-12 p-6 bg-muted/50 rounded-lg border border-border">
              <p className="text-sm text-muted-foreground">
                <strong>Note for Founding Cohort (Early Adopter) Partners:</strong> These terms cover website usage and general
                participation. Specific partnership agreements will be provided to early adopters in our founding cohort with
                additional details about collaboration, confidentiality, and launch benefits. As an early adopter, you'll
                play a key role in shaping the platform.
              </p>
            </div>
          </div>
        </article>

        <div className="mt-12 pt-8 border-t border-border">
          <Button asChild>
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to home
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
