'use client'

import type React from 'react'
import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Baby,
  Heart,
  Stars,
  Sparkles,
  Calendar,
  Clock,
  MapPin,
  User,
  ArrowLeft,
  RefreshCw,
  Download,
  Share2,
  Mail,
} from 'lucide-react'
import AffiliateButton from '@/components/AffiliateButton'

interface ChildrenPredictionQuizProps {
  onReset: () => void
}

interface FormData {
  fullName: string
  birthDate: string
  birthTime: string
  birthPlace: string
  email: string
}

interface QuizResult {
  probability: string
  title: string
  description: string
  details: string
  timing: string
  affirmation: string
}

const ChildrenPredictionQuiz: React.FC<ChildrenPredictionQuizProps> = ({
  onReset,
}) => {
  const [step, setStep] = useState('intro')
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    birthDate: '',
    birthTime: '',
    birthPlace: '',
    email: '',
  })
  const [result, setResult] = useState<QuizResult | null>(null)
  const [emailSent, setEmailSent] = useState(false)
  const [showShare, setShowShare] = useState(false)

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.birthDate || !formData.birthPlace) {
      alert(
        'Please fill in your birth date and birthplace for accurate reading.'
      )
      return
    }

    setStep('analyzing')

    setTimeout(() => {
      const generatedResult = generateQuizResult(formData)
      setResult(generatedResult)
      setStep('result')
    }, 3000)
  }

  const generateQuizResult = (data: FormData): QuizResult => {
    const month = new Date(data.birthDate).getMonth() + 1
    const day = new Date(data.birthDate).getDate()

    const analyses = [
      {
        probability: 'high',
        title: 'Children Are Written in Your Stars',
        description:
          'Your birth chart reveals strong 5th house influences with Jupiter blessing your path to parenthood. The stars suggest 2-3 children will bring immense joy to your life.',
        details:
          'Your Leo Moon in the 5th house indicates a warm, nurturing spirit destined for parenthood. Venus in your chart enhances fertility and love for children.',
        timing:
          'Expect your first child between ages 25-30, with additional children following naturally.',
        affirmation:
          'You are meant to be a loving, creative parent who will raise confident, joyful children.',
      },
      {
        probability: 'moderate',
        title: 'Parenthood Awaits at the Right Time',
        description:
          'Your chart shows Saturn influences that suggest patience in your parenting journey. Children will come when the timing is divinely perfect.',
        details:
          "With Saturn aspecting your 5th house, you approach parenthood thoughtfully. This careful energy ensures you'll be an excellent, responsible parent.",
        timing:
          'Your parenting journey likely begins after age 30, bringing 1-2 children into your loving care.',
        affirmation:
          'Your patient, wise approach to parenthood will create a stable, nurturing home for your future children.',
      },
      {
        probability: 'alternative',
        title: 'Your Path May Lead Beyond Traditional Parenthood',
        description:
          'Your unique chart suggests you may find fulfillment through mentoring, teaching, or creative pursuits rather than biological children.',
        details:
          'Uranus in your 5th house indicates an unconventional path. You may become a spiritual parent to many through your gifts and wisdom.',
        timing:
          'Your nurturing energy will manifest through meaningful connections with young people throughout your life.',
        affirmation:
          'Your purpose involves nurturing and guiding others in ways that transcend traditional parenthood.',
      },
    ]

    let index = (month + day) % 3
    if (data.birthTime && data.birthTime.includes('morning')) index = 0
    if (data.birthTime && data.birthTime.includes('evening')) index = 1

    return analyses[index]
  }

  const getProbabilityColor = (probability: string) => {
    switch (probability) {
      case 'high':
        return 'from-green-400 to-emerald-600'
      case 'moderate':
        return 'from-yellow-400 to-orange-500'
      case 'alternative':
        return 'from-purple-400 to-indigo-600'
      default:
        return 'from-pink-400 to-purple-600'
    }
  }

  const getProbabilityIcon = (probability: string) => {
    switch (probability) {
      case 'high':
        return <Baby className="w-8 h-8" />
      case 'moderate':
        return <Heart className="w-8 h-8" />
      case 'alternative':
        return <Stars className="w-8 h-8" />
      default:
        return <Baby className="w-8 h-8" />
    }
  }

  const handleEmailSend = () => {
    setEmailSent(true)
    setTimeout(() => setEmailSent(false), 3000)
  }

  const handleShare = (platform: string) => {
    const shareText = `Just discovered what my birth chart says about having children! ${result?.title} ✨🔮`
    const shareUrl = window.location.href

    const shareUrls: Record<string, string> = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}&quote=${encodeURIComponent(shareText)}`,
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`,
      pinterest: `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(shareUrl)}&description=${encodeURIComponent(shareText)}`,
    }

    window.open(shareUrls[platform], '_blank', 'width=600,height=400')
  }

  const resetQuiz = () => {
    setStep('intro')
    setFormData({
      fullName: '',
      birthDate: '',
      birthTime: '',
      birthPlace: '',
      email: '',
    })
    setResult(null)
    setEmailSent(false)
    setShowShare(false)
    onReset()
  }

  if (step === 'analyzing') {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            className="mb-8"
            animate={{ rotate: 360 }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: 'linear',
            }}
          >
            <Stars className="w-16 h-16 text-yellow-300 mx-auto" />
          </motion.div>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Analyzing Your Birth Chart
          </h2>
          <p className="text-purple-200 text-lg mb-8">
            The stars are revealing your destiny... Please wait while we
            calculate your personalized reading.
          </p>
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6">
            <div className="flex justify-center space-x-2 mb-4">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="w-3 h-3 bg-pink-400 rounded-full"
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{
                    duration: 1,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: i * 0.2,
                  }}
                />
              ))}
            </div>
            <p className="text-white">Examining your 5th house influences...</p>
          </div>
        </div>
      </div>
    )
  }

  if (step === 'result' && result) {
    return (
      <div className="min-h-screen py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <div
              className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${getProbabilityColor(result.probability)} mb-4`}
            >
              {getProbabilityIcon(result.probability)}
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
              {formData.fullName ? `${formData.fullName}, ` : ''}Your Reading is
              Complete
            </h2>
            <p className="text-purple-200 text-lg">
              Born on{' '}
              {new Date(formData.birthDate).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 mb-8">
            <div className="text-center mb-6">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
                {result.title}
              </h3>
              <p className="text-lg text-purple-100 leading-relaxed">
                {result.description}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white/5 rounded-xl p-6">
                <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                  <Stars className="w-5 h-5 text-yellow-300 mr-2" />
                  Your Chart Analysis
                </h4>
                <p className="text-purple-100 leading-relaxed">
                  {result.details}
                </p>
              </div>

              <div className="bg-white/5 rounded-xl p-6">
                <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                  <Heart className="w-5 h-5 text-pink-300 mr-2" />
                  Timing & Path
                </h4>
                <p className="text-purple-100 leading-relaxed">
                  {result.timing}
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-pink-500/20 to-purple-600/20 rounded-xl p-6 border border-pink-300/30">
              <h4 className="text-lg font-semibold text-white mb-3 text-center">
                Your Personal Affirmation
              </h4>
              <p className="text-lg text-center text-white font-medium italic">
                "{result.affirmation}"
              </p>
            </div>
          </div>

          {/* Affiliate CTA */}
          <div className="bg-gradient-to-r from-yellow-400/20 to-orange-500/20 backdrop-blur-md rounded-2xl p-6 mb-8 border border-yellow-300/30">
            <div className="text-center">
              <Baby className="w-12 h-12 text-yellow-300 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">
                Want a Full Reading on Family, Fertility & Your Parenting
                Future?
              </h3>
              <p className="text-lg text-yellow-100 mb-6">
                Get a personalized forecast from a certified astrologer or
                psychic now. Discover deeper insights about your family destiny,
                fertility timing, and parenting journey.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <AffiliateButton
                  text="Get Your Full Birth Chart Reading"
                  className="bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 text-white font-bold py-3 px-6 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                />
                <AffiliateButton
                  text="Speak with a Fertility Psychic"
                  className="bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white font-semibold py-3 px-6 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                />
              </div>

              <p className="text-yellow-200 text-sm mt-4">
                ⭐ Trusted by millions • 100% satisfaction guarantee • First 3
                minutes free
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 mb-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {formData.email && (
                <button
                  onClick={handleEmailSend}
                  className="flex items-center justify-center px-4 py-3 bg-blue-500/20 hover:bg-blue-500/30 text-blue-200 rounded-lg transition-colors duration-300"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  {emailSent ? 'Sent!' : 'Email Results'}
                </button>
              )}

              <button
                onClick={() => setShowShare(!showShare)}
                className="flex items-center justify-center px-4 py-3 bg-green-500/20 hover:bg-green-500/30 text-green-200 rounded-lg transition-colors duration-300"
              >
                <Share2 className="w-5 h-5 mr-2" />
                Share Results
              </button>

              <button className="flex items-center justify-center px-4 py-3 bg-purple-500/20 hover:bg-purple-500/30 text-purple-200 rounded-lg transition-colors duration-300">
                <Download className="w-5 h-5 mr-2" />
                Download PDF
              </button>

              <button
                onClick={resetQuiz}
                className="flex items-center justify-center px-4 py-3 bg-pink-500/20 hover:bg-pink-500/30 text-pink-200 rounded-lg transition-colors duration-300"
              >
                <RefreshCw className="w-5 h-5 mr-2" />
                New Reading
              </button>
            </div>

            {showShare && (
              <motion.div
                className="mt-4 pt-4 border-t border-white/20"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
              >
                <div className="flex justify-center gap-4">
                  <button
                    onClick={() => handleShare('facebook')}
                    className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                  >
                    Facebook
                  </button>
                  <button
                    onClick={() => handleShare('twitter')}
                    className="px-4 py-2 bg-sky-500 hover:bg-sky-600 text-white rounded-lg transition-colors"
                  >
                    Twitter
                  </button>
                  <button
                    onClick={() => handleShare('pinterest')}
                    className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors"
                  >
                    Pinterest
                  </button>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    )
  }

  if (step === 'form') {
    const timeOptions = [
      'Early morning (5-8 AM)',
      'Morning (8-11 AM)',
      'Late morning (11 AM-12 PM)',
      'Afternoon (12-3 PM)',
      'Late afternoon (3-6 PM)',
      'Evening (6-9 PM)',
      'Night (9 PM-12 AM)',
      'Late night (12-3 AM)',
      'Very early morning (3-5 AM)',
      'Unknown time',
    ]

    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="max-w-2xl mx-auto w-full">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Your Birth Information
            </h2>
            <p className="text-purple-200 text-lg">
              The more accurate your birth details, the more precise your
              reading will be
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6">
            <form onSubmit={handleFormSubmit} className="space-y-6">
              <div>
                <label className="flex items-center text-white font-medium mb-2">
                  <User className="w-5 h-5 mr-2 text-purple-300" />
                  Full Name (Optional)
                </label>
                <input
                  type="text"
                  value={formData.fullName}
                  onChange={(e) =>
                    handleInputChange('fullName', e.target.value)
                  }
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-purple-200 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label className="flex items-center text-white font-medium mb-2">
                  <Calendar className="w-5 h-5 mr-2 text-purple-300" />
                  Date of Birth *{' '}
                  <span className="text-red-400">(Required)</span>
                </label>
                <input
                  type="date"
                  value={formData.birthDate}
                  onChange={(e) =>
                    handleInputChange('birthDate', e.target.value)
                  }
                  required
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent"
                  max={new Date().toISOString().split('T')[0]}
                />
              </div>

              <div>
                <label className="flex items-center text-white font-medium mb-2">
                  <Clock className="w-5 h-5 mr-2 text-purple-300" />
                  Time of Birth (Recommended)
                </label>
                <select
                  value={formData.birthTime}
                  onChange={(e) =>
                    handleInputChange('birthTime', e.target.value)
                  }
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent"
                >
                  <option value="" className="bg-purple-900">
                    Select approximate time
                  </option>
                  {timeOptions.map((time, index) => (
                    <option key={index} value={time} className="bg-purple-900">
                      {time}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="flex items-center text-white font-medium mb-2">
                  <MapPin className="w-5 h-5 mr-2 text-purple-300" />
                  Place of Birth *{' '}
                  <span className="text-red-400">(Required)</span>
                </label>
                <input
                  type="text"
                  value={formData.birthPlace}
                  onChange={(e) =>
                    handleInputChange('birthPlace', e.target.value)
                  }
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-purple-200 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent"
                  placeholder="Enter your birth city (e.g., New York, NY, USA)"
                  required
                />
              </div>

              <div>
                <label className="flex items-center text-white font-medium mb-2">
                  <User className="w-5 h-5 mr-2 text-purple-300" />
                  Email (Optional - for your reading copy)
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-purple-200 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent"
                  placeholder="your@email.com"
                />
              </div>

              <div className="flex gap-4 pt-4">
                <button
                  type="button"
                  onClick={() => setStep('intro')}
                  className="flex items-center px-6 py-3 bg-white/20 hover:bg-white/30 text-white rounded-lg transition-colors duration-300"
                >
                  <ArrowLeft className="w-5 h-5 mr-2" />
                  Back
                </button>

                <button
                  type="submit"
                  className="flex-1 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Reveal My Destiny
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }

  // Intro Step
  return (
    <div className="min-h-screen flex items-center justify-center p-4 py-20 ">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <Baby className="w-16 h-16 text-pink-300 mx-auto mb-4" />
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Will I Have Children?
          </h1>
          <p className="text-xl text-purple-200 mb-2">
            Discover What Your Birth Chart Says
          </p>
          <div className="flex justify-center items-center gap-2 text-pink-300">
            <Stars className="w-5 h-5" />
            <Sparkles className="w-5 h-5" />
            <Heart className="w-5 h-5" />
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">
            Your Cosmic Journey to Parenthood
          </h2>
          <p className="text-purple-100 text-lg leading-relaxed mb-6">
            Through the ancient wisdom of astrology, we'll analyze your birth
            chart to reveal what the stars say about your path to parenthood.
            Your 5th house, Moon placement, and planetary influences hold the
            keys to understanding your destiny with children.
          </p>
          <div className="grid md:grid-cols-3 gap-4 text-center">
            <div className="bg-white/5 rounded-lg p-4">
              <Stars className="w-8 h-8 text-yellow-300 mx-auto mb-2" />
              <h3 className="text-white font-medium">Birth Chart Analysis</h3>
              <p className="text-purple-200 text-sm">
                Deep dive into your 5th house and planetary influences
              </p>
            </div>
            <div className="bg-white/5 rounded-lg p-4">
              <Heart className="w-8 h-8 text-pink-300 mx-auto mb-2" />
              <h3 className="text-white font-medium">Fertility Insights</h3>
              <p className="text-purple-200 text-sm">
                Understand your emotional readiness and timing
              </p>
            </div>
            <div className="bg-white/5 rounded-lg p-4">
              <Sparkles className="w-8 h-8 text-purple-300 mx-auto mb-2" />
              <h3 className="text-white font-medium">Personalized Forecast</h3>
              <p className="text-purple-200 text-sm">
                Receive your unique parenting destiny reading
              </p>
            </div>
          </div>
        </div>

        <button
          onClick={() => setStep('form')}
          className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-full text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
        >
          Start Your Reading
        </button>
      </div>
    </div>
  )
}

export default ChildrenPredictionQuiz
