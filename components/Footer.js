import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">

          <div className="footer__brand">
            <Link href="/" className="nav__logo" style={{ display: 'inline-flex', marginBottom: '0' }}>
              <div className="nav__logo-mark">
                <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                  <circle cx="10" cy="10" r="8" stroke="white" strokeWidth="1.5"/>
                  <circle cx="10" cy="10" r="3" fill="white"/>
                  <line x1="10" y1="2" x2="10" y2="18" stroke="white" strokeWidth="1.2" opacity="0.5"/>
                  <line x1="2" y1="10" x2="18" y2="10" stroke="white" strokeWidth="1.2" opacity="0.5"/>
                </svg>
              </div>
              <div>
                <div className="nav__logo-name" style={{ color: 'white' }}>TECHO LABS</div>
                <div className="nav__logo-sub">Digital Solutions</div>
              </div>
            </Link>
            <p>Architecting the digital future through web development, digital marketing, and strategic research.</p>
            <p className="footer__parent">
              A <a href="https://www.techotraders.com.lk" target="_blank" rel="noopener">Techo Traders</a> company.
            </p>
          </div>

          <div className="footer__col">
            <h4>Services</h4>
            <ul>
              <li><Link href="/services#web">Web Development</Link></li>
              <li><Link href="/services#marketing">Digital Marketing</Link></li>
              <li><Link href="/services#research">Market Research</Link></li>
            </ul>
          </div>

          <div className="footer__col">
            <h4>Company</h4>
            <ul>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/portfolio">Portfolio</Link></li>
              <li><Link href="/contact">Contact</Link></li>
              <li><a href="https://www.techotraders.com.lk" target="_blank" rel="noopener">Techo Traders</a></li>
            </ul>
          </div>

          <div className="footer__col">
            <h4>Contact</h4>
            <ul>
              <li>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.1 1.18 2 2 0 012 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14z"/></svg>
                +94 76 665 6007
              </li>
              <li>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                labs@techotraders.com.lk
              </li>
              <li>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                Batticaloa, Sri Lanka
              </li>
            </ul>
          </div>

        </div>

        <div className="footer__bottom">
          <p>&copy; {new Date().getFullYear()} Techo Labs (Pvt) Ltd. All rights reserved.</p>
          <div className="footer__bottom-brand">TECHO TRADERS ECOSYSTEM</div>
        </div>
      </div>
    </footer>
  )
}
