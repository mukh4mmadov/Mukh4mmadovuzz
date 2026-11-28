import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { OpusDemo } from '@/components/OpusDemo'
import { demoUi } from '@/content/demo'
import { isLang, LANGS } from '@/lib/i18n'

type Params = { params: Promise<{ lang: string }> }

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { lang } = await params
  if (!isLang(lang)) return {}
  return {
    title: demoUi.title[lang],
    description: demoUi.lead[lang],
    alternates: { canonical: `/${lang}/demo/opus-support`, languages: Object.fromEntries(LANGS.map((l) => [l, `/${l}/demo/opus-support`])) },
  }
}

export default async function Demo({ params }: Params) {
  const { lang } = await params
  if (!isLang(lang)) notFound()
  return (
    <div className="wrap pb-24 pt-28 sm:pt-32">
      <Link href={`/${lang}/work/opus-support`} className="link text-[.95rem]">OPUS Support</Link>
      <h1 className="mt-6 text-[clamp(2.1rem,6vw,4.8rem)]">{demoUi.title[lang]}</h1>
      <p className="mt-5 max-w-3xl text-lg sm:text-xl">{demoUi.lead[lang]}</p>
      <div className="mt-10"><OpusDemo lang={lang} /></div>
      <p className="mt-10 max-w-3xl text-mute">{demoUi.invented[lang]}</p>
    </div>
  )
}
