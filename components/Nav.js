'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [drawerOpen, setDrawerOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setDrawerOpen(false)
  }, [pathname])

  const links = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/about', label: 'About' },
  ]

  return (
    <>
      <header className={`nav ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav__inner">
          <Link href="/" className="nav__logo">
            <div className="nav__logo-mark">
              <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                <circle cx="10" cy="10" r="8" stroke="white" strokeWidth="1.5"/>
                <circle cx="10" cy="10" r="3" fill="white"/>
                <line x1="10" y1="2" x2="10" y2="18" stroke="white" strokeWidth="1.2" opacity="0.5"/>
                <line x1="2" y1="10" x2="18" y2="10" stroke="white" strokeWidth="1.2" opacity="0.5"/>
              </svg>
            </div>
            <div>
              <div className="nav__logo-name">TECHO LABS</div>
              <div className="nav__logo-sub">Digital Solutions</div>
            </div>
          </Link>

          <nav className="nav__links">
            {links.map(l => (
              <Link
                key={l.href}
                href={l.href}
                className={pathname === l.href ? 'active' : ''}
              >
                {l.label}
              </Link>
            ))}
            <Link href="/contact" className="nav__cta">Get a Quote</Link>
          </nav>

          <button
            className="nav__burger"
            onClick={() => setDrawerOpen(true)}
            aria-label="Open menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div className={`nav__drawer ${drawerOpen ? 'open' : ''}`}>
        <button
          className="nav__drawer-close"
          onClick={() => setDrawerOpen(false)}
          aria-label="Close menu"
        >✕</button>
        {links.map(l => (
          <Link key={l.href} href={l.href}>{l.label}</Link>
        ))}
        <Link href="/contact">Get a Quote</Link>
      </div>
      <div
        className={`nav__overlay ${drawerOpen ? 'open' : ''}`}
        onClick={() => setDrawerOpen(false)}
      />
    </>
  )
}
