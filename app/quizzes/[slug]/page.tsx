import { localQuizzes } from '@/utils/localQuizData'
import type { Metadata } from 'next'
import QuizRenderer from './quiz-renderer'

// Define your hardcoded metadata for each quiz slug
const hardcodedQuizMetadata: { [key: string]: Metadata } = {
  'tarot-card-reading': {
    title: 'Tarot Card Reading Quiz – Discover Your Future | AstroLoveGuide',
    description:
      'Let ancient tarot cards guide your destiny. Take our free Tarot Card Reading quiz and uncover what the universe has planned for you today.',
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
      url: 'https://yourwebsite.com/quizzes/tarot-card-reading',
      siteName: 'Mystical Quizzes',
      images: [
        {
          url: '/placeholder.svg?height=630&width=1200',
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
      images: ['/placeholder.svg?height=675&width=1200'],
    },
  },
  'cosmic-compatibility-test': {
    title: 'Cosmic Love Compatibility Quiz – Are You Aligned? | AstroLoveGuide',
    description:
      'Find out if you and your partner are cosmically aligned. Take our astrology-based compatibility test and explore your emotional connection.',
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
      url: 'https://yourwebsite.com/quizzes/cosmic-compatibility-test',
      siteName: 'Mystical Quizzes',
      images: [
        {
          url: '/placeholder.svg?height=630&width=1200',
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
      images: ['/placeholder.svg?height=675&width=1200'],
    },
  },
  'career-astrology-quiz': {
    title: 'Career Astrology Quiz – Find Your Ideal Path | AstroLoveGuide',
    description:
      'Discover your perfect career or college major based on your birth chart. Take this astrology quiz and align your goals with the stars.',
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
    title: 'Will I Have Children? Quiz Based on Astrology | AstroLoveGuide',
    description:
      ' Curious about your future as a parent? Take this birth chart-based quiz to explore fertility, family, and your 5th house influences.',
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
    title:
      'Free Birth Chart Reading Quiz – Sun, Moon & Rising | AstroLoveGuide',
    description:
      'Get your complete birth chart with Sun, Moon, and Rising signs. Reveal your cosmic identity and personal power through this astrology quiz.',
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
  // NEW QUIZ METADATA
  'cosmic-portal-2025': {
    title:
      'Cosmic Portal 2025 Quiz – Which Gateway Opens for You? | AstroLoveGuide',
    description:
      'Discover which mystical portal will open for you in 2025. Uncover your transformation gateway and spiritual destiny through cosmic energy analysis.',
    keywords: [
      'cosmic portal',
      '2025 predictions',
      'spiritual transformation',
      'mystical gateway',
      'energy portal',
      'spiritual destiny',
    ],
    openGraph: {
      title: 'Cosmic Portal 2025 - Mystical Quizzes',
      description: 'Discover which mystical portal opens for you in 2025.',
      url: 'https://yourwebsite.com/quizzes/cosmic-portal-2025',
      siteName: 'Mystical Quizzes',
      images: [
        {
          url: '/placeholder.svg?height=630&width=1200',
          width: 1200,
          height: 630,
          alt: 'Cosmic Portal 2025',
        },
      ],
      locale: 'en_US',
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Cosmic Portal 2025 - Mystical Quizzes',
      description: 'Discover which mystical portal opens for you in 2025.',
      images: ['/placeholder.svg?height=675&width=1200'],
    },
  },
  'celestial-archetype': {
    title: 'Celestial Archetype Quiz – Your Mythical Role | AstroLoveGuide',
    description:
      'What mythical role were you born to play? Discover your celestial archetype through astrology, numerology, and divine intuition.',
    keywords: [
      'celestial archetype',
      'mythical role',
      'divine purpose',
      'spiritual archetype',
      'cosmic identity',
      'mystical personality',
    ],
    openGraph: {
      title: 'Celestial Archetype - Mystical Quizzes',
      description: 'Discover your mythical role and celestial archetype.',
      url: 'https://yourwebsite.com/quizzes/celestial-archetype',
      siteName: 'Mystical Quizzes',
      images: [
        {
          url: '/placeholder.svg?height=630&width=1200',
          width: 1200,
          height: 630,
          alt: 'Celestial Archetype',
        },
      ],
      locale: 'en_US',
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Celestial Archetype - Mystical Quizzes',
      description: 'Discover your mythical role and celestial archetype.',
      images: ['/placeholder.svg?height=675&width=1200'],
    },
  },
  'planetary-origin': {
    title: 'Planetary Origin Quiz – What Planet Are You From? | AstroLoveGuide',
    description:
      'According to your star alignment, you might not be from Earth. Discover your true planetary origin and cosmic DNA through mystical analysis.',
    keywords: [
      'planetary origin',
      'starseed quiz',
      'cosmic DNA',
      'alien origin',
      'planetary alignment',
      'cosmic heritage',
    ],
    openGraph: {
      title: 'Planetary Origin Quiz - Mystical Quizzes',
      description: 'Discover your true planetary origin and cosmic DNA.',
      url: 'https://yourwebsite.com/quizzes/planetary-origin',
      siteName: 'Mystical Quizzes',
      images: [
        {
          url: '/placeholder.svg?height=630&width=1200',
          width: 1200,
          height: 630,
          alt: 'Planetary Origin Quiz',
        },
      ],
      locale: 'en_US',
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Planetary Origin Quiz - Mystical Quizzes',
      description: 'Discover your true planetary origin and cosmic DNA.',
      images: ['/placeholder.svg?height=675&width=1200'],
    },
  },
  'love-destiny-tarot-2025': {
    title: 'Love Destiny Tarot 2025 – Your Romantic Future | AstroLoveGuide',
    description:
      'What does the tarot reveal about your love destiny in 2025? Discover your romantic archetype and divine love predictions through ancient cards.',
    keywords: [
      'love tarot',
      'romance 2025',
      'love destiny',
      'tarot love reading',
      'romantic predictions',
      'soulmate tarot',
    ],
    openGraph: {
      title: 'Love Destiny Tarot 2025 - Mystical Quizzes',
      description: 'Discover your love destiny for 2025 through tarot.',
      url: 'https://yourwebsite.com/quizzes/love-destiny-tarot-2025',
      siteName: 'Mystical Quizzes',
      images: [
        {
          url: '/placeholder.svg?height=630&width=1200',
          width: 1200,
          height: 630,
          alt: 'Love Destiny Tarot 2025',
        },
      ],
      locale: 'en_US',
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Love Destiny Tarot 2025 - Mystical Quizzes',
      description: 'Discover your love destiny for 2025 through tarot.',
      images: ['/placeholder.svg?height=675&width=1200'],
    },
  },
  'numerology-future-2026': {
    title: 'Numerology Future 2026 – Your Destiny by Numbers | AstroLoveGuide',
    description:
      'Your future by the numbers! Discover what 2026 holds for you through advanced numerology calculations and mystical number analysis.',
    keywords: [
      'numerology 2026',
      'future predictions',
      'personal year number',
      'numerology destiny',
      'number predictions',
      'mystical numbers',
    ],
    openGraph: {
      title: 'Numerology Future 2026 - Mystical Quizzes',
      description: 'Discover your 2026 destiny through numerology.',
      url: 'https://yourwebsite.com/quizzes/numerology-future-2026',
      siteName: 'Mystical Quizzes',
      images: [
        {
          url: '/placeholder.svg?height=630&width=1200',
          width: 1200,
          height: 630,
          alt: 'Numerology Future 2026',
        },
      ],
      locale: 'en_US',
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Numerology Future 2026 - Mystical Quizzes',
      description: 'Discover your 2026 destiny through numerology.',
      images: ['/placeholder.svg?height=675&width=1200'],
    },
  },
}

// Generate static paths using FIXED slugs from localQuizzes with dash prefix
export async function generateStaticParams() {
  return localQuizzes.map((quiz) => ({
    slug: `-${quiz.slug}`, // Add dash prefix to the slug
  }))
}

// Generate dynamic metadata for each quiz page
export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  // Remove the dash prefix to match hardcoded metadata keys
  const cleanSlug = params.slug.startsWith('-')
    ? params.slug.slice(1)
    : params.slug

  // ALWAYS prioritize hardcoded metadata first
  const hardcodedMetadata = hardcodedQuizMetadata[cleanSlug]
  if (hardcodedMetadata) {
    return hardcodedMetadata
  }

  // Fallback: Find quiz by slug (not by generated slug from title)
  const quiz = localQuizzes.find((q) => q.slug === cleanSlug)
  if (!quiz) {
    return {
      title: 'Quiz Not Found',
      description: 'The requested quiz could not be found.',
    }
  }

  // Generic fallback using quiz data (but hardcoded should always take priority)
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
    ],
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
