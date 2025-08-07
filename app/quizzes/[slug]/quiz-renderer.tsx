'use client'

import type React from 'react'
import { Suspense, lazy } from 'react'
import { localQuizzes } from '@/utils/localQuizData'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'

interface QuizRendererProps {
  slug: string
}

// Map quiz component names to their lazy-loaded components
const quizComponents: {
  [key: string]: React.LazyExoticComponent<React.ComponentType<any>>
} = {
  TarotQuiz: lazy(() => import('@/components/quizzes/TarotQuiz')),
  CompatibilityQuiz: lazy(
    () => import('@/components/quizzes/CompatibilityQuiz')
  ),
  CareerAstrologyQuiz: lazy(
    () => import('@/components/quizzes/CareerAstrologyQuiz')
  ),
  ChildrenPredictionQuiz: lazy(
    () => import('@/components/quizzes/ChildrenPredictionQuiz')
  ),
  BirthChartQuiz: lazy(() => import('@/components/quizzes/BirthChartQuiz')),
  // NEW QUIZ COMPONENTS
  CosmicPortalQuiz: lazy(() => import('@/components/quizzes/CosmicPortalQuiz')),
  CelestialArchetypeQuiz: lazy(
    () => import('@/components/quizzes/CelestialArchetypeQuiz')
  ),
  PlanetaryOriginQuiz: lazy(
    () => import('@/components/quizzes/PlanetaryOriginQuiz')
  ),
  LoveDestinyTarotQuiz: lazy(
    () => import('@/components/quizzes/LoveDestinyTarotQuiz')
  ),
  NumerologyFutureQuiz: lazy(
    () => import('@/components/quizzes/NumerologyFutureQuiz')
  ),
}

const QuizRenderer: React.FC<QuizRendererProps> = ({ slug }) => {
  const router = useRouter()

  // Remove the dash prefix to match quiz data slugs
  const cleanSlug = slug.startsWith('-') ? slug.slice(1) : slug

  // Find quiz by the cleaned slug property
  const quiz = localQuizzes.find((q) => q.slug === cleanSlug)

  // Debug logging to see what's happening
  console.log('Original slug:', slug)
  console.log('Clean slug:', cleanSlug)
  console.log(
    'Available quizzes:',
    localQuizzes.map((q) => ({ title: q.title, slug: q.slug }))
  )
  console.log('Found quiz:', quiz)

  if (!quiz) {
    return (
      <div className="text-center py-12">
        <h2 className="text-3xl font-bold text-red-400 mb-4">Quiz Not Found</h2>
        <p className="text-lg text-gray-300 mb-6">
          The quiz you are looking for does not exist. Looking for slug:{' '}
          {cleanSlug}
        </p>
        <div className="text-sm text-gray-400 mb-4">
          Available slugs: {localQuizzes.map((q) => q.slug).join(', ')}
        </div>
        <Button
          onClick={() => router.push('/quizzes')}
          className="bg-purple-600 hover:bg-purple-700 text-white"
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Quizzes
        </Button>
      </div>
    )
  }

  const QuizComponent = quizComponents[quiz.component]

  if (!QuizComponent) {
    return (
      <div className="text-center py-12">
        <h2 className="text-3xl font-bold text-red-400 mb-4">
          Quiz Component Missing
        </h2>
        <p className="text-lg text-gray-300 mb-6">
          The component for this quiz is not implemented yet.
        </p>
        <Button
          onClick={() => router.push('/quizzes')}
          className="bg-purple-600 hover:bg-purple-700 text-white"
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Quizzes
        </Button>
      </div>
    )
  }

  return (
    <div className="py-8">
      <Button
        onClick={() => router.push('/quizzes')}
        variant="ghost"
        className="mb-6 text-purple-300 hover:text-purple-100"
      >
        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Quizzes
      </Button>
      <Suspense
        fallback={
          <div className="text-center text-purple-300">Loading Quiz...</div>
        }
      >
        <QuizComponent quizData={quiz} />
      </Suspense>
    </div>
  )
}

export default QuizRenderer
