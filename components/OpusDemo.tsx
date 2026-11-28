'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { accounts, demoUi, type Role } from '@/content/demo'
import type { Lang } from '@/lib/i18n'

type State = 'idle' | 'boot' | 'migrations' | 'people' | 'ready' | 'failed'
const ROLES = accounts.map((a) => a.role)

export function OpusDemo({ lang }: { lang: Lang }) {
  const [state, setState] = useState<State>('idle')
  const [info, setInfo] = useState({ ms: 0, migrations: 0 })
  const [boot, setBoot] = useState('')
  const [left, setLeft] = useState<Role>('student')
  const [right, setRight] = useState<Role>('support')
  const [split, setSplit] = useState(false)
  const [opened, setOpened] = useState<Role[]>([])
  const engine = useRef<Worker | null>(null)
  const frames = useRef<Partial<Record<Role, HTMLIFrameElement | null>>>({})
  const asked = useRef(new Map<number, { role: Role; id: number }>())
  const seq = useRef(0)
  const bootId = useRef('')

  const send = (role: Role, message: object) =>
    frames.current[role]?.contentWindow?.postMessage({ demo: 'opus', ...message }, location.origin)

  const start = useCallback(() => {
    engine.current?.terminate()
    asked.current.clear()
    setOpened([])
    setState('boot')
    bootId.current = crypto.randomUUID()
    setBoot(bootId.current)
    const worker = new Worker('/demo/opus/engine.js', { type: 'module' })
    engine.current = worker
    worker.onerror = () => setState('failed')
    worker.onmessage = ({ data }) => {
      if (data.type === 'progress') setState(data.step)
      if (data.type === 'failed') setState('failed')
      if (data.type === 'ready') { setInfo(data); setState('ready') }
      if (data.type === 'reply') {
        const to = asked.current.get(data.id)
        asked.current.delete(data.id)
        if (!to) return
        send(to.role, { id: to.id, status: data.status, body: data.body })
        if (data.wrote) for (const r of ROLES) if (r !== to.role) send(r, { changed: true })
      }
    }
  }, [])

  useEffect(() => {
    const onMessage = (e: MessageEvent) => {
      if (e.origin !== location.origin || e.data?.demo !== 'opus') return
      const role = ROLES.find((r) => frames.current[r]?.contentWindow === e.source)
      if (!role) return
      if (e.data.hello) send(role, { id: e.data.id, boot: bootId.current })
      else if (e.data.req) {
        const id = ++seq.current
        asked.current.set(id, { role, id: e.data.id })
        engine.current?.postMessage({ id, req: e.data.req })
      }
    }
    window.addEventListener('message', onMessage)
    return () => {
      window.removeEventListener('message', onMessage)
      engine.current?.terminate()
    }
  }, [])

  useEffect(() => {
    if (state !== 'ready') return
    setOpened((have) => [...new Set([...have, left, ...(split ? [right] : [])])])
  }, [state, left, right, split])

  const pickLeft = (role: Role) => {
    if (split && role === right) setRight(left)
    setLeft(role)
  }
  const pickRight = (role: Role) => {
    if (role === left) setLeft(right)
    setRight(role)
  }

  const label = (role: Role) => accounts.find((a) => a.role === role)!.label[lang]
  const steps: State[] = ['boot', 'migrations', 'people']
  const stepText: Record<string, string> = { boot: demoUi.booting[lang], migrations: demoUi.migrating[lang], people: demoUi.people[lang] }

  if (state !== 'ready') {
    return (
      <div className="grid min-h-[340px] place-items-center rounded-lg border border-line bg-ink-2 p-8 text-center">
        {state === 'idle' && (
          <div>
            <button className="btn btn-solid" onClick={start}>{demoUi.start[lang]}</button>
            <p className="mt-4 text-mute">{demoUi.size[lang]}</p>
          </div>
        )}
        {state === 'failed' && (
          <div>
            <p className="max-w-md">{demoUi.failed[lang]}</p>
            <button className="btn btn-line mt-6" onClick={start}>{demoUi.retry[lang]}</button>
          </div>
        )}
        {steps.includes(state) && (
          <ol className="w-full max-w-sm space-y-4 text-left" aria-live="polite">
            {steps.map((s, i) => {
              const now = steps.indexOf(state)
              return (
                <li key={s} className={i > now ? 'text-mute' : ''}>
                  {stepText[s]}
                  <span className="mt-2 block h-1 overflow-hidden rounded bg-line">
                    <span className={`block h-full bg-saffron ${i < now ? 'w-full' : i === now ? 'demo-run w-1/3' : 'w-0'}`} />
                  </span>
                </li>
              )
            })}
          </ol>
        )}
      </div>
    )
  }

  const tabs = (value: Role, pick: (r: Role) => void, name: string) => (
    <div role="group" aria-label={name} className="flex flex-wrap gap-2">
      {ROLES.map((r) => (
        <button
          key={r}
          aria-pressed={value === r}
          onClick={() => pick(r)}
          className={`min-h-11 rounded border px-4 text-[.95rem] font-medium transition-colors ${value === r ? 'border-saffron bg-saffron text-ink' : 'border-[#626a86] hover:border-cream'}`}
        >
          {label(r)}
        </button>
      ))}
    </div>
  )

  const tip = accounts.find((a) => a.role === left)!

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-4">
        {tabs(left, pickLeft, demoUi.screen[lang])}
        {split && <div className="hidden lg:block">{tabs(right, pickRight, demoUi.second[lang])}</div>}
        <div className="flex gap-2">
          <button className="btn btn-line hidden lg:inline-flex" onClick={() => setSplit(!split)}>{split ? demoUi.single[lang] : demoUi.split[lang]}</button>
          <button className="btn btn-line" onClick={start}>{demoUi.reset[lang]}</button>
        </div>
      </div>
      <div className="mt-5 flex flex-col gap-4 lg:flex-row">
        {ROLES.map((r) => {
          const shown = r === left || (split && r === right)
          return (
            <div
              key={r}
              className={`min-w-0 overflow-hidden rounded-lg border border-line bg-white ${r === 'admin' ? 'flex-[2]' : 'flex-1'} ${shown ? (r !== left ? 'hidden lg:block' : 'block') : 'hidden'} ${split && r === left ? 'lg:order-first' : ''}`}
            >
              {opened.includes(r) && (
                <iframe
                  key={boot}
                  ref={(el) => { frames.current[r] = el }}
                  src={`/demo/opus/app/${r}/`}
                  title={`OPUS Support: ${label(r)}`}
                  className="block h-[78svh] min-h-[560px] w-full"
                />
              )}
            </div>
          )
        })}
      </div>
      <div className="mt-8 grid gap-8 lg:grid-cols-[1.4fr_1fr]">
        <div>
          <h2 className="text-2xl">{demoUi.tasks[lang]}</h2>
          <ul className="mt-4 space-y-3 text-lg">
            {tip.tasks.map((x) => <li key={x.en}>{x[lang]}</li>)}
          </ul>
        </div>
        <div className="space-y-3">
          <p className="font-mono text-[.95rem]">{demoUi.account[lang].replace('{l}', tip.login).replace('{p}', tip.password)}</p>
          <p className="text-mute">{demoUi.signedIn[lang]}</p>
          <p className="text-mute">{demoUi.ready[lang].replace('{n}', String(info.migrations)).replace('{s}', (info.ms / 1000).toFixed(1))}</p>
        </div>
      </div>
    </div>
  )
}
