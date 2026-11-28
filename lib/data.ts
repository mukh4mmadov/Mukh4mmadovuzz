import type { VideoMeta } from '@/content/types'
import videos from '@/content/videos.json'

export const videoOf = (slug: string) => (videos as unknown as Record<string, VideoMeta>)[slug]

export function ageOn(now = new Date()) {
  const passed = now.getUTCMonth() > 10 || (now.getUTCMonth() === 10 && now.getUTCDate() >= 19)
  return now.getUTCFullYear() - 2007 - (passed ? 0 : 1)
}

export type Push = { name: string; url: string; date: string }

export async function recentPushes(): Promise<Push[]> {
  try {
    const res = await fetch('https://api.github.com/users/mukh4mmadov/repos?sort=pushed&per_page=12', {
      next: { revalidate: 3600 },
      signal: AbortSignal.timeout(6000),
    })
    if (!res.ok) return []
    const repos = (await res.json()) as { name: string; html_url: string; pushed_at: string; fork: boolean; size: number }[]
    return repos
      .filter((r) => !r.fork && r.size > 0)
      .slice(0, 4)
      .map((r) => ({ name: r.name, url: r.html_url, date: r.pushed_at }))
  } catch {
    return []
  }
}
