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
  slug: string // Add fixed slug property
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
    slug: 'tarot-card-reading', // Fixed slug
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
    slug: 'cosmic-compatibility-test', // Fixed slug
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
    slug: 'career-astrology-quiz', // Fixed slug
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
    slug: 'children-prediction-quiz', // Fixed slug
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
    slug: 'birth-chart-reading', // Fixed slug
  },
  // NEW QUIZZES
  {
    _id: 'cosmic-portal-2025',
    title: '🌌 Cosmic Portal 2025',
    description:
      'Discover which mystical portal will open for you in 2025. Uncover your transformation gateway and spiritual destiny for the year ahead.',
    type: 'spiritual',
    difficulty: 'Medium',
    duration: 8,
    participants: '14.2K',
    tags: ['portal', 'transformation', '2025', 'spiritual', 'destiny'],
    component: 'CosmicPortalQuiz',
    slug: 'cosmic-portal-2025',
  },
  {
    _id: 'celestial-archetype',
    title: '✨ Celestial Archetype',
    description:
      'What mythical role were you born to play? Discover your celestial archetype through astrology, numerology, and divine intuition.',
    type: 'personality',
    difficulty: 'Medium',
    duration: 9,
    participants: '11.8K',
    tags: ['archetype', 'mythology', 'celestial', 'personality', 'divine'],
    component: 'CelestialArchetypeQuiz',
    slug: 'celestial-archetype',
  },
  {
    _id: 'planetary-origin',
    title: '🪐 Planetary Origin Quiz',
    description:
      'According to your star alignment, you might not be from Earth. Discover your true planetary origin and cosmic DNA through mystical analysis.',
    type: 'spiritual',
    difficulty: 'Easy',
    duration: 7,
    participants: '16.5K',
    tags: ['planets', 'origin', 'cosmic', 'alien', 'starseed'],
    component: 'PlanetaryOriginQuiz',
    slug: 'planetary-origin',
  },
  {
    _id: 'love-destiny-tarot',
    title: '💖 Love Destiny Tarot 2025',
    description:
      'What does the tarot reveal about your love destiny in 2025? Discover your romantic archetype and divine love predictions.',
    type: 'love',
    difficulty: 'Medium',
    duration: 10,
    participants: '13.7K',
    tags: ['tarot', 'love', 'destiny', '2025', 'romance', 'soulmate'],
    component: 'LoveDestinyTarotQuiz',
    slug: 'love-destiny-tarot-2025',
  },
  {
    _id: 'numerology-future-2026',
    title: '🔢 Numerology Future 2026',
    description:
      'Your future by the numbers! Discover what 2026 holds for you through advanced numerology calculations and mystical number analysis.',
    type: 'future',
    difficulty: 'Easy',
    duration: 6,
    participants: '19.3K',
    tags: ['numerology', 'future', '2026', 'numbers', 'destiny'],
    component: 'NumerologyFutureQuiz',
    slug: 'numerology-future-2026',
  },
]

// Tarot Quiz Data
export interface TarotCard {
  name: string
  symbol: string
  element: string
  shortMeaning: string
  meaning: string
}

