'use client'
import type React from 'react'
import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Heart,
  Stars,
  User,
  Calendar,
  Clock,
  MapPin,
  MessageCircle,
  Home,
  DollarSign,
  Sparkles,
  Users,
  Target,
  ChevronLeft,
  ChevronRight,
  Download,
  Share2,
} from 'lucide-react'
import { emotionalQuestions } from '@/utils/quizData'
import AffiliateButton from '@/components/AffiliateButton'

interface CompatibilityQuizProps {
  onReset: () => void
}

interface QuizData {
  user: {
    name: string
    birthDate: string
    birthTime: string
    birthPlace: string
  }
  partner: {
    name: string
    birthDate: string
    birthTime: string
    birthPlace: string
  }
  answers: number[]
}

interface CompatibilityResults {
  emotional: number
  passion: number
  longTerm: number
  bondType: string
  summary: string
  strengths: string
  challenges: string
}

const CompatibilityQuiz: React.FC<CompatibilityQuizProps> = ({ onReset }) => {
  const [currentStep, setCurrentStep] = useState(0)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [quizData, setQuizData] = useState<QuizData>({
    user: { name: '', birthDate: '', birthTime: '', birthPlace: '' },
    partner: { name: '', birthDate: '', birthTime: '', birthPlace: '' },
    answers: [],
  })
  const [results, setResults] = useState<CompatibilityResults | null>(null)
  const [showAffiliate, setShowAffiliate] = useState(false)

  const updateQuizData = (data: Partial<QuizData>) => {
    setQuizData((prev) => ({ ...prev, ...data }))
  }

  const nextStep = () => {
    setCurrentStep((prev) => prev + 1)
    if (currentStep === 1) {
      setCurrentQuestion(0)
    }
  }

  const prevStep = () => {
    if (currentStep === 1 && currentQuestion > 0) {
      setCurrentQuestion((prev) => prev - 1)
    } else {
      setCurrentStep((prev) => prev - 1)
    }
  }

  const handleAnswerSelect = (answerIndex: number) => {
    const newAnswers = [...quizData.answers]
    newAnswers[currentQuestion] = answerIndex
    updateQuizData({ answers: newAnswers })
  }

  const nextQuestion = () => {
    if (currentQuestion < emotionalQuestions.length - 1) {
      setCurrentQuestion((prev) => prev + 1)
    } else {
      calculateResults()
      setCurrentStep(2)
    }
  }

  const calculateResults = () => {
    const { answers } = quizData

    // Calculate emotional score
    const emotionalQuestions = [0, 2, 6, 8, 9]
    let emotionalScore = 0
    let emotionalCount = 0
    emotionalQuestions.forEach((index) => {
      if (answers[index] !== undefined) {
        emotionalScore += (answers[index] + 1) * 25
        emotionalCount++
      }
    })
    const emotional = emotionalCount > 0 ? emotionalScore / emotionalCount : 70

    // Calculate passion score
    const passionQuestions = [1, 8]
    let passionScore = 0
    let passionCount = 0
    passionQuestions.forEach((index) => {
      if (answers[index] !== undefined) {
        passionScore += (answers[index] + 1) * 25
        passionCount++
      }
    })
    const passion = passionCount > 0 ? passionScore / passionCount : 70

    // Calculate long-term score
    const longTermQuestions = [2, 3, 4, 9]
    let longTermScore = 0
    let longTermCount = 0
    longTermQuestions.forEach((index) => {
      if (answers[index] !== undefined) {
        longTermScore += (answers[index] + 1) * 25
        longTermCount++
      }
    })
    const longTerm = longTermCount > 0 ? longTermScore / longTermCount : 70

    // Determine bond type
    const avgScore = (emotional + passion + longTerm) / 3
    let bondType = ''
    if (avgScore >= 85) {
      bondType = 'Twin Flame Connection'
    } else if (avgScore >= 75) {
      bondType = 'Soulmate Bond'
    } else if (avgScore >= 65) {
      bondType = 'Karmic Partnership'
    } else if (avgScore >= 55) {
      bondType = 'Growth-Oriented Relationship'
    } else {
      bondType = 'Learning Experience'
    }

    const summary = `Your connection transcends the ordinary - this ${bondType.toLowerCase()} shows remarkable alignment across emotional, passionate, and spiritual dimensions.`
    const strengths =
      'Your relationship excels in deep emotional understanding, strong romantic chemistry, and aligned life visions.'
    const challenges =
      'Focus your energy on maintaining open communication and continuing to grow together spiritually.'

    setResults({
      emotional: Math.round(emotional),
      passion: Math.round(passion),
      longTerm: Math.round(longTerm),
      bondType,
      summary,
      strengths,
      challenges,
    })

    // Show affiliate CTA after 3 seconds
    setTimeout(() => {
      setShowAffiliate(true)
    }, 3000)
  }

  const resetQuiz = () => {
    setCurrentStep(0)
    setCurrentQuestion(0)
    setQuizData({
      user: { name: '', birthDate: '', birthTime: '', birthPlace: '' },
      partner: { name: '', birthDate: '', birthTime: '', birthPlace: '' },
      answers: [],
    })
    setResults(null)
    setShowAffiliate(false)
    onReset()
  }

  const renderPersonForm = (
    person: 'user' | 'partner',
    title: string,
    icon: React.ReactNode
  ) => (
    <motion.div
      className="bg-white/5 rounded-2xl p-6 border border-white/10"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="flex items-center gap-3 mb-6">
        {icon}
        <h3 className="text-2xl font-semibold text-white">{title}</h3>
      </div>
      <div className="space-y-4">
        <div>
          <label className="block text-purple-200 mb-2 font-medium">
            Name (Optional)
          </label>
          <input
            type="text"
            value={quizData[person].name}
            onChange={(e) =>
              updateQuizData({
                [person]: { ...quizData[person], name: e.target.value },
              })
            }
            className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
            placeholder="Enter name"
          />
        </div>
        <div>
          <label className="block text-purple-200 mb-2 font-medium">
            Birth Date *
          </label>
          <div className="relative">
            <Calendar className="absolute left-3 top-3 text-purple-300 w-5 h-5" />
            <input
              type="date"
              value={quizData[person].birthDate}
              onChange={(e) =>
                updateQuizData({
                  [person]: { ...quizData[person], birthDate: e.target.value },
                })
              }
              className="w-full p-3 pl-12 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-pink-400"
              required
            />
          </div>
        </div>
        <div>
          <label className="block text-purple-200 mb-2 font-medium">
            Birth Time (Optional)
          </label>
          <div className="relative">
            <Clock className="absolute left-3 top-3 text-purple-300 w-5 h-5" />
            <input
              type="time"
              value={quizData[person].birthTime}
              onChange={(e) =>
                updateQuizData({
                  [person]: { ...quizData[person], birthTime: e.target.value },
                })
              }
              className="w-full p-3 pl-12 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
          </div>
        </div>
        <div>
          <label className="block text-purple-200 mb-2 font-medium">
            Birth Place
          </label>
          <div className="relative">
            <MapPin className="absolute left-3 top-3 text-purple-300 w-5 h-5" />
            <input
              type="text"
              value={quizData[person].birthPlace}
              onChange={(e) =>
                updateQuizData({
                  [person]: { ...quizData[person], birthPlace: e.target.value },
                })
              }
              className="w-full p-3 pl-12 bg-white/10 border border-white/20 rounded-lg text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
              placeholder="Enter birth city"
            />
          </div>
        </div>
      </div>
    </motion.div>
  )

  const getQuestionIcon = (category: string) => {
    const icons = {
      communication: MessageCircle,
      emotional: Heart,
      lifestyle: Home,
      financial: DollarSign,
      spiritual: Sparkles,
      social: Users,
      future: Target,
      intimacy: Heart,
    }
    const IconComponent = icons[category as keyof typeof icons] || Heart
    return <IconComponent className="text-pink-400 w-6 h-6" />
  }

  // Step 1: Astrological Data
  if (currentStep === 0) {
    return (
      <div className="min-h-screen px-8 py-24 lg:px-16 lg:py-16">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="text-center mb-8 py-6">
              <motion.h2
                className="text-3xl font-bold text-white mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                Step 1: Astrological Data
              </motion.h2>
              <motion.p
                className="text-purple-200 text-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                Enter your birth details to unlock your cosmic connection
              </motion.p>
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault()
                nextStep()
              }}
              className="space-y-8"
            >
              <div className="grid md:grid-cols-2 gap-8">
                {renderPersonForm(
                  'user',
                  'Your Details',
                  <User className="text-pink-400 w-6 h-6" />
                )}
                {renderPersonForm(
                  'partner',
                  "Partner's Details",
                  <Heart className="text-red-400 w-6 h-6" />
                )}
              </div>
              <motion.div
                className="text-center pt-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <button
                  type="submit"
                  disabled={
                    !quizData.user.birthDate || !quizData.partner.birthDate
                  }
                  className={`font-bold py-4 px-12 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg ${
                    quizData.user.birthDate && quizData.partner.birthDate
                      ? 'bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white'
                      : 'bg-gray-600 text-gray-400 cursor-not-allowed'
                  }`}
                >
                  Continue to Emotional Assessment
                </button>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </div>
    )
  }

  // Step 2: Emotional Questions
  if (currentStep === 1) {
    const question = emotionalQuestions[currentQuestion]
    const isAnswered = quizData.answers[currentQuestion] !== undefined
    return (
      <div className="min-h-screen px-8 py-24 lg:px-16 lg:py-16">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="text-center mb-8 py-6">
              <motion.h2
                className="text-3xl font-bold text-white mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                Step 2: Emotional Compatibility
              </motion.h2>
              <motion.p
                className="text-purple-200 text-lg mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                Question {currentQuestion + 1} of {emotionalQuestions.length}
              </motion.p>
              {/* Progress indicator */}
              <div className="w-full bg-white/10 rounded-full h-2 mb-8">
                <div
                  className="bg-gradient-to-r from-pink-500 to-purple-600 h-2 rounded-full transition-all duration-500"
                  style={{
                    width: `${((currentQuestion + 1) / emotionalQuestions.length) * 100}%`,
                  }}
                />
              </div>
            </div>
            <motion.div
              className="bg-white/5 rounded-3xl p-8 border border-white/10 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              key={currentQuestion}
            >
              <div className="flex items-center gap-3 mb-6">
                {getQuestionIcon(question.category)}
                <span className="text-purple-300 text-sm font-medium uppercase tracking-wide">
                  {question.category}
                </span>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-8 leading-relaxed">
                {question.question}
              </h3>
              <div className="space-y-4">
                {question.options.map((option, index) => (
                  <motion.button
                    key={index}
                    onClick={() => handleAnswerSelect(index)}
                    className={`w-full p-4 rounded-xl border-2 transition-all duration-300 text-left ${
                      quizData.answers[currentQuestion] === index
                        ? 'border-pink-400 bg-pink-400/20 text-white'
                        : 'border-white/20 bg-white/5 text-purple-200 hover:border-purple-400 hover:bg-purple-400/10'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-4 h-4 rounded-full border-2 ${
                          quizData.answers[currentQuestion] === index
                            ? 'border-pink-400 bg-pink-400'
                            : 'border-white/40'
                        }`}
                      />
                      <span className="font-medium">{option.text}</span>
                    </div>
                  </motion.button>
                ))}
              </div>
            </motion.div>
            <div className="flex justify-between items-center">
              <motion.button
                onClick={prevStep}
                className="flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-all duration-300"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <ChevronLeft className="w-5 h-5" />
                {currentQuestion === 0 ? 'Back to Details' : 'Previous'}
              </motion.button>
              <motion.button
                onClick={nextQuestion}
                disabled={!isAnswered}
                className={`flex items-center gap-2 px-8 py-3 rounded-full font-bold transition-all duration-300 ${
                  isAnswered
                    ? 'bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white transform hover:scale-105'
                    : 'bg-gray-600 text-gray-400 cursor-not-allowed'
                }`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
              >
                {currentQuestion === emotionalQuestions.length - 1
                  ? 'See Results'
                  : 'Next Question'}
                <ChevronRight className="w-5 h-5" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    )
  }

  // Step 3: Results
  if (currentStep === 2 && results) {
    const ScoreCard = ({
      title,
      score,
      icon,
      color,
      description,
    }: {
      title: string
      score: number
      icon: React.ReactNode
      color: string
      description: string
    }) => (
      <motion.div
        className="bg-white/5 rounded-2xl p-6 border border-white/10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.02 }}
      >
        <div className="flex items-center gap-3 mb-4">
          <div className={`p-2 rounded-full ${color}`}>{icon}</div>
          <h3 className="text-xl font-semibold text-white">{title}</h3>
        </div>
        <div className="mb-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-purple-200">Score</span>
            <span className="text-2xl font-bold text-white">{score}%</span>
          </div>
          <div className="w-full bg-white/10 rounded-full h-3">
            <motion.div
              className={`h-3 rounded-full bg-gradient-to-r ${color.replace('bg-', 'from-').replace('/20', '-400')} to-purple-500`}
              initial={{ width: 0 }}
              animate={{ width: `${score}%` }}
              transition={{ duration: 1.5, delay: 0.5 }}
            />
          </div>
        </div>
        <p className="text-purple-200 text-sm">{description}</p>
      </motion.div>
    )

    const AffiliateCTA = ({ className = '' }) => (
      <motion.div
        className={`bg-gradient-to-r from-pink-500/20 to-purple-600/20 border-2 border-pink-400/50 rounded-3xl p-8 text-center ${className}`}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center justify-center gap-2 mb-4">
          <Stars className="text-yellow-400 w-6 h-6" />
          <Heart className="text-pink-400 w-8 h-8" />
          <Stars className="text-yellow-400 w-6 h-6" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-4">
          Want to know if you're destined to be soulmates?
        </h3>
        <p className="text-purple-200 text-lg mb-6 max-w-2xl mx-auto">
          🌙 Get a full compatibility chart or talk to a love psychic for deep
          insights into your relationship journey and discover if this is a
          karmic test or true love.
        </p>
        <AffiliateButton
          text="💕 Get Your Full Couple Reading"
          className="inline-flex items-center gap-3 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
        />
      </motion.div>
    )

    return (
      <div className="min-h-screen px-8 py-24 lg:px-16 lg:py-16">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="text-center mb-8">
              <motion.h2
                className="text-4xl font-bold text-white mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                Your Cosmic Compatibility Results
              </motion.h2>
              <motion.p
                className="text-purple-200 text-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                {quizData.user.name && quizData.partner.name
                  ? `${quizData.user.name} & ${quizData.partner.name}'s`
                  : 'Your'}{' '}
                cosmic connection revealed
              </motion.p>
            </div>
            {/* Score Cards */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <ScoreCard
                title="Emotional Harmony"
                score={results.emotional}
                icon={<Heart className="w-6 h-6 text-white" />}
                color="bg-pink-500/20"
                description="How emotionally safe and connected you feel together"
              />
              <ScoreCard
                title="Passion & Chemistry"
                score={results.passion}
                icon={<Sparkles className="w-6 h-6 text-white" />}
                color="bg-red-500/20"
                description="Your magnetic attraction and romantic spark"
              />
              <ScoreCard
                title="Long-term Alignment"
                score={results.longTerm}
                icon={<Target className="w-6 h-6 text-white" />}
                color="bg-blue-500/20"
                description="How well your life goals and values align"
              />
            </div>
            {/* Detailed Analysis */}
            <motion.div
              className="bg-white/5 rounded-3xl p-8 border border-white/10 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <Sparkles className="text-purple-400 w-6 h-6" />
                Your Cosmic Connection Analysis
              </h3>
              <div className="space-y-6 text-purple-200 leading-relaxed">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">
                    💫 Your Energetic Bond: {results.bondType}
                  </h4>
                  <p>{results.summary}</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">
                    ✨ Strengths
                  </h4>
                  <p>{results.strengths}</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">
                    🌙 Areas for Growth
                  </h4>
                  <p>{results.challenges}</p>
                </div>
              </div>
            </motion.div>
            {/* First Affiliate CTA */}
            {showAffiliate && <AffiliateCTA className="mb-8" />}
            {/* Action Buttons */}
            <motion.div
              className="flex flex-wrap justify-center gap-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <button className="flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-all duration-300">
                <Download className="w-5 h-5" />
                Download Report
              </button>
              <button className="flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-all duration-300">
                <Share2 className="w-5 h-5" />
                Share Results
              </button>
            </motion.div>
            {/* Navigation */}
            <div className="flex justify-between items-center pt-6">
              <motion.button
                onClick={prevStep}
                className="flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-all duration-300"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
              >
                <ChevronLeft className="w-5 h-5" />
                Back to Questions
              </motion.button>
              <motion.button
                onClick={resetQuiz}
                className="px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white rounded-full transition-all duration-300"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
              >
                Take Quiz Again
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    )
  }

  return null
}

export default CompatibilityQuiz
