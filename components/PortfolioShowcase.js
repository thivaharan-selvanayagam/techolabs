'use client'
import { useState, useMemo } from 'react'
import { portfolioItems } from '../data/index'

const CATEGORY_THEMES = {
  'MedTech / AI': { accent: '#06B6D4', darkBg: '#061826' },
  'Jewellery & Luxury': { accent: '#C084FC', darkBg: '#160B24' },
  'Technology / SaaS': { accent: '#3B82F6', darkBg: '#08142C' },
  'Real Estate': { accent: '#0A4FD4', darkBg: '#07152E' },
  Corporate: { accent: '#2563EB', darkBg: '#0A1324' },
  'Hardware & Telecom': { accent: '#10B981', darkBg: '#061E18' },
  Logistics: { accent: '#F97316', darkBg: '#221006' },
  'Digital Agency': { accent: '#8B5CF6', darkBg: '#140C29' },
  'Legal & Immigration': { accent: '#D97706', darkBg: '#1F1506' },
  'Religious / Non-profit': { accent: '#A855F7', darkBg: '#190D26' },
  Entertainment: { accent: '#EC4899', darkBg: '#240A1A' },
  'Sports & Community': { accent: '#10B981', darkBg: '#061E17' },
  Restaurant: { accent: '#EF4444', darkBg: '#240909' },
  Education: { accent: '#14B8A6', darkBg: '#061F1E' },
  Community: { accent: '#059669', darkBg: '#061E16' },
  Media: { accent: '#F59E0B', darkBg: '#211605' },
  Technology: { accent: '#6366F1', darkBg: '#0D102B' },
  'Wellness & HR': { accent: '#14B8A6', darkBg: '#071F1E' },
  'Finance & Admin': { accent: '#3B82F6', darkBg: '#09152B' },
}

