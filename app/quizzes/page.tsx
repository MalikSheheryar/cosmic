import QuizzesClient from '@/components/quizzes-client'
import { localQuizzes } from '@/utils/localQuizData'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Fun & Insightful Astrology Quizzes | AstroLoveGuide',
  description:
    'Take personality and zodiac quizzes to explore your true self, love life, and cosmic destiny. Fun, accurate, and tailored to your sign.',
  keywords: [
    'quizzes',
    'games',
    'mystical',
    'tarot',
    'astrology',
    'compatibility',
    'destiny',
    'spiritual',
    'personality',
  ],
  openGraph: {
    title: 'Mystical Quizzes & Games - Discover Your Destiny',
    description:
      'Explore a variety of mystical quizzes and games, including tarot readings, cosmic compatibility tests, career astrology, and more. Discover hidden truths about yourself and your cosmic destiny.',
    url: 'https://yourwebsite.com/quizzes', // Replace with your actual URL
    siteName: 'Mystical Quizzes',
    images: [
      {
        url: '/placeholder.svg?height=630&width=1200', // Placeholder image for Open Graph
        width: 1200,
        height: 630,
        alt: 'Mystical Quizzes & Games',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mystical Quizzes & Games - Discover Your Destiny',
    description:
      'Explore a variety of mystical quizzes and games, including tarot readings, cosmic compatibility tests, career astrology, and more. Discover hidden truths about yourself and your cosmic destiny.',
    images: ['/placeholder.svg?height=675&width=1200'], // Placeholder image for Twitter card
  },
}

const QuizzesPage = async () => {
  return <QuizzesClient quizzes={localQuizzes} />
}

export default QuizzesPage
