export interface ZodiacSign {
  name: string
  symbol: string
  dates: string
  element: string
  quality: string
  rulingPlanet: string
  luckyNumber: number
  luckyColor: string
  mood: string
  personality: string
  horoscope: string
  love: string
  career: string
  health: string
  strengths: string[]
  weaknesses: string[]
  compatible: string[]
  challenging: string[]
}

export const zodiacSigns: ZodiacSign[] = [
  {
    name: 'Aries',
    symbol: '♈',
    dates: 'March 21 - April 19',
    element: 'Fire',
    quality: 'Cardinal',
    rulingPlanet: 'Mars',
    luckyNumber: 7,
    luckyColor: 'Red',
    mood: 'Energetic',
    personality:
      'Aries are natural-born leaders with an infectious enthusiasm for life. They are pioneering, dynamic, and quick to act on their impulses. Their courage and determination make them excellent at starting new projects and inspiring others to follow their lead.',
    horoscope:
      'Today brings exciting opportunities for new beginnings. Your natural leadership skills will be in high demand, and others will look to you for guidance. Trust your instincts and take bold action.',
    love: 'Passion runs high today. Single Aries may meet someone who matches their energy, while coupled Aries should plan something adventurous with their partner.',
    career:
      'Your initiative and drive will be noticed by superiors. This is an excellent time to pitch new ideas or take on challenging projects that showcase your leadership abilities.',
    health:
      'High energy levels make this perfect for intense workouts. However, be mindful not to overexert yourself. Channel your energy into productive physical activities.',
    strengths: [
      'Leadership',
      'Courage',
      'Determination',
      'Enthusiasm',
      'Initiative',
    ],
    weaknesses: [
      'Impatience',
      'Impulsiveness',
      'Aggression',
      'Selfishness',
      'Short temper',
    ],
    compatible: ['Leo', 'Sagittarius', 'Gemini', 'Aquarius'],
    challenging: ['Cancer', 'Capricorn', 'Libra'],
  },
  {
    name: 'Taurus',
    symbol: '♉',
    dates: 'April 20 - May 20',
    element: 'Earth',
    quality: 'Fixed',
    rulingPlanet: 'Venus',
    luckyNumber: 6,
    luckyColor: 'Green',
    mood: 'Stable',
    personality:
      'Taurus individuals are known for their reliability, patience, and love of comfort. They have a strong appreciation for beauty, luxury, and the finer things in life. Their practical nature and determination make them excellent at building lasting foundations.',
    horoscope:
      'Stability and comfort are your themes today. Focus on building something lasting rather than rushing into new ventures. Your patience will be rewarded with solid progress.',
    love: 'Romance takes on a sensual, grounded quality. Focus on creating intimate moments and showing affection through thoughtful gestures and quality time together.',
    career:
      'Your reliability and attention to detail will be highly valued. This is a good time for long-term planning and making steady progress on important projects.',
    health:
      'Focus on nourishing your body with good food and gentle exercise. Avoid rushing and instead embrace a slower, more mindful approach to wellness.',
    strengths: [
      'Reliability',
      'Patience',
      'Practicality',
      'Loyalty',
      'Determination',
    ],
    weaknesses: [
      'Stubbornness',
      'Possessiveness',
      'Materialism',
      'Laziness',
      'Inflexibility',
    ],
    compatible: ['Virgo', 'Capricorn', 'Cancer', 'Pisces'],
    challenging: ['Leo', 'Aquarius', 'Scorpio'],
  },
  {
    name: 'Gemini',
    symbol: '♊',
    dates: 'May 21 - June 20',
    element: 'Air',
    quality: 'Mutable',
    rulingPlanet: 'Mercury',
    luckyNumber: 5,
    luckyColor: 'Yellow',
    mood: 'Curious',
    personality:
      'Geminis are adaptable, curious, and excellent communicators. They have a natural ability to see multiple perspectives and can easily connect with people from all walks of life. Their quick wit and versatility make them engaging conversationalists.',
    horoscope:
      'Communication is key today. Your ability to connect with others and share ideas will open new doors. Stay flexible and be ready to adapt to changing circumstances.',
    love: 'Intellectual connection is highlighted. Engage in stimulating conversations with your partner or potential love interests. Mental compatibility is especially important now.',
    career:
      'Your communication skills and adaptability will be your greatest assets. This is an excellent time for networking, presentations, and collaborative projects.',
    health:
      'Mental stimulation is as important as physical exercise. Try activities that challenge both your mind and body, like dancing or interactive sports.',
    strengths: [
      'Adaptability',
      'Communication',
      'Intelligence',
      'Wit',
      'Versatility',
    ],
    weaknesses: [
      'Inconsistency',
      'Superficiality',
      'Restlessness',
      'Indecision',
      'Nervousness',
    ],
    compatible: ['Libra', 'Aquarius', 'Aries', 'Leo'],
    challenging: ['Virgo', 'Pisces', 'Sagittarius'],
  },
  {
    name: 'Cancer',
    symbol: '♋',
    dates: 'June 21 - July 22',
    element: 'Water',
    quality: 'Cardinal',
    rulingPlanet: 'Moon',
    luckyNumber: 2,
    luckyColor: 'Silver',
    mood: 'Nurturing',
    personality:
      'Cancers are deeply intuitive, emotional, and nurturing individuals. They have a strong connection to home and family, and their empathetic nature makes them excellent caregivers. Their protective instincts and emotional intelligence are their greatest strengths.',
    horoscope:
      'Trust your intuition today as it will guide you well. Focus on nurturing relationships and creating a sense of security for yourself and loved ones.',
    love: 'Emotional depth and intimacy are highlighted. This is a time for heart-to-heart conversations and showing your caring nature to those you love.',
    career:
      'Your empathy and intuitive understanding of others will be valuable in team settings. Consider roles that involve helping or supporting others.',
    health:
      'Pay attention to your emotional well-being. Stress can manifest physically, so practice relaxation techniques and spend time in comforting environments.',
    strengths: [
      'Empathy',
      'Intuition',
      'Loyalty',
      'Protectiveness',
      'Imagination',
    ],
    weaknesses: [
      'Moodiness',
      'Oversensitivity',
      'Clinginess',
      'Pessimism',
      'Insecurity',
    ],
    compatible: ['Scorpio', 'Pisces', 'Taurus', 'Virgo'],
    challenging: ['Aries', 'Libra', 'Capricorn'],
  },
  {
    name: 'Leo',
    symbol: '♌',
    dates: 'July 23 - August 22',
    element: 'Fire',
    quality: 'Fixed',
    rulingPlanet: 'Sun',
    luckyNumber: 1,
    luckyColor: 'Gold',
    mood: 'Confident',
    personality:
      'Leos are natural performers with magnetic personalities and generous hearts. They have a strong sense of pride and dignity, and their confidence and creativity inspire others. Their warmth and enthusiasm make them natural leaders and entertainers.',
    horoscope:
      'Your natural charisma is at its peak today. Step into the spotlight and let your talents shine. Others will be drawn to your confidence and positive energy.',
    love: "Romance and grand gestures are favored. Show your affection boldly and don't be afraid to express your feelings dramatically. Your partner will appreciate the attention.",
    career:
      'Your leadership qualities and creative abilities will be recognized. This is an excellent time for presentations, creative projects, or taking on a more visible role.',
    health:
      'Your vitality is strong, making this a great time for activities that make you feel powerful and confident. Consider activities that also allow you to express yourself.',
    strengths: [
      'Confidence',
      'Generosity',
      'Leadership',
      'Creativity',
      'Loyalty',
    ],
    weaknesses: [
      'Arrogance',
      'Stubbornness',
      'Self-centeredness',
      'Laziness',
      'Inflexibility',
    ],
    compatible: ['Aries', 'Sagittarius', 'Gemini', 'Libra'],
    challenging: ['Taurus', 'Scorpio', 'Aquarius'],
  },
  {
    name: 'Virgo',
    symbol: '♍',
    dates: 'August 23 - September 22',
    element: 'Earth',
    quality: 'Mutable',
    rulingPlanet: 'Mercury',
    luckyNumber: 6,
    luckyColor: 'Navy Blue',
    mood: 'Analytical',
    personality:
      'Virgos are detail-oriented perfectionists with a strong desire to help and serve others. They have excellent analytical skills and a practical approach to problem-solving. Their reliability and attention to detail make them invaluable in any situation.',
    horoscope:
      'Your attention to detail and analytical skills will be highly valued today. Focus on organizing and improving systems around you. Small improvements will lead to significant results.',
    love: "Show your love through practical acts of service and attention to your partner's needs. Your caring nature will be deeply appreciated, even in small gestures.",
    career:
      'Your methodical approach and problem-solving skills will help you tackle complex projects. This is an excellent time for analysis, planning, and quality improvement.',
    health:
      'Focus on establishing healthy routines and paying attention to the details of your wellness. Your body will respond well to consistent, moderate exercise and proper nutrition.',
    strengths: [
      'Analytical',
      'Reliable',
      'Hardworking',
      'Practical',
      'Helpful',
    ],
    weaknesses: [
      'Perfectionism',
      'Criticism',
      'Worry',
      'Shyness',
      'Overly cautious',
    ],
    compatible: ['Taurus', 'Capricorn', 'Cancer', 'Scorpio'],
    challenging: ['Gemini', 'Sagittarius', 'Pisces'],
  },
  {
    name: 'Libra',
    symbol: '♎',
    dates: 'September 23 - October 22',
    element: 'Air',
    quality: 'Cardinal',
    rulingPlanet: 'Venus',
    luckyNumber: 6,
    luckyColor: 'Pink',
    mood: 'Harmonious',
    personality:
      'Libras are diplomatic peacemakers with a strong sense of justice and beauty. They have a natural ability to see all sides of a situation and strive for balance and harmony in all aspects of life. Their charm and social skills make them excellent mediators.',
    horoscope:
      'Balance and harmony are your goals today. Focus on creating peace in your relationships and surroundings. Your diplomatic skills will help resolve any conflicts.',
    love: 'Partnership and cooperation are highlighted. This is an excellent time for romantic gestures and creating beautiful shared experiences with your loved one.',
    career:
      'Your ability to work well with others and find fair solutions will be valuable. Consider collaborative projects and situations where your diplomatic skills can shine.',
    health:
      'Seek balance in all aspects of your health routine. Avoid extremes and focus on creating harmony between work, rest, and play.',
    strengths: [
      'Diplomacy',
      'Fairness',
      'Social skills',
      'Aesthetic sense',
      'Cooperation',
    ],
    weaknesses: [
      'Indecisiveness',
      'Avoidance',
      'Superficiality',
      'Dependency',
      'Self-pity',
    ],
    compatible: ['Gemini', 'Aquarius', 'Leo', 'Sagittarius'],
    challenging: ['Cancer', 'Capricorn', 'Aries'],
  },
  {
    name: 'Scorpio',
    symbol: '♏',
    dates: 'October 23 - November 21',
    element: 'Water',
    quality: 'Fixed',
    rulingPlanet: 'Pluto',
    luckyNumber: 8,
    luckyColor: 'Deep Red',
    mood: 'Intense',
    personality:
      'Scorpios are intense, passionate individuals with incredible emotional depth and intuitive abilities. They have a natural ability to see beneath the surface and understand hidden truths. Their determination and transformative power make them formidable allies and partners.',
    horoscope:
      'Your intuitive powers are heightened today. Trust your instincts and look beneath the surface of situations. Transformation and renewal are possible.',
    love: 'Emotional intensity and deep connection are highlighted. This is a time for profound intimacy and sharing your deepest feelings with your partner.',
    career:
      'Your ability to see what others miss and your determination will help you succeed in challenging situations. Research and investigation may be particularly fruitful.',
    health:
      'Pay attention to your emotional and psychological well-being. Stress management and activities that help you process emotions will be beneficial.',
    strengths: [
      'Intensity',
      'Intuition',
      'Determination',
      'Passion',
      'Loyalty',
    ],
    weaknesses: [
      'Jealousy',
      'Secretiveness',
      'Resentment',
      'Obsessiveness',
      'Suspicion',
    ],
    compatible: ['Cancer', 'Pisces', 'Virgo', 'Capricorn'],
    challenging: ['Leo', 'Aquarius', 'Taurus'],
  },
  {
    name: 'Sagittarius',
    symbol: '♐',
    dates: 'November 22 - December 21',
    element: 'Fire',
    quality: 'Mutable',
    rulingPlanet: 'Jupiter',
    luckyNumber: 9,
    luckyColor: 'Purple',
    mood: 'Optimistic',
    personality:
      'Sagittarians are adventurous, philosophical, and eternally optimistic. They have a love for freedom, travel, and expanding their horizons through new experiences and knowledge. Their enthusiasm and honesty make them inspiring companions and teachers.',
    horoscope:
      'Adventure and learning are calling to you today. Embrace new experiences and expand your horizons. Your optimistic outlook will attract positive opportunities.',
    love: 'Freedom and adventure in relationships are highlighted. Plan exciting activities with your partner or be open to meeting someone who shares your love of exploration.',
    career:
      'Your broad perspective and enthusiasm will be valuable in projects that require vision and innovation. Consider opportunities that involve travel or education.',
    health:
      'Outdoor activities and adventures will boost your physical and mental well-being. Your body craves movement and new experiences.',
    strengths: ['Optimism', 'Adventure', 'Honesty', 'Generosity', 'Humor'],
    weaknesses: [
      'Impatience',
      'Tactlessness',
      'Restlessness',
      'Irresponsibility',
      'Overconfidence',
    ],
    compatible: ['Aries', 'Leo', 'Libra', 'Aquarius'],
    challenging: ['Virgo', 'Pisces', 'Gemini'],
  },
  {
    name: 'Capricorn',
    symbol: '♑',
    dates: 'December 22 - January 19',
    element: 'Earth',
    quality: 'Cardinal',
    rulingPlanet: 'Saturn',
    luckyNumber: 10,
    luckyColor: 'Brown',
    mood: 'Ambitious',
    personality:
      'Capricorns are ambitious, disciplined, and practical individuals with a strong sense of responsibility. They have excellent organizational skills and the patience to work steadily toward long-term goals. Their reliability and leadership abilities make them natural executives.',
    horoscope:
      'Your hard work and discipline are paying off. Focus on long-term goals and take practical steps toward achieving them. Success is within reach.',
    love: 'Commitment and stability are important in relationships now. Show your dedication through consistent actions and long-term planning together.',
    career:
      'Your leadership abilities and practical approach will be recognized. This is an excellent time for taking on more responsibility or advancing your career.',
    health:
      'Structure and routine in your health habits will yield the best results. Focus on building sustainable, long-term wellness practices.',
    strengths: [
      'Ambition',
      'Discipline',
      'Responsibility',
      'Patience',
      'Practicality',
    ],
    weaknesses: [
      'Pessimism',
      'Stubbornness',
      'Materialism',
      'Coldness',
      'Unforgiving',
    ],
    compatible: ['Taurus', 'Virgo', 'Scorpio', 'Pisces'],
    challenging: ['Aries', 'Cancer', 'Libra'],
  },
  {
    name: 'Aquarius',
    symbol: '♒',
    dates: 'January 20 - February 18',
    element: 'Air',
    quality: 'Fixed',
    rulingPlanet: 'Uranus',
    luckyNumber: 11,
    luckyColor: 'Electric Blue',
    mood: 'Independent',
    personality:
      'Aquarians are innovative, independent, and humanitarian individuals with a unique perspective on life. They have a strong desire to make the world a better place and are often ahead of their time in their thinking. Their originality and friendship make them fascinating companions.',
    horoscope:
      'Your unique perspective and innovative ideas will be valued today. Focus on humanitarian causes and connecting with like-minded individuals.',
    love: 'Friendship and intellectual connection are the foundation of romance now. Seek partners who appreciate your individuality and share your ideals.',
    career:
      'Your innovative thinking and ability to see the big picture will be valuable. This is an excellent time for brainstorming and working on projects that benefit others.',
    health:
      "Unconventional approaches to health and wellness may be particularly effective now. Listen to your body's unique needs and experiment with new methods.",
    strengths: [
      'Innovation',
      'Independence',
      'Humanitarianism',
      'Originality',
      'Friendship',
    ],
    weaknesses: [
      'Detachment',
      'Stubbornness',
      'Unpredictability',
      'Aloofness',
      'Extremism',
    ],
    compatible: ['Gemini', 'Libra', 'Aries', 'Sagittarius'],
    challenging: ['Taurus', 'Leo', 'Scorpio'],
  },
  {
    name: 'Pisces',
    symbol: '♓',
    dates: 'February 19 - March 20',
    element: 'Water',
    quality: 'Mutable',
    rulingPlanet: 'Neptune',
    luckyNumber: 12,
    luckyColor: 'Sea Green',
    mood: 'Dreamy',
    personality:
      "Pisceans are compassionate, intuitive, and deeply spiritual individuals with rich inner lives. They have a natural ability to understand and empathize with others, often putting others' needs before their own. Their creativity and imagination make them natural artists and healers.",
    horoscope:
      'Your intuition and compassion are your greatest assets today. Trust your inner wisdom and be open to helping others. Creative inspiration is flowing.',
    love: 'Emotional and spiritual connection are highlighted. This is a time for deep intimacy and sharing your dreams and fantasies with your partner.',
    career:
      'Your empathy and creative abilities will be valuable in helping professions or artistic endeavors. Trust your instincts when making important decisions.',
    health:
      'Pay attention to your emotional and spiritual well-being. Water-based activities and meditation will be particularly beneficial for your overall health.',
    strengths: [
      'Compassion',
      'Intuition',
      'Creativity',
      'Adaptability',
      'Spirituality',
    ],
    weaknesses: [
      'Oversensitivity',
      'Escapism',
      'Idealism',
      'Secretiveness',
      'Vagueness',
    ],
    compatible: ['Cancer', 'Scorpio', 'Taurus', 'Capricorn'],
    challenging: ['Gemini', 'Virgo', 'Sagittarius'],
  },
]
