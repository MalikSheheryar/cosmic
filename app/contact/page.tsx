import type { Metadata } from 'next'
import ContactClient from '@/components/contact-client'

// Contact page metadata
export const metadata: Metadata = {
  title: 'Contact AstroLoveGuide – Ask Questions or Collaborate',
  description:
    'Have questions or want to collaborate with us? Reach out to AstroLoveGuide for support, partnerships, or general inquiries.',
  keywords: [
    'contact astrologer',
    'astrology questions',
    'psychic contact',
    'spiritual guidance contact',
    'horoscope help',
    'astrology support',
    'cosmic guidance contact',
    'astrology consultation',
  ],
  openGraph: {
    title: 'Contact Us | Get in Touch with Astro Love Guide',
    description:
      'Have questions about astrology, horoscopes, or need spiritual guidance? Contact our team of expert astrologers and psychics.',
    url: 'https://yoursite.com/contact',
    siteName: 'Astro Love Guide',
    images: [
      {
        url: 'https://yoursite.com/images/contact-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Contact Astro Love Guide - Expert Astrology Support',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us | Get in Touch with Astro Love Guide',
    description:
      'Have questions about astrology, horoscopes, or need spiritual guidance? Contact our team of expert astrologers and psychics.',
    images: ['https://yoursite.com/images/contact-twitter.jpg'],
    creator: '@AstroLoveGuide',
    site: '@AstroLoveGuide',
  },
  alternates: {
    canonical: 'https://yoursite.com/contact',
  },
}

const ContactPage = () => {
  return <ContactClient />
}

export default ContactPage
