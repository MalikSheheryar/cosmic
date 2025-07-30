import { localQuizzes } from '@/utils/localQuizData'
import type { Metadata } from 'next'
import QuizRenderer from './quiz-renderer'

// Define your hardcoded metadata for each quiz slug
const hardcodedQuizMetadata: { [key: string]: Metadata } = {
  'tarot-card-reading': {
    title: '🔮 Tarot Card Reading - Your Destiny Revealed!',
    description:
      'tarot card reading to uncover your future and spiritual path. Discover what the universe has in store for you with our ancient card insights.',
    keywords: [
      'tarot reading',
      'destiny',
      'future prediction',
      'spiritual guidance',
      'card reading',
      'mystical',
      'Mystical Journey',
    ],
    openGraph: {
      title: 'Tarot Card Reading - Mystical Quizzes',
      description:
        'Uncover your destiny with a personalized tarot card reading.',
      url: 'https://yourwebsite.com/quizzes/tarot-card-reading', // Specific URL
      siteName: 'Mystical Quizzes',
      images: [
        {
          url: '/placeholder.svg?height=630&width=1200', // Specific image for this quiz
          width: 1200,
          height: 630,
          alt: 'Tarot Card Reading',
        },
      ],
      locale: 'en_US',
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Tarot Card Reading - Mystical Quizzes',
      description:
        'Uncover your destiny with a personalized tarot card reading.',
      images: ['/placeholder.svg?height=675&width=1200'], // Specific image for this quiz
    },
  },
  'cosmic-compatibility-test': {
    title: '💕 Cosmic Compatibility Test - Are You Soulmates?',
    description:
      'compatibility test to see if you and your partner are astrologically aligned. Explore your emotional connection and relationship destiny.',
    keywords: [
      'love compatibility',
      'astrology compatibility',
      'soulmate quiz',
      'relationship test',
      'cosmic connection',
      'Mystical Journey',
    ],
    openGraph: {
      title: 'Cosmic Compatibility Test - Mystical Quizzes',
      description: 'Discover your cosmic alignment with your partner.',
      url: 'https://yourwebsite.com/quizzes/cosmic-compatibility-test', // Specific URL
      siteName: 'Mystical Quizzes',
      images: [
        {
          url: '/placeholder.svg?height=630&width=1200', // Specific image for this quiz
          width: 1200,
          height: 630,
          alt: 'Cosmic Compatibility Test',
        },
      ],
      locale: 'en_US',
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Cosmic Compatibility Test - Mystical Quizzes',
      description: 'Discover your cosmic alignment with your partner.',
      images: ['/placeholder.svg?height=675&width=1200'], // Specific image for this quiz
    },
  },
  'career-astrology-quiz': {
    title: '⭐ Career Astrology Quiz - Find Your Path!',
    description:
      'Discover your ideal career or college major based on your birth chart analysis. Get professional astrology reading with career timing insights.',
    keywords: [
      'career astrology',
      'birth chart',
      'career path',
      'professional guidance',
      'zodiac career',
      'Mystical Journey',
    ],
    openGraph: {
      title: 'Career Astrology Quiz - Mystical Quizzes',
      description: 'Find your ideal career path with our astrology quiz.',
      url: 'https://yourwebsite.com/quizzes/career-astrology-quiz',
      siteName: 'Mystical Quizzes',
      images: [
        {
          url: '/placeholder.svg?height=630&width=1200',
          width: 1200,
          height: 630,
          alt: 'Career Astrology Quiz',
        },
      ],
      locale: 'en_US',
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Career Astrology Quiz - Mystical Quizzes',
      description: 'Find your ideal career path with our astrology quiz.',
      images: ['/placeholder.svg?height=675&width=1200'],
    },
  },
  'children-prediction-quiz': {
    title: '👶 Will I Have Children? - Future Family Insights',
    description:
      'Discover what your birth chart says about your path to parenthood. Explore your 5th house influences and fertility insights with our prediction quiz.',
    keywords: [
      'children prediction',
      'fertility astrology',
      'family future',
      'birth chart parenthood',
      'Mystical Journey',
    ],
    openGraph: {
      title: 'Will I Have Children? - Mystical Quizzes',
      description: 'Get a fun prediction about your path to parenthood.',
      url: 'https://yourwebsite.com/quizzes/children-prediction-quiz',
      siteName: 'Mystical Quizzes',
      images: [
        {
          url: '/placeholder.svg?height=630&width=1200',
          width: 1200,
          height: 630,
          alt: 'Children Prediction Quiz',
        },
      ],
      locale: 'en_US',
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Will I Have Children? - Mystical Quizzes',
      description: 'Get a fun prediction about your path to parenthood.',
      images: ['/placeholder.svg?height=675&width=1200'],
    },
  },
  'birth-chart-reading': {
    title: '🌟 Complete Birth Chart Reading - Your Cosmic Blueprint',
    description:
      'Get your complete natal chart with Sun, Moon, and Rising signs. Discover your cosmic blueprint and astrological superpowers with our detailed reading.',
    keywords: [
      'birth chart',
      'natal chart',
      'sun moon rising',
      'astrological superpowers',
      'personality astrology',
      'Mystical Journey',
    ],
    openGraph: {
      title: 'Complete Birth Chart Reading - Mystical Quizzes',
      description:
        'Discover your cosmic blueprint with a personalized birth chart reading.',
      url: 'https://yourwebsite.com/quizzes/birth-chart-reading',
      siteName: 'Mystical Quizzes',
      images: [
        {
          url: '/placeholder.svg?height=630&width=1200',
          width: 1200,
          height: 630,
          alt: 'Birth Chart Reading',
        },
      ],
      locale: 'en_US',
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Complete Birth Chart Reading - Mystical Quizzes',
      description:
        'Discover your cosmic blueprint with a personalized birth chart reading.',
      images: ['/placeholder.svg?height=675&width=1200'],
    },
  },
  // Add more entries for other quizzes as needed
}

