'use client'

import type React from 'react'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import {
  Share2,
  RefreshCw,
  Star,
  Crown,
  Eye,
  Shield,
  Flame,
  Clock,
  Zap,
  Sword,
} from 'lucide-react'
import AffiliateButton from '@/components/AffiliateButton'

interface PlanetaryOriginQuizProps {
  onReset?: () => void
}

interface Planet {
  name: string
  title: string
  emoji: string
  description: string
  element: { name: string; emoji: string }
  vibe: { name: string; emoji: string }
  energy: { name: string; emoji: string }
  superpower: { name: string; emoji: string }
  loveStyle: string
  strengths: string[]
  challenges: string[]
  career: string
  compatibility: string[]
  affirmation: string
}

const PlanetaryOriginQuiz: React.FC<PlanetaryOriginQuizProps> = ({
  onReset,
}) => {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<{ [key: number]: string }>({})
  const [result, setResult] = useState<Planet | null>(null)
  const [loading, setLoading] = useState(false)

  const planetResults: { [key: string]: Planet } = {
    venus: {
      name: 'Venus',
      title: 'The Venusian Seducer',
      emoji: '💖',
      description:
        "You're a cosmic love goddess who came to Earth to teach humans about beauty, harmony, and the art of seduction. Your alien DNA is pure romance mixed with aesthetic perfection.",
      element: { name: 'Love Energy', emoji: '💕' },
      vibe: { name: 'Romantic', emoji: '🌹' },
      energy: { name: 'Magnetic', emoji: '🧲' },
      superpower: { name: 'Heart Healing', emoji: '💖' },
      loveStyle:
        'You love through beauty, touch, and creating magical moments. Your relationships are like fairy tales with a cosmic twist.',
      strengths: [
        'Natural charm and magnetism',
        'Aesthetic genius',
        'Emotional intelligence',
        'Creating harmony',
      ],
      challenges: [
        'Can be too idealistic',
        'Struggles with harsh realities',
        'Sometimes superficial',
        'Avoids conflict',
      ],
      career:
        'Artist, designer, therapist, or anything involving beauty and human connection',
      compatibility: ['Mars', 'Neptune', 'Moon'],
      affirmation:
        'I am a vessel of cosmic love, bringing beauty and harmony wherever I go.',
    },
    mars: {
      name: 'Mars',
      title: 'The Martian Warrior',
      emoji: '⚔️',
      description:
        "You're a fierce cosmic warrior who came to Earth to fight for justice and ignite passion in human hearts. Your alien DNA is pure fire and determination.",
      element: { name: 'Fire Power', emoji: '🔥' },
      vibe: { name: 'Intense', emoji: '⚡' },
      energy: { name: 'Dynamic', emoji: '🚀' },
      superpower: { name: 'Courage', emoji: '🦁' },
      loveStyle:
        'You love passionately and protectively. Your relationships are intense adventures full of growth and challenge.',
      strengths: [
        'Natural leadership',
        'Incredible courage',
        'Motivates others',
        'Gets things done',
      ],
      challenges: [
        'Can be too aggressive',
        'Impatient with slowness',
        'Sometimes insensitive',
        'Burnout prone',
      ],
      career:
        'Entrepreneur, athlete, activist, or any field requiring courage and action',
      compatibility: ['Venus', 'Jupiter', 'Pluto'],
      affirmation:
        'I am a cosmic warrior, channeling my fire to create positive change in the universe.',
    },
    jupiter: {
      name: 'Jupiter',
      title: 'The Jovian Daydreamer',
      emoji: '🌟',
      description:
        "You're an expansive cosmic philosopher who came to Earth to inspire big dreams and share universal wisdom. Your alien DNA is pure optimism and infinite possibility.",
      element: { name: 'Expansion', emoji: '🌌' },
      vibe: { name: 'Optimistic', emoji: '☀️' },
      energy: { name: 'Abundant', emoji: '💫' },
      superpower: { name: 'Manifestation', emoji: '✨' },
      loveStyle:
        'You love through adventure, growth, and shared dreams. Your relationships are journeys of mutual expansion.',
      strengths: [
        'Natural wisdom',
        'Infectious optimism',
        'Big picture thinking',
        'Generous spirit',
      ],
      challenges: [
        'Can be unrealistic',
        'Overcommits easily',
        'Sometimes preachy',
        'Avoids details',
      ],
      career:
        'Teacher, philosopher, travel guide, or any field involving growth and inspiration',
      compatibility: ['Sagittarius energy', 'Neptune', 'Uranus'],
      affirmation:
        'I am an infinite being of light, expanding consciousness wherever I journey.',
    },
    saturn: {
      name: 'Saturn',
      title: 'The Saturnian Time Bender',
      emoji: '⏳',
      description:
        "You're a cosmic architect who came to Earth to build lasting structures and teach the value of patience. Your alien DNA is pure discipline mixed with ancient wisdom.",
      element: { name: 'Time', emoji: '⏰' },
      vibe: { name: 'Structured', emoji: '🏗️' },
      energy: { name: 'Steady', emoji: '🗿' },
      superpower: { name: 'Manifestation', emoji: '🔨' },
      loveStyle:
        'You love through commitment, loyalty, and building something beautiful together over time.',
      strengths: [
        'Incredible discipline',
        'Long-term vision',
        'Reliable and trustworthy',
        'Wisdom through experience',
      ],
      challenges: [
        'Can be too rigid',
        'Overly critical',
        'Struggles with spontaneity',
        'Pessimistic tendencies',
      ],
      career:
        'Architect, manager, mentor, or any field requiring structure and long-term planning',
      compatibility: ['Capricorn energy', 'Venus', 'Mars'],
      affirmation:
        'I am a master builder of reality, creating lasting beauty through patience and wisdom.',
    },
    neptune: {
      name: 'Neptune',
      title: 'The Neptunian Romantic',
      emoji: '🌊',
      description:
        "You're a mystical cosmic dreamer who came to Earth to awaken humanity's spiritual and artistic potential. Your alien DNA is pure intuition and divine connection.",
      element: { name: 'Water Spirit', emoji: '💧' },
      vibe: { name: 'Mystical', emoji: '🔮' },
      energy: { name: 'Flowing', emoji: '🌊' },
      superpower: { name: 'Psychic Gifts', emoji: '👁️' },
      loveStyle:
        'You love through soul connection, artistic expression, and spiritual bonding that transcends the physical.',
      strengths: [
        'Deep intuition',
        'Artistic genius',
        'Compassionate heart',
        'Spiritual wisdom',
      ],
      challenges: [
        'Can be too escapist',
        'Boundary issues',
        'Overly sensitive',
        'Prone to illusion',
      ],
      career:
        'Artist, healer, psychic, or any field involving creativity and spiritual connection',
      compatibility: ['Pisces energy', 'Venus', 'Moon'],
      affirmation:
        'I am a channel for divine love and creativity, flowing with the cosmic current.',
    },
    uranus: {
      name: 'Uranus',
      title: 'The Uranian Rebel',
      emoji: '⚡',
      description:
        "You're an electric cosmic revolutionary who came to Earth to shake up outdated systems and awaken human consciousness. Your alien DNA is pure innovation and rebellion.",
      element: { name: 'Lightning', emoji: '⚡' },
      vibe: { name: 'Revolutionary', emoji: '🔥' },
      energy: { name: 'Electric', emoji: '💥' },
      superpower: { name: 'Innovation', emoji: '🚀' },
      loveStyle:
        "You love through freedom, intellectual connection, and supporting each other's unique expression.",
      strengths: [
        'Visionary thinking',
        'Natural innovator',
        'Fiercely independent',
        'Awakens others',
      ],
      challenges: [
        'Can be too detached',
        'Unpredictable moods',
        'Rebels without cause',
        'Commitment issues',
      ],
      career:
        'Inventor, activist, tech innovator, or any field involving change and progress',
      compatibility: ['Aquarius energy', 'Jupiter', 'Mars'],
      affirmation:
        'I am a lightning bolt of change, illuminating new possibilities for humanity.',
    },
    pluto: {
      name: 'Pluto',
      title: 'The Plutonian Shadow Healer',
      emoji: '🖤',
      description:
        "You're a powerful cosmic transformer who came to Earth to help souls heal their deepest wounds and embrace their shadow. Your alien DNA is pure transformation and rebirth.",
      element: { name: 'Dark Matter', emoji: '🌑' },
      vibe: { name: 'Intense', emoji: '🔥' },
      energy: { name: 'Transformative', emoji: '🦋' },
      superpower: { name: 'Soul Healing', emoji: '💀' },
      loveStyle:
        'You love through deep transformation, soul-level connection, and helping partners become their truest selves.',
      strengths: [
        'Incredible depth',
        'Natural healer',
        'Sees through illusions',
        'Transforms pain into power',
      ],
      challenges: [
        'Can be too intense',
        'Obsessive tendencies',
        'Difficulty with lightness',
        'Trust issues',
      ],
      career:
        'Therapist, researcher, detective, or any field involving deep transformation and healing',
      compatibility: ['Scorpio energy', 'Mars', 'Saturn'],
      affirmation:
        'I am a phoenix of transformation, rising from ashes to help others heal and grow.',
    },
    moon: {
      name: 'The Hidden Star',
      title: 'Moonchild from the Hidden Star',
      emoji: '🌙',
      description:
        "You're a nurturing cosmic guardian who came from a secret star to protect and nurture Earth's emotional evolution. Your alien DNA is pure empathy and intuitive wisdom.",
      element: { name: 'Moonlight', emoji: '🌙' },
      vibe: { name: 'Nurturing', emoji: '🤱' },
      energy: { name: 'Cyclical', emoji: '🔄' },
      superpower: { name: 'Emotional Healing', emoji: '💝' },
      loveStyle:
        'You love through nurturing, emotional support, and creating safe spaces for hearts to heal and grow.',
      strengths: [
        'Deep empathy',
        'Natural nurturer',
        'Intuitive wisdom',
        'Emotional intelligence',
      ],
      challenges: [
        'Overly sensitive',
        'Mood swings',
        "Takes on others' emotions",
        'Difficulty setting boundaries',
      ],
      career:
        'Counselor, caregiver, chef, or any field involving nurturing and emotional support',
      compatibility: ['Cancer energy', 'Venus', 'Neptune'],
      affirmation:
        'I am a cosmic mother, nurturing souls with the gentle power of lunar love.',
    },
  }

  const questions = [
    {
      id: 1,
      question: "What's your current mood in emojis?",
      type: 'multiple',
      options: [
        {
          emoji: '😍',
          text: 'Cosmic Love Vibes',
          value: 'love',
          description: 'Radiating pure heart energy',
        },
        {
          emoji: '🔥',
          text: 'Fierce Fire Energy',
          value: 'fire',
          description: 'Ready to conquer galaxies',
        },
        {
          emoji: '🌊',
          text: 'Deep Ocean Feels',
          value: 'water',
          description: 'Flowing with intuition',
        },
        {
          emoji: '⚡',
          text: 'Electric Chaos',
          value: 'electric',
          description: 'Buzzing with rebellion',
        },
      ],
    },
    {
      id: 2,
      question: 'If you were a cosmic weather forecast, what would you be?',
      type: 'multiple',
      options: [
        {
          emoji: '☀️',
          text: 'Solar Flare',
          value: 'solar',
          description: 'Intense and transformative',
        },
        {
          emoji: '🌙',
          text: 'Lunar Eclipse',
          value: 'eclipse',
          description: 'Mysterious and powerful',
        },
        {
          emoji: '🌫️',
          text: 'Cosmic Fog',
          value: 'fog',
          description: 'Dreamy and ethereal',
        },
        {
          emoji: '⭐',
          text: 'Supernova',
          value: 'supernova',
          description: 'Explosive creativity',
        },
      ],
    },
    {
      id: 3,
      question: "What's your favorite constellation?",
      subtitle: '(Or make one up!)',
      type: 'text',
      placeholder: 'e.g., Orion, The Dancing Cat, The Cosmic Pizza...',
    },
    {
      id: 4,
      question: 'City of birth',
      subtitle: 'Where did your Earth journey begin?',
      type: 'text',
      placeholder: 'Enter your birth city',
    },
    {
      id: 5,
      question: 'Do you believe aliens are sexy?',
      type: 'multiple',
      options: [
        {
          emoji: '👽',
          text: 'Obviously! Have you seen their eyes?',
          value: 'yes',
          description: 'Intergalactic attraction',
        },
        {
          emoji: '🤔',
          text: 'Depends on the species',
          value: 'maybe',
          description: 'Selective cosmic taste',
        },
        {
          emoji: '😅',
          text: 'I prefer Earth beings',
          value: 'no',
          description: 'Traditional romantic',
        },
        {
          emoji: '🛸',
          text: 'I AM the sexy alien',
          value: 'alien',
          description: 'Ultimate confidence',
        },
      ],
    },
    {
      id: 6,
      question: 'What annoys you most on Earth?',
      type: 'multiple',
      options: [
        {
          emoji: '⏰',
          text: 'Linear time constraints',
          value: 'time',
          description: 'Time is an illusion',
        },
        {
          emoji: '📱',
          text: 'Shallow social media',
          value: 'shallow',
          description: 'Craving deeper connections',
        },
        {
          emoji: '🏢',
          text: 'Corporate structures',
          value: 'structure',
          description: 'Freedom over conformity',
        },
        {
          emoji: '🌍',
          text: 'Environmental destruction',
          value: 'environment',
          description: 'Planetary healing needed',
        },
      ],
    },
    {
      id: 7,
      question: 'Favorite element:',
      type: 'multiple',
      options: [
        {
          emoji: '🔥',
          text: 'Fire',
          value: 'fire',
          description: 'Passion and transformation',
        },
        {
          emoji: '🌍',
          text: 'Earth',
          value: 'earth',
          description: 'Grounding and stability',
        },
        {
          emoji: '💨',
          text: 'Air',
          value: 'air',
          description: 'Communication and ideas',
        },
        {
          emoji: '🌊',
          text: 'Water',
          value: 'water',
          description: 'Emotion and intuition',
        },
        {
          emoji: '🌌',
          text: 'Dark Matter',
          value: 'dark',
          description: 'Mystery and depth',
        },
      ],
    },
    {
      id: 8,
      question: 'What song matches your aura?',
      type: 'text',
      placeholder: 'Song title or describe the vibe...',
    },
    {
      id: 9,
      question: 'Your star sign:',
      type: 'multiple',
      options: [
        { emoji: '♈', text: 'Aries', value: 'aries' },
        { emoji: '♉', text: 'Taurus', value: 'taurus' },
        { emoji: '♊', text: 'Gemini', value: 'gemini' },
        { emoji: '♋', text: 'Cancer', value: 'cancer' },
        { emoji: '♌', text: 'Leo', value: 'leo' },
        { emoji: '♍', text: 'Virgo', value: 'virgo' },
        { emoji: '♎', text: 'Libra', value: 'libra' },
        { emoji: '♏', text: 'Scorpio', value: 'scorpio' },
        { emoji: '♐', text: 'Sagittarius', value: 'sagittarius' },
        { emoji: '♑', text: 'Capricorn', value: 'capricorn' },
        { emoji: '♒', text: 'Aquarius', value: 'aquarius' },
        { emoji: '♓', text: 'Pisces', value: 'pisces' },
      ],
    },
    {
      id: 10,
      question: 'Rising sign (if you know it):',
      type: 'text',
      placeholder: 'Optional - your rising/ascendant sign',
    },
    {
      id: 11,
      question: 'Moon sign (if you know it):',
      type: 'text',
      placeholder: 'Optional - your moon sign',
    },
    {
      id: 12,
      question: 'Your chaos level:',
      subtitle: 'From Zen Master to Pure Chaos',
      type: 'slider',
    },
    {
      id: 13,
      question: 'What kind of dreams do you have?',
      type: 'multiple',
      options: [
        {
          emoji: '🌈',
          text: 'Vivid, colorful adventures',
          value: 'vivid',
          description: 'Dream explorer',
        },
        {
          emoji: '🔮',
          text: 'Prophetic visions',
          value: 'prophetic',
          description: 'Future seer',
        },
        {
          emoji: '👻',
          text: 'Dark, mysterious journeys',
          value: 'dark',
          description: 'Shadow walker',
        },
        {
          emoji: '💭',
          text: 'I rarely remember them',
          value: 'forgotten',
          description: 'Practical dreamer',
        },
      ],
    },
    {
      id: 14,
      question: 'How do you text during Mercury retrograde?',
      type: 'multiple',
      options: [
        {
          emoji: '📵',
          text: 'I go completely offline',
          value: 'offline',
          description: 'Digital detox master',
        },
        {
          emoji: '😤',
          text: 'Aggressively, with typos',
          value: 'aggressive',
          description: 'Fighting the cosmic chaos',
        },
        {
          emoji: '🧘',
          text: 'Extra mindfully',
          value: 'mindful',
          description: 'Cosmic awareness',
        },
        {
          emoji: '🤷',
          text: "What's Mercury retrograde?",
          value: 'unaware',
          description: 'Blissfully ignorant',
        },
      ],
    },
    {
      id: 15,
      question: 'Preferred love language:',
      type: 'multiple',
      options: [
        {
          emoji: '🤗',
          text: 'Physical Touch',
          value: 'touch',
          description: 'Skin-to-skin connection',
        },
        {
          emoji: '💬',
          text: 'Words of Affirmation',
          value: 'words',
          description: 'Verbal love poetry',
        },
        {
          emoji: '🧠',
          text: 'Telepathy',
          value: 'telepathy',
          description: 'Mind-to-mind communion',
        },
        {
          emoji: '✨',
          text: 'Star Fusion',
          value: 'fusion',
          description: 'Cosmic soul merging',
        },
      ],
    },
    {
      id: 16,
      question: 'Your ideal intergalactic date night?',
      type: 'multiple',
      options: [
        {
          emoji: '🌙',
          text: 'Moonlit stargazing',
          value: 'romantic',
          description: 'Classic cosmic romance',
        },
        {
          emoji: '🛸',
          text: 'UFO racing',
          value: 'adventure',
          description: 'Adrenaline and speed',
        },
        {
          emoji: '🔮',
          text: 'Psychic connection ritual',
          value: 'mystical',
          description: 'Deep soul bonding',
        },
        {
          emoji: '🎭',
          text: 'Shapeshifting contest',
          value: 'playful',
          description: 'Fun and transformation',
        },
      ],
    },
    {
      id: 17,
      question: "When you're stressed, you:",
      type: 'multiple',
      options: [
        {
          emoji: '🌋',
          text: 'Explode like a volcano',
          value: 'explosive',
          description: 'Intense release',
        },
        {
          emoji: '🧊',
          text: 'Freeze and withdraw',
          value: 'withdraw',
          description: 'Protective isolation',
        },
        {
          emoji: '🌪️',
          text: 'Create beautiful chaos',
          value: 'chaos',
          description: 'Transformative energy',
        },
        {
          emoji: '🕳️',
          text: 'Disappear into another dimension',
          value: 'escape',
          description: 'Reality shifting',
        },
      ],
    },
    {
      id: 18,
      question: 'Your superpower would be:',
      type: 'multiple',
      options: [
        {
          emoji: '💕',
          text: 'Love manifestation',
          value: 'love',
          description: 'Creating heart connections',
        },
        {
          emoji: '⚔️',
          text: 'Cosmic warrior strength',
          value: 'strength',
          description: 'Galactic protection',
        },
        {
          emoji: '🔮',
          text: 'Time manipulation',
          value: 'time',
          description: 'Bending reality',
        },
        {
          emoji: '🌊',
          text: 'Emotional healing waves',
          value: 'healing',
          description: 'Soul restoration',
        },
      ],
    },
    {
      id: 19,
      question: 'Your ideal living situation:',
      type: 'multiple',
      options: [
        {
          emoji: '🏰',
          text: 'Floating crystal palace',
          value: 'luxury',
          description: 'Royal cosmic lifestyle',
        },
        {
          emoji: '🏕️',
          text: 'Nomadic spaceship',
          value: 'nomad',
          description: 'Freedom and exploration',
        },
        {
          emoji: '🌳',
          text: 'Enchanted forest hideaway',
          value: 'nature',
          description: 'Earth connection',
        },
        {
          emoji: '🌌',
          text: 'Interdimensional portal hub',
          value: 'portal',
          description: 'Reality crossing',
        },
      ],
    },
    {
      id: 20,
      question: 'What draws you to someone?',
      type: 'multiple',
      options: [
        {
          emoji: '👁️',
          text: 'Their mysterious eyes',
          value: 'mystery',
          description: 'Soul window attraction',
        },
        {
          emoji: '⚡',
          text: 'Electric energy field',
          value: 'energy',
          description: 'Vibrational matching',
        },
        {
          emoji: '🧠',
          text: 'Brilliant mind',
          value: 'intellect',
          description: 'Mental stimulation',
        },
        {
          emoji: '💫',
          text: 'Their cosmic aura',
          value: 'aura',
          description: 'Spiritual recognition',
        },
      ],
    },
    {
      id: 21,
      question: 'Your biggest fear:',
      type: 'multiple',
      options: [
        {
          emoji: '⏰',
          text: 'Running out of time',
          value: 'time',
          description: 'Mortality awareness',
        },
        {
          emoji: '💔',
          text: 'Never finding true love',
          value: 'love',
          description: 'Connection longing',
        },
        {
          emoji: '🌑',
          text: 'Losing your magic',
          value: 'magic',
          description: 'Power preservation',
        },
        {
          emoji: '🤖',
          text: 'Becoming too ordinary',
          value: 'ordinary',
          description: 'Uniqueness protection',
        },
      ],
    },
    {
      id: 22,
      question: 'Complete this cosmic truth:',
      subtitle: "'The universe whispers to me...'",
      type: 'text',
      placeholder: 'What does the universe tell you?',
    },
  ]

  const handleAnswer = (value: string) => {
    setAnswers({ ...answers, [currentQuestion]: value })
  }

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      calculatePlanet()
    }
  }

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
    }
  }

  const calculatePlanet = () => {
    setLoading(true)

    // Simple calculation logic
    const planetKeys = Object.keys(planetResults)
    const randomPlanet =
      planetKeys[Math.floor(Math.random() * planetKeys.length)]

    setTimeout(() => {
      setResult(planetResults[randomPlanet])
      setLoading(false)
    }, 2000)
  }

  const resetQuiz = () => {
    setCurrentQuestion(0)
    setAnswers({})
    setResult(null)
    setLoading(false)
    if (onReset) onReset()
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
          className="text-center"
        >
          <Star className="w-16 h-16 text-amber-400 mx-auto mb-4" />
          <p className="text-white text-xl">
            The cosmos is revealing your origin...
          </p>
        </motion.div>
      </div>
    )
  }

  if (result) {
    return (
      <div className="min-h-screen py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Your Cosmic Origin Revealed
            </h1>
            <p className="text-purple-300 text-lg">
              The stars have spoken... ✨
            </p>
          </motion.div>

          {/* Planet Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative bg-black/40 backdrop-blur-sm rounded-3xl p-8 border border-purple-500/30 mb-8 overflow-hidden"
          >
            {/* Floating Elements */}
            <div className="absolute top-4 right-4">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
              >
                <Star className="w-8 h-8 text-yellow-400" />
              </motion.div>
            </div>

            <div className="absolute bottom-4 left-4">
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Star className="w-6 h-6 text-purple-400" />
              </motion.div>
            </div>

            {/* Planet Header */}
            <div className="text-center mb-8">
              <motion.div
                className="text-8xl mb-4"
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                {result.emoji}
              </motion.div>

              <h2 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                {result.name}
              </h2>

              <p className="text-purple-300 text-lg font-semibold">
                {result.title}
              </p>
            </div>

            {/* Description */}
            <div className="bg-purple-900/30 rounded-2xl p-6 mb-6">
              <p className="text-purple-100 text-lg leading-relaxed text-center">
                {result.description}
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center p-4 bg-purple-800/30 rounded-xl">
                <div className="text-2xl mb-2">{result.element.emoji}</div>
                <div className="text-purple-200 text-sm font-semibold">
                  {result.element.name}
                </div>
              </div>

              <div className="text-center p-4 bg-purple-800/30 rounded-xl">
                <div className="text-2xl mb-2">{result.vibe.emoji}</div>
                <div className="text-purple-200 text-sm font-semibold">
                  {result.vibe.name}
                </div>
              </div>

              <div className="text-center p-4 bg-purple-800/30 rounded-xl">
                <div className="text-2xl mb-2">{result.energy.emoji}</div>
                <div className="text-purple-200 text-sm font-semibold">
                  {result.energy.name}
                </div>
              </div>

              <div className="text-center p-4 bg-purple-800/30 rounded-xl">
                <div className="text-2xl mb-2">{result.superpower.emoji}</div>
                <div className="text-purple-200 text-sm font-semibold">
                  {result.superpower.name}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Detailed Results */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/30">
              <div className="flex items-center mb-4">
                <Crown className="w-6 h-6 text-pink-400 mr-2" />
                <h3 className="text-xl font-bold text-white">
                  Love & Relationships
                </h3>
              </div>
              <p className="text-purple-200 leading-relaxed">
                {result.loveStyle}
              </p>
            </div>

            <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/30">
              <div className="flex items-center mb-4">
                <Zap className="w-6 h-6 text-yellow-400 mr-2" />
                <h3 className="text-xl font-bold text-white">Cosmic Powers</h3>
              </div>
              <ul className="text-purple-200 space-y-2">
                {result.strengths.map((strength, index) => (
                  <li key={index} className="flex items-center">
                    <span className="w-2 h-2 bg-purple-400 rounded-full mr-3" />
                    {strength}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/30">
              <div className="flex items-center mb-4">
                <Shield className="w-6 h-6 text-red-400 mr-2" />
                <h3 className="text-xl font-bold text-white">
                  Earthly Challenges
                </h3>
              </div>
              <ul className="text-purple-200 space-y-2">
                {result.challenges.map((challenge, index) => (
                  <li key={index} className="flex items-center">
                    <span className="w-2 h-2 bg-red-400 rounded-full mr-3" />
                    {challenge}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/30">
              <h3 className="text-xl font-bold text-white mb-4">
                Perfect Earth Career
              </h3>
              <p className="text-purple-200 leading-relaxed">{result.career}</p>
            </div>
          </div>

          {/* Compatibility */}
          <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/30 mb-12">
            <h3 className="text-xl font-bold text-white mb-4 text-center">
              Cosmic Compatibility
            </h3>
            <p className="text-purple-200 text-center mb-4">
              You're most compatible with beings from:
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {result.compatibility.map((planet, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-purple-600/30 rounded-full text-purple-200 text-sm"
                >
                  {planet}
                </span>
              ))}
            </div>
          </div>

          {/* Affirmation */}
          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl p-8 border border-purple-400/30 mb-12 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Your Cosmic Affirmation
            </h3>
            <p className="text-lg italic text-purple-100 leading-relaxed">
              "{result.affirmation}"
            </p>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-purple-800/50 to-pink-800/50 rounded-2xl p-6 border border-purple-400/30 mb-8">
            <h3 className="text-xl font-bold text-white mb-4 text-center">
              Discover More About Your Cosmic Origin
            </h3>
            <p className="text-gray-200 mb-4 text-center">
              Ready to dive deeper into your planetary heritage? Get
              personalized cosmic readings and discover your full galactic
              blueprint.
            </p>
            <div className="text-center">
              <AffiliateButton
                text="Explore Your Cosmic Heritage"
                className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-bold px-8 py-3 rounded-full transition-all duration-300"
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={resetQuiz}
              className="flex items-center px-6 py-3 bg-purple-800/50 rounded-full hover:bg-purple-700/50 transition-colors text-white"
            >
              <RefreshCw className="w-5 h-5 mr-2" />
              Discover Another Planet
            </button>
          </div>
        </div>
      </div>
    )
  }

  // Quiz Questions
  const currentQ = questions[currentQuestion]
  const progress = ((currentQuestion + 1) / questions.length) * 100

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-8">
      <div className="max-w-2xl mx-auto w-full">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-purple-300 text-sm">
              Question {currentQuestion + 1} of {questions.length}
            </span>
            <span className="text-purple-300 text-sm">
              {Math.round(progress)}% Complete
            </span>
          </div>
          <div className="w-full bg-purple-900/50 rounded-full h-2">
            <motion.div
              className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>

        {/* Question Card */}
        <motion.div
          key={currentQuestion}
          className="bg-black/30 backdrop-blur-sm rounded-3xl p-8 border border-purple-500/30 mb-8"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-4">
              <Star className="w-6 h-6 text-yellow-400 mr-2 animate-pulse" />
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                {currentQ.question}
              </h2>
              <Star className="w-6 h-6 text-yellow-400 ml-2 animate-pulse" />
            </div>
            {currentQ.subtitle && (
              <p className="text-purple-200 text-lg">{currentQ.subtitle}</p>
            )}
          </div>

          <div className="space-y-4">
            {currentQ.type === 'text' ? (
              <input
                type="text"
                value={answers[currentQuestion] || ''}
                onChange={(e) => handleAnswer(e.target.value)}
                placeholder={currentQ.placeholder}
                className="w-full p-4 bg-purple-900/50 border border-purple-500/50 rounded-xl text-white placeholder-purple-300 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/50"
              />
            ) : currentQ.type === 'slider' ? (
              <div className="px-4">
                <input
                  type="range"
                  min="1"
                  max="10"
                  value={answers[currentQuestion] || 5}
                  onChange={(e) => handleAnswer(e.target.value)}
                  className="w-full h-2 bg-purple-900 rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="flex justify-between text-purple-300 text-sm mt-2">
                  <span>1 - Zen Master</span>
                  <span className="font-bold text-pink-400">
                    {answers[currentQuestion] || 5}
                  </span>
                  <span>10 - Pure Chaos</span>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {currentQ.options?.map((option, index) => (
                  <motion.button
                    key={index}
                    onClick={() => handleAnswer(option.value)}
                    className={`p-4 rounded-xl border-2 transition-all duration-300 text-left ${
                      answers[currentQuestion] === option.value
                        ? 'border-purple-400 bg-purple-600/30 shadow-lg shadow-purple-500/30'
                        : 'border-purple-500/30 bg-purple-900/20 hover:border-purple-400/50 hover:bg-purple-800/30'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-center">
                      {option.emoji && (
                        <span className="text-2xl mr-3">{option.emoji}</span>
                      )}
                      <div>
                        <h3 className="font-semibold text-white mb-1">
                          {option.text}
                        </h3>
                        {option.description && (
                          <p className="text-purple-200 text-sm">
                            {option.description}
                          </p>
                        )}
                      </div>
                    </div>
                  </motion.button>
                ))}
              </div>
            )}
          </div>

          <div className="flex justify-between items-center mt-8">
            <motion.button
              onClick={prevQuestion}
              disabled={currentQuestion === 0}
              className="flex items-center px-6 py-3 bg-purple-800/50 rounded-full disabled:opacity-50 disabled:cursor-not-allowed hover:bg-purple-700/50 transition-colors text-white"
              whileHover={{ scale: currentQuestion === 0 ? 1 : 1.05 }}
            >
              Previous
            </motion.button>

            <motion.button
              onClick={nextQuestion}
              disabled={!answers[currentQuestion]}
              className="flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg hover:shadow-purple-500/30 transition-all text-white font-semibold"
              whileHover={{ scale: answers[currentQuestion] ? 1.05 : 1 }}
            >
              {currentQuestion === questions.length - 1
                ? 'Discover Your Planet'
                : 'Next'}
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default PlanetaryOriginQuiz
