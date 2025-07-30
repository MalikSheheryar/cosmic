'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Star, Calendar } from 'lucide-react'
import HoroscopeCard from '@/components/HoroscopeCard'
import AffiliateButton from '@/components/AffiliateButton'
import { fadeIn, slideUp } from '@/utils/motion'
import { zodiacSigns } from '@/utils/zodiacData'

const DailyHoroscopeClient = () => {
  const [selectedSign, setSelectedSign] = useState<any>(null)
  const today = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <div className="min-h-screen py-20 px-4">
      <motion.div {...fadeIn} className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center items-center gap-3 mb-6">
            <Calendar className="w-8 h-8 text-purple-400" />
            <Star className="w-10 h-10 text-yellow-400" />
            <Calendar className="w-8 h-8 text-purple-400" />
          </div>
          <h1 className="text-5xl font-bold text-white mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Daily Horoscope
          </h1>
          <p className="text-xl text-purple-200 mb-2">{today}</p>
          <p className="text-lg text-purple-300">
            Discover what the stars have aligned for you today
          </p>
        </div>

        {/* Affiliate CTA */}
        <motion.div {...slideUp} className="text-center mb-16">
          <div className="bg-gradient-to-r from-purple-800 to-pink-800 p-8 rounded-2xl border border-purple-500">
            <h2 className="text-2xl font-bold text-white mb-4">
              Want a Deeper Reading?
            </h2>
            <p className="text-purple-200 mb-6">
              Get personalized insights from professional astrologers
            </p>
            <AffiliateButton
              text="Get Your Full Reading Now"
              className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white px-8 py-3 rounded-full font-semibold transform hover:scale-105 transition-all duration-300"
            />
          </div>
        </motion.div>

        {/* Zodiac Signs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {zodiacSigns.map((sign, index) => (
            <motion.div
              key={sign.name}
              {...fadeIn}
              transition={{ delay: index * 0.05 }}
              onClick={() => setSelectedSign(sign)}
              className="cursor-pointer"
            >
              <HoroscopeCard sign={sign} isDetailed={false} />
            </motion.div>
          ))}
        </div>

        {/* Selected Sign Detail */}
        {selectedSign && (
          <motion.div
            {...slideUp}
            className="bg-gradient-to-br from-indigo-900 to-purple-900 p-8 rounded-2xl border border-purple-500 mb-16"
          >
            <div className="text-center mb-8">
              <div className="text-6xl mb-4">{selectedSign.symbol}</div>
              <h2 className="text-3xl font-bold text-white mb-2">
                {selectedSign.name}
              </h2>
              <p className="text-purple-300 text-lg">{selectedSign.dates}</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-white mb-4">
                  {"Today's Horoscope"}
                </h3>
                <p className="text-purple-200 leading-relaxed mb-6">
                  {selectedSign.horoscope}
                </p>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-purple-300">Lucky Number:</span>
                    <span className="text-white font-semibold">
                      {selectedSign.luckyNumber}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-purple-300">Lucky Color:</span>
                    <span className="text-white font-semibold">
                      {selectedSign.luckyColor}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-purple-300">Mood:</span>
                    <span className="text-white font-semibold">
                      {selectedSign.mood}
                    </span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Key Areas</h3>
                <div className="space-y-4">
                  <div className="bg-black bg-opacity-30 p-4 rounded-lg">
                    <h4 className="text-pink-400 font-semibold mb-2">
                      Love & Relationships
                    </h4>
                    <p className="text-purple-200 text-sm">
                      {selectedSign.love}
                    </p>
                  </div>
                  <div className="bg-black bg-opacity-30 p-4 rounded-lg">
                    <h4 className="text-green-400 font-semibold mb-2">
                      Career & Money
                    </h4>
                    <p className="text-purple-200 text-sm">
                      {selectedSign.career}
                    </p>
                  </div>
                  <div className="bg-black bg-opacity-30 p-4 rounded-lg">
                    <h4 className="text-blue-400 font-semibold mb-2">
                      Health & Wellness
                    </h4>
                    <p className="text-blue-200 text-sm">
                      {selectedSign.health}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center mt-8">
              <AffiliateButton
                text="Get Professional Analysis"
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300"
              />
            </div>
          </motion.div>
        )}

        {/* Bottom CTA */}
        <motion.div {...fadeIn} className="text-center">
          <div className="bg-gradient-to-r from-blue-800 to-purple-800 p-8 rounded-2xl border border-blue-500">
            <Star className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-white mb-4">
              Need More Guidance?
            </h2>
            <p className="text-blue-200 mb-6">
              Connect with experienced psychics for personalized readings
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <AffiliateButton
                text="Talk to a Psychic Now"
                className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300"
              />
              <AffiliateButton
                text="Explore Tarot Readings"
                className="bg-transparent border-2 border-yellow-400 text-yellow-300 hover:bg-yellow-400 hover:text-white px-8 py-3 rounded-full font-semibold transition-all duration-300"
              />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default DailyHoroscopeClient
