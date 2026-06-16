import Link from 'next/link'
import { Pencil } from 'lucide-react'
import { getAllPosts } from '@/lib/posts'

export const metadata = {
  title: 'Blog — Better Stacks',
  description: 'Honest, useful writing about AI automation for small businesses — what actually works, what\'s overhyped, and where the real ROI lives.',
}

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <section className="bg-background">
      <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6 text-center">

        {/* Icon */}
        <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-mint mx-auto">
          <Pencil className="h-7 w-7 text-primary" />
        </div>

        <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
          The blog is warming up.
        </h1>
        <p className="mt-4 text-base text-muted-foreground leading-relaxed">
          We&apos;re putting together honest, useful writing about AI automation for small
          businesses — what actually works, what&apos;s overhyped, and where the real ROI lives.
        </p>
        {posts.length === 0 && (
          <p className="mt-2 text-sm text-muted-foreground">First posts coming soon.</p>
        )}

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/services"
            className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            Browse services
          </Link>
          <a
            href="https://betterstacks.ca/book"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground hover:bg-muted/50 transition-colors"
          >
            Get in touch
          </a>
        </div>

        {/* Post listing — shown when posts exist */}
        {posts.length > 0 && (
          <div className="mt-16 space-y-6 text-left">
            {posts.map((post) => (
              <article key={post.slug} className="group border-b border-border pb-8">
                <Link href={`/blog/${post.slug}`}>
                  <time className="text-sm text-muted-foreground">{post.date}</time>
                  <h2 className="mt-2 text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {post.title}
                  </h2>
                  <p className="mt-2 text-muted-foreground">{post.excerpt}</p>
                  <span className="mt-3 inline-block text-sm font-medium text-primary">
                    Read more →
                  </span>
                </Link>
              </article>
            ))}
          </div>
        )}

      </div>
    </section>
  )
}
