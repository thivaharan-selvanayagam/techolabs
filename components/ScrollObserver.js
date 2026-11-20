'use client'
import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function ScrollObserver() {
  const pathname = usePathname()

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) {
      document.documentElement.classList.remove('js-ready')
      return
    }

    document.documentElement.classList.add('js-ready')

    const revealEls = document.querySelectorAll('.reveal')
    const revealObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            revealObs.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.08, rootMargin: '0px 0px -30px 0px' }
    )

    revealEls.forEach((el) => revealObs.observe(el))

    return () => {
      revealObs.disconnect()
    }
  }, [pathname])

  return null
}
