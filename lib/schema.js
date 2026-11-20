import { siteConfig, ecosystemLinks, services, portfolioItems } from '../data/index'

export function getRootSchema() {
  const orgId = `${siteConfig.url}/#organization`
  const parentId = `${siteConfig.parentUrl}#organization`
  const websiteId = `${siteConfig.url}/#website`

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': parentId,
        name: siteConfig.parentName,
        legalName: siteConfig.parentName,
        url: siteConfig.parentUrl,
        subOrganization: [
          { '@id': orgId },
          {
            '@type': 'Organization',
            name: 'Techo Connect',
            url: 'https://www.connect.techotraders.com.lk/',
          },
          {
            '@type': 'Organization',
            name: 'Techo Xpress',
            url: 'https://www.express.techotraders.com.lk/',
          },
        ],
      },
      {
        '@type': ['Organization', 'ProfessionalService'],
        '@id': orgId,
        name: siteConfig.name,
        url: siteConfig.url,
        description:
          'Techo Labs is the digital engineering, AI search optimization (SEO, AEO, GEO, AIO, SXO), digital marketing, and market intelligence division of Techo Traders (Pvt) Ltd, serving clients across 8+ countries.',
        foundingDate: String(siteConfig.foundedYear),
        email: siteConfig.email,
        telephone: siteConfig.phoneRaw,
        priceRange: '$$',
        parentOrganization: { '@id': parentId },
        address: {
          '@type': 'PostalAddress',
          addressLocality: siteConfig.location.city,
          addressRegion: siteConfig.location.region,
          addressCountry: siteConfig.location.countryCode,
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: siteConfig.location.lat,
          longitude: siteConfig.location.lng,
        },
        areaServed: siteConfig.countriesServed.map((country) => ({
          '@type': 'Country',
          name: country,
        })),
        sameAs: ecosystemLinks
          .filter((item) => !item.isCurrent)
          .map((item) => item.url),
        knowsAbout: [
          'Next.js Web Development',
          'React Server Component Architecture',
          'Search Engine Optimization (SEO)',
          'Answer Engine Optimization (AEO)',
          'Generative Engine Optimization (GEO)',
          'AI Optimization (AIO)',
          'Search Experience Optimization (SXO)',
          'Performance Digital Marketing',
          'Market Research and Competitor Intelligence',
          'UI/UX Design Systems',
        ],
        contactPoint: [
          {
            '@type': 'ContactPoint',
            telephone: siteConfig.phoneRaw,
            email: siteConfig.email,
            contactType: 'sales',
            availableLanguage: ['English', 'Tamil'],
            areaServed: siteConfig.countriesServed,
          },
        ],
      },
      {
        '@type': 'WebSite',
        '@id': websiteId,
        url: siteConfig.url,
        name: `${siteConfig.name} — ${siteConfig.tagline}`,
        publisher: { '@id': orgId },
        inLanguage: 'en',
        speakable: {
          '@type': 'SpeakableSpecification',
          cssSelector: ['h1', '.hero-lead', '.direct-answer'],
        },
      },
    ],
  }
}

export function getBreadcrumbSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${siteConfig.url}${item.url}`,
    })),
  }
}

export function getFaqSchema(faqList) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqList.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }
}

export function getServicesSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Techo Labs Digital Engineering, AI Search & Research Services',
    itemListElement: services.map((service, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      item: {
        '@type': 'Service',
        '@id': `${siteConfig.url}/services#${service.id}`,
        name: service.title,
        description: service.summary,
        provider: {
          '@type': 'Organization',
          '@id': `${siteConfig.url}/#organization`,
          name: siteConfig.name,
        },
        areaServed: siteConfig.countriesServed,
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: `${service.title} Deliverables`,
          itemListElement: service.features.map((feat) => ({
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: feat,
            },
          })),
        },
      },
    })),
  }
}

export function getPortfolioSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Techo Labs Portfolio — 24+ Global Web, SaaS & Commerce Deployments',
    url: `${siteConfig.url}/portfolio`,
    description:
      'Verified showcase of 24+ live websites, SaaS platforms, and digital ecosystems engineered by Techo Labs across Canada, Netherlands, UK, France, UAE, and Sri Lanka.',
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: portfolioItems.length,
      itemListElement: portfolioItems.map((project, idx) => ({
        '@type': 'ListItem',
        position: idx + 1,
        item: {
          '@type': 'CreativeWork',
          name: project.title,
          url: project.url,
          genre: project.category,
          description: project.description,
          creator: {
            '@type': 'Organization',
            '@id': `${siteConfig.url}/#organization`,
            name: siteConfig.name,
          },
          locationCreated: {
            '@type': 'Country',
            name: project.location,
          },
        },
      })),
    },
  }
}
