'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Heart, Star, Sparkles } from 'lucide-react'
import AffiliateButton from '@/components/AffiliateButton'
import { fadeIn, slideUp } from '@/utils/motion'
import { zodiacSigns } from '@/utils/zodiacData'

const CompatibilityPage = () => {
  const [sign1, setSign1] = useState('')
  const [sign2, setSign2] = useState('')
  const [result, setResult] = useState<any>(null)

  const compatibilityData: {
    [key: string]: { score: number; title: string; description: string }
  } = {
    'Aries-Leo': {
      score: 95,
      title: 'Fiery Passion',
      description:
        'A dynamic and passionate match filled with adventure and excitement.',
    },
    'Aries-Sagittarius': {
      score: 92,
      title: 'Adventure Awaits',
      description:
        'Both love freedom and adventure, creating an exciting partnership.',
    },
    'Taurus-Virgo': {
      score: 88,
      title: 'Grounded Love',
      description:
        'A stable and practical relationship built on mutual respect and understanding.',
    },
    'Gemini-Libra': {
      score: 90,
      title: 'Mental Connection',
      description:
        'Intellectual compatibility and great communication make this a harmonious match.',
    },
    'Cancer-Scorpio': {
      score: 94,
      title: 'Deep Waters',
      description:
        "Intense emotional connection and deep understanding of each other's needs.",
    },
    'Leo-Sagittarius': {
      score: 89,
      title: 'Royal Adventure',
      description: 'Both signs love life and bring out the best in each other.',
    },
    'Virgo-Capricorn': {
      score: 91,
      title: 'Perfect Planning',
      description:
        'A methodical and goal-oriented partnership that builds lasting success.',
    },
    'Libra-Aquarius': {
      score: 87,
      title: 'Balanced Innovation',
      description:
        'A harmonious blend of social grace and innovative thinking.',
    },
    'Scorpio-Pisces': {
      score: 93,
      title: 'Mystical Bond',
      description: 'A deeply intuitive and emotionally fulfilling connection.',
    },
    'Capricorn-Taurus': {
      score: 86,
      title: 'Solid Foundation',
      description: 'A practical and stable relationship built to last.',
    },
    'Aquarius-Gemini': {
      score: 88,
      title: 'Innovative Minds',
      description: 'Intellectual stimulation and shared vision for the future.',
    },
    'Pisces-Cancer': {
      score: 92,
      title: 'Emotional Harmony',
      description: 'A nurturing and emotionally supportive partnership.',
    },
  }

  const getCompatibility = () => {
    if (!sign1 || !sign2) return
    const key1 = `${sign1}-${sign2}`
    const key2 = `${sign2}-${sign1}`
    const compatibility = compatibilityData[key1] ||
      compatibilityData[key2] || {
        score: Math.floor(Math.random() * 40) + 60,
        title: 'Unique Connection',
        description:
          'Every relationship has its own special dynamics. Explore deeper to understand your unique bond.',
      }
    setResult({ ...compatibility, sign1, sign2 })
  }

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-400'
    if (score >= 80) return 'text-yellow-400'
    if (score >= 70) return 'text-orange-400'
    return 'text-red-400'
  }

  const getScoreGradient = (score: number) => {
    if (score >= 90) return 'from-green-500 to-emerald-500'
    if (score >= 80) return 'from-yellow-500 to-amber-500'
    if (score >= 70) return 'from-orange-500 to-red-500'
    return 'from-red-500 to-pink-500'
  }

  return (
    <div className="min-h-screen py-20 px-4">
      <motion.div {...fadeIn} className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center items-center gap-3 mb-6">
            <Heart className="w-10 h-10 text-pink-400" />
            <Sparkles className="w-8 h-8 text-purple-400" />
            <Heart className="w-10 h-10 text-pink-400" />
          </div>
          <h1 className="text-5xl font-bold text-white mb-4 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
            Zodiac Compatibility
          </h1>
          <p className="text-xl text-purple-200">
            Discover your cosmic connection with your partner
          </p>
        </div>

        {/* Compatibility Checker */}
        <motion.div
          {...slideUp}
          className="bg-gradient-to-br from-purple-800 to-pink-800 p-8 rounded-2xl border border-purple-500 mb-12"
        >
          <h2 className="text-2xl font-bold text-white mb-6 text-center">
            Check Your Compatibility
          </h2>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div>
              <label className="block text-purple-200 mb-3 font-semibold">
                Your Zodiac Sign
              </label>
              <select
                value={sign1}
                onChange={(e) => setSign1(e.target.value)}
                className="w-full p-4 bg-black bg-opacity-50 border border-purple-400 rounded-lg text-white focus:border-pink-400 focus:outline-none"
              >
                <option value="">Select your sign</option>
                {zodiacSigns.map((sign) => (
                  <option key={sign.name} value={sign.name}>
                    {sign.symbol} {sign.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-purple-200 mb-3 font-semibold">
                Partner's Zodiac Sign
              </label>
              <select
                value={sign2}
                onChange={(e) => setSign2(e.target.value)}
                className="w-full p-4 bg-black bg-opacity-50 border border-purple-400 rounded-lg text-white focus:border-pink-400 focus:outline-none"
              >
                <option value="">Select partner's sign</option>
                {zodiacSigns.map((sign) => (
                  <option key={sign.name} value={sign.name}>
                    {sign.symbol} {sign.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="text-center">
            <button
              onClick={getCompatibility}
              disabled={!sign1 || !sign2}
              className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 disabled:from-gray-600 disabled:to-gray-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed"
            >
              Check Compatibility
            </button>
          </div>
        </motion.div>

        {/* Results */}
        {result && (
          <motion.div
            {...slideUp}
            className="bg-gradient-to-br from-indigo-900 to-purple-900 p-8 rounded-2xl border border-purple-500 mb-12"
          >
            <div className="text-center mb-8">
              <div className="flex justify-center items-center gap-4 mb-6">
                <div className="text-4xl">
                  {zodiacSigns.find((s) => s.name === result.sign1)?.symbol}
                </div>
                <Heart className="w-8 h-8 text-pink-400" />
                <div className="text-4xl">
                  {zodiacSigns.find((s) => s.name === result.sign2)?.symbol}
                </div>
              </div>
              <h2 className="text-3xl font-bold text-white mb-2">
                {result.title}
              </h2>
              <p className="text-lg text-purple-200 mb-6">
                {result.sign1} & {result.sign2}
              </p>
            </div>
            <div className="text-center mb-8">
              <div
                className={`text-6xl font-bold mb-4 ${getScoreColor(result.score)}`}
              >
                {result.score}%
              </div>
              <div className="w-full bg-gray-700 rounded-full h-4 mb-6">
                <div
                  className={`bg-gradient-to-r ${getScoreGradient(result.score)} h-4 rounded-full transition-all duration-1000`}
                  style={{ width: `${result.score}%` }}
                ></div>
              </div>
              <p className="text-purple-200 text-lg leading-relaxed max-w-2xl mx-auto">
                {result.description}
              </p>
            </div>
            <div className="text-center">
              <AffiliateButton
                text="Get Detailed Love Reading"
                className="bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
              />
            </div>
          </motion.div>
        )}

        {/* Professional Reading CTA */}
        <motion.div {...fadeIn} className="text-center">
          <div className="bg-gradient-to-r from-purple-800 to-pink-800 p-8 rounded-2xl border border-purple-500">
            <Star className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-white mb-4">
              Want a Deeper Analysis?
            </h2>
            <p className="text-purple-200 mb-6 max-w-2xl mx-auto">
              Get personalized compatibility insights from professional
              relationship astrologers who can provide detailed analysis of your
              unique connection.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <AffiliateButton
                text="Talk to Love Expert"
                className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300"
              />
              <AffiliateButton
                text="Get Synastry Reading"
                className="bg-transparent border-2 border-yellow-400 text-yellow-300 hover:bg-yellow-400 hover:text-white px-8 py-3 rounded-full font-semibold transition-all duration-300"
              />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default CompatibilityPage
