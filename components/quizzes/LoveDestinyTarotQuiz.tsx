'use client'

import type React from 'react'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ChevronLeft,
  ChevronRight,
  Heart,
  Star,
  Sparkles,
  Share2,
  RefreshCw,
} from 'lucide-react'
import AffiliateButton from '@/components/AffiliateButton'

interface LoveDestinyTarotQuizProps {
  onReset?: () => void
}

interface DestinyType {
  id: string
  title: string
  card: string
  emoji: string
  interpretation: string
  forecast: string
  spiritualMessage: string
  affirmation: string
}

const LoveDestinyTarotQuiz: React.FC<LoveDestinyTarotQuizProps> = ({
  onReset,
}) => {
  const [currentStep, setCurrentStep] = useState(0)
  const [answers, setAnswers] = useState<{ [key: number]: string }>({})
  const [selectedAnswer, setSelectedAnswer] = useState('')
  const [textInput, setTextInput] = useState('')
  const [result, setResult] = useState<DestinyType | null>(null)
  const [userName, setUserName] = useState('')

  const destinyTypes: { [key: string]: DestinyType } = {
    soulmate_seeker: {
      id: 'soulmate_seeker',
      title: 'The Soulmate Seeker',
      card: 'The Lovers',
      emoji: '💫',
      interpretation:
        'The Lovers card reveals that you are destined to find your perfect spiritual match in 2025. Your soul has been preparing for this divine union through all your past experiences. The universe is aligning to bring you together with someone who will understand you on the deepest level.',
      forecast:
        'Between March and July 2025, expect a profound connection that feels like coming home. This person will appear when you least expect it but most need it. Your relationship will be built on mutual respect, shared values, and an almost telepathic understanding.',
      spiritualMessage:
        'Trust the timing of your heart. Your soulmate is also searching for you, and the magnetic pull between your souls is growing stronger each day. Prepare yourself by becoming the person you want to attract.',
      affirmation:
        'I am worthy of deep, authentic love, and my soulmate is finding their way to me now.',
    },
    passionate_flame: {
      id: 'passionate_flame',
      title: 'The Passionate Flame',
      card: 'The Sun',
      emoji: '🔥',
      interpretation:
        'The Sun card illuminates a year of intense passion and romantic fire. Your love life in 2025 will be anything but ordinary - expect dramatic highs, deep connections, and transformative experiences that awaken parts of yourself you never knew existed.',
      forecast:
        "Summer 2025 brings a love that burns bright and changes everything. This connection will be passionate, possibly challenging, but ultimately transformative. You'll experience love as a force of nature that cannot be contained or controlled.",
      spiritualMessage:
        "Embrace the intensity that's coming. Not all love is meant to be comfortable - some love is meant to awaken your soul and show you what you're truly capable of feeling. Trust in the fire.",
      affirmation:
        'I welcome passionate love that ignites my soul and transforms my life in beautiful ways.',
    },
    healing_heart: {
      id: 'healing_heart',
      title: 'The Healing Heart',
      card: 'The Star',
      emoji: '💚',
      interpretation:
        "The Star card brings hope and healing to your romantic journey. 2025 is your year of emotional restoration and learning to love again after past wounds. You're being guided toward someone who will help you heal while you do the same for them.",
      forecast:
        "The first half of 2025 focuses on self-healing and releasing old patterns. By autumn, you'll meet someone who sees your scars as proof of your strength. This love will be gentle, nurturing, and deeply healing for both of you.",
      spiritualMessage:
        'Your past pain was not punishment but preparation. Every heartbreak has made you more compassionate, more understanding, and more capable of recognizing true love when it arrives. Your healing heart is your greatest strength.',
      affirmation:
        'I am healing, growing, and becoming ready for the love that will honor my journey.',
    },
    mystical_connection: {
      id: 'mystical_connection',
      title: 'The Mystical Connection',
      card: 'The High Priestess',
      emoji: '🔮',
      interpretation:
        "The High Priestess reveals that your love destiny involves a deeply spiritual and intuitive connection. In 2025, you'll experience love that transcends the physical realm - a connection that feels ancient, karmic, and divinely orchestrated.",
      forecast:
        'Your mystical love will likely appear through synchronicities and signs. Pay attention to dreams, repeated numbers, and intuitive nudges in late 2025. This person may share your spiritual interests or awaken your psychic abilities.',
      spiritualMessage:
        "Trust your intuition above all else in matters of the heart. Your psychic abilities are heightened now, and you'll know your person by the energy they carry. Look beyond the surface to the soul.",
      affirmation:
        'I trust my intuition to guide me to the love that serves my highest good and spiritual evolution.',
    },
    adventurous_spirit: {
      id: 'adventurous_spirit',
      title: 'The Adventurous Spirit',
      card: 'The Fool',
      emoji: '🌟',
      interpretation:
        'The Fool card indicates that love will come to you through new experiences and adventures in 2025. Your romantic destiny involves stepping outside your comfort zone and saying yes to opportunities that excite and slightly scare you.',
      forecast:
        'Travel, new hobbies, or career changes in 2025 will lead you to love. This person will share your sense of adventure and will encourage you to explore new aspects of yourself. Expect spontaneous romance and exciting journeys together.',
      spiritualMessage:
        "Love requires courage and a willingness to leap into the unknown. Your adventurous spirit is your greatest asset in love. Don't play it safe - the universe rewards those who dare to dream big.",
      affirmation:
        "I embrace adventure and trust that love will find me when I'm living my most authentic, adventurous life.",
    },
    wise_guardian: {
      id: 'wise_guardian',
      title: 'The Wise Guardian',
      card: 'The Hermit',
      emoji: '🦉',
      interpretation:
        "The Hermit suggests that 2025 is a year of inner wisdom and attracting love through your authentic self. You're moving beyond superficial connections toward relationships that honor your depth, experience, and hard-won wisdom.",
      forecast:
        'Your love will come through mentorship, teaching, or sharing your knowledge. This person will appreciate your wisdom and life experience. Expect a mature, stable relationship built on mutual respect and shared life philosophy.',
      spiritualMessage:
        "Your journey has given you precious wisdom that the right person will treasure. Don't dim your light or hide your knowledge to fit in. The right love will celebrate your depth and complexity.",
      affirmation:
        "I attract love that honors my wisdom, experience, and the depth of my soul's journey.",
    },
    transformative_phoenix: {
      id: 'transformative_phoenix',
      title: 'The Transformative Phoenix',
      card: 'Death (Transformation)',
      emoji: '🦋',
      interpretation:
        "The Death card represents profound transformation in your love life. 2025 brings the end of old patterns and the birth of a completely new way of experiencing love. You're shedding your old romantic self to become who you're meant to be.",
      forecast:
        "Major life changes in early 2025 will clear the path for extraordinary love. This might involve ending current situations, moving locations, or completely changing your approach to relationships. By year's end, you'll be unrecognizable to your former self.",
      spiritualMessage:
        "Embrace the death of who you used to be in love. Every ending is a beginning, and you're being prepared for a love that matches your evolved self. Trust the transformation process.",
      affirmation:
        'I release old patterns and embrace the transformation that prepares me for extraordinary love.',
    },
    abundant_empress: {
      id: 'abundant_empress',
      title: 'The Abundant Empress',
      card: 'The Empress',
      emoji: '👑',
      interpretation:
        "The Empress card reveals that 2025 brings abundant love and fertility in all forms. You're entering a phase of receiving love, creating beauty, and possibly expanding your family. Your feminine power (regardless of gender) is at its peak.",
      forecast:
        "Expect multiple romantic opportunities and the ability to choose from abundance rather than scarcity. This year may bring engagement, marriage, pregnancy, or the creation of something beautiful with your partner. You're in your power.",
      spiritualMessage:
        'You are worthy of abundant love and all the beauty life has to offer. Step into your power as a creator and receiver of love. The universe wants to shower you with blessings.',
      affirmation:
        'I am worthy of abundant love and I receive all the blessings the universe has for me.',
    },
  }

  const questions = [
    {
      question: "What's your astrological sign?",
      subtitle: 'The stars influence your romantic destiny',
      type: 'choice',
      options: [
        { label: 'Aries', value: 'aries', emoji: '♈' },
        { label: 'Taurus', value: 'taurus', emoji: '♉' },
        { label: 'Gemini', value: 'gemini', emoji: '♊' },
        { label: 'Cancer', value: 'cancer', emoji: '♋' },
        { label: 'Leo', value: 'leo', emoji: '♌' },
        { label: 'Virgo', value: 'virgo', emoji: '♍' },
        { label: 'Libra', value: 'libra', emoji: '♎' },
        { label: 'Scorpio', value: 'scorpio', emoji: '♏' },
        { label: 'Sagittarius', value: 'sagittarius', emoji: '♐' },
        { label: 'Capricorn', value: 'capricorn', emoji: '♑' },
        { label: 'Aquarius', value: 'aquarius', emoji: '♒' },
        { label: 'Pisces', value: 'pisces', emoji: '♓' },
      ],
    },
    {
      question: "What's your current relationship status?",
      subtitle: 'Your present shapes your future',
      type: 'choice',
      options: [
        {
          label: 'Single and searching',
          value: 'single_searching',
          emoji: '💫',
        },
        { label: 'Single and content', value: 'single_content', emoji: '🌟' },
        { label: 'Dating someone new', value: 'dating_new', emoji: '🌸' },
        {
          label: 'In a committed relationship',
          value: 'committed',
          emoji: '💕',
        },
        { label: 'Married', value: 'married', emoji: '💍' },
        { label: "It's complicated", value: 'complicated', emoji: '🌙' },
      ],
    },
    {
      question: "What's your first name?",
      subtitle: 'The universe needs to know who you are',
      type: 'text',
      placeholder: 'Enter your first name...',
    },
    {
      question: 'When were you born?',
      subtitle: 'Your birth energy influences your love path',
      type: 'choice',
      options: [
        { label: 'January - March', value: 'winter_spring', emoji: '❄️' },
        { label: 'April - June', value: 'spring_summer', emoji: '🌸' },
        { label: 'July - September', value: 'summer_fall', emoji: '☀️' },
        { label: 'October - December', value: 'fall_winter', emoji: '🍂' },
      ],
    },
    {
      question: 'What number speaks to your soul?',
      subtitle: 'Numbers carry powerful vibrations',
      type: 'choice',
      options: [
        { label: '1 - The Leader', value: 'one', emoji: '1️⃣' },
        { label: '3 - The Creative', value: 'three', emoji: '3️⃣' },
        { label: '7 - The Mystic', value: 'seven', emoji: '7️⃣' },
        { label: '9 - The Humanitarian', value: 'nine', emoji: '9️⃣' },
        { label: '11 - The Intuitive', value: 'eleven', emoji: '🔮' },
        { label: '22 - The Master Builder', value: 'twentytwo', emoji: '⚡' },
      ],
    },
    {
      question: 'Which tarot symbol calls to you?',
      subtitle: 'Your intuition knows the way',
      type: 'choice',
      options: [
        { label: 'The Moon - Mystery & Intuition', value: 'moon', emoji: '🌙' },
        { label: 'The Star - Hope & Guidance', value: 'star', emoji: '⭐' },
        { label: 'The Sword - Truth & Clarity', value: 'sword', emoji: '⚔️' },
        { label: 'The Cup - Love & Emotion', value: 'cup', emoji: '🏆' },
        { label: 'The Rose - Beauty & Passion', value: 'rose', emoji: '🌹' },
        { label: 'The Key - Secrets & Unlocking', value: 'key', emoji: '🗝️' },
      ],
    },
    {
      question: 'What is your deepest romantic desire?',
      subtitle: 'The heart knows what it wants',
      type: 'choice',
      options: [
        { label: 'Finding my soulmate', value: 'soulmate', emoji: '💫' },
        { label: 'Passionate, fiery love', value: 'passion', emoji: '🔥' },
        { label: 'Deep spiritual connection', value: 'spiritual', emoji: '🙏' },
        {
          label: 'Stable, lasting partnership',
          value: 'stability',
          emoji: '🏠',
        },
        { label: 'Adventure and excitement', value: 'adventure', emoji: '🌟' },
        { label: 'Healing from past wounds', value: 'healing', emoji: '💚' },
      ],
    },
    {
      question: "What's your hidden fear in relationships?",
      subtitle: 'Facing fears leads to freedom',
      type: 'choice',
      options: [
        {
          label: 'Being abandoned or left alone',
          value: 'abandonment',
          emoji: '💔',
        },
        {
          label: 'Not being truly understood',
          value: 'misunderstood',
          emoji: '🌫️',
        },
        { label: 'Losing my independence', value: 'independence', emoji: '🦅' },
        { label: 'Getting hurt again', value: 'hurt', emoji: '⛈️' },
        { label: 'Not being enough', value: 'inadequate', emoji: '🌑' },
        { label: 'Opening up completely', value: 'vulnerability', emoji: '🛡️' },
      ],
    },
    {
      question: 'What type of love are you seeking?',
      subtitle: 'Different souls need different connections',
      type: 'choice',
      options: [
        {
          label: 'Twin Flame - Mirror of my soul',
          value: 'twin_flame',
          emoji: '🔥',
        },
        {
          label: 'Soulmate - Perfect complement',
          value: 'soulmate_love',
          emoji: '💫',
        },
        { label: 'Karmic - Lessons and growth', value: 'karmic', emoji: '⚖️' },
        {
          label: 'Companion - Best friend and lover',
          value: 'companion',
          emoji: '🤝',
        },
        { label: 'Romantic - Fairy tale love', value: 'romantic', emoji: '👑' },
        { label: 'Sacred - Divine partnership', value: 'sacred', emoji: '✨' },
      ],
    },
    {
      question: 'What lesson did your past relationships teach you?',
      subtitle: 'Every experience shapes your path',
      type: 'choice',
      options: [
        { label: 'To love myself first', value: 'self_love', emoji: '💖' },
        {
          label: 'Communication is everything',
          value: 'communication',
          emoji: '💬',
        },
        { label: 'Trust must be earned', value: 'trust', emoji: '🔐' },
        { label: 'Patience brings rewards', value: 'patience', emoji: '⏳' },
        { label: 'I deserve better', value: 'worth', emoji: '👑' },
        { label: 'Love requires courage', value: 'courage', emoji: '🦁' },
      ],
    },
    {
      question: 'What do you believe about destiny?',
      subtitle: 'Your beliefs shape your reality',
      type: 'choice',
      options: [
        {
          label: 'Everything happens for a reason',
          value: 'fate',
          emoji: '🌟',
        },
        { label: 'We create our own destiny', value: 'free_will', emoji: '⚡' },
        { label: 'Karma guides our path', value: 'karma', emoji: '♻️' },
        {
          label: 'The universe conspires to help us',
          value: 'universe',
          emoji: '🌌',
        },
        { label: 'Love finds a way', value: 'love_wins', emoji: '💕' },
        { label: "We're all connected", value: 'connection', emoji: '🕸️' },
      ],
    },
    {
      question: 'What time of day feels most magical to you?',
      subtitle: 'Energy shifts throughout the day',
      type: 'choice',
      options: [
        { label: 'Dawn - New beginnings', value: 'dawn', emoji: '🌅' },
        { label: 'Morning - Fresh energy', value: 'morning', emoji: '☀️' },
        { label: 'Afternoon - Peak power', value: 'afternoon', emoji: '🌞' },
        { label: 'Sunset - Transformation', value: 'sunset', emoji: '🌇' },
        { label: 'Twilight - Mystery', value: 'twilight', emoji: '🌆' },
        { label: 'Midnight - Deep magic', value: 'midnight', emoji: '🌙' },
      ],
    },
    {
      question: 'How do you handle conflict in love?',
      subtitle: 'Your approach reveals your heart',
      type: 'choice',
      options: [
        { label: 'Face it head-on with honesty', value: 'direct', emoji: '⚔️' },
        {
          label: 'Seek understanding and compromise',
          value: 'diplomatic',
          emoji: '🕊️',
        },
        { label: 'Give space and time to heal', value: 'patient', emoji: '🌱' },
        { label: 'Fight for what matters most', value: 'fighter', emoji: '🛡️' },
        { label: 'Look for the deeper lesson', value: 'wise', emoji: '🦉' },
        {
          label: 'Lead with love and compassion',
          value: 'loving',
          emoji: '💚',
        },
      ],
    },
    {
      question: 'What draws you to someone romantically?',
      subtitle: 'Attraction reveals soul desires',
      type: 'choice',
      options: [
        { label: 'Their eyes and smile', value: 'physical', emoji: '😍' },
        { label: 'Intelligence and wit', value: 'mental', emoji: '🧠' },
        { label: 'Kindness and compassion', value: 'emotional', emoji: '💝' },
        {
          label: 'Spiritual depth and wisdom',
          value: 'spiritual_attraction',
          emoji: '🔮',
        },
        { label: 'Confidence and strength', value: 'power', emoji: '💪' },
        { label: 'Mystery and intrigue', value: 'mystery', emoji: '🎭' },
      ],
    },
    {
      question: 'If you could have one superpower in love, what would it be?',
      subtitle: "Your choice reveals your heart's need",
      type: 'choice',
      options: [
        { label: 'Read minds and hearts', value: 'telepathy', emoji: '🧠' },
        { label: 'Heal emotional wounds', value: 'healing_power', emoji: '💚' },
        { label: 'See the future together', value: 'foresight', emoji: '🔮' },
        { label: 'Create perfect moments', value: 'time_control', emoji: '⏰' },
        { label: 'Feel what they feel', value: 'empathy', emoji: '💫' },
        {
          label: 'Attract true love instantly',
          value: 'magnetism',
          emoji: '🧲',
        },
      ],
    },
    {
      question: "What's your love language?",
      subtitle: 'How you give and receive love',
      type: 'choice',
      options: [
        { label: 'Words of affirmation', value: 'words', emoji: '💬' },
        { label: 'Physical touch', value: 'touch', emoji: '🤗' },
        { label: 'Quality time', value: 'time', emoji: '⏰' },
        { label: 'Acts of service', value: 'service', emoji: '🛠️' },
        { label: 'Gifts and surprises', value: 'gifts', emoji: '🎁' },
        { label: 'All of the above', value: 'all', emoji: '💖' },
      ],
    },
    {
      question: 'What season resonates with your heart?',
      subtitle: 'Seasons reflect our inner cycles',
      type: 'choice',
      options: [
        { label: 'Spring - New love blooms', value: 'spring', emoji: '🌸' },
        { label: 'Summer - Passionate heat', value: 'summer', emoji: '☀️' },
        { label: 'Autumn - Mature wisdom', value: 'autumn', emoji: '🍂' },
        { label: 'Winter - Deep reflection', value: 'winter', emoji: '❄️' },
      ],
    },
    {
      question: "How do you know when you're truly in love?",
      subtitle: 'Love reveals itself differently to each soul',
      type: 'choice',
      options: [
        { label: 'I feel completely at peace', value: 'peace', emoji: '🕊️' },
        {
          label: 'My heart races with excitement',
          value: 'excitement',
          emoji: '💓',
        },
        {
          label: 'I want to grow and become better',
          value: 'growth',
          emoji: '🌱',
        },
        { label: "I feel like I'm home", value: 'home', emoji: '🏠' },
        { label: 'The world makes more sense', value: 'clarity', emoji: '💡' },
        {
          label: "I'm willing to sacrifice anything",
          value: 'devotion',
          emoji: '🙏',
        },
      ],
    },
    {
      question: 'What would you change about your love life?',
      subtitle: 'Desires point toward destiny',
      type: 'choice',
      options: [
        {
          label: 'Find someone who truly gets me',
          value: 'understanding',
          emoji: '🤝',
        },
        {
          label: 'Have more passion and romance',
          value: 'more_passion',
          emoji: '🔥',
        },
        {
          label: 'Build deeper trust and security',
          value: 'security',
          emoji: '🛡️',
        },
        {
          label: 'Experience more adventure together',
          value: 'more_adventure',
          emoji: '🌟',
        },
        {
          label: 'Heal from past relationship trauma',
          value: 'healing_past',
          emoji: '💚',
        },
        {
          label: "Nothing - I'm exactly where I need to be",
          value: 'content',
          emoji: '✨',
        },
      ],
    },
    {
      question: "What's your intuition telling you about 2025?",
      subtitle: 'Your inner wisdom knows the truth',
      type: 'choice',
      options: [
        {
          label: 'Big changes are coming',
          value: 'transformation',
          emoji: '🦋',
        },
        { label: 'My soulmate is near', value: 'soulmate_near', emoji: '💫' },
        {
          label: 'I need to focus on self-love first',
          value: 'self_focus',
          emoji: '💖',
        },
        {
          label: 'Adventure and new experiences await',
          value: 'adventure_awaits',
          emoji: '🌟',
        },
        {
          label: "It's time to let go of the past",
          value: 'release',
          emoji: '🕊️',
        },
        { label: 'Love will surprise me', value: 'surprise', emoji: '✨' },
      ],
    },
  ]

  const handleAnswer = (value: string) => {
    setSelectedAnswer(value)
    const newAnswers = { ...answers, [currentStep]: value }
    setAnswers(newAnswers)
  }

  const handleTextInput = (value: string) => {
    setTextInput(value)
    const newAnswers = { ...answers, [currentStep]: value }
    setAnswers(newAnswers)
    if (currentStep === 2) {
      setUserName(value)
    }
  }

  const nextQuestion = () => {
    const hasAnswer =
      questions[currentStep]?.type === 'text'
        ? textInput.trim()
        : selectedAnswer
    if (!hasAnswer) return

    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1)
      setSelectedAnswer(answers[currentStep + 1] || '')
      setTextInput(answers[currentStep + 1] || '')
    } else {
      const destiny = calculateDestiny(answers)
      setResult(destinyTypes[destiny])
    }
  }

  const prevQuestion = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
      setSelectedAnswer(answers[currentStep - 1] || '')
      setTextInput(answers[currentStep - 1] || '')
    }
  }

  const calculateDestiny = (answers: { [key: number]: string }) => {
    const weights = {
      soulmate_seeker: 0,
      passionate_flame: 0,
      healing_heart: 0,
      mystical_connection: 0,
      adventurous_spirit: 0,
      wise_guardian: 0,
      transformative_phoenix: 0,
      abundant_empress: 0,
    }

    const fireSign = ['aries', 'leo', 'sagittarius']
    const earthSign = ['taurus', 'virgo', 'capricorn']
    const airSign = ['gemini', 'libra', 'aquarius']
    const waterSign = ['cancer', 'scorpio', 'pisces']

    if (fireSign.includes(answers[0])) {
      weights.passionate_flame += 2
      weights.adventurous_spirit += 1
    }
    if (earthSign.includes(answers[0])) {
      weights.abundant_empress += 2
      weights.wise_guardian += 1
    }
    if (airSign.includes(answers[0])) {
      weights.soulmate_seeker += 2
      weights.mystical_connection += 1
    }
    if (waterSign.includes(answers[0])) {
      weights.healing_heart += 2
      weights.mystical_connection += 1
    }

    if (answers[1] === 'single_searching') weights.soulmate_seeker += 2
    if (answers[1] === 'complicated') weights.transformative_phoenix += 2
    if (answers[1] === 'committed' || answers[1] === 'married')
      weights.abundant_empress += 2

    if (answers[5] === 'moon') weights.mystical_connection += 2
    if (answers[5] === 'star') weights.healing_heart += 2
    if (answers[5] === 'sword') weights.transformative_phoenix += 2
    if (answers[5] === 'rose') weights.passionate_flame += 2

    if (answers[6] === 'soulmate') weights.soulmate_seeker += 3
    if (answers[6] === 'passion') weights.passionate_flame += 3
    if (answers[6] === 'healing') weights.healing_heart += 3
    if (answers[6] === 'adventure') weights.adventurous_spirit += 3
    if (answers[6] === 'spiritual') weights.mystical_connection += 3
    if (answers[6] === 'stability') weights.abundant_empress += 3

    if (answers[8] === 'twin_flame') weights.passionate_flame += 2
    if (answers[8] === 'soulmate_love') weights.soulmate_seeker += 2
    if (answers[8] === 'sacred') weights.mystical_connection += 2
    if (answers[8] === 'karmic') weights.transformative_phoenix += 2

    if (answers[10] === 'karma') weights.transformative_phoenix += 1
    if (answers[10] === 'universe') weights.mystical_connection += 1
    if (answers[10] === 'fate') weights.soulmate_seeker += 1

    if (answers[11] === 'dawn' || answers[11] === 'morning')
      weights.adventurous_spirit += 1
    if (answers[11] === 'sunset' || answers[11] === 'twilight')
      weights.passionate_flame += 1
    if (answers[11] === 'midnight') weights.mystical_connection += 1

    const maxWeight = Math.max(...Object.values(weights))
    const topDestinies = Object.keys(weights).filter(
      (key) => weights[key as keyof typeof weights] === maxWeight
    )

    return topDestinies[Math.floor(Math.random() * topDestinies.length)]
  }

  const resetQuiz = () => {
    setCurrentStep(0)
    setAnswers({})
    setSelectedAnswer('')
    setTextInput('')
    setResult(null)
    setUserName('')
    if (onReset) onReset()
  }

  if (result) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4 py-8">
        <div className="max-w-4xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/20 text-center"
          >
            <div className="mb-8">
              <motion.div
                className="text-8xl mb-6"
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              >
                {result.emoji}
              </motion.div>

              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                {userName
                  ? `${userName}, Your Love Destiny is...`
                  : 'Your Love Destiny is...'}
              </h1>

              <h2 className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-6">
                {result.title}
              </h2>

              <div className="flex justify-center items-center space-x-2 mb-6">
                <Star className="w-6 h-6 text-yellow-400" />
                <span className="text-yellow-400 font-semibold text-lg">
                  {result.card}
                </span>
                <Star className="w-6 h-6 text-yellow-400" />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8 text-left">
              <div className="bg-purple-900/30 rounded-2xl p-6">
                <div className="flex items-center mb-4">
                  <Sparkles className="w-6 h-6 text-purple-400 mr-2" />
                  <h3 className="text-xl font-bold text-white">
                    Tarot Interpretation
                  </h3>
                </div>
                <p className="text-gray-200 leading-relaxed">
                  {result.interpretation}
                </p>
              </div>

              <div className="bg-pink-900/30 rounded-2xl p-6">
                <div className="flex items-center mb-4">
                  <Heart className="w-6 h-6 text-pink-400 mr-2" />
                  <h3 className="text-xl font-bold text-white">
                    2025 Love Forecast
                  </h3>
                </div>
                <p className="text-gray-200 leading-relaxed">
                  {result.forecast}
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-yellow-900/30 to-orange-900/30 rounded-2xl p-6 mb-8">
              <div className="flex items-center justify-center mb-4">
                <Star className="w-6 h-6 text-yellow-400 mr-2" />
                <h3 className="text-xl font-bold text-white">
                  Spiritual Message
                </h3>
                <Star className="w-6 h-6 text-yellow-400 ml-2" />
              </div>
              <p className="text-gray-200 leading-relaxed text-center italic">
                {result.spiritualMessage}
              </p>
            </div>

            <div className="bg-white/5 rounded-2xl p-6 mb-8">
              <h3 className="text-xl font-bold text-white mb-4">
                Your Daily Affirmation
              </h3>
              <p className="text-2xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 italic">
                "{result.affirmation}"
              </p>
            </div>

            <div className="bg-gradient-to-r from-purple-800/50 to-pink-800/50 rounded-2xl p-6 border border-purple-400/30 mb-8">
              <h3 className="text-xl font-bold text-white mb-4">
                Ready for Your Complete Love Reading?
              </h3>
              <p className="text-gray-200 mb-4">
                This is just the beginning! Get your full detailed tarot spread
                with personalized love guidance, compatibility insights, and
                month-by-month predictions for 2025.
              </p>
              <AffiliateButton
                text="Get My Full Love Reading"
                className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-bold px-8 py-3 rounded-full transition-all duration-300"
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={resetQuiz}
                className="bg-gray-700 hover:bg-gray-600 text-white font-bold px-8 py-3 rounded-full transition-all duration-300 flex items-center space-x-2"
              >
                <RefreshCw className="w-5 h-5" />
                <span>Retake Quiz</span>
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    )
  }

  // Quiz Questions
  const currentQ = questions[currentStep]
  const progress = ((currentStep + 1) / questions.length) * 100
  const isTextQuestion = currentQ?.type === 'text'
  const hasValidAnswer = isTextQuestion ? textInput.trim() : selectedAnswer

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-8">
      <div className="max-w-3xl mx-auto w-full">
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-gray-300 text-sm">
              Question {currentStep + 1} of {questions.length}
            </span>
            <span className="text-gray-300 text-sm">
              {Math.round(progress)}% Complete
            </span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-2">
            <motion.div
              className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/20"
          >
            <div className="text-center mb-8">
              <Heart className="w-12 h-12 text-pink-400 mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {currentQ.question}
              </h2>
              {currentQ.subtitle && (
                <p className="text-gray-300 text-lg">{currentQ.subtitle}</p>
              )}
            </div>

            {isTextQuestion ? (
              <div className="mb-8">
                <input
                  type="text"
                  value={textInput}
                  onChange={(e) => handleTextInput(e.target.value)}
                  placeholder={currentQ.placeholder || 'Enter your answer...'}
                  className="w-full p-4 rounded-xl text-center text-lg bg-white/10 border-2 border-purple-400/50 text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:bg-white/20 transition-all duration-300"
                  maxLength={50}
                />
              </div>
            ) : (
              <div className="space-y-4 mb-8">
                {currentQ.options?.map((option, index) => (
                  <motion.button
                    key={index}
                    onClick={() => handleAnswer(option.value)}
                    className={`w-full p-4 rounded-xl text-left transition-all duration-300 border-2 ${
                      selectedAnswer === option.value
                        ? 'bg-purple-600/30 border-purple-400 text-white'
                        : 'bg-white/5 border-gray-600 text-gray-200 hover:bg-white/10 hover:border-gray-500'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-center">
                      {option.emoji && (
                        <span className="text-2xl mr-4">{option.emoji}</span>
                      )}
                      <div>
                        <div className="font-semibold text-lg">
                          {option.label}
                        </div>
                        {option.description && (
                          <div className="text-sm opacity-75 mt-1">
                            {option.description}
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.button>
                ))}
              </div>
            )}

            <div className="flex justify-between items-center">
              <motion.button
                onClick={prevQuestion}
                className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-300"
                whileHover={{ x: -5 }}
              >
                <ChevronLeft className="w-5 h-5" />
                <span>Previous</span>
              </motion.button>

              <motion.button
                onClick={nextQuestion}
                disabled={!hasValidAnswer}
                className={`flex items-center space-x-2 px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                  hasValidAnswer
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700'
                    : 'bg-gray-600 text-gray-400 cursor-not-allowed'
                }`}
                whileHover={hasValidAnswer ? { scale: 1.05 } : {}}
              >
                <span>
                  {currentStep === questions.length - 1
                    ? 'Reveal Destiny'
                    : 'Next'}
                </span>
                <ChevronRight className="w-5 h-5" />
              </motion.button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}

export default LoveDestinyTarotQuiz
