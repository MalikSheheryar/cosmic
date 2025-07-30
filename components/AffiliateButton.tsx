'use client'

import type React from 'react'
import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'

interface AffiliateButtonProps {
  text: string
  className?: string
  href?: string
  target?: string
  showIcon?: boolean
  [key: string]: any
}

const AffiliateButton: React.FC<AffiliateButtonProps> = ({
  text,
  className = '',
  href = '#',
  target = '_blank',
  showIcon = true,
  ...props
}) => {
  const handleClick = (e: React.MouseEvent) => {
    // Prevent default behavior if href is '#' or empty, indicating it's not a real navigation link
    // This stops the browser from jumping to the top or changing the URL hash
    if (href === '#' || !href) {
      e.preventDefault()
    }
    // Placeholder for affiliate tracking
    console.log('Affiliate link clicked:', text)
    // Add your affiliate tracking code here
    // Example: gtag('event', 'click', { event_category: 'affiliate', event_label: text });
  }

  // Enhanced base classes with responsive behavior
  const baseClasses = `
    inline-flex items-center justify-center gap-1 sm:gap-2 
    font-semibold transition-all duration-300 transform 
    hover:scale-105 focus:outline-none focus:ring-2 
    focus:ring-purple-400 focus:ring-opacity-50
    whitespace-nowrap text-center
    shadow-md hover:shadow-lg
    active:scale-95
    min-w-0 max-w-full
  `
    .replace(/\s+/g, ' ')
    .trim()

  // Default responsive classes
  const defaultClasses = `
    bg-gradient-to-r from-purple-500 to-pink-500 
    hover:from-purple-600 hover:to-pink-600 
    text-white px-3 py-2 sm:px-6 sm:py-3 
    rounded-full text-sm sm:text-base
  `

  // Smart class processing to make any custom className responsive
  const processClassName = (customClass: string) => {
    if (!customClass) return ''

    // Extract different types of classes
    const classArray = customClass.split(' ').filter(Boolean)
    const processedClasses: string[] = []

    classArray.forEach((cls) => {
      if (cls.startsWith('px-')) {
        // Convert fixed padding to responsive
        const value = cls.replace('px-', '')
        if (parseInt(value) >= 8) {
          processedClasses.push(`px-4 sm:px-6 md:px-${value}`)
        } else if (parseInt(value) >= 6) {
          processedClasses.push(`px-3 sm:px-4 md:px-${value}`)
        } else {
          processedClasses.push(`px-2 sm:px-3 md:px-${value}`)
        }
      } else if (cls.startsWith('py-')) {
        // Convert fixed padding to responsive
        const value = cls.replace('py-', '')
        if (parseInt(value) >= 4) {
          processedClasses.push(`py-2 sm:py-3 md:py-${value}`)
        } else if (parseInt(value) >= 3) {
          processedClasses.push(`py-2 sm:py-2 md:py-${value}`)
        } else {
          processedClasses.push(`py-1 sm:py-2 md:py-${value}`)
        }
      } else if (cls.match(/^text-(xs|sm|base|lg|xl|2xl|3xl|4xl|5xl|6xl)$/)) {
        // Convert fixed text sizes to responsive
        const sizeMap: { [key: string]: string } = {
          'text-xs': 'text-xs sm:text-sm',
          'text-sm': 'text-xs sm:text-sm md:text-base',
          'text-base': 'text-sm sm:text-base md:text-lg',
          'text-lg': 'text-sm sm:text-base md:text-lg lg:text-xl',
          'text-xl': 'text-base sm:text-lg md:text-xl lg:text-2xl',
          'text-2xl': 'text-lg sm:text-xl md:text-2xl lg:text-3xl',
          'text-3xl': 'text-xl sm:text-2xl md:text-3xl lg:text-4xl',
          'text-4xl': 'text-2xl sm:text-3xl md:text-4xl lg:text-5xl',
          'text-5xl': 'text-3xl sm:text-4xl md:text-5xl lg:text-6xl',
          'text-6xl': 'text-4xl sm:text-5xl md:text-6xl lg:text-7xl',
        }
        processedClasses.push(sizeMap[cls] || cls)
      } else if (cls.startsWith('gap-')) {
        // Make gaps responsive
        const value = cls.replace('gap-', '')
        if (parseInt(value) >= 3) {
          processedClasses.push(`gap-1 sm:gap-2 md:gap-${value}`)
        } else {
          processedClasses.push(`gap-1 sm:gap-${value}`)
        }
      } else if (cls.startsWith('rounded-') && cls !== 'rounded-full') {
        // Keep rounded classes as-is, they're generally fine
        processedClasses.push(cls)
      } else {
        // Keep all other classes as-is (colors, backgrounds, etc.)
        processedClasses.push(cls)
      }
    })

    return processedClasses.join(' ')
  }

  // Process the className to make it responsive
  const responsiveClassName = className ? processClassName(className) : ''

  // Combine all classes
  const finalClassName = className
    ? `${baseClasses} ${responsiveClassName}`
    : `${baseClasses} ${defaultClasses}`

  // Dynamic icon sizing based on text size in className
  const getIconSize = () => {
    if (!className) return 'w-4 h-4 sm:w-5 sm:h-5'

    if (
      className.includes('text-3xl') ||
      className.includes('text-4xl') ||
      className.includes('text-5xl') ||
      className.includes('text-6xl')
    ) {
      return 'w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8'
    } else if (className.includes('text-2xl')) {
      return 'w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7'
    } else if (className.includes('text-xl')) {
      return 'w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6'
    } else if (className.includes('text-lg')) {
      return 'w-4 h-4 sm:w-5 sm:h-5'
    } else {
      return 'w-3 h-3 sm:w-4 sm:h-4'
    }
  }

  return (
    <motion.a
      href={href}
      target={target}
      rel="noopener noreferrer"
      className={finalClassName}
      onClick={handleClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      {...props}
    >
      <span className="truncate max-w-full">{text}</span>
      {showIcon && (
        <ExternalLink className={`flex-shrink-0 ${getIconSize()}`} />
      )}
    </motion.a>
  )
}

export default AffiliateButton
