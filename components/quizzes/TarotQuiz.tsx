'use client'

import type React from 'react' // Import useEffect
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Sparkles, Moon, Star, Heart, DollarSign, Compass } from 'lucide-react'
import { tarotCards, type TarotCard } from '@/utils/quizData'
import AffiliateButton from '@/components/AffiliateButton'

interface TarotQuizProps {
  onReset: () => void
}

const TarotQuiz: React.FC<TarotQuizProps> = ({ onReset }) => {
  const [stage, setStage] = useState('intro') // intro, drawing, results
  const [drawnCards, setDrawnCards] = useState<TarotCard[]>([])
  const [focus, setFocus] = useState('')
  const [currentCard, setCurrentCard] = useState(0)

  const drawCards = () => {
    const shuffled = [...tarotCards].sort(() => Math.random() - 0.5)
    const selected = shuffled.slice(0, 3)
    setDrawnCards(selected)
    setStage('drawing')
    setCurrentCard(0)
  }

  const resetQuiz = () => {
    setStage('intro')
    setDrawnCards([])
    setFocus('')
    setCurrentCard(0)
    onReset()
  }

  // Card drawing animation effect
  useEffect(() => {
    if (stage === 'drawing' && currentCard < 3) {
      const timer = setTimeout(
        () => {
          setCurrentCard((prev) => prev + 1)
        },
        currentCard === 0 ? 1000 : 2000
      )
      return () => clearTimeout(timer)
    } else if (stage === 'drawing' && currentCard === 3) {
      const timer = setTimeout(() => {
        setStage('results')
      }, 2000)
      return () => clearTimeout(timer)
    }
  }, [stage, currentCard])

  const generateReading = () => {
    if (drawnCards.length !== 3) return null
    const [past, present, future] = drawnCards

    const loveMessages = [
      'A powerful romantic transformation awaits you',
      'Your heart chakra is opening to new possibilities',
      "Divine love is aligning with your soul's purpose",
      'A significant relationship shift is approaching',
    ]
    const moneyMessages = [
      'Financial abundance flows toward your path',
      'Your material world is shifting in your favor',
      'Prosperity consciousness is awakening within you',
      'A lucrative opportunity is manifesting soon',
    ]
    const lifeMessages = [
      'Your spiritual journey is entering a new phase',
      'The universe is aligning for your highest good',
      'A major life transformation is unfolding',
      'Your destiny path is becoming clearer',
    ]

    const getRandomMessage = (messages: string[]) =>
      messages[Math.floor(Math.random() * messages.length)]

    return {
      interpretation: `${past.name} guides your past, revealing ${past.meaning}. ${present.name} illuminates your present, showing ${present.meaning}. ${future.name} opens your future path, promising ${future.meaning}.`,
      love: getRandomMessage(loveMessages),
      money: getRandomMessage(moneyMessages),
      life: getRandomMessage(lifeMessages),
    }
  }

  if (stage === 'results') {
    const reading = generateReading()
    return (
      <div
        className="min-h-dvh flex flex-col items-center justify-center py-24  px-4 sm:px-6 lg:px-8"
        style={{ paddingTop: '30px' }}
      >
        <div className="max-w-4xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8"
          >
            <h1
              className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-4  "
              style={{ padding: '30px' }}
            >
              🔮 Your Tarot Reveals
            </h1>
            <p className="text-purple-200 text-lg">
              The cards have spoken about your destiny...
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {drawnCards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.2 }}
                className="bg-black/30 backdrop-blur-sm rounded-xl p-6 border border-purple-500/30 text-center"
              >
                <div className="text-3xl mb-2">{card.symbol}</div>
                <h3 className="text-purple-200 font-bold text-lg mb-2">
                  {card.name}
                </h3>
                <p className="text-purple-300 text-sm">
                  {index === 0 && 'Past Influence'}
                  {index === 1 && 'Present Situation'}
                  {index === 2 && 'Future Path'}
                </p>
              </motion.div>
            ))}
          </div>

          {reading && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/30 mb-8"
            >
              <div className="text-center mb-6">
                <Sparkles className="text-yellow-400 mx-auto mb-4" size={32} />
                <h2 className="text-2xl font-bold text-purple-200 mb-4">
                  Your Cosmic Reading
                </h2>
              </div>
              <p className="text-purple-100 text-lg leading-relaxed mb-8 text-center italic">
                {reading.interpretation}
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-4 bg-pink-900/20 rounded-lg border border-pink-500/30">
                  <Heart className="text-pink-400 mx-auto mb-3" size={24} />
                  <h3 className="text-pink-300 font-bold mb-2">
                    ✨ Love & Relationships
                  </h3>
                  <p className="text-pink-200 text-sm">{reading.love}</p>
                </div>
                <div className="text-center p-4 bg-green-900/20 rounded-lg border border-green-500/30">
                  <DollarSign
                    className="text-green-400 mx-auto mb-3"
                    size={24}
                  />
                  <h3 className="text-green-300 font-bold mb-2">
                    💰 Money & Career
                  </h3>
                  <p className="text-green-200 text-sm">{reading.money}</p>
                </div>
                <div className="text-center p-4 bg-purple-900/20 rounded-lg border border-purple-500/30">
                  <Compass className="text-purple-400 mx-auto mb-3" size={24} />
                  <h3 className="text-purple-300 font-bold mb-2">
                    🌙 Spiritual Destiny
                  </h3>
                  <p className="text-purple-200 text-sm">{reading.life}</p>
                </div>
              </div>
            </motion.div>
          )}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-center mb-8 shadow-2xl"
          >
            <h2 className="text-2xl font-bold text-white mb-4">
              🃏 Want to Go Deeper Into Your Tarot Future?
            </h2>
            <p className="text-purple-100 mb-6 text-lg">
              This reading suggests an exciting turning point is near...
              <br />
              Connect now with a professional Tarot reader for a live,
              personalized session.
            </p>
            <AffiliateButton
              href="https://2d36dqcer10v4mb0sgog2-5bm0.hop.clickbank.net"
              text="✨ Get Your Full Tarot Session"
              className="inline-flex items-center bg-white text-purple-600 px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all"
            />
          </motion.div>

          <div className="text-center space-y-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              onClick={resetQuiz}
              className="bg-purple-800/50 text-purple-200 px-8 py-3 rounded-full border border-purple-500 hover:bg-purple-700/50 transition-all"
            >
              🔄 Draw New Cards
            </motion.button>
          </div>
        </div>
      </div>
    )
  }

  if (stage === 'drawing') {
    const cardPositions = ['Past Influence', 'Present Situation', 'Future Path']
    return (
      <div className="min-h-dvh flex flex-col items-center justify-center py-24 px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-4xl font-bold text-purple-200 mb-12 text-center"
        >
          🌟 The Cards Reveal Your Path 🌟
        </motion.h2>
        <div className="flex flex-col md:flex-row gap-8 items-center justify-center max-w-6xl w-full">
          {[0, 1, 2].map((index) => (
            <div key={index} className="text-center">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: currentCard > index ? 1 : 0.5 }}
                className="text-purple-300 font-semibold mb-4 text-lg"
              >
                {cardPositions[index]}
              </motion.p>
              <div className="relative">
                {currentCard > index ? (
                  <motion.div
                    initial={{ rotateY: 180, scale: 0.8 }}
                    animate={{ rotateY: 0, scale: 1 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    className="w-32 h-48 md:w-40 md:h-60 bg-gradient-to-b from-amber-50 to-amber-100 rounded-lg border-2 border-amber-400 shadow-xl overflow-hidden mx-auto" // Added mx-auto
                  >
                    <div className="h-full flex flex-col p-3">
                      <div className="text-center mb-2">
                        <div className="text-2xl md:text-3xl mb-1">
                          {drawnCards[index]?.symbol}
                        </div>
                        <h3 className="text-xs md:text-sm font-bold text-amber-900 leading-tight">
                          {drawnCards[index]?.name}
                        </h3>
                      </div>
                      <div className="flex-1 flex items-center justify-center">
                        <div className="w-16 h-20 md:w-20 md:h-24 bg-gradient-to-b from-purple-200 to-purple-300 rounded border border-purple-400 flex items-center justify-center">
                          <div className="text-purple-800 text-lg md:text-xl">
                            {drawnCards[index]?.element || '✨'}
                          </div>
                        </div>
                      </div>
                      <div className="text-center mt-2">
                        <p className="text-xs text-amber-800 font-medium leading-tight">
                          {drawnCards[index]?.shortMeaning}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    animate={{
                      scale: currentCard === index ? [1, 1.05, 1] : 1,
                      boxShadow:
                        currentCard === index
                          ? [
                              '0 0 20px rgba(168, 85, 247, 0.5)',
                              '0 0 40px rgba(168, 85, 247, 0.8)',
                              '0 0 20px rgba(168, 85, 247, 0.5)',
                            ]
                          : '0 0 10px rgba(168, 85, 247, 0.3)',
                    }}
                    transition={{
                      duration: 1,
                      repeat:
                        currentCard === index ? Number.POSITIVE_INFINITY : 0,
                    }}
                    className="w-32 h-48 md:w-40 md:h-60 bg-gradient-to-b from-purple-900 to-indigo-900 rounded-lg border-2 border-purple-500 flex items-center justify-center shadow-lg mx-auto" // Added mx-auto
                  >
                    <div className="text-center">
                      <div className="text-4xl mb-2">🌟</div>
                      <div className="w-16 h-20 bg-purple-800/50 rounded border border-purple-400 mx-auto flex items-center justify-center">
                        <div className="text-purple-300 text-xs font-bold">
                          TAROT
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
            </div>
          ))}
        </div>
        {currentCard < 3 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-12 text-center"
          >
            <div className="flex justify-center items-center space-x-2 mb-4">
              {[0, 1, 2].map((dot) => (
                <div
                  key={dot}
                  className={`w-3 h-3 rounded-full ${dot <= currentCard ? 'bg-purple-400' : 'bg-purple-800'}`}
                />
              ))}
            </div>
            <p className="text-purple-300 text-lg animate-pulse">
              {currentCard === 0 && 'Connecting to the cosmic energy...'}
              {currentCard === 1 && 'The cards are aligning...'}
              {currentCard === 2 && 'Your destiny unfolds...'}
            </p>
          </motion.div>
        )}
      </div>
    )
  }

  return (
    <div className="min-h-dvh flex flex-col items-center justify-center py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto w-full text-center">
        {' '}
        {/* Added w-full */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-8"
        >
          <div className="relative">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 20,
                repeat: Number.POSITIVE_INFINITY,
                ease: 'linear',
              }}
              className="absolute -top-4 -right-4 text-yellow-400"
            >
              <Sparkles size={32} />
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400 mb-4">
              🔮 Tarot Reveals
            </h1>
            <p className="text-2xl text-purple-200 mb-2">
              What Does the Future Hold?
            </p>
            <p className="text-lg text-purple-300 italic">
              Let the cards guide you to your destiny
            </p>
          </div>

          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5 }}
            className="bg-black/30 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/30"
          >
            <div className="flex justify-center mb-6">
              <Moon className="text-yellow-400 mr-2" size={24} />
              <Star className="text-purple-400 mx-2" size={24} />
              <Moon className="text-yellow-400 ml-2" size={24} />
            </div>
            <p className="text-purple-100 text-lg mb-8 leading-relaxed">
              Focus your energy and think of a question about your future.
              <br />
              The ancient cards are ready to reveal your path...
            </p>
            <div className="space-y-4 mb-8">
              <p className="text-purple-200 font-semibold">
                Choose your focus (optional):
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                {['Love & Relationships', 'Money & Career', 'Life Path'].map(
                  (option) => (
                    <button
                      key={option}
                      onClick={() => setFocus(option)}
                      className={`px-6 py-3 rounded-full border-2 transition-all ${
                        focus === option
                          ? 'border-purple-400 bg-purple-400/20 text-purple-100'
                          : 'border-purple-500/50 text-purple-300 hover:border-purple-400'
                      }`}
                    >
                      {option}
                    </button>
                  )
                )}
              </div>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={drawCards}
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-12 py-4 rounded-full text-xl font-bold shadow-lg hover:shadow-purple-500/25 transition-all"
            >
              ✨ Start My Reading ✨
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default TarotQuiz
