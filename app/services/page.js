import Link from 'next/link'
import { services, optimizationPillars, servicesFaqs, siteConfig } from '../../data/index'
import { getBreadcrumbSchema, getServicesSchema, getFaqSchema } from '../../lib/schema'

export const metadata = {
  title: 'Services — Next.js Web Engineering, AI Search (SEO/AEO/GEO) & Market Research',
  description:
    'Explore Techo Labs services: sub-second Next.js web engineering, SEO/AEO/GEO/SXO growth marketing, and strategic market research with clear ROI.',
  alternates: {
    canonical: '/services',
  },
  openGraph: {
    title: 'Techo Labs Services — Web Engineering, AI Search Growth & Market Research',
    description:
      'Custom Next.js web platforms, unified SEO/AEO/GEO/AIO/SXO digital marketing, and decision-grade market research delivered globally.',
    url: `${siteConfig.url}/services`,
  },
}

export default function ServicesPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Capabilities', url: '/services' },
  ])
  const servicesSchema = getServicesSchema()
  const faqSchema = getFaqSchema(servicesFaqs)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
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
            <span aria-current="page">Capabilities</span>
          </nav>

          <h1 className="inner-hero__title">
            Three Integrated Capabilities.<br />
            <span className="text-gradient">Engineered for Measurable ROI.</span>
          </h1>

          <p className="inner-hero__lead">
            Techo Labs provides three integrated digital services for ambitious global organisations: Next-Gen Web and Product Engineering (delivered in two to eight weeks), Omnichannel Growth and AI Search Optimization across SEO, AEO, GEO, AIO, and SXO (executed in 90-day sprints), and Strategic Market Intelligence (delivered in two to four weeks). Every engagement combines server-first Next.js speed, structured entity schemas, and transparent attribution to drive measurable pipeline and revenue.
          </p>

          <div className="filter-pills" style={{ marginTop: '1.75rem' }}>
            {services.map((s) => (
              <a key={s.id} href={`#${s.id}`} className="filter-pill">
                {s.number} · {s.shortTitle}
              </a>
            ))}
            <a href="#comparison-matrix" className="filter-pill">
              Scope &amp; Timeline Matrix
            </a>
            <a href="#search-architecture" className="filter-pill">
              SEO · AEO · GEO · AIO · SXO
            </a>
          </div>
        </div>
      </section>

      {/* SERVICE DEEP-DIVE SECTIONS */}
      {services.map((service, index) => (
        <section
          key={service.id}
          id={service.id}
          className={`section ${index % 2 === 1 ? 'section--subtle' : ''}`}
          aria-labelledby={`heading-${service.id}`}
        >
          <div className="container">
            <div className="two-col-detail">
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                  <span
                    className="mono"
                    style={{
                      fontSize: '0.76rem',
                      fontWeight: 800,
                      padding: '0.3rem 0.7rem',
                      borderRadius: '6px',
                      background: `${service.accent}14`,
                      color: service.accent,
                    }}
                  >
                    ENGINE {service.number}
                  </span>
                  <span className="mono" style={{ fontSize: '0.75rem', color: 'var(--muted)' }}>
                    Typical Delivery: {service.timeline}
                  </span>
                </div>

                <h2
                  id={`heading-${service.id}`}
                  className="section-heading reveal"
                  style={{ marginBottom: '0.6rem' }}
                >
                  {service.title}
                </h2>
                <div
                  style={{
                    fontWeight: 700,
                    color: service.accent,
                    fontSize: '0.95rem',
                    marginBottom: '1.35rem',
                  }}
                >
                  {service.subtitle}
                </div>

                {service.description.map((paragraph, pIdx) => (
                  <p
                    key={pIdx}
                    className="reveal"
                    style={{
                      fontSize: '0.96rem',
                      color: 'var(--slate)',
                      lineHeight: 1.8,
                      marginBottom: '1.1rem',
                    }}
                  >
                    {paragraph}
                  </p>
                ))}

                <div
                  style={{
                    marginTop: '1.5rem',
                    padding: '1rem 1.25rem',
                    borderRadius: 'var(--r-sm)',
                    background: 'var(--bg-subtle)',
                    border: '1px solid var(--border)',
                    fontSize: '0.82rem',
                    color: 'var(--ink-2)',
                  }}
                >
                  <strong style={{ color: 'var(--ink)', display: 'block', marginBottom: '0.25rem' }}>
                    Core Deliverables:
                  </strong>
                  {service.deliverables}
                </div>

                <div style={{ marginTop: '1.85rem', display: 'flex', gap: '0.85rem', flexWrap: 'wrap' }}>
                  <Link href="/contact" className="btn btn-primary">
                    Scope {service.shortTitle}
                    <svg className="icon-arrow" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.2">
                      <path d="M3 8h10M9 4l4 4-4 4" />
                    </svg>
                  </Link>
                  <Link href="/portfolio" className="btn btn-secondary">
                    See Related Work
                  </Link>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div
                  className="reveal"
                  style={{
                    background: '#FFFFFF',
                    border: '1px solid var(--border)',
                    borderRadius: 'var(--r-lg)',
                    padding: '2rem',
                    boxShadow: 'var(--shadow-sm)',
                  }}
                >
                  <h3
                    className="mono"
                    style={{
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      letterSpacing: '0.14em',
                      textTransform: 'uppercase',
                      color: service.accent,
                      marginBottom: '1.15rem',
                    }}
                  >
                    Capabilities Included
                  </h3>
                  <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
                    {service.features.map((feat) => (
                      <li
                        key={feat}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.65rem',
                          fontSize: '0.9rem',
                          fontWeight: 600,
                          color: 'var(--ink-2)',
                        }}
                      >
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke={service.accent}
                          strokeWidth="2.5"
                          style={{ flexShrink: 0 }}
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>

                <div
                  className="reveal"
                  style={{
                    background: `${service.accent}09`,
                    border: `1px solid ${service.accent}26`,
                    borderRadius: 'var(--r-lg)',
                    padding: '1.65rem 2rem',
                  }}
                >
                  <h3
                    className="mono"
                    style={{
                      fontSize: '0.7rem',
                      fontWeight: 700,
                      letterSpacing: '0.14em',
                      textTransform: 'uppercase',
                      color: service.accent,
                      marginBottom: '0.9rem',
                    }}
                  >
                    Best Suited For
                  </h3>
                  <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {service.ideal.map((fit) => (
                      <li
                        key={fit}
                        style={{
                          fontSize: '0.86rem',
                          color: 'var(--ink-2)',
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '0.55rem',
                        }}
                      >
                        <span style={{ color: service.accent, fontWeight: 700 }}>→</span>
                        {fit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* SERVICE SCOPE & TIMELINE MATRIX TABLE */}
      <section id="comparison-matrix" className="section section--subtle" aria-labelledby="scope-table-heading">
        <div className="container">
          <div style={{ maxWidth: '680px', marginBottom: '2.5rem' }}>
            <div className="eyebrow" style={{ marginBottom: '0.9rem' }}>
              Executive Comparison
            </div>
            <h2 id="scope-table-heading" className="section-heading reveal">
              Service Scope &amp; <em>Delivery Matrix</em>
            </h2>
          </div>

          <div className="comparison-wrap reveal">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th scope="col">Service Engine</th>
                  <th scope="col">Delivery Cadence</th>
                  <th scope="col">Core Architecture &amp; Channels</th>
                  <th scope="col" className="col-techo">
                    Primary Handover &amp; Outcome
                  </th>
                </tr>
              </thead>
              <tbody>
                {services.map((s) => (
                  <tr key={s.id}>
                    <td className="col-dim">{s.title}</td>
                    <td>{s.timeline}</td>
                    <td className="col-legacy">{s.subtitle}</td>
                    <td className="col-techo">{s.deliverables}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 5-PILLAR SEARCH & AI MATRIX */}
      <section id="search-architecture" className="section section--dark" aria-labelledby="matrix-heading">
        <div className="container">
          <div style={{ maxWidth: '720px' }}>
            <div className="eyebrow eyebrow--dark" style={{ marginBottom: '0.9rem' }}>
              <span className="eyebrow-dot" />
              Unified Optimization Stack
            </div>
            <h2 id="matrix-heading" className="section-heading section-heading--light reveal">
              Built-In SEO, AEO, GEO, AIO &amp; SXO<br />
              <em>Across Every Engagement.</em>
            </h2>
            <p style={{ marginTop: '1rem', color: 'rgba(255,255,255,0.72)', fontSize: '0.98rem', lineHeight: 1.75 }}>
              We don’t treat optimization as an expensive post-launch add-on. Every platform and growth sprint aligns technical speed, human UX, and machine-readable authority.
            </p>
          </div>

          <div className="pillars-grid">
            {optimizationPillars.map((pillar) => (
              <article key={pillar.code} className="pillar-card reveal">
                <div>
                  <span className="pillar-code">{pillar.code}</span>
                  <h3 className="pillar-name">{pillar.name}</h3>
                  <p className="pillar-summary">{pillar.summary}</p>
                </div>
                <div className="pillar-metric">→ {pillar.metric}</div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES FAQ */}
      <section className="section" aria-labelledby="services-faq-heading">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 3rem' }}>
            <div className="eyebrow" style={{ marginBottom: '0.9rem' }}>
              Service Clarity
            </div>
            <h2 id="services-faq-heading" className="section-heading reveal">
              Frequently Asked <em>Questions</em>
            </h2>
          </div>

          <div className="faq-stack">
            {servicesFaqs.map((item, idx) => (
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
                Need a Combined Engineering + Growth Roadmap?
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.78)', fontSize: '1rem', lineHeight: 1.7 }}>
                Most partners combine Next.js web engineering with ongoing SEO/GEO search growth. Let’s design the exact scope your targets require.
              </p>
            </div>
            <div className="cta-banner__actions">
              <Link href="/contact" className="btn btn-white">
                Request Custom Proposal
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
