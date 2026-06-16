import Link from 'next/link'
import { Layers } from 'lucide-react'

export function Nav() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2 text-xl font-bold tracking-tight text-foreground">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary">
            <Layers className="h-4 w-4 text-primary-foreground" />
          </span>
          BetterStacks
        </Link>
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-muted-foreground">
          <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
          <Link href="/services" className="hover:text-foreground transition-colors">Services</Link>
          <Link href="/products" className="hover:text-foreground transition-colors">Products</Link>
          <Link href="/blog" className="hover:text-foreground transition-colors">Blog</Link>
          <Link href="/about" className="hover:text-foreground transition-colors">About</Link>
        </nav>
        <a
          href="https://betterstacks.ca/book"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-full bg-foreground px-5 py-2 text-sm font-semibold text-background hover:bg-foreground/90 transition-colors"
        >
          Book a call
        </a>
      </div>
    </header>
  )
}
