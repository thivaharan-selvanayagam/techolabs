'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { sisterEcosystemLinks, siteConfig } from '../data/index'

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Capabilities' },
  { href: '/portfolio', label: 'Work' },
  { href: '/about', label: 'Studio' },
  { href: '/contact', label: 'Contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [ecoOpen, setEcoOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 36)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setDrawerOpen(false)
    setEcoOpen(false)
  }, [pathname])

  return (
    <>
      <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
        {/* Techo Traders (Pvt) Ltd Ecosystem Ribbon */}
        <div className="eco-ribbon" role="region" aria-label="Techo Ecosystem Navigation">
          <div className="container eco-ribbon__inner">
            <div className="eco-ribbon__left">
              <span>A DIVISION OF TECHO TRADERS (PVT) LTD</span>
              <span>·</span>
              <span>GLOBAL DELIVERY</span>
            </div>
            <div className="eco-ribbon__links">
              {sisterEcosystemLinks.map((eco) => (
                <a
                  key={eco.id}
                  href={eco.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="eco-ribbon__link"
                >
                  <span className="eco-ribbon__dot" style={{ background: eco.accent }} />
                  {eco.shortName}
                  <svg width="11" height="11" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 11L11 5M6 5h5v5" />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Main Floating Glass Navigation */}
        <div className="nav-wrap">
          <div className="container">
            <div className="nav-bar">
              <Link href="/" className="brand-logo" aria-label="Techo Labs Home">
                <div className="brand-mark">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                    <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" />
                    <circle cx="12" cy="12" r="3" fill="currentColor" stroke="none" />
                  </svg>
                </div>
                <div>
                  <div className="brand-title">TECHO LABS</div>
                  <div className="brand-sub">Digital Intelligence</div>
                </div>
              </Link>

              <nav className="nav-links" aria-label="Primary Navigation">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`nav-link ${pathname === item.href ? 'is-active' : ''}`}
                  >
                    {item.label}
                  </Link>
                ))}

                {/* Interactive Ecosystem Switcher */}
                <div className="nav-eco">
                  <button
                    type="button"
                    className="nav-eco__trigger"
                    aria-expanded={ecoOpen}
                    onClick={() => setEcoOpen((v) => !v)}
                  >
                    Techo Group
                    <svg width="13" height="13" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M4 6l4 4 4-4" />
                    </svg>
                  </button>

                  <div className={`nav-eco__menu ${ecoOpen ? 'is-open' : ''}`}>
                    <div className="nav-eco__header">Techo Traders (Pvt) Ltd Group</div>
                    {sisterEcosystemLinks.map((eco) => (
                      <a
                        key={eco.id}
                        href={eco.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="nav-eco__item"
                      >
                        <div>
                          <div className="nav-eco__item-title">
                            <span
                              style={{
                                width: 8,
                                height: 8,
                                borderRadius: '50%',
                                background: eco.accent,
                                display: 'inline-block',
                              }}
                            />
                            {eco.name}
                          </div>
                          <div className="nav-eco__item-domain">{eco.domain}</div>
                          <div className="nav-eco__item-role">{eco.badge}</div>
                        </div>
                        <svg
                          width="15"
                          height="15"
                          viewBox="0 0 16 16"
                          fill="none"
                          stroke="var(--blue)"
                          strokeWidth="2"
                          style={{ flexShrink: 0, marginTop: 3 }}
                        >
                          <path d="M4 12L12 4M6 4h6v6" />
                        </svg>
                      </a>
                    ))}
                  </div>
                </div>
              </nav>

              <div className="nav-actions">
                <Link href="/contact" className="btn btn-primary nav-cta nav-cta-desktop">
                  Start a Project
                  <svg className="icon-arrow" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.2">
                    <path d="M3 8h10M9 4l4 4-4 4" />
                  </svg>
                </Link>

                <button
                  type="button"
                  className="nav-burger"
                  onClick={() => setDrawerOpen(true)}
                  aria-label="Open navigation menu"
                  aria-expanded={drawerOpen}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                    <line x1="4" y1="7" x2="20" y2="7" />
                    <line x1="4" y1="12" x2="20" y2="12" />
                    <line x1="4" y1="17" x2="20" y2="17" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Slide-Over Drawer */}
      <aside className={`mobile-drawer ${drawerOpen ? 'is-open' : ''}`} aria-label="Mobile Navigation">
        <div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Link href="/" className="brand-logo">
              <div className="brand-mark">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" />
                  <circle cx="12" cy="12" r="3" fill="currentColor" stroke="none" />
                </svg>
              </div>
              <div>
                <div className="brand-title">TECHO LABS</div>
                <div className="brand-sub">Digital Intelligence</div>
              </div>
            </Link>
            <button
              type="button"
              onClick={() => setDrawerOpen(false)}
              aria-label="Close navigation menu"
              style={{
                width: 36,
                height: 36,
                borderRadius: '50%',
                background: 'var(--bg-subtle)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--ink)',
              }}
            >
              ✕
            </button>
          </div>

          <nav className="mobile-nav-list">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`mobile-nav-link ${pathname === item.href ? 'is-active' : ''}`}
              >
                {item.label}
                <span style={{ fontSize: '0.9rem', color: 'var(--subtle)' }}>→</span>
              </Link>
            ))}
          </nav>

          <div className="mobile-eco-box" style={{ marginTop: '1.5rem' }}>
            <div
              className="mono"
              style={{
                fontSize: '0.66rem',
                fontWeight: 700,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--blue)',
                marginBottom: '0.75rem',
              }}
            >
              Techo Traders (Pvt) Ltd Group
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              {sisterEcosystemLinks.map((eco) => (
                <a
                  key={eco.id}
                  href={eco.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    fontSize: '0.88rem',
                    fontWeight: 700,
                    color: 'var(--ink)',
                  }}
                >
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ width: 8, height: 8, borderRadius: '50%', background: eco.accent }} />
                    {eco.shortName}
                  </span>
                  <span className="mono" style={{ fontSize: '0.68rem', color: 'var(--blue)' }}>
                    {eco.domain} ↗
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
          <Link href="/contact" className="btn btn-primary" style={{ width: '100%' }}>
            Start a Project
          </Link>
          <a
            href={siteConfig.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
            style={{ width: '100%' }}
          >
            WhatsApp: {siteConfig.phone}
          </a>
        </div>
      </aside>

      <div
        className={`mobile-overlay ${drawerOpen ? 'is-open' : ''}`}
        onClick={() => setDrawerOpen(false)}
      />
    </>
  )
}
