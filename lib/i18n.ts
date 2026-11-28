export const LANGS = ['en', 'uz', 'ru'] as const
export type Lang = (typeof LANGS)[number]
export type L = Record<Lang, string>
export const isLang = (v: string): v is Lang => (LANGS as readonly string[]).includes(v)
export const SITE = 'https://mukh4mmadovuzz.vercel.app'