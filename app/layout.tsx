import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://tribehub.co"),
  title: {
    default: "TribeHub — Community Command Center",
    template: "%s — TribeHub",
  },
  description:
    "Co-design the operating system for member-led organisations. Join the TribeHub founding cohort to shape the roadmap, automations, and launch playbooks.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "TribeHub — Build the command center your community deserves",
    description:
      "We’re crafting TribeHub with community operators who need tooling that feels bespoke. Join the founding cohort and influence the roadmap from day one.",
    url: "https://tribehub.co",
    siteName: "TribeHub",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/placeholder.jpg",
        width: 1200,
        height: 630,
        alt: "TribeHub dashboard roadmap preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TribeHub — Build the command center your community deserves",
    description:
      "Work with the TribeHub team to co-design member HQ, contribution automations, and event ops built for your organisation.",
    images: ["/placeholder.jpg"],
  },
  icons: {
    icon: "/placeholder-logo.svg",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
