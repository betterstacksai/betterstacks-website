import { Target, Heart, Zap } from 'lucide-react'

export const metadata = {
  title: 'About — Better Stacks',
  description: 'Better Stacks builds AI automations that quietly make small businesses easier to run.',
}

const values = [
  {
    icon: Target,
    title: 'Practical over flashy',
    body: 'Every automation has to earn its place. If it doesn\'t save time or money in 30 days, we rip it out.',
  },
  {
    icon: Heart,
    title: 'Built for owners',
    body: 'You shouldn\'t need an engineering team to run your shop. We design for the person actually doing the work.',
  },
  {
    icon: Zap,
    title: 'Yours to keep',
    body: 'No proprietary platforms. No vendor lock-in. We build on tools you already pay for and hand you the keys.',
  },
]

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-background">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20">
          <p className="text-sm font-semibold tracking-widest text-primary uppercase">About</p>
          <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
            We build AI that quietly makes your business easier to run.
          </h1>
          <div className="mt-6 space-y-4 text-base text-muted-foreground leading-relaxed">
            <p>
              Better Stacks started with a simple observation: small businesses keep getting sold
              &ldquo;AI features&rdquo; — flashy add-ons that look impressive in a demo and collect
              dust by month two. Meanwhile the owner is still chasing invoices at 10pm and answering
              the same five questions every morning.
            </p>
            <p>
              We do the opposite. We look at the work that&apos;s actually eating your week, and we
              automate it — using AI where it helps and plain old workflows where it doesn&apos;t.
              The goal isn&apos;t to make your stack bigger. It&apos;s to make it work harder for you.
            </p>
          </div>
        </div>
      </section>

      {/* Value props */}
      <section className="bg-background">
        <div className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
          <div className="grid gap-6 sm:grid-cols-3">
            {values.map((value) => {
              const Icon = value.icon
              return (
                <div key={value.title} className="rounded-2xl border border-border bg-background p-6">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-mint">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="mt-4 text-base font-bold text-foreground">{value.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{value.body}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA block */}
      <section className="bg-background px-4 pb-16 sm:px-6">
        <div className="mx-auto max-w-xl rounded-3xl bg-gray-950 px-8 py-12">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Let&apos;s figure out what to automate first.
          </h2>
          <p className="mt-3 text-base text-white/70">
            The first call is free. Bring your messiest workflow.
          </p>
          <div className="mt-6">
            <a
              href="https://betterstacks.ca/book"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Get in touch
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
