'use client'
import { useEffect } from 'react'
import Link from 'next/link'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import PortfolioGrid from '../components/PortfolioGrid'
import { useReveal, useCounter } from '../components/useReveal'
import { services } from '../data/index'

export default function Home() {
  useReveal()
  useCounter()

  return (
    <>
      <Nav />

      {/* ── HERO ── */}
      <section className="hero">
        <div className="hero__dots" />
        <div className="hero__blob" />

        <div className="hero__body">
          <div className="container">
            <div className="hero__content">

              <div className="hero__eyebrow">
                <div className="hero__badge">
                  <div className="hero__badge-dot" />
                  Techo Traders Ecosystem · The Brain
                </div>
              </div>

              <h1 className="hero__title">
                ARCHITECTING<br />
                THE <em>DIGITAL</em><br />
                <span className="outline">FUTURE.</span>
              </h1>

              <p className="hero__desc">
                Web development, digital marketing, and market research — built for businesses that demand precision, creativity, and measurable results.
              </p>

              <div className="hero__actions">
                <Link href="/portfolio" className="btn btn-primary">
                  View Our Work
                  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
                </Link>
                <Link href="/contact" className="btn btn-outline">
                  Start a Project
                </Link>
              </div>

              <div className="hero__stats">
                <div>
                  <div className="hero__stat-val">
                    <span data-count="24" data-suffix="+">24+</span>
                  </div>
                  <div className="hero__stat-lbl">Projects Delivered</div>
                </div>
                <div>
                  <div className="hero__stat-val">
                    <span data-count="8" data-suffix="+">8+</span>
                  </div>
                  <div className="hero__stat-lbl">Countries Served</div>
                </div>
                <div>
                  <div className="hero__stat-val">
                    <span data-count="98" data-suffix="%">98%</span>
                  </div>
                  <div className="hero__stat-lbl">Client Satisfaction</div>
                </div>
                <div>
                  <div className="hero__stat-val">
                    <span data-count="3" data-suffix="">3</span>
                  </div>
                  <div className="hero__stat-lbl">Core Services</div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Floating browser card */}
        <div className="hero__card">
          <div className="hero__card-header">
            <div className="hero__card-dots">
              <span style={{ background: '#FF5F56' }}/>
              <span style={{ background: '#FEBC2E' }}/>
              <span style={{ background: '#27C93F' }}/>
            </div>
            <div className="hero__card-url">techotraders.com.lk</div>
          </div>
          <div className="hero__card-screen">
            <div style={{
              width: '100%', height: '100%',
              background: 'linear-gradient(135deg, #0A4FD40A 0%, #0A4FD418 100%)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              position: 'relative', overflow: 'hidden',
            }}>
              <div style={{
                position: 'absolute', inset: 0,
                backgroundImage: 'radial-gradient(circle, rgba(10,79,212,0.15) 1px, transparent 1px)',
                backgroundSize: '18px 18px',
              }}/>
              <span style={{
                fontFamily: 'var(--font-head)', fontWeight: 800,
                fontSize: '3.5rem', color: 'rgba(10,79,212,0.12)',
                letterSpacing: '-0.04em', position: 'relative',
              }}>TL</span>
            </div>
          </div>
          <div className="hero__card-metric">
            <span className="hero__card-metric-label">Performance Score</span>
            <span className="hero__card-metric-value">98 / 100</span>
          </div>
          <div className="hero__card-metric">
            <span className="hero__card-metric-label">Load Time</span>
            <span className="hero__card-metric-value">&lt; 1.2s</span>
          </div>
          <div className="hero__card-metric">
            <span className="hero__card-metric-label">Mobile Optimised</span>
            <span className="hero__card-metric-value">✓ Yes</span>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="services-section">
        <div className="container">
          <div className="services-section__header">
            <div>
              <div className="label" style={{ marginBottom: '0.75rem' }}>What We Do</div>
              <h2 className="section-title reveal">Our Core <em>Services</em></h2>
            </div>
            <div>
              <p className="services-section__desc reveal" data-d="1">
                We combine technical depth with creative strategy — three services that work together to build, grow, and validate your digital presence.
              </p>
            </div>
          </div>

          <div className="services-grid">
            {services.map((s, i) => (
              <div className="service-card reveal" key={s.number} data-d={String(i)}>
                <div className="service-card__num">{s.number}</div>
                <div className="service-card__title">{s.title}</div>
                <div className="service-card__desc">{s.description}</div>
                <div className="service-card__features">
                  {s.features.map(f => (
                    <div className="service-card__feature" key={f}>{f}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <Link href="/services" className="btn btn-outline">
              Explore All Services
              <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ── PORTFOLIO PREVIEW ── */}
      <section className="portfolio-section">
        <div className="container">
          <div className="portfolio-section__header">
            <div>
              <div className="label" style={{ marginBottom: '0.75rem' }}>Our Work</div>
              <h2 className="section-title reveal">Selected <em>Projects</em></h2>
            </div>
            <Link href="/portfolio" className="btn btn-ghost">
              View All 24 Projects
              <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
            </Link>
          </div>

          <PortfolioGrid limit={6} />

          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link href="/portfolio" className="btn btn-primary">
              View Full Portfolio (24 Projects)
              <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ── ABOUT / ECOSYSTEM ── */}
      <section className="about-section">
        <div className="container">
          <div className="about-section__inner">
            <div>
              <div className="label" style={{ marginBottom: '0.75rem' }}>Who We Are</div>
              <h2 className="section-title reveal" style={{ marginBottom: '1.5rem' }}>The Brain of the<br /><em>Techo Ecosystem</em></h2>
              <p className="reveal" data-d="1">
                Techo Labs is the digital intelligence arm of Techo Traders — the company that provides the strategic and creative foundation for the entire ecosystem. We don't just build websites. We build digital presences that work.
              </p>
              <p className="reveal" data-d="2">
                Based in Batticaloa, Sri Lanka, we've delivered 24+ projects across 8 countries — from Canadian real estate platforms to AI-powered medical diagnostics sites, Dutch corporate platforms to Sri Lankan community portals.
              </p>
              <p className="reveal" data-d="3">
                Our work powers the tracking software behind Techo Xpress, the digital marketing for Techo Connect, and the web presence of the parent company Techo Traders.
              </p>
              <div style={{ marginTop: '2rem' }} className="reveal" data-d="3">
                <Link href="/about" className="btn btn-outline">
                  Our Story
                  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
                </Link>
              </div>
            </div>

            <div className="about-section__visual">
              <p style={{ fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--blue)', marginBottom: '1.25rem' }}>
                THE TECHO ECOSYSTEM
              </p>
              <div className="ecosystem-cards">
                <div className="ecosystem-card ecosystem-card--labs">
                  <div className="ecosystem-card__emoji">🧠</div>
                  <div>
                    <div className="ecosystem-card__name">Techo Labs <span style={{ fontSize: '0.7rem', color: 'var(--blue)', fontWeight: 600 }}>(You're Here)</span></div>
                    <div className="ecosystem-card__desc">Web development, digital marketing, and market research powering the entire group.</div>
                  </div>
                </div>
                <div className="ecosystem-card ecosystem-card--xpress">
                  <div className="ecosystem-card__emoji">💪</div>
                  <div>
                    <div className="ecosystem-card__name">Techo Xpress</div>
                    <div className="ecosystem-card__desc">Courier and logistics arm. Powered by tracking software built by Labs.</div>
                  </div>
                </div>
                <div className="ecosystem-card ecosystem-card--connect">
                  <div className="ecosystem-card__emoji">📡</div>
                  <div>
                    <div className="ecosystem-card__name">Techo Connect</div>
                    <div className="ecosystem-card__desc">Antenna and hardware manufacturing. Digital presence managed by Labs.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="process-section">
        <div className="container">
          <div style={{ marginBottom: '0' }}>
            <div className="label" style={{ marginBottom: '0.75rem' }}>How We Work</div>
            <h2 className="section-title reveal">Our <em>Process</em></h2>
          </div>
          <div className="process-grid">
            {[
              { n: '01', title: 'Discovery', desc: 'We start by understanding your business, audience, and goals. No assumptions — we ask the right questions first.' },
              { n: '02', title: 'Strategy', desc: 'We map out the architecture, content strategy, and technical approach before writing a single line of code.' },
              { n: '03', title: 'Build', desc: 'Design and development happen in parallel with regular check-ins. You see progress, not just a finished product.' },
              { n: '04', title: 'Launch & Grow', desc: 'We don\'t disappear after launch. SEO, performance monitoring, and ongoing support are part of the package.' },
            ].map((step, i) => (
              <div className="process-step reveal" key={step.n} data-d={String(i)}>
                <div className="process-step__num">{step.n}</div>
                <div className="process-step__title">{step.title}</div>
                <div className="process-step__desc">{step.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BAND ── */}
      <section style={{ padding: '5rem 0', background: 'var(--blue)', position: 'relative', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
          pointerEvents: 'none',
        }}/>
        <div className="container" style={{ position: 'relative' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '2rem', flexWrap: 'wrap' }}>
            <div>
              <h2 style={{ fontFamily: 'var(--font-head)', fontWeight: 800, fontSize: 'clamp(1.8rem,4vw,3rem)', color: 'white', letterSpacing: '-0.02em', lineHeight: 1.05, marginBottom: '0.6rem' }}>
                Ready to Build<br />Something Great?
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '1rem' }}>
                Let's talk about your project. No obligation, no sales pitch.
              </p>
            </div>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link href="/contact" className="btn" style={{ background: 'white', color: 'var(--blue)', fontWeight: 700 }}>
                Start a Project
                <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
              </Link>
              <Link href="/portfolio" className="btn" style={{ background: 'transparent', color: 'white', border: '2px solid rgba(255,255,255,0.35)' }}>
                View Portfolio
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
