import { buttonVariants } from '@/components/ui/button'

export const metadata = {
  title: 'Services — Better Stacks',
  description: 'AI workflow implementation for small businesses. Marianne builds the system; you run your business.',
}

const services = [
  {
    title: 'Customer Follow-Up Automation',
    description:
      'Never let a lead go cold. I build AI-powered follow-up sequences that respond to inquiries, send reminders, and nurture customers — in your voice.',
  },
  {
    title: 'Review Response System',
    description:
      'Respond to every Google and Yelp review in under 30 seconds. I set up a workflow that drafts on-brand responses for you to approve or send as-is.',
  },
  {
    title: 'Content Repurposing Pipeline',
    description:
      'Turn one piece of content into five without doing five times the work. I build pipelines that take your newsletter or blog and produce social posts, email drafts, and more.',
  },
  {
    title: 'AI-Powered Intake & Onboarding',
    description:
      'Replace your intake forms and onboarding emails with a system that collects information, qualifies leads, and sends the right next steps automatically.',
  },
]

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
      <h1 className="text-4xl font-bold tracking-tight text-foreground">Services</h1>
      <p className="mt-4 max-w-xl text-lg text-muted-foreground">
        I build the AI system. You run your business.
      </p>

      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {services.map((service) => (
          <div key={service.title} className="rounded-xl border border-border p-6">
            <h3 className="font-semibold text-foreground">{service.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{service.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 rounded-2xl bg-muted/30 border border-border p-8">
        <h2 className="text-xl font-bold text-foreground">How it works</h2>
        <ol className="mt-4 space-y-3 text-sm text-muted-foreground">
          <li className="flex gap-3">
            <span className="font-bold text-primary">1.</span>
            <span>We spend 20 minutes on a call so I understand your business and what's eating your time.</span>
          </li>
          <li className="flex gap-3">
            <span className="font-bold text-primary">2.</span>
            <span>I scope a workflow and send you a plain-English proposal — what it does, what it costs, what you'll get.</span>
          </li>
          <li className="flex gap-3">
            <span className="font-bold text-primary">3.</span>
            <span>I build it, test it, and hand it over with a simple guide so your team can use it from day one.</span>
          </li>
        </ol>
        <div className="mt-6">
          <a
            href="https://betterstacks.ca/book"
            target="_blank"
            rel="noopener noreferrer"
            className={buttonVariants()}
          >
            Book a Free 20-Min Call
          </a>
        </div>
      </div>
    </div>
  )
}
