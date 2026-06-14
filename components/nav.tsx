import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function Nav() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="text-xl font-bold tracking-tight text-foreground">
          Better Stacks
        </Link>
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-muted-foreground">
          <Link href="/about" className="hover:text-foreground transition-colors">About</Link>
          <Link href="/services" className="hover:text-foreground transition-colors">Services</Link>
          <Link href="/products" className="hover:text-foreground transition-colors">Products</Link>
          <Link href="/blog" className="hover:text-foreground transition-colors">Blog</Link>
        </nav>
        <Button asChild>
          <a href="https://betterstacks.ca/book" target="_blank" rel="noopener noreferrer">
            Book a Call
          </a>
        </Button>
      </div>
    </header>
  )
}
