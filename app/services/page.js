'use client'
import Link from 'next/link'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import { useReveal } from '../../components/useReveal'

export default function Services() {
  useReveal()

  const serviceBlocks = [
    {
      id: 'web',
      num: '01',
      title: 'Web Development',
      subtitle: 'From Concept to Code',
      description: [
        'We build websites and web applications that are fast, scalable, and maintainable. Using modern frameworks like Next.js, React, and Node.js, we create digital products that perform as well as they look.',
        'Every project begins with architecture planning — we think about SEO, performance, and long-term maintainability from day one, not as an afterthought.',
      ],
      features: [
        'Custom Design & Frontend Development',
        'Next.js / React Web Applications',
        'CMS Integration (WordPress, Sanity, Strapi)',
        'E-Commerce Solutions (WooCommerce, Shopify)',
        'RESTful API & Backend Development',
        'Database Design & Management',
        'Web Performance Optimisation',
        'Mobile-First Responsive Design',
      ],
      ideal: ['Startups launching their first product', 'Businesses redesigning outdated sites', 'Companies needing custom web applications', 'E-commerce stores needing better performance'],
      color: '#0A4FD4',
    },
    {
      id: 'marketing',
      num: '02',
      title: 'Digital Marketing',
      subtitle: 'Grow Your Audience',
      description: [
        'A great website is only half the picture. We run data-driven digital marketing campaigns that generate real leads, grow your brand, and deliver measurable ROI across every channel.',
        'We don\'t believe in vanity metrics. Every campaign we run is tied to a business objective — whether that\'s leads, sales, signups, or brand awareness.',
      ],
      features: [
        'Search Engine Optimisation (Technical + Content)',
        'Google Search & Display Ads (PPC)',
        'Meta Ads (Facebook & Instagram)',
        'Social Media Strategy & Management',
        'Email Marketing & Automation',
        'Content Marketing & Copywriting',
        'Analytics Setup & Reporting (GA4, GTM)',
        'Conversion Rate Optimisation (CRO)',
      ],
      ideal: ['Businesses wanting more website traffic', 'E-commerce stores targeting higher sales', 'Brands building social media presence', 'Companies needing lead generation campaigns'],
      color: '#0891B2',
    },
    {
      id: 'research',
      num: '03',
      title: 'Market Research',
      subtitle: 'Intelligence Before Action',
      description: [
        'Before you invest in a campaign or product, you need to know if it will work. Our research service gives you the market intelligence to make strategic decisions with confidence.',
        'We combine quantitative data analysis with qualitative research methods — competitor audits, user interviews, industry reports — to give you a complete picture of your market landscape.',
      ],
      features: [
        'Competitor Analysis & Benchmarking',
        'Target Audience Research & Personas',
        'Industry & Market Sizing Reports',
        'Brand Positioning Analysis',
        'Keyword & Search Intent Research',
        'Customer Journey Mapping',
        'User Experience (UX) Research',
        'Strategic Recommendations & Roadmaps',
      ],
      ideal: ['Businesses entering new markets', 'Products looking for product-market fit', 'Companies repositioning their brand', 'Investors needing due diligence research'],
      color: '#059669',
    },
  ]

  return (
    <>
      <Nav />

      <section className="page-hero">
        <div className="page-hero__dots" />
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="page-hero__lbl">Techo Labs / Services</div>
          <h1 className="page-hero__title">Three Services.<br /><em>One Digital Vision.</em></h1>
        </div>
      </section>

      {serviceBlocks.map((s, idx) => (
        <section
          key={s.id}
          id={s.id}
          style={{
            padding: '6rem 0',
            background: idx % 2 === 0 ? 'var(--white)' : 'var(--off-white)',
            borderBottom: '1px solid var(--border-light)',
          }}
        >
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'start' }}
              className="service-detail-grid">
              <div>
                <div style={{ fontFamily: 'var(--font-head)', fontWeight: 800, fontSize: '5rem', color: `${s.color}12`, letterSpacing: '-0.06em', lineHeight: 1, marginBottom: '-0.5rem' }}>{s.num}</div>
                <div className="label" style={{ color: s.color, marginBottom: '0.6rem' }}>{s.subtitle}</div>
                <h2 style={{ fontFamily: 'var(--font-head)', fontWeight: 800, fontSize: 'clamp(2rem,3.5vw,2.8rem)', color: 'var(--ink)', letterSpacing: '-0.02em', lineHeight: 1.05, marginBottom: '1.5rem' }}>
                  {s.title}
                </h2>
                {s.description.map((p, i) => (
                  <p key={i} className="reveal" data-d={String(i)} style={{ fontSize: '0.975rem', color: 'var(--muted)', lineHeight: 1.85, marginBottom: '1rem' }}>{p}</p>
                ))}
                <div style={{ marginTop: '2rem' }} className="reveal" data-d="2">
                  <Link href="/contact" className="btn btn-primary" style={{ background: s.color, boxShadow: `0 4px 16px ${s.color}30` }}>
                    Start a Project
                    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
                  </Link>
                </div>
              </div>

              <div className="reveal" data-d="1">
                <div style={{ background: 'var(--white)', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-lg)', padding: '2rem', marginBottom: '1.5rem', boxShadow: 'var(--shadow-sm)' }}>
                  <div style={{ fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: s.color, marginBottom: '1rem' }}>What's Included</div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                    {s.features.map(f => (
                      <div key={f} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.875rem', color: 'var(--slate)' }}>
                        <div style={{ width: '16px', height: '1.5px', background: s.color, flexShrink: 0 }}/>
                        {f}
                      </div>
                    ))}
                  </div>
                </div>

                <div style={{ background: `${s.color}08`, border: `1px solid ${s.color}20`, borderRadius: 'var(--radius-lg)', padding: '1.5rem' }}>
                  <div style={{ fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: s.color, marginBottom: '0.75rem' }}>Ideal For</div>
                  {s.ideal.map(item => (
                    <div key={item} style={{ fontSize: '0.82rem', color: 'var(--slate)', marginBottom: '0.4rem', paddingLeft: '1rem', position: 'relative' }}>
                      <span style={{ position: 'absolute', left: 0, color: s.color }}>→</span>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section style={{ padding: '5rem 0', background: 'var(--blue)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)', backgroundSize: '32px 32px', pointerEvents: 'none' }}/>
        <div className="container" style={{ position: 'relative', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-head)', fontWeight: 800, fontSize: 'clamp(2rem,4vw,3rem)', color: 'white', letterSpacing: '-0.02em', marginBottom: '1rem' }}>
            Not Sure Which Service You Need?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1rem', marginBottom: '2rem' }}>
            Most clients need a combination. Let's talk and figure out what's right for you.
          </p>
          <Link href="/contact" className="btn" style={{ background: 'white', color: 'var(--blue)', fontWeight: 700 }}>
            Book a Free Consultation
            <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
          </Link>
        </div>
      </section>

      <Footer />

      <style jsx>{`
        @media (max-width: 860px) {
          .service-detail-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  )
}
