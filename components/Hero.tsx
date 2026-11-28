'use client'

import dynamic from 'next/dynamic'
import type { Project, VideoMeta } from '@/content/types'
import { ui } from '@/content/ui'
import type { Lang } from '@/lib/i18n'
import { Tour } from './Tour'

const IkatCloth = dynamic(() => import('./IkatCloth'), { ssr: false })

export function Hero({ lang, age, stops }: { lang: Lang; age: number; stops: { project: Project; video?: VideoMeta }[] }) {
  return (
    <section className="hero relative h-[150svh] motion-reduce:h-svh">
      <div className="sticky top-0 h-svh min-h-[600px] overflow-clip">
      <div className="absolute inset-0 bg-[radial-gradient(90%_70%_at_60%_35%,#5b1630,#0b0d15_70%)]" />
      <IkatCloth />
      <div className="absolute inset-0 bg-[linear-gradient(to_top,#0b0d15_4%,rgb(11_13_21/.82)_34%,rgb(11_13_21/.1)_68%,rgb(11_13_21/.5))] hero-shade" />
      <div className="hero-text wrap pointer-events-none relative flex h-full flex-col justify-end pb-10 sm:pb-14">
        <p className="mb-4 font-medium">{ui.heroFacts[lang].replace('{age}', String(age))}</p>
        <h1 className="hero-name text-[clamp(2.15rem,8.6vw,8rem)] leading-[.98]" aria-label="Ozodbek Muhammadov">
          {['Ozodbek', 'Muhammadov'].map((w, r) => (
            <span key={w} aria-hidden className="block">{[...w].map((c, i) => <span key={i} className="ch" style={{ '--i': i + r * 7 } as React.CSSProperties}>{c}</span>)}</span>
          ))}
        </h1>
        <div className="mt-6 grid gap-6 lg:grid-cols-[1.3fr_1fr] lg:items-end">
          <p className="max-w-xl text-lg sm:text-xl">{ui.heroLead[lang]}</p>
          <div className="pointer-events-auto flex flex-wrap gap-3 lg:justify-end">
            <Tour lang={lang} stops={stops} />
            <a href="#work" className="btn btn-line">{ui.heroWork[lang]}</a>
          </div>
        </div>
      </div>
      </div>
    </section>
  )
}
