'use client'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import PortfolioGrid from '../../components/PortfolioGrid'
import { useReveal } from '../../components/useReveal'
import { portfolioItems } from '../../data/index'
import Link from 'next/link'

export default function Portfolio() {
  useReveal()

  const countries = [...new Set(portfolioItems.map(p => p.location))]
  const categories = [...new Set(portfolioItems.map(p => p.category))]

  return (
    <>
      <Nav />

      <section className="page-hero">
        <div className="page-hero__dots" />
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="page-hero__lbl">Techo Labs / Portfolio</div>
          <h1 className="page-hero__title">{portfolioItems.length} Projects.<br /><em>8 Countries.</em></h1>
          <p style={{ fontSize: '1rem', color: 'var(--muted)', marginTop: '1.25rem', maxWidth: '500px', lineHeight: 1.75, position: 'relative', zIndex: 2 }}>
            Every project in our portfolio was built with the same commitment: clean code, great design, and results that matter to the client.
          </p>
        </div>
      </section>

      {/* Stats bar */}
      <div style={{ background: 'var(--blue)', padding: '2rem 0' }}>
        <div className="container">
          <div style={{ display: 'flex', gap: '3rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            {[
              { val: portfolioItems.length + '+', lbl: 'Projects Delivered' },
              { val: countries.length + '+', lbl: 'Countries' },
              { val: categories.length + '+', lbl: 'Industries' },
              { val: '98%', lbl: 'Client Satisfaction' },
            ].map(s => (
              <div key={s.lbl} style={{ textAlign: 'center' }}>
                <div style={{ fontFamily: 'var(--font-head)', fontWeight: 800, fontSize: '2.2rem', color: 'white', lineHeight: 1, letterSpacing: '-0.02em' }}>{s.val}</div>
                <div style={{ fontSize: '0.72rem', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.65)', marginTop: '0.3rem' }}>{s.lbl}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Portfolio grid */}
      <section className="portfolio-section" style={{ background: 'var(--off-white)' }}>
        <div className="container">
          <PortfolioGrid />
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '5rem 0', background: 'var(--white)', borderTop: '1px solid var(--border-light)', textAlign: 'center' }}>
        <div className="container">
          <div className="label" style={{ justifyContent: 'center', marginBottom: '1rem' }}>Your Project Next</div>
          <h2 className="section-title reveal" style={{ marginBottom: '1rem' }}>
            Want to Be on<br /><em>This List?</em>
          </h2>
          <p style={{ color: 'var(--muted)', fontSize: '1rem', maxWidth: '420px', margin: '0 auto 2rem', lineHeight: 1.75 }}>
            We're always looking for interesting projects to work on. Tell us about yours.
          </p>
          <Link href="/contact" className="btn btn-primary">
            Start a Project
            <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
          </Link>
        </div>
      </section>

      <Footer />
    </>
  )
}
