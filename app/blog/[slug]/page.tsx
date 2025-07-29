import { client } from '@/lib/sanity'
import { notFound } from 'next/navigation'
import BlogPostClient from '@/components/blog-post-client'

interface BlogPost {
  _id: string
  title: string
  excerpt: string
  content: any[]
  author: string
  date: string
  category: string
  mainImage: { asset: { _ref: string } }
  tags: string[]
  slug: { current: string }
}

async function getBlogPost(slug: string) {
  const query = `*[_type == "blogPost" && slug.current == $slug][0] {
    _id,
    title,
    excerpt,
    "content": rawContent,
    author,
    "date": publishedAt,
    category,
    mainImage,
    tags,
    slug
  }`

  try {
    const post = await client.fetch<BlogPost>(query, { slug })
    return post
  } catch (error) {
    console.error('Error fetching blog post:', error)
    return null
  }
}

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

const BlogPostPage = async ({ params }: BlogPostPageProps) => {
  const post = await getBlogPost(params.slug)

  if (!post) {
    notFound()
  }

  return <BlogPostClient post={post} />
}

export default BlogPostPage

// Generate static params for better performance (optional)
export async function generateStaticParams() {
  const query = `*[_type == "blogPost"] {
    "slug": slug.current
  }`

  try {
    const posts = await client.fetch<{ slug: string }[]>(query)
    return posts.map((post) => ({
      slug: post.slug,
    }))
  } catch (error) {
    console.error('Error generating static params:', error)
    return []
  }
}
