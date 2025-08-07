'use client'

import Link from 'next/link'
import { useState } from 'react'
import {
  Star,
  Heart,
  Moon,
  Mail,
  Phone,
  MapPin,
  Sparkles,
  ArrowRight,
} from 'lucide-react'

// Static zodiac signs data
const zodiacSigns = [
  { _id: '1', name: 'Aries', symbol: '♈' },
  { _id: '2', name: 'Taurus', symbol: '♉' },
  { _id: '3', name: 'Gemini', symbol: '♊' },
  { _id: '4', name: 'Cancer', symbol: '♋' },
  { _id: '5', name: 'Leo', symbol: '♌' },
  { _id: '6', name: 'Virgo', symbol: '♍' },
  { _id: '7', name: 'Libra', symbol: '♎' },
  { _id: '8', name: 'Scorpio', symbol: '♏' },
  { _id: '9', name: 'Sagittarius', symbol: '♐' },
  { _id: '10', name: 'Capricorn', symbol: '♑' },
  { _id: '11', name: 'Aquarius', symbol: '♒' },
  { _id: '12', name: 'Pisces', symbol: '♓' },
]

const Footer = () => {
  const [email, setEmail] = useState('')
  const [isSubscribing, setIsSubscribing] = useState(false)
  const currentYear = new Date().getFullYear()

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubscribing(true)

    // For now, redirect to affiliate URL
    // In the future, this will integrate with Mailchimp
    setTimeout(() => {
      window.open(
        'https://286ecnl6n3n5iu1cwspijkjgrr.hop.clickbank.net',
        '_blank'
      )
      setIsSubscribing(false)
      setEmail('')
    }, 1000)
  }

  return (
    <footer className="bg-black bg-opacity-50 border-t border-purple-500 mt-20">
      {/* Newsletter Subscription Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-pink-900/20 to-purple-900/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-4 left-1/4 w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
          <div className="absolute top-8 right-1/3 w-1 h-1 bg-pink-400 rounded-full animate-pulse delay-300"></div>
          <div className="absolute bottom-6 left-1/3 w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse delay-700"></div>
          <div className="absolute bottom-4 right-1/4 w-1 h-1 bg-purple-400 rounded-full animate-pulse delay-500"></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 py-12 text-center">
          <div className="flex justify-center mb-4">
            <div className="relative">
              <Sparkles className="w-8 h-8 text-yellow-400 animate-pulse" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-pink-400 rounded-full animate-bounce"></div>
            </div>
          </div>

          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
            Want accurate psychic readings and fun quizzes?
          </h3>

          <p className="text-purple-200 text-lg mb-8 max-w-2xl mx-auto">
            Enter your email and receive our latest predictions!
          </p>

          <form onSubmit={handleSubscribe} className="max-w-2xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your cosmic email..."
                  className="w-full px-6 py-4 text-lg rounded-full bg-white/10 backdrop-blur-sm border-2 border-purple-400/30 text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-purple-400 transition-all duration-300 hover:border-purple-400/50"
                  required
                />
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                  <Star className="w-5 h-5 text-purple-400" />
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubscribing}
                className="group relative px-8 py-4 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-600 hover:from-purple-600 hover:via-pink-600 hover:to-purple-700 text-white text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 disabled:opacity-70 disabled:cursor-not-allowed whitespace-nowrap"
              >
                <span className="flex items-center justify-center gap-2">
                  {isSubscribing ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Subscribing...
                    </>
                  ) : (
                    <>
                      Subscribe & Explore
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </>
                  )}
                </span>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-400/20 to-pink-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>
          </form>

          <p className="text-purple-400 text-xs mt-4">
            ✨ Join thousands discovering their cosmic destiny daily
          </p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Star className="w-8 h-8 text-yellow-400" />
              <span className="text-xl font-bold text-white">
                AstroLoveGuides
              </span>
            </div>
            <p className="text-purple-200 text-sm leading-relaxed mb-4">
              Your trusted source for daily horoscopes, zodiac compatibility,
              and spiritual guidance. Discover your cosmic destiny with our
              expert insights.
            </p>
            <div className="flex space-x-4">
              <Heart className="w-5 h-5 text-pink-400" />
              <Moon className="w-5 h-5 text-blue-400" />
              <Star className="w-5 h-5 text-yellow-400" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-purple-200 hover:text-white transition-colors duration-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/horoscope"
                  className="text-purple-200 hover:text-white transition-colors duration-300"
                >
                  Daily Horoscope
                </Link>
              </li>
              <li>
                <Link
                  href="/compatibility"
                  className="text-purple-200 hover:text-white transition-colors duration-300"
                >
                  Compatibility
                </Link>
              </li>
              <li>
                <Link
                  href="/quizzes"
                  className="text-purple-200 hover:text-white transition-colors duration-300"
                >
                  Quizzes & Games
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-purple-200 hover:text-white transition-colors duration-300"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/psychic-services"
                  className="text-purple-200 hover:text-white transition-colors duration-300"
                >
                  Psychic Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Zodiac Signs */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold text-white mb-4">
              Zodiac Signs
            </h3>
            <div className="grid grid-cols-2 gap-2">
              {zodiacSigns.map((sign) => (
                <Link
                  key={sign._id}
                  href={`/zodiac/${sign.name.toLowerCase()}`}
                  className="flex items-center space-x-1 text-purple-200 hover:text-white transition-colors duration-300 text-sm"
                >
                  <span>{sign.symbol}</span>
                  <span>{sign.name}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-purple-400" />
                <span className="text-purple-200 text-sm">
                  info@AstroLoveGuides.com
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-purple-400" />
                <span className="text-purple-200 text-sm">
                  +1 (555) 123-4567
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-purple-400" />
                <span className="text-purple-200 text-sm">Los Angeles, CA</span>
              </div>
            </div>
            <div className="mt-6">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-purple-500 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-purple-300 text-sm mb-4 md:mb-0">
              © {currentYear} AstroLoveGuides. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link
                href="/privacy"
                className="text-purple-300 hover:text-white text-sm transition-colors duration-300"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-purple-300 hover:text-white text-sm transition-colors duration-300"
              >
                Terms of Service
              </Link>
              <Link
                href="/disclaimer"
                className="text-purple-300 hover:text-white text-sm transition-colors duration-300"
              >
                Disclaimer
              </Link>
            </div>
          </div>
          <div className="mt-4 text-center">
            <p className="text-purple-400 text-xs">
              Disclaimer: This site contains affiliate links. We may receive
              compensation when you click on links to products or services.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
