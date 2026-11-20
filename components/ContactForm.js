'use client'
import { useState } from 'react'
import { siteConfig } from '../data/index'

const SERVICE_OPTIONS = [
  'Next-Gen Web Engineering',
  'SEO / AEO / GEO / AIO Growth',
  'Paid Ads (Google & Meta)',
  'Market & Competitor Research',
  'Full Digital Ecosystem',
]

const BUDGET_OPTIONS = [
  'Under $1,000',
  '$1,000 – $2,500',
  '$2,500 – $5,000',
  '$5,000+',
  'Let’s Discuss',
]

export default function ContactForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: 'Next-Gen Web Engineering',
    budget: '$1,000 – $2,500',
    message: '',
  })
  const [status, setStatus] = useState(null)
  const [errorMsg, setErrorMsg] = useState('')
  const [reference, setReference] = useState('')
  const [loading, setLoading] = useState(false)

  const updateField = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus(null)
    setErrorMsg('')

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus('error')
      setErrorMsg('Please fill in your name, email address, and project brief.')
      return
    }

    setLoading(true)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (!res.ok || !data.ok) {
        setStatus('error')
        setErrorMsg(data.error || 'Something went wrong. Please try again.')
      } else {
        setStatus('success')
        setReference(data.reference || '')
        setForm({
          name: '',
          email: '',
          phone: '',
          company: '',
          service: 'Next-Gen Web Engineering',
          budget: '$1,000 – $2,500',
          message: '',
        })
      }
    } catch {
      setStatus('error')
      setErrorMsg('Network error. Please retry or message our team directly on WhatsApp.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="form-shell">
      <div style={{ marginBottom: '1.5rem' }}>
        <div className="mono" style={{ fontSize: '0.7rem', fontWeight: 700, color: 'var(--blue)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.35rem' }}>
          4-Hour Response SLA
        </div>
        <h2 style={{ fontSize: '1.55rem', fontWeight: 800, color: 'var(--ink)' }}>
          Start Your Project Brief
        </h2>
        <p style={{ fontSize: '0.88rem', color: 'var(--muted)', marginTop: '0.3rem' }}>
          Share your goals below and a senior engineer or strategist will reply with a tailored roadmap within 4 business hours.
        </p>
      </div>

      {status === 'success' && (
        <div className="alert-banner alert-banner--success" role="status">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ flexShrink: 0, marginTop: 2 }}>
            <polyline points="20 6 9 17 4 12" />
          </svg>
          <div>
            <strong>Brief received{reference ? ` (Ref: ${reference})` : ''}!</strong> Our team will review your project and respond within 4 business hours. Need an instant chat?{' '}
            <a href={siteConfig.whatsappUrl} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline', fontWeight: 700 }}>
              Ping us on WhatsApp ↗
            </a>
          </div>
        </div>
      )}

      {status === 'error' && (
        <div className="alert-banner alert-banner--error" role="alert">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" style={{ flexShrink: 0, marginTop: 2 }}>
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
          <span>{errorMsg}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate>
        <div className="field-group">
          <span className="field-label">What can we help you build or grow?</span>
          <div className="choice-pills">
            {SERVICE_OPTIONS.map((opt) => (
              <button
                key={opt}
                type="button"
                className={`choice-pill ${form.service === opt ? 'is-selected' : ''}`}
                onClick={() => setForm((p) => ({ ...p, service: opt }))}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>

        <div className="form-grid-2">
          <div className="field-group">
            <label htmlFor="name" className="field-label">
              Full Name *
            </label>
            <input
              id="name"
              name="name"
              type="text"
              className="field-input"
              placeholder="Alex Perera"
              value={form.name}
              onChange={updateField}
              required
            />
          </div>

          <div className="field-group">
            <label htmlFor="email" className="field-label">
              Work Email *
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="field-input"
              placeholder="alex@company.com"
              value={form.email}
              onChange={updateField}
              required
            />
          </div>
        </div>

        <div className="form-grid-2">
          <div className="field-group">
            <label htmlFor="phone" className="field-label">
              Phone / WhatsApp
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              className="field-input"
              placeholder="+1 / +31 / +94 ..."
              value={form.phone}
              onChange={updateField}
            />
          </div>

          <div className="field-group">
            <label htmlFor="company" className="field-label">
              Company / Current Website
            </label>
            <input
              id="company"
              name="company"
              type="text"
              className="field-input"
              placeholder="Acme Corp · acme.com"
              value={form.company}
              onChange={updateField}
            />
          </div>
        </div>

        <div className="field-group">
          <span className="field-label">Estimated Investment (USD)</span>
          <div className="choice-pills">
            {BUDGET_OPTIONS.map((b) => (
              <button
                key={b}
                type="button"
                className={`choice-pill ${form.budget === b ? 'is-selected' : ''}`}
                onClick={() => setForm((p) => ({ ...p, budget: b }))}
              >
                {b}
              </button>
            ))}
          </div>
        </div>

        <div className="field-group">
          <label htmlFor="message" className="field-label">
            Project Goals, Timeline & Context *
          </label>
          <textarea
            id="message"
            name="message"
            className="field-textarea"
            placeholder="Tell us what you want to launch, redesign, or scale — plus your target launch date..."
            value={form.message}
            onChange={updateField}
            required
          />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginTop: '0.5rem' }}>
          <button
            type="submit"
            className="btn btn-primary"
            disabled={loading}
            style={{ width: '100%', padding: '0.95rem 1.5rem', opacity: loading ? 0.75 : 1 }}
          >
            {loading ? 'Sending Brief...' : 'Submit Project Brief'}
            {!loading && (
              <svg className="icon-arrow" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.2">
                <path d="M3 8h10M9 4l4 4-4 4" />
              </svg>
            )}
          </button>

          <div style={{ textAlign: 'center', fontSize: '0.8rem', color: 'var(--muted)' }}>
            Prefer real-time messaging?{' '}
            <a
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'var(--blue)', fontWeight: 700 }}
            >
              Chat directly on WhatsApp ({siteConfig.phone}) ↗
            </a>
          </div>
        </div>
      </form>
    </div>
  )
}
