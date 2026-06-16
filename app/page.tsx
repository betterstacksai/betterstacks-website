import Link from 'next/link'
import { Settings2, TrendingUp, ShieldCheck, Mail, Star, MessageSquare } from 'lucide-react'

const whatWeDoCards = [
  {
    icon: Settings2,
    title: 'Automations that fit your work',
    body: 'We start by watching how you actually run the business — then automate the parts that drain time, not the parts that look cool in a demo.',
  },
  {
    icon: TrendingUp,
    title: 'AI where it earns its keep',
    body: 'We only deploy AI where it makes a measurable difference: faster replies, fewer no-shows, more reviews, happier customers.',
  },
  {
    icon: ShieldCheck,
    title: 'Stays running after we leave',
    body: 'Every automation is documented, owned by you, and built on tools you already pay for — no vendor lock-in, no mystery boxes.',
  },
]

const favoritesCards = [
  {
    icon: Mail,
    title: 'Customer follow-up',
    body: 'Never let a lead or invoice slip through the cracks.',
  },
  {
    icon: Star,
    title: 'Review response systems',
    body: 'Stay on top of reviews — automatically and on-brand.',
  },
  {
    icon: MessageSquare,
    title: 'AI customer support',
    body: 'FAQ bots that actually answer what people ask.',
  },
]

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-mint">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* Left column */}
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-border/50 bg-background/60 px-4 py-1.5 text-xs font-medium text-muted-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                AI automations · for small businesses
              </div>

              <h1 className="mt-6 text-5xl font-extrabold tracking-tight text-foreground sm:text-6xl leading-[1.1]">
                It&apos;s not the size of your{' '}
                stack
                {' '}that matters.{' '}
                <span className="text-primary/60">It&apos;s how you</span>{' '}
                <span className="text-muted-foreground underline decoration-primary decoration-2 underline-offset-4">
                  use it.
                </span>
              </h1>

              <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-lg">
                We help small businesses implement AI automations that actually save time and money — not shiny features that sit unused.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="https://betterstacks.ca/book"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background hover:bg-foreground/90 transition-colors"
                >
                  Schedule Call →
                </a>
                <a
                  href="#what-we-do"
                  className="text-sm font-medium text-foreground underline underline-offset-4 hover:text-primary transition-colors"
                >
                  See what we automate
                </a>
              </div>

              <div className="mt-10 pt-8 border-t border-border/40">
                <p className="text-xs font-semibold tracking-widest text-muted-foreground uppercase">
                  Built for owners, not engineers
                </p>
                <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <span className="text-yellow-400">★★★★★</span>
                    <span>Real workflows</span>
                  </span>
                  <span aria-hidden>·</span>
                  <span>No 6-month rollouts</span>
                  <span aria-hidden>·</span>
                  <span>No vendor lock-in</span>
                </div>
              </div>
            </div>

            {/* Right column — image collage (desktop only) */}
            <div className="hidden lg:grid grid-cols-2 grid-rows-2 gap-3 h-[480px]">
              {/* Large card — spans 2 rows */}
              <div className="row-span-2 rounded-2xl overflow-hidden relative bg-muted">
                {/* TODO: swap in real person photo */}
                <div className="absolute inset-0 flex items-center justify-center text-xs text-muted-foreground">
                  [ person photo ]
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gray-950/80 p-4">
                  <p className="text-[10px] font-semibold tracking-widest text-white/60 uppercase">
                    — Save hours every week
                  </p>
                  <p className="mt-1 text-sm font-bold text-white">
                    Automations that actually save time
                  </p>
                </div>
              </div>

              {/* Top-right — workspace photo */}
              <div className="rounded-2xl overflow-hidden bg-muted flex items-center justify-center">
                {/* TODO: swap in real workspace photo */}
                <span className="text-xs text-muted-foreground">[ workspace photo ]</span>
              </div>

              {/* Stat card */}
              <div className="rounded-2xl bg-primary p-5 flex flex-col justify-between">
                <div>
                  <p className="text-4xl font-extrabold text-white">20+</p>
                  <p className="mt-2 text-sm text-white/80 leading-snug">
                    hours per week we help small business owners get back
                  </p>
                </div>
                <div className="h-1 rounded-full bg-white/20 mt-4">
                  <div className="h-1 rounded-full bg-white w-2/3" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section id="what-we-do" className="bg-background">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <p className="text-sm font-semibold tracking-widest text-primary uppercase">What we do</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl max-w-2xl">
            We don&apos;t install shiny features. We build automations that earn their keep.
          </h2>

          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {whatWeDoCards.map((card) => {
              const Icon = card.icon
              return (
                <div key={card.title} className="rounded-2xl border border-border bg-background p-6">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-mint">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="mt-4 text-base font-bold text-foreground">{card.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{card.body}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* A Few of Our Favorites */}
      <section className="bg-mint">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <p className="text-sm font-semibold tracking-widest text-primary uppercase">A few of our favorites</p>
          <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
              Automations that pay for themselves
            </h2>
            <Link href="/services" className="text-sm font-semibold text-primary hover:underline whitespace-nowrap">
              Browse all services →
            </Link>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {favoritesCards.map((card) => {
              const Icon = card.icon
              return (
                <div key={card.title} className="rounded-2xl border border-border/60 bg-background/80 p-6">
                  <Icon className="h-5 w-5 text-primary" />
                  <h3 className="mt-4 text-base font-bold text-foreground">{card.title}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">{card.body}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Block */}
      <section className="bg-background px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-5xl rounded-3xl bg-gray-950 px-8 py-14 sm:px-12">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Tell us where your time is going.
          </h2>
          <p className="mt-4 max-w-xl text-base text-white/70 leading-relaxed">
            One short call. We&apos;ll tell you — straight up — whether automation can help, and what the highest-ROI place to start is.
          </p>
          <div className="mt-8">
            <a
              href="https://betterstacks.ca/book"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Book a strategy call →
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