// Generate static paths for all quizzes at build time
export async function generateStaticParams() {
  return localQuizzes.map((quiz) => ({
    slug: quiz.title
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^a-z0-9-]/g, ''),
  }))
}

// Generate dynamic metadata for each quiz page
export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  // Look up the hardcoded metadata using the slug
  const metadata = hardcodedQuizMetadata[params.slug]

  if (metadata) {
    return metadata
  }

  // Fallback if no hardcoded metadata is found for the slug
  const quiz = localQuizzes.find(
    (q) =>
      q.title
        .toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[^a-z0-9-]/g, '') === params.slug
  )

  if (!quiz) {
    return {
      title: 'Quiz Not Found',
      description: 'The requested quiz could not be found.',
    }
  }

  // If a quiz exists but no hardcoded metadata, you can provide a generic fallback
  return {
    title: `${quiz.title} - Mystical Quizzes`,
    description: quiz.description,
    keywords: [
      ...quiz.tags,
      quiz.type,
      quiz.difficulty,
      'quiz',
      'game',
      'mystical',
    ].join(', '),
    openGraph: {
      title: `${quiz.title} - Mystical Quizzes`,
      description: quiz.description,
      url: `https://yourwebsite.com/quizzes/${params.slug}`,
      siteName: 'Mystical Quizzes',
      images: [
        {
          url: `/placeholder.svg?height=630&width=1200&query=${encodeURIComponent(quiz.title)} quiz banner`,
          width: 1200,
          height: 630,
          alt: quiz.title,
        },
      ],
      locale: 'en_US',
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${quiz.title} - Mystical Quizzes`,
      description: quiz.description,
      images: [
        `/placeholder.svg?height=675&width=1200&query=${encodeURIComponent(quiz.title)} quiz twitter card`,
      ],
    },
  }
}

const IndividualQuizPage = ({ params }: { params: { slug: string } }) => {
  return (
    <div className="min-h-screen py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <QuizRenderer slug={params.slug} />
      </div>
    </div>
  )
}

export default IndividualQuizPage
