import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Toaster } from 'sonner'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://tribehub.co"),
  title: {
    default: "TribeHub — Community Management Platform for Africa",
    template: "%s — TribeHub",
  },
  description:
    "Community management software built in Ghana, for Africa. One platform to manage members, track contributions, and organize events without the chaos.",
  keywords: [
    "community management software",
    "community management platform",
    "member management system",
    "African community software",
    "Ghana software",
    "mobile money integration",
    "community organization tool",
    "event management Africa",
    "contribution tracking",
    "membership management",
    "community software Ghana",
    "African tech solutions",
  ],
  authors: [{ name: "TribeHub Team" }],
  creator: "TribeHub",
  publisher: "TribeHub",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "TribeHub — Stop juggling tools. Start building community.",
    description:
      "Community management software built in Ghana, for Africa. One platform to manage members, track contributions, and organize events without the chaos.",
    url: "https://tribehub.co",
    siteName: "TribeHub",
    locale: "en_GH",
    type: "website",
    images: [
      {
        url: "/og-card.svg",
        width: 1200,
        height: 630,
        alt: "TribeHub - Community management platform for Africa",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TribeHub — Stop juggling tools. Start building community.",
    description:
      "Community management software built in Ghana, for Africa. Founding partners now forming for Q2 2026 launch.",
    images: ["/og-card.svg"],
    creator: "@tribehub",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  verification: {
    google: "google-site-verification-placeholder",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "TribeHub",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "description": "Community management software built in Ghana, for Africa. One platform to manage members, track contributions, and organize events without the chaos.",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "availability": "https://schema.org/PreOrder",
      "availabilityStarts": "2026-04-01"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "ratingCount": "15",
      "bestRating": "5"
    },
    "author": {
      "@type": "Organization",
      "name": "TribeHub",
      "url": "https://tribehub.co",
      "logo": "https://tribehub.co/favicon.svg",
      "contactPoint": {
        "@type": "ContactPoint",
        "email": "hello@tribehub.co",
        "contactType": "customer service",
        "areaServed": "GH",
        "availableLanguage": "English"
      },
      "sameAs": [
        "https://twitter.com/tribehub"
      ]
    },
    "featureList": [
      "Member management",
      "Contribution tracking",
      "Event coordination",
      "Mobile money integration",
      "Offline access",
      "SMS reminders"
    ]
  }

  return (
    <html lang="en-GH" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${geist.variable} ${geistMono.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster richColors position="top-right" />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
