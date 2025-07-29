export interface PsychicService {
  id: string
  title: string
  icon: string
  description: string
  features: string[]
  price: string
  rating: number
  specialists: number
}

export interface Testimonial {
  name: string
  service: string
  rating: number
  text: string
}

export const psychicServices: PsychicService[] = [
  {
    id: 'psychic-reading',
    title: 'Psychic Readings',
    icon: 'Eye',
    description:
      'Get insights into your past, present, and future with gifted psychic advisors.',
    features: [
      'Life guidance',
      'Future predictions',
      'Spiritual insights',
      'Personal clarity',
    ],
    price: 'From $1.99/min',
    rating: 4.8,
    specialists: 150,
  },
  {
    id: 'love-tarot',
    title: 'Love & Relationship Readings',
    icon: 'Heart',
    description:
      'Discover what the cards reveal about your romantic future and relationships.',
    features: [
      'Soulmate guidance',
      'Relationship advice',
      'Love compatibility',
      'Breakup healing',
    ],
    price: 'From $2.49/min',
    rating: 4.9,
    specialists: 89,
  },
  {
    id: 'tarot-reading',
    title: 'Tarot Card Readings',
    icon: 'Sparkles',
    description:
      'Ancient wisdom through tarot cards to guide your life decisions.',
    features: [
      'Celtic Cross spread',
      'Daily guidance',
      'Career insights',
      'Spiritual growth',
    ],
    price: 'From $1.79/min',
    rating: 4.7,
    specialists: 120,
  },
  {
    id: 'medium',
    title: 'Medium Readings',
    icon: 'Moon',
    description:
      'Connect with departed loved ones through experienced mediums.',
    features: [
      'Spirit communication',
      'Closure & healing',
      'Messages from beyond',
      'Grief support',
    ],
    price: 'From $3.99/min',
    rating: 4.6,
    specialists: 45,
  },
  {
    id: 'astrology',
    title: 'Astrology Readings',
    icon: 'Star',
    description: 'Detailed birth chart analysis and astrological guidance.',
    features: [
      'Birth chart reading',
      'Transit analysis',
      'Compatibility reports',
      'Life path guidance',
    ],
    price: 'From $2.99/min',
    rating: 4.8,
    specialists: 67,
  },
  {
    id: 'dream-analysis',
    title: 'Dream Analysis',
    icon: 'Shield',
    description:
      'Unlock the hidden meanings in your dreams with expert interpretation.',
    features: [
      'Dream symbolism',
      'Recurring dreams',
      'Nightmare analysis',
      'Prophetic dreams',
    ],
    price: 'From $1.99/min',
    rating: 4.5,
    specialists: 34,
  },
]

export const testimonials: Testimonial[] = [
  {
    name: 'Sarah M.',
    service: 'Love Reading',
    rating: 5,
    text: 'Amazing accuracy! The psychic told me exactly what I needed to hear about my relationship. Everything she predicted came true within a month.',
  },
  {
    name: 'Michael R.',
    service: 'Career Guidance',
    rating: 5,
    text: "The insights I received helped me make a major career decision. I'm now in my dream job thanks to the guidance I received.",
  },
  {
    name: 'Jennifer L.',
    service: 'Medium Reading',
    rating: 5,
    text: 'I was able to connect with my grandmother who passed away. The medium knew things only she would know. It brought me so much peace.',
  },
]
