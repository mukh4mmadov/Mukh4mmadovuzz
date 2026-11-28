'use client'

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import type { Project, VideoMeta } from '@/content/types'
import { ui } from '@/content/ui'
import type { Lang } from '@/lib/i18n'
import { Overlay } from './Overlay'

const STILL_MS = 9000

export function Tour({ lang, stops }: { lang: Lang; stops: { project: Project; video?: VideoMeta }[] }) {
  const [open, setOpen] = useState(false)
  const [at, setAt] = useState(0)
  const bar = useRef<HTMLSpanElement>(null)
  const { project, video } = stops[at]

  useEffect(() => {
    if (!open) return
    const run = bar.current?.animate([{ transform: 'scaleX(0)' }, { transform: 'scaleX(1)' }], { duration: STILL_MS, fill: 'forwards' })
    const timer = setTimeout(() => (at < stops.length - 1 ? setAt(at + 1) : setOpen(false)), STILL_MS)
    return () => { clearTimeout(timer); run?.cancel() }
  }, [open, at, stops.length])

  const step = (d: number) => setAt((v) => Math.min(stops.length - 1, Math.max(0, v + d)))

  return (
    <>
      <button className="btn btn-solid" onClick={() => { setAt(0); setOpen(true) }}>
        <svg width="12" height="14" viewBox="0 0 12 14" aria-hidden><path d="M0 0l12 7-12 7z" fill="currentColor" /></svg>
        {ui.heroTour[lang]}
      </button>
      <Overlay open={open} onClose={() => setOpen(false)} label={ui.heroTour[lang]} className="relative h-dvh w-screen overflow-hidden bg-ink">
        <div
          className="contents"
          onKeyDown={(e) => { if (e.key === 'ArrowRight') step(1); if (e.key === 'ArrowLeft') step(-1) }}
        >
          {video ? (
            <video key={project.slug} src={video.preview} poster={video.poster} autoPlay muted loop playsInline className="absolute inset-0 h-full w-full object-cover opacity-75" />
          ) : (
            <div className="absolute inset-0" style={{ background: `radial-gradient(60% 80% at 70% 30%, ${project.accent}55, transparent)` }} />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/45 to-ink/60" />
          <div className="wrap absolute inset-x-0 top-5 flex gap-2">
            {stops.map((s, i) => (
              <span key={s.project.slug} className="h-1 flex-1 overflow-hidden rounded bg-cream/25">
                <span ref={i === at ? bar : undefined} className="block h-full origin-left bg-cream" style={{ transform: i < at ? 'scaleX(1)' : 'scaleX(0)' }} />
              </span>
            ))}
          </div>
          <button onClick={() => setOpen(false)} className="btn btn-line absolute right-5 top-10">{ui.close[lang]}</button>
          <div className="wrap absolute inset-x-0 bottom-10">
            <p className="mb-3 text-sm font-medium" style={{ color: project.accent }}>{project.status[lang]}</p>
            <h2 className="text-4xl sm:text-6xl">{project.name}</h2>
            <p className="mt-4 max-w-2xl text-lg sm:text-xl">{project.tagline[lang]}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href={`/${lang}/work/${project.slug}`} onClick={() => setOpen(false)} className="btn btn-solid">{ui.open[lang]}</Link>
              <button className="btn btn-line" onClick={() => step(-1)} disabled={at === 0}>{ui.prev[lang]}</button>
              <button className="btn btn-line" onClick={() => step(1)} disabled={at === stops.length - 1}>{ui.nextStep[lang]}</button>
            </div>
          </div>
        </div>
      </Overlay>
    </>
  )
}
