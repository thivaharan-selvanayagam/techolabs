import Link from 'next/link'
import ContactForm from '../../components/ContactForm'
import { siteConfig, sisterEcosystemLinks, faqs } from '../../data/index'
import { getBreadcrumbSchema, getFaqSchema } from '../../lib/schema'

export const metadata = {
  title: 'Contact — Start a Project or Book a Free Strategy Call',
  description:
    'Start your project with Techo Labs. Get a senior Next.js, SEO/GEO, or market research proposal with a 4-hour response SLA via email or WhatsApp.',
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Contact Techo Labs — 4-Hour Senior Response SLA',
    description:
      'Share your project brief or connect directly on WhatsApp (+94 76 665 6007) or labs@techotraders.com.lk.',
    url: `${siteConfig.url}/contact`,
  },
}

const onboardingSlaRows = [
  {
    stage: '01 · Brief Acknowledgment',
    sla: 'Under 4 Business Hours',
    deliverable: 'Senior engineer or strategist reviews your goals and confirms discovery slot.',
  },
  {
    stage: '02 · Discovery & Audit Call',
    sla: 'Within 24 Hours',
    deliverable: '30-minute technical, UX, and search opportunity diagnostic with zero sales fluff.',
  },
  {
    stage: '03 · Architecture & Proposal',
    sla: 'Within 48 Hours',
    deliverable: 'Written scope, milestone schedule, fixed investment options, and KPI targets.',
  },
  {
    stage: '04 · Sprint Kickoff',
    sla: 'Day 5 from Approval',
    deliverable: 'Dedicated workspace, staging environment, and weekly live build previews.',
  },
]

