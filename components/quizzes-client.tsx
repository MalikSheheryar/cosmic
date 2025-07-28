'use client'

import type React from 'react'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Star, Heart, Moon, Sparkles, Trophy } from 'lucide-react'
import QuizCard from '@/components/QuizCard'
import AffiliateButton from '@/components/AffiliateButton'
import { fadeIn, slideUp } from '@/utils/motion'

// Define types for fetched data
interface Quiz {
  _id: string
  title: string
  description: string
  type: string
  difficulty: string
  duration: number
  participants: string
  tags: string[]
  questions: { question: string; answers: string[] }[]
  results: { title: string; description: string }[]
}

interface QuizzesClientProps {
  quizzes: Quiz[]
}

const QuizzesClient: React.FC<QuizzesClientProps> = ({ quizzes }) => {
  const [activeQuiz, setActiveQuiz] = useState<Quiz | null>(null)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<number[]>([])
  const [showResult, setShowResult] = useState(false)

  const handleStartQuiz = (quiz: Quiz) => {
    setActiveQuiz(quiz)
    setCurrentQuestion(0)
    setAnswers([])
    setShowResult(false)
  }

  const handleAnswer = (answerIndex: number) => {
    const newAnswers = [...answers, answerIndex]
    setAnswers(newAnswers)

    if (activeQuiz && currentQuestion + 1 < activeQuiz.questions.length) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setShowResult(true)
    }
  }

  const getQuizResult = () => {
    if (!activeQuiz || !showResult) return null

    const resultIndex =
      answers.reduce((acc, answer) => acc + answer, 0) %
      activeQuiz.results.length
    return activeQuiz.results[resultIndex]
  }

  const resetQuiz = () => {
    setActiveQuiz(null)
    setCurrentQuestion(0)
    setAnswers([])
    setShowResult(false)
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

  if (activeQuiz && !showResult) {
    const question = activeQuiz.questions[currentQuestion]

    return (
      <div className="min-h-screen py-20 px-4">
        <motion.div {...fadeIn} className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-purple-800 to-indigo-800 p-8 rounded-2xl border border-purple-500">
            {/* Progress Bar */}
            <div className="mb-8">
              <div className="flex justify-between text-purple-200 mb-2">
                <span>
                  Question {currentQuestion + 1} of{' '}
                  {activeQuiz.questions.length}
                </span>
                <span>
                  {Math.round(
                    ((currentQuestion + 1) / activeQuiz.questions.length) * 100
                  )}
                  %
                </span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-purple-400 to-pink-400 h-2 rounded-full transition-all duration-500"
                  style={{
                    width: `${((currentQuestion + 1) / activeQuiz.questions.length) * 100}%`,
                  }}
                ></div>
              </div>
            </div>

            {/* Question */}
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-6">
                {question.question}
              </h2>
            </div>

            {/* Answers */}
            <div className="grid gap-4">
              {question.answers.map((answer, index) => (
                <motion.button
                  key={index}
                  {...slideUp}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => handleAnswer(index)}
                  className="bg-black bg-opacity-30 hover:bg-opacity-50 border border-purple-400 hover:border-purple-300 text-white p-4 rounded-lg text-left transition-all duration-300 transform hover:scale-105"
                >
                  {answer}
                </motion.button>
              ))}
            </div>

            <div className="text-center mt-8">
              <button
                onClick={resetQuiz}
                className="text-purple-300 hover:text-white transition-colors duration-300"
              >
                ← Back to Quizzes
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    )
  }

  if (showResult) {
    const result = getQuizResult()

    return (
      <div className="min-h-screen py-20 px-4">
        <motion.div {...fadeIn} className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-indigo-900 to-purple-900 p-8 rounded-2xl border border-purple-500 text-center">
            <Trophy className="w-16 h-16 text-yellow-400 mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-white mb-4">Your Result</h2>
            <h3 className="text-2xl font-bold text-purple-300 mb-6">
              {result?.title}
            </h3>
            <p className="text-purple-200 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
              {result?.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <button
                onClick={resetQuiz}
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300"
              >
                Take Another Quiz
              </button>
              <AffiliateButton
                text="Get Professional Reading"
                className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300"
              />
            </div>

            <div className="bg-black bg-opacity-30 p-6 rounded-xl">
              <h4 className="text-xl font-bold text-white mb-4">
                Want Deeper Insights?
              </h4>
              <p className="text-purple-200 mb-4">
                Discover more about your cosmic personality with a professional
                astrologer
              </p>
              <AffiliateButton
                text="Explore Your Full Chart"
                className="bg-transparent border-2 border-purple-400 text-purple-300 hover:bg-purple-400 hover:text-white px-6 py-2 rounded-full font-semibold transition-all duration-300"
              />
            </div>
          </div>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen py-20 px-4">
      <motion.div {...fadeIn} className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center items-center gap-3 mb-6">
            <Sparkles className="w-10 h-10 text-purple-400" />
            <Star className="w-12 h-12 text-yellow-400" />
            <Sparkles className="w-10 h-10 text-purple-400" />
          </div>
          <h1 className="text-5xl font-bold text-white mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Mystical Quizzes & Games
          </h1>
          <p className="text-xl text-purple-200">
            Discover hidden truths about yourself and your cosmic destiny
          </p>
        </div>

        {/* Featured Quiz CTA */}
        <motion.div {...slideUp} className="text-center mb-16">
          <div className="bg-gradient-to-r from-purple-800 to-pink-800 p-8 rounded-2xl border border-purple-500">
            <Moon className="w-12 h-12 text-blue-400 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-white mb-4">
              Ready for Professional Guidance?
            </h2>
            <p className="text-purple-200 mb-6">
              While our quizzes are fun, get real insights from certified
              psychics and astrologers
            </p>
            <AffiliateButton
              text="Connect with Expert Now"
              className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white px-8 py-3 rounded-full font-semibold transform hover:scale-105 transition-all duration-300"
            />
          </div>
        </motion.div>

        {/* Quizzes Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {quizzes.map((quiz, index) => (
            <motion.div
              key={quiz._id}
              {...fadeIn}
              transition={{ delay: index * 0.1 }}
              onClick={() => handleStartQuiz(quiz)}
              className="cursor-pointer"
            >
              <QuizCard quiz={quiz} icon={getIcon(quiz.type)} />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div {...fadeIn} className="text-center">
          <div className="bg-gradient-to-r from-indigo-800 to-purple-800 p-8 rounded-2xl border border-indigo-500">
            <Star className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-white mb-4">
              Want More Than Just Quizzes?
            </h2>
            <p className="text-indigo-200 mb-6 max-w-2xl mx-auto">
              Our quizzes are entertaining, but for life-changing insights,
              connect with professional psychics who can provide personalized
              guidance for your unique situation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <AffiliateButton
                text="Get Real Psychic Reading"
                className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300"
              />
              <AffiliateButton
                text="Explore Tarot Cards"
                className="bg-transparent border-2 border-yellow-400 text-yellow-300 hover:bg-yellow-400 hover:text-white px-8 py-3 rounded-full font-semibold transition-all duration-300"
              />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default QuizzesClient
