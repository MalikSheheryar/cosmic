'use client'

import type React from 'react'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Search, Calendar, User, Tag } from 'lucide-react'
import BlogCard from '@/components/BlogCard'
import AffiliateButton from '@/components/AffiliateButton'
import { fadeIn, slideUp } from '@/utils/motion'
import { urlForImage } from '@/lib/sanity.image'
import PortableText from '@/components/PortableText'

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
}

interface BlogClientProps {
  blogPosts: BlogPost[]
}

const BlogClient: React.FC<BlogClientProps> = ({ blogPosts }) => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null)

  // Debug log
  console.log('BlogClient received posts:', blogPosts)

  const categories = [
    'all',
    'horoscope',
    'zodiac',
    'psychic',
    'tarot',
    'numerology',
    'spirituality',
    'astrology', // Added this category that was missing
  ]

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt?.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory =
      selectedCategory === 'all' || post.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  // Format date helper function
  const formatDate = (dateString: string) => {
    try {
      return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    } catch (error) {
      return dateString
    }
  }

  if (selectedPost) {
    return (
      <div className="min-h-screen py-20 px-4">
        <motion.div {...fadeIn} className="max-w-4xl mx-auto">
          <button
            onClick={() => setSelectedPost(null)}
            className="text-purple-300 hover:text-white mb-8 transition-colors duration-300"
          >
            ← Back to Blog
          </button>

          <article className="bg-gradient-to-br from-purple-900 to-indigo-900 rounded-2xl overflow-hidden border border-purple-500">
            <img
              src={
                selectedPost.mainImage
                  ? urlForImage(selectedPost.mainImage).url()
                  : '/placeholder.svg'
              }
              alt={selectedPost.title}
              className="w-full h-64 md:h-96 object-cover"
            />

            <div className="p-8">
              <div className="flex items-center gap-4 text-purple-300 text-sm mb-4">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{formatDate(selectedPost.date)}</span>
                </div>
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span>{selectedPost.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Tag className="w-4 h-4" />
                  <span className="capitalize">{selectedPost.category}</span>
                </div>
              </div>

              <h1 className="text-4xl font-bold text-white mb-6">
                {selectedPost.title}
              </h1>

              <div className="prose prose-purple prose-lg max-w-none">
                <PortableText value={selectedPost.content} />
              </div>

              {/* Affiliate CTAs within content */}
              <div className="my-12 p-6 bg-gradient-to-r from-purple-800 to-pink-800 rounded-xl border border-purple-500">
                <h3 className="text-xl font-bold text-white mb-4">
                  Ready for Personal Guidance?
                </h3>
                <p className="text-purple-200 mb-6">
                  Get insights tailored specifically to your situation with a
                  professional reading
                </p>
                <AffiliateButton
                  text="Get Your Personal Reading"
                  className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300"
                />
              </div>

              <div className="border-t border-purple-500 pt-8 mt-8">
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedPost.tags?.map((tag) => (
                    <span
                      key={tag}
                      className="bg-purple-700 text-purple-200 px-3 py-1 rounded-full text-sm"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                <div className="text-center">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Want More Insights?
                  </h3>
                  <p className="text-purple-200 mb-6">
                    Explore professional psychic services for deeper
                    understanding
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <AffiliateButton
                      text="Talk to Psychic Now"
                      className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300"
                    />
                    <AffiliateButton
                      text="Explore Tarot Reading"
                      className="bg-transparent border-2 border-pink-400 text-pink-300 hover:bg-pink-400 hover:text-white px-8 py-3 rounded-full font-semibold transition-all duration-300"
                    />
                  </div>
                </div>
              </div>
            </div>
          </article>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen py-20 px-4">
      <motion.div {...fadeIn} className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Cosmic Insights Blog
          </h1>
          <p className="text-xl text-purple-200">
            Discover the latest wisdom from the stars and beyond
          </p>
        </div>

        {/* Search and Filter */}
        <motion.div {...slideUp} className="mb-12">
          <div className="bg-gradient-to-r from-purple-800 to-indigo-800 p-6 rounded-2xl border border-purple-500">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="w-5 h-5 text-purple-300 absolute left-3 top-1/2 transform -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-black bg-opacity-50 border border-purple-400 rounded-lg text-white placeholder-purple-300 focus:border-pink-400 focus:outline-none transition-colors duration-300"
                />
              </div>

              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 bg-black bg-opacity-50 border border-purple-400 rounded-lg text-white focus:border-pink-400 focus:outline-none transition-colors duration-300"
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
        <motion.div {...slideUp} className="text-center mb-16">
          <div className="bg-gradient-to-r from-purple-800 to-pink-800 p-8 rounded-2xl border border-purple-500">
            <h2 className="text-2xl font-bold text-white mb-4">
              Get Personalized Guidance
            </h2>
            <p className="text-purple-200 mb-6">
              While our articles provide general insights, get advice tailored
              specifically to your situation
            </p>
            <AffiliateButton
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
              onClick={() => setSelectedPost(post)}
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