export const tarotCards: TarotCard[] = [
  {
    name: 'The Fool',
    symbol: '🃏',
    element: '🌟',
    shortMeaning: 'New beginnings',
    meaning: 'new beginnings and infinite possibilities await you',
  },
  {
    name: 'The Magician',
    symbol: '🎩',
    element: '⚡',
    shortMeaning: 'Manifestation',
    meaning: 'your power to manifest desires is at its peak',
  },
  {
    name: 'The High Priestess',
    symbol: '🌙',
    element: '🔮',
    shortMeaning: 'Intuition',
    meaning: 'deep intuitive wisdom guides your path',
  },
  {
    name: 'The Empress',
    symbol: '👑',
    element: '🌸',
    shortMeaning: 'Abundance',
    meaning: 'abundance and creativity flow through your life',
  },
  {
    name: 'The Emperor',
    symbol: '⚔️',
    element: '🏔️',
    shortMeaning: 'Authority',
    meaning: 'strong leadership and structure shape your destiny',
  },
  {
    name: 'The Hierophant',
    symbol: '🏛️',
    element: '📿',
    shortMeaning: 'Tradition',
    meaning: 'spiritual wisdom and traditional values guide you',
  },
  {
    name: 'The Lovers',
    symbol: '💕',
    element: '💖',
    shortMeaning: 'Union',
    meaning: 'powerful connections and choices define your journey',
  },
  {
    name: 'The Chariot',
    symbol: '🏇',
    element: '⚡',
    shortMeaning: 'Victory',
    meaning: 'determination and willpower drive you to success',
  },
  {
    name: 'Strength',
    symbol: '🦁',
    element: '💪',
    shortMeaning: 'Inner power',
    meaning: 'inner strength and courage overcome all obstacles',
  },
  {
    name: 'The Hermit',
    symbol: '🏮',
    element: '🕯️',
    shortMeaning: 'Soul searching',
    meaning: 'inner wisdom illuminates your spiritual path',
  },
  {
    name: 'Wheel of Fortune',
    symbol: '🎡',
    element: '🌀',
    shortMeaning: 'Destiny',
    meaning: 'fate and fortune are turning in your favor',
  },
  {
    name: 'Justice',
    symbol: '⚖️',
    element: '🗡️',
    shortMeaning: 'Balance',
    meaning: 'karmic balance and fairness restore harmony',
  },
  {
    name: 'The Hanged Man',
    symbol: '🙃',
    element: '💧',
    shortMeaning: 'Surrender',
    meaning: 'surrender and new perspectives bring enlightenment',
  },
  {
    name: 'Death',
    symbol: '🦋',
    element: '🌑',
    shortMeaning: 'Transformation',
    meaning: 'profound transformation and rebirth await you',
  },
  {
    name: 'Temperance',
    symbol: '👼',
    element: '🌊',
    shortMeaning: 'Harmony',
    meaning: 'divine balance and healing flow through your life',
  },
  {
    name: 'The Devil',
    symbol: '😈',
    element: '🔥',
    shortMeaning: 'Liberation',
    meaning: 'breaking free from limitations reveals your true power',
  },
  {
    name: 'The Tower',
    symbol: '🗼',
    element: '⚡',
    shortMeaning: 'Revelation',
    meaning: 'sudden revelation clears the path to your destiny',
  },
  {
    name: 'The Star',
    symbol: '⭐',
    element: '✨',
    shortMeaning: 'Hope',
    meaning: 'hope and divine guidance light your way forward',
  },
  {
    name: 'The Moon',
    symbol: '🌙',
    element: '🌊',
    shortMeaning: 'Intuition',
    meaning: 'intuitive insights reveal hidden truths and mysteries',
  },
  {
    name: 'The Sun',
    symbol: '☀️',
    element: '🌞',
    shortMeaning: 'Joy',
    meaning: 'joy, success, and vitality radiate through your being',
  },
  {
    name: 'Judgement',
    symbol: '📯',
    element: '🔔',
    shortMeaning: 'Awakening',
    meaning: 'spiritual awakening calls you to your higher purpose',
  },
  {
    name: 'The World',
    symbol: '🌍',
    element: '👑',
    shortMeaning: 'Completion',
    meaning: "completion and fulfillment of your soul's journey",
  },
  {
    name: 'Ace of Cups',
    symbol: '🏆',
    element: '💧',
    shortMeaning: 'New love',
    meaning: 'new emotional beginnings and overflowing love',
  },
  {
    name: 'Ace of Wands',
    symbol: '🔥',
    element: '⚡',
    shortMeaning: 'Creative spark',
    meaning: 'creative inspiration ignites passionate new ventures',
  },
  {
    name: 'Ace of Swords',
    symbol: '⚔️',
    element: '💨',
    shortMeaning: 'Mental clarity',
    meaning: 'mental clarity cuts through confusion to reveal truth',
  },
  {
    name: 'Ace of Pentacles',
    symbol: '💰',
    element: '🌱',
    shortMeaning: 'Material gain',
    meaning: 'material prosperity and earthly abundance manifest',
  },
  {
    name: 'Ten of Cups',
    symbol: '🌈',
    element: '💕',
    shortMeaning: 'Happiness',
    meaning: 'emotional fulfillment and family harmony bless you',
  },
  {
    name: 'Ten of Wands',
    symbol: '🎯',
    element: '🔥',
    shortMeaning: 'Achievement',
    meaning: 'hard work pays off as you reach your goals',
  },
  {
    name: 'Queen of Cups',
    symbol: '👸',
    element: '💧',
    shortMeaning: 'Compassion',
    meaning: 'emotional wisdom and compassionate love guide you',
  },
  {
    name: 'King of Pentacles',
    symbol: '👑',
    element: '💎',
    shortMeaning: 'Prosperity',
    meaning: 'material mastery and generous abundance surround you',
  },
]

