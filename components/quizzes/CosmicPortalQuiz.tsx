'use client'

import type React from 'react'
import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Star,
  Moon,
  Sun,
  MapPin,
  Clock,
  Sparkles,
  Heart,
  Briefcase,
  Zap,
  ArrowUp,
  Eye,
  Key,
  Flame,
  Circle,
} from 'lucide-react'
import AffiliateButton from '@/components/AffiliateButton'

interface CosmicPortalQuizProps {
  onReset?: () => void
}

interface FormData {
  name: string
  birthCity: string
  birthDate: string
  innerWish: string
  belief: string
  element: string
  symbol: string
  stuck: string
  fear: string
  magicSpell: string
  sacredTime: string
  soulSecret: string
  dreamColor: string
  transformation: string
  spiritualEnergy: string
}

interface Portal {
  id: string
  name: string
  description: string
  energy: string
  prediction: string
  ritual: string
  affirmation: string
  colors: string[]
  nextAction: string
}

const CosmicPortalQuiz: React.FC<CosmicPortalQuizProps> = ({ onReset }) => {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState<FormData>({
    name: '',
    birthCity: '',
    birthDate: '',
    innerWish: '',
    belief: '',
    element: '',
    symbol: '',
    stuck: '',
    fear: '',
    magicSpell: '',
    sacredTime: '',
    soulSecret: '',
    dreamColor: '',
    transformation: '',
    spiritualEnergy: '',
  })
  const [results, setResults] = useState<Portal | null>(null)

  const portals: Portal[] = [
    {
      id: 'healing',
      name: 'Portal of Inner Healing',
      description:
        'The universe has chosen you to walk through the Portal of Inner Healing. This sacred gateway opens when your soul is ready to release old wounds and embrace profound transformation.',
      energy: 'Compassionate, Nurturing, Transformative',
      prediction:
        'In 2025, you will experience deep emotional healing that transforms not just your inner world, but ripples out to heal relationships and situations around you. Expect breakthrough moments in March and September.',
      ritual:
        'Light a white candle each new moon and speak forgiveness to your past self. Keep rose quartz nearby during meditation.',
      affirmation:
        'I release what no longer serves me and embrace my healing journey with love.',
      colors: ['from-emerald-400', 'to-teal-600'],
      nextAction: 'Discover your 2025 healing timeline',
    },
    {
      id: 'love',
      name: 'Portal of Astral Love',
      description:
        'The cosmos has aligned to open the Portal of Astral Love for you. This ethereal gateway connects you to love that transcends the physical realm - both romantic and universal.',
      energy: 'Magnetic, Heart-Centered, Expansive',
      prediction:
        'Love will find you in unexpected ways in 2025. Whether deepening existing bonds or attracting new soul connections, your heart chakra will be powerfully activated. Peak energy: May and October.',
      ritual:
        'Wear pink or green near your heart. Write love letters to the universe every Friday evening.',
      affirmation: 'I am a magnet for divine love in all its beautiful forms.',
      colors: ['from-pink-400', 'to-rose-600'],
      nextAction: 'Unlock your love forecast now',
    },
    {
      id: 'phoenix',
      name: 'Portal of Phoenix Fire',
      description:
        'You are destined to pass through the Portal of Phoenix Fire - a gateway of complete transformation and rebirth. Like the mythical phoenix, you will rise from the ashes of your old self.',
      energy: 'Powerful, Transformative, Courageous',
      prediction:
        '2025 brings dramatic positive changes that may initially feel challenging but lead to your greatest evolution. Your personal power will reach new heights. Transformation peaks: July and November.',
      ritual:
        'Burn bay leaves with your written fears every full moon. Wear red or orange to channel fire energy.',
      affirmation:
        'I embrace change as my pathway to becoming my highest self.',
      colors: ['from-orange-400', 'to-red-600'],
      nextAction: 'Discover your transformation timeline',
    },
    {
      id: 'expression',
      name: 'Portal of Divine Expression',
      description:
        'The universe opens the Portal of Divine Expression for souls ready to share their unique gifts with the world. Your creative and communicative powers are awakening.',
      energy: 'Creative, Expressive, Inspiring',
      prediction:
        'Your voice, art, or creative expression will reach new audiences in 2025. Opportunities for sharing your gifts will multiply. Your throat chakra activation brings powerful communication abilities. Peak creativity: April and August.',
      ritual:
        'Sing, write, or create something every day, even for 5 minutes. Wear blue to enhance throat chakra energy.',
      affirmation: 'My unique voice and gifts are needed in this world.',
      colors: ['from-blue-400', 'to-indigo-600'],
      nextAction: 'Unlock your creative destiny path',
    },
    {
      id: 'power',
      name: 'Portal of Sacred Power',
      description:
        'You are called to enter the Portal of Sacred Power - a gateway that awakens your inner authority and ability to manifest your deepest desires into reality.',
      energy: 'Authoritative, Manifesting, Confident',
      prediction:
        'Your personal power and ability to influence positive change will dramatically increase in 2025. Leadership opportunities and manifestation abilities reach new levels. Power surges: June and December.',
      ritual:
        "Meditate with citrine or tiger's eye. Visualize golden light filling your solar plexus during sunrise.",
      affirmation: 'I claim my sacred power and use it for the highest good.',
      colors: ['from-yellow-400', 'to-amber-600'],
      nextAction: 'Discover your power activation guide',
    },
    {
      id: 'karma',
      name: 'Portal of Karmic Completion',
      description:
        'The Portal of Karmic Completion opens for souls ready to resolve past-life patterns and complete important spiritual lessons. You are graduating to a new level of consciousness.',
      energy: 'Wise, Completing, Liberating',
      prediction:
        "Long-standing patterns and karmic cycles will finally resolve in 2025. You'll experience a profound sense of spiritual completion and freedom. Major resolution periods: February and September.",
      ritual:
        'Practice forgiveness meditation weekly. Burn sage while releasing old grudges and patterns.',
      affirmation:
        'I complete my karmic lessons with grace and step into spiritual freedom.',
      colors: ['from-purple-400', 'to-violet-600'],
      nextAction: 'Explore your karmic completion timeline',
    },
    {
      id: 'creativity',
      name: 'Portal of Infinite Creativity',
      description:
        'The universe opens the Portal of Infinite Creativity for you - a gateway to unlimited creative potential and innovative solutions that will change your life path.',
      energy: 'Innovative, Unlimited, Flowing',
      prediction:
        'Creative breakthroughs and innovative ideas will flow abundantly in 2025. Your imagination becomes your greatest asset, leading to unexpected opportunities. Creative peaks: January and October.',
      ritual:
        'Keep a dream journal by your bed. Create art with your non-dominant hand to access right-brain creativity.',
      affirmation:
        'I am a channel for infinite creative energy and inspiration.',
      colors: ['from-cyan-400', 'to-blue-600'],
      nextAction: 'Unlock your creative genius potential',
    },
    {
      id: 'shadow',
      name: 'Portal of Light & Shadow',
      description:
        'You are chosen to walk through the Portal of Light & Shadow - a gateway for souls ready to integrate all aspects of themselves and achieve profound wholeness.',
      energy: 'Integrating, Balanced, Whole',
      prediction:
        'In 2025, you will achieve a powerful integration of your light and shadow aspects, leading to unprecedented self-acceptance and authentic power. Integration moments: March and November.',
      ritual:
        'Practice mirror work daily, speaking love to both your light and shadow aspects. Work with black tourmaline and clear quartz together.',
      affirmation:
        'I embrace all aspects of myself and find power in my wholeness.',
      colors: ['from-gray-400', 'to-slate-600'],
      nextAction: 'Discover your shadow integration guide',
    },
  ]

  const questions = [
    {
      id: 'name',
      type: 'text',
      question: 'What is your full name?',
      placeholder: 'Enter your mystical name...',
    },
    {
      id: 'birthCity',
      type: 'text',
      question: 'In which city were you born?',
      placeholder: 'Your earthly origin...',
    },
    {
      id: 'birthDate',
      type: 'date',
      question: 'What is your date of birth?',
      placeholder: 'Your cosmic entry point...',
    },
    {
      id: 'innerWish',
      type: 'textarea',
      question: 'What is your biggest inner wish for 2025?',
      placeholder: 'Speak from your soul...',
    },
    {
      id: 'belief',
      type: 'multiple',
      question: 'Do you believe in fate, free will, or both?',
      options: [
        'Fate guides everything',
        'Free will creates destiny',
        'Both dance together',
        'Neither - only chaos exists',
      ],
    },
    {
      id: 'element',
      type: 'multiple',
      question: 'What element do you dream in?',
      options: [
        'Fire - Passion & Transformation',
        'Air - Thoughts & Communication',
        'Water - Emotions & Intuition',
        'Earth - Stability & Growth',
        'Ether - Spirit & Mystery',
      ],
    },
    {
      id: 'symbol',
      type: 'symbol',
      question: 'Pick the symbol that calls to your soul',
      options: [
        { icon: Eye, name: 'Eye of Wisdom' },
        { icon: Key, name: 'Key of Secrets' },
        { icon: Circle, name: 'Circle of Truth' },
        { icon: Flame, name: 'Flame of Power' },
        { icon: Star, name: 'Star of Destiny' },
      ],
    },
    {
      id: 'stuck',
      type: 'multiple',
      question: 'What part of your life feels "stuck" right now?',
      options: [
        'Love & Relationships',
        'Career & Purpose',
        'Personal Growth',
        'Creative Expression',
        'Spiritual Connection',
      ],
    },
    {
      id: 'fear',
      type: 'multiple',
      question: "You're most afraid of:",
      options: [
        'Repeating past mistakes',
        'Missing true love',
        'Being forgotten by the world',
        'Failing to awaken your potential',
      ],
    },
    {
      id: 'magicSpell',
      type: 'multiple',
      question: 'If you were a magic spell, what would you do?',
      options: [
        'Heal broken hearts',
        'Reveal hidden truths',
        'Transform obstacles into opportunities',
        'Connect souls across time',
      ],
    },
    {
      id: 'sacredTime',
      type: 'multiple',
      question: 'What time of day feels most sacred to you?',
      options: [
        'Dawn - New beginnings',
        'Noon - Full power',
        'Sunset - Transformation',
        'Midnight - Deep mysteries',
      ],
    },
    {
      id: 'soulSecret',
      type: 'textarea',
      question: 'What do others not know about your soul?',
      placeholder: 'Your hidden depths...',
    },
    {
      id: 'dreamColor',
      type: 'multiple',
      question: 'Which color glows in your dreams?',
      options: [
        'Golden Light',
        'Deep Purple',
        'Silver Moonbeams',
        'Emerald Green',
        'Crimson Fire',
        'Ocean Blue',
      ],
    },
    {
      id: 'transformation',
      type: 'multiple',
      question: 'What kind of transformation do you secretly desire?',
      options: [
        'Emotional healing & peace',
        'Creative awakening & expression',
        'Spiritual enlightenment',
        'Love & deep connection',
        'Personal power & confidence',
      ],
    },
    {
      id: 'spiritualEnergy',
      type: 'text',
      question: 'Describe your spiritual energy in 3 words',
      placeholder: 'Three words that capture your essence...',
    },
  ]

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleAnswer = (value: string) => {
    const currentQuestion = questions[step - 1]
    setFormData({ ...formData, [currentQuestion.id]: value })
  }

  const nextStep = () => {
    if (step < questions.length) {
      setStep(step + 1)
    } else {
      calculatePortal()
    }
  }

  const calculatePortal = () => {
    // Simple portal assignment logic based on answers
    let portalIndex = 0
    if (formData.element?.includes('Fire')) portalIndex = 2
    else if (formData.element?.includes('Water')) portalIndex = 0
    else if (formData.element?.includes('Air')) portalIndex = 3
    else if (formData.element?.includes('Earth')) portalIndex = 4
    else if (formData.fear?.includes('love')) portalIndex = 1
    else if (formData.stuck?.includes('Creative')) portalIndex = 6
    else if (formData.magicSpell?.includes('Heal')) portalIndex = 0
    else if (formData.symbol?.includes('Mirror')) portalIndex = 7
    else portalIndex = Math.floor(Math.random() * portals.length)

    setResults(portals[portalIndex])
    setStep(questions.length + 1)
  }

  const resetQuiz = () => {
    setStep(1)
    setFormData({
      name: '',
      birthCity: '',
      birthDate: '',
      innerWish: '',
      belief: '',
      element: '',
      symbol: '',
      stuck: '',
      fear: '',
      magicSpell: '',
      sacredTime: '',
      soulSecret: '',
      dreamColor: '',
      transformation: '',
      spiritualEnergy: '',
    })
    setResults(null)
    if (onReset) onReset()
  }

  if (step > questions.length && results) {
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
              Your Cosmic Portal Awaits
            </h1>
            <p className="text-purple-300 text-lg">
              The universe has spoken. Your transformation begins now.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative bg-slate-800/80 backdrop-blur-sm rounded-3xl p-8 border border-purple-500/30 overflow-hidden mb-8"
          >
            {/* Portal Header */}
            <div className="text-center mb-8">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="inline-block mb-4"
              >
                <div
                  className={`w-20 h-20 bg-gradient-to-br ${results.colors[0]} ${results.colors[1]} rounded-full flex items-center justify-center mx-auto`}
                >
                  <Sparkles className="w-10 h-10 text-white" />
                </div>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-4xl md:text-5xl font-bold text-white mb-2"
              >
                {results.name}
              </motion.h2>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-purple-300 text-lg font-medium"
              >
                Energy: {results.energy}
              </motion.p>
            </div>

            {/* Portal Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mb-8"
            >
              <p className="text-gray-300 text-lg leading-relaxed text-center">
                {results.description}
              </p>
            </motion.div>

            {/* Portal Details Grid */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="bg-slate-700/50 rounded-xl p-6 border border-purple-500/20"
              >
                <h3 className="text-xl font-bold text-amber-400 mb-3">
                  Your 2025 Prediction
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {results.prediction}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.1 }}
                className="bg-slate-700/50 rounded-xl p-6 border border-purple-500/20"
              >
                <h3 className="text-xl font-bold text-amber-400 mb-3">
                  Activation Ritual
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {results.ritual}
                </p>
              </motion.div>
            </div>

            {/* Affirmation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.3 }}
              className={`bg-gradient-to-r ${results.colors[0]} ${results.colors[1]} rounded-xl p-6 text-center mb-8`}
            >
              <h3 className="text-xl font-bold text-white mb-3">
                Your Sacred Affirmation
              </h3>
              <p className="text-white text-lg font-medium italic">
                "{results.affirmation}"
              </p>
            </motion.div>

            {/* Next Action CTA */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.5 }}
              className="text-center"
            >
              <AffiliateButton
                text={results.nextAction}
                className="bg-gradient-to-r from-amber-500 to-purple-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-amber-400 hover:to-purple-400 transition-all duration-300 shadow-lg"
              />
            </motion.div>

            {/* Decorative elements */}
            <div className="absolute top-4 right-4">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
              >
                <Sparkles className="w-6 h-6 text-amber-400 opacity-60" />
              </motion.div>
            </div>

            <div className="absolute bottom-4 left-4">
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <div className="w-3 h-3 bg-purple-400 rounded-full opacity-60" />
              </motion.div>
            </div>
          </motion.div>

          {/* Reset Button */}
          <div className="text-center">
            <button
              onClick={resetQuiz}
              className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg transition-all duration-300 border border-white/20 hover:scale-105"
            >
              Discover Another Portal
            </button>
          </div>
        </div>
      </div>
    )
  }

  // Form Steps
  const currentQuestion = questions[step - 1]

  return (
    <div className="min-h-screen flex items-center justify-center p-4 py-20">
      <div className="max-w-4xl mx-auto w-full">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="relative">
              <Star className="w-12 h-12 text-yellow-400 animate-pulse" />
              <Sparkles className="w-6 h-6 text-pink-400 absolute -top-2 -right-2" />
            </div>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Which Cosmic Portal
          </h1>
          <h2 className="text-2xl md:text-4xl font-light text-purple-300 mb-6">
            Will Open for You in 2025?
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed">
            At key points in the cosmos, the universe opens portals... energy
            gateways that guide your transformation. Based on your birth and
            energy signature, one is waiting for you in 2025.
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-6 border border-white/20">
          <div className="mb-6">
            <div className="flex justify-between text-purple-300 text-sm mb-2">
              <span>
                Question {step} of {questions.length}
              </span>
              <span>
                {Math.round((step / questions.length) * 100)}% Complete
              </span>
            </div>
            <div className="w-full bg-slate-800 rounded-full h-2">
              <motion.div
                className="bg-gradient-to-r from-amber-500 to-purple-500 h-2 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${(step / questions.length) * 100}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
            {currentQuestion.question}
          </h2>

          {currentQuestion.type === 'text' && (
            <input
              type="text"
              name={currentQuestion.id}
              value={formData[currentQuestion.id as keyof FormData] || ''}
              onChange={handleInputChange}
              placeholder={currentQuestion.placeholder}
              className="w-full p-4 rounded-xl bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 mb-6"
            />
          )}

          {currentQuestion.type === 'date' && (
            <input
              type="date"
              name={currentQuestion.id}
              value={formData[currentQuestion.id as keyof FormData] || ''}
              onChange={handleInputChange}
              className="w-full p-4 rounded-xl bg-white/20 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-purple-400 mb-6"
            />
          )}

          {currentQuestion.type === 'textarea' && (
            <textarea
              name={currentQuestion.id}
              value={formData[currentQuestion.id as keyof FormData] || ''}
              onChange={handleInputChange}
              placeholder={currentQuestion.placeholder}
              rows={4}
              className="w-full p-4 rounded-xl bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 resize-none mb-6"
            />
          )}

          {currentQuestion.type === 'multiple' && (
            <div className="space-y-3 mb-6">
              {currentQuestion.options?.map((option, index) => (
                <motion.button
                  key={index}
                  onClick={() => handleAnswer(option)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full text-left p-4 bg-slate-700/30 hover:bg-purple-600/20 border border-purple-500/20 hover:border-amber-400/50 rounded-lg text-white transition-all duration-300"
                >
                  {option}
                </motion.button>
              ))}
            </div>
          )}

          {currentQuestion.type === 'symbol' && (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
              {currentQuestion.options?.map((option, index) => {
                const IconComponent = option.icon
                return (
                  <motion.button
                    key={index}
                    onClick={() => handleAnswer(option.name)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex flex-col items-center p-6 bg-slate-700/30 hover:bg-purple-600/20 border border-purple-500/20 hover:border-amber-400/50 rounded-lg transition-all duration-300"
                  >
                    <IconComponent className="w-12 h-12 text-amber-400 mb-2" />
                    <span className="text-white text-sm text-center">
                      {option.name}
                    </span>
                  </motion.button>
                )
              })}
            </div>
          )}

          <div className="flex justify-center">
            <motion.button
              onClick={nextStep}
              disabled={!formData[currentQuestion.id as keyof FormData]}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-amber-500 to-purple-500 text-white px-8 py-3 rounded-full font-semibold disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
            >
              {step === questions.length ? 'Reveal My Portal' : 'Continue'}
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CosmicPortalQuiz