export function MotifArtwork({ motif, accent, isDark }) {
  const stroke = isDark ? accent : accent
  const faint = isDark ? 'rgba(255,255,255,0.12)' : 'rgba(15,23,42,0.08)'

  if (motif === 'ai') {
    return (
      <svg viewBox="0 0 320 180" fill="none" className="showcase-svg">
        <circle cx="160" cy="90" r="68" stroke={faint} strokeWidth="1" strokeDasharray="4 4" />
        <circle cx="160" cy="90" r="46" stroke={stroke} strokeOpacity="0.45" strokeWidth="1.5" />
        <circle cx="160" cy="90" r="22" stroke={stroke} strokeWidth="2" />
        <circle cx="160" cy="90" r="5" fill={stroke} />
        <line x1="72" y1="90" x2="248" y2="90" stroke={stroke} strokeOpacity="0.3" strokeWidth="1" />
        <line x1="160" y1="14" x2="160" y2="166" stroke={stroke} strokeOpacity="0.3" strokeWidth="1" />
        <path d="M36 138 Q80 105 114 128 T196 112 T284 130" stroke={stroke} strokeWidth="2" fill="none" />
      </svg>
    )
  }

  if (motif === 'luxury') {
    return (
      <svg viewBox="0 0 320 180" fill="none" className="showcase-svg">
        <polygon points="160,22 224,72 196,154 124,154 96,72" stroke={stroke} strokeWidth="1.6" />
        <polygon points="160,42 204,78 184,138 136,138 116,78" stroke={stroke} strokeOpacity="0.4" strokeWidth="1.2" />
        <line x1="160" y1="22" x2="160" y2="154" stroke={faint} strokeWidth="1" />
        <line x1="96" y1="72" x2="224" y2="72" stroke={stroke} strokeOpacity="0.35" strokeWidth="1" />
        <circle cx="160" cy="72" r="4" fill={stroke} />
      </svg>
    )
  }

  if (motif === 'architecture') {
    return (
      <svg viewBox="0 0 320 180" fill="none" className="showcase-svg">
        <rect x="58" y="64" width="54" height="92" rx="4" stroke={faint} strokeWidth="1.5" />
        <rect x="122" y="34" width="76" height="122" rx="4" stroke={stroke} strokeWidth="1.8" />
        <rect x="208" y="52" width="54" height="104" rx="4" stroke={stroke} strokeOpacity="0.45" strokeWidth="1.5" />
        <line x1="36" y1="156" x2="284" y2="156" stroke={stroke} strokeWidth="1.5" />
        <line x1="142" y1="56" x2="178" y2="56" stroke={stroke} strokeOpacity="0.5" strokeWidth="1.5" />
        <line x1="142" y1="78" x2="178" y2="78" stroke={stroke} strokeOpacity="0.5" strokeWidth="1.5" />
        <line x1="142" y1="100" x2="178" y2="100" stroke={stroke} strokeOpacity="0.5" strokeWidth="1.5" />
      </svg>
    )
  }

  if (motif === 'saas' || motif === 'logistics') {
    return (
      <svg viewBox="0 0 320 180" fill="none" className="showcase-svg">
        <rect x="44" y="32" width="232" height="116" rx="12" stroke={faint} strokeWidth="1.4" />
        <path d="M72 118 L124 74 L178 102 L244 54" stroke={stroke} strokeWidth="2.2" strokeLinecap="round" />
        <circle cx="72" cy="118" r="5" fill={stroke} />
        <circle cx="124" cy="74" r="5" fill={stroke} />
        <circle cx="178" cy="102" r="5" fill={stroke} />
        <circle cx="244" cy="54" r="7" fill={stroke} fillOpacity="0.25" stroke={stroke} strokeWidth="2" />
      </svg>
    )
  }

  if (motif === 'signal' || motif === 'ecosystem') {
    return (
      <svg viewBox="0 0 320 180" fill="none" className="showcase-svg">
        <circle cx="160" cy="90" r="14" fill={stroke} fillOpacity="0.2" stroke={stroke} strokeWidth="2" />
        <circle cx="82" cy="52" r="9" stroke={stroke} strokeWidth="1.6" />
        <circle cx="238" cy="52" r="9" stroke={stroke} strokeWidth="1.6" />
        <circle cx="82" cy="128" r="9" stroke={stroke} strokeOpacity="0.6" strokeWidth="1.6" />
        <circle cx="238" cy="128" r="9" stroke={stroke} strokeOpacity="0.6" strokeWidth="1.6" />
        <line x1="91" y1="56" x2="147" y2="83" stroke={stroke} strokeOpacity="0.5" strokeWidth="1.4" />
        <line x1="229" y1="56" x2="173" y2="83" stroke={stroke} strokeOpacity="0.5" strokeWidth="1.4" />
        <line x1="91" y1="124" x2="147" y2="97" stroke={faint} strokeWidth="1.4" />
        <line x1="229" y1="124" x2="173" y2="97" stroke={faint} strokeWidth="1.4" />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 320 180" fill="none" className="showcase-svg">
      <rect x="48" y="34" width="224" height="112" rx="10" stroke={faint} strokeWidth="1.4" />
      <rect x="68" y="96" width="28" height="34" rx="4" fill={stroke} fillOpacity="0.25" stroke={stroke} strokeWidth="1.4" />
      <rect x="112" y="78" width="28" height="52" rx="4" fill={stroke} fillOpacity="0.4" stroke={stroke} strokeWidth="1.4" />
      <rect x="156" y="60" width="28" height="70" rx="4" fill={stroke} fillOpacity="0.6" stroke={stroke} strokeWidth="1.4" />
      <rect x="200" y="46" width="28" height="84" rx="4" fill={stroke} stroke={stroke} strokeWidth="1.4" />
    </svg>
  )
}

export default function PortfolioShowcase() {
  const [viewMode, setViewMode] = useState('bento') // 'bento' | 'ledger'
  const [activeRegion, setActiveRegion] = useState('All')
  const [activeCategory, setActiveCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')

  const regions = useMemo(
    () => ['All', ...new Set(portfolioItems.map((p) => p.region))],
    []
  )

  const categories = useMemo(
    () => ['All', ...new Set(portfolioItems.map((p) => p.category))],
    []
  )

  const filtered = useMemo(() => {
    const q = searchQuery.trim().toLowerCase()
    return portfolioItems.filter((item) => {
      const matchRegion = activeRegion === 'All' || item.region === activeRegion
      const matchCat = activeCategory === 'All' || item.category === activeCategory
      const matchSearch =
        !q ||
        item.title.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q) ||
        item.location.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        item.tags.some((t) => t.toLowerCase().includes(q))
      return matchRegion && matchCat && matchSearch
    })
  }, [activeRegion, activeCategory, searchQuery])

  const hasFilters =
    activeRegion !== 'All' || activeCategory !== 'All' || searchQuery.trim() !== ''

  return (
    <div>
      {/* 2027 Interactive Filter & View Command Dock */}
      <div className="showcase-dock">
        <div className="showcase-dock__top">
          <div className="portfolio-search-wrap">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input
              type="search"
              className="portfolio-search-input"
              placeholder="Search by client, sector, country, or capability..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Search portfolio deployments"
            />
          </div>

          <div className="showcase-region-tabs" role="group" aria-label="Filter by region">
            {regions.map((region) => (
              <button
                key={region}
                type="button"
                className={`region-chip ${activeRegion === region ? 'is-active' : ''}`}
                onClick={() => setActiveRegion(region)}
              >
                {region === 'All' ? 'All Regions' : region}
              </button>
            ))}
          </div>

          <div className="view-toggle" role="group" aria-label="Switch portfolio layout">
            <button
              type="button"
              className={`view-toggle__btn ${viewMode === 'bento' ? 'is-active' : ''}`}
              onClick={() => setViewMode('bento')}
            >
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8">
                <rect x="1.5" y="1.5" width="5.5" height="5.5" rx="1" />
                <rect x="9" y="1.5" width="5.5" height="5.5" rx="1" />
                <rect x="1.5" y="9" width="5.5" height="5.5" rx="1" />
                <rect x="9" y="9" width="5.5" height="5.5" rx="1" />
              </svg>
              Bento Stage
            </button>
            <button
              type="button"
              className={`view-toggle__btn ${viewMode === 'ledger' ? 'is-active' : ''}`}
              onClick={() => setViewMode('ledger')}
            >
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8">
                <line x1="2" y1="4" x2="14" y2="4" />
                <line x1="2" y1="8" x2="14" y2="8" />
                <line x1="2" y1="12" x2="14" y2="12" />
              </svg>
              Index Ledger
            </button>
          </div>
        </div>

        <div className="showcase-dock__bottom">
          <div className="filter-pills">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                className={`filter-pill ${activeCategory === cat ? 'is-active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <span className="portfolio-count-badge">
              {filtered.length} / {portfolioItems.length} Live
            </span>
            {hasFilters && (
              <button
                type="button"
                className="filter-pill"
                onClick={() => {
                  setActiveRegion('All')
                  setActiveCategory('All')
                  setSearchQuery('')
                }}
              >
                Clear ✕
              </button>
            )}
          </div>
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="showcase-empty">
          <h3>No matching deployments</h3>
          <p>Reset your region or sector filter to explore all 24 live client platforms.</p>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => {
              setActiveRegion('All')
              setActiveCategory('All')
              setSearchQuery('')
            }}
          >
            Show All 24 Deployments
          </button>
        </div>
      ) : viewMode === 'ledger' ? (
        /* ── MODE B: INTERACTIVE STUDIO LEDGER ── */
        <div className="studio-ledger" role="list">
          <div className="studio-ledger__head mono">
            <span>IDX</span>
            <span>CLIENT &amp; SUMMARY</span>
            <span>SECTOR</span>
            <span>MARKET</span>
            <span style={{ textAlign: 'right' }}>LIVE ENDPOINT</span>
          </div>
          {filtered.map((item) => {
            const theme = CATEGORY_THEMES[item.category] || { accent: '#0A4FD4' }
            const cleanUrl = item.url.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '')

            return (
              <a
                key={item.id}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="studio-ledger__row"
                role="listitem"
                style={{ '--row-accent': theme.accent }}
              >
                <span className="studio-ledger__idx mono">{item.index}</span>
                <div className="studio-ledger__main">
                  <div className="studio-ledger__title">
                    {item.title}
                    {item.ecosystem && <span className="ledger-eco-pill">Techo Group</span>}
                  </div>
                  <div className="studio-ledger__desc">{item.description}</div>
                </div>
                <span className="studio-ledger__cat" style={{ color: theme.accent }}>
                  {item.category}
                </span>
                <span className="studio-ledger__loc mono">
                  {item.countryCode} · {item.location}
                </span>
                <span className="studio-ledger__link mono">
                  {cleanUrl}
                  <svg width="13" height="13" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.2">
                    <path d="M4 12L12 4M6 4h6v6" />
                  </svg>
                </span>
              </a>
            )
          })}
        </div>
      ) : (
        /* ── MODE A: ASYMMETRIC EDITORIAL BENTO STAGE ── */
        <div className="showcase-bento">
          {filtered.map((item, idx) => {
            const theme = CATEGORY_THEMES[item.category] || {
              accent: '#0A4FD4',
              darkBg: '#07142B',
            }
            const cleanUrl = item.url.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '')

            // Asymmetric visual cadence: spotlight items or every 5th card gets wide/dark treatment when unfiltered
            const isWide = !hasFilters && (idx === 0 || idx === 3 || idx === 5)
            const isDark =
              item.spotlight || idx % 4 === 0 || item.ecosystem

            return (
              <article
                key={item.id}
                className={`showcase-card ${isWide ? 'showcase-card--wide' : ''} ${
                  isDark ? 'showcase-card--dark' : ''
                }`}
                style={{
                  '--card-accent': theme.accent,
                  '--card-dark-bg': theme.darkBg,
                }}
              >
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="showcase-card__inner"
                  aria-label={`Launch ${item.title} (${cleanUrl})`}
                >
                  {/* Top Bar: Index + Country + Metric */}
                  <div className="showcase-card__meta">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <span className="showcase-idx mono">/{item.index}</span>
                      <span className="showcase-sector" style={{ color: isDark ? '#FFFFFF' : theme.accent }}>
                        {item.category}
                      </span>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                      {item.ecosystem && <span className="showcase-group-chip">Techo Group</span>}
                      <span className="showcase-country mono">
                        {item.countryCode} · {item.location}
                      </span>
                    </div>
                  </div>

                  {/* Bespoke Vector UI Stage */}
                  <div className="showcase-stage">
                    <MotifArtwork motif={item.motif} accent={theme.accent} isDark={isDark} />
                    <div className="showcase-metric-pill mono">{item.metric}</div>
                  </div>

                  {/* Editorial Narrative & Launch Footer */}
                  <div className="showcase-content">
                    <div>
                      <h3 className="showcase-title">{item.title}</h3>
                      <p className="showcase-desc">{item.description}</p>
                    </div>

                    <div>
                      <div className="showcase-tags">
                        {item.tags.map((tag) => (
                          <span key={tag} className="showcase-tag">
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="showcase-foot">
                        <span className="mono showcase-domain">{cleanUrl}</span>
                        <span className="showcase-cta">
                          Launch Live
                          <svg width="13" height="13" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.2">
                            <path d="M4 12L12 4M6 4h6v6" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                </a>
              </article>
            )
          })}
        </div>
      )}
    </div>
  )
}
