'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { ui } from '@/content/ui'
import { LANGS, type Lang } from '@/lib/i18n'
import { CommandMenu } from './CommandMenu'

export function Header({ lang }: { lang: Lang }) {
  const pathname = usePathname()
  const [solid, setSolid] = useState(false)
  const [menu, setMenu] = useState(false)
  const rest = pathname.replace(/^\/(en|uz|ru)/, '')

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 60)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    const onKey = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault()
        setMenu((v) => !v)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('keydown', onKey)
    }
  }, [])

  const links = [
    [`/${lang}#work`, ui.navWork[lang]],
    [`/${lang}#lab`, ui.navLab[lang]],
    [`/${lang}#about`, ui.navAbout[lang]],
    [`/${lang}#contact`, ui.navContact[lang]],
  ]

  return (
    <>
      <header className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${solid ? 'bg-ink/90 backdrop-blur-md' : ''}`}>
        <div className="wrap flex h-16 items-center gap-6">
          <Link href={`/${lang}`} className="font-display text-sm font-semibold whitespace-nowrap">
            Ozodbek<span className="hidden sm:inline"> Muhammadov</span>
          </Link>
          <nav className="ml-auto hidden gap-7 text-[.95rem] lg:flex">
            {links.map(([href, label]) => (
              <Link key={href} href={href} className="transition-colors hover:text-saffron">{label}</Link>
            ))}
          </nav>
          <button
            onClick={() => setMenu(true)}
            className="ml-auto flex h-10 items-center gap-3 rounded border border-[#626a86] bg-ink/50 px-3 text-sm transition-colors hover:border-cream lg:ml-0"
          >
            {ui.search[lang]}
            <kbd className="hidden font-mono text-xs text-mute sm:inline">Ctrl K</kbd>
          </button>
          <div className="flex text-sm" role="group" aria-label={ui.language[lang]}>
            {LANGS.map((l) => (
              <Link
                key={l}
                href={`/${l}${rest}`}
                hrefLang={l}
                scroll={false}
                aria-current={l === lang ? 'true' : undefined}
                className={`grid h-10 w-9 place-items-center font-medium uppercase transition-colors ${l === lang ? 'text-saffron' : 'text-cream/75 hover:text-cream'}`}
              >
                {l}
              </Link>
            ))}
          </div>
        </div>
      </header>
      <CommandMenu lang={lang} open={menu} onClose={() => setMenu(false)} />
    </>
  )
}
