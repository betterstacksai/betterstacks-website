import { Send, Star, ClipboardCheck, MessageSquare, Wand2, BarChart3 } from 'lucide-react'

export const metadata = {
  title: 'Services — Better Stacks',
  description: 'AI automations built for small businesses. Pick a starting point or describe your bottleneck — every engagement starts with a free strategy call.',
}

const services = [
  {
    icon: Send,
    title: 'Customer follow-up automation',
    body: 'Stop leaving money in your inbox. We automate the post-quote, post-visit, and overdue-invoice nudges so leads convert and clients pay on time — without you remembering to chase them.',
    bullets: [
      'Lead & quote follow-up sequences',
      'Appointment reminders',
      'Invoice + payment nudges',
    ],
  },
  {
    icon: Star,
    title: 'Review response systems',
    body: 'Get more reviews, reply to all of them, and never let a 1-star sit unanswered overnight. AI drafts on-brand replies; you approve with one tap.',
    bullets: [
      'Auto-request reviews after jobs',
      'AI-drafted replies in your voice',
      'Slack/SMS alerts for negative reviews',
    ],
  },
  {
    icon: ClipboardCheck,
    title: 'AI-powered intake & onboarding',
    body: 'Turn new-client chaos into a calm, repeatable flow. From the first form to the welcome packet, AI handles the data entry, the follow-ups, and the kickoff scheduling.',
    bullets: [
      'Smart intake forms',
      'Automatic CRM/calendar setup',
      'Personalized onboarding sequences',
    ],
  },
  {
    icon: MessageSquare,
    title: 'FAQ customer support',
    body: 'Stop answering the same 10 questions every week. We train an AI assistant on your real policies, pricing, and process so customers get instant, accurate answers.',
    bullets: [
      'Trained on your docs & site',
      'Handoff to a human when needed',
      'Embeds on your site or chat tool',
    ],
  },
  {
    icon: Wand2,
    title: 'Custom automations',
    body: "Got something weirdly specific? Good — those are usually the highest-ROI ones. Tell us where your time goes and we'll design an automation built around your business, not a template.",
    bullets: [
      'Audit + opportunity mapping',
      'Built on tools you already use',
      'Documented and handed back to you',
    ],
  },
  {
    icon: BarChart3,
    title: 'Ongoing optimization',
    body: 'Automations age. We keep yours healthy — tuning prompts, swapping models, and adding new flows as your business grows.',
    bullets: [
      'Quarterly reviews',
      'Performance reporting',
      'First call on new AI capabilities',
    ],
  },
]

export default function ServicesPage() {
  return (
    <>
      {/* Header + cards */}
      <section className="bg-background">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <p className="text-sm font-semibold tracking-widest text-primary uppercase">Services</p>
          <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
            AI automations that make your day easier.
          </h1>
          <p className="mt-4 max-w-xl text-base text-muted-foreground leading-relaxed">
            Pick a starting point — or describe the bottleneck and we&apos;ll design something
            custom. Every engagement starts with a free strategy call.
          </p>

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {services.map((service) => {
              const Icon = service.icon
              return (
                <div key={service.title} className="rounded-2xl border border-border bg-background p-6">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-mint">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="mt-4 text-base font-bold text-foreground">{service.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{service.body}</p>
                  <ul className="mt-4 space-y-1.5">
                    {service.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-center gap-2 text-sm">
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                        <span className="text-muted-foreground">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-background px-4 pb-16 sm:px-6">
        <div className="mx-auto max-w-5xl rounded-2xl border border-border px-8 py-14 text-center">
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
            Not sure where to start?
          </h2>
          <p className="mt-3 text-base text-muted-foreground">
            Tell us where your time is going. We&apos;ll point at the one automation worth doing first.
          </p>
          <div className="mt-6">
            <a
              href="https://betterstacks.ca/book"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Book a free strategy call
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
