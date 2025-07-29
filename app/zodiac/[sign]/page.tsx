import { zodiacSigns } from '@/utils/zodiacData'
import ZodiacSignClientPage from '@/components/zodiac-sign-client-page'

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
            The zodiac sign you're looking for doesn't exist.
          </p>
        </div>
      </div>
    )
  }

  return <ZodiacSignClientPage zodiacData={zodiacData} />
}

export default ZodiacSignPage
