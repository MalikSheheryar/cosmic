import type { Metadata } from 'next'
import HomeClient from './home-client' // Corrected typo from 'home-clietn'

// Homepage specific metadata
export const metadata: Metadata = {
  title: 'Discover Astrology, Horoscopes & Compatibility | AstroLoveGuide',
  description:
    'Dive into the universe of astrology with AstroLoveGuide. Get daily horoscopes, relationship compatibility insights, quizzes, and more to guide your spiritual journey.',
  keywords: [
    'horoscope',
    'astrology',
    'zodiac signs',
    'compatibility',
    'psychic readings',
    'daily horoscope',
    'cosmic destiny',
    'love compatibility',
    'astrology quiz',
    'tarot',
    'spiritual guidance',
  ],
  openGraph: {
    title: 'Discover Your Cosmic Destiny | Daily Horoscopes & Astrology',
    description:
      'Unlock the secrets of the stars with daily horoscopes, compatibility insights, and professional psychic guidance. Your cosmic journey starts here!',
    url: 'https://yoursite.com',
    siteName: 'Astro Love Guide',
    images: [
      {
        url: 'https://yoursite.com/images/cosmic-destiny-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Discover Your Cosmic Destiny - Astro Love Guide',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Discover Your Cosmic Destiny | Daily Horoscopes & Astrology',
    description:
      'Unlock the secrets of the stars with daily horoscopes, compatibility insights, and professional psychic guidance.',
    images: ['https://yoursite.com/images/cosmic-destiny-twitter.jpg'],
    creator: '@AstroLoveGuide',
    site: '@AstroLoveGuide',
  },
  alternates: {
    canonical: 'https://yoursite.com',
  },
  other: {
    'revisit-after': '1 days',
    language: 'English',
  },
}

// Server component that renders the client component
export default function HomePage() {
  return <HomeClient />
}
