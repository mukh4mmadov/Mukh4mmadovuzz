import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Architecture } from '@/components/Architecture'
import { Player } from '@/components/Player'
import { Split } from '@/components/Split'
import { bySlug, projects } from '@/content/projects'
import { demoUi } from '@/content/demo'
import { ui } from '@/content/ui'
import { videoOf } from '@/lib/data'
import { isLang, LANGS } from '@/lib/i18n'

export const dynamicParams = false
export const generateStaticParams = () => LANGS.flatMap((lang) => projects.map((p) => ({ lang, slug: p.slug })))

type Params = { params: Promise<{ lang: string; slug: string }> }

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { lang, slug } = await params
  const p = bySlug(slug)
  if (!p || !isLang(lang)) return {}
  const video = videoOf(slug)
  return {
    title: p.name,
    description: p.tagline[lang],
    alternates: { canonical: `/${lang}/work/${slug}`, languages: Object.fromEntries(LANGS.map((l) => [l, `/${l}/work/${slug}`])) },
    openGraph: { title: p.name, description: p.tagline[lang], images: video ? [video.poster] : undefined },
  }
}

export default async function Case({ params }: Params) {
  const { lang, slug } = await params
  const p = bySlug(slug)
  if (!p || !isLang(lang)) notFound()
  const video = videoOf(slug)
  const next = projects[(projects.indexOf(p) + 1) % projects.length]

  return (
    <article className="pt-28 sm:pt-32">
      <header className="wrap">
        <Link href={`/${lang}#${p.kind === 'lab' ? 'lab' : 'work'}`} className="link text-[.95rem]">{ui.back[lang]}</Link>
        <p className="mt-8 font-medium" style={{ color: p.accent }}>{p.status[lang]}</p>
        <h1 className="hero-name mt-3 text-[clamp(2.4rem,8vw,6.5rem)]" aria-label={p.name}>{[...p.name].map((c, i) => <span key={i} aria-hidden className="ch" style={{ '--i': i } as React.CSSProperties}>{c === ' ' ? ' ' : c}</span>)}</h1>
        <div className="mt-6 flex flex-wrap items-end justify-between gap-6">
          <p className="max-w-2xl text-xl sm:text-2xl">{p.tagline[lang]}</p>
          <div className="flex flex-wrap items-center gap-3">
            {p.demo && <Link href={`/${lang}${p.demo}`} className="btn btn-solid">{demoUi.try[lang]}</Link>}
            {p.live && <a href={p.live} target="_blank" rel="noopener" className={`btn ${p.demo ? 'btn-line' : 'btn-solid'}`}>{ui.live[lang]}</a>}
            {p.repo && <a href={p.repo} target="_blank" rel="noopener" className="btn btn-line">{ui.code[lang]}</a>}
          </div>
        </div>
      </header>

      <section className="wrap mt-12">
        {video ? <Player video={video} lang={lang} title={p.name} /> : (
          <p className="rounded-lg border border-line bg-ink-2 px-6 py-16 text-center text-mute">{ui.videoSoon[lang]}</p>
        )}
      </section>


      <section className="wrap mt-24 grid gap-14 lg:grid-cols-[1fr_1.4fr]">
        <div>
          <Split text={ui.problem[lang]} className="text-2xl sm:text-3xl" />
          <p className="mt-5 text-lg">{p.problem[lang]}</p>
        </div>
        <div>
          <Split text={ui.approach[lang]} className="text-2xl sm:text-3xl" />
          <div className="mt-5 space-y-5 text-lg">{p.approach.map((a) => <p key={a.en}>{a[lang]}</p>)}</div>
        </div>
      </section>
      {p.metrics.length > 0 && (
        <section className="wrap mt-24">
          <Split text={ui.measured[lang]} className="text-2xl sm:text-3xl" />
          <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4">
            {p.metrics.map((m) => (
              <div key={m.value + m.label.en} className="flex flex-col" data-rise>
                <dt className="order-2 mt-3">{m.label[lang]}</dt>
                <dd className="order-1 font-display text-[clamp(1.7rem,4vw,3.2rem)] font-semibold leading-none tabular-nums" style={{ color: p.accent }}>{m.value}</dd>
                <dd className="order-3 mt-1 text-sm text-mute">{m.source[lang]}</dd>
              </div>
            ))}
          </dl>
        </section>
      )}

      {p.nodes && (
        <section className="wrap mt-24">
          <Split text={ui.how[lang]} className="text-2xl sm:text-3xl" />
          <div className="mt-4"><Architecture project={p} lang={lang} /></div>
        </section>
      )}

      {p.excerpts && (
        <section className="wrap mt-24">
          <Split text={ui.codeTitle[lang]} className="text-2xl sm:text-3xl" />
          <div className="mt-8 space-y-10">
            {p.excerpts.map((x) => (
              <figure key={x.file + x.code.length} className="grid gap-5 lg:grid-cols-[1fr_1.7fr]" data-rise>
                <figcaption>
                  <p className="text-lg">{x.note[lang]}</p>
                  <p className="mt-2 break-all font-mono text-sm text-mute">{x.file}</p>
                </figcaption>
                <pre className="scroller overflow-x-auto rounded-lg border border-line bg-ink-2 p-5 font-mono text-[.85rem] leading-6" tabIndex={0}><code>{x.code}</code></pre>
              </figure>
            ))}
          </div>
        </section>
      )}

      <section className="wrap mt-24 grid gap-14 lg:grid-cols-[1.4fr_1fr]">
        <div>
          <Split text={ui.limits[lang]} className="text-2xl sm:text-3xl" />
          <div className="mt-5 max-w-2xl space-y-4 text-lg">{p.limits.map((l) => <p key={l.en}>{l[lang]}</p>)}</div>
        </div>
        <div>
          <Split text={ui.stack[lang]} className="text-2xl sm:text-3xl" />
          <p className="mt-5 text-lg">{p.stack.join(', ')}</p>
        </div>
      </section>

      <div className="selvedge mt-28" />
      <Link href={`/${lang}/work/${next.slug}`} className="group block bg-ink-2 py-16 transition-colors hover:bg-ink-3 sm:py-24">
        <span className="wrap block">
          <span className="text-mute">{ui.next[lang]}</span>
          <span className="mt-3 block font-display text-[clamp(2rem,6vw,4.5rem)] font-semibold leading-tight transition-colors group-hover:text-saffron">{next.name}</span>
        </span>
      </Link>
    </article>
  )
}
