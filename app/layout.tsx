import type { Metadata } from 'next'
import localFont from 'next/font/local'

import { Breadcrumbs } from '@/components/Breadcrumbs'

import './globals.css'

const Geist = localFont({
  src: '../public/fonts/GeistVariableVF.woff2',
  variable: '--font-geist'
})

const GeistMono = localFont({
  src: '../public/fonts/GeistMonoVariableVF.woff2',
  variable: '--font-geist-mono'
})

let metadataBase: URL
if (process.env.VERCEL_URL) metadataBase = new URL('https://mdx-next-14.vercel.app')
else metadataBase = new URL(`http://localhost:${process.env.PORT || 3000}`)

export const metadata: Metadata = {
  metadataBase,
  title: 'MDX on Next.js 14',
  description: 'An ergonomic, performant MDX setup for your Next.js 14 app, fit with YAML frontmatter parsing, dynamic metadata & OG image generation, and static site generation'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${Geist.variable} ${GeistMono.variable}`}
    >
      <body>
        <Breadcrumbs />
        {children}
      </body>
    </html>
  )
}
