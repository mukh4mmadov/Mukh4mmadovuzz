import type { L, Lang } from '@/lib/i18n'

export type SysNode = { id: string; x: number; y: number; label: string; desc: L; tone?: 'client' | 'rules' | 'store' | 'ext' }
export type Flow = { id: string; label: L; path: string[]; steps: L[] }
export type Excerpt = { file: string; note: L; code: string }
export type Metric = { value: string; label: L; source: L }
export type Project = {
  slug: string
  kind: 'production' | 'lab'
  name: string
  status: L
  tagline: L
  problem: L
  approach: L[]
  limits: L[]
  stack: string[]
  live?: string
  repo?: string
  demo?: string
  metrics: Metric[]
  nodes?: SysNode[]
  edges?: [string, string][]
  flows?: Flow[]
  excerpts?: Excerpt[]
  accent: string
}
export type VideoMeta = {
  src: string
  preview: string
  poster: string
  duration: number
  chapters: { t: number; title: L }[]
  cues: { s: number; e: number; text: Record<Lang, string> }[]
}
