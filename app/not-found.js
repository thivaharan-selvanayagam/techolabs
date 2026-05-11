import Link from 'next/link'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

export default function NotFound() {
  return (
    <>
      <Nav />
      <section style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        background: 'var(--white)',
        padding: '2rem',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Dot background */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'radial-gradient(circle, rgba(10,79,212,0.1) 1px, transparent 1px)',
          backgroundSize: '36px 36px',
          pointerEvents: 'none',
        }}/>
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(ellipse 70% 60% at 50% 50%, transparent 30%, white 100%)',
          pointerEvents: 'none',
        }}/>

        <div style={{ position: 'relative', zIndex: 2 }}>
          <div style={{
            fontFamily: 'var(--font-head)', fontWeight: 800,
            fontSize: 'clamp(8rem, 20vw, 16rem)',
            color: 'rgba(10,79,212,0.07)',
            lineHeight: 1, letterSpacing: '-0.06em',
          }}>404</div>

          <div style={{ marginTop: '-2rem' }}>
            <div style={{
              fontFamily: 'var(--font-body)', fontSize: '0.72rem', fontWeight: 600,
              letterSpacing: '0.18em', textTransform: 'uppercase',
              color: 'var(--blue)', marginBottom: '0.75rem',
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.6rem',
            }}>
              <span style={{ display: 'block', width: '24px', height: '2px', background: 'var(--blue)' }}/>
              Page Not Found
              <span style={{ display: 'block', width: '24px', height: '2px', background: 'var(--blue)' }}/>
            </div>

            <h1 style={{
              fontFamily: 'var(--font-head)', fontWeight: 800,
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              color: 'var(--ink)', letterSpacing: '-0.02em',
              lineHeight: 1.1, marginBottom: '1rem',
            }}>
              This Page Doesn't<br /><span style={{ color: 'var(--blue)' }}>Exist Yet.</span>
            </h1>

            <p style={{ color: 'var(--muted)', maxWidth: '380px', margin: '0 auto 2.5rem', fontSize: '0.975rem', lineHeight: 1.7 }}>
              The page you're looking for has moved, been deleted, or never existed. Let's get you back on track.
            </p>

            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/" className="btn btn-primary">
                Back to Home
                <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
              </Link>
              <Link href="/portfolio" className="btn btn-outline">View Portfolio</Link>
              <Link href="/contact" className="btn btn-ghost">Contact Us</Link>
            </div>

            <div style={{ marginTop: '3rem', fontFamily: 'monospace', fontSize: '0.65rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--light-text)' }}>
              Error 404 &nbsp;·&nbsp; Techo Labs &nbsp;·&nbsp; <span style={{ color: 'var(--blue)' }}>labs@techotraders.com.lk</span>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
