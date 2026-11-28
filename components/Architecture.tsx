'use client'

import { useEffect, useState } from 'react'
import type { Project } from '@/content/types'
import { ui } from '@/content/ui'
import type { Lang } from '@/lib/i18n'

const W = 168
const H = 62
const TONE = { client: '#efe8d8', rules: '#f0a63a', store: '#2fb7a8', ext: '#e2485d' } as const
const STEP_MS = 3200

export function Architecture({ project, lang }: { project: Project; lang: Lang }) {
  const nodes = project.nodes ?? []
  const edges = project.edges ?? []
  const flows = project.flows ?? []
  const [flow, setFlow] = useState<string | null>(null)
  const [step, setStep] = useState(0)
  const [picked, setPicked] = useState(nodes[0]?.id)
  const active = flows.find((f) => f.id === flow)

  useEffect(() => {
    if (!active) return
    const t = setTimeout(() => (step < active.path.length - 1 ? setStep(step + 1) : setFlow(null)), STEP_MS)
    return () => clearTimeout(t)
  }, [active, step])

  const at = (id: string) => nodes.find((n) => n.id === id)!
  const current = active ? active.path[step] : picked
  const node = at(current)

  const path = (a: string, b: string) => {
    const [s, e] = [at(a), at(b)]
    if (Math.abs(s.x - e.x) < W) {
      const dir = e.y > s.y ? 1 : -1
      return `M${s.x} ${s.y + (dir * H) / 2} L${e.x} ${e.y - (dir * H) / 2}`
    }
    const dir = e.x > s.x ? 1 : -1
    const [x1, x2] = [s.x + (dir * W) / 2, e.x - (dir * W) / 2]
    const mid = (x1 + x2) / 2
    return `M${x1} ${s.y} C${mid} ${s.y} ${mid} ${e.y} ${x2} ${e.y}`
  }
  const joins = (a: string, b: string, i: number) =>
    active && ((active.path[i] === a && active.path[i + 1] === b) || (active.path[i] === b && active.path[i + 1] === a))
  const passed = (a: string, b: string) => active?.path.some((_, i) => i < step && joins(a, b, i))
  const maxY = Math.max(...nodes.map((n) => n.y)) + H

  return (
    <div>
      <p className="max-w-2xl text-mute">{ui.howHint[lang]}</p>
      <div className="mt-5 flex flex-wrap gap-3">
        {flows.map((f) => (
          <button key={f.id} className={`btn ${flow === f.id ? 'btn-solid' : 'btn-line'}`} onClick={() => { setFlow(f.id); setStep(0) }}>
            {f.label[lang]}
          </button>
        ))}
      </div>
      <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_320px]">
        <div className="scroller overflow-x-auto rounded-lg border border-line bg-ink-2">
          <svg viewBox={`0 0 840 ${maxY}`} className="block w-full min-w-[640px]" role="group" aria-label={ui.how[lang]}>
            {edges.map(([a, b]) => (
              <g key={a + b}>
                <path d={path(a, b)} fill="none" stroke="#3a415c" strokeWidth="2" />
                {passed(a, b) && (
                  <path d={path(a, b)} fill="none" stroke="#f0a63a" strokeWidth="3" strokeDasharray="7 7" className="march" />
                )}
              </g>
            ))}
            {nodes.map((n) => {
              const on = n.id === current
              const tone = TONE[n.tone ?? 'rules']
              return (
                <g
                  key={n.id}
                  role="button"
                  tabIndex={0}
                  aria-pressed={on}
                  className="cursor-pointer"
                  onClick={() => { setFlow(null); setPicked(n.id) }}
                  onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setFlow(null); setPicked(n.id) } }}
                >
                  <rect x={n.x - W / 2} y={n.y - H / 2} width={W} height={H} rx="5" fill={on ? tone : '#0b0d15'} stroke={tone} strokeWidth="2" style={{ transition: 'fill .25s' }} />
                  <text x={n.x} y={n.y + 5} textAnchor="middle" fontSize="16" fontWeight="600" fill={on ? '#0b0d15' : '#efe8d8'} style={{ pointerEvents: 'none' }}>{n.label}</text>
                </g>
              )
            })}
          </svg>
        </div>
        <div aria-live="polite" className="lg:pt-2">
          <h3 className="text-xl">{node.label}</h3>
          <p className="mt-3">{active ? active.steps[step][lang] : node.desc[lang]}</p>
          {active && (
            <ol className="mt-5 flex gap-2" aria-hidden>
              {active.path.map((id, i) => <li key={id} className={`h-1 flex-1 rounded ${i <= step ? 'bg-saffron' : 'bg-line'}`} />)}
            </ol>
          )}
        </div>
      </div>
    </div>
  )
}
