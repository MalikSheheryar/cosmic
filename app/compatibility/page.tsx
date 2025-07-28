import { client } from '@/lib/sanity'
import CompatibilityClient from '@/components/compatibility-client'

interface ZodiacSign {
  _id: string
  name: string
  symbol: string
  dates: string
  horoscope: string
  luckyNumber: number
  luckyColor: string
  mood: string
  love: string
  career: string
  health: string
  element: string
  quality: string
  rulingPlanet: string
  strengths: string[]
  weaknesses: string[]
  compatible: string[]
  challenging: string[]
}

async function getZodiacSigns() {
  const query = `*[_type == "zodiacSign"] | order(orderRank asc) {
    _id, name, symbol
  }`
  return client.fetch<ZodiacSign[]>(query)
}

const CompatibilityPage = async () => {
  const zodiacSigns = await getZodiacSigns()
  return <CompatibilityClient zodiacSigns={zodiacSigns} />
}

export default CompatibilityPage
