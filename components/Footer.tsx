import Link from 'next/link'
import { Star, Heart, Moon, Mail, Phone, MapPin } from 'lucide-react'

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
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black bg-opacity-50 border-t border-purple-500 mt-20">
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
