import type { Metadata } from 'next'
import DailyHoroscopeClient from './daily-horoscope-client'

// Daily horoscope page metadata
export const metadata: Metadata = {
  title: 'Free Daily Horoscopes for All Zodiac Signs | AstroLoveGuide',
  description:
    'Read your free daily horoscope and see what the stars have in store for your love, career, and personal growth. Updated every morning on AstroLoveGuide.',
  keywords: [
    'daily horoscope',
    'today horoscope',
    'astrology predictions',
    'zodiac daily',
    'horoscope today',
    'daily astrology',
    'zodiac forecast',
    'star predictions',
    'daily zodiac reading',
    'horoscope all signs',
  ],
  openGraph: {
    title:
      "Daily Horoscope | Today's Astrology Predictions for All Zodiac Signs",
    description:
      'Get your daily horoscope and astrology predictions for all 12 zodiac signs. Discover what the stars have in store for love, career, health, and more today.',
    url: 'https://yoursite.com/horoscope',
    siteName: 'Astro Love Guide',
    images: [
      {
        url: 'https://yoursite.com/images/daily-horoscope-og.jpg',
        width: 1200,
        height: 630,
        alt: "Daily Horoscope - Today's Astrology Predictions",
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title:
      "Daily Horoscope | Today's Astrology Predictions for All Zodiac Signs",
    description:
      'Get your daily horoscope and astrology predictions for all 12 zodiac signs. Discover what the stars have in store today.',
    images: ['https://yoursite.com/images/daily-horoscope-twitter.jpg'],
    creator: '@AstroLoveGuide',
    site: '@AstroLoveGuide',
  },
  alternates: {
    canonical: 'https://yoursite.com/horoscope',
  },
  other: {
    'article:section': 'Daily Horoscope',
    'article:tag': 'daily horoscope, astrology, zodiac predictions',
  },
}

const DailyHoroscopePage = () => {
  return <DailyHoroscopeClient />
}

export default DailyHoroscopePage
