import { client } from '@/lib/sanity'
import ZodiacSignClientPage from '@/components/zodiac-sign-client-page'

interface ZodiacSign {
  _id: string
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

// Function to generate static params for all zodiac signs
export async function generateStaticParams() {
  const query = `*[_type == "zodiacSign"]{ "sign": lower(name) }`
  const signs = await client.fetch<{ sign: string }[]>(query)
  return signs.map((s) => ({ sign: s.sign }))
}

// Function to fetch a single zodiac sign
async function getZodiacSign(signName: string) {
  const query = `*[_type == "zodiacSign" && lower(name) == $signName][0]{
    _id, name, symbol, dates, element, quality, rulingPlanet, luckyNumber, luckyColor, mood,
    personality, horoscope, love, career, health, strengths, weaknesses, compatible, challenging
  }`
  return client.fetch<ZodiacSign>(query, { signName })
}

const ZodiacSignPage = async ({ params }: { params: { sign: string } }) => {
  const zodiacData = await getZodiacSign(params.sign)

  // Handle case where zodiacData might be null (e.g., sign not found)
  if (!zodiacData) {
    // You might want to render a specific 404 component or redirect here
    return (
      <div className="min-h-screen py-20 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-4">Sign Not Found</h1>
          <p className="text-purple-200 mb-8">
            The zodiac sign you're looking for doesn't exist.
          </p>
          {/* You can add a Link to home or horoscope page here */}
        </div>
      </div>
    )
  }

  return <ZodiacSignClientPage zodiacData={zodiacData} />
}

export default ZodiacSignPage
