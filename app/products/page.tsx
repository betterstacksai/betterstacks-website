import { FileText } from 'lucide-react'

export const metadata = {
  title: 'Products — Better Stacks',
  description: 'Practical PDF playbooks for small business owners who want to implement AI automations themselves.',
}

const products = [
  { title: 'Auto-reply to reviews' },
  { title: 'Follow up every quote' },
  { title: 'AI inbox triage' },
]

export default function ProductsPage() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6 text-center">

        {/* Coming soon badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-1.5 text-xs font-medium text-muted-foreground">
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          Coming soon
        </div>

        <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
          Do-it-yourself AI automation guides.
        </h1>
        <p className="mt-4 text-base text-muted-foreground leading-relaxed">
          We&apos;re putting together a library of practical PDF playbooks — the exact, step-by-step
          automations we set up for clients, written so any small business owner can implement them
          without hiring us.
        </p>

        {/* Product cards */}
        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {products.map((product) => (
            <div key={product.title} className="rounded-2xl border border-border bg-background p-5 text-left">
              <FileText className="h-5 w-5 text-primary" />
              <p className="mt-3 text-sm font-bold text-foreground">{product.title}</p>
              <p className="mt-1 text-xs text-muted-foreground">PDF · Coming soon</p>
            </div>
          ))}
        </div>

        {/* Email notify form */}
        <form
          action="https://betterstacks.beehiiv.com/subscribe"
          method="GET"
          target="_blank"
          className="mt-10 flex gap-2 max-w-sm mx-auto"
        >
          <input
            type="email"
            name="email"
            required
            placeholder="you@yourbusiness.com"
            className="flex-1 rounded-full border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
          />
          <button
            type="submit"
            className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            Notify me
          </button>
        </form>

        <p className="mt-4 text-sm text-muted-foreground">
          Can&apos;t wait?{' '}
          <a
            href="https://betterstacks.ca/book"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary font-medium hover:underline"
          >
            Tell us what you&apos;d build with one →
          </a>
        </p>

      </div>
    </section>
  )
}
