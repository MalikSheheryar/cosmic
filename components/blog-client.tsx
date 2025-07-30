'use client'
import type React from 'react'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Search } from 'lucide-react'
import { useRouter } from 'next/navigation'
import BlogCard from '@/components/BlogCard' // Corrected import path
import AffiliateButton from '@/components/AffiliateButton' // Corrected import path
import { fadeIn, slideUp } from '@/utils/motion'

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
  content: any[]
  author: string
  date: string
  category: string
  mainImage: { asset: { _ref: string } }
  tags: string[]
  slug: { current: string }
  seo?: SanitySEO // Add the SEO field here
}

interface BlogClientProps {
  blogPosts: BlogPost[]
}

const BlogClient: React.FC<BlogClientProps> = ({ blogPosts }) => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const router = useRouter()
  const categories = [
    'all',
    'horoscope',
    'zodiac',
    'psychic',
    'tarot',
    'numerology',
    'spirituality',
    'astrology',
  ]
  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt?.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory =
      selectedCategory === 'all' || post.category === selectedCategory
    return matchesSearch && matchesCategory
  })
  const handlePostClick = (post: BlogPost) => {
    if (post.slug?.current) {
      router.push(`/blog/${post.slug.current}`)
    }
  }
  return (
    <div className="min-h-screen py-20 px-4 ">
      <motion.div {...fadeIn} className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Astro Love Guide Blog
          </h1>
          <p className="text-xl text-purple-200">
            Discover the latest wisdom from the stars and beyond
          </p>
        </div>
        {/* Search and Filter */}
        <motion.div {...slideUp} className="mb-12 relative z-10 cursor-default">
          <div className="bg-gradient-to-r from-purple-800 to-indigo-800 p-6 rounded-2xl border border-purple-500">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="w-5 h-5 text-purple-300 absolute left-3 top-1/2 transform -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-black bg-opacity-50 border border-purple-400 rounded-lg text-white placeholder-purple-300 focus:border-pink-400 focus:outline-none transition-colors duration-300 cursor-text"
                />
              </div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 bg-black bg-opacity-50 border border-purple-400 rounded-lg text-white focus:border-pink-400 focus:outline-none transition-colors duration-300 cursor-pointer"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category === 'all'
                      ? 'All Categories'
                      : category.charAt(0).toUpperCase() + category.slice(1)}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </motion.div>
        {/* Featured Article CTA */}
        <motion.div
          {...slideUp}
          className="text-center mb-16 relative z-10 cursor-default"
        >
          <div className="bg-gradient-to-r from-purple-800 to-pink-800 p-8 rounded-2xl border border-purple-500">
            <h2 className="text-2xl font-bold text-white mb-4">
              Get Personalized Guidance
            </h2>
            <p className="text-purple-200 mb-6">
              While our articles provide general insights, get advice tailored
              specifically to your situation
            </p>
            <AffiliateButton
              href="https://www.test.com"
              text="Connect with Expert Advisor"
              className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white px-8 py-3 rounded-full font-semibold transform hover:scale-105 transition-all duration-300"
            />
          </div>
        </motion.div>
        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredPosts.map((post, index) => (
            <motion.div
              key={post._id}
              {...fadeIn}
              transition={{ delay: index * 0.1 }}
              onClick={() => handlePostClick(post)}
              className="cursor-pointer"
            >
              <BlogCard post={post} />
            </motion.div>
          ))}
        </div>
        {filteredPosts.length === 0 && blogPosts.length > 0 && (
          <motion.div {...fadeIn} className="text-center py-12">
            <p className="text-purple-300 text-xl">
              No articles found matching your search.
            </p>
          </motion.div>
        )}
        {blogPosts.length === 0 && (
          <motion.div {...fadeIn} className="text-center py-12">
            <p className="text-purple-300 text-xl">
              No blog posts found. Add some posts in Sanity CMS.
            </p>
          </motion.div>
        )}
        {/* Newsletter CTA */}
        <motion.div {...fadeIn} className="text-center">
          <div className="bg-gradient-to-r from-indigo-800 to-purple-800 p-8 rounded-2xl border border-indigo-500">
            <h2 className="text-2xl font-bold text-white mb-4">
              Ready for Real Answers?
            </h2>
            <p className="text-indigo-200 mb-6 max-w-2xl mx-auto">
              Our blog provides great insights, but for specific questions about
              your life, love, and future, connect with professional psychics
              who can provide personalized guidance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <AffiliateButton
                text="Get Live Reading Now"
                className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300"
              />
              <AffiliateButton
                text="Browse All Services"
                className="bg-transparent border-2 border-yellow-400 text-yellow-300 hover:bg-yellow-400 hover:text-white px-8 py-3 rounded-full font-semibold transition-all duration-300"
              />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default BlogClient
