import type { Metadata } from 'next'
import { client } from '@/lib/sanity'
import BlogClient from '@/components/blog-client'

// Define the SanitySEO interface here or import it from a shared types file
interface SanitySEO {
  metaTitle?: string
  metaDescription?: string
  keywords?: string[]
  ogTitle?: string
  ogDescription?: string
  ogImage?: { asset: { _ref: string } }
  twitterCard?: 'summary' | 'summary_large_image' | 'app' | 'player'
  twitterTitle?: string
  twitterDescription?: string
  twitterImage?: { asset: { _ref: string } }
}

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
  seo?: SanitySEO // Add the SEO field here
  affiliateLink?: string // New: Add affiliateLink to the interface
}

// Blog page metadata (static for the main blog listing)
export const metadata: Metadata = {
  title: 'Astrology Blog – Horoscopes, Zodiac Tips & More | AstroLoveGuide',
  description:
    'Explore our astrology blog for expert tips, zodiac advice, spiritual guidance, moon phases, and more. Stay aligned with the stars.',
  keywords: [
    'astrology blog',
    'horoscope articles',
    'zodiac insights',
    'cosmic wisdom',
    'astrology news',
    'spiritual guidance',
    'love astrology',
    'horoscope predictions',
    'astrology tips',
    'zodiac compatibility',
  ],
  openGraph: {
    title: 'Astro Love Guide Blog | Latest Astrology Insights & Cosmic Wisdom',
    description:
      'Discover the latest astrology insights, horoscope predictions, and cosmic wisdom. Read expert articles on love compatibility, zodiac signs, and spiritual guidance.',
    url: 'https://yoursite.com/blog',
    siteName: 'Astro Love Guide',
    images: [
      {
        url: '/placeholder.svg?height=630&width=1200', // Using placeholder for consistency
        width: 1200,
        height: 630,
        alt: 'Astro Love Guide Blog - Latest Astrology Insights',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Astro Love Guide Blog | Latest Astrology Insights & Cosmic Wisdom',
    description:
      'Discover the latest astrology insights, horoscope predictions, and cosmic wisdom. Read expert articles on love compatibility and zodiac signs.',
    images: ['/placeholder.svg?height=675&width=1200'], // Using placeholder for consistency
    creator: '@AstroLoveGuide',
    site: '@AstroLoveGuide',
  },
  alternates: {
    canonical: 'https://yoursite.com/blog',
  },
  other: {
    'article:section': 'Astrology',
    'article:tag': 'astrology, horoscope, zodiac, cosmic wisdom',
  },
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
    slug,
    seo { // Fetch the entire SEO object
      metaTitle,
      metaDescription,
      keywords,
      ogTitle,
      ogDescription,
      ogImage,
      twitterCard,
      twitterTitle,
      twitterDescription,
      twitterImage,
    },
    affiliateLink, // New: Fetch the affiliateLink
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
