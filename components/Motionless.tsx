'use client'

import Lenis from 'lenis'
import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

export function Motionless() {
  const pathname = usePathname()

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const lenis = new Lenis({ lerp: 0.12, anchors: { offset: -72 }, autoRaf: true })
    const pause = () => lenis.stop()
    const resume = () => lenis.start()
    window.addEventListener('overlay:open', pause)
    window.addEventListener('overlay:close', resume)
    return () => {
      window.removeEventListener('overlay:open', pause)
      window.removeEventListener('overlay:close', resume)
      lenis.destroy()
    }
  }, [])

  useEffect(() => {
    const items = document.querySelectorAll<HTMLElement>('[data-rise]')
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue
          e.target.classList.add('in')
          io.unobserve(e.target)
        }
      },
      { rootMargin: '0px 0px -8% 0px' },
    )
    items.forEach((el) => {
      if (el.getBoundingClientRect().top < window.innerHeight) el.classList.add('in')
      else io.observe(el)
    })
    document.documentElement.classList.add('ready')
    return () => io.disconnect()
  }, [pathname])

  return null
}
