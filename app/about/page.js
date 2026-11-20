import Link from 'next/link'
import { siteConfig, stats, ecosystemLinks } from '../../data/index'
import { getBreadcrumbSchema } from '../../lib/schema'

export const metadata = {
  title: 'About Techo Labs — Digital Intelligence Division of Techo Traders (Pvt) Ltd',
  description:
    'Established in 2021 in Batticaloa, Sri Lanka, Techo Labs is the digital engineering, AI search growth, and market intelligence division of Techo Traders (Pvt) Ltd — serving clients across 8+ countries.',
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: 'About Techo Labs — Global Digital Engineering & Intelligence Studio',
    description:
      'Discover how Techo Labs bridges precision engineering craftsmanship with international product standards as part of Techo Traders (Pvt) Ltd.',
    url: `${siteConfig.url}/about`,
  },
}

const milestones = [
  {
    year: '2021',
    title: 'Established Under Techo Traders (Pvt) Ltd',
    desc: 'Launched in Batticaloa, Sri Lanka as the dedicated technology, digital marketing, and research division of Techo Traders (Pvt) Ltd.',
  },
  {
    year: '2022–2023',
    title: 'Global Delivery Across 8+ Markets',
    desc: 'Expanded client partnerships across Canada, the Netherlands, the United Kingdom, France, and the UAE.',
  },
  {
    year: '2024–2025',
    title: '24+ Live Production Platforms',
    desc: 'Shipped AI MedTech, IoT SaaS, luxury e-commerce, and custom parcel tracking software with 98% client retention.',
  },
  {
    year: '2026–2027',
    title: 'Sub-Second & AI-First Search Era',
    desc: 'Pioneering unified SEO, AEO, GEO, AIO & SXO architectures built on React Server Components and edge delivery.',
  },
]

