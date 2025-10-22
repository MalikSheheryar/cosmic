import { MetadataRoute } from 'next'
import { client } from '@/lib/sanity'
import { localQuizzes } from '@/utils/localQuizData'

// Replace with your actual domain
const baseUrl = 'http://astroloveguide.com/'

// Interface for blog posts
interface BlogPost {
  slug: { current: string }
  _updatedAt: string
  publishedAt: string
}

// Fetch all blog posts from Sanity
async function getAllBlogPosts(): Promise<BlogPost[]> {
  const query = `*[_type == "blogPost"] {
    slug,
    _updatedAt,
    publishedAt
  }`

  try {
    const posts = await client.fetch<BlogPost[]>(query)
    return posts || []
  } catch (error) {
    console.error('Error fetching blog posts for sitemap:', error)
    return []
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Fetch dynamic content
  const blogPosts = await getAllBlogPosts()

  // Static pages with priority and change frequency
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/horoscope`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/compatibility`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/quizzes`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/psychic-services`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/disclaimer`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ]

  // Dynamic blog post pages
  const blogPages: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug.current}`,
    lastModified: new Date(post._updatedAt || post.publishedAt),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // Dynamic quiz pages (using the dash prefix)
  const quizPages: MetadataRoute.Sitemap = localQuizzes.map((quiz) => ({
    url: `${baseUrl}/quizzes/-${quiz.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  // Combine all pages
  return [...staticPages, ...blogPages, ...quizPages]
}

// Optional: Force dynamic rendering for sitemap
export const dynamic = 'force-dynamic'
export const revalidate = 3600 // Revalidate every hour
