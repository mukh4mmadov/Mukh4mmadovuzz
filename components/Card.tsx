'use client'

import Link from 'next/link'
import { useEffect, useRef } from 'react'
import type { Project, VideoMeta } from '@/content/types'
import { demoUi } from '@/content/demo'
import { ui } from '@/content/ui'
import type { Lang } from '@/lib/i18n'

const clock = (s: number) => `${Math.floor(s / 60)}:${String(Math.round(s % 60)).padStart(2, '0')}`

export function Card({ project: p, video, lang, big = false }: { project: Project; video?: VideoMeta; lang: Lang; big?: boolean }) {
  const ref = useRef<HTMLVideoElement>(null)
  const href = `/${lang}/work/${p.slug}`

  useEffect(() => {
    const v = ref.current
    if (!v || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    if (window.matchMedia('(hover: hover)').matches) return
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) v.play().catch(() => {}); else v.pause() }, { threshold: 0.6 })
    io.observe(v)
    return () => io.disconnect()
  }, [])

  const play = () => { if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) ref.current?.play().catch(() => {}) }
  const stop = () => { const v = ref.current; if (v) { v.pause(); v.currentTime = 0 } }

  return (
    <article data-rise className="card group" style={{ '--accent': p.accent } as React.CSSProperties} onMouseEnter={play} onMouseLeave={stop}>
      <Link href={href} className="block" aria-label={p.name}>
        <div className="card-media relative aspect-[16/10] overflow-hidden rounded-xl border border-line bg-ink-3">
          <video ref={ref} src={`/videos/${p.slug}/card.mp4`} poster={`/videos/${p.slug}/card.jpg`} muted loop playsInline preload="none" className="h-full w-full object-cover object-top transition-transform duration-[900ms] ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-[1.04]" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
          {video && (
            <span className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full bg-ink/85 px-3 py-1.5 text-sm font-medium backdrop-blur">
              <svg width="10" height="12" viewBox="0 0 12 14" aria-hidden><path d="M0 0l12 7-12 7z" fill="currentColor" /></svg>
              {ui.watch[lang]} · {clock(video.duration)}
            </span>
          )}
          <span className="card-line absolute inset-x-0 bottom-0 h-1" />
        </div>
      </Link>
      <div className="mt-5">
        <p className="text-sm font-medium" style={{ color: p.accent }}>{p.status[lang]}</p>
        <h3 className={`mt-2 ${big ? 'text-[clamp(1.8rem,3.6vw,3rem)]' : 'text-2xl'}`}>
          <Link href={href} className="transition-colors hover:text-saffron">{p.name}</Link>
        </h3>
        <p className={`mt-3 max-w-xl ${big ? 'text-lg' : ''} text-cream/90`}>{p.tagline[lang]}</p>
        {big && (
          <div className="mt-5 flex flex-wrap gap-3">
            <Link href={href} className="btn btn-solid">{video ? ui.watch[lang] : ui.open[lang]}</Link>
            {p.demo && <Link href={`/${lang}${p.demo}`} className="btn btn-line">{demoUi.try[lang]}</Link>}
            {p.live && <a href={p.live} target="_blank" rel="noopener" className="btn btn-line">{ui.live[lang]}</a>}
            {p.repo && <a href={p.repo} target="_blank" rel="noopener" className="btn btn-line">{ui.code[lang]}</a>}
          </div>
        )}
      </div>
    </article>
  )
}
