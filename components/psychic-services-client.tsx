'use client'
import type React from 'react'
import { useState } from 'react'
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
import { fadeIn, slideUp } from '@/utils/motion'
import type { PsychicService, Testimonial } from '@/utils/psychicServicesData'

interface PsychicServicesClientProps {
  services: PsychicService[]
  testimonials: Testimonial[]
}

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
}

// Helper to get Lucide icon component from string name
const getLucideIcon = (iconName: string) => {
  const IconComponent = iconMap[iconName] || Star
  return <IconComponent className="w-8 h-8" />
}

const PsychicServicesClient: React.FC<PsychicServicesClientProps> = ({
  services,
  testimonials,
}) => {
  const [selectedService, setSelectedService] = useState(
    services.length > 0 ? services[0].id : ''
  )
  const selectedServiceData = services.find((s) => s.id === selectedService)

  return (
    <div className="min-h-screen py-20 px-4">
      <motion.div {...fadeIn} className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center items-center gap-3 mb-6">
            <Star className="w-12 h-12 text-yellow-400" />
            <Eye className="w-10 h-10 text-purple-400" />
            <Star className="w-12 h-12 text-yellow-400" />
          </div>
          <h1 className="text-5xl font-bold text-white mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Professional Psychic Services
          </h1>
          <p className="text-xl text-purple-200 max-w-3xl mx-auto">
            Connect with gifted psychics, mediums, and spiritual advisors for
            personalized guidance and insights into your life's most important
            questions
          </p>
        </div>

        {/* Trust Indicators */}
        <motion.div {...slideUp} className="grid md:grid-cols-4 gap-6 mb-16">
          <div className="text-center">
            <div className="bg-gradient-to-br from-green-800 to-emerald-800 p-6 rounded-xl border border-green-500">
              <Shield className="w-8 h-8 text-green-400 mx-auto mb-3" />
              <h3 className="text-lg font-bold text-white mb-2">100% Secure</h3>
              <p className="text-green-200 text-sm">
                All readings are private and confidential
              </p>
            </div>
          </div>
          <div className="text-center">
            <div className="bg-gradient-to-br from-blue-800 to-cyan-800 p-6 rounded-xl border border-blue-500">
              <Users className="w-8 h-8 text-blue-400 mx-auto mb-3" />
              <h3 className="text-lg font-bold text-white mb-2">
                500+ Advisors
              </h3>
              <p className="text-blue-200 text-sm">
                Carefully screened and tested psychics
              </p>
            </div>
          </div>
          <div className="text-center">
            <div className="bg-gradient-to-br from-yellow-800 to-orange-800 p-6 rounded-xl border border-yellow-500">
              <Award className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
              <h3 className="text-lg font-bold text-white mb-2">20+ Years</h3>
              <p className="text-yellow-200 text-sm">
                Trusted by millions worldwide
              </p>
            </div>
          </div>
          <div className="text-center">
            <div className="bg-gradient-to-br from-purple-800 to-pink-800 p-6 rounded-xl border border-purple-500">
              <Clock className="w-8 h-8 text-purple-400 mx-auto mb-3" />
              <h3 className="text-lg font-bold text-white mb-2">
                24/7 Available
              </h3>
              <p className="text-purple-200 text-sm">
                Get guidance whenever you need it
              </p>
            </div>
          </div>
        </motion.div>

        {/* Services Grid */}
        <motion.div {...slideUp} className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Choose Your Reading Type
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                {...fadeIn}
                transition={{ delay: index * 0.1 }}
                className={`bg-gradient-to-br from-purple-800 to-indigo-800 p-6 rounded-2xl border transition-all duration-300 cursor-pointer transform hover:scale-105 ${
                  selectedService === service.id
                    ? 'border-purple-400 ring-2 ring-purple-400'
                    : 'border-purple-500 hover:border-purple-400'
                }`}
                onClick={() => setSelectedService(service.id)}
              >
                <div className="text-purple-300 mb-4">
                  {getLucideIcon(service.icon)}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-purple-200 text-sm mb-4">
                  {service.description}
                </p>
                <div className="space-y-2 mb-4">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="text-purple-200 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-white font-semibold">
                    {service.price}
                  </span>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-white text-sm">{service.rating}</span>
                  </div>
                </div>
                <p className="text-purple-300 text-xs mb-4">
                  {service.specialists} specialists available
                </p>

                {/* Service Action Buttons */}
                <div className="flex flex-col gap-2">
                  <Link
                    href="https://www.atom.com/name/Test"
                    className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white px-4 py-2 rounded-full text-sm font-bold text-center transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    Start Reading
                    <ExternalLink className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Selected Service CTA */}
        {selectedServiceData && (
          <motion.div {...slideUp} className="text-center mb-16">
            <div className="bg-gradient-to-r from-purple-800 to-pink-800 p-8 rounded-2xl border border-purple-500">
              <div className="text-purple-300 mb-4">
                {getLucideIcon(selectedServiceData.icon)}
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">
                {selectedServiceData.title}
              </h2>
              <p className="text-purple-200 mb-6 max-w-2xl mx-auto">
                {selectedServiceData.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="https://www.atom.com/name/Test"
                  className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white px-8 py-4 rounded-full text-lg font-bold transform hover:scale-105 transition-all duration-300 inline-flex items-center justify-center gap-2"
                >
                  Start {selectedServiceData.title} Now
                  <ExternalLink className="w-5 h-5" />
                </Link>
                <Link
                  href="#" // Replace with advisors browse link
                  className="bg-transparent border-2 border-yellow-400 text-yellow-300 hover:bg-yellow-400 hover:text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 inline-flex items-center justify-center gap-2"
                >
                  Browse All Advisors
                  <Users className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}

        {/* How It Works */}
        <motion.div {...fadeIn} className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            How It Works
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-br from-blue-800 to-purple-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Choose Your Advisor
              </h3>
              <p className="text-purple-200">
                Browse profiles, read reviews, and select the perfect psychic
                for your needs
              </p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-purple-800 to-pink-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Connect Instantly
              </h3>
              <p className="text-purple-200">
                Start your reading via phone, chat, or video call - available
                24/7
              </p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-pink-800 to-red-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Get Your Answers
              </h3>
              <p className="text-purple-200">
                Receive personalized insights and guidance for your life's
                important questions
              </p>
            </div>
          </div>
        </motion.div>

        {/* Testimonials */}
        <motion.div {...slideUp} className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            What Our Clients Say
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                {...fadeIn}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-indigo-800 to-purple-800 p-6 rounded-2xl border border-purple-500"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-purple-200 mb-4 italic">
                  "{testimonial.text}"
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-white font-semibold">
                    {testimonial.name}
                  </span>
                  <span className="text-purple-300 text-sm">
                    {testimonial.service}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Special Offer */}
        <motion.div {...fadeIn} className="text-center">
          <div className="bg-gradient-to-r from-yellow-800 to-orange-800 p-8 rounded-2xl border border-yellow-500">
            <Sparkles className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-white mb-4">
              Special Offer for New Clients
            </h2>
            <p className="text-yellow-200 mb-6 text-lg">
              Get your first 3 minutes FREE with any advisor + 50% off your
              first reading
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#" // Replace with free reading claim link
                className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-10 py-4 rounded-full text-xl font-bold transform hover:scale-105 transition-all duration-300 shadow-lg inline-flex items-center justify-center gap-2"
              >
                Claim Your Free Reading
                <Sparkles className="w-6 h-6" />
              </Link>
              <Link
                href="#" // Replace with all offers link
                className="bg-transparent border-2 border-green-400 text-green-300 hover:bg-green-400 hover:text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 inline-flex items-center justify-center gap-2"
              >
                View All Offers
                <ExternalLink className="w-5 h-5" />
              </Link>
            </div>
            <p className="text-yellow-300 text-sm mt-4">
              *Offer valid for new customers only. Terms and conditions apply.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default PsychicServicesClient
