import type { Metadata } from 'next'
import CompatibilityClient from './compatibility-client'

// Compatibility page metadata
export const metadata: Metadata = {
  title: 'Zodiac Love & Friendship Compatibility Calculator | AstroLoveGuide',
  description:
    'Discover your love and friendship compatibility with other zodiac signs. Use our free astrology compatibility tool and learn how signs connect.',
  keywords: [
    'zodiac compatibility',
    'love compatibility',
    'astrology compatibility',
    'zodiac love match',
    'relationship astrology',
    'compatibility calculator',
    'zodiac signs compatibility',
    'love match astrology',
    'astrological compatibility',
    'cosmic compatibility',
    'horoscope compatibility',
    'star sign compatibility',
  ],
  openGraph: {
    title:
      'Zodiac Compatibility Calculator | Love Match & Relationship Astrology',
    description:
      'Discover your zodiac compatibility with our free love match calculator. Check astrological compatibility between all zodiac signs and find your perfect cosmic connection.',
    url: 'https://yoursite.com/compatibility',
    siteName: 'Astro Love Guide',
    images: [
      {
        url: 'https://yoursite.com/images/compatibility-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Zodiac Compatibility Calculator - Find Your Perfect Love Match',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'Zodiac Compatibility Calculator | Love Match & Relationship Astrology',
    description:
      'Discover your zodiac compatibility with our free love match calculator. Check astrological compatibility between all zodiac signs.',
    images: ['https://yoursite.com/images/compatibility-twitter.jpg'],
    creator: '@AstroLoveGuide',
    site: '@AstroLoveGuide',
  },
  alternates: {
    canonical: 'https://yoursite.com/compatibility',
  },
  other: {
    'tool:type': 'Compatibility Calculator',
    'tool:category': 'Astrology',
    'service:type': 'Love Match Analysis',
  },
}

const CompatibilityPage = () => {
  return <CompatibilityClient />
}

export default CompatibilityPage
