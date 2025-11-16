import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "TribeHub's privacy policy and data handling practices. Learn how we collect, use, and protect your personal information.",
  alternates: {
    canonical: "/privacy",
  },
  openGraph: {
    title: "Privacy Policy — TribeHub",
    description: "TribeHub's privacy policy and data handling practices. Learn how we collect, use, and protect your personal information.",
    url: "https://tribehub.co/privacy",
    siteName: "TribeHub",
    locale: "en_GH",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function PrivacyPolicy() {
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
            Privacy Policy
          </h1>
          <p className="text-muted-foreground text-lg mb-8">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>

          <div className="space-y-8 text-foreground/80">
            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                1. Introduction
              </h2>
              <p>
                Welcome to TribeHub. We respect your privacy and are committed to protecting your personal data.
                This privacy policy explains how we collect, use, and safeguard your information when you visit
                our website or express interest in our services.
              </p>
              <p>
                TribeHub is currently in development, and this policy will evolve as we build our platform.
                We're committed to transparency and will update this document as our practices develop.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                2. Information We Collect
              </h2>
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
                Information you provide to us:
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Contact information:</strong> Name, email address, organization name when you submit our contact form or join our waitlist</li>
                <li><strong>Communication data:</strong> Any information you share with us through email or our contact form</li>
                <li><strong>Feedback and research data:</strong> Information shared during founding cohort workshops, prototype testing, and feedback sessions</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
                Information we collect automatically:
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Analytics data:</strong> Page views, device type, browser information, and general location data through Vercel Analytics</li>
                <li><strong>Cookies:</strong> Essential cookies to remember your preferences like theme selection</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                3. How We Use Your Information
              </h2>
              <p>We use the information we collect to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Respond to your inquiries and communicate with you about TribeHub</li>
                <li>Manage waitlist and founding cohort participation</li>
                <li>Coordinate prototype testing and gather product feedback</li>
                <li>Send updates about product development and launch milestones</li>
                <li>Improve our website and understand how visitors interact with our content</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                4. Data Sharing and Disclosure
              </h2>
              <p>
                We do not sell, rent, or trade your personal information. We may share your data only in these limited circumstances:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Service providers:</strong> With trusted third parties who help us operate our website (e.g., Vercel for hosting and analytics)</li>
                <li><strong>Legal requirements:</strong> When required by law or to protect our rights</li>
                <li><strong>Business transfers:</strong> In connection with a merger, acquisition, or sale of assets (with notice to you)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                5. Data Security
              </h2>
              <p>
                We implement appropriate technical and organizational measures to protect your personal data against
                unauthorized access, alteration, disclosure, or destruction. However, no internet transmission is
                completely secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                6. Your Rights
              </h2>
              <p>You have the right to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Access:</strong> Request a copy of the personal data we hold about you</li>
                <li><strong>Correction:</strong> Request correction of inaccurate or incomplete data</li>
                <li><strong>Deletion:</strong> Request deletion of your personal data</li>
                <li><strong>Objection:</strong> Object to our processing of your personal data</li>
                <li><strong>Data portability:</strong> Request transfer of your data to another service</li>
                <li><strong>Withdraw consent:</strong> Withdraw your consent to data processing at any time</li>
              </ul>
              <p className="mt-4">
                To exercise these rights, please contact us at{" "}
                <a href="mailto:privacy@tribehub.co" className="text-primary hover:underline">
                  privacy@tribehub.co
                </a>
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                7. Data Retention
              </h2>
              <p>
                We retain your personal data only for as long as necessary to fulfill the purposes outlined in this
                policy, unless a longer retention period is required by law. Waitlist and contact information will
                be retained until you request deletion or our service launches and transitions to active user accounts.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                8. International Data Transfers
              </h2>
              <p>
                Your data may be transferred to and processed in countries other than your country of residence.
                We ensure appropriate safeguards are in place to protect your data in accordance with this privacy policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                9. Children's Privacy
              </h2>
              <p>
                TribeHub is not intended for children under 16 years of age. We do not knowingly collect personal
                data from children. If you believe we have collected data from a child, please contact us immediately.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                10. Changes to This Policy
              </h2>
              <p>
                We may update this privacy policy from time to time. We will notify you of significant changes by
                posting the new policy on this page and updating the "Last updated" date. We encourage you to review
                this policy periodically.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                11. Contact Us
              </h2>
              <p>
                If you have questions about this privacy policy or our data practices, please contact us:
              </p>
              <ul className="list-none space-y-2 mt-4">
                <li>Email: <a href="mailto:privacy@tribehub.co" className="text-primary hover:underline">privacy@tribehub.co</a></li>
                <li>General inquiries: <a href="mailto:hello@tribehub.co" className="text-primary hover:underline">hello@tribehub.co</a></li>
              </ul>
            </section>

            <div className="mt-12 p-6 bg-muted/50 rounded-lg border border-border">
              <p className="text-sm text-muted-foreground">
                <strong>Note:</strong> This privacy policy is part of our commitment to building TribeHub with
                transparency and respect for user privacy. As we develop the platform, we will continue to refine
                our practices and involve founding cohort partners in shaping our privacy and data governance approach.
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
