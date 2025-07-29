'use client'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Star, Heart, Sparkles, Moon } from 'lucide-react'
import AffiliateButton from '@/components/AffiliateButton'
import HoroscopeCard from '@/components/HoroscopeCard'
import BlogCard from '@/components/BlogCard'
import QuizCard from '@/components/QuizCard'
import { fadeIn, slideUp } from '@/utils/motion'
import { client } from '@/lib/sanity'
import { zodiacSigns } from '@/utils/zodiacData'

// Define types for fetched data
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

interface Quiz {
  _id: string
  title: string
  description: string
  type: string
  difficulty: string
  duration: number
  participants: string
  tags: string[]
  questions: any[]
  results: any[]
}

const getIcon = (type: string) => {
  switch (type) {
    case 'zodiac':
      return <Star className="w-8 h-8" />
    case 'love':
      return <Heart className="w-8 h-8" />
    case 'future':
      return <Moon className="w-8 h-8" />
    case 'personality':
      return <Sparkles className="w-8 h-8" />
    default:
      return <Star className="w-8 h-8" />
  }
}

const Home = () => {
  const [data, setData] = useState({
    latestPosts: [] as BlogPost[],
    quizzesPreview: [] as Quiz[],
    loading: true,
    error: null as string | null,
  })

  useEffect(() => {
    let isMounted = true
    const fetchHomePageData = async () => {
      try {
        console.log('Starting to fetch home page data...')
        const blogPostsQuery = `*[_type == "blogPost"] | order(publishedAt desc) [0...3] {
          _id, title, excerpt, "content": rawContent, author, date, category, mainImage, tags
        }`
        const quizzesQuery = `*[_type == "quiz"] | order(orderRank asc) [0...3] {
          _id, title, description, type, difficulty, duration, participants, tags
        }`
        const [latestPosts, quizzesPreview] = await Promise.all([
          client.fetch<BlogPost[]>(blogPostsQuery),
          client.fetch<Quiz[]>(quizzesQuery),
        ])

        if (isMounted) {
          console.log('Data fetched successfully:', {
            zodiacCount: zodiacSigns.length,
            blogCount: latestPosts?.length || 0,
            quizCount: quizzesPreview?.length || 0,
          })
          setData({
            latestPosts: latestPosts || [],
            quizzesPreview: quizzesPreview || [],
            loading: false,
            error: null,
          })
        }
      } catch (error) {
        console.error('Error fetching home page data:', error)
        if (isMounted) {
          setData((prev) => ({
            ...prev,
            loading: false,
            error: error instanceof Error ? error.message : 'Unknown error',
          }))
        }
      }
    }

    fetchHomePageData()

    return () => {
      isMounted = false
    }
  }, [])

  const { latestPosts, quizzesPreview, loading, error } = data

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 px-8 text-center">
        <motion.div {...fadeIn} className="max-w-4xl mx-auto">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <Star className="w-16 h-16 text-yellow-400 animate-pulse" />
              <Sparkles className="w-8 h-8 text-purple-300 absolute -top-2 -right-2" />
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Discover Your Cosmic Destiny
          </h1>
          <p className="text-xl text-purple-200 mb-8 max-w-2xl mx-auto">
            Unlock the secrets of the stars with daily horoscopes, compatibility
            insights, and professional psychic guidance
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <AffiliateButton
              text="Get Your Reading Now"
              className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8 py-4 rounded-full text-lg font-semibold transform hover:scale-105 transition-all duration-300"
            />
            <Link
              href="/horoscope"
              className="bg-transparent border-2 border-purple-400 text-purple-300 hover:bg-purple-400 hover:text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300"
            >
              View Daily Horoscope
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Compatibility Quiz Teaser - Featured */}
      <section className="py-16 px-4 bg-black bg-opacity-10">
        <motion.div {...slideUp} className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-pink-800 to-purple-800 p-8 rounded-3xl border border-pink-500 shadow-2xl">
            <div className="flex justify-center items-center gap-3 mb-6">
              <Heart className="w-12 h-12 text-pink-400" />
              <Sparkles className="w-10 h-10 text-yellow-400" />
              <Heart className="w-12 h-12 text-pink-400" />
            </div>
            <h2 className="text-4xl font-bold text-white mb-4">
              Are You Cosmically Compatible?
            </h2>
            <p className="text-pink-200 text-lg mb-6 max-w-2xl mx-auto">
              Discover if you and your partner are destined to be together
              through our comprehensive cosmic compatibility test. Uncover the
              truth about your relationship through astrology and emotional
              connection.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/quizzes/-cosmic-compatibility-test"
                className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white px-8 py-4 rounded-full text-lg font-bold transform hover:scale-105 transition-all duration-300 shadow-lg"
              >
                💕 Take Compatibility Test
              </Link>
              <AffiliateButton
                text="Get Professional Love Reading"
                className="bg-transparent border-2 border-yellow-400 text-yellow-300 hover:bg-yellow-400 hover:text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300"
              />
            </div>
            <div className="mt-6 flex justify-center items-center gap-6 text-pink-200 text-sm">
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-yellow-400" />
                <span>8.3K+ taken</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="w-4 h-4 text-pink-400" />
                <span>10 min test</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-purple-400" />
                <span>Instant results</span>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Daily Horoscope Preview */}
      <section className="py-16 px-4">
        <motion.div {...slideUp} className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Today's Cosmic Energy
            </h2>
            <p className="text-purple-200 text-lg">
              Get a glimpse of what the stars have in store
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {zodiacSigns.slice(0, 3).map((sign, index) => (
              <HoroscopeCard
                key={sign.name}
                sign={{
                  _id: sign.name,
                  name: sign.name,
                  symbol: sign.symbol,
                  dates: sign.dates,
                  horoscope: sign.horoscope,
                  luckyNumber: sign.luckyNumber,
                  mood: sign.mood,
                  love: sign.love,
                  career: sign.career,
                  health: sign.health,
                  element: sign.element,
                  quality: sign.quality,
                  rulingPlanet: sign.rulingPlanet,
                  luckyColor: sign.luckyColor,
                  strengths: sign.strengths,
                  weaknesses: sign.weaknesses,
                  compatible: sign.compatible,
                  challenging: sign.challenging,
                }}
                delay={index * 0.1}
              />
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/horoscope"
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
            >
              View All Signs
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Compatibility Teaser */}
      <section className="py-16 px-4 bg-black bg-opacity-20">
        <motion.div {...fadeIn} className="max-w-4xl mx-auto text-center">
          <Heart className="w-16 h-16 text-pink-400 mx-auto mb-6" />
          <h2 className="text-4xl font-bold text-white mb-6">
            Find Your Perfect Match
          </h2>
          <p className="text-purple-200 text-lg mb-8">
            Discover your astrological compatibility and unlock the secrets of
            cosmic love
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/compatibility"
              className="bg-gradient-to-r from-pink-500 to-red-500 text-white px-8 py-3 rounded-full hover:from-pink-600 hover:to-red-600 transition-all duration-300"
            >
              Check Compatibility
            </Link>
            <AffiliateButton
              text="Get Professional Love Reading"
              className="bg-transparent border-2 border-pink-400 text-pink-300 hover:bg-pink-400 hover:text-white px-8 py-3 rounded-full transition-all duration-300"
            />
          </div>
        </motion.div>
      </section>

      {/* Quizzes Preview */}
      <section className="py-16 px-4">
        <motion.div {...slideUp} className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Moon className="w-12 h-12 text-blue-400 mx-auto mb-4" />
            <h2 className="text-4xl font-bold text-white mb-4">
              Mystical Quizzes & Games
            </h2>
            <p className="text-purple-200 text-lg">
              Test your cosmic knowledge and discover hidden truths
            </p>
          </div>
          {quizzesPreview.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {quizzesPreview.map((quiz, index) => (
                <Link key={quiz._id} href="/quizzes">
                  <QuizCard
                    quiz={quiz}
                    icon={getIcon(quiz.type)}
                    delay={index * 0.1}
                  />
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <p className="text-purple-200">
                No quizzes available at the moment.
              </p>
            </div>
          )}
        </motion.div>
      </section>

      {/* Latest Blog Posts */}
      <section className="py-16 px-4 bg-black bg-opacity-20">
        <motion.div {...fadeIn} className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Astro Love Guide
            </h2>
            <p className="text-purple-200 text-lg">
              Latest wisdom from the stars
            </p>
          </div>
          {latestPosts.length > 0 ? (
            <div className="grid md:grid-cols-3 gap-8">
              {latestPosts.map((post, index) => (
                <Link key={post._id} href="/blog">
                  <BlogCard post={post} delay={index * 0.1} />
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <p className="text-purple-200">
                No blog posts available at the moment.
              </p>
            </div>
          )}
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 text-center">
        <motion.div {...fadeIn} className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Unlock Your Destiny?
          </h2>
          <p className="text-xl text-purple-200 mb-8">
            Connect with professional psychics and mediums for personalized
            guidance
          </p>
          <AffiliateButton
            text="Start Your Journey Now"
            className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white px-12 py-4 rounded-full text-xl font-bold transform hover:scale-105 transition-all duration-300 shadow-lg"
          />
        </motion.div>
      </section>
    </div>
  )
}

export default Home
