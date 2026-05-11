'use client'
import { useState } from 'react'
import { portfolioItems, categories } from '../data/index'

const CATEGORY_COLORS = {
  'Real Estate':        '#0A4FD4',
  'Technology':         '#7C3AED',
  'Corporate':          '#374151',
  'Education':          '#059669',
  'Restaurant':         '#DC2626',
  'MedTech / AI':       '#0891B2',
  'Logistics':          '#D44F0A',
  'Entertainment':      '#DB2777',
  'Community':          '#0AAD6E',
  'Legal & Immigration':'#B45309',
  'Finance & Admin':    '#1D4ED8',
  'Digital Agency':     '#6D28D9',
  'Sports & Community': '#065F46',
  'Media':              '#92400E',
  'Religious / Non-profit': '#7C3AED',
  'Jewellery & Luxury': '#92400E',
  'Technology / SaaS':  '#1E40AF',
  'Wellness & HR':      '#065F46',
  'Hardware & Telecom': '#0AAD6E',
}

export default function PortfolioGrid({ limit }) {
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered = activeCategory === 'All'
    ? portfolioItems
    : portfolioItems.filter(p => p.category === activeCategory)

  const displayed = limit ? filtered.slice(0, limit) : filtered

  // Deduplicate categories that exist in data
  const activeCats = ['All', ...new Set(portfolioItems.map(p => p.category))]

  return (
    <div>
      {/* Filter tabs */}
      <div className="filter-tabs">
        {activeCats.map(cat => (
          <button
            key={cat}
            className={`filter-tab ${activeCategory === cat ? 'active' : ''}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="portfolio-grid">
        {displayed.map((item, i) => {
          const color = CATEGORY_COLORS[item.category] || '#0A4FD4'
          const initials = item.title.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase()
          return (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="portfolio-card reveal"
              data-d={i % 3 === 1 ? '1' : i % 3 === 2 ? '2' : '0'}
              style={{ display: 'block' }}
            >
              <div className="portfolio-card__thumb">
                <div className="portfolio-card__chrome">
                  <div className="portfolio-card__chrome-dots">
                    <span style={{ background: '#FF5F56' }}/>
                    <span style={{ background: '#FEBC2E' }}/>
                    <span style={{ background: '#27C93F' }}/>
                  </div>
                  <div className="portfolio-card__chrome-bar">
                    {item.url.replace('https://', '').replace('http://', '')}
                  </div>
                </div>
                <div className="portfolio-card__thumb-inner">
                  <div
                    className="portfolio-card__thumb-bg"
                    style={{
                      paddingTop: '28px',
                      background: `linear-gradient(135deg, ${color}0A 0%, ${color}18 100%)`,
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'var(--font-head)',
                        fontWeight: 800,
                        fontSize: '4.5rem',
                        color: `${color}22`,
                        letterSpacing: '-0.04em',
                        userSelect: 'none',
                      }}
                    >
                      {initials}
                    </span>
                    {/* Dot grid overlay */}
                    <div style={{
                      position: 'absolute',
                      inset: '28px 0 0 0',
                      backgroundImage: `radial-gradient(circle, ${color}25 1px, transparent 1px)`,
                      backgroundSize: '20px 20px',
                    }}/>
                  </div>
                </div>
                <div className="portfolio-card__overlay">
                  <div className="portfolio-card__visit">
                    Visit Site
                    <svg width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M3 8h10M9 4l4 4-4 4"/>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="portfolio-card__body">
                <div className="portfolio-card__cat" style={{ color }}>
                  {item.category}
                </div>
                <div className="portfolio-card__title">{item.title}</div>
                <div className="portfolio-card__desc">{item.description}</div>
                <div className="portfolio-card__footer">
                  <div className="portfolio-card__tags">
                    {item.tags.map(tag => (
                      <span key={tag} className="portfolio-card__tag" style={{ background: `${color}0D`, color }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="portfolio-card__location">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                    {item.location}
                  </div>
                </div>
              </div>
            </a>
          )
        })}
      </div>
    </div>
  )
}
