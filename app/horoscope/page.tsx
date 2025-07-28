import { client } from "@/lib/sanity"
import DailyHoroscopeClient from "@/components/horoscope-client"

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
    _id, name, symbol, dates, horoscope, luckyNumber, luckyColor, mood, love, career, health,
    element, quality, rulingPlanet, strengths, weaknesses, compatible, challenging
  }`
  return client.fetch<ZodiacSign[]>(query)
}

const DailyHoroscopePage = async () => {
  const zodiacSigns = await getZodiacSigns()
  return <DailyHoroscopeClient zodiacSigns={zodiacSigns} />
}

export default DailyHoroscopePage
