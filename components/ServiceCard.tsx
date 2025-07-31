'use client'

import type React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  Star,
  Heart,
  Eye,
  Moon,
  Sparkles,
  Shield,
  Clock,
  Users,
  Award,
  CheckCircle,
  ExternalLink,
  type LucideIcon,
} from 'lucide-react'
import { fadeIn } from '@/utils/motion'
import type { PsychicService } from '@/utils/psychicServicesData'

// Map icon names to Lucide components
const iconMap: Record<string, LucideIcon> = {
  Star,
  Heart,
  Eye,
  Moon,
  Sparkles,
  Shield,
  Clock,
  Users,
  Award,
  CheckCircle,
  ExternalLink,
}

// Helper to get Lucide icon component from string name
const getLucideIcon = (iconName: string) => {
  const IconComponent = iconMap[iconName] || Star
  return <IconComponent className="w-8 h-8" />
}

interface ServiceCardProps {
  service: PsychicService
  delay: number
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, delay }) => {
  return (
    <motion.div
      {...fadeIn}
      transition={{ delay }}
      className="bg-gradient-to-br from-purple-800 to-indigo-800 p-6 rounded-2xl border border-purple-500 transition-all duration-300 transform hover:scale-105"
    >
      <div className="text-purple-300 mb-4">{getLucideIcon(service.icon)}</div>
      <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
      <p className="text-purple-200 text-sm mb-4">{service.description}</p>
      <div className="space-y-2 mb-4">
        {service.features.map((feature, idx) => (
          <div key={idx} className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-green-400" />
            <span className="text-purple-200 text-sm">{feature}</span>
          </div>
        ))}
      </div>
      <div className="flex justify-between items-center mb-4">
        <span className="text-white font-semibold">{service.price}</span>
        <div className="flex items-center gap-1">
          <Star className="w-4 h-4 text-yellow-400 fill-current" />
          <span className="text-white text-sm">{service.rating}</span>
        </div>
      </div>
      <p className="text-purple-300 text-xs mb-4">
        {service.specialists} specialists available
      </p>
      <Link
        href="https://www.atom.com/name/Test"
        className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white px-4 py-2 rounded-full text-sm font-bold text-center transition-all duration-300 flex items-center justify-center gap-2"
      >
        Explore Service
        <ExternalLink className="w-4 h-4" />
      </Link>
    </motion.div>
  )
}

export default ServiceCard
