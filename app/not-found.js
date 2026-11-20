import Link from 'next/link'

export const metadata = {
  title: '404 — Page Not Found',
  robots: { index: false, follow: true },
}

export default function NotFound() {
  return (
    <section
      className="hero-2027"
      style={{
        minHeight: '82vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
      }}
    >
      <div className="hero-grid-bg" />
      <div className="container" style={{ position: 'relative', zIndex: 2, maxWidth: '640px' }}>
        <div
          style={{
            fontFamily: 'var(--font-display), sans-serif',
            fontWeight: 800,
            fontSize: 'clamp(5.5rem, 15vw, 10rem)',
            lineHeight: 0.95,
            letterSpacing: '-0.05em',
            color: 'rgba(10, 79, 212, 0.12)',
            marginBottom: '0.5rem',
          }}
        >
          404
        </div>
        <div className="eyebrow" style={{ marginBottom: '1rem' }}>
          Route Not Found
        </div>
        <h1 className="section-heading" style={{ marginBottom: '1rem' }}>
          This Endpoint Doesn’t <em>Exist Yet.</em>
        </h1>
        <p style={{ color: 'var(--muted)', fontSize: '1rem', lineHeight: 1.75, marginBottom: '2rem' }}>
          The URL may have moved or been mistyped. Explore our capabilities, inspect our 24+ live client platforms, or jump straight to our desk.
        </p>
        <div style={{ display: 'flex', gap: '0.85rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/" className="btn btn-primary">
            Back to Home
          </Link>
          <Link href="/portfolio" className="btn btn-secondary">
            View 24+ Live Projects
          </Link>
          <Link href="/contact" className="btn btn-secondary">
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  )
}
