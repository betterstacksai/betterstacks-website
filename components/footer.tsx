import Link from 'next/link'
import { Layers } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-mint border-t border-border/40">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-3">
          {/* Logo + tagline */}
          <div>
            <Link href="/" className="flex items-center gap-2 text-base font-bold text-foreground">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary">
                <Layers className="h-3.5 w-3.5 text-primary-foreground" />
              </span>
              BetterStacks
            </Link>
            <p className="mt-3 max-w-xs text-sm text-muted-foreground leading-relaxed">
              AI automations that actually save small businesses time and money.
            </p>
          </div>

          {/* Explore links */}
          <div>
            <p className="text-sm font-semibold text-foreground">Explore</p>
            <nav className="mt-4 flex flex-col gap-3 text-sm text-muted-foreground">
              <Link href="/services" className="hover:text-foreground transition-colors">Services</Link>
              <Link href="/products" className="hover:text-foreground transition-colors">Products</Link>
              <Link href="/blog" className="hover:text-foreground transition-colors">Blog</Link>
              <Link href="/about" className="hover:text-foreground transition-colors">About</Link>
            </nav>
          </div>

          {/* Get in touch */}
          <div>
            <p className="text-sm font-semibold text-foreground">Get in touch</p>
            <p className="mt-3 text-sm text-muted-foreground">Ready to put AI to work in your business?</p>
            <a
              href="https://betterstacks.ca/book"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-1 rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Start the conversation →
            </a>
          </div>
        </div>

        <div className="mt-12 border-t border-border/40 pt-6">
          <p className="text-xs text-muted-foreground">© 2026 Better Stacks. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
