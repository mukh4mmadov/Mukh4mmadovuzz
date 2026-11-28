'use client'

import { useEffect, useRef, type ReactNode } from 'react'

export function Overlay({ open, onClose, label, className = '', children }: {
  open: boolean
  onClose: () => void
  label: string
  className?: string
  children: ReactNode
}) {
  const ref = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    const d = ref.current
    if (!d || !open) return
    if (!d.open) d.showModal()
    window.dispatchEvent(new Event('overlay:open'))
    document.documentElement.style.overflow = 'hidden'
    return () => {
      d.close()
      window.dispatchEvent(new Event('overlay:close'))
      document.documentElement.style.overflow = ''
    }
  }, [open])

  return (
    <dialog
      ref={ref}
      aria-label={label}
      onCancel={(e) => { e.preventDefault(); onClose() }}
      onMouseDown={(e) => { if (e.target === e.currentTarget) onClose() }}
      className="m-0 h-dvh max-h-none w-screen max-w-none bg-transparent p-0 text-cream backdrop:bg-black/70 backdrop:backdrop-blur-sm"
    >
      {open && (
        <div className={className} style={{ animation: 'overlay-in .28s cubic-bezier(.16,1,.3,1)' }}>
          {children}
        </div>
      )}
    </dialog>
  )
}
