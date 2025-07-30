import type { Metadata } from 'next'
import { zodiacSigns } from '@/utils/zodiacData'
import ZodiacSignClientPage from '@/components/zodiac-sign-client-page'

// Generate metadata for individual zodiac sign pages
export async function generateMetadata({
  params,
}: {
  params: { sign: string }
}): Promise<Metadata> {
  const zodiacData = getZodiacSign(params.sign)

  if (!zodiacData) {
    return {
      title: 'Zodiac Sign Not Found | Astro Love Guide',
      description:
        "The zodiac sign you're looking for doesn't exist. Explore all 12 zodiac signs and their meanings.",
    }
  }

  const signName = zodiacData.name
  const signDates = zodiacData.dates
  const signElement = zodiacData.element

  return {
    title: `${signName} Horoscope & Zodiac Sign Guide | ${signDates}`,
    description: `Complete guide to ${signName} zodiac sign (${signDates}). Discover personality traits, compatibility, love life, career insights, and daily horoscope for ${signName}.`,
    keywords: [
      `${signName.toLowerCase()} horoscope`,
      `${signName.toLowerCase()} zodiac`,
      `${signName.toLowerCase()} personality`,
      `${signName.toLowerCase()} compatibility`,
      `${signName.toLowerCase()} traits`,
      `${signName.toLowerCase()} love`,
      `${signName.toLowerCase()} career`,
      `${signElement.toLowerCase()} sign`,
      'astrology',
      'zodiac guide',
    ],
    openGraph: {
      title: `${signName} Horoscope & Zodiac Sign Guide | ${signDates}`,
      description: `Complete guide to ${signName} zodiac sign (${signDates}). Discover personality traits, compatibility, love life, and career insights.`,
      url: `https://yoursite.com/zodiac/${params.sign}`,
      siteName: 'Astro Love Guide',
      images: [
        {
          url: `https://yoursite.com/images/zodiac/${params.sign}-og.jpg`,
          width: 1200,
          height: 630,
          alt: `${signName} Zodiac Sign Guide - ${signDates}`,
        },
      ],
      locale: 'en_US',
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${signName} Horoscope & Zodiac Sign Guide | ${signDates}`,
      description: `Complete guide to ${signName} zodiac sign (${signDates}). Discover personality traits, compatibility, and love insights.`,
      images: [`https://yoursite.com/images/zodiac/${params.sign}-twitter.jpg`],
      creator: '@AstroLoveGuide',
      site: '@AstroLoveGuide',
    },
    alternates: {
      canonical: `https://yoursite.com/zodiac/${params.sign}`,
    },
    other: {
      'article:section': 'Zodiac Signs',
      'article:tag': `${signName.toLowerCase()}, zodiac, astrology, horoscope`,
      'zodiac:sign': signName,
      'zodiac:element': signElement,
      'zodiac:dates': signDates,
    },
  }
}

// Function to generate static params for all zodiac signs
export async function generateStaticParams() {
  return zodiacSigns.map((sign) => ({
    sign: sign.name.toLowerCase(),
  }))
}

// Function to get a single zodiac sign
function getZodiacSign(signName: string) {
  return zodiacSigns.find(
    (sign) => sign.name.toLowerCase() === signName.toLowerCase()
  )
}

const ZodiacSignPage = async ({ params }: { params: { sign: string } }) => {
  const zodiacData = getZodiacSign(params.sign)

  // Handle case where zodiacData might be null (e.g., sign not found)
  if (!zodiacData) {
    return (
      <div className="min-h-screen py-20 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-4">Sign Not Found</h1>
          <p className="text-purple-200 mb-8">
            {"The zodiac sign you're looking for doesn't exist."}
          </p>
        </div>
      </div>
    )
  }

  return <ZodiacSignClientPage zodiacData={zodiacData} />
}

export default ZodiacSignPage
