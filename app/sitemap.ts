import type { MetadataRoute } from 'next'
import { projects } from '@/content/projects'
import { LANGS, SITE } from '@/lib/i18n'

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ['', '/demo/opus-support', ...projects.map((p) => `/work/${p.slug}`)]
  return LANGS.flatMap((lang) => paths.map((p) => ({ url: `${SITE}/${lang}${p}` })))
}
