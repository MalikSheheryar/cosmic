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
    tags
  }`

  try {
    const posts = await client.fetch<BlogPost[]>(query)
    console.log('Fetched posts:', posts) // Debug log
    return posts
  } catch (error) {
    console.error('Error fetching blog posts:', error)
    return []
  }
}

const BlogPage = async () => {
  const blogPosts = await getBlogPosts()

  // Debug log to see what we're getting
  console.log('Blog posts in component:', blogPosts)

  return <BlogClient blogPosts={blogPosts} />
}

export default BlogPage
