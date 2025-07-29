'use client'

import { useParams } from 'next/navigation'
import { localQuizzes } from '@/utils/localQuizData'
import TarotQuiz from '@/components/quizzes/TarotQuiz'
import CompatibilityQuiz from '@/components/quizzes/CompatibilityQuiz'
import CareerAstrologyQuiz from '@/components/quizzes/CareerAstrologyQuiz'
import ChildrenPredictionQuiz from '@/components/quizzes/ChildrenPredictionQuiz'
import BirthChartQuiz from '@/components/quizzes/BirthChartQuiz'
import { useRouter } from 'next/navigation'

export default function QuizPage() {
  const params = useParams()
  const router = useRouter()
  const slug = params.slug as string

  const quiz = localQuizzes.find(
    (q) =>
      q.title
        .toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[^a-z0-9-]/g, '') === slug
  )

  if (!quiz) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Quiz Not Found</h1>
          <button
            onClick={() => router.push('/quizzes')}
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full"
          >
            Back to Quizzes
          </button>
        </div>
      </div>
    )
  }

  const handleReset = () => {
    router.push('/quizzes')
  }

  const renderQuiz = () => {
    switch (quiz.component) {
      case 'TarotQuiz':
        return <TarotQuiz onReset={handleReset} />
      case 'CompatibilityQuiz':
        return <CompatibilityQuiz onReset={handleReset} />
      case 'CareerAstrologyQuiz':
        return <CareerAstrologyQuiz onReset={handleReset} />
      case 'ChildrenPredictionQuiz':
        return <ChildrenPredictionQuiz onReset={handleReset} />
      case 'BirthChartQuiz':
        return <BirthChartQuiz onReset={handleReset} />
      default:
        return (
          <div className="min-h-screen flex items-center justify-center p-4">
            <div className="max-w-md mx-auto text-center">
              <h1 className="text-2xl font-bold text-white mb-4">
                Quiz Coming Soon!
              </h1>
              <p className="text-purple-200 mb-6">
                This quiz is currently being developed.
              </p>
              <button
                onClick={handleReset}
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full"
              >
                Back to Quizzes
              </button>
            </div>
          </div>
        )
    }
  }

  return renderQuiz()
}
