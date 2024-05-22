import Link from 'next/link'

export default function Home() {
  return (
    <>
      <h1>MDX on Next.js 14</h1>
      <p>
        An ergonomic, performant MDX setup for your Next.js 14 app, fit with YAML frontmatter parsing, dynamic metadata &amp; OG image generation, and static site generation
      </p>
      <nav>
        <ul>
          <li>
            <Link href={"/hello-world"}>Hello World</Link>
          </li>
          <li>
            <Link href={"/features"}>Features</Link>
          </li>
          <li>
            <Link href={"/next-steps"}>Next Steps</Link>
          </li>
        </ul>
      </nav>
    </>
  )
}
