'use client'

import type React from 'react'
import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Eye,
  Shield,
  Star,
  Flame,
  Clock,
  Zap,
  Sword,
  Moon,
  Sun,
  Wind,
  Mountain,
  Waves,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react'
import AffiliateButton from '@/components/AffiliateButton'

interface CelestialArchetypeQuizProps {
  onReset?: () => void
}

interface Archetype {
  id: string
  name: string
  icon: React.ComponentType<any>
  color: string
  description: string
  gift: string
  destiny: string
  compatibility: string
  weakness: string
  affirmation: string
  action: string
}

const CelestialArchetypeQuiz: React.FC<CelestialArchetypeQuizProps> = ({
  onReset,
}) => {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<{ [key: number]: string }>({})
  const [result, setResult] = useState<Archetype | null>(null)
  const [revealed, setRevealed] = useState(false)

  const archetypes: { [key: string]: Archetype } = {
    'starborn-oracle': {
      id: 'starborn-oracle',
      name: 'The Starborn Oracle',
      icon: Eye,
      color: 'from-purple-500 to-indigo-600',
      description:
        'You are a vessel of cosmic wisdom, born with the gift of seeing beyond the veil. Your soul carries ancient knowledge from distant stars, and your intuition flows like starlight through the darkness.',
      gift: 'Divine Foresight & Cosmic Wisdom',
      destiny:
        'To guide others through spiritual awakening and reveal hidden truths',
      compatibility:
        'Most aligned with 3s, 7s, 11s, Pisces, Scorpio, and Aquarius',
      weakness: 'Overwhelming visions can isolate you from the present moment',
      affirmation: 'I trust my inner sight and share my wisdom with compassion',
      action: 'Start your Oracle journey — get your 2025 spiritual prediction',
    },
    'lunar-siren': {
      id: 'lunar-siren',
      name: 'The Lunar Siren',
      icon: Star,
      color: 'from-blue-400 to-purple-500',
      description:
        'You embody the mystical power of the moon, drawing others into your enchanting presence. Your emotions run deep as ocean tides, and your voice carries the magic of ancient songs.',
      gift: 'Emotional Alchemy & Magnetic Presence',
      destiny:
        'To heal hearts through your intuitive understanding of human nature',
      compatibility:
        'Most aligned with 2s, 6s, 9s, Cancer, Pisces, and Scorpio',
      weakness: "Absorbing others' emotions can drain your own energy",
      affirmation: 'I channel lunar wisdom to transform pain into beauty',
      action:
        'Discover your moon phase power — unlock your 2025 lunar calendar',
    },
    'solar-guardian': {
      id: 'solar-guardian',
      name: 'The Solar Guardian',
      icon: Shield,
      color: 'from-yellow-400 to-orange-500',
      description:
        'You are a beacon of strength and protection, radiating warmth and courage to all who need shelter. Your spirit burns bright with the fire of justice and unwavering loyalty.',
      gift: 'Divine Protection & Radiant Leadership',
      destiny:
        'To shield the innocent and lead others toward their highest potential',
      compatibility: 'Most aligned with 1s, 8s, Leo, Aries, and Sagittarius',
      weakness:
        'Your fierce protection can become controlling when fear arises',
      affirmation: 'I am a lighthouse of strength, guiding others to safety',
      action:
        'Embrace your guardian power — discover your 2025 protection rituals',
    },
    'cosmic-dreamweaver': {
      id: 'cosmic-dreamweaver',
      name: 'The Cosmic Dreamweaver',
      icon: Star,
      color: 'from-pink-400 to-purple-600',
      description:
        "You dance between dimensions, weaving dreams into reality with your boundless imagination. Your creative spirit channels the universe's infinite possibilities into beautiful manifestations.",
      gift: 'Reality Manifestation & Creative Vision',
      destiny:
        'To inspire others through art, dreams, and limitless imagination',
      compatibility:
        'Most aligned with 3s, 5s, 7s, Gemini, Libra, and Aquarius',
      weakness: 'Living in dreams can disconnect you from practical reality',
      affirmation: 'I weave my dreams into reality with focused intention',
      action:
        'Activate your manifestation power — get your 2025 dream blueprint',
    },
    'flame-alchemist': {
      id: 'flame-alchemist',
      name: 'The Flame Alchemist',
      icon: Flame,
      color: 'from-red-500 to-orange-600',
      description:
        'You possess the sacred fire of transformation, turning base experiences into golden wisdom. Your passionate nature ignites change and burns away what no longer serves.',
      gift: 'Spiritual Transformation & Passionate Healing',
      destiny: 'To transmute pain into power and guide others through rebirth',
      compatibility: 'Most aligned with 1s, 4s, 8s, Aries, Leo, and Scorpio',
      weakness: 'Your intense fire can overwhelm those unprepared for change',
      affirmation: 'I am the sacred flame that transforms all it touches',
      action: 'Ignite your transformation — discover your 2025 rebirth cycle',
    },
    'chrono-healer': {
      id: 'chrono-healer',
      name: 'The Chrono Healer',
      icon: Clock,
      color: 'from-green-400 to-teal-500',
      description:
        'You understand the sacred rhythms of time and healing, knowing when to act and when to allow. Your presence brings peace and restoration to wounded souls.',
      gift: 'Divine Timing & Restorative Healing',
      destiny: 'To heal generational wounds and restore cosmic balance',
      compatibility: 'Most aligned with 2s, 6s, 9s, Virgo, Taurus, and Cancer',
      weakness: "Carrying others' pain can delay your own healing journey",
      affirmation: 'I heal in perfect timing, honoring all phases of growth',
      action: 'Master your healing gifts — unlock your 2025 wellness timeline',
    },
    'starlight-trickster': {
      id: 'starlight-trickster',
      name: 'The Starlight Trickster',
      icon: Zap,
      color: 'from-cyan-400 to-blue-500',
      description:
        'You are the cosmic jester, using wit and wisdom to reveal truth through laughter. Your playful spirit breaks down barriers and opens minds to new possibilities.',
      gift: 'Divine Humor & Truth Through Joy',
      destiny:
        'To awaken others through laughter and challenge limiting beliefs',
      compatibility:
        'Most aligned with 3s, 5s, Gemini, Sagittarius, and Aquarius',
      weakness: 'Using humor to avoid deep emotional processing',
      affirmation:
        'I speak truth through joy and illuminate darkness with light',
      action: 'Embrace your cosmic humor — discover your 2025 joy forecast',
    },
    'ethereal-warrior': {
      id: 'ethereal-warrior',
      name: 'The Ethereal Warrior',
      icon: Sword,
      color: 'from-indigo-500 to-purple-600',
      description:
        'You fight battles in both physical and spiritual realms, wielding truth as your weapon. Your courage comes from deep spiritual conviction and unwavering faith.',
      gift: 'Spiritual Warfare & Divine Courage',
      destiny: 'To defend truth and fight for justice across all dimensions',
      compatibility: 'Most aligned with 1s, 8s, Mars signs, Aries, and Scorpio',
      weakness: 'Fighting too many battles can exhaust your spiritual reserves',
      affirmation: 'I am a warrior of light, fighting with love as my strength',
      action: 'Channel your warrior spirit — unlock your 2025 battle strategy',
    },
  }

  const questions = [
    {
      id: 'name',
      type: 'text',
      question: 'What is your full name?',
      subtitle: 'Your name holds numerological power',
    },
    {
      id: 'birthCity',
      type: 'text',
      question: 'What city were you born in?',
      subtitle: 'The earth energy of your birthplace shapes your essence',
    },
    {
      id: 'zodiacSign',
      type: 'select',
      question: 'What is your zodiac sun sign?',
      options: [
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
      ],
    },
    {
      id: 'birthDate',
      type: 'date',
      question: 'When were you born?',
      subtitle: 'The cosmic alignment of your arrival',
    },
    {
      id: 'dreams',
      type: 'select',
      question: 'What do you often dream of?',
      options: [
        'Flying through starlit skies',
        'Falling into cosmic voids',
        'Ancient symbols and runes',
        'People from another lifetime',
        'Underwater realms',
        'I rarely remember my dreams',
      ],
    },
    {
      id: 'element',
      type: 'element',
      question: 'Which element speaks to your soul?',
      options: [
        { name: 'Fire', icon: Flame, color: 'from-red-500 to-orange-500' },
        { name: 'Air', icon: Wind, color: 'from-blue-400 to-cyan-400' },
        {
          name: 'Earth',
          icon: Mountain,
          color: 'from-green-600 to-emerald-600',
        },
        { name: 'Water', icon: Waves, color: 'from-blue-600 to-indigo-600' },
      ],
    },
    {
      id: 'weapon',
      type: 'select',
      question: 'Choose your cosmic weapon:',
      options: [
        'Crystal Wand of Wisdom',
        'Starlight Sword of Truth',
        'Mirror of Infinite Reflection',
        'Ancient Scroll of Secrets',
        'Eternal Flame of Passion',
        'Wings of Celestial Freedom',
      ],
    },
    {
      id: 'emotion',
      type: 'select',
      question: 'What emotion drives you most?',
      options: [
        'Compassion for all beings',
        'Fierce protective love',
        'Burning curiosity',
        'Deep spiritual longing',
        'Creative inspiration',
        'Justice and truth',
      ],
    },
    {
      id: 'fear',
      type: 'select',
      question: 'What scares you more?',
      options: [
        'Losing control of my destiny',
        'Losing my sense of purpose',
        'Being misunderstood',
        'Failing those I love',
        'Living an ordinary life',
      ],
    },
    {
      id: 'friendRole',
      type: 'select',
      question: 'What role do you play in your friend group?',
      options: [
        'The wise advisor',
        'The fierce protector',
        'The creative dreamer',
        'The healing presence',
        'The mystical guide',
        'The loyal companion',
      ],
    },
    {
      id: 'protection',
      type: 'select',
      question: 'What do you protect at all costs?',
      options: [
        'The innocent and vulnerable',
        'Ancient wisdom and truth',
        'Creative expression',
        'Emotional connections',
        'Spiritual freedom',
        'Natural harmony',
      ],
    },
    {
      id: 'intuition',
      type: 'select',
      question: 'Your intuition feels like:',
      options: [
        'Sudden visions that flash before me',
        'A gentle whisper in my mind',
        'Fire burning in my gut',
        'Emotional waves washing over me',
        'I am still learning to trust it',
      ],
    },
    {
      id: 'timeOfPower',
      type: 'time',
      question: 'When do you feel most powerful?',
      options: [
        {
          name: 'Dawn - First Light',
          icon: Sun,
          color: 'from-yellow-400 to-orange-400',
        },
        {
          name: 'Midnight - Deep Mystery',
          icon: Moon,
          color: 'from-indigo-500 to-purple-600',
        },
      ],
    },
  ]

  const handleAnswer = (value: string) => {
    setAnswers({ ...answers, [currentQuestion]: value })
  }

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      calculateArchetype()
    }
  }

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
    }
  }

  const calculateArchetype = () => {
    const archetypeKeys = Object.keys(archetypes)
    const randomArchetype =
      archetypeKeys[Math.floor(Math.random() * archetypeKeys.length)]
    setResult(archetypes[randomArchetype])
    setTimeout(() => setRevealed(true), 1000)
  }

  const resetQuiz = () => {
    setCurrentQuestion(0)
    setAnswers({})
    setResult(null)
    setRevealed(false)
    if (onReset) onReset()
  }

  if (result) {
    const Icon = result.icon

    return (
      <div className="min-h-screen flex items-center justify-center px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="relative"
          >
            {/* Card Reveal Animation */}
            <motion.div
              initial={{ rotateY: 180, opacity: 0 }}
              animate={{
                rotateY: revealed ? 0 : 180,
                opacity: revealed ? 1 : 0,
              }}
              transition={{ duration: 1.5, ease: 'easeInOut' }}
              className="bg-gradient-to-br from-slate-900/60 to-slate-800/60 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-purple-400/20 shadow-2xl"
              style={{
                boxShadow: revealed
                  ? `0 0 60px rgba(139, 92, 246, 0.3)`
                  : 'none',
              }}
            >
              <div className="text-center mb-8">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: revealed ? 1 : 0 }}
                  transition={{ delay: 0.5, duration: 0.8, type: 'spring' }}
                  className={`w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br ${result.color} flex items-center justify-center shadow-lg`}
                >
                  <Icon className="w-12 h-12 text-white" />
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: revealed ? 1 : 0, y: revealed ? 0 : 20 }}
                  transition={{ delay: 1, duration: 0.8 }}
                  className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent mb-4 font-serif"
                >
                  {result.name}
                </motion.h1>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: revealed ? 1 : 0, y: revealed ? 0 : 30 }}
                transition={{ delay: 1.5, duration: 0.8 }}
                className="space-y-8"
              >
                <div className="text-center">
                  <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
                    {result.description}
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-slate-800/30 rounded-xl p-6 border border-purple-400/20">
                    <h3 className="text-xl font-semibold text-purple-300 mb-3">
                      Your Divine Gift
                    </h3>
                    <p className="text-slate-300">{result.gift}</p>
                  </div>

                  <div className="bg-slate-800/30 rounded-xl p-6 border border-blue-400/20">
                    <h3 className="text-xl font-semibold text-blue-300 mb-3">
                      Your Cosmic Destiny
                    </h3>
                    <p className="text-slate-300">{result.destiny}</p>
                  </div>
                </div>

                <div className="bg-slate-800/30 rounded-xl p-6 border border-amber-400/20">
                  <h3 className="text-xl font-semibold text-amber-300 mb-3">
                    Cosmic Compatibility
                  </h3>
                  <p className="text-slate-300">{result.compatibility}</p>
                </div>

                <div className="bg-slate-800/30 rounded-xl p-6 border border-red-400/20">
                  <h3 className="text-xl font-semibold text-red-300 mb-3">
                    Sacred Vulnerability
                  </h3>
                  <p className="text-slate-300">{result.weakness}</p>
                </div>

                <div className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 rounded-xl p-6 border border-purple-300/30">
                  <h3 className="text-xl font-semibold text-purple-200 mb-3">
                    Your Power Affirmation
                  </h3>
                  <p className="text-lg text-white font-medium italic">
                    "{result.affirmation}"
                  </p>
                </div>

                <div className="text-center space-y-4">
                  <div className="bg-gradient-to-r from-amber-900/30 to-orange-900/30 rounded-xl p-6 border border-amber-300/30">
                    <h3 className="text-xl font-semibold text-amber-200 mb-3">
                      Your Next Step
                    </h3>
                    <p className="text-slate-300 mb-4">{result.action}</p>
                    <AffiliateButton
                      text="Unlock Your 2025 Cosmic Guide"
                      className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300"
                    />
                  </div>

                  <div className="flex flex-wrap justify-center gap-4">
                    <button
                      onClick={resetQuiz}
                      className="flex items-center px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-colors"
                    >
                      Take Quiz Again
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
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
        <div className="w-full bg-slate-800/50 rounded-full h-2 mb-8 backdrop-blur-sm">
          <motion.div
            className="bg-gradient-to-r from-purple-500 to-blue-500 h-2 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>

        <motion.div
          key={currentQuestion}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
          className="bg-slate-900/40 backdrop-blur-lg rounded-2xl p-8 border border-purple-500/20 shadow-2xl"
        >
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
              {currentQ.question}
            </h2>
            {currentQ.subtitle && (
              <p className="text-purple-300 text-sm">{currentQ.subtitle}</p>
            )}
          </div>

          <div className="space-y-4">
            {currentQ.type === 'text' && (
              <input
                type="text"
                className="w-full bg-slate-800/50 border border-purple-400/30 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 backdrop-blur-sm"
                placeholder="Enter your answer..."
                onChange={(e) => handleAnswer(e.target.value)}
                value={answers[currentQuestion] || ''}
              />
            )}

            {currentQ.type === 'date' && (
              <input
                type="date"
                className="w-full bg-slate-800/50 border border-purple-400/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 backdrop-blur-sm"
                onChange={(e) => handleAnswer(e.target.value)}
                value={answers[currentQuestion] || ''}
              />
            )}

            {currentQ.type === 'select' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {currentQ.options?.map((option, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleAnswer(option)}
                    className={`p-4 rounded-lg border transition-all duration-300 text-left ${
                      answers[currentQuestion] === option
                        ? 'bg-purple-600/30 border-purple-400 text-white'
                        : 'bg-slate-800/30 border-slate-600 text-slate-300 hover:border-purple-500/50 hover:bg-slate-700/30'
                    }`}
                  >
                    {option}
                  </motion.button>
                ))}
              </div>
            )}

            {currentQ.type === 'element' && (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {currentQ.options?.map((option, index) => {
                  const Icon = option.icon
                  return (
                    <motion.button
                      key={index}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleAnswer(option.name)}
                      className={`p-6 rounded-xl border transition-all duration-300 text-center ${
                        answers[currentQuestion] === option.name
                          ? 'bg-gradient-to-br ' +
                            option.color +
                            ' border-white/30 text-white shadow-lg'
                          : 'bg-slate-800/30 border-slate-600 text-slate-300 hover:border-purple-500/50'
                      }`}
                    >
                      <Icon className="w-8 h-8 mx-auto mb-2" />
                      <span className="text-sm font-medium">{option.name}</span>
                    </motion.button>
                  )
                })}
              </div>
            )}

            {currentQ.type === 'time' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {currentQ.options?.map((option, index) => {
                  const Icon = option.icon
                  return (
                    <motion.button
                      key={index}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleAnswer(option.name)}
                      className={`p-6 rounded-xl border transition-all duration-300 text-center ${
                        answers[currentQuestion] === option.name
                          ? 'bg-gradient-to-br ' +
                            option.color +
                            ' border-white/30 text-white shadow-lg'
                          : 'bg-slate-800/30 border-slate-600 text-slate-300 hover:border-purple-500/50'
                      }`}
                    >
                      <Icon className="w-10 h-10 mx-auto mb-3" />
                      <span className="font-medium">{option.name}</span>
                    </motion.button>
                  )
                })}
              </div>
            )}
          </div>

          <div className="flex justify-between mt-8">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={prevQuestion}
              disabled={currentQuestion === 0}
              className="flex items-center px-6 py-3 bg-slate-700/50 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-slate-600/50 transition-colors"
            >
              <ChevronLeft className="w-5 h-5 mr-1" />
              Previous
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={nextQuestion}
              disabled={!answers[currentQuestion]}
              className="flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:from-purple-500 hover:to-blue-500 transition-all"
            >
              {currentQuestion === questions.length - 1
                ? 'Reveal My Archetype'
                : 'Next'}
              <ChevronRight className="w-5 h-5 ml-1" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default CelestialArchetypeQuiz