// Compatibility Quiz Data
export interface EmotionalQuestion {
  id: number
  category: string
  question: string
  options: { text: string; value: number }[]
}

export const emotionalQuestions: EmotionalQuestion[] = [
  {
    id: 1,
    category: 'communication',
    question:
      'How do you and your partner typically resolve conflicts or disagreements?',
    options: [
      { text: 'We communicate openly and find solutions together', value: 4 },
      { text: 'We try to talk it through, but sometimes struggle', value: 3 },
      { text: 'We often avoid conflict or misunderstand each other', value: 2 },
      { text: 'Our conflicts tend to escalate or remain unresolved', value: 1 },
    ],
  },
  {
    id: 2,
    category: 'emotional',
    question:
      'How emotionally safe and understood do you feel with your partner?',
    options: [
      { text: 'Completely safe - I can be my authentic self', value: 4 },
      { text: 'Mostly safe, with occasional moments of uncertainty', value: 3 },
      { text: 'Sometimes safe, but I hold back parts of myself', value: 2 },
      { text: 'Often guarded - I struggle to be vulnerable', value: 1 },
    ],
  },
  {
    id: 3,
    category: 'intimacy',
    question:
      "How do you and your partner express affection and meet each other's emotional needs?",
    options: [
      {
        text: "We naturally understand and fulfill each other's needs",
        value: 4,
      },
      {
        text: "We're learning each other's love languages and improving",
        value: 3,
      },
      { text: 'We sometimes miss the mark but keep trying', value: 2 },
      { text: 'We often feel disconnected or misunderstood', value: 1 },
    ],
  },
  {
    id: 4,
    category: 'future',
    question:
      'Do you and your partner share the same vision for your future together?',
    options: [
      { text: "Yes, we're completely aligned on our life goals", value: 4 },
      { text: 'Mostly aligned, with some areas to work through', value: 3 },
      {
        text: 'We have different visions but are willing to compromise',
        value: 2,
      },
      { text: 'Our future goals seem incompatible', value: 1 },
    ],
  },
  {
    id: 5,
    category: 'lifestyle',
    question:
      'How do you both handle personal space, independence, and togetherness?',
    options: [
      {
        text: 'We have a perfect balance of together time and independence',
        value: 4,
      },
      {
        text: "We're still finding our rhythm but communicate our needs",
        value: 3,
      },
      {
        text: 'One of us needs more space or togetherness than the other',
        value: 2,
      },
      {
        text: 'We struggle with boundaries and feel suffocated or distant',
        value: 1,
      },
    ],
  },
  {
    id: 6,
    category: 'financial',
    question:
      'How aligned are your values around money, career priorities, and lifestyle choices?',
    options: [
      {
        text: 'We share the same financial values and life priorities',
        value: 4,
      },
      {
        text: 'We have similar values with minor differences we can navigate',
        value: 3,
      },
      {
        text: 'We have some conflicting values but respect each other',
        value: 2,
      },
      { text: 'Our values around money and lifestyle often clash', value: 1 },
    ],
  },
  {
    id: 7,
    category: 'social',
    question:
      "How well do you connect with each other's families, friends, and social circles?",
    options: [
      { text: "We blend seamlessly into each other's social worlds", value: 4 },
      {
        text: "We get along well with most people in each other's lives",
        value: 3,
      },
      {
        text: 'There are some tensions but we navigate them together',
        value: 2,
      },
      {
        text: "We struggle to fit into each other's social environments",
        value: 1,
      },
    ],
  },
  {
    id: 8,
    category: 'spiritual',
    question:
      'How often do you feel a deep, spiritual or energetic connection with your partner?',
    options: [
      {
        text: "Almost always - we feel like we're energetically aligned",
        value: 4,
      },
      {
        text: 'Frequently, especially during meaningful moments together',
        value: 3,
      },
      { text: 'Sometimes, but it comes and goes', value: 2 },
      {
        text: 'Rarely - we feel more like companions than soulmates',
        value: 1,
      },
    ],
  },
  {
    id: 9,
    category: 'communication',
    question:
      'How do you both handle stress, challenges, and difficult life transitions?',
    options: [
      {
        text: 'We support each other and grow stronger through challenges',
        value: 4,
      },
      {
        text: 'We usually support each other, though stress can create tension',
        value: 3,
      },
      {
        text: 'We try to be supportive but sometimes withdraw or clash',
        value: 2,
      },
      { text: 'Stress and challenges tend to drive us apart', value: 1 },
    ],
  },
  {
    id: 10,
    category: 'intimacy',
    question:
      'How satisfied are you with the physical and emotional intimacy in your relationship?',
    options: [
      {
        text: 'Very satisfied - we have a strong intimate connection',
        value: 4,
      },
      {
        text: 'Mostly satisfied, with room for growth and exploration',
        value: 3,
      },
      { text: 'Sometimes satisfied, but we have ups and downs', value: 2 },
      {
        text: 'Often unsatisfied - intimacy feels forced or disconnected',
        value: 1,
      },
    ],
  },
  {
    id: 11,
    category: 'emotional',
    question:
      'When you imagine your relationship in 5-10 years, how do you feel?',
    options: [
      {
        text: "Excited and confident - I can't wait to build our future",
        value: 4,
      },
      {
        text: "Optimistic and hopeful about what we'll create together",
        value: 3,
      },
      {
        text: 'Uncertain but willing to see where the journey takes us',
        value: 2,
      },
      {
        text: 'Worried or doubtful about our long-term compatibility',
        value: 1,
      },
    ],
  },
  {
    id: 12,
    category: 'spiritual',
    question:
      'Do you feel like you and your partner are meant to be together in this lifetime?',
    options: [
      {
        text: 'Absolutely - this feels like destiny or a soul connection',
        value: 4,
      },
      {
        text: 'Yes, I believe we chose each other for important reasons',
        value: 3,
      },
      {
        text: "Maybe - there's something special but I'm not sure what",
        value: 2,
      },
      {
        text: "I'm not sure - it might just be coincidence or timing",
        value: 1,
      },
    ],
  },
]

export const zodiacSigns = [
  'Aries',
  'Taurus',
  'Gemini',
  'Cancer',
  'Leo',
  'Virgo',
  'Libra',
  'Scorpio',
  'Sagittarius',
  'Capricorn',
  'Aquarius',
  'Pisces',
]

export const elementCompatibility = {
  Fire: ['Fire', 'Air'],
  Earth: ['Earth', 'Water'],
  Air: ['Air', 'Fire'],
  Water: ['Water', 'Earth'],
}

export const signElements = {
  Aries: 'Fire',
  Taurus: 'Earth',
  Gemini: 'Air',
  Cancer: 'Water',
  Leo: 'Fire',
  Virgo: 'Earth',
  Libra: 'Air',
  Scorpio: 'Water',
  Sagittarius: 'Fire',
  Capricorn: 'Earth',
  Aquarius: 'Air',
  Pisces: 'Water',
}
