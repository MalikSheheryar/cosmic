'use client'

import type React from 'react'
import { motion } from 'framer-motion'
import { Star, Heart, Moon, Sparkles } from 'lucide-react'
import QuizCard from '@/components/QuizCard'
import AffiliateButton from '@/components/AffiliateButton'
import { fadeIn, slideUp } from '@/utils/motion'
import type { LocalQuiz } from '@/utils/localQuizData'
import { useRouter } from 'next/navigation'

interface QuizzesClientProps {
  quizzes: LocalQuiz[]
}

const QuizzesClient: React.FC<QuizzesClientProps> = ({ quizzes }) => {
  const router = useRouter()

  const handleStartQuiz = (quiz: LocalQuiz) => {
    // Use the fixed slug property with dash prefix instead of generating from title
    router.push(`/quizzes/-${quiz.slug}`)
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
      case 'spiritual':
        return <Moon className="w-8 h-8" />
      default:
        return <Star className="w-8 h-8" />
    }
  }

  return (
    <div className="min-h-screen py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="flex justify-center items-center gap-3 mb-4 sm:mb-6">
            <Sparkles className="w-8 h-8 sm:w-10 sm:h-10 text-purple-400" />
            <Star className="w-10 h-10 sm:w-12 sm:h-12 text-yellow-400" />
            <Sparkles className="w-8 h-8 sm:w-10 sm:h-10 text-purple-400" />
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Mystical Quizzes & Games
          </h1>
          <p className="text-lg sm:text-xl text-purple-200 max-w-2xl mx-auto">
            Discover hidden truths about yourself and your cosmic destiny
          </p>
        </div>

        {/* Featured Quiz CTA */}
        <motion.div {...slideUp} className="text-center mb-12 sm:mb-16">
          <div className="bg-gradient-to-r from-purple-800 to-pink-800 p-6 sm:p-8 rounded-2xl border border-purple-500 max-w-4xl mx-auto">
            <Moon className="w-10 h-10 sm:w-12 sm:h-12 text-blue-400 mx-auto mb-4" />
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">
              Ready for Professional Guidance?
            </h2>
            <p className="text-purple-200 mb-6 text-sm sm:text-base">
              While our quizzes are fun, get real insights from certified
              psychics and astrologers
            </p>
            <AffiliateButton
              href="https://286ecnl6n3n5iu1cwspijkjgrr.hop.clickbank.net"
              text="Connect with Expert Now"
              className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white px-6 sm:px-8 py-3 rounded-full font-semibold transform hover:scale-105 transition-all duration-300 text-sm sm:text-base"
            />
          </div>
        </motion.div>

        {/* Quizzes Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {quizzes.map((quiz, index) => (
            <motion.div
              key={quiz._id}
              {...fadeIn}
              transition={{ delay: index * 0.1 }}
              onClick={() => handleStartQuiz(quiz)}
              className="cursor-pointer h-full"
            >
              <QuizCard
                quiz={{
                  _id: quiz._id,
                  title: quiz.title,
                  description: quiz.description,
                  type: quiz.type,
                  difficulty: quiz.difficulty,
                  duration: quiz.duration,
                  participants: quiz.participants,
                  tags: quiz.tags,
                  questions: [],
                  results: [],
                }}
                icon={getIcon(quiz.type)}
                className="h-full flex flex-col justify-between min-h-[280px] sm:min-h-[320px]"
              />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div {...fadeIn} className="text-center">
          <div className="bg-gradient-to-r from-indigo-800 to-purple-800 p-6 sm:p-8 rounded-2xl border border-indigo-500 max-w-4xl mx-auto">
            <Star className="w-10 h-10 sm:w-12 sm:h-12 text-yellow-400 mx-auto mb-4" />
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">
              Want More Than Just Quizzes?
            </h2>
            <p className="text-indigo-200 mb-6 max-w-2xl mx-auto text-sm sm:text-base">
              Our quizzes are entertaining, but for life-changing insights,
              connect with professional psychics who can provide personalized
              guidance for your unique situation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <AffiliateButton
                href="https://286ecnl6n3n5iu1cwspijkjgrr.hop.clickbank.net"
                text="Get Real Psychic Reading"
                className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white px-6 sm:px-8 py-3 rounded-full font-semibold transition-all duration-300 text-sm sm:text-base"
              />
              <AffiliateButton
                href="https://2d36dqcer10v4mb0sgog2-5bm0.hop.clickbank.net"
                text="Explore Tarot Cards"
                className="bg-transparent border-2 border-yellow-400 text-yellow-300 hover:bg-yellow-400 hover:text-white px-6 sm:px-8 py-3 rounded-full font-semibold transition-all duration-300 text-sm sm:text-base"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default QuizzesClient
