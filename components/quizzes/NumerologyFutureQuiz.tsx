'use client'

import type React from 'react'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import {
  ChevronRight,
  Heart,
  Mountain,
  Circle,
  Zap,
  Star,
  Gem,
  Share2,
  Download,
  RotateCcw,
  Sparkles,
} from 'lucide-react'
import AffiliateButton from '@/components/AffiliateButton'

interface NumerologyFutureQuizProps {
  onReset?: () => void
}

interface NumerologyResults {
  personalYear: number
  soulUrge: number
  interpretation: {
    theme: string
    love: string
    career: string
    spiritual: string
    luckyColor: string
    luckyDay: string
    crystal: string
    affirmation: string
  }
  answers: any
}

const NumerologyFutureQuiz: React.FC<NumerologyFutureQuizProps> = ({
  onReset,
}) => {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<{ [key: string]: any }>({})
  const [selectedAnswer, setSelectedAnswer] = useState('')
  const [results, setResults] = useState<NumerologyResults | null>(null)
  const [isRevealed, setIsRevealed] = useState(false)

  const questions = [
    {
      id: 'name',
      type: 'text',
      question: 'What is your full name?',
      subtitle: 'This reveals your Soul Urge Number',
      placeholder: 'Enter your complete name',
    },
    {
      id: 'birthdate',
      type: 'date',
      question: 'When were you born?',
      subtitle: 'Your Personal Year Number awaits',
    },
    {
      id: 'birthcity',
      type: 'text',
      question: 'In which city were you born?',
      subtitle: 'Type the name of your birth city',
      placeholder: 'Enter your birth city',
    },
    {
      id: 'year2025',
      type: 'choice',
      question: 'Choose the word that describes your 2025:',
      options: ['Chaos', 'Growth', 'Emptiness', 'Love', 'Change', 'Fire'],
    },
    {
      id: 'breakthrough',
      type: 'choice',
      question: 'What area of life do you feel a breakthrough coming?',
      options: [
        'Career',
        'Love',
        'Health',
        'Spirituality',
        'Creativity',
        'Family',
      ],
    },
    {
      id: 'dreams',
      type: 'text',
      question: 'What do you dream about lately?',
      subtitle: 'Your subconscious speaks through dreams',
      placeholder: 'Describe your recent dreams',
    },
    {
      id: 'symbol',
      type: 'image',
      question: 'Which image calls to you most?',
      options: [
        { id: 'portal', label: 'Portal', icon: Circle },
        { id: 'heart', label: 'Heart', icon: Heart },
        { id: 'mountain', label: 'Mountain', icon: Mountain },
        { id: 'energy', label: 'Energy', icon: Zap },
      ],
    },
    {
      id: 'emotion',
      type: 'choice',
      question: 'What emotion have you avoided this year?',
      options: ['Fear', 'Anger', 'Sadness', 'Joy', 'Love', 'Vulnerability'],
    },
    {
      id: 'intuition',
      type: 'slider',
      question: 'How often do you trust your intuition?',
      min: 1,
      max: 10,
      labels: ['Never', 'Always'],
    },
    {
      id: 'followingNumber',
      type: 'choice',
      question: 'Which number "follows" you in real life?',
      options: ['11:11', '3:33', '5:55', '7:77', '9:99', '12:12'],
    },
    {
      id: 'success',
      type: 'text',
      question: 'What does success mean to you now?',
      subtitle: 'Your definition shapes your destiny',
      placeholder: 'Define success in your own words',
    },
    {
      id: 'futureColor',
      type: 'choice',
      question: 'If your future had a color, what would it be?',
      options: [
        'Golden',
        'Deep Blue',
        'Emerald Green',
        'Royal Purple',
        'Silver',
        'Crimson Red',
      ],
    },
    {
      id: 'mantra',
      type: 'choice',
      question: 'Choose a mantra that resonates:',
      options: [
        'I am ready',
        'Let go and rise',
        'I trust divine timing',
        'The unknown is my path',
      ],
    },
    {
      id: 'message',
      type: 'text',
      question: 'What message would you leave for your future self?',
      subtitle: 'Speak to who you are becoming',
      placeholder: 'Write a message to your 2026 self',
    },
  ]

  const calculatePersonalYear = (birthdate: string): number => {
    if (!birthdate) return 1

    const birth = new Date(birthdate)
    const currentYear = 2026
    const birthMonth = birth.getMonth() + 1
    const birthDay = birth.getDate()

    // Calculate Personal Year Number
    const sum = currentYear + birthMonth + birthDay
    return reduceToSingleDigit(sum)
  }

  const calculateSoulUrge = (name: string): number => {
    if (!name) return 1

    const vowels = 'AEIOU'
    const vowelValues: { [key: string]: number } = {
      A: 1,
      E: 5,
      I: 9,
      O: 6,
      U: 3,
    }

    let sum = 0
    for (const char of name.toUpperCase()) {
      if (vowels.includes(char)) {
        sum += vowelValues[char]
      }
    }

    return reduceToSingleDigit(sum)
  }

  const reduceToSingleDigit = (num: number): number => {
    while (num > 9) {
      num = num
        .toString()
        .split('')
        .reduce((sum, digit) => sum + parseInt(digit), 0)
    }
    return num
  }

  const getYearInterpretation = (personalYear: number, answers: any) => {
    const interpretations: { [key: number]: any } = {
      1: {
        theme: 'The Year of New Beginnings',
        love: 'New romantic opportunities and fresh starts in existing relationships. This is your year to attract love by being authentically yourself.',
        career:
          "Leadership opportunities and new ventures await. Your innovative ideas will be recognized and rewarded. Time to start that project you've been dreaming about.",
        spiritual:
          "A powerful year for personal growth and self-discovery. You're stepping into your authentic power and learning to trust your inner voice.",
        luckyColor: 'Red',
        luckyDay: 'Sunday',
        crystal: 'Ruby',
        affirmation: 'I embrace new beginnings with courage and confidence.',
      },
      2: {
        theme: 'The Year of Cooperation and Balance',
        love: "Partnerships deepen and harmony is restored. If single, you'll attract someone who complements your energy perfectly. Focus on emotional balance.",
        career:
          'Teamwork and collaboration bring success. Your diplomatic skills shine, making you invaluable in group projects and negotiations.',
        spiritual:
          'Learning to balance giving and receiving. Your intuitive abilities are heightened, and meditation becomes especially powerful.',
        luckyColor: 'Orange',
        luckyDay: 'Monday',
        crystal: 'Moonstone',
        affirmation:
          'I create harmony in all my relationships and trust in divine timing.',
      },
      3: {
        theme: 'The Year of Creative Expression',
        love: 'Joy and playfulness return to your love life. Communication improves dramatically, and you attract partners who appreciate your unique spirit.',
        career:
          'Your creativity is your greatest asset this year. Artistic pursuits, writing, or any form of self-expression leads to recognition and success.',
        spiritual:
          'Finding joy in spiritual practices. Your connection to the divine becomes more playful and less serious, bringing lightness to your journey.',
        luckyColor: 'Yellow',
        luckyDay: 'Wednesday',
        crystal: 'Citrine',
        affirmation: 'I express my authentic self with joy and creativity.',
      },
      4: {
        theme: 'The Year of Building Foundations',
        love: "Stable, long-term relationships are favored. If in a relationship, you'll build stronger foundations. Singles attract reliable, committed partners.",
        career:
          'Hard work pays off with tangible results. Focus on building systems and structures that will support your long-term goals. Promotion possible.',
        spiritual:
          "Grounding your spiritual practice in daily life. You're learning to find the sacred in the ordinary and building lasting spiritual habits.",
        luckyColor: 'Green',
        luckyDay: 'Saturday',
        crystal: 'Emerald',
        affirmation:
          'I build my dreams with patience, persistence, and practical wisdom.',
      },
      5: {
        theme: 'The Year of Freedom and Adventure',
        love: 'Exciting romantic adventures and unexpected encounters. Your love life becomes more dynamic and free-spirited. Embrace spontaneity.',
        career:
          'Travel, networking, and new experiences open doors. Your adaptability and communication skills are your greatest professional assets.',
        spiritual:
          'Expanding your spiritual horizons through new teachings, travel, or diverse practices. Freedom becomes a spiritual principle.',
        luckyColor: 'Blue',
        luckyDay: 'Wednesday',
        crystal: 'Turquoise',
        affirmation:
          'I embrace change and adventure as pathways to growth and freedom.',
      },
      6: {
        theme: 'The Year of Love and Responsibility',
        love: 'Deep emotional connections and possibly marriage or commitment. Family relationships heal and strengthen. Your heart opens to unconditional love.',
        career:
          'Service-oriented work brings fulfillment. Counseling, teaching, or healing professions are especially favored. Your nurturing nature is an asset.',
        spiritual:
          'Learning to love unconditionally, starting with yourself. Your spiritual path involves service to others and healing family karma.',
        luckyColor: 'Pink',
        luckyDay: 'Friday',
        crystal: 'Rose Quartz',
        affirmation:
          'I give and receive love freely, creating harmony in all my relationships.',
      },
      7: {
        theme: 'The Year of Spiritual Awakening',
        love: 'Deep, soulful connections replace superficial relationships. You attract partners who understand your spiritual nature and support your growth.',
        career:
          'Research, analysis, and specialized knowledge bring recognition. Your intuitive insights give you an edge in your professional field.',
        spiritual:
          'Major spiritual breakthroughs and psychic development. This is your year of inner knowing and connection to higher wisdom.',
        luckyColor: 'Purple',
        luckyDay: 'Saturday',
        crystal: 'Amethyst',
        affirmation:
          'I trust my inner wisdom and allow my spiritual gifts to guide me.',
      },
      8: {
        theme: 'The Year of Material Success',
        love: 'Relationships become more mature and stable. You attract partners who support your ambitions and share your vision for success.',
        career:
          'Major financial gains and recognition for your achievements. Leadership roles and business opportunities multiply. Your time to shine.',
        spiritual:
          'Learning to balance material and spiritual success. You discover that true abundance includes both worldly achievement and inner peace.',
        luckyColor: 'Gold',
        luckyDay: 'Thursday',
        crystal: 'Pyrite',
        affirmation:
          'I achieve success in all areas of life while maintaining my spiritual integrity.',
      },
      9: {
        theme: 'The Year of Completion and Wisdom',
        love: 'Karmic relationships reach resolution. You either deepen existing bonds or release what no longer serves. Compassionate love guides you.',
        career:
          'Sharing your wisdom and experience with others. Teaching, mentoring, or humanitarian work brings deep satisfaction and recognition.',
        spiritual:
          'Completing major life lessons and stepping into your role as a wisdom keeper. Your spiritual gifts are meant to serve humanity.',
        luckyColor: 'White',
        luckyDay: 'Tuesday',
        crystal: 'Clear Quartz',
        affirmation:
          'I share my wisdom with compassion and complete my karmic lessons with grace.',
      },
    }

    return interpretations[personalYear] || interpretations[1]
  }

  const handleAnswer = (value: any) => {
    setSelectedAnswer(value)
    const newAnswers = { ...answers, [questions[currentQuestion].id]: value }
    setAnswers(newAnswers)
  }

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer(answers[questions[currentQuestion + 1]?.id] || '')
    } else {
      calculateResults()
    }
  }

  const calculateResults = () => {
    const personalYear = calculatePersonalYear(answers.birthdate)
    const soulUrge = calculateSoulUrge(answers.name)
    const interpretation = getYearInterpretation(personalYear, answers)

    setResults({
      personalYear,
      soulUrge,
      interpretation,
      answers,
    })

    // Reveal animation after component mounts
    setTimeout(() => setIsRevealed(true), 1000)
  }

  const resetQuiz = () => {
    setCurrentQuestion(0)
    setAnswers({})
    setSelectedAnswer('')
    setResults(null)
    setIsRevealed(false)
    if (onReset) onReset()
  }

  const renderQuestion = (question: any) => {
    switch (question.type) {
      case 'text':
        return (
          <div className="space-y-6">
            <input
              type="text"
              placeholder={question.placeholder}
              onChange={(e) => handleAnswer(e.target.value)}
              value={selectedAnswer}
              className="w-full p-4 bg-white/10 border border-purple-400/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 text-lg"
            />
          </div>
        )

      case 'date':
        return (
          <div className="space-y-6">
            <input
              type="date"
              onChange={(e) => handleAnswer(e.target.value)}
              value={selectedAnswer}
              className="w-full p-4 bg-white/10 border border-purple-400/30 rounded-lg text-white focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 text-lg"
            />
          </div>
        )

      case 'choice':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {question.options.map((option: string, index: number) => (
              <motion.button
                key={option}
                whileHover={{
                  scale: 1.02,
                  boxShadow: '0 0 20px rgba(251, 191, 36, 0.3)',
                }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleAnswer(option)}
                className={`p-4 bg-white/10 border border-purple-400/30 rounded-lg text-white hover:border-yellow-400 transition-all duration-300 text-left ${
                  selectedAnswer === option
                    ? 'border-yellow-400 bg-yellow-400/20'
                    : ''
                }`}
              >
                {option}
              </motion.button>
            ))}
          </div>
        )

      case 'image':
        return (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {question.options.map((option: any) => {
              const IconComponent = option.icon
              return (
                <motion.button
                  key={option.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleAnswer(option.id)}
                  className={`p-6 bg-white/10 border border-purple-400/30 rounded-lg text-white hover:border-yellow-400 transition-all duration-300 flex flex-col items-center gap-3 ${
                    selectedAnswer === option.id
                      ? 'border-yellow-400 bg-yellow-400/20'
                      : ''
                  }`}
                >
                  <IconComponent className="w-12 h-12 text-yellow-400" />
                  <span>{option.label}</span>
                </motion.button>
              )
            })}
          </div>
        )

      case 'slider':
        return (
          <div className="space-y-6">
            <div className="flex justify-between text-sm text-gray-400 mb-2">
              <span>{question.labels[0]}</span>
              <span>{question.labels[1]}</span>
            </div>
            <input
              type="range"
              min={question.min}
              max={question.max}
              onChange={(e) => handleAnswer(parseInt(e.target.value))}
              value={selectedAnswer || 5}
              className="w-full h-2 bg-purple-400/30 rounded-lg appearance-none cursor-pointer slider"
            />
            <div className="text-center">
              <span className="text-yellow-400 text-xl font-bold">
                {selectedAnswer || 5}
              </span>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  if (results) {
    return (
      <div className="min-h-screen p-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Number Reveal Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-center mb-12"
          >
            <motion.div
              animate={{
                boxShadow: isRevealed
                  ? '0 0 50px rgba(251, 191, 36, 0.5)'
                  : '0 0 0px rgba(251, 191, 36, 0)',
              }}
              transition={{ duration: 1, delay: 1.5 }}
              className="inline-block p-8 rounded-full bg-gradient-to-br from-yellow-400 to-purple-500 mb-6"
            >
              <motion.span
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="text-6xl md:text-8xl font-bold text-white"
              >
                {results.personalYear}
              </motion.span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2 }}
              className="text-4xl md:text-5xl font-bold text-white mb-4"
            >
              Your 2026 Personal Year Number
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.5 }}
              className="text-xl text-purple-200"
            >
              {results.interpretation.theme}
            </motion.p>
          </motion.div>

          {/* Results Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Love & Relationships */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3 }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-purple-400/20"
            >
              <div className="flex items-center gap-3 mb-4">
                <Heart className="w-6 h-6 text-pink-400" />
                <h3 className="text-2xl font-bold text-white">
                  Love & Relationships
                </h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                {results.interpretation.love}
              </p>
            </motion.div>

            {/* Career & Success */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3.2 }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-purple-400/20"
            >
              <div className="flex items-center gap-3 mb-4">
                <Star className="w-6 h-6 text-yellow-400" />
                <h3 className="text-2xl font-bold text-white">
                  Career & Success
                </h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                {results.interpretation.career}
              </p>
            </motion.div>

            {/* Spiritual Growth */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3.4 }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-purple-400/20"
            >
              <div className="flex items-center gap-3 mb-4">
                <Gem className="w-6 h-6 text-purple-400" />
                <h3 className="text-2xl font-bold text-white">
                  Spiritual Growth
                </h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                {results.interpretation.spiritual}
              </p>
            </motion.div>

            {/* Lucky Elements */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3.6 }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-purple-400/20"
            >
              <h3 className="text-2xl font-bold text-white mb-4">
                Your Lucky Elements
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-400">Lucky Color:</span>
                  <span className="text-white font-semibold">
                    {results.interpretation.luckyColor}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Lucky Day:</span>
                  <span className="text-white font-semibold">
                    {results.interpretation.luckyDay}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Crystal:</span>
                  <span className="text-white font-semibold">
                    {results.interpretation.crystal}
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Affirmation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 4 }}
            className="bg-gradient-to-r from-yellow-400/20 to-purple-500/20 backdrop-blur-lg rounded-2xl p-8 border border-yellow-400/30 text-center mb-12"
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              Your 2026 Affirmation
            </h3>
            <p className="text-xl text-yellow-200 font-medium italic">
              "{results.interpretation.affirmation}"
            </p>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 5 }}
            className="text-center p-8 bg-white/5 rounded-2xl border border-purple-400/20 mb-8"
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              Want Your Complete Numerology Chart?
            </h3>
            <p className="text-gray-300 mb-6">
              Discover your Life Path, Expression, and Soul Urge numbers for
              deeper insights into your destiny.
            </p>
            <AffiliateButton
              text="Get Full Numerology Reading"
              className="bg-gradient-to-r from-yellow-400 to-purple-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all"
            />
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 4.5 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <button
              onClick={resetQuiz}
              className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full font-semibold flex items-center gap-2 transition-colors"
            >
              <RotateCcw className="w-5 h-5" />
              Calculate Again
            </button>
          </motion.div>
        </div>
      </div>
    )
  }

  // Quiz Questions
  const currentQ = questions[currentQuestion]
  const progress = ((currentQuestion + 1) / questions.length) * 100

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-4xl mx-auto w-full">
        <div className="mb-8">
          <div className="flex justify-between text-sm text-gray-400 mb-2">
            <span>
              Question {currentQuestion + 1} of {questions.length}
            </span>
            <span>{Math.round(progress)}% Complete</span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-2">
            <motion.div
              className="bg-gradient-to-r from-yellow-400 to-purple-500 h-2 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>

        <motion.div
          key={currentQuestion}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.3 }}
          className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-purple-400/20"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {currentQ.question}
            </h2>
            {currentQ.subtitle && (
              <p className="text-purple-200 text-lg">{currentQ.subtitle}</p>
            )}
          </div>

          <div className="mb-8">{renderQuestion(currentQ)}</div>

          <div className="flex justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={nextQuestion}
              disabled={!selectedAnswer}
              className="bg-gradient-to-r from-yellow-400 to-purple-500 text-white px-8 py-3 rounded-full font-semibold flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {currentQuestion === questions.length - 1
                ? 'Reveal My Destiny'
                : 'Next'}
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default NumerologyFutureQuiz
