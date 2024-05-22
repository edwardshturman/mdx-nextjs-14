'use client'

import Link from 'next/link'
import type { Route } from 'next'
import { usePathname } from 'next/navigation'

import styles from './Breadcrumbs.module.css'

export function Breadcrumbs() {
  const path = usePathname()
  if (path === '/') return null
  const parts = path.split('/').filter(Boolean)

  let breadcrumbs = []
  for (let i = 0; i < parts.length - 1; i++) {
    const part = parts[i]
    const href = '/' + parts.slice(0, i + 1).join('/')
    breadcrumbs.push(
      <Link key={i} href={`${href}` as Route}>
        {part}
      </Link>
    )

    if (i < parts.length - 1) breadcrumbs.push(' / ')
  }

  return (
    <p id={styles.breadcrumbs}>
      <Link href="/">MDX on Next.js 14</Link> / {breadcrumbs}
    </p>
  )
}
