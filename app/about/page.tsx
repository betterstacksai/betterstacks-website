import { Button } from '@/components/ui/button'

export const metadata = {
  title: 'About — Better Stacks',
  description: 'Marianne Lohen helps small business owners implement AI workflows that save time and money.',
}

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <h1 className="text-4xl font-bold tracking-tight text-foreground">About Marianne</h1>

      <div className="mt-8 space-y-5 text-muted-foreground leading-relaxed">
        <p>
          Hi — I'm Marianne Lohen, and I run Better Stacks out of Vancouver, BC.
        </p>
        <p>
          I help small business owners implement AI workflows that actually work — the kind that save you
          real time on real tasks, not theoretical productivity gains you'll never see.
        </p>
        <p>
          Most of my clients aren't tech people. They're good at what they do — running restaurants,
          consulting practices, retail shops, service businesses — and they don't want to become
          software experts. They just want the boring, repetitive parts of their business to run smoother.
        </p>
        <p>
          That's exactly what I build for them.
        </p>
        <p>
          The newsletter is how I share what I learn every week — one workflow at a time, in plain
          English, with no assumptions about your tech background.
        </p>
      </div>

      <div className="mt-10 flex flex-col gap-3 sm:flex-row">
        <Button asChild>
          <a href="https://betterstacks.ca/book" target="_blank" rel="noopener noreferrer">
            Book a Free Call
          </a>
        </Button>
        <Button asChild variant="outline">
          <a href="https://betterstacks.beehiiv.com/subscribe" target="_blank" rel="noopener noreferrer">
            Subscribe to the Newsletter
          </a>
        </Button>
      </div>
    </div>
  )
}
