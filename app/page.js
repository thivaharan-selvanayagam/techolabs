import Link from 'next/link'
import { MotifArtwork } from '../components/PortfolioShowcase'
import {
  siteConfig,
  stats,
  shiftCards,
  services,
  optimizationPillars,
  ecosystemLinks,
  sisterEcosystemLinks,
  engagementModels,
  comparisonRows,
  portfolioItems,
  faqs,
} from '../data/index'
import { getServicesSchema, getFaqSchema } from '../lib/schema'

const MARQUEE_ITEMS = [
  'Sub-Second Next.js Architecture',
  'Search Engine Optimization (SEO)',
  'Answer Engine Optimization (AEO)',
  'Generative Engine Optimization (GEO)',
  'AI Agent Readiness (AIO)',
  'Search Experience Optimization (SXO)',
  'Market & Competitor Intelligence',
  '24+ Global Platforms Shipped',
  'A Division of Techo Traders (Pvt) Ltd',
]

export const metadata = {
  description:
    'Techo Labs engineers sub-second Next.js websites, SEO/AEO/GEO search growth, and market intelligence across 8+ countries for ambitious global brands.',
  alternates: {
    canonical: '/',
  },
}

export default function HomePage() {
  const servicesSchema = getServicesSchema()
  const faqSchema = getFaqSchema(faqs)

  const [webEngine, growthEngine, researchEngine] = services
  const spotlightCases = portfolioItems.slice(0, 3)
  const ledgerCases = portfolioItems.slice(3, 8)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ── ACT I: 2027 ARCHITECTURAL SPLIT HERO ── */}
      <section className="hero-2027" aria-labelledby="hero-heading">
        <div className="hero-grid-bg" />
        <div className="container">
          <div className="hero-layout">
            <div>
              <div className="eyebrow">
                <span className="eyebrow-dot" />
                Techo Labs · A Division of Techo Traders (Pvt) Ltd
              </div>

              <h1 id="hero-heading" className="hero-h1">
                Where <span className="text-gradient">Sub-Second</span> Engineering Meets Search &amp; AI Authority.
              </h1>

              <p className="hero-lead">
                Techo Labs is the digital engineering, AI search optimization, and market intelligence division of Techo Traders (Pvt) Ltd, headquartered in Batticaloa, Sri Lanka and serving clients across eight countries. Since 2021, our senior team has shipped more than 24 production Next.js websites, SaaS applications, and e-commerce platforms engineered for sub-second load speeds, 98% client retention, and compounding visibility across Google, Bing, ChatGPT, Perplexity, and AI Overviews.
              </p>

              <div className="hero-cta-row">
                <Link href="/contact" className="btn btn-primary">
                  Scope Your 2027 Platform
                  <svg className="icon-arrow" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.2">
                    <path d="M3 8h10M9 4l4 4-4 4" />
                  </svg>
                </Link>
                <Link href="/portfolio" className="btn btn-secondary">
                  Inspect 24+ Live Platforms
                </Link>
              </div>

              <div className="hero-trust-row">
                <span className="hero-trust-item">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  98–100 Core Web Vitals Baseline
                </span>
                <span className="hero-trust-item">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  Google, ChatGPT &amp; Perplexity Indexed
                </span>
                <span className="hero-trust-item">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  4-Hour Senior Response SLA
                </span>
              </div>
            </div>

            {/* Right Column: Live Architecture & Group Console */}
            <aside className="telemetry-card" aria-label="Techo Labs System Telemetry">
              <div className="telemetry-top">
                <div className="telemetry-dots">
                  <span style={{ background: '#EF4444' }} />
                  <span style={{ background: '#F59E0B' }} />
                  <span style={{ background: '#10B981' }} />
                </div>
                <span className="telemetry-badge">● TECHO LABS CORE v2027</span>
              </div>

              <div className="telemetry-scores">
                <div className="telemetry-score-box">
                  <div className="telemetry-score-val">
                    99<span>/100</span>
                  </div>
                  <div className="telemetry-score-lbl">Lighthouse</div>
                </div>
                <div className="telemetry-score-box">
                  <div className="telemetry-score-val">
                    &lt;0.8<span>s</span>
                  </div>
                  <div className="telemetry-score-lbl">Target LCP</div>
                </div>
                <div className="telemetry-score-box">
                  <div className="telemetry-score-val">
                    5<span>-Layer</span>
                  </div>
                  <div className="telemetry-score-lbl">Search &amp; AI</div>
                </div>
              </div>

              <div className="telemetry-pillars" aria-label="Optimization Layers">
                {optimizationPillars.map((p) => (
                  <span key={p.code} className="telemetry-pill">
                    ✓ {p.code}
                  </span>
                ))}
              </div>

              <div className="telemetry-eco">
                <div className="telemetry-eco-lbl">Techo Traders (Pvt) Ltd Group</div>
                <div className="telemetry-eco-links">
                  {sisterEcosystemLinks.map((eco) => (
                    <a
                      key={eco.id}
                      href={eco.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="telemetry-eco-link"
                    >
                      <span className="telemetry-eco-name">
                        {eco.shortName.replace('Techo ', '')}
                        <span style={{ color: '#60A5FA', fontSize: '0.72rem' }}>↗</span>
                      </span>
                      <span className="telemetry-eco-sub">{eco.badge}</span>
                    </a>
                  ))}
                </div>
              </div>
            </aside>
          </div>

          {/* 4 Proof Metrics */}
          <div className="metrics-strip">
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
        </div>
      </section>

      {/* ── ACT II: KINETIC CAPABILITY TICKER ── */}
      <div className="marquee-band" aria-hidden="true">
        <div className="marquee-track">
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((text, idx) => (
            <span key={idx} className="marquee-item">
              <span className="marquee-sep" />
              {text}
            </span>
          ))}
        </div>
      </div>

      {/* ── ACT III: THE 2027 DIGITAL REALITY (WHY BRANDS UPGRADE) ── */}
      <section className="section section--subtle" aria-labelledby="shift-heading">
        <div className="container">
          <div className="section-header-split">
            <div>
              <div className="eyebrow" style={{ marginBottom: '0.9rem' }}>
                The 2027 Shift
              </div>
              <h2 id="shift-heading" className="section-heading reveal">
                Why Pre-2026 Websites<br />
                <em>Quietly Leak Revenue.</em>
              </h2>
            </div>
            <p className="section-lead reveal" style={{ maxWidth: '500px' }}>
              Buyer behaviour has shifted faster in the last 24 months than in the previous decade. Winning online now demands speed, machine-readable authority, and commercial research working as one system.
            </p>
          </div>

          <div className="shift-grid">
            {shiftCards.map((card) => (
              <article key={card.tag} className="shift-card reveal">
                <div>
                  <div className="shift-tag">{card.tag}</div>
                  <h3 className="shift-title">{card.title}</h3>
                  <p className="shift-body">{card.body}</p>
                </div>
                <div className="shift-stat-row">
                  <span className="shift-stat">{card.stat}</span>
                  <span className="shift-stat-lbl">{card.statLabel}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── ACT IV: THE ASYMMETRIC 3-ENGINE BLUEPRINT ── */}
      <section className="section" aria-labelledby="engines-heading">
        <div className="container">
          <div className="section-header-split">
            <div>
              <div className="eyebrow" style={{ marginBottom: '0.9rem' }}>
                Studio Architecture
              </div>
              <h2 id="engines-heading" className="section-heading reveal">
                Three Compounding Engines.<br />
                <em>Zero Silos.</em>
              </h2>
            </div>
            <Link href="/services" className="btn btn-secondary">
              Full Capability Breakdown
              <svg className="icon-arrow" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.2">
                <path d="M3 8h10M9 4l4 4-4 4" />
              </svg>
            </Link>
          </div>

          <div className="engines-blueprint">
            {/* Left Primary Flagship Card: Web & Product Engineering */}
            <article className="engine-primary-card reveal">
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
                  <span className="eyebrow eyebrow--dark">
                    ENGINE {webEngine.number} · {webEngine.timeline}
                  </span>
                  <span className="mono" style={{ fontSize: '0.74rem', color: '#93C5FD' }}>
                    Next.js · React · Edge
                  </span>
                </div>

                <h3 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.35rem)', fontWeight: 800, color: '#FFFFFF', marginBottom: '0.85rem' }}>
                  {webEngine.title}
                </h3>

                <p style={{ color: 'rgba(255,255,255,0.78)', fontSize: '0.98rem', lineHeight: 1.75, marginBottom: '1.75rem' }}>
                  {webEngine.summary}
                </p>

                <div className="engine-chip-grid">
                  {webEngine.features.slice(0, 6).map((f) => (
                    <span key={f} className="engine-chip">
                      {f}
                    </span>
                  ))}
                </div>
              </div>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: '1rem',
                  paddingTop: '1.5rem',
                  borderTop: '1px solid rgba(255,255,255,0.14)',
                }}
              >
                <span className="mono" style={{ fontSize: '0.74rem', color: '#6EE7B7' }}>
                  ● Ships with 98+ CWV &amp; Full JSON-LD Entity Graph
                </span>
                <Link href="/services#web" className="btn btn-white" style={{ padding: '0.65rem 1.25rem', fontSize: '0.84rem' }}>
                  Explore Web Engineering →
                </Link>
              </div>
            </article>

            {/* Right Stacked Cards: AI Search Growth + Market Intelligence */}
            <div className="engine-stack-col">
              {[growthEngine, researchEngine].map((eng) => (
                <article key={eng.id} className="engine-secondary-card reveal">
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                      <span
                        className="mono"
                        style={{
                          fontSize: '0.7rem',
                          fontWeight: 700,
                          color: eng.accent,
                          background: `${eng.accent}12`,
                          padding: '0.24rem 0.65rem',
                          borderRadius: '6px',
                        }}
                      >
                        ENGINE {eng.number} · {eng.timeline}
                      </span>
                    </div>
                    <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--ink)', marginBottom: '0.5rem' }}>
                      {eng.title}
                    </h3>
                    <p style={{ fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.68 }}>
                      {eng.summary}
                    </p>
                  </div>

                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      paddingTop: '0.95rem',
                      borderTop: '1px solid var(--border)',
                    }}
                  >
                    <span className="mono" style={{ fontSize: '0.72rem', color: 'var(--slate)' }}>
                      {eng.subtitle}
                    </span>
                    <Link href={`/services#${eng.id}`} className="bento-card-link">
                      Details →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── ACT V: CURATED CASE SPOTLIGHTS + STUDIO LEDGER ── */}
      <section className="section section--subtle" aria-labelledby="work-heading">
        <div className="container">
          <div className="section-header-split">
            <div>
              <div className="eyebrow" style={{ marginBottom: '0.9rem' }}>
                Verified Production Proof
              </div>
              <h2 id="work-heading" className="section-heading reveal">
                Built in Batticaloa.<br />
                <em>Deployed Across 8+ Countries.</em>
              </h2>
            </div>
            <Link href="/portfolio" className="btn btn-primary">
              Open Interactive Case Stage (24)
              <svg className="icon-arrow" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.2">
                <path d="M3 8h10M9 4l4 4-4 4" />
              </svg>
            </Link>
          </div>

          {/* 3 Dramatic Dark/Editorial Case Spotlights */}
          <div className="showcase-bento" style={{ marginBottom: '2rem' }}>
            {spotlightCases.map((item, idx) => {
              const accents = ['#06B6D4', '#C084FC', '#3B82F6']
              const bgs = ['#061826', '#160B24', '#08142C']
              const accent = accents[idx] || '#0A4FD4'
              const cleanUrl = item.url.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '')

              return (
                <article
                  key={item.id}
                  className="showcase-card showcase-card--dark reveal"
                  style={{ '--card-accent': accent, '--card-dark-bg': bgs[idx] }}
                >
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="showcase-card__inner"
                  >
                    <div className="showcase-card__meta">
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <span className="showcase-idx mono">/{item.index}</span>
                        <span className="showcase-sector" style={{ color: accent }}>
                          {item.category}
                        </span>
                      </div>
                      <span className="showcase-country mono">
                        {item.countryCode} · {item.location}
                      </span>
                    </div>

                    <div className="showcase-stage">
                      <MotifArtwork motif={item.motif} accent={accent} isDark={true} />
                      <div className="showcase-metric-pill mono">{item.metric}</div>
                    </div>

                    <div className="showcase-content">
                      <div>
                        <h3 className="showcase-title">{item.title}</h3>
                        <p className="showcase-desc">{item.description}</p>
                      </div>
                      <div className="showcase-foot">
                        <span className="mono showcase-domain">{cleanUrl}</span>
                        <span className="showcase-cta">
                          Launch Live ↗
                        </span>
                      </div>
                    </div>
                  </a>
                </article>
              )
            })}
          </div>

          {/* Sleek Studio Index Ledger Preview */}
          <div className="studio-ledger reveal">
            <div className="studio-ledger__head mono">
              <span>IDX</span>
              <span>MORE LIVE DEPLOYMENTS</span>
              <span>SECTOR</span>
              <span>MARKET</span>
              <span style={{ textAlign: 'right' }}>LIVE ENDPOINT</span>
            </div>
            {ledgerCases.map((item) => {
              const cleanUrl = item.url.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '')
              return (
                <a
                  key={item.id}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="studio-ledger__row"
                >
                  <span className="studio-ledger__idx mono">{item.index}</span>
                  <div className="studio-ledger__main">
                    <div className="studio-ledger__title">
                      {item.title}
                      {item.ecosystem && <span className="ledger-eco-pill">Techo Group</span>}
                    </div>
                    <div className="studio-ledger__desc">{item.description}</div>
                  </div>
                  <span className="studio-ledger__cat" style={{ color: 'var(--blue)' }}>
                    {item.category}
                  </span>
                  <span className="studio-ledger__loc mono">
                    {item.countryCode} · {item.location}
                  </span>
                  <span className="studio-ledger__link mono">
                    {cleanUrl} ↗
                  </span>
                </a>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── ACT VI: 5-LAYER DISCOVERY STACK + BENCHMARK MATRIX ── */}
      <section className="section section--dark" aria-labelledby="discovery-heading">
        <div className="container">
          <div className="section-header-split" style={{ marginBottom: '1rem' }}>
            <div>
              <div className="eyebrow eyebrow--dark" style={{ marginBottom: '0.9rem' }}>
                <span className="eyebrow-dot" />
                5-Layer Discovery Protocol
              </div>
              <h2 id="discovery-heading" className="section-heading section-heading--light reveal">
                Optimised for Search Engines,<br />
                <em>AI Answer Engines &amp; Humans.</em>
              </h2>
            </div>
            <p style={{ maxWidth: '500px', fontSize: '0.96rem', color: 'rgba(255,255,255,0.72)', lineHeight: 1.75 }}>
              Every Techo Labs build unifies SEO, AEO, GEO, AIO, and SXO at the architectural level — capturing organic search traffic, generative AI citations, and high-trust buyer conversions simultaneously.
            </p>
          </div>

          <div className="pillars-grid" style={{ marginBottom: '4rem' }}>
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

          <div className="comparison-wrap reveal">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th scope="col">Architectural Dimension</th>
                  <th scope="col">Conventional Web Agency</th>
                  <th scope="col" className="col-techo">
                    Techo Labs 2027 Standard
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.dimension}>
                    <td className="col-dim">{row.dimension}</td>
                    <td className="col-legacy">{row.legacy}</td>
                    <td className="col-techo">✓ {row.techo}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── ACT VII: TECHO TRADERS (PVT) LTD ECOSYSTEM ── */}
      <section className="section" aria-labelledby="ecosystem-heading">
        <div className="container">
          <div className="section-header-split">
            <div>
              <div className="eyebrow" style={{ marginBottom: '0.9rem' }}>
                Corporate Group
              </div>
              <h2 id="ecosystem-heading" className="section-heading reveal">
                Powered by the<br />
                <em>Techo Traders (Pvt) Ltd</em> Group
              </h2>
            </div>
            <p className="section-lead reveal" style={{ maxWidth: '510px' }}>
              <strong>Techo Traders (Pvt) Ltd</strong> is our incorporated parent company. Techo Labs operates as its digital intelligence division alongside sister divisions <strong>Techo Connect</strong> and <strong>Techo Xpress</strong>.
            </p>
          </div>

          <div className="ecosystem-grid">
            {ecosystemLinks.map((node) => {
              const cardInner = (
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
                      {!node.isCurrent ? (
                        <span
                          style={{
                            width: 38,
                            height: 38,
                            borderRadius: '50%',
                            background: 'var(--bg-subtle)',
                            border: '1px solid var(--border)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'var(--blue)',
                            flexShrink: 0,
                          }}
                        >
                          <svg width="15" height="15" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.2">
                            <path d="M4 12L12 4M6 4h6v6" />
                          </svg>
                        </span>
                      ) : (
                        <span
                          className="mono"
                          style={{
                            fontSize: '0.68rem',
                            fontWeight: 700,
                            color: 'var(--blue)',
                            padding: '0.3rem 0.65rem',
                            borderRadius: '999px',
                            background: 'var(--blue-soft)',
                          }}
                        >
                          ● Current Site
                        </span>
                      )}
                    </div>

                    <p className="eco-node-desc" style={{ marginTop: '1rem' }}>
                      {node.description}
                    </p>
                  </div>

                  <div>
                    <div className="eco-node-synergy" style={{ borderLeftColor: node.accent, marginBottom: '1rem' }}>
                      {node.synergy}
                    </div>
                    <div className="eco-node-foot">
                      <span>{node.domain}</span>
                      <span>{node.isCurrent ? 'Active Platform' : `Visit ${node.shortName} ↗`}</span>
                    </div>
                  </div>
                </>
              )

              return node.isCurrent ? (
                <div key={node.id} className="eco-node-card eco-node-card--active reveal">
                  {cardInner}
                </div>
              ) : (
                <a
                  key={node.id}
                  href={node.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="eco-node-card reveal"
                >
                  {cardInner}
                </a>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── ACT VIII: TRANSPARENT ENGAGEMENT MODELS ── */}
      <section className="section section--subtle" aria-labelledby="models-heading">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 3.25rem' }}>
            <div className="eyebrow" style={{ marginBottom: '0.9rem' }}>
              How Teams Adopt Us
            </div>
            <h2 id="models-heading" className="section-heading reveal">
              Flexible Engagement <em>Architectures</em>
            </h2>
          </div>

          <div className="models-grid">
            {engagementModels.map((model, idx) => (
              <article
                key={model.code}
                className={`model-card reveal ${idx === 1 ? 'model-card--featured' : ''}`}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.85rem' }}>
                    <span className="process-num" style={{ marginBottom: 0 }}>
                      {model.code}
                    </span>
                    <span className="mono" style={{ fontSize: '0.72rem', color: 'var(--muted)' }}>
                      {model.cadence}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--ink)', marginBottom: '0.65rem' }}>
                    {model.name}
                  </h3>
                  <p style={{ fontSize: '0.88rem', color: 'var(--muted)', lineHeight: 1.7, marginBottom: '1.25rem' }}>
                    {model.summary}
                  </p>

                  <ul className="bento-feature-list" style={{ marginBottom: 0 }}>
                    {model.highlights.map((h) => (
                      <li key={h} className="bento-feature-item">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href="/contact"
                  className={`btn ${idx === 1 ? 'btn-primary' : 'btn-secondary'}`}
                  style={{ width: '100%' }}
                >
                  Select {model.name.split(' ')[0]} Model →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── DIRECT-ANSWER FAQ ── */}
      <section className="section" aria-labelledby="faq-heading">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 3rem' }}>
            <div className="eyebrow" style={{ marginBottom: '0.9rem' }}>
              Direct Answers
            </div>
            <h2 id="faq-heading" className="section-heading reveal">
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

      {/* ── FINAL CTA ── */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="cta-banner">
            <div className="cta-banner__content">
              <div className="eyebrow eyebrow--dark" style={{ marginBottom: '1rem' }}>
                <span className="eyebrow-dot" />
                Q1 / Q2 Sprint Slots Open
              </div>
              <h2 className="section-heading section-heading--light" style={{ marginBottom: '0.85rem' }}>
                Ready to Upgrade Your Digital Velocity?
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.78)', fontSize: '1.02rem', lineHeight: 1.7 }}>
                Send us your goals or current URL — receive an actionable architecture &amp; search growth proposal within 48 hours.
              </p>
            </div>
            <div className="cta-banner__actions">
              <Link href="/contact" className="btn btn-white">
                Start a Project Brief
                <svg className="icon-arrow" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <path d="M3 8h10M9 4l4 4-4 4" />
                </svg>
              </Link>
              <a
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-glass"
              >
                WhatsApp Direct Desk ↗
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
