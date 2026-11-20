import './globals.css'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import ScrollObserver from '../components/ScrollObserver'
import { siteConfig } from '../data/index'
import { getRootSchema } from '../lib/schema'

export const viewport = {
  themeColor: '#0A4FD4',
  width: 'device-width',
  initialScale: 1,
}

export const metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: 'Techo Labs — Next-Gen Web Engineering, AI Search (SEO/GEO/AEO) & Market Intelligence',
    template: '%s | Techo Labs',
  },
  description:
    'Techo Labs engineers sub-second Next.js websites, SEO/AEO/GEO search growth, and market intelligence across 8+ countries for ambitious global brands.',
  keywords: [
    'Techo Labs',
    'Techo Traders',
    'Techo Connect',
    'Techo Xpress',
    'Next.js web development agency',
    'SEO AEO GEO AIO SXO agency',
    'Generative Engine Optimization',
    'Answer Engine Optimization',
    'digital marketing Sri Lanka',
    'web development Batticaloa',
    'market research consultancy',
    'SaaS web engineering',
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.parentName,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: 'Techo Labs — Digital Engineering, AI Search Growth & Market Intelligence',
    description:
      '24+ live platforms across 8+ countries. Sub-second Next.js engineering, unified SEO/AEO/GEO/AIO/SXO growth, and market intelligence — a division of Techo Traders (Pvt) Ltd.',
    images: [
      {
        url: '/og-banner.svg',
        width: 1200,
        height: 630,
        alt: 'Techo Labs — Digital Engineering, AI Search Growth & Market Intelligence',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Techo Labs — Engineering Sub-Second Digital Platforms',
    description:
      'Next.js Web Engineering · SEO / AEO / GEO / AIO / SXO · Market Intelligence — A Division of Techo Traders (Pvt) Ltd.',
    images: ['/og-banner.svg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  category: 'technology',
}

export default function RootLayout({ children }) {
  const rootSchema = getRootSchema()

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@500;600;700&family=Manrope:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(rootSchema) }}
        />

        <Nav />
        <main id="main-content">{children}</main>
        <Footer />
        <ScrollObserver />
      </body>
    </html>
  )
}
