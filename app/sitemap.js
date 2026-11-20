import { siteConfig } from '../data/index'

export default function sitemap() {
  const now = new Date()
  const routes = [
    { path: '', priority: 1.0, changeFrequency: 'weekly' },
    { path: '/services', priority: 0.95, changeFrequency: 'weekly' },
    { path: '/portfolio', priority: 0.9, changeFrequency: 'weekly' },
    { path: '/about', priority: 0.85, changeFrequency: 'monthly' },
    { path: '/contact', priority: 0.9, changeFrequency: 'monthly' },
    { path: '/llms.txt', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/llms-full.txt', priority: 0.7, changeFrequency: 'monthly' },
  ]

  return routes.map((route) => ({
    url: `${siteConfig.url}${route.path}`,
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }))
}
