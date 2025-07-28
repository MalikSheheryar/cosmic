import { client } from '@/lib/sanity'
import QuizzesClient from '@/components/quizzes-client'

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

async function getQuizzes() {
  const query = `*[_type == "quiz"] | order(orderRank asc) {
    _id, title, description, type, difficulty, duration, participants, tags, questions, results
  }`
  return client.fetch<Quiz[]>(query)
}

const QuizzesPage = async () => {
  const quizzes = await getQuizzes()
  return <QuizzesClient quizzes={quizzes} />
}

export default QuizzesPage
