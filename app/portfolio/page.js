import Link from 'next/link'
import PortfolioShowcase from '../../components/PortfolioShowcase'
import { portfolioItems, sisterEcosystemLinks, portfolioFaqs, siteConfig } from '../../data/index'
import { getBreadcrumbSchema, getPortfolioSchema, getFaqSchema } from '../../lib/schema'

export const metadata = {
  title: 'Work & Case Index — 24+ Global Web, SaaS & Commerce Platforms',
  description:
    'Browse 24+ live websites, AI MedTech, SaaS, and e-commerce platforms engineered by Techo Labs across Canada, Europe, the UK, the UAE, and Sri Lanka.',
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

const regionalSummary = [
  {
    region: 'North America (Canada)',
    count: '12 Platforms',
    sectors: 'MedTech AI, IoT SaaS, Real Estate, Immigration Law, Corporate, EdTech & Entertainment',
    highlights: 'Ophtascan, WeTrAQ, Palmyra Homes, Koenig Developments, Libertas Immigration',
  },
  {
    region: 'Europe & UK (NL · UK · FR)',
    count: '6 Platforms',
    sectors: 'Fine Jewellery E-Commerce, Managed Enterprise IT, Tax & Finance, HR Wellness, Gastronomy & Non-Profit',
    highlights: 'Tirisi, Vooruit, FF Administraties, Energy at the Office, Le Roi Indien, Highgate Hill Murugan',
  },
  {
    region: 'South Asia & Middle East (LK · UAE)',
    count: '6 Platforms',
    sectors: 'Corporate Conglomerate, Telecom Hardware, Express Logistics, Digital Agency, Eco-Tourism & Heritage',
    highlights: 'Techo Traders, Techo Connect, Techo Xpress, Shamal Digitals, Mattakalappu, Oorkuruvi',
  },
]

export default function PortfolioPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Work', url: '/portfolio' },
  ])
  const portfolioSchema = getPortfolioSchema()
  const faqSchema = getFaqSchema(portfolioFaqs)

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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
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
            Techo Labs has engineered and launched 24 live production websites, SaaS products, and digital commerce platforms for clients across Canada, the Netherlands, the United Kingdom, France, the United Arab Emirates, and Sri Lanka. Spanning clinical AI diagnostics, fine luxury jewellery, enterprise IT, property development, and the Techo Traders (Pvt) Ltd ecosystem, every build pairs bespoke 2027 interface craft with sub-second Core Web Vitals performance and search authority.
          </p>
        </div>
      </section>

      {/* DUAL-MODE PORTFOLIO STAGE (BENTO + INDEX LEDGER) */}
      <section className="section section--subtle" aria-labelledby="case-directory-heading">
        <div className="container">
          <div style={{ marginBottom: '2rem' }}>
            <div className="eyebrow" style={{ marginBottom: '0.75rem' }}>
              Interactive Directory
            </div>
            <h2 id="case-directory-heading" className="section-heading">
              Verified Global <em>Deployments</em>
            </h2>
          </div>

          <PortfolioShowcase />
        </div>
      </section>

      {/* GLOBAL DEPLOYMENT BREAKDOWN TABLE */}
      <section className="section" aria-labelledby="regional-breakdown-heading">
        <div className="container">
          <div style={{ maxWidth: '680px', marginBottom: '2.5rem' }}>
            <div className="eyebrow" style={{ marginBottom: '0.85rem' }}>
              Global Footprint
            </div>
            <h2 id="regional-breakdown-heading" className="section-heading reveal">
              Deployments by <em>Region &amp; Sector</em>
            </h2>
          </div>

          <div className="comparison-wrap reveal">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th scope="col">Geographic Market</th>
                  <th scope="col">Volume</th>
                  <th scope="col">Industries Served</th>
                  <th scope="col" className="col-techo">
                    Selected Live Platforms
                  </th>
                </tr>
              </thead>
              <tbody>
                {regionalSummary.map((row) => (
                  <tr key={row.region}>
                    <td className="col-dim">{row.region}</td>
                    <td>{row.count}</td>
                    <td className="col-legacy">{row.sectors}</td>
                    <td className="col-techo">{row.highlights}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div
            className="reveal"
            style={{
              marginTop: '2rem',
              background: '#FFFFFF',
              border: '1px solid var(--border)',
              borderRadius: 'var(--r-lg)',
              padding: '2rem',
              boxShadow: 'var(--shadow-xs)',
            }}
          >
            <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--ink)', marginBottom: '1rem' }}>
              Production Engineering Standards Across Every Build
            </h3>
            <ul className="bento-feature-list" style={{ borderTop: 'none', paddingTop: 0, marginBottom: 0 }}>
              <li className="bento-feature-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>
                  <strong>Sub-Second Core Web Vitals:</strong> Engineered for under 0.8s Largest Contentful Paint, zero layout shift, and global edge delivery.
                </span>
              </li>
              <li className="bento-feature-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>
                  <strong>Unified SEO, AEO &amp; GEO Architecture:</strong> Semantic HTML5, JSON-LD entity graphs, and answer-first copy built for Google and AI engines.
                </span>
              </li>
              <li className="bento-feature-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>
                  <strong>Responsive &amp; Accessible UX:</strong> Precision interfaces verified across mobile, tablet, and desktop viewports to WCAG 2.2 AA standards.
                </span>
              </li>
              <li className="bento-feature-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>
                  <strong>Conversion-Focused Architecture:</strong> Research-backed user journeys, lead capture workflows, and full GA4 pipeline attribution.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* TECHO GROUP PLATFORMS (SEMANTIC LIST) */}
      <section className="section section--subtle" aria-labelledby="eco-platforms-heading">
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

          <ul className="services-bento">
            {sisterEcosystemLinks.map((eco) => (
              <li key={eco.id} style={{ display: 'flex' }}>
                <a
                  href={eco.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bento-service-card reveal"
                  style={{ width: '100%' }}
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
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* PORTFOLIO FAQ */}
      <section className="section" aria-labelledby="portfolio-faq-heading">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 3rem' }}>
            <div className="eyebrow" style={{ marginBottom: '0.9rem' }}>
              Case &amp; Delivery Answers
            </div>
            <h2 id="portfolio-faq-heading" className="section-heading reveal">
              Frequently Asked <em>Questions</em>
            </h2>
          </div>

          <div className="faq-stack">
            {portfolioFaqs.map((item, idx) => (
              <details key={item.question} className="faq-item" open={idx === 0}>
                <summary className="faq-summary">
                  <span>{item.question}</span>
                  <span className="faq-chevron" aria-hidden="true">
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.2">
                      <path d="M4 6l4 4 4-4" />
                    </svg>
                  </span>
                </summary>
                <div className="faq-answer">{item.answer}</div>
              </details>
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
