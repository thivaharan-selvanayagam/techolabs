import Link from 'next/link'
import PortfolioShowcase from '../../components/PortfolioShowcase'
import { portfolioItems, sisterEcosystemLinks, siteConfig } from '../../data/index'
import { getBreadcrumbSchema, getPortfolioSchema } from '../../lib/schema'

export const metadata = {
  title: 'Work & Case Index — 24+ Global Web, SaaS & Commerce Platforms',
  description:
    'Explore 24+ live production platforms engineered by Techo Labs across Canada, the Netherlands, the UK, France, the UAE, and Sri Lanka — switch between our Asymmetric Bento Stage and Interactive Studio Ledger.',
  alternates: {
    canonical: '/portfolio',
  },
  openGraph: {
    title: 'Techo Labs Case Showcase — 24+ Verified Global Deployments',
    description:
      'Live websites, AI MedTech, SaaS products, and digital ecosystems built across 8+ countries by Techo Labs.',
    url: `${siteConfig.url}/portfolio`,
  },
}

export default function PortfolioPage() {
  const countriesCount = new Set(portfolioItems.map((p) => p.location)).size
  const industriesCount = new Set(portfolioItems.map((p) => p.category)).size

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Work', url: '/portfolio' },
  ])
  const portfolioSchema = getPortfolioSchema()

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(portfolioSchema) }}
      />

      {/* INNER HERO */}
      <section className="inner-hero">
        <div className="hero-grid-bg" />
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <span aria-current="page">Work</span>
          </nav>

          <h1 className="inner-hero__title">
            {portfolioItems.length} Live Platforms.<br />
            <span className="text-gradient">Engineered Across 8+ Countries.</span>
          </h1>

          <p className="inner-hero__lead">
            Every project in our showcase is a live production deployment — from Canadian AI diagnostics and IoT SaaS platforms to Dutch fine jewellery houses and the Techo Traders (Pvt) Ltd group platforms.
          </p>

          <div className="direct-answer">
            <strong>Interactive Case Stage:</strong> Explore <strong>{portfolioItems.length} verified builds</strong> spanning{' '}
            <strong>{countriesCount}+ countries</strong> and <strong>{industriesCount} sectors</strong>. Switch between the{' '}
            <strong>Bento Stage</strong> and the high-density <strong>Index Ledger</strong> below, or filter by region and sector.
          </div>
        </div>
      </section>

      {/* DUAL-MODE PORTFOLIO STAGE (BENTO + INDEX LEDGER) */}
      <section className="section section--subtle" aria-label="Portfolio Showcase">
        <div className="container">
          <PortfolioShowcase />
        </div>
      </section>

      {/* TECHO GROUP PLATFORMS */}
      <section className="section" aria-labelledby="eco-platforms-heading">
        <div className="container">
          <div className="section-header-split" style={{ marginBottom: '2.25rem' }}>
            <div>
              <div className="eyebrow" style={{ marginBottom: '0.75rem' }}>
                Group Platforms
              </div>
              <h2 id="eco-platforms-heading" className="section-heading reveal">
                The <em>Techo Traders (Pvt) Ltd</em> Ecosystem
              </h2>
            </div>
            <p className="section-lead" style={{ maxWidth: '460px' }}>
              Alongside international client platforms, Techo Labs engineers and operates the web presence and software for our parent company and sister divisions.
            </p>
          </div>

          <div className="services-bento">
            {sisterEcosystemLinks.map((eco) => (
              <a
                key={eco.id}
                href={eco.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bento-service-card reveal"
              >
                <div>
                  <div className="bento-service-top">
                    <span
                      className="eco-node-badge"
                      style={{
                        background: `${eco.accent}14`,
                        color: eco.accent,
                        border: `1px solid ${eco.accent}30`,
                      }}
                    >
                      {eco.badge}
                    </span>
                    <span style={{ color: 'var(--blue)', fontWeight: 700, fontSize: '0.85rem' }}>↗</span>
                  </div>
                  <h3 className="bento-service-title">{eco.name}</h3>
                  <p className="bento-service-desc">{eco.description}</p>
                </div>
                <div className="eco-node-foot">
                  <span>{eco.domain}</span>
                  <span>Visit {eco.shortName} ↗</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="cta-banner">
            <div className="cta-banner__content">
              <h2 className="section-heading section-heading--light" style={{ marginBottom: '0.75rem' }}>
                Want Your Next Platform on This Stage?
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.78)', fontSize: '1rem', lineHeight: 1.7 }}>
                Share your brief and receive clear architecture, timeline, and growth recommendations within 4 business hours.
              </p>
            </div>
            <div className="cta-banner__actions">
              <Link href="/contact" className="btn btn-white">
                Start Your Project
                <svg className="icon-arrow" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <path d="M3 8h10M9 4l4 4-4 4" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
