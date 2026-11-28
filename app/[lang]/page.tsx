import { notFound } from 'next/navigation'
import { Card } from '@/components/Card'
import { CopyEmail } from '@/components/CopyEmail'
import { Hero } from '@/components/Hero'
import { Split } from '@/components/Split'
import { projects } from '@/content/projects'
import { ui } from '@/content/ui'
import { ageOn, videoOf } from '@/lib/data'
import { isLang } from '@/lib/i18n'

export const revalidate = 3600
const EMAIL = 'muhammadovozodbek1119@gmail.com'

export default async function Home({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  if (!isLang(lang)) notFound()
  const production = projects.filter((p) => p.kind === 'production')
  const lab = projects.filter((p) => p.kind === 'lab')

  return (
    <>
      <Hero lang={lang} age={ageOn()} stops={projects.map((project) => ({ project, video: videoOf(project.slug) }))} />

      <section id="work" className="wrap pt-24 sm:pt-32">
        <div className="mb-14 grid gap-5 lg:grid-cols-[1.3fr_1fr] lg:items-end">
          <Split text={ui.workTitle[lang]} className="text-[clamp(2rem,5vw,4rem)]" />
          <p className="max-w-md text-lg text-mute" data-rise>{ui.workLead[lang]}</p>
        </div>
        <div className="grid gap-x-8 gap-y-16 lg:grid-cols-2">
          {production.map((p) => <Card key={p.slug} project={p} video={videoOf(p.slug)} lang={lang} big />)}
        </div>
      </section>

      <div className="selvedge mt-28" />
      <section id="lab" className="bg-ink-2 py-24 sm:py-32">
        <div className="wrap">
          <div className="grid gap-5 lg:grid-cols-[1.3fr_1fr] lg:items-end">
            <Split text={ui.labTitle[lang]} className="text-[clamp(2rem,5vw,4rem)]" />
            <p className="max-w-md text-lg text-mute" data-rise>{ui.labLead[lang]}</p>
          </div>
          <div className="mt-14 grid gap-x-8 gap-y-14 sm:grid-cols-2">
            {lab.map((p) => <Card key={p.slug} project={p} video={videoOf(p.slug)} lang={lang} />)}
          </div>
        </div>
      </section>
      <div className="selvedge" />

      <section id="about" className="wrap grid gap-14 py-24 sm:py-32 lg:grid-cols-[1.4fr_1fr]">
        <div>
          <Split text={ui.aboutTitle[lang]} className="text-[clamp(2rem,5vw,4rem)]" />
          <div className="mt-8 max-w-2xl space-y-5 text-xl" data-rise>
            <p>{ui.aboutText[lang]}</p>
            <p>{ui.aboutNext[lang]}</p>
          </div>
        </div>
        <div className="space-y-8 lg:pt-4" data-rise>
          <dl className="space-y-5">
            <div><dt className="text-sm text-mute">{ui.education[lang]}</dt><dd className="text-lg">{ui.educationVal[lang]}</dd></div>
            <div><dt className="text-sm text-mute">{ui.english[lang]}</dt><dd className="text-lg">IELTS 6.5</dd></div>
          </dl>
        </div>
      </section>

      <div className="selvedge" />
      <section id="contact" className="wrap py-24 sm:py-32">
        <Split text={ui.contactTitle[lang]} className="text-[clamp(2.2rem,7vw,6rem)]" />
        <p className="mt-5 text-lg text-mute">{ui.contactLead[lang]}</p>
        <a href={`mailto:${EMAIL}`} className="link mt-10 inline-block break-all font-display text-[clamp(1rem,3vw,2.1rem)] font-medium">{EMAIL}</a>
        <div className="mt-10 flex flex-wrap gap-3">
          <CopyEmail email={EMAIL} lang={lang} />
          <a className="btn btn-line" href="https://t.me/mukh4mmadov" target="_blank" rel="noopener">Telegram</a>
          <a className="btn btn-line" href="https://www.linkedin.com/in/ozodbek-muhammadov" target="_blank" rel="noopener">LinkedIn</a>
          <a className="btn btn-line" href="https://github.com/mukh4mmadov" target="_blank" rel="noopener">GitHub</a>
          <a className="btn btn-line" href="tel:+998999151260">+998 99 915 12 60</a>
        </div>
      </section>
    </>
  )
}
