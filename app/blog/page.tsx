import Link from 'next/link'
import { getAllPosts } from '@/lib/posts'

export const metadata = {
  title: 'Blog — Better Stacks',
  description: 'AI workflows for small business owners, explained in plain English.',
}

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
      <h1 className="text-4xl font-bold tracking-tight text-foreground">The Better Stacks Blog</h1>
      <p className="mt-4 text-muted-foreground">
        One AI workflow per post. Plain English, always.
      </p>

      {posts.length === 0 ? (
        <p className="mt-12 text-muted-foreground">No posts yet — check back soon.</p>
      ) : (
        <div className="mt-12 space-y-6">
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
  )
}
