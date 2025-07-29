'use client'

import type React from 'react'
import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Stars,
  Sparkles,
  User,
  Calendar,
  Clock,
  MapPin,
  Briefcase,
  GraduationCap,
  Award,
  DollarSign,
  RefreshCw,
  Star,
} from 'lucide-react'
import AffiliateButton from '@/components/AffiliateButton'

interface CareerAstrologyQuizProps {
  onReset: () => void
}

interface FormData {
  name: string
  birthDate: string
  birthTime: string
  birthPlace: string
}

interface Results {
  sunSign: string
  persona: string
  careers: string[]
  majors: string[]
  strengths: string[]
  element: string
  modality: string
  workStyle: string
  challenges: string
  midheavenTraits: string
  tenthHouse: string
  secondHouse: string
  sixthHouse: string
  midheavenSign: string
  summary: string
  careerTiming: string
  incomePatterns: string
}

const CareerAstrologyQuiz: React.FC<CareerAstrologyQuizProps> = ({
  onReset,
}) => {
  const [step, setStep] = useState('form')
  const [formData, setFormData] = useState<FormData>({
    name: '',
    birthDate: '',
    birthTime: '',
    birthPlace: '',
  })
  const [results, setResults] = useState<Results | null>(null)
  const [activeTab, setActiveTab] = useState('overview')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.birthDate || !formData.birthPlace) {
      alert(
        'Please fill in your birth date and birthplace for accurate astrological analysis.'
      )
      return
    }

    setStep('processing')

    // Simulate processing time
    setTimeout(() => {
      const calculatedResults = calculateCareerProfile(formData)
      setResults(calculatedResults)
      setStep('results')
    }, 3000)
  }

  const calculateCareerProfile = (data: FormData): Results => {
    const sunSign = getZodiacSign(data.birthDate)
    const signData = getCareerData(sunSign)

    return {
      sunSign,
      persona: getPersona(sunSign),
      careers: signData.careers,
      majors: signData.majors,
      strengths: signData.strengths,
      element: signData.element,
      modality: signData.modality,
      workStyle: signData.workStyle,
      challenges: signData.challenges,
      midheavenTraits: signData.midheavenTraits,
      tenthHouse: signData.tenthHouse,
      secondHouse: signData.secondHouse,
      sixthHouse: signData.sixthHouse,
      midheavenSign: calculateMidheaven(data),
      summary: generateSummary(sunSign, signData),
      careerTiming: calculateCareerTiming(data),
      incomePatterns: calculateIncomePatterns(sunSign),
    }
  }

  const getZodiacSign = (birthDate: string): string => {
    const date = new Date(birthDate)
    const month = date.getMonth() + 1
    const day = date.getDate()

    const signs = [
      { name: 'Capricorn', start: [12, 22], end: [1, 19] },
      { name: 'Aquarius', start: [1, 20], end: [2, 18] },
      { name: 'Pisces', start: [2, 19], end: [3, 20] },
      { name: 'Aries', start: [3, 21], end: [4, 19] },
      { name: 'Taurus', start: [4, 20], end: [5, 20] },
      { name: 'Gemini', start: [5, 21], end: [6, 20] },
      { name: 'Cancer', start: [6, 21], end: [7, 22] },
      { name: 'Leo', start: [7, 23], end: [8, 22] },
      { name: 'Virgo', start: [8, 23], end: [9, 22] },
      { name: 'Libra', start: [9, 23], end: [10, 22] },
      { name: 'Scorpio', start: [10, 23], end: [11, 21] },
      { name: 'Sagittarius', start: [11, 22], end: [12, 21] },
    ]

    for (const sign of signs) {
      if (sign.name === 'Capricorn') {
        if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) {
          return sign.name
        }
      } else {
        const [startMonth, startDay] = sign.start
        const [endMonth, endDay] = sign.end
        if (
          (month === startMonth && day >= startDay) ||
          (month === endMonth && day <= endDay)
        ) {
          return sign.name
        }
      }
    }
    return 'Capricorn'
  }

  const getCareerData = (sign: string) => {
    const careerData: Record<string, any> = {
      Capricorn: {
        careers: [
          'Executive Leadership',
          'Financial Planning',
          'Government Administration',
          'Architecture',
          'Project Management',
        ],
        majors: [
          'Business Administration',
          'Political Science',
          'Engineering',
          'Finance',
          'Public Administration',
        ],
        strengths: [
          'Natural leadership',
          'Strategic planning',
          'Discipline',
          'Goal-oriented',
          'Organizational skills',
        ],
        element: 'Earth',
        modality: 'Cardinal',
        workStyle:
          'Structured, ambitious, and methodical approach to career building',
        challenges: 'May struggle with work-life balance and perfectionism',
        midheavenTraits:
          'Authority, reputation, long-term success, traditional values',
        tenthHouse: 'Career achievement through persistence and responsibility',
        secondHouse: 'Steady income growth through conservative investments',
        sixthHouse:
          'Prefers structured work environments with clear hierarchies',
      },
      Aquarius: {
        careers: [
          'Technology Innovation',
          'Social Impact',
          'Research & Development',
          'Environmental Science',
          'Human Rights',
        ],
        majors: [
          'Computer Science',
          'Sociology',
          'Environmental Studies',
          'Psychology',
          'International Relations',
        ],
        strengths: [
          'Innovation',
          'Humanitarian focus',
          'Independent thinking',
          'Future-oriented',
          'Problem-solving',
        ],
        element: 'Air',
        modality: 'Fixed',
        workStyle:
          'Progressive, collaborative, and focused on making a difference',
        challenges:
          'May resist traditional corporate structures and routine work',
        midheavenTraits:
          'Innovation, humanitarian causes, technology, unconventional success',
        tenthHouse:
          'Career success through revolutionary ideas and social change',
        secondHouse:
          'Income through technology, inventions, or humanitarian work',
        sixthHouse: 'Thrives in progressive, flexible work environments',
      },
      // Add more signs as needed...
    }

    return careerData[sign] || careerData.Capricorn
  }

  const getPersona = (sign: string): string => {
    const personas: Record<string, string> = {
      Capricorn: 'The Ambitious Achiever',
      Aquarius: 'The Innovative Visionary',
      Pisces: 'The Intuitive Creator',
      Aries: 'The Dynamic Pioneer',
      Taurus: 'The Practical Builder',
      Gemini: 'The Versatile Communicator',
      Cancer: 'The Nurturing Protector',
      Leo: 'The Confident Leader',
      Virgo: 'The Analytical Perfectionist',
      Libra: 'The Diplomatic Harmonizer',
      Scorpio: 'The Transformative Investigator',
      Sagittarius: 'The Adventurous Philosopher',
    }
    return personas[sign] || 'The Cosmic Professional'
  }

  const calculateMidheaven = (data: FormData): string => {
    const birthHour = data.birthTime
      ? Number.parseInt(data.birthTime.split(':')[0])
      : 12
    const midheavenSigns = [
      'Aries',
      'Taurus',
      'Gemini',
      'Cancer',
      'Leo',
      'Virgo',
      'Libra',
      'Scorpio',
      'Sagittarius',
      'Capricorn',
      'Aquarius',
      'Pisces',
    ]
    return midheavenSigns[birthHour % 12]
  }

  const generateSummary = (sign: string, data: any): string => {
    return `Your ${sign} Sun creates a powerful combination for structured success. Your natural ${data.strengths[0].toLowerCase()} and ${data.strengths[1].toLowerCase()} drive you toward ${data.element.toLowerCase()} element careers where you can build lasting achievements.`
  }

  const calculateCareerTiming = (data: FormData): string => {
    const birthYear = new Date(data.birthDate).getFullYear()
    const currentYear = new Date().getFullYear()
    const age = currentYear - birthYear

    if (age < 25) {
      return 'Foundation building phase - Focus on education and skill development'
    } else if (age < 35) {
      return 'Career establishment phase - Time for major career moves and growth'
    } else if (age < 50) {
      return 'Career mastery phase - Leadership roles and expertise recognition'
    } else {
      return 'Wisdom sharing phase - Mentoring others and legacy building'
    }
  }

  const calculateIncomePatterns = (sign: string): string => {
    const patterns: Record<string, string> = {
      Capricorn: 'Steady, consistent growth with long-term wealth accumulation',
      Aquarius:
        'Variable income through innovative projects and humanitarian work',
      // Add more patterns...
    }
    return (
      patterns[sign] ||
      'Steady income through professional expertise and dedication'
    )
  }

  const resetQuiz = () => {
    setStep('form')
    setFormData({ name: '', birthDate: '', birthTime: '', birthPlace: '' })
    setResults(null)
    setActiveTab('overview')
    onReset()
  }

  const TabButton = ({ id, label, icon: Icon, isActive, onClick }: any) => (
    <button
      onClick={() => onClick(id)}
      className={`flex items-center px-3 py-2 rounded-lg font-medium transition-all text-sm ${
        isActive
          ? 'bg-purple-600 text-white'
          : 'bg-white/10 text-gray-300 hover:bg-white/20'
      }`}
    >
      <Icon className="w-4 h-4 mr-2" />
      {label}
    </button>
  )

  if (step === 'processing') {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-8"
            animate={{ rotate: 360 }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: 'linear',
            }}
          >
            <Stars className="w-12 h-12 text-white" />
          </motion.div>

          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
            Analyzing Your Birth Chart...
          </h2>

          <div className="space-y-4 text-lg text-gray-300">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              🌟 Calculating your Sun sign influences...
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
            >
              🏛️ Determining your Midheaven and 10th house placements...
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.5 }}
            >
              💼 Mapping your ideal career paths and work environment...
            </motion.p>
          </div>

          <motion.div
            className="mt-8"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
          >
            <Sparkles className="w-8 h-8 text-yellow-400 mx-auto" />
          </motion.div>
        </div>
      </div>
    )
  }

  if (step === 'results' && results) {
    return (
      <div className="min-h-screen py-8 px-4">
        <div className="max-w-6xl mx-auto space-y-6">
          {/* Header */}
          <div className="text-center bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
            <div className="flex justify-center items-center gap-3 mb-4">
              <Sparkles className="w-6 h-6 text-purple-400" />
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                Your Professional Astrology Profile
              </h2>
              <Sparkles className="w-6 h-6 text-pink-400" />
            </div>
            {formData.name && (
              <p className="text-lg text-gray-300 mb-4">
                Welcome, {formData.name}! ✨
              </p>
            )}
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-4">
              <div className="inline-flex items-center bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                <Star className="w-4 h-4 mr-2" />
                {results.persona}
              </div>
              <div className="text-gray-300 text-sm">
                Sun:{' '}
                <span className="text-yellow-400 font-semibold">
                  {results.sunSign}
                </span>{' '}
                | Midheaven:{' '}
                <span className="text-blue-400 font-semibold">
                  {results.midheavenSign}
                </span>
              </div>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="flex flex-wrap justify-center gap-2 bg-white/5 backdrop-blur-lg rounded-xl p-4 border border-white/10">
            <TabButton
              id="overview"
              label="Overview"
              icon={Star}
              isActive={activeTab === 'overview'}
              onClick={setActiveTab}
            />
            <TabButton
              id="careers"
              label="Careers"
              icon={Briefcase}
              isActive={activeTab === 'careers'}
              onClick={setActiveTab}
            />
            <TabButton
              id="education"
              label="Education"
              icon={GraduationCap}
              isActive={activeTab === 'education'}
              onClick={setActiveTab}
            />
            <TabButton
              id="strengths"
              label="Strengths"
              icon={Award}
              isActive={activeTab === 'strengths'}
              onClick={setActiveTab}
            />
            <TabButton
              id="timing"
              label="Timing"
              icon={Clock}
              isActive={activeTab === 'timing'}
              onClick={setActiveTab}
            />
            <TabButton
              id="income"
              label="Income"
              icon={DollarSign}
              isActive={activeTab === 'income'}
              onClick={setActiveTab}
            />
          </div>

          {/* Tab Content */}
          <div className="min-h-[400px]">
            {activeTab === 'overview' && (
              <div className="space-y-6">
                <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                    <Sparkles className="w-5 h-5 mr-3 text-yellow-400" />
                    Your Astrological Career Blueprint
                  </h3>
                  <p className="text-gray-300 text-base leading-relaxed mb-6">
                    {results.summary}
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                      <h4 className="text-blue-300 font-semibold mb-2">
                        🏛️ Midheaven Influence
                      </h4>
                      <p className="text-gray-300 text-sm">
                        {results.midheavenTraits}
                      </p>
                    </div>
                    <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                      <h4 className="text-green-300 font-semibold mb-2">
                        🏢 10th House Career
                      </h4>
                      <p className="text-gray-300 text-sm">
                        {results.tenthHouse}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Affiliate CTA */}
                <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border-2 border-yellow-400/50 rounded-2xl p-6 text-center">
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <Star className="text-yellow-400 w-6 h-6" />
                    <Briefcase className="text-orange-400 w-8 h-8" />
                    <Star className="text-yellow-400 w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">
                    🌟 Ready for Your Complete Professional Astrology Reading?
                  </h3>
                  <p className="text-yellow-100 mb-6 max-w-2xl mx-auto">
                    Unlock your full career potential with detailed analysis of
                    your professional path, success timing, challenges, and
                    income patterns from certified astrologers.
                  </p>
                  <AffiliateButton
                    text="Get Your Full Career Reading"
                    className="bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 text-white font-bold py-3 px-6 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                  />
                </div>
              </div>
            )}

            {activeTab === 'careers' && (
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
                <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                  <Briefcase className="w-5 h-5 mr-3 text-blue-400" />
                  Recommended Career Paths
                </h3>
                <p className="text-gray-300 mb-6">
                  Based on your {results.sunSign} Sun and{' '}
                  {results.midheavenSign} Midheaven, these careers align with
                  your cosmic blueprint:
                </p>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {results.careers.map((career, index) => (
                    <div
                      key={index}
                      className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 p-4 rounded-xl border border-blue-400/30 text-center"
                    >
                      <div className="bg-blue-500/30 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                        <Briefcase className="w-6 h-6 text-blue-300" />
                      </div>
                      <h4 className="text-base font-semibold text-white mb-2">
                        {career}
                      </h4>
                      <div className="text-xs text-blue-300">
                        Compatibility: {85 + index * 2}%
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Add other tab content similarly... */}
          </div>

          {/* Reset Button */}
          <div className="text-center pt-6">
            <button
              onClick={resetQuiz}
              className="inline-flex items-center bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg transition-all duration-300 border border-white/20 hover:scale-105"
            >
              <RefreshCw className="w-5 h-5 mr-2" />
              Analyze Another Birth Chart
            </button>
          </div>
        </div>
      </div>
    )
  }

  // Form Step
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-2xl mx-auto w-full">
        <div className="text-center mb-8">
          <div className="flex justify-center items-center gap-3 ">
            <Stars className="w-8 h-8 text-yellow-400" />
            <h1 className="text-3xl md:text-4xl font-bold text-white py-16">
              Career Astrology Quiz
            </h1>
            <Sparkles className="w-8 h-8 text-purple-400" />
          </div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Discover Your Ideal Career or College Major Based on Your Birth
            Chart Analysis
          </p>
          <div className="mt-4 text-sm text-gray-400">
            ✨ Professional astrology reading with Midheaven, 10th house, and
            career timing analysis
          </div>
        </div>

        <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
          <div className="text-center mb-6">
            <motion.div
              className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-4"
              animate={{ rotate: 360 }}
              transition={{
                duration: 20,
                repeat: Number.POSITIVE_INFINITY,
                ease: 'linear',
              }}
            >
              <Sparkles className="w-8 h-8 text-white" />
            </motion.div>
            <h2 className="text-xl font-bold text-white mb-2">
              Professional Birth Chart Analysis
            </h2>
            <p className="text-gray-400">
              Enter your birth details for comprehensive career astrology
              reading
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="flex items-center text-white font-medium mb-2">
                <User className="w-4 h-4 mr-2 text-purple-300" />
                Full Name (Optional)
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Enter your full name"
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
              />
            </div>

            <div>
              <label className="flex items-center text-white font-medium mb-2">
                <Calendar className="w-4 h-4 mr-2 text-purple-300" />
                Birth Date * <span className="text-red-400">(Required)</span>
              </label>
              <input
                type="date"
                name="birthDate"
                value={formData.birthDate}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                max={new Date().toISOString().split('T')[0]}
              />
            </div>

            <div>
              <label className="flex items-center text-white font-medium mb-2">
                <Clock className="w-4 h-4 mr-2 text-purple-300" />
                Birth Time (Recommended)
              </label>
              <input
                type="time"
                name="birthTime"
                value={formData.birthTime}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
              />
              <p className="text-xs text-gray-500 mt-1">
                For precise Midheaven and house calculations
              </p>
            </div>

            <div>
              <label className="flex items-center text-white font-medium mb-2">
                <MapPin className="w-4 h-4 mr-2 text-purple-300" />
                Birth Place * <span className="text-red-400">(Required)</span>
              </label>
              <input
                type="text"
                name="birthPlace"
                value={formData.birthPlace}
                onChange={handleInputChange}
                placeholder="City, State/Province, Country"
                required
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
              />
            </div>

            <div className="pt-4">
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                <div className="flex items-center justify-center">
                  <Stars className="w-5 h-5 mr-2" />
                  Analyze My Professional Destiny ✨
                </div>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default CareerAstrologyQuiz
