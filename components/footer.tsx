import Link from 'next/link'

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-base font-bold text-foreground">Better Stacks</p>
            <p className="mt-1 max-w-xs text-sm text-muted-foreground">
              AI workflows for small business owners — in plain English.
            </p>
          </div>
          <nav className="flex flex-wrap gap-x-8 gap-y-3 text-sm text-muted-foreground">
            <Link href="/about" className="hover:text-foreground transition-colors">About</Link>
            <Link href="/services" className="hover:text-foreground transition-colors">Services</Link>
            <Link href="/products" className="hover:text-foreground transition-colors">Products</Link>
            <Link href="/blog" className="hover:text-foreground transition-colors">Blog</Link>
          </nav>
        </div>
        <p className="mt-10 text-xs text-muted-foreground">
          © {new Date().getFullYear()} Better Stacks · Marianne Lohen · betterstacks.ca
        </p>
      </div>
    </footer>
  )
}