export default function ContactPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Contact', url: '/contact' },
  ])
  const faqSchema = getFaqSchema(faqs)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
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
            <span aria-current="page">Contact</span>
          </nav>

          <h1 className="inner-hero__title">
            Let’s Build Your Next<br />
            <span className="text-gradient">Digital Breakthrough.</span>
          </h1>

          <p className="inner-hero__lead">
            Connect directly with Techo Labs to scope a Next.js web platform, an SEO, AEO, and GEO search growth campaign, or a market intelligence study. Our senior engineering and strategy desk operates Monday through Saturday from Batticaloa, Sri Lanka for clients across North America, Europe, the Middle East, and Asia-Pacific, guaranteeing an initial response within four business hours and a written roadmap proposal within 48 hours.
          </p>
        </div>
      </section>

      {/* TWO-COLUMN CONTACT + BRIEF FORM */}
      <section className="section section--subtle" aria-label="Contact Channels and Project Form">
        <div className="container">
          <div className="contact-layout">
            {/* Left Column: Channels & Group Directory */}
            <div>
              <h2 className="section-heading" style={{ fontSize: '1.85rem', marginBottom: '0.65rem' }}>
                Direct Global Channels
              </h2>
              <p style={{ fontSize: '0.92rem', color: 'var(--muted)', lineHeight: 1.75, marginBottom: '1.5rem' }}>
                Headquartered in Batticaloa, Sri Lanka as the digital division of Techo Traders (Pvt) Ltd — collaborating seamlessly across global time zones.
              </p>

              <ul className="contact-card-stack">
                <li>
                  <a
                    href={siteConfig.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-channel-card"
                  >
                    <div className="contact-channel-icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                      </svg>
                    </div>
                    <div>
                      <div className="mono" style={{ fontSize: '0.68rem', fontWeight: 700, color: 'var(--blue)', textTransform: 'uppercase' }}>
                        Phone &amp; Instant WhatsApp ↗
                      </div>
                      <div style={{ fontWeight: 800, color: 'var(--ink)', fontSize: '1rem', marginTop: '2px' }}>
                        {siteConfig.phone}
                      </div>
                      <div style={{ fontSize: '0.8rem', color: 'var(--muted)' }}>
                        {siteConfig.location.hours}
                      </div>
                    </div>
                  </a>
                </li>

                <li>
                  <a href={`mailto:${siteConfig.email}`} className="contact-channel-card">
                    <div className="contact-channel-icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                        <polyline points="22,6 12,13 2,6" />
                      </svg>
                    </div>
                    <div>
                      <div className="mono" style={{ fontSize: '0.68rem', fontWeight: 700, color: 'var(--blue)', textTransform: 'uppercase' }}>
                        Project &amp; RFP Desk
                      </div>
                      <div style={{ fontWeight: 800, color: 'var(--ink)', fontSize: '1rem', marginTop: '2px' }}>
                        {siteConfig.email}
                      </div>
                      <div style={{ fontSize: '0.8rem', color: 'var(--muted)' }}>
                        Written proposal within 48 hours of discovery
                      </div>
                    </div>
                  </a>
                </li>

                <li className="contact-channel-card">
                  <div className="contact-channel-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div>
                    <div className="mono" style={{ fontSize: '0.68rem', fontWeight: 700, color: 'var(--blue)', textTransform: 'uppercase' }}>
                      Studio Base
                    </div>
                    <div style={{ fontWeight: 800, color: 'var(--ink)', fontSize: '1rem', marginTop: '2px' }}>
                      {siteConfig.location.city}, {siteConfig.location.country}
                    </div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--muted)' }}>
                      Serving clients across 8+ countries worldwide
                    </div>
                  </div>
                </li>
              </ul>

              {/* Techo Group Directory */}
              <div
                style={{
                  marginTop: '1.75rem',
                  padding: '1.5rem',
                  borderRadius: 'var(--r-md)',
                  background: '#FFFFFF',
                  border: '1px solid var(--blue-border)',
                }}
              >
                <h3
                  className="mono"
                  style={{
                    fontSize: '0.68rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.12em',
                    color: 'var(--blue)',
                    marginBottom: '0.85rem',
                  }}
                >
                  Techo Traders (Pvt) Ltd &amp; Sister Divisions
                </h3>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {sisterEcosystemLinks.map((eco) => (
                    <li key={eco.id}>
                      <a
                        href={eco.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          padding: '0.65rem 0.85rem',
                          borderRadius: 'var(--r-sm)',
                          background: 'var(--bg-subtle)',
                          border: '1px solid var(--border)',
                        }}
                      >
                        <div>
                          <div style={{ fontWeight: 700, fontSize: '0.88rem', color: 'var(--ink)' }}>
                            {eco.name}
                          </div>
                          <div style={{ fontSize: '0.75rem', color: 'var(--muted)' }}>{eco.badge}</div>
                        </div>
                        <span className="mono" style={{ fontSize: '0.72rem', color: 'var(--blue)', fontWeight: 700 }}>
                          {eco.domain} ↗
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Column: Interactive Form */}
            <ContactForm />
          </div>
        </div>
      </section>

      {/* RESPONSE SLA & ONBOARDING SCHEDULE TABLE */}
      <section className="section" aria-labelledby="sla-heading">
        <div className="container">
          <div style={{ maxWidth: '680px', marginBottom: '2.5rem' }}>
            <div className="eyebrow" style={{ marginBottom: '0.85rem' }}>
              What Happens Next
            </div>
            <h2 id="sla-heading" className="section-heading reveal">
              Response SLA &amp; <em>Onboarding Schedule</em>
            </h2>
          </div>

          <div className="comparison-wrap reveal">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th scope="col">Onboarding Stage</th>
                  <th scope="col">Guaranteed Turnaround</th>
                  <th scope="col" className="col-techo">
                    Client Deliverable
                  </th>
                </tr>
              </thead>
              <tbody>
                {onboardingSlaRows.map((row) => (
                  <tr key={row.stage}>
                    <td className="col-dim">{row.stage}</td>
                    <td>{row.sla}</td>
                    <td className="col-techo">{row.deliverable}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div
            className="reveal"
            style={{
              marginTop: '2rem',
              background: 'var(--bg-subtle)',
              border: '1px solid var(--border)',
              borderRadius: 'var(--r-lg)',
              padding: '2rem',
            }}
          >
            <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--ink)', marginBottom: '1rem' }}>
              What to Share for the Fastest Proposal
            </h3>
            <ul className="bento-feature-list" style={{ borderTop: 'none', paddingTop: 0, marginBottom: 0 }}>
              <li className="bento-feature-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>
                  <strong>Primary Commercial Goal:</strong> Whether launching a new platform, redesigning an outdated site, or scaling SEO, AEO, and GEO visibility.
                </span>
              </li>
              <li className="bento-feature-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>
                  <strong>Target Regions &amp; Audience:</strong> Key countries, languages, and buyer personas your digital platform needs to serve and convert.
                </span>
              </li>
              <li className="bento-feature-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>
                  <strong>Ideal Launch Window:</strong> Upcoming product releases, campaigns, or quarterly milestones we should schedule sprints around.
                </span>
              </li>
              <li className="bento-feature-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>
                  <strong>Current Stack or URL:</strong> Any existing website address, CMS, e-commerce store, or CRM integrations to preserve or upgrade.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section section--subtle" aria-labelledby="contact-faq-heading">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 3rem' }}>
            <div className="eyebrow" style={{ marginBottom: '0.9rem' }}>
              Before You Reach Out
            </div>
            <h2 id="contact-faq-heading" className="section-heading">
              Frequently Asked <em>Questions</em>
            </h2>
          </div>

          <div className="faq-stack">
            {faqs.map((item, idx) => (
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
    </>
  )
}
