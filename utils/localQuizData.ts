export interface LocalQuiz {
  _id: string
  title: string
  description: string
  type: string
  difficulty: string
  duration: number
  participants: string
  tags: string[]
  component: string // This will tell us which quiz component to render
}

export const localQuizzes: LocalQuiz[] = [
  {
    _id: 'tarot-reading',
    title: '🔮 Tarot Card Reading',
    description:
      'Let the ancient cards reveal your destiny and guide you to your cosmic path. Discover what the universe has in store for you.',
    type: 'future',
    difficulty: 'Easy',
    duration: 5,
    participants: '12.5K',
    tags: ['tarot', 'future', 'destiny', 'cards'],
    component: 'TarotQuiz',
  },
  {
    _id: 'cosmic-compatibility',
    title: '💕 Cosmic Compatibility Test',
    description:
      'Discover if you and your partner are cosmically aligned. Uncover the truth about your relationship through astrology and emotional connection.',
    type: 'love',
    difficulty: 'Medium',
    duration: 10,
    participants: '8.3K',
    tags: ['love', 'compatibility', 'astrology', 'soulmate'],
    component: 'CompatibilityQuiz',
  },
  {
    _id: 'career-astrology',
    title: '⭐ Career Astrology Quiz',
    description:
      'Discover your ideal career or college major based on your birth chart analysis. Professional astrology reading with career timing insights.',
    type: 'zodiac',
    difficulty: 'Medium',
    duration: 8,
    participants: '15.2K',
    tags: ['career', 'astrology', 'professional', 'birth-chart'],
    component: 'CareerAstrologyQuiz',
  },
  {
    _id: 'children-prediction',
    title: '👶 Will I Have Children?',
    description:
      'Discover what your birth chart says about your path to parenthood. Explore your 5th house influences and fertility insights.',
    type: 'future',
    difficulty: 'Easy',
    duration: 6,
    participants: '9.7K',
    tags: ['children', 'fertility', 'family', 'prediction'],
    component: 'ChildrenPredictionQuiz',
  },
  {
    _id: 'birth-chart-reading',
    title: '🌟 Complete Birth Chart Reading',
    description:
      'Get your complete natal chart with Sun, Moon, and Rising signs. Discover your cosmic blueprint and astrological superpowers.',
    type: 'personality',
    difficulty: 'Easy',
    duration: 7,
    participants: '18.9K',
    tags: ['birth-chart', 'natal', 'sun-moon-rising', 'personality'],
    component: 'BirthChartQuiz',
  },
]
