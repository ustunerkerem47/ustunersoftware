import { useId } from 'react'

export function Mark({ className, size = 28 }) {
  const id = useId().replace(/:/g, '')
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 120 120" aria-hidden="true">
      <defs>
        <mask id={`m${id}`}>
          <rect width="120" height="120" fill="#fff" />
          <path d="M38 46 V68 A22 22 0 0 0 82 68 V46" fill="none" stroke="#000" strokeWidth="16" />
          <rect x="30" y="22" width="16" height="16" fill="#000" />
          <rect x="74" y="22" width="16" height="16" fill="#000" />
        </mask>
      </defs>
      <rect width="120" height="120" rx="28" fill="currentColor" mask={`url(#m${id})`} />
      <rect x="74" y="22" width="16" height="16" fill="#C9B07A" />
    </svg>
  )
}

export function Wordmark() {
  return (
    <span className="wordmark">
      <Mark size={26} />
      <span className="wordmark-text">
        <span>ÜSTÜNER</span>
        <small>SOFTWARE</small>
      </span>
    </span>
  )
}
