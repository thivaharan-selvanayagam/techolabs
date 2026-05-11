'use client'
import { useEffect, useRef } from 'react'

export function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add('visible')
            obs.unobserve(e.target)
          }
        })
      },
      { threshold: 0.1 }
    )
    els.forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])
}

export function useCounter() {
  useEffect(() => {
    const els = document.querySelectorAll('[data-count]')
    els.forEach(el => {
      const target = parseFloat(el.dataset.count)
      const suffix = el.dataset.suffix || ''
      let started = false
      const obs = new IntersectionObserver(([entry]) => {
        if (!entry.isIntersecting || started) return
        started = true
        obs.disconnect()
        const dur = 1800
        let startTime = null
        function step(ts) {
          if (!startTime) startTime = ts
          const p = Math.min((ts - startTime) / dur, 1)
          const eased = 1 - Math.pow(1 - p, 3)
          el.textContent = Math.floor(target * eased) + suffix
          if (p < 1) requestAnimationFrame(step)
          else el.textContent = target + suffix
        }
        requestAnimationFrame(step)
      }, { threshold: 0.5 })
      obs.observe(el)
    })
  }, [])
}
