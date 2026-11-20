import Link from 'next/link'
import { sisterEcosystemLinks, siteConfig } from '../data/index'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer" role="contentinfo">
      <div className="container">
        <div className="footer-grid">
          {/* Column 1: Brand & Status */}
          <div>
            <Link href="/" className="brand-logo" style={{ marginBottom: '1rem' }}>
              <div className="brand-mark">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" />
                  <circle cx="12" cy="12" r="3" fill="currentColor" stroke="none" />
                </svg>
              </div>
              <div>
                <div className="brand-title" style={{ color: '#FFFFFF' }}>
                  TECHO LABS
                </div>
                <div className="brand-sub" style={{ color: '#60A5FA' }}>
                  Digital Intelligence
                </div>
              </div>
            </Link>

            <p style={{ fontSize: '0.88rem', lineHeight: 1.7, maxWidth: '290px', marginBottom: '1.15rem' }}>
              Sub-second Next.js web engineering, unified SEO / AEO / GEO / AIO / SXO search growth, and market intelligence — the digital division of Techo Traders (Pvt) Ltd.
            </p>

            <div
              className="mono"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.45rem',
                padding: '0.32rem 0.75rem',
                borderRadius: '999px',
                background: 'rgba(16, 185, 129, 0.1)',
                border: '1px solid rgba(16, 185, 129, 0.25)',
                color: '#6EE7B7',
                fontSize: '0.68rem',
              }}
            >
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#10B981' }} />
              Systems Optimal · Accepting Q1/Q2 Sprints
            </div>
          </div>

          {/* Column 2: Capabilities */}
          <div>
            <h2 className="footer-col-title">Capabilities</h2>
            <ul className="footer-links">
              <li>
                <Link href="/services#web">Web &amp; Product Engineering</Link>
              </li>
              <li>
                <Link href="/services#marketing">SEO, AEO, GEO &amp; Paid Growth</Link>
              </li>
              <li>
                <Link href="/services#research">Market &amp; Competitor Intelligence</Link>
              </li>
              <li>
                <Link href="/portfolio">24+ Live Platforms</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Studio */}
          <div>
            <h2 className="footer-col-title">Studio</h2>
            <ul className="footer-links">
              <li>
                <Link href="/about">About Techo Labs</Link>
              </li>
              <li>
                <Link href="/portfolio">Global Case Index</Link>
              </li>
              <li>
                <Link href="/contact">Book a Strategy Call</Link>
              </li>
              <li>
                <a href="/llms.txt" target="_blank" rel="noopener noreferrer">
                  AI Knowledge Index (llms.txt)
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Techo Ecosystem */}
          <div>
            <h2 className="footer-col-title">Techo Ecosystem</h2>
            <ul className="footer-links">
              {sisterEcosystemLinks.map((eco) => (
                <li key={eco.id} style={{ alignItems: 'flex-start' }}>
                  <a
                    href={eco.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ flexDirection: 'column', alignItems: 'flex-start', gap: '2px' }}
                  >
                    <span
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.35rem',
                        color: '#FFFFFF',
                        fontWeight: 600,
                      }}
                    >
                      <span style={{ width: 7, height: 7, borderRadius: '50%', background: eco.accent }} />
                      {eco.shortName}
                      <svg width="11" height="11" viewBox="0 0 16 16" fill="none" stroke="#60A5FA" strokeWidth="2">
                        <path d="M4 12L12 4M6 4h6v6" />
                      </svg>
                    </span>
                    <span className="footer-eco-domain">{eco.domain}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Direct Contact */}
          <div>
            <h2 className="footer-col-title">Global Desk</h2>
            <ul className="footer-links">
              <li>
                <a href={`tel:${siteConfig.phoneRaw}`}>{siteConfig.phone}</a>
              </li>
              <li>
                <a href={siteConfig.whatsappUrl} target="_blank" rel="noopener noreferrer">
                  WhatsApp Direct Desk ↗
                </a>
              </li>
              <li>
                <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
              </li>
              <li style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.82rem' }}>
                {siteConfig.location.city}, {siteConfig.location.country}
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            &copy; {siteConfig.foundedYear}–{year} <strong>Techo Labs</strong> · A division of{' '}
            <a
              href={siteConfig.parentUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#93C5FD', fontWeight: 600 }}
            >
              Techo Traders (Pvt) Ltd
            </a>
            . All rights reserved.
          </p>
          <div className="mono" style={{ fontSize: '0.7rem', letterSpacing: '0.1em', color: '#60A5FA' }}>
            SEO · AEO · GEO · AIO · SXO ENGINEERED
          </div>
        </div>
      </div>
    </footer>
  )
}
