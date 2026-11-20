import { siteConfig } from '../data/index'

export default function manifest() {
  return {
    name: `${siteConfig.name} — ${siteConfig.tagline}`,
    short_name: siteConfig.name,
    description:
      'Next-Gen Web Engineering, SEO/AEO/GEO/AIO/SXO Digital Growth & Strategic Market Intelligence by Techo Labs, a division of Techo Traders (Pvt) Ltd.',
    start_url: '/',
    display: 'standalone',
    background_color: '#050914',
    theme_color: '#0A4FD4',
    icons: [
      {
        src: '/icon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
    ],
  }
}
