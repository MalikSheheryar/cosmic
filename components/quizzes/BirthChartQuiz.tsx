'use client'

import type React from 'react'
import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Star,
  Moon,
  Sun,
  MapPin,
  Clock,
  Sparkles,
  Heart,
  Briefcase,
  Zap,
  ArrowUp,
} from 'lucide-react'
import AffiliateButton from '@/components/AffiliateButton'

interface BirthChartQuizProps {
  onReset: () => void
}

interface FormData {
  name: string
  birthDate: string
  birthTime: string
  birthPlace: string
  latitude: number | null
  longitude: number | null
}

interface ZodiacSign {
  name: string
  symbol: string
  element: string
  traits: string
  love: string
  career: string
  superpower: string
}

interface Results {
  sunSign: ZodiacSign
  moonSign: ZodiacSign
  risingSign: ZodiacSign
  personality: string
  loveLife: string
  career: string
  superpower: string
}

const BirthChartQuiz: React.FC<BirthChartQuizProps> = ({ onReset }) => {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState<FormData>({
    name: '',
    birthDate: '',
    birthTime: '',
    birthPlace: '',
    latitude: null,
    longitude: null,
  })
  const [results, setResults] = useState<Results | null>(null)
  const [showModal, setShowModal] = useState(false)

  const zodiacSigns: Record<string, ZodiacSign> = {
    aries: {
      name: 'Aries',
      symbol: '♈',
      element: 'Fire',
      traits:
        'You are a natural born leader with incredible energy and passion. Your pioneering spirit drives you to take on new challenges fearlessly.',
      love: "In love, you're passionate and direct. You fall hard and fast, bringing excitement and adventure to your relationships.",
      career:
        'You excel in leadership roles and entrepreneurial ventures. Your competitive nature makes you perfect for fast-paced environments.',
      superpower:
        'Unstoppable Motivation - You can turn any dream into reality through sheer willpower!',
    },
    taurus: {
      name: 'Taurus',
      symbol: '♉',
      element: 'Earth',
      traits:
        "You are reliable, practical, and have an appreciation for life's finer things. Your steady nature provides stability to those around you.",
      love: "You're a devoted and sensual partner who values security and loyalty. You express love through acts of service.",
      career:
        'You thrive in careers that offer stability and allow you to work with your hands. Finance, real estate, or luxury goods suit you.',
      superpower:
        'Unshakeable Persistence - Once you set your mind to something, nothing can stop you!',
    },
    gemini: {
      name: 'Gemini',
      symbol: '♊',
      element: 'Air',
      traits:
        'You are curious, adaptable, and incredibly communicative. Your quick wit allows you to connect with people from all walks of life.',
      love: "You need mental stimulation in relationships. You're charming and seek a partner who can engage in deep conversations.",
      career:
        'You excel in communication-based careers like journalism, teaching, or social media. Your adaptability is your strength.',
      superpower:
        'Master Communicator - You can connect with anyone and make complex ideas simple to understand!',
    },
    cancer: {
      name: 'Cancer',
      symbol: '♋',
      element: 'Water',
      traits:
        "You are deeply intuitive, nurturing, and emotionally intelligent. Your caring nature makes you everyone's go-to for comfort.",
      love: "You're incredibly loyal and protective in relationships. You seek deep emotional connection and create a warm, safe haven.",
      career:
        "You're drawn to helping professions like healthcare, counseling, or education. Your empathy is invaluable.",
      superpower:
        'Emotional Healing - You have the gift to heal hearts and make people feel truly understood!',
    },
    leo: {
      name: 'Leo',
      symbol: '♌',
      element: 'Fire',
      traits:
        'You are confident, generous, and naturally charismatic. Your warm personality draws people to you like a magnet.',
      love: "You're romantic and generous in love, enjoying grand gestures and being adored. You need appreciation for your dramatic flair.",
      career:
        'You shine in creative fields, entertainment, or leadership positions. Your charisma makes you perfect for inspiring others.',
      superpower:
        'Magnetic Presence - You can light up any room and inspire others to believe in themselves!',
    },
    virgo: {
      name: 'Virgo',
      symbol: '♍',
      element: 'Earth',
      traits:
        'You are analytical, detail-oriented, and incredibly helpful. Your perfectionist nature helps you solve complex problems.',
      love: "You show love through acts of service and attention to your partner's needs. You seek mutual respect and shared values.",
      career:
        'You excel in detail-oriented careers like healthcare, research, or quality control. Your analytical skills are unmatched.',
      superpower:
        'Perfect Problem Solver - You can find solutions to the most complex challenges with ease!',
    },
    libra: {
      name: 'Libra',
      symbol: '♎',
      element: 'Air',
      traits:
        "You are diplomatic, charming, and have an innate sense of fairness. You're an excellent mediator with refined taste.",
      love: "You're a romantic who believes in true love and partnership. You seek harmony and often put your partner's needs first.",
      career:
        'You thrive in careers involving beauty, justice, or human relations. Law, design, or diplomacy suit your talents.',
      superpower:
        'Harmony Creator - You can bring peace and balance to any chaotic situation!',
    },
    scorpio: {
      name: 'Scorpio',
      symbol: '♏',
      element: 'Water',
      traits:
        'You are intense, passionate, and incredibly perceptive. Your ability to see beneath the surface gives you profound insights.',
      love: "You love deeply and intensely, seeking soul-deep connections. You're fiercely loyal but need complete honesty.",
      career:
        'You excel in careers involving investigation, psychology, or transformation. Your ability to uncover truth is remarkable.',
      superpower:
        'Truth Detector - You can see through any deception and uncover hidden mysteries!',
    },
    sagittarius: {
      name: 'Sagittarius',
      symbol: '♐',
      element: 'Fire',
      traits:
        'You are adventurous, optimistic, and philosophical. Your love for freedom takes you on amazing journeys.',
      love: "You need freedom and adventure in relationships. You're honest and seek a partner who shares your love for exploration.",
      career:
        'You thrive in careers involving travel, education, or international relations. Your broad perspective inspires others.',
      superpower:
        'Infinite Optimism - You can find the silver lining in any situation and inspire hope in others!',
    },
    capricorn: {
      name: 'Capricorn',
      symbol: '♑',
      element: 'Earth',
      traits:
        'You are ambitious, disciplined, and incredibly responsible. Your practical approach helps you achieve long-term goals.',
      love: "You're serious about relationships and seek a partner who shares your values. You express love through commitment and building a secure future together.",
      career:
        'You excel in business, management, or any field requiring long-term planning. Your discipline makes you perfect for executive roles.',
      superpower:
        'Mountain Mover - You can achieve any goal through determination and strategic planning!',
    },
    aquarius: {
      name: 'Aquarius',
      symbol: '♒',
      element: 'Air',
      traits:
        'You are innovative, independent, and humanitarian. Your unique perspective helps you see solutions others miss.',
      love: "You need intellectual connection and freedom in relationships. You're attracted to unique individuals who share your vision.",
      career:
        'You thrive in innovative fields like technology or social work. Your ability to think outside the box creates revolutionary solutions.',
      superpower:
        "Future Vision - You can see possibilities others can't imagine and create revolutionary solutions!",
    },
    pisces: {
      name: 'Pisces',
      symbol: '♓',
      element: 'Water',
      traits:
        'You are intuitive, compassionate, and deeply creative. Your empathetic nature allows you to understand others deeply.',
      love: "You're romantic and selfless in love, seeking a deep spiritual connection with someone who understands your sensitive nature.",
      career:
        'You excel in creative or healing professions like art, music, or therapy. Your intuitive abilities help others.',
      superpower:
        "Psychic Intuition - You can sense things others can't and provide healing energy to those in need!",
    },
  }

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleLocationSearch = async (place: string) => {
    const mockCoords: Record<string, { lat: number; lng: number }> = {
      'New York': { lat: 40.7128, lng: -74.006 },
      London: { lat: 51.5074, lng: -0.1278 },
      Tokyo: { lat: 35.6762, lng: 139.6503 },
      Sydney: { lat: -33.8688, lng: 151.2093 },
    }

    const coords = mockCoords[place] || { lat: 0, lng: 0 }
    setFormData({
      ...formData,
      birthPlace: place,
      latitude: coords.lat,
      longitude: coords.lng,
    })
  }

  const getZodiacSign = (birthDate: Date): ZodiacSign => {
    const month = birthDate.getMonth() + 1
    const day = birthDate.getDate()

    const signs = Object.values(zodiacSigns)
    const signDates = [
      { name: 'capricorn', start: [12, 22], end: [1, 19] },
      { name: 'aquarius', start: [1, 20], end: [2, 18] },
      { name: 'pisces', start: [2, 19], end: [3, 20] },
      { name: 'aries', start: [3, 21], end: [4, 19] },
      { name: 'taurus', start: [4, 20], end: [5, 20] },
      { name: 'gemini', start: [5, 21], end: [6, 20] },
      { name: 'cancer', start: [6, 21], end: [7, 22] },
      { name: 'leo', start: [7, 23], end: [8, 22] },
      { name: 'virgo', start: [8, 23], end: [9, 22] },
      { name: 'libra', start: [9, 23], end: [10, 22] },
      { name: 'scorpio', start: [10, 23], end: [11, 21] },
      { name: 'sagittarius', start: [11, 22], end: [12, 21] },
    ]

    for (const sign of signDates) {
      const [startMonth, startDay] = sign.start
      const [endMonth, endDay] = sign.end

      if (sign.name === 'capricorn') {
        if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) {
          return zodiacSigns[sign.name]
        }
      } else {
        if (
          (month === startMonth && day >= startDay) ||
          (month === endMonth && day <= endDay)
        ) {
          return zodiacSigns[sign.name]
        }
      }
    }

    return zodiacSigns.aries
  }

  const getMoonSign = (
    birthDate: Date,
    latitude: number | null
  ): ZodiacSign => {
    const signs = Object.values(zodiacSigns)
    const index = (birthDate.getDate() + Math.abs(latitude || 0)) % signs.length
    return signs[Math.floor(index)]
  }

  const getRisingSign = (
    birthDate: Date,
    birthTime: string,
    latitude: number | null
  ): ZodiacSign => {
    const signs = Object.values(zodiacSigns)
    const timeOffset = birthTime ? Number.parseInt(birthTime.split(':')[0]) : 12
    const index =
      (birthDate.getDate() + timeOffset + Math.abs(latitude || 0)) %
      signs.length
    return signs[Math.floor(index)]
  }

  const calculateChart = () => {
    if (!formData.birthDate || !formData.birthPlace) {
      alert('Please fill in required fields')
      return
    }

    const birthDate = new Date(formData.birthDate)
    const sunSign = getZodiacSign(birthDate)
    const moonSign = getMoonSign(birthDate, formData.latitude)
    const risingSign = getRisingSign(
      birthDate,
      formData.birthTime,
      formData.latitude
    )

    const chartResults: Results = {
      sunSign,
      moonSign,
      risingSign,
      personality: sunSign.traits,
      loveLife: moonSign.love,
      career: risingSign.career,
      superpower: sunSign.superpower,
    }

    setResults(chartResults)
    setStep(3)
  }

  const resetQuiz = () => {
    setStep(1)
    setFormData({
      name: '',
      birthDate: '',
      birthTime: '',
      birthPlace: '',
      latitude: null,
      longitude: null,
    })
    setResults(null)
    setShowModal(false)
    onReset()
  }

  const ChartWheel = ({ results }: { results: Results }) => {
    const wheelSections = [
      {
        sign: results.sunSign,
        icon: Sun,
        color: 'from-yellow-400 to-orange-500',
        position: 'top-0 left-1/2 -translate-x-1/2 -translate-y-1/2',
      },
      {
        sign: results.moonSign,
        icon: Moon,
        color: 'from-blue-400 to-purple-500',
        position: 'top-1/2 right-0 translate-x-1/2 -translate-y-1/2',
      },
      {
        sign: results.risingSign,
        icon: ArrowUp,
        color: 'from-green-400 to-teal-500',
        position: 'bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2',
      },
    ]

    return (
      <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-6 border border-white/20">
        <h2 className="text-2xl font-bold text-white text-center mb-6">
          Your Cosmic Blueprint
        </h2>

        <div className="relative w-64 h-64 mx-auto mb-6">
          {/* Outer Circle */}
          <motion.div
            className="absolute inset-0 rounded-full border-4 border-white/30"
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{
              duration: 20,
              repeat: Number.POSITIVE_INFINITY,
              ease: 'linear',
            }}
          />

          {/* Inner Circle */}
          <div className="absolute inset-6 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 border-2 border-white/20" />

          {/* Center */}
          <div className="absolute inset-1/3 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{
                duration: 8,
                repeat: Number.POSITIVE_INFINITY,
                ease: 'linear',
              }}
              className="text-3xl"
            >
              ✨
            </motion.div>
          </div>

          {/* Sign Positions */}
          {wheelSections.map((section, index) => {
            const Icon = section.icon
            return (
              <motion.div
                key={index}
                className={`absolute ${section.position} w-16 h-16`}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: index * 0.3, duration: 0.5 }}
              >
                <div
                  className={`w-full h-full rounded-full bg-gradient-to-br ${section.color} flex items-center justify-center border-2 border-white/50 shadow-lg`}
                >
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-center">
                  <p className="text-white font-bold text-xs">
                    {section.sign.name}
                  </p>
                  <p className="text-gray-300 text-xs">{section.sign.symbol}</p>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Legend */}
        <div className="grid grid-cols-3 gap-4 text-center">
          <div className="space-y-2">
            <div className="w-10 h-10 mx-auto rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center">
              <Sun className="w-5 h-5 text-white" />
            </div>
            <p className="text-white font-medium text-sm">Sun Sign</p>
            <p className="text-gray-300 text-xs">Core Identity</p>
          </div>
          <div className="space-y-2">
            <div className="w-10 h-10 mx-auto rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
              <Moon className="w-5 h-5 text-white" />
            </div>
            <p className="text-white font-medium text-sm">Moon Sign</p>
            <p className="text-gray-300 text-xs">Emotions</p>
          </div>
          <div className="space-y-2">
            <div className="w-10 h-10 mx-auto rounded-full bg-gradient-to-br from-green-400 to-teal-500 flex items-center justify-center">
              <ArrowUp className="w-5 h-5 text-white" />
            </div>
            <p className="text-white font-medium text-sm">Rising Sign</p>
            <p className="text-gray-300 text-xs">First Impression</p>
          </div>
        </div>
      </div>
    )
  }

  if (step === 3 && results) {
    const sections = [
      {
        title: 'Your Core Personality',
        icon: Star,
        content: results.personality,
        gradient: 'from-yellow-400 to-orange-500',
        sign: results.sunSign.name,
      },
      {
        title: 'Your Love Life & Emotions',
        icon: Heart,
        content: results.loveLife,
        gradient: 'from-pink-400 to-red-500',
        sign: results.moonSign.name,
      },
      {
        title: 'Your Career & Public Image',
        icon: Briefcase,
        content: results.career,
        gradient: 'from-blue-400 to-purple-500',
        sign: results.risingSign.name,
      },
    ]

    return (
      <div className="min-h-screen py-8 px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          <ChartWheel results={results} />

          {/* Superpower Section */}
          <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-3xl p-6 border border-white/20 text-center">
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                ease: 'linear',
              }}
              className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-yellow-400 to-pink-500 rounded-full flex items-center justify-center"
            >
              <Zap className="w-8 h-8 text-white" />
            </motion.div>
            <h3 className="text-2xl font-bold text-white mb-4">
              🌟 Your Astrological Superpower
            </h3>
            <p className="text-lg text-purple-200 font-medium mb-2">
              {results.superpower}
            </p>
            <p className="text-gray-300">
              This unique gift comes from your {results.sunSign.name} energy!
            </p>
          </div>

          {/* Main Results */}
          <div className="space-y-6">
            {sections.map((section, index) => {
              const Icon = section.icon
              return (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-lg rounded-3xl p-6 border border-white/20"
                >
                  <div className="flex items-center mb-4">
                    <div
                      className={`w-10 h-10 rounded-full bg-gradient-to-br ${section.gradient} flex items-center justify-center mr-4`}
                    >
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">
                        {section.title}
                      </h3>
                      <p className="text-purple-200">
                        Influenced by your {section.sign}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-200 text-base leading-relaxed">
                    {section.content}
                  </p>
                </div>
              )
            })}
          </div>

          {/* Affiliate CTA */}
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-6 border-2 border-yellow-400 shadow-2xl">
            <div className="text-center">
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                className="text-3xl mb-4"
              >
                🔮✨🌟
              </motion.div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Want Your Complete Cosmic Blueprint?
              </h3>
              <p className="text-lg text-purple-100 mb-6 max-w-2xl mx-auto">
                This is just the beginning! Get your full detailed report with
                love compatibility, career guidance, and future predictions.
              </p>
              <div className="grid md:grid-cols-3 gap-4 mb-6 text-left">
                <div className="bg-white/10 rounded-xl p-4">
                  <h4 className="font-bold text-white mb-2">
                    💕 Love Compatibility
                  </h4>
                  <p className="text-purple-200 text-sm">
                    Find your perfect cosmic match
                  </p>
                </div>
                <div className="bg-white/10 rounded-xl p-4">
                  <h4 className="font-bold text-white mb-2">
                    💰 Career Guidance
                  </h4>
                  <p className="text-purple-200 text-sm">
                    Unlock your professional destiny
                  </p>
                </div>
                <div className="bg-white/10 rounded-xl p-4">
                  <h4 className="font-bold text-white mb-2">
                    🔮 Future Predictions
                  </h4>
                  <p className="text-purple-200 text-sm">
                    What the stars have planned
                  </p>
                </div>
              </div>
              <AffiliateButton
                text="Get Your Full Reading Now"
                className="bg-gradient-to-r from-yellow-400 to-orange-500 text-purple-900 font-bold py-4 px-8 rounded-xl text-lg hover:from-yellow-300 hover:to-orange-400 transition-all duration-300 shadow-lg flex items-center mx-auto"
              />
              <p className="text-purple-200 text-sm mt-4">
                ⭐ Trusted by over 100,000+ cosmic seekers
              </p>
            </div>
          </div>

          {/* Reset Button */}
          <div className="text-center">
            <button
              onClick={resetQuiz}
              className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg transition-all duration-300 border border-white/20 hover:scale-105"
            >
              Create New Birth Chart
            </button>
          </div>
        </div>
      </div>
    )
  }

  // Form Step
  return (
    <div className="min-h-screen flex items-center justify-center p-4 py-20">
      <div className="max-w-4xl mx-auto w-full">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="relative">
              <Star className="w-12 h-12 text-yellow-400 animate-pulse" />
              <Sparkles className="w-6 h-6 text-pink-400 absolute -top-2 -right-2" />
            </div>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Discover Your Birth Chart
          </h1>
          <p className="text-xl text-purple-200 mb-2">
            Free Natal Chart Report
          </p>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Unlock the secrets of your cosmic blueprint. Enter your birth
            details to reveal your Sun, Moon, and Rising signs.
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-6 border border-white/20">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Name Input */}
            <div>
              <label className="block text-white mb-2 font-medium">
                <Star className="w-4 h-4 inline mr-2" />
                Name (Optional)
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Your mystical name"
                className="w-full p-4 rounded-xl bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
            </div>

            {/* Birth Date */}
            <div>
              <label className="block text-white mb-2 font-medium">
                <Sun className="w-4 h-4 inline mr-2" />
                Birth Date *
              </label>
              <input
                type="date"
                name="birthDate"
                value={formData.birthDate}
                onChange={handleInputChange}
                required
                className="w-full p-4 rounded-xl bg-white/20 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
            </div>

            {/* Birth Time */}
            <div>
              <label className="block text-white mb-2 font-medium">
                <Clock className="w-4 h-4 inline mr-2" />
                Birth Time (Recommended)
              </label>
              <input
                type="time"
                name="birthTime"
                value={formData.birthTime}
                onChange={handleInputChange}
                className="w-full p-4 rounded-xl bg-white/20 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
              <p className="text-xs text-gray-400 mt-1">
                For accurate Rising sign calculation
              </p>
            </div>

            {/* Birth Place */}
            <div>
              <label className="block text-white mb-2 font-medium">
                <MapPin className="w-4 h-4 inline mr-2" />
                Birth Place *
              </label>
              <select
                name="birthPlace"
                value={formData.birthPlace}
                onChange={(e) => handleLocationSearch(e.target.value)}
                required
                className="w-full p-4 rounded-xl bg-white/20 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-purple-400"
              >
                <option value="">Select your birth city</option>
                <option value="New York">New York, USA</option>
                <option value="London">London, UK</option>
                <option value="Tokyo">Tokyo, Japan</option>
                <option value="Sydney">Sydney, Australia</option>
              </select>
            </div>
          </div>

          <button
            onClick={calculateChart}
            className="w-full mt-8 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-4 px-8 rounded-xl hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg"
          >
            ✨ Reveal My Birth Chart ✨
          </button>
        </div>
      </div>
    </div>
  )
}

export default BirthChartQuiz
