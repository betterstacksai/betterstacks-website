import Link from 'next/link'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { DemoVideo } from '@/components/demo-video'
import { FlowDiagram } from '@/components/flow-diagram'

const workflowCards = [
  {
    title: 'Never miss another lead',
    problem: 'Most enquiries wait hours for a reply — and the customer books whoever answers first.',
    solution: 'An instant, personalized response to every web, email, or DM enquiry — 24/7, even when you\'re on a job.',
    flow: [
      { label: 'New enquiry arrives' },
      { label: 'AI drafts reply' },
      { label: 'Sent instantly' },
    ],
  },
  {
    title: 'Turn happy customers into 5-star reviews',
    problem: 'You know reviews bring in business, but asking always slips your mind.',
    solution: 'Automatically sends each customer a friendly review request with a one-tap link, right after the job\'s done.',
    flow: [
      { label: 'Job completed' },
      { label: 'Review request sent' },
      { label: 'Customer taps link' },
    ],
  },
  {
    title: 'Get paid faster, without the awkward follow-up',
    problem: 'Chasing unpaid invoices is uncomfortable, so it slides — and your cash flow takes the hit.',
    solution: 'Polite, automatic reminders that follow up for you until the invoice is paid.',
    flow: [
      { label: 'Invoice sent' },
      { label: 'Auto reminder' },
      { label: 'Payment received' },
    ],
  },
]

const howItWorksSteps = [
  { number: '01', heading: 'Quick call', body: 'We find the one task eating your time.' },
  { number: '02', heading: 'I build it', body: 'A simple workflow tailored to your business.' },
  { number: '03', heading: 'You\'re hands-off', body: 'It runs in the background while you work.' },
]

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Your business runs on a dozen time-sucking tasks.{' '}
            <span className="text-primary">I automate them.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            I build simple AI workflows for local small businesses — so you stop doing the repetitive
            stuff and get back to the work that matters.
          </p>
          <div className="mt-8">
            <a
              href="https://betterstacks.ca/book"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(buttonVariants({ size: 'lg' }))}
            >
              Book a free 15-min call
            </a>
          </div>
        </div>
      </section>

      {/* What I Build */}
      <section className="border-t border-border bg-muted/30">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <p className="text-lg font-medium text-foreground">
            Practical automations that save you time and money — no tech headaches, no big software overhauls.
          </p>

          {/* Workflow Cards */}
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {workflowCards.map((card) => (
              <div
                key={card.title}
                className="flex flex-col gap-5 rounded-2xl border border-border bg-background p-6"
              >
                <div>
                  <h3 className="text-lg font-bold text-foreground">{card.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground">
                    <span className="font-semibold text-foreground">The problem: </span>
                    {card.problem}
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    <span className="font-semibold text-foreground">The fix: </span>
                    {card.solution}
                  </p>
                </div>

                <FlowDiagram steps={card.flow} />

                <DemoVideo />

                <a
                  href="https://betterstacks.ca/book"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-primary hover:underline"
                >
                  Get this for your business →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          How it works
        </h2>
        <div className="mt-10 grid gap-8 sm:grid-cols-3">
          {howItWorksSteps.map((step) => (
            <div key={step.number}>
              <p className="text-3xl font-extrabold text-primary">{step.number}</p>
              <h3 className="mt-3 text-base font-bold text-foreground">{step.heading}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{step.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Ready to get your hours back?
          </h2>
          <div className="mt-8">
            <a
              href="https://betterstacks.ca/book"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(buttonVariants({ variant: 'secondary', size: 'lg' }))}
            >
              Book your free 15-min call
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
