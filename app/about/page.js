'use client'
import Link from 'next/link'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import { useReveal, useCounter } from '../../components/useReveal'

export default function About() {
  useReveal()
  useCounter()

  const milestones = [
    { year: '2021', title: 'Founded', desc: 'Techo Labs was established in Batticaloa, Sri Lanka as the digital arm of Techo Traders.' },
    { year: '2022', title: 'First 10 Projects', desc: 'Delivered our first 10 client projects spanning Sri Lanka, Canada, and the Netherlands.' },
    { year: '2023', title: 'International Reach', desc: 'Expanded to serve clients across 8 countries including France, Australia, and the UAE.' },
    { year: '2024', title: '24+ Delivered', desc: 'Crossed 24 projects delivered with a 98% client satisfaction rate and growing ecosystem.' },
  ]

  const team = [
    { name: 'Techo Labs Team', role: 'Web Development', emoji: '💻', desc: 'Full-stack developers specialising in Next.js, React, WordPress, and custom CMS solutions.' },
    { name: 'Techo Labs Team', role: 'Digital Marketing', emoji: '📈', desc: 'Performance marketers running SEO, Google Ads, Meta Ads, and social media strategies.' },
    { name: 'Techo Labs Team', role: 'Research & Strategy', emoji: '🔬', desc: 'Analysts delivering market research, competitor audits, and brand positioning strategies.' },
    { name: 'Techo Labs Team', role: 'Design & UX', emoji: '🎨', desc: 'Designers crafting user-centred interfaces that convert and communicate clearly.' },
  ]

  return (
    <>
      <Nav />

      {/* PAGE HERO */}
      <section className="page-hero">
        <div className="page-hero__dots" />
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="page-hero__lbl">Techo Labs / About Us</div>
          <h1 className="page-hero__title">
            The Brain of the<br /><em>Techo Ecosystem.</em>
          </h1>
          <p style={{
            fontSize: '1.05rem', color: 'var(--muted)', marginTop: '1.25rem',
            maxWidth: '520px', lineHeight: 1.75, position: 'relative', zIndex: 2
          }}>
            We're a digital solutions team based in Batticaloa, Sri Lanka — building websites, running marketing campaigns, and researching markets for clients across 8 countries.
          </p>
        </div>
      </section>

      {/* STORY */}
      <section style={{ padding: '7rem 0', background: 'var(--white)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'start' }} className="about-two-col">
            <div>
              <div className="label" style={{ marginBottom: '0.75rem' }}>Our Story</div>
              <h2 className="section-title reveal" style={{ marginBottom: '1.75rem' }}>
                Built to Bridge<br /><em>Technology & Utility</em>
              </h2>
              <p className="reveal" data-d="1" style={{ fontSize: '0.975rem', color: 'var(--muted)', lineHeight: 1.85, marginBottom: '1.1rem' }}>
                Techo Labs was born from a belief that great digital work shouldn't be reserved for companies with massive budgets. Businesses of all sizes — from a local Sri Lankan temple to a Dutch corporate firm — deserve a web presence that works as hard as they do.
              </p>
              <p className="reveal" data-d="2" style={{ fontSize: '0.975rem', color: 'var(--muted)', lineHeight: 1.85, marginBottom: '1.1rem' }}>
                As the digital arm of <a href="https://www.techotraders.com.lk" target="_blank" rel="noopener" style={{ color: 'var(--blue)', fontWeight: 600 }}>Techo Traders</a>, we sit at the intersection of the group's three verticals — powering the tracking platform for Techo Xpress, managing the digital presence for Techo Connect, and handling the corporate identity of the parent company.
              </p>
              <p className="reveal" data-d="3" style={{ fontSize: '0.975rem', color: 'var(--muted)', lineHeight: 1.85, marginBottom: '1.1rem' }}>
                But we're more than an in-house team. We take on external clients with the same rigour and commitment — treating every project as if the business it represents is our own.
              </p>
              <blockquote className="reveal" data-d="3" style={{
                borderLeft: '3px solid var(--blue)',
                paddingLeft: '1.5rem',
                margin: '2rem 0',
                fontStyle: 'italic',
                fontSize: '1rem',
                color: 'var(--slate)',
                lineHeight: 1.7,
              }}>
                "Derived from the concept of professional craftsmanship — Techne — we approach every project as a craft, not a commodity."
              </blockquote>
            </div>

            <div className="reveal" data-d="1">
              {/* Stats card */}
              <div style={{
                background: 'var(--off-white)', border: '1px solid var(--border-light)',
                borderRadius: 'var(--radius-lg)', padding: '2.5rem', marginBottom: '1.5rem',
              }}>
                <div style={{ fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--blue)', marginBottom: '1.5rem' }}>
                  By The Numbers
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                  {[
                    { val: '24', suffix: '+', lbl: 'Projects Delivered' },
                    { val: '8',  suffix: '+', lbl: 'Countries Served' },
                    { val: '98', suffix: '%', lbl: 'Client Satisfaction' },
                    { val: '3',  suffix: '',  lbl: 'Core Services' },
                  ].map(s => (
                    <div key={s.lbl}>
                      <div style={{ fontFamily: 'var(--font-head)', fontWeight: 800, fontSize: '2.5rem', color: 'var(--ink)', lineHeight: 1, letterSpacing: '-0.03em' }}>
                        <span data-count={s.val} data-suffix={s.suffix}>{s.val}{s.suffix}</span>
                      </div>
                      <div style={{ fontSize: '0.75rem', fontWeight: 500, color: 'var(--muted)', marginTop: '0.3rem' }}>{s.lbl}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Location card */}
              <div style={{
                background: 'var(--blue)', borderRadius: 'var(--radius-lg)', padding: '2rem',
              }}>
                <div style={{ fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)', marginBottom: '1rem' }}>
                  Our Base
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                  {[
                    { icon: '📍', label: 'Location', value: 'Batticaloa, Sri Lanka' },
                    { icon: '📞', label: 'Phone', value: '+94 76 665 6007' },
                    { icon: '✉️', label: 'Email', value: 'labs@techotraders.com.lk' },
                    { icon: '🌐', label: 'Global Reach', value: '8+ Countries Served' },
                  ].map(item => (
                    <div key={item.label} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                      <span style={{ fontSize: '1rem', lineHeight: 1, flexShrink: 0 }}>{item.icon}</span>
                      <div>
                        <div style={{ fontSize: '0.62rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', marginBottom: '0.15rem' }}>{item.label}</div>
                        <div style={{ fontSize: '0.875rem', color: 'white', fontWeight: 500 }}>{item.value}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TEAM / EXPERTISE */}
      <section style={{ padding: '7rem 0', background: 'var(--off-white)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <div className="label" style={{ justifyContent: 'center', marginBottom: '0.75rem' }}>Our Expertise</div>
            <h2 className="section-title reveal">What Our Team<br /><em>Specialises In</em></h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5px', background: 'var(--border-light)', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-lg)', overflow: 'hidden' }}>
            {team.map((t, i) => (
              <div key={t.role} className="service-card reveal" data-d={String(i % 2)} style={{ padding: '2.5rem 2rem' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem', lineHeight: 1 }}>{t.emoji}</div>
                <div style={{ fontFamily: 'var(--font-head)', fontWeight: 700, fontSize: '1.2rem', color: 'var(--ink)', marginBottom: '0.5rem', letterSpacing: '-0.01em' }}>{t.role}</div>
                <div style={{ fontSize: '0.875rem', color: 'var(--muted)', lineHeight: 1.7 }}>{t.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section style={{ padding: '7rem 0', background: 'var(--white)' }}>
        <div className="container">
          <div style={{ marginBottom: '3.5rem' }}>
            <div className="label" style={{ marginBottom: '0.75rem' }}>Our Journey</div>
            <h2 className="section-title reveal">How We Got <em>Here</em></h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0', borderLeft: '2px solid var(--border-light)', marginLeft: '1.5rem' }}>
            {milestones.map((m, i) => (
              <div key={m.year} className="reveal" data-d={String(i % 3)} style={{
                display: 'flex', gap: '2rem', paddingLeft: '2.5rem', paddingBottom: '3rem',
                position: 'relative',
              }}>
                {/* dot */}
                <div style={{
                  position: 'absolute', left: '-9px', top: '4px',
                  width: '16px', height: '16px', borderRadius: '50%',
                  background: 'var(--blue)', border: '3px solid var(--white)',
                  boxShadow: '0 0 0 2px var(--blue)',
                  flexShrink: 0,
                }} />
                <div style={{
                  fontFamily: 'var(--font-head)', fontWeight: 800, fontSize: '1rem',
                  color: 'var(--blue)', letterSpacing: '0.04em', flexShrink: 0,
                  minWidth: '60px', paddingTop: '2px',
                }}>{m.year}</div>
                <div>
                  <div style={{ fontFamily: 'var(--font-head)', fontWeight: 700, fontSize: '1.25rem', color: 'var(--ink)', marginBottom: '0.4rem', letterSpacing: '-0.01em' }}>{m.title}</div>
                  <div style={{ fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.7 }}>{m.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section style={{ padding: '7rem 0', background: 'var(--ink)' }}>
        <div className="container">
          <div style={{ marginBottom: '3.5rem' }}>
            <div className="label" style={{ color: 'rgba(255,255,255,0.5)', marginBottom: '0.75rem' }}>
              <span style={{ display: 'block', width: '24px', height: '2px', background: 'rgba(255,255,255,0.3)' }} />
              What Drives Us
            </div>
            <h2 className="section-title reveal" style={{ color: 'white' }}>
              Our Core <em style={{ color: 'var(--blue-light)' }}>Values</em>
            </h2>
          </div>
          <div className="process-grid">
            {[
              { n: '01', title: 'Craft Over Speed', desc: 'We\'d rather take the time to do something right than rush something mediocre. Every pixel, every line of code, every word matters.' },
              { n: '02', title: 'Transparency', desc: 'You always know what we\'re doing and why. No black boxes, no surprises on invoices, no excuses.' },
              { n: '03', title: 'Measurable Results', desc: 'Good design that doesn\'t convert is decoration. We build things that work — and we track whether they do.' },
              { n: '04', title: 'Long-Term Thinking', desc: 'We build for the next three years, not just the next sprint. Code quality, scalability, and maintainability are non-negotiable.' },
            ].map((v, i) => (
              <div className="process-step reveal" key={v.n} data-d={String(i)}>
                <div className="process-step__num">{v.n}</div>
                <div className="process-step__title">{v.title}</div>
                <div className="process-step__desc">{v.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '5rem 0', background: 'var(--off-white)', borderTop: '1px solid var(--border-light)', textAlign: 'center' }}>
        <div className="container">
          <div className="label" style={{ justifyContent: 'center', marginBottom: '1rem' }}>Start Something</div>
          <h2 className="section-title reveal" style={{ marginBottom: '1rem' }}>
            Let's Work <em>Together</em>
          </h2>
          <p style={{ color: 'var(--muted)', fontSize: '1rem', maxWidth: '440px', margin: '0 auto 2rem', lineHeight: 1.75 }}>
            Ready to start a project? We'd love to hear about it.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn btn-primary">
              Get in Touch
              <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
            </Link>
            <Link href="/portfolio" className="btn btn-outline">View Our Work</Link>
          </div>
        </div>
      </section>

      <Footer />

      <style jsx>{`
        @media (max-width: 860px) {
          .about-two-col { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  )
}
