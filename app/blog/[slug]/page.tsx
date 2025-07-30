import { client } from '@/lib/sanity'
import { urlForImage } from '@/lib/sanity.image'
import type { Metadata, ResolvingMetadata } from 'next'
import BlogPostClient from '@/components/blog-post-client'

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
}

async function getBlogPost(slug: string): Promise<BlogPost | null> {
  const query = `*[_type == "blogPost" && slug.current == $slug][0]{
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
    seo {
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
    }
  }`
  try {
    const post = await client.fetch<BlogPost>(query, { slug })
    return post
  } catch (error) {
    console.error(`Error fetching blog post with slug ${slug}:`, error)
    return null
  }
}

// Generate static paths for all blog posts at build time
export async function generateStaticParams() {
  const query = `*[_type == "blogPost"]{ "slug": slug.current }`
  const slugs = await client.fetch<{ slug: string }[]>(query)
  return slugs.map((s) => ({ slug: s.slug }))
}

// Generate dynamic metadata for each blog post page
export async function generateMetadata(
  { params }: { params: { slug: string } },
  parent: ResolvingMetadata // Allows access to parent metadata
): Promise<Metadata> {
  const post = await getBlogPost(params.slug)

  if (!post) {
    return {
      title: 'Blog Post Not Found',
      description: 'The requested blog post could not be found.',
    }
  }

  // Define default values based on post content if SEO fields are empty
  const defaultTitle = `${post.title} | Astro Love Guide Blog`
  const defaultDescription =
    post.excerpt || `Read about ${post.title} on Astro Love Guide Blog.`
  const defaultKeywords =
    post.tags?.length > 0 ? post.tags.join(', ') : 'astrology, horoscope, blog'

  // Use SEO data from Sanity if available, otherwise fallback to post data or generic defaults
  const seoTitle = post.seo?.metaTitle || defaultTitle
  const seoDescription = post.seo?.metaDescription || defaultDescription
  const seoKeywords = post.seo?.keywords?.join(', ') || defaultKeywords

  const ogTitle = post.seo?.ogTitle || seoTitle
  const ogDescription = post.seo?.ogDescription || seoDescription
  const ogImage = post.seo?.ogImage
    ? urlForImage(post.seo.ogImage).url()
    : post.mainImage
      ? urlForImage(post.mainImage).url()
      : '/placeholder.svg?height=630&width=1200'

  const twitterTitle = post.seo?.twitterTitle || ogTitle
  const twitterDescription = post.seo?.twitterDescription || ogDescription
  const twitterImage = post.seo?.twitterImage
    ? urlForImage(post.seo.twitterImage).url()
    : ogImage
  const twitterCard = post.seo?.twitterCard || 'summary_large_image'

  return {
    title: seoTitle,
    description: seoDescription,
    keywords: seoKeywords,
    openGraph: {
      title: ogTitle,
      description: ogDescription,
      url: `https://yoursite.com/blog/${post.slug.current}`, // Ensure this matches your actual domain
      siteName: 'Astro Love Guide',
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: post.seo?.ogImage?.alt || post.title,
        },
      ],
      locale: 'en_US',
      type: 'article',
    },
    twitter: {
      card: twitterCard,
      title: twitterTitle,
      description: twitterDescription,
      images: [twitterImage],
      creator: '@AstroLoveGuide', // Consider making this dynamic or configurable
      site: '@AstroLoveGuide', // Consider making this dynamic or configurable
    },
    alternates: {
      canonical: `https://yoursite.com/blog/${post.slug.current}`,
    },
    // You can add other metadata fields from Sanity if needed
    // For example, if you have a 'schemaMarkup' field in Sanity SEO:
    // 'script': post.seo?.schemaMarkup ? [{ '@type': 'application/ld+json', innerHTML: JSON.stringify(post.seo.schemaMarkup) }] : undefined,
  }
}

const BlogPostPage = async ({ params }: { params: { slug: string } }) => {
  const post = await getBlogPost(params.slug)

  if (!post) {
    // Handle 404 or redirect if post is not found
    // You might want to use Next.js's notFound() here
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-3xl font-bold">Blog Post Not Found</h1>
      </div>
    )
  }

  return <BlogPostClient post={post} />
}

export default BlogPostPage
