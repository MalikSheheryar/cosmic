'use client'
import type React from 'react'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { Star, Heart, Briefcase } from 'lucide-react'
import { fadeIn } from '@/utils/motion'
import type { ZodiacSign } from '@/utils/zodiacData'

interface HoroscopeCardProps {
  sign: ZodiacSign
  isDetailed?: boolean
  delay?: number
}

const HoroscopeCard: React.FC<HoroscopeCardProps> = ({
  sign,
  isDetailed = false,
  delay = 0,
}) => {
  const router = useRouter()

  const handleClick = () => {
    router.push(`/zodiac/${sign.name.toLowerCase()}`)
  }

  if (isDetailed) {
    return (
      <motion.div
        {...fadeIn}
        transition={{ delay }}
        className="bg-gradient-to-br from-purple-800 to-indigo-800 p-6 rounded-2xl border border-purple-500 hover:border-purple-400 transition-all duration-300 cursor-pointer transform hover:scale-105"
        onClick={handleClick}
      >
        <div className="text-center mb-6">
          <div className="text-5xl mb-3">{sign.symbol}</div>
          <h3 className="text-2xl font-bold text-white mb-2">{sign.name}</h3>
          <p className="text-purple-300 text-sm">{sign.dates}</p>
        </div>

        <div className="space-y-4">
          <div>
            <h4 className="text-lg font-semibold text-white mb-2">
              Today's Horoscope
            </h4>
            <p className="text-purple-200 text-sm leading-relaxed">
              {sign.horoscope}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-black bg-opacity-30 p-3 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Heart className="w-4 h-4 text-pink-400" />
                <span className="text-pink-400 text-sm font-semibold">
                  Love
                </span>
              </div>
              <p className="text-purple-200 text-xs">{sign.love}</p>
            </div>

            <div className="bg-black bg-opacity-30 p-3 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Briefcase className="w-4 h-4 text-green-400" />
                <span className="text-green-400 text-sm font-semibold">
                  Career
                </span>
              </div>
              <p className="text-purple-200 text-xs">{sign.career}</p>
            </div>
          </div>

          <div className="flex justify-between text-sm">
            <div>
              <span className="text-purple-300">Lucky Number: </span>
              <span className="text-white font-semibold">
                {sign.luckyNumber}
              </span>
            </div>
            <div>
              <span className="text-purple-300">Mood: </span>
              <span className="text-white font-semibold">{sign.mood}</span>
            </div>
          </div>
        </div>

        <div className="mt-6 text-center">
          <button className="text-purple-300 hover:text-white text-sm font-semibold transition-colors duration-300">
            Read Full Profile →
          </button>
        </div>
      </motion.div>
    )
  }

  return (
    <motion.div
      {...fadeIn}
      transition={{ delay }}
      className="bg-gradient-to-br from-purple-800 to-blue-800 p-6 rounded-xl border border-purple-500 hover:border-purple-400 transition-all duration-300 cursor-pointer transform hover:scale-105"
      onClick={handleClick}
    >
      <div className="text-center mb-4">
        <div className="text-4xl mb-3">{sign.symbol}</div>
        <h3 className="text-xl font-bold text-white mb-1">{sign.name}</h3>
        <p className="text-purple-300 text-sm">{sign.dates}</p>
      </div>

      <div className="mb-4">
        <p className="text-purple-200 text-sm leading-relaxed line-clamp-3">
          {sign.horoscope}
        </p>
      </div>

      <div className="flex justify-between items-center text-xs">
        <div className="flex items-center gap-1">
          <Star className="w-3 h-3 text-yellow-400" />
          <span className="text-purple-300">Lucky: {sign.luckyNumber}</span>
        </div>
        <div className="text-purple-300">Mood: {sign.mood}</div>
      </div>

      <div className="mt-4 text-center">
        <span className="text-purple-300 hover:text-white text-sm font-semibold transition-colors duration-300">
          View Details →
        </span>
      </div>
    </motion.div>
  )
}

export default HoroscopeCard
