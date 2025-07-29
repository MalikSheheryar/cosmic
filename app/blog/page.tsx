import { client } from '@/lib/sanity'
import BlogClient from '@/components/blog-client'

interface BlogPost {
  _id: string
  title: string
  excerpt: string
  content: any[] // Portable Text
  author: string
  date: string
  category: string
  mainImage: { asset: { _ref: string } }
  tags: string[]
  slug: { current: string }
}

async function getBlogPosts() {
  const query = `*[_type == "blogPost"] | order(publishedAt desc) {
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
    const posts = await client.fetch<BlogPost[]>(query)
    return posts
  } catch (error) {
    console.error('Error fetching blog posts:', error)
    return []
  }
}

const BlogPage = async () => {
  const blogPosts = await getBlogPosts()
  return <BlogClient blogPosts={blogPosts} />
}

export default BlogPage
