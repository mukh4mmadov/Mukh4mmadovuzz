'use client'

import { useRouter } from 'next/navigation'
import { useEffect, useMemo, useRef, useState } from 'react'
import { projects } from '@/content/projects'
import { demoUi } from '@/content/demo'
import { ui } from '@/content/ui'
import type { Lang } from '@/lib/i18n'
import { Overlay } from './Overlay'

type Item = { label: string; hint: string; href: string }

export function CommandMenu({ lang, open, onClose }: { lang: Lang; open: boolean; onClose: () => void }) {
  const router = useRouter()
  const [q, setQ] = useState('')
  const [at, setAt] = useState(0)
  const list = useRef<HTMLUListElement>(null)

  const items = useMemo<Item[]>(
    () => [
      ...projects.map((p) => ({ label: p.name, hint: p.tagline[lang], href: `/${lang}/work/${p.slug}` })),
      { label: demoUi.title[lang], hint: '', href: `/${lang}/demo/opus-support` },
      { label: ui.navWork[lang], hint: '', href: `/${lang}#work` },
      { label: ui.navLab[lang], hint: '', href: `/${lang}#lab` },
      { label: ui.navAbout[lang], hint: '', href: `/${lang}#about` },
      { label: ui.navContact[lang], hint: '', href: `/${lang}#contact` },
      { label: 'GitHub', hint: 'mukh4mmadov', href: 'https://github.com/mukh4mmadov' },
      { label: 'LinkedIn', hint: 'ozodbek-muhammadov', href: 'https://www.linkedin.com/in/ozodbek-muhammadov' },
      { label: 'Telegram', hint: '@mukh4mmadov', href: 'https://t.me/mukh4mmadov' },
    ],
    [lang],
  )
  const needle = q.trim().toLowerCase()
  const shown = items.filter((i) => `${i.label} ${i.hint}`.toLowerCase().includes(needle))

  useEffect(() => {
    if (!open) return
    setQ('')
    setAt(0)
  }, [open])

  useEffect(() => {
    list.current?.children[at]?.scrollIntoView({ block: 'nearest' })
  }, [at])

  const go = (item?: Item) => {
    if (!item) return
    onClose()
    if (item.href.startsWith('http')) window.open(item.href, '_blank', 'noopener')
    else router.push(item.href)
  }

  return (
    <Overlay open={open} onClose={onClose} label={ui.search[lang]} className="mx-auto mt-[12vh] w-[min(640px,calc(100%-2rem))]">
      <div className="overflow-hidden rounded-lg border border-line bg-ink-2 shadow-2xl">
        <input
          autoFocus
          value={q}
          onChange={(e) => { setQ(e.target.value); setAt(0) }}
          onKeyDown={(e) => {
            if (e.key === 'ArrowDown') { e.preventDefault(); setAt((v) => Math.min(v + 1, shown.length - 1)) }
            if (e.key === 'ArrowUp') { e.preventDefault(); setAt((v) => Math.max(v - 1, 0)) }
            if (e.key === 'Enter') go(shown[at])
          }}
          placeholder={ui.searchHint[lang]}
          aria-label={ui.searchHint[lang]}
          className="h-16 w-full border-b border-line bg-transparent px-5 text-lg outline-none placeholder:text-mute"
        />
        <ul ref={list} className="scroller max-h-[52vh] overflow-y-auto p-2" data-lenis-prevent>
          {shown.map((i, n) => (
            <li key={i.href}>
              <button
                onClick={() => go(i)}
                onMouseMove={() => setAt(n)}
                className={`flex min-h-12 w-full flex-col justify-center rounded px-3 py-2 text-left ${n === at ? 'bg-ink-3' : ''}`}
              >
                <span className="font-medium">{i.label}</span>
                {i.hint && <span className="text-sm text-mute">{i.hint}</span>}
              </button>
            </li>
          ))}
          {shown.length === 0 && <li className="px-3 py-6 text-mute">{ui.noResults[lang]}</li>}
        </ul>
      </div>
    </Overlay>
  )
}
