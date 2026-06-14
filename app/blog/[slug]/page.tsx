import { notFound } from 'next/navigation'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { getAllPosts, getPostBySlug } from '@/lib/posts'

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  try {
    const post = getPostBySlug(slug)
    return { title: `${post.title} — Better Stacks`, description: post.excerpt }
  } catch {
    return { title: 'Post not found' }
  }
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params

  let post
  try {
    post = getPostBySlug(slug)
  } catch {
    notFound()
  }

  return (
    <article className="mx-auto max-w-2xl px-4 py-16 sm:px-6">
      <div className="mb-8">
        <time className="text-sm text-muted-foreground">{post.date}</time>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-foreground">{post.title}</h1>
        {post.excerpt && (
          <p className="mt-4 text-lg text-muted-foreground">{post.excerpt}</p>
        )}
      </div>

      <div className="prose prose-neutral max-w-none">
        <MDXRemote source={post.content} />
      </div>
    </article>
  )
}
