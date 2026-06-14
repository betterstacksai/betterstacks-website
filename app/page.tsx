import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { getAllPosts } from '@/lib/posts'

export default function Home() {
  const recentPosts = getAllPosts().slice(0, 3)

  return (
    <>
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary">
            Free weekly newsletter
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            AI for your business —<br className="hidden sm:inline" /> in plain English.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground leading-relaxed">
            Every week I show Canadian small business owners one AI workflow they can use the same day.
            No tech team needed, no jargon, no 47-step setup process.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <a href="https://betterstacks.ca/book" target="_blank" rel="noopener noreferrer">
                Book a Free 20-Min Call
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/blog">Read the Blog</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Value props */}
      <section className="border-y border-border bg-muted/30">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <div className="grid gap-10 sm:grid-cols-3">
            <div>
              <p className="text-2xl font-bold text-primary">01</p>
              <h3 className="mt-2 text-base font-semibold text-foreground">One workflow, every week</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Each newsletter issue covers one tool, one use case, and one thing you can try the same day — not a tech roundup.
              </p>
            </div>
            <div>
              <p className="text-2xl font-bold text-primary">02</p>
              <h3 className="mt-2 text-base font-semibold text-foreground">Plain English, always</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                No jargon, no assumptions about your tech level. If you can use email, you can follow along.
              </p>
            </div>
            <div>
              <p className="text-2xl font-bold text-primary">03</p>
              <h3 className="mt-2 text-base font-semibold text-foreground">Real results</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Specific time and money savings, not vague productivity claims. Everything I publish has been tested with real businesses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-xl">
            <h2 className="text-3xl font-bold tracking-tight text-foreground">
              Want someone to build it for you?
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              I implement AI workflows directly inside your business — customer follow-ups, review responses,
              content repurposing, intake forms. You get a working system, not a tutorial.
            </p>
            <div className="mt-6">
              <Button asChild variant="outline">
                <Link href="/services">See what I build →</Link>
              </Button>
            </div>
          </div>
          <div className="rounded-2xl border border-border bg-muted/30 p-8 lg:min-w-[320px]">
            <p className="text-sm font-medium text-muted-foreground">Typical results</p>
            <ul className="mt-4 space-y-3 text-sm text-foreground">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-primary font-bold">✓</span>
                <span>3–5 hours saved per week on repetitive tasks</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-primary font-bold">✓</span>
                <span>Consistent customer follow-up — without lifting a finger</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-primary font-bold">✓</span>
                <span>On-brand AI responses, in your voice</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Recent posts */}
      {recentPosts.length > 0 && (
        <section className="border-t border-border bg-muted/30">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold tracking-tight text-foreground">From the blog</h2>
              <Link href="/blog" className="text-sm font-medium text-primary hover:underline">
                View all →
              </Link>
            </div>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {recentPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group rounded-xl border border-border bg-background p-6 transition-shadow hover:shadow-md"
                >
                  <time className="text-xs text-muted-foreground">{post.date}</time>
                  <h3 className="mt-2 font-semibold text-foreground group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{post.excerpt}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Newsletter CTA */}
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight">
            Get smarter about AI — one email a week.
          </h2>
          <p className="mt-4 text-primary-foreground/80 max-w-lg mx-auto">
            Free. No spam. Unsubscribe anytime. Join small business owners who are already saving hours every week.
          </p>
          <div className="mt-8">
            <Button asChild variant="secondary" size="lg">
              <a href="https://betterstacks.beehiiv.com/subscribe" target="_blank" rel="noopener noreferrer">
                Subscribe Free →
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
