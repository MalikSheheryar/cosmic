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
    // Placeholder for affiliate tracking
    console.log('Affiliate link clicked:', text)
    // Add your affiliate tracking code here
    // Example: gtag('event', 'click', { event_category: 'affiliate', event_label: text });
  }
  const baseClasses =
    'inline-flex items-center justify-center gap-2 font-semibold transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-opacity-50'
  const defaultClasses =
    'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-6 py-3 rounded-full'
  const finalClassName = className || `${baseClasses} ${defaultClasses}`
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
      <span>{text}</span>
      {showIcon && <ExternalLink className="w-4 h-4" />}
    </motion.a>
  )
}
export default AffiliateButton