export default function AboutPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Studio', url: '/about' },
  ])

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* INNER HERO */}
      <section className="inner-hero">
        <div className="hero-grid-bg" />
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <span aria-current="page">Studio</span>
          </nav>

          <h1 className="inner-hero__title">
            The Digital Intelligence Division of<br />
            <span className="text-gradient">Techo Traders (Pvt) Ltd.</span>
          </h1>

          <p className="inner-hero__lead">
            Headquartered in Batticaloa, Sri Lanka and trusted across North America, Europe, and the Middle East — Techo Labs engineers digital platforms, AI-era search visibility, and market intelligence as a precision craft.
          </p>

          <div className="direct-answer">
            <strong>Corporate Structure:</strong> <strong>Techo Labs</strong> (established {siteConfig.foundedYear}) operates as the digital division of parent company{' '}
            <a href={siteConfig.parentUrl} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--blue)', fontWeight: 700 }}>
              Techo Traders (Pvt) Ltd ↗
            </a>
            , alongside sister divisions{' '}
            <a href="https://www.connect.techotraders.com.lk/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--blue)', fontWeight: 700 }}>
              Techo Connect ↗
            </a>{' '}
            (telecom &amp; antenna hardware) and{' '}
            <a href="https://www.express.techotraders.com.lk/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--blue)', fontWeight: 700 }}>
              Techo Xpress ↗
            </a>{' '}
            (courier &amp; smart logistics).
          </div>
        </div>
      </section>

      {/* STORY & STUDIO TELEMETRY */}
      <section className="section" aria-labelledby="story-heading">
        <div className="container">
          <div className="two-col-detail">
            <div>
              <div className="eyebrow" style={{ marginBottom: '0.9rem' }}>
                Origin &amp; Craft
              </div>
              <h2 id="story-heading" className="section-heading reveal" style={{ marginBottom: '1.35rem' }}>
                Built on the Discipline of <em>Techne.</em>
              </h2>
              <p style={{ fontSize: '0.97rem', color: 'var(--slate)', lineHeight: 1.8, marginBottom: '1.1rem' }}>
                Derived from the Greek concept of <em>Techne</em> — purposeful craftsmanship — Techo Labs was created so ambitious companies never have to compromise between design authority, sub-second speed, and measurable revenue growth.
              </p>
              <p style={{ fontSize: '0.97rem', color: 'var(--slate)', lineHeight: 1.8, marginBottom: '1.1rem' }}>
                Within{' '}
                <a href={siteConfig.parentUrl} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--blue)', fontWeight: 700 }}>
                  Techo Traders (Pvt) Ltd
                </a>
                , our team engineers the live shipment tracking software powering{' '}
                <a href="https://www.express.techotraders.com.lk/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--blue)', fontWeight: 700 }}>
                  Techo Xpress
                </a>{' '}
                and leads digital positioning for hardware manufacturer{' '}
                <a href="https://www.connect.techotraders.com.lk/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--blue)', fontWeight: 700 }}>
                  Techo Connect
                </a>
                . Because we build mission-critical systems for our own group, we treat every client engagement with founder-level accountability.
              </p>
              <blockquote
                style={{
                  marginTop: '1.75rem',
                  padding: '1.25rem 1.5rem',
                  borderLeft: '3px solid var(--blue)',
                  background: 'var(--bg-subtle)',
                  borderRadius: '0 var(--r-sm) var(--r-sm) 0',
                  color: 'var(--ink-2)',
                  fontWeight: 600,
                  fontSize: '0.96rem',
                  lineHeight: 1.7,
                }}
              >
                “Design that loads slowly or fails to convert is mere decoration. We engineer digital assets that compound in value year after year.”
              </blockquote>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                {stats.map((s) => (
                  <div key={s.label} className="metric-tile">
                    <div className="metric-value">
                      {s.value}
                      <span className="accent">{s.suffix}</span>
                    </div>
                    <div className="metric-label">{s.label}</div>
                    <div className="metric-detail">{s.detail}</div>
                  </div>
                ))}
              </div>

              <div
                style={{
                  background: 'var(--obsidian)',
                  color: '#FFFFFF',
                  borderRadius: 'var(--r-lg)',
                  padding: '2rem',
                }}
              >
                <div
                  className="mono"
                  style={{
                    fontSize: '0.68rem',
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    color: '#93C5FD',
                    marginBottom: '1rem',
                  }}
                >
                  Engineering Base · {siteConfig.location.coordinates}
                </div>
                <dl style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', fontSize: '0.88rem' }}>
                  <div>
                    <dt style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.75rem' }}>Parent Entity</dt>
                    <dd style={{ fontWeight: 700, marginTop: '2px' }}>{siteConfig.parentName}</dd>
                  </div>
                  <div>
                    <dt style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.75rem' }}>Studio Base</dt>
                    <dd style={{ fontWeight: 700, marginTop: '2px' }}>Batticaloa, Sri Lanka</dd>
                  </div>
                  <div>
                    <dt style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.75rem' }}>Direct Line</dt>
                    <dd style={{ fontWeight: 700, marginTop: '2px' }}>{siteConfig.phone}</dd>
                  </div>
                  <div>
                    <dt style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.75rem' }}>Desk Email</dt>
                    <dd style={{ fontWeight: 700, marginTop: '2px' }}>{siteConfig.email}</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GROUP ECOSYSTEM */}
      <section className="section section--subtle" aria-labelledby="about-eco-heading">
        <div className="container">
          <div className="section-header-split">
            <div>
              <div className="eyebrow" style={{ marginBottom: '0.9rem' }}>
                Group Ecosystem
              </div>
              <h2 id="about-eco-heading" className="section-heading reveal">
                One Parent Company.<br />
                <em>Three Specialized Divisions.</em>
              </h2>
            </div>
          </div>

          <div className="ecosystem-grid">
            {ecosystemLinks.map((node) => {
              const inner = (
                <>
                  <div>
                    <div className="eco-node-head">
                      <div>
                        <span
                          className="eco-node-badge"
                          style={{
                            background: `${node.accent}14`,
                            color: node.accent,
                            border: `1px solid ${node.accent}30`,
                          }}
                        >
                          {node.badge}
                        </span>
                        <h3 className="eco-node-title">{node.name}</h3>
                        <div className="eco-node-role">{node.role}</div>
                      </div>
                    </div>
                    <p className="eco-node-desc" style={{ marginTop: '0.9rem' }}>
                      {node.description}
                    </p>
                  </div>
                  <div className="eco-node-foot">
                    <span>{node.domain}</span>
                    <span>{node.isCurrent ? 'Current Platform' : `Visit ${node.shortName} ↗`}</span>
                  </div>
                </>
              )

              return node.isCurrent ? (
                <div key={node.id} className="eco-node-card eco-node-card--active reveal">
                  {inner}
                </div>
              ) : (
                <a
                  key={node.id}
                  href={node.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="eco-node-card reveal"
                >
                  {inner}
                </a>
              )
            })}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="section" aria-labelledby="timeline-heading">
        <div className="container">
          <div style={{ marginBottom: '3rem' }}>
            <div className="eyebrow" style={{ marginBottom: '0.9rem' }}>
              Trajectory
            </div>
            <h2 id="timeline-heading" className="section-heading reveal">
              From Regional Studio to <em>Global Partner</em>
            </h2>
          </div>

          <div className="timeline-list">
            {milestones.map((m) => (
              <article key={m.year} className="timeline-card reveal">
                <span className="process-num">{m.year}</span>
                <h3 className="process-title">{m.title}</h3>
                <p className="process-desc">{m.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PRINCIPLES */}
      <section className="section section--dark" aria-labelledby="values-heading">
        <div className="container">
          <div style={{ marginBottom: '3rem' }}>
            <div className="eyebrow eyebrow--dark" style={{ marginBottom: '0.9rem' }}>
              Operating Principles
            </div>
            <h2 id="values-heading" className="section-heading section-heading--light reveal">
              Non-Negotiable <em>Standards</em>
            </h2>
          </div>

          <div className="process-steps-grid">
            {[
              {
                code: '01',
                title: 'Speed Is a Feature',
                desc: 'Every extra second of load time erodes trust and conversion. We engineer for sub-second Largest Contentful Paint as a baseline.',
              },
              {
                code: '02',
                title: 'Radical Clarity',
                desc: 'No jargon black boxes or surprise invoices. You get direct access to senior builders, live staging links, and clear attribution.',
              },
              {
                code: '03',
                title: 'Commercial Outcomes',
                desc: 'Every UI layout, schema graph, and ad campaign is reverse-engineered from qualified leads, bookings, and revenue.',
              },
              {
                code: '04',
                title: '3-Year Maintainability',
                desc: 'Clean modular Next.js & CMS architectures that your team can scale effortlessly without costly rewrites.',
              },
            ].map((val) => (
              <div
                key={val.code}
                className="pillar-card reveal"
                style={{ justifyContent: 'flex-start' }}
              >
                <span className="pillar-code">{val.code}</span>
                <h3 className="pillar-name">{val.title}</h3>
                <p className="pillar-summary" style={{ marginBottom: 0 }}>
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container">
          <div className="cta-banner">
            <div className="cta-banner__content">
              <h2 className="section-heading section-heading--light" style={{ marginBottom: '0.75rem' }}>
                Partner With the Team Behind 24+ Global Platforms.
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.78)', fontSize: '1rem', lineHeight: 1.7 }}>
                Let’s discuss your product, website, or growth goals — zero obligation, direct senior guidance.
              </p>
            </div>
            <div className="cta-banner__actions">
              <Link href="/contact" className="btn btn-white">
                Start a Conversation
                <svg className="icon-arrow" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <path d="M3 8h10M9 4l4 4-4 4" />
                </svg>
              </Link>
              <Link href="/portfolio" className="btn btn-glass">
                Explore Case Stage
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
