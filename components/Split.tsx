import { Fragment, type ElementType } from 'react'

export function Split({ text, as: Tag = 'h2', className = '' }: { text: string; as?: ElementType; className?: string }) {
  let i = 0
  const words = text.split(' ')
  return (
    <Tag data-rise className={`split ${className}`} aria-label={text}>
      {words.map((word, w) => (
        <Fragment key={w}>
          <span aria-hidden className="inline-block whitespace-nowrap">
            {[...word].map((ch, c) => <span key={c} className="ch" style={{ '--i': i++ } as React.CSSProperties}>{ch}</span>)}
          </span>
          {w < words.length - 1 && ' '}
        </Fragment>
      ))}
    </Tag>
  )
}
