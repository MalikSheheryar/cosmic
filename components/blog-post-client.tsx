'use client'
import type React from 'react'
import { motion } from 'framer-motion'
import { Calendar, User, Tag, ArrowLeft } from 'lucide-react'
import { useRouter } from 'next/navigation'
import AffiliateButton from '@/components/AffiliateButton'
import { fadeIn } from '@/utils/motion'
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
  slug: { current: string }
}

interface BlogPostClientProps {
  post: BlogPost
}

const BlogPostClient: React.FC<BlogPostClientProps> = ({ post }) => {
  const router = useRouter()

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

  return (
    <div className="min-h-screen py-20 px-4">
      <motion.div {...fadeIn} className="max-w-4xl mx-auto">
        <button
          onClick={() => router.push('/blog')}
          className="flex items-center gap-2 text-purple-300 hover:text-white mb-8 transition-colors duration-300"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Blog
        </button>

        <article className="bg-gradient-to-br from-purple-900 to-indigo-900 rounded-2xl overflow-hidden border border-purple-500">
          <img
            src={
              post.mainImage
                ? urlForImage(post.mainImage).url()
                : '/placeholder.svg'
            }
            alt={post.title}
            className="w-full h-64 md:h-96 object-cover"
          />
          <div className="p-8">
            <div className="flex items-center gap-4 text-purple-300 text-sm mb-4">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{formatDate(post.date)}</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Tag className="w-4 h-4" />
                <span className="capitalize">{post.category}</span>
              </div>
            </div>

            <h1 className="text-4xl font-bold text-white mb-6">{post.title}</h1>

            <div className="prose prose-purple prose-lg max-w-none">
              <PortableText value={post.content} />
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
                {post.tags?.map((tag) => (
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
                  Explore professional psychic services for deeper understanding
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

export default BlogPostClient
