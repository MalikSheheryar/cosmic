"use client"
import { useState } from "react"
import type React from "react"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { Star, Menu, X, ChevronDown } from "lucide-react"

interface ZodiacSign {
  _id: string
  name: string
  symbol: string
}

interface NavbarProps {
  zodiacSigns: ZodiacSign[]
}

const Navbar: React.FC<NavbarProps> = ({ zodiacSigns }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [showZodiacDropdown, setShowZodiacDropdown] = useState(false)
  const pathname = usePathname()

  const isActive = (path: string) => pathname === path
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Daily Horoscope", path: "/horoscope" },
    { name: "Compatibility", path: "/compatibility" },
    { name: "Quizzes", path: "/quizzes" },
    { name: "Blog", path: "/blog" },
    { name: "Psychic Services", path: "/psychic-services" },
    { name: "Contact", path: "/contact" },
  ]
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-90 backdrop-blur-md border-b border-purple-500">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Star className="w-8 h-8 text-yellow-400" />
            <span className="text-xl font-bold text-white">CosmicInsights</span>
          </Link>
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className={`text-sm font-medium transition-colors duration-300 hover:text-purple-300 ${
                  isActive(item.path) ? "text-purple-300" : "text-white"
                }`}
              >
                {item.name}
              </Link>
            ))}
            {/* Zodiac Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setShowZodiacDropdown(true)}
              onMouseLeave={() => setShowZodiacDropdown(false)}
            >
              <button className="flex items-center space-x-1 text-sm font-medium text-white hover:text-purple-300 transition-colors duration-300">
                <span>Zodiac Signs</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              {showZodiacDropdown && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute top-full left-0 mt-2 w-64 bg-black bg-opacity-95 backdrop-blur-md border border-purple-500 rounded-lg shadow-xl"
                >
                  <div className="grid grid-cols-2 gap-2 p-4">
                    {zodiacSigns.map((sign) => (
                      <Link
                        key={sign._id}
                        href={`/zodiac/${sign.name.toLowerCase()}`}
                        className="flex items-center space-x-2 p-2 rounded-lg hover:bg-purple-800 hover:bg-opacity-50 transition-colors duration-300"
                      >
                        <span className="text-lg">{sign.symbol}</span>
                        <span className="text-sm text-white">{sign.name}</span>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>
          </div>
          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white hover:text-purple-300 transition-colors duration-300"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-black bg-opacity-95 backdrop-blur-md border-t border-purple-500"
        >
          <div className="px-4 py-6 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                onClick={() => setIsOpen(false)}
                className={`block text-base font-medium transition-colors duration-300 hover:text-purple-300 ${
                  isActive(item.path) ? "text-purple-300" : "text-white"
                }`}
              >
                {item.name}
              </Link>
            ))}
            {/* Mobile Zodiac Signs */}
            <div className="pt-4 border-t border-purple-500">
              <p className="text-sm font-medium text-purple-300 mb-3">Zodiac Signs</p>
              <div className="grid grid-cols-2 gap-2">
                {zodiacSigns.map((sign) => (
                  <Link
                    key={sign._id}
                    href={`/zodiac/${sign.name.toLowerCase()}`}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center space-x-2 p-2 rounded-lg hover:bg-purple-800 hover:bg-opacity-50 transition-colors duration-300"
                  >
                    <span className="text-lg">{sign.symbol}</span>
                    <span className="text-sm text-white">{sign.name}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  )
}
export default Navbar
