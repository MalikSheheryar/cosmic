'use client'
import type React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  Star,
  Heart,
  Briefcase,
  Shield,
  ArrowLeft,
  Calendar,
} from 'lucide-react'
import AffiliateButton from '@/components/AffiliateButton'
import { fadeIn, slideUp } from '@/utils/motion'
import type { ZodiacSign } from '@/utils/zodiacData'

interface ZodiacSignClientPageProps {
  zodiacData: ZodiacSign | null
}

const ZodiacSignClientPage: React.FC<ZodiacSignClientPageProps> = ({
  zodiacData,
}) => {
  if (!zodiacData) {
    return (
      <div className="min-h-screen py-20 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-4">Sign Not Found</h1>
          <p className="text-purple-200 mb-8">
            The zodiac sign you're looking for doesn't exist.
          </p>
          <Link
            href="/horoscope"
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
          >
            Go to Horoscope
          </Link>
        </div>
      </div>
    )
  }

  const today = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <div className="min-h-screen py-20 px-4">
      <motion.div {...fadeIn} className="max-w-6xl mx-auto">
        {/* Back Button */}
        <Link
          href="/horoscope"
          className="flex items-center gap-2 text-purple-300 hover:text-white mb-8 transition-colors duration-300"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Daily Horoscope
        </Link>

        {/* Header */}
        <div className="text-center mb-16">
          <motion.div {...slideUp} className="mb-8">
            <div className="text-8xl mb-6">{zodiacData.symbol}</div>
            <h1 className="text-6xl font-bold text-white mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              {zodiacData.name}
            </h1>
            <p className="text-2xl text-purple-200 mb-2">{zodiacData.dates}</p>
            <p className="text-lg text-purple-300">
              {zodiacData.element} • {zodiacData.quality}
            </p>
          </motion.div>
        </div>

        {/* Today's Horoscope Section */}
        <motion.div {...slideUp} className="mb-16">
          <div className="bg-gradient-to-br from-indigo-900 to-purple-900 p-8 rounded-2xl border border-purple-500">
            <div className="flex items-center gap-3 mb-6">
              <Calendar className="w-8 h-8 text-yellow-400" />
              <h2 className="text-3xl font-bold text-white">
                Today's Horoscope
              </h2>
            </div>
            <p className="text-xl text-purple-200 mb-4">{today}</p>
            <p className="text-purple-200 text-lg leading-relaxed mb-8">
              {zodiacData.horoscope}
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-black bg-opacity-30 p-4 rounded-lg text-center">
                <span className="text-purple-300 text-sm">Lucky Number</span>
                <div className="text-2xl font-bold text-white mt-2">
                  {zodiacData.luckyNumber}
                </div>
              </div>
              <div className="bg-black bg-opacity-30 p-4 rounded-lg text-center">
                <span className="text-purple-300 text-sm">Lucky Color</span>
                <div className="text-2xl font-bold text-white mt-2">
                  {zodiacData.luckyColor}
                </div>
              </div>
              <div className="bg-black bg-opacity-30 p-4 rounded-lg text-center">
                <span className="text-purple-300 text-sm">Mood</span>
                <div className="text-2xl font-bold text-white mt-2">
                  {zodiacData.mood}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Left Column - Overview */}
          <motion.div {...slideUp} className="lg:col-span-2 space-y-8">
            {/* Today's Key Areas */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-pink-800 to-red-800 p-6 rounded-xl border border-pink-500">
                <Heart className="w-8 h-8 text-pink-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">
                  Love & Relationships
                </h3>
                <p className="text-pink-200 text-sm leading-relaxed">
                  {zodiacData.love}
                </p>
              </div>
              <div className="bg-gradient-to-br from-green-800 to-emerald-800 p-6 rounded-xl border border-green-500">
                <Briefcase className="w-8 h-8 text-green-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">
                  Career & Money
                </h3>
                <p className="text-green-200 text-sm leading-relaxed">
                  {zodiacData.career}
                </p>
              </div>
              <div className="bg-gradient-to-br from-blue-800 to-cyan-800 p-6 rounded-xl border border-blue-500">
                <Shield className="w-8 h-8 text-blue-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">
                  Health & Wellness
                </h3>
                <p className="text-blue-200 text-sm leading-relaxed">
                  {zodiacData.health}
                </p>
              </div>
            </div>

            {/* Personality Overview */}
            <div className="bg-gradient-to-br from-purple-800 to-indigo-800 p-8 rounded-2xl border border-purple-500">
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <Star className="w-8 h-8 text-yellow-400" />
                Personality Overview
              </h2>
              <p className="text-purple-200 text-lg leading-relaxed mb-6">
                {zodiacData.personality}
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    Strengths
                  </h3>
                  <ul className="space-y-2">
                    {zodiacData.strengths.map(
                      (strength: string, index: number) => (
                        <li
                          key={index}
                          className="text-green-300 flex items-center gap-2"
                        >
                          <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                          {strength}
                        </li>
                      )
                    )}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    Challenges
                  </h3>
                  <ul className="space-y-2">
                    {zodiacData.weaknesses.map(
                      (weakness: string, index: number) => (
                        <li
                          key={index}
                          className="text-orange-300 flex items-center gap-2"
                        >
                          <span className="w-2 h-2 bg-orange-400 rounded-full"></span>
                          {weakness}
                        </li>
                      )
                    )}
                  </ul>
                </div>
              </div>
            </div>

            {/* Compatibility */}
            <div className="bg-gradient-to-br from-purple-800 to-pink-800 p-8 rounded-2xl border border-purple-500">
              <h2 className="text-3xl font-bold text-white mb-6">
                Compatibility
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-bold text-green-400 mb-4">
                    Most Compatible With
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {zodiacData.compatible.map(
                      (compatibleSign: string, index: number) => (
                        <span
                          key={index}
                          className="bg-green-700 text-green-200 px-4 py-2 rounded-full text-sm font-semibold"
                        >
                          {compatibleSign}
                        </span>
                      )
                    )}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-red-400 mb-4">
                    Challenging Matches
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {zodiacData.challenging.map(
                      (challengingSign: string, index: number) => (
                        <span
                          key={index}
                          className="bg-red-700 text-red-200 px-4 py-2 rounded-full text-sm font-semibold"
                        >
                          {challengingSign}
                        </span>
                      )
                    )}
                  </div>
                </div>
              </div>
              <div className="text-center mt-8">
                <Link
                  href="/compatibility"
                  className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300"
                >
                  Check Your Compatibility
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Quick Info & CTAs */}
          <motion.div {...slideUp} className="space-y-6">
            {/* Quick Facts */}
            <div className="bg-gradient-to-br from-indigo-800 to-purple-800 p-6 rounded-2xl border border-indigo-500">
              <h3 className="text-2xl font-bold text-white mb-6">
                Quick Facts
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-purple-300">Element:</span>
                  <span className="text-white font-semibold">
                    {zodiacData.element}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-purple-300">Quality:</span>
                  <span className="text-white font-semibold">
                    {zodiacData.quality}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-purple-300">Ruling Planet:</span>
                  <span className="text-white font-semibold">
                    {zodiacData.rulingPlanet}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-purple-300">Lucky Color:</span>
                  <span className="text-white font-semibold">
                    {zodiacData.luckyColor}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-purple-300">Lucky Number:</span>
                  <span className="text-white font-semibold">
                    {zodiacData.luckyNumber}
                  </span>
                </div>
              </div>
            </div>

            {/* Affiliate CTAs */}
            <div className="bg-gradient-to-br from-yellow-800 to-orange-800 p-6 rounded-2xl border border-yellow-500">
              <h3 className="text-xl font-bold text-white mb-4">
                Get Personal Insights
              </h3>
              <p className="text-yellow-200 mb-6 text-sm">
                Discover what the stars have planned specifically for you with a
                personalized reading.
              </p>
              <AffiliateButton
                text="Get Your Reading"
                className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white py-3 rounded-full font-semibold transition-all duration-300 mb-4"
              />
            </div>

            <div className="bg-gradient-to-br from-pink-800 to-purple-800 p-6 rounded-2xl border border-pink-500">
              <h3 className="text-xl font-bold text-white mb-4">
                Love Guidance
              </h3>
              <p className="text-pink-200 mb-6 text-sm">
                Get specific advice about your romantic life and relationships
                from expert love psychics.
              </p>
              <AffiliateButton
                text="Talk to Love Expert"
                className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white py-3 rounded-full font-semibold transition-all duration-300"
              />
            </div>

            <div className="bg-gradient-to-br from-green-800 to-blue-800 p-6 rounded-2xl border border-green-500">
              <h3 className="text-xl font-bold text-white mb-4">
                Career Insights
              </h3>
              <p className="text-green-200 mb-6 text-sm">
                Unlock your professional potential with guidance tailored to
                your zodiac sign.
              </p>
              <AffiliateButton
                text="Career Reading"
                className="w-full bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white py-3 rounded-full font-semibold transition-all duration-300"
              />
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div {...fadeIn} className="text-center">
          <div className="bg-gradient-to-r from-purple-800 to-pink-800 p-8 rounded-2xl border border-purple-500">
            <Star className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Dive Deeper?
            </h2>
            <p className="text-purple-200 mb-8 max-w-2xl mx-auto">
              While knowing your sun sign is great, your complete birth chart
              reveals so much more about your personality, relationships, and
              life path.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <AffiliateButton
                text="Get Full Birth Chart"
                className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300"
              />
              <AffiliateButton
                text="Talk to Astrologer"
                className="bg-transparent border-2 border-yellow-400 text-yellow-300 hover:bg-yellow-400 hover:text-white px-8 py-3 rounded-full font-semibold transition-all duration-300"
              />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default ZodiacSignClientPage
