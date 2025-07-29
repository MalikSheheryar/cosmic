import type React from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { client } from '@/lib/sanity' // Import Sanity client

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Astro Love Guide',
  description:
    'Your trusted source for daily horoscopes, zodiac compatibility, and spiritual guidance.',
}

interface ZodiacSign {
  _id: string
  name: string
  symbol: string
}

async function getZodiacSignsForNav() {
  const query = `*[_type == "zodiacSign"] | order(orderRank asc) {
  _id, name, symbol
}`
  return client.fetch<ZodiacSign[]>(query)
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const zodiacSignsForNav = (await getZodiacSignsForNav()) || []

  return (
    <html lang="en">
      <body
        className={`${inter.className}min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900`}
      >
        <Navbar zodiacSigns={zodiacSignsForNav} />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
