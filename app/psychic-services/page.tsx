import type { Metadata } from 'next'
import PsychicServicesClient from '@/components/psychic-services-client'
import { psychicServices, testimonials } from '@/utils/psychicServicesData'

// Psychic services page metadata
export const metadata: Metadata = {
  title: 'Trusted Psychic Readings & Advisors Online | AstroLoveGuide',
  description:
    'Connect with experienced psychics for tarot, love, career, and life readings. Find clarity and guidance through our trusted psychic partners.',
  keywords: [
    'psychic services',
    'psychic readings',
    'spiritual guidance',
    'tarot readings',
    'love psychic',
    'career psychic',
    'spiritual advisor',
    'psychic consultation',
    'professional psychic',
    'spiritual counseling',
  ],
  openGraph: {
    title:
      'Professional Psychic Services | Expert Readings & Spiritual Guidance',
    description:
      'Connect with experienced psychics and spiritual advisors for personalized readings. Get insights on love, career, life path, and spiritual guidance.',
    url: 'https://yoursite.com/psychic-services',
    siteName: 'Astro Love Guide',
    images: [
      {
        url: 'https://yoursite.com/images/psychic-services-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Professional Psychic Services - Expert Spiritual Guidance',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'Professional Psychic Services | Expert Readings & Spiritual Guidance',
    description:
      'Connect with experienced psychics and spiritual advisors for personalized readings. Get insights on love, career, and life path.',
    images: ['https://yoursite.com/images/psychic-services-twitter.jpg'],
    creator: '@AstroLoveGuide',
    site: '@AstroLoveGuide',
  },
  alternates: {
    canonical: 'https://yoursite.com/psychic-services',
  },
  other: {
    'service:type': 'Psychic Services',
    'service:category': 'Spiritual Guidance',
  },
}

const PsychicServicesPage = async () => {
  return (
    <PsychicServicesClient
      services={psychicServices}
      testimonials={testimonials}
    />
  )
}

export default PsychicServicesPage
