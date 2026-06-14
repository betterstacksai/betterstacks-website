import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export const metadata = {
  title: 'Products — Better Stacks',
  description: 'AI workflow guides for small business owners. Step-by-step, with tool setup and ready-to-use prompts.',
}

export default function ProductsPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
      <h1 className="text-4xl font-bold tracking-tight text-foreground">Workflow Guides</h1>
      <p className="mt-4 max-w-xl text-lg text-muted-foreground">
        Step-by-step AI workflow guides built for small business owners. Tool setup, instructions,
        and copy-paste prompts included — everything you need to implement it yourself.
      </p>

      <div className="mt-12 rounded-xl border border-border bg-muted/30 p-8 text-center">
        <p className="text-muted-foreground">
          Guides coming soon. Subscribe to the newsletter to be the first to know when new ones drop.
        </p>
        <div className="mt-6">
          <a
            href="https://betterstacks.beehiiv.com/subscribe"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(buttonVariants({ variant: 'outline' }))}
          >
            Subscribe Free →
          </a>
        </div>
      </div>
    </div>
  )
}
