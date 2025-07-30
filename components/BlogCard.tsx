'use client'
import type React from 'react'
import { motion } from 'framer-motion'
import { Calendar, User, Tag, Clock } from 'lucide-react'
import { fadeIn } from '@/utils/motion'
import { urlForImage } from '@/lib/sanity.image'

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

interface BlogCardProps {
  post: {
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
  delay?: number
}

const BlogCard: React.FC<BlogCardProps> = ({ post, delay = 0 }) => {
  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'astrology':
        return 'bg-purple-600 text-purple-100'
      case 'zodiac':
        return 'bg-blue-600 text-blue-100'
      case 'psychic':
        return 'bg-pink-600 text-pink-100'
      case 'tarot':
        return 'bg-indigo-600 text-indigo-100'
      case 'numerology':
        return 'bg-green-600 text-green-100'
      case 'spirituality':
        return 'bg-yellow-600 text-yellow-100'
      case 'horoscope':
        return 'bg-red-600 text-red-100'
      default:
        return 'bg-gray-600 text-gray-100'
    }
  }
  const getReadingTime = (content: any[]) => {
    if (!content || !Array.isArray(content)) return 1
    const wordsPerMinute = 200
    const textContent = content
      .filter((block) => block._type === 'block' && block.children)
      .map((block) =>
        block.children
          .filter((span: any) => span.text)
          .map((span: any) => span.text)
          .join(' ')
      )
      .join(' ')
    const wordCount = textContent.trim() ? textContent.split(/\s+/).length : 0
    return Math.max(1, Math.ceil(wordCount / wordsPerMinute))
  }
  const formatDate = (dateString: string) => {
    try {
      return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      })
    } catch (error) {
      return dateString
    }
  }
  return (
    <motion.article
      {...fadeIn}
      transition={{ delay }}
      className="bg-gradient-to-br from-purple-800 to-indigo-800 rounded-2xl overflow-hidden border border-purple-500 hover:border-purple-400 transition-all duration-300 transform hover:scale-105 cursor-pointer group"
    >
      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src={
            post.mainImage
              ? urlForImage(post.mainImage).url()
              : '/placeholder.svg?height=192&width=384&query=blog post card image' // Added placeholder query
          }
          alt={post.mainImage?.alt || post.title || 'Blog post image'} // Added alt text from Sanity
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span
            className={`px-3 py-1 rounded-full text-xs font-semibold ${getCategoryColor(post.category)}`}
          >
            {post.category?.charAt(0).toUpperCase() + post.category?.slice(1)}
          </span>
        </div>
        {/* Reading Time */}
        <div className="absolute top-4 right-4">
          <div className="flex items-center gap-1 bg-black bg-opacity-50 px-2 py-1 rounded-full">
            <Clock className="w-3 h-3 text-white" />
            <span className="text-xs text-white">
              {getReadingTime(post.content)} min read
            </span>
          </div>
        </div>
      </div>
      {/* Content */}
      <div className="p-6">
        {/* Meta Information */}
        <div className="flex items-center gap-4 text-purple-300 text-sm mb-3">
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            <span>{formatDate(post.date)}</span>
          </div>
          <div className="flex items-center gap-1">
            <User className="w-4 h-4" />
            <span>{post.author}</span>
          </div>
        </div>
        {/* Title */}
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-200 transition-colors duration-300 line-clamp-2">
          {post.title}
        </h3>
        {/* Excerpt */}
        <p className="text-purple-200 text-sm leading-relaxed mb-4 line-clamp-3">
          {post.excerpt || 'No excerpt available'}
        </p>
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags?.slice(0, 3).map((tag: string, index: number) => (
            <span
              key={index}
              className="bg-black bg-opacity-30 text-purple-200 px-2 py-1 rounded-full text-xs flex items-center gap-1"
            >
              <Tag className="w-3 h-3" />
              {tag}
            </span>
          ))}
          {post.tags && post.tags.length > 3 && (
            <span className="text-purple-300 text-xs px-2 py-1">
              +{post.tags.length - 3} more
            </span>
          )}
        </div>
        {/* Read More Button */}
        <div className="flex items-center justify-between">
          <div className="text-purple-300 group-hover:text-white font-semibold text-sm transition-colors duration-300">
            Read Full Article →
          </div>
          {/* Engagement Indicator */}
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-xs text-purple-300">Trending</span>
          </div>
        </div>
      </div>
      {/* Hover Effect Overlay */}
    </motion.article>
  )
}

export default BlogCard
