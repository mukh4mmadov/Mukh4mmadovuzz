import type { Metadata, Viewport } from 'next'
import { notFound } from 'next/navigation'
import type { ReactNode } from 'react'
import '../globals.css'
import { Motionless } from '@/components/Motionless'
import { Header } from '@/components/Header'
import { ui } from '@/content/ui'
import { isLang, LANGS, SITE } from '@/lib/i18n'

export const dynamicParams = false
export const generateStaticParams = () => LANGS.map((lang) => ({ lang }))
export const viewport: Viewport = { themeColor: '#0b0d15' }

type Params = { params: Promise<{ lang: string }> }

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { lang } = await params
  if (!isLang(lang)) return {}
  return {
    metadataBase: new URL(SITE),
    title: { default: ui.title[lang], template: '%s | Ozodbek Muhammadov' },
    description: ui.metaDesc[lang],
    alternates: { canonical: `/${lang}`, languages: { en: '/en', uz: '/uz', ru: '/ru', 'x-default': '/en' } },
    openGraph: { type: 'website', images: ['/og.jpg'], title: ui.title[lang], description: ui.metaDesc[lang], url: `/${lang}` },
    twitter: { card: 'summary_large_image' },
  }
}

export default async function Layout({ children, params }: Params & { children: ReactNode }) {
  const { lang } = await params
  if (!isLang(lang)) notFound()
  return (
    <html lang={lang}>
      <body>
        <a href="#main" className="btn btn-solid fixed left-4 top-4 z-[100] -translate-y-24 focus:translate-y-0">{ui.skip[lang]}</a>
        <Motionless />
        <Header lang={lang} />
        <main id="main">{children}</main>
      </body>
    </html>
  )
}
