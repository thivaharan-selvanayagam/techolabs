'use client'
import { useState } from 'react'
import Link from 'next/link'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import { useReveal } from '../../components/useReveal'

export default function Contact() {
  useReveal()

  const [form, setForm] = useState({ name: '', email: '', phone: '', company: '', service: '', budget: '', message: '' })
  const [status, setStatus] = useState(null) // 'success' | 'error' | null
  const [loading, setLoading] = useState(false)

  const handleChange = e => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = e => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) {
      setStatus('error')
      return
    }
    setLoading(true)
    // Simulate submission — connect to email API / nodemailer in production
    setTimeout(() => {
      setLoading(false)
      setStatus('success')
      setForm({ name: '', email: '', phone: '', company: '', service: '', budget: '', message: '' })
    }, 900)
  }

  const contactDetails = [
    {
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.1 1.18 2 2 0 012 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14z"/>
        </svg>
      ),
      label: 'Phone / WhatsApp',
      value: '+94 76 665 6007',
      sub: 'Mon–Sat, 8:00 AM – 7:00 PM',
      href: 'tel:+94766656007',
    },
    {
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
          <polyline points="22,6 12,13 2,6"/>
        </svg>
      ),
      label: 'Email',
      value: 'labs@techotraders.com.lk',
      sub: 'Response within 4 business hours',
      href: 'mailto:labs@techotraders.com.lk',
    },
    {
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
          <circle cx="12" cy="10" r="3"/>
        </svg>
      ),
      label: 'Location',
      value: 'Batticaloa, Sri Lanka',
      sub: 'Serving clients globally',
      href: null,
    },
    {
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10"/>
          <line x1="2" y1="12" x2="22" y2="12"/>
          <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/>
        </svg>
      ),
      label: 'Parent Company',
      value: 'Techo Traders (Pvt) Ltd',
      sub: 'techotraders.com.lk',
      href: 'https://www.techotraders.com.lk',
    },
  ]

  return (
    <>
      <Nav />

      {/* PAGE HERO */}
      <section className="page-hero">
        <div className="page-hero__dots" />
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="page-hero__lbl">Techo Labs / Contact</div>
          <h1 className="page-hero__title">
            Let's Build<br /><em>Something Great.</em>
          </h1>
          <p style={{ fontSize: '1.05rem', color: 'var(--muted)', marginTop: '1.25rem', maxWidth: '500px', lineHeight: 1.75, position: 'relative', zIndex: 2 }}>
            Whether you have a clear brief or just an idea — we'd love to hear from you. No obligation, no hard sell.
          </p>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="contact-section">
        <div className="container">
          <div className="contact-section__inner">

            {/* LEFT — Info */}
            <div>
              <div className="label" style={{ marginBottom: '0.75rem' }}>Get In Touch</div>
              <h2 className="section-title reveal" style={{ fontSize: '2rem', marginBottom: '1rem' }}>
                We're <em>Always On.</em>
              </h2>
              <p className="reveal" data-d="1" style={{ fontSize: '0.925rem', color: 'var(--muted)', lineHeight: 1.8, marginBottom: '2rem' }}>
                Based in Batticaloa, Sri Lanka — working with clients across Canada, Europe, Australia, and beyond. Distance is never an obstacle.
              </p>

              <div className="contact-info reveal" data-d="2">
                {contactDetails.map(item => (
                  <div key={item.label} className="contact-info-item">
                    <div className="contact-icon">{item.icon}</div>
                    <div>
                      <div className="contact-lbl">{item.label}</div>
                      {item.href ? (
                        <a href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel="noopener" className="contact-val" style={{ color: 'var(--slate)', transition: 'color 0.2s' }}>
                          {item.value}
                        </a>
                      ) : (
                        <div className="contact-val">{item.value}</div>
                      )}
                      <div className="contact-val-sub">{item.sub}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Ecosystem note */}
              <div className="reveal" data-d="3" style={{
                marginTop: '2rem', padding: '1.25rem 1.5rem',
                background: 'var(--blue-faint)', border: '1px solid var(--border)',
                borderRadius: 'var(--radius)',
              }}>
                <div style={{ fontSize: '0.62rem', fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--blue)', marginBottom: '0.4rem' }}>
                  Techo Traders Ecosystem
                </div>
                <p style={{ fontSize: '0.85rem', color: 'var(--slate)', lineHeight: 1.65 }}>
                  Techo Labs is part of <a href="https://www.techotraders.com.lk" target="_blank" rel="noopener" style={{ color: 'var(--blue)', fontWeight: 600 }}>Techo Traders</a>. For logistics inquiries contact <a href="https://www.express.techotraders.com.lk" target="_blank" rel="noopener" style={{ color: 'var(--blue)', fontWeight: 600 }}>Techo Xpress</a>, for hardware & antenna needs visit <a href="https://www.connect.techotraders.com.lk" target="_blank" rel="noopener" style={{ color: 'var(--blue)', fontWeight: 600 }}>Techo Connect</a>.
                </p>
              </div>
            </div>

            {/* RIGHT — Form */}
            <div className="reveal" data-d="1">
              <div className="contact-form-box">
                <div className="form-title">Send Us a Message</div>
                <div className="form-sub">Fill in the details below and we'll get back to you within 4 hours.</div>

                {status === 'success' && (
                  <div className="form-alert form-alert--success">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                    Your message has been sent! We'll be in touch shortly.
                  </div>
                )}
                {status === 'error' && (
                  <div className="form-alert form-alert--error">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                    Please fill in your name, email, and message.
                  </div>
                )}

                <form onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">Full Name *</label>
                      <input id="name" name="name" type="text" placeholder="Your full name" value={form.name} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email Address *</label>
                      <input id="email" name="email" type="email" placeholder="you@company.com" value={form.email} onChange={handleChange} required />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="phone">Phone / WhatsApp</label>
                      <input id="phone" name="phone" type="tel" placeholder="+94 XX XXX XXXX" value={form.phone} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                      <label htmlFor="company">Company / Organisation</label>
                      <input id="company" name="company" type="text" placeholder="Your company (optional)" value={form.company} onChange={handleChange} />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="service">Service Interested In</label>
                      <select id="service" name="service" value={form.service} onChange={handleChange}>
                        <option value="">Select a service...</option>
                        <option value="web">Web Development</option>
                        <option value="marketing">Digital Marketing</option>
                        <option value="research">Market Research</option>
                        <option value="full">Full Package (All Three)</option>
                        <option value="other">Other / Not Sure</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label htmlFor="budget">Budget Range (USD)</label>
                      <select id="budget" name="budget" value={form.budget} onChange={handleChange}>
                        <option value="">Select a range...</option>
                        <option value="<500">Under $500</option>
                        <option value="500-1500">$500 – $1,500</option>
                        <option value="1500-5000">$1,500 – $5,000</option>
                        <option value="5000+">$5,000+</option>
                        <option value="discuss">Prefer to Discuss</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      placeholder="Tell us about your project — what you're building, your timeline, and any specific requirements..."
                      value={form.message}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={loading}
                    style={{ width: '100%', justifyContent: 'center', padding: '0.95rem', fontSize: '0.95rem', opacity: loading ? 0.7 : 1 }}
                  >
                    {loading ? 'Sending...' : 'Send Message'}
                    {!loading && (
                      <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
                    )}
                  </button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: '6rem 0', background: 'var(--white)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div className="label" style={{ justifyContent: 'center', marginBottom: '0.75rem' }}>Common Questions</div>
            <h2 className="section-title reveal">Quick <em>Answers</em></h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem', maxWidth: '860px', margin: '0 auto' }} className="faq-grid">
            {[
              { q: 'How long does a website take?', a: 'A standard 5-page website takes 2–4 weeks. Complex web applications or e-commerce platforms typically take 6–12 weeks depending on scope.' },
              { q: 'Do you work with international clients?', a: 'Absolutely. We\'ve worked with clients in Canada, France, Netherlands, Australia, and more. We communicate via email, WhatsApp, and video calls.' },
              { q: 'What platforms do you build on?', a: 'We build custom sites with Next.js / React, WordPress for content-heavy sites, and Shopify/WooCommerce for e-commerce. We recommend what fits your needs.' },
              { q: 'Do you offer ongoing support?', a: 'Yes — we offer monthly maintenance plans covering updates, backups, performance monitoring, and content changes. Ask us about packages.' },
              { q: 'Can you improve my existing website?', a: 'Definitely. Whether it\'s a redesign, performance optimisation, or just fixing what\'s broken — we can assess your current site and propose a plan.' },
              { q: 'What do you need to get started?', a: 'Just a brief description of your project and goals. We\'ll schedule a discovery call, understand your needs, and send a proposal within 48 hours.' },
            ].map((faq, i) => (
              <div key={i} className="reveal" data-d={String(i % 2)} style={{
                padding: '1.5rem', background: 'var(--off-white)',
                border: '1px solid var(--border-light)', borderRadius: 'var(--radius)',
              }}>
                <div style={{ fontFamily: 'var(--font-head)', fontWeight: 700, fontSize: '1rem', color: 'var(--ink)', marginBottom: '0.6rem', letterSpacing: '-0.01em' }}>{faq.q}</div>
                <div style={{ fontSize: '0.875rem', color: 'var(--muted)', lineHeight: 1.75 }}>{faq.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />

      <style jsx>{`
        @media (max-width: 700px) {
          .faq-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  )
}
