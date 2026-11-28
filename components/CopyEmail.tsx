'use client'

import { useState } from 'react'
import { ui } from '@/content/ui'
import type { Lang } from '@/lib/i18n'

export function CopyEmail({ email, lang }: { email: string; lang: Lang }) {
  const [done, setDone] = useState(false)
  return (
    <button
      className="btn btn-line"
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(email)
          setDone(true)
          setTimeout(() => setDone(false), 1800)
        } catch {
          window.location.href = `mailto:${email}`
        }
      }}
    >
      <span aria-live="polite">{done ? ui.copied[lang] : ui.copy[lang]}</span>
    </button>
  )
}
