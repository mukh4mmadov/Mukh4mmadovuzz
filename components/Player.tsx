'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import type { VideoMeta } from '@/content/types'
import { ui } from '@/content/ui'
import { LANGS, type Lang } from '@/lib/i18n'

const NAMES: Record<Lang, string> = { en: 'English', uz: 'O‘zbekcha', ru: 'Русский' }
const clock = (s: number) => `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, '0')}`

export function Player({ video, lang, title }: { video: VideoMeta; lang: Lang; title: string }) {
  const ref = useRef<HTMLVideoElement>(null)
  const list = useRef<HTMLOListElement>(null)
  const [time, setTime] = useState(0)
  const [started, setStarted] = useState(false)
  const [q, setQ] = useState('')
  const [sub, setSub] = useState<Lang | 'off'>('en')
  const dir = video.src.slice(0, video.src.lastIndexOf('/'))

  const seek = (t: number) => {
    const v = ref.current
    if (!v) return
    v.currentTime = t + 0.02
    setStarted(true)
    v.play().catch(() => {})
  }

  useEffect(() => {
    const onHash = () => {
      const m = /^#t=(\d+)/.exec(window.location.hash)
      if (m && ref.current) ref.current.currentTime = Number(m[1])
    }
    onHash()
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])

  useEffect(() => {
    const v = ref.current
    if (!v) return
    let native = false
    const apply = () => {
      const full = native || document.fullscreenElement === v
      for (const t of Array.from(v.textTracks)) t.mode = full && t.language === sub ? 'showing' : 'disabled'
    }
    const on = () => { native = true; apply() }
    const off = () => { native = false; apply() }
    apply()
    document.addEventListener('fullscreenchange', apply)
    v.addEventListener('webkitbeginfullscreen', on)
    v.addEventListener('webkitendfullscreen', off)
    return () => {
      document.removeEventListener('fullscreenchange', apply)
      v.removeEventListener('webkitbeginfullscreen', on)
      v.removeEventListener('webkitendfullscreen', off)
    }
  }, [sub])

  const needle = q.trim().toLowerCase()
  const cues = useMemo(
    () => video.cues.map((c, i) => ({ ...c, i })).filter((c) => c.text[lang].toLowerCase().includes(needle)),
    [video.cues, needle, lang],
  )
  const now = video.cues.findIndex((c) => time >= c.s && time < c.e)

  useEffect(() => {
    if (needle || !started) return
    const box = list.current
    const el = box?.querySelector<HTMLElement>('[data-now]')
    if (box && el) box.scrollTo({ top: el.offsetTop - box.clientHeight / 3, behavior: 'smooth' })
  }, [now, needle, started])

  return (
    <div>
      <div>
        <div className="relative overflow-hidden rounded-xl border border-line bg-black shadow-[0_40px_120px_-50px_rgba(0,0,0,.9)]">
          <video
            ref={ref}
            src={video.src}
            poster={video.poster}
            controls={started}
            playsInline
            preload="metadata"
            aria-label={title}
            onPlay={() => setStarted(true)}
            onTimeUpdate={(e) => setTime(e.currentTarget.currentTime)}
            className="aspect-video w-full"
          >
            {LANGS.map((l) => (
              <track key={l} kind="subtitles" src={`${dir}/${l}.vtt`} srcLang={l} label={NAMES[l]} />
            ))}
          </video>
          {!started && (
            <button onClick={() => seek(0)} aria-label={`${ui.play[lang]}: ${title}`} className="group absolute inset-0 grid place-items-center bg-black/20 transition-colors hover:bg-black/5">
              <span className="grid h-20 w-20 place-items-center rounded-full bg-cream text-ink transition-transform group-hover:scale-110">
                <svg width="24" height="28" viewBox="0 0 12 14" className="ml-1" aria-hidden><path d="M0 0l12 7-12 7z" fill="currentColor" /></svg>
              </span>
            </button>
          )}
        </div>
        {sub !== 'off' && (
          <p lang={sub} className="mt-3 min-h-[3.4em] text-lg leading-snug text-cream text-pretty">
            {started && now >= 0 ? video.cues[now].text[sub] : ''}
          </p>
        )}
        <div className="mt-1 flex flex-wrap items-center gap-x-1 text-sm" role="group" aria-label={ui.subtitles[lang]}>
          <span className="mr-2 text-mute">{ui.subtitles[lang]}</span>
          {[...LANGS, 'off' as const].map((l) => (
            <button key={l} onClick={() => setSub(l)} aria-pressed={sub === l} className={`min-h-11 rounded px-3 transition-colors ${sub === l ? 'text-saffron underline underline-offset-4' : 'text-cream hover:text-saffron'}`}>
              {l === 'off' ? ui.off[lang] : NAMES[l]}
            </button>
          ))}
        </div>
        <ol className="scroller -mx-1 mt-3 flex gap-2 overflow-x-auto px-1 pb-2" aria-label={ui.chapters[lang]} data-lenis-prevent>
          {video.chapters.map((c, i) => {
            const on = time >= c.t && time < (video.chapters[i + 1]?.t ?? video.duration)
            return (
              <li key={c.t}>
                <button onClick={() => seek(c.t)} aria-current={on && started ? 'true' : undefined} className={`min-h-11 whitespace-nowrap rounded-full border px-4 py-2 text-left text-sm transition-colors ${on && started ? 'border-saffron text-saffron' : 'border-line hover:border-cream'}`}>
                  <span className="mr-2 font-mono text-mute tabular-nums">{clock(c.t)}</span>{c.title[lang]}
                </button>
              </li>
            )
          })}
        </ol>
      </div>
      <details className="group mt-4 rounded-xl border border-line bg-ink-2 open:pb-2">
        <summary className="flex min-h-12 cursor-pointer list-none items-center justify-between px-4 font-medium">
          {ui.transcript[lang]}
          <span aria-hidden className="text-mute transition-transform group-open:rotate-45">+</span>
        </summary>
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder={ui.transcriptSearch[lang]}
          aria-label={ui.transcriptSearch[lang]}
          className="mx-4 mt-3 h-11 rounded border border-line bg-ink px-3 placeholder:text-mute"
        />
        <ol ref={list} className="scroller relative mt-3 max-h-[380px] overflow-y-auto px-2 pb-3" data-lenis-prevent>
          {cues.map((c) => (
            <li key={c.i} data-now={c.i === now ? '' : undefined}>
              <button onClick={() => seek(c.s)} className={`flex w-full gap-3 rounded px-2 py-2 text-left text-[.95rem] transition-colors hover:bg-ink-3 ${c.i === now ? 'bg-ink-3 text-saffron' : ''}`}>
                <span className="pt-px font-mono text-xs leading-6 text-mute tabular-nums">{clock(c.s)}</span>
                <span>{c.text[lang]}</span>
              </button>
            </li>
          ))}
          {cues.length === 0 && <li className="px-2 py-4 text-mute">{ui.transcriptNone[lang]}</li>}
        </ol>
      </details>
    </div>
  )
}
