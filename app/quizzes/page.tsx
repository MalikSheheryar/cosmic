import QuizzesClient from '@/components/quizzes-client'
import { localQuizzes } from '@/utils/localQuizData'

const QuizzesPage = async () => {
  return <QuizzesClient quizzes={localQuizzes} />
}

export default QuizzesPage
