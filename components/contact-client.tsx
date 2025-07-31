'use client'

import type React from 'react'

import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Star,
  Heart,
  MessageCircle,
  Clock,
} from 'lucide-react'
import AffiliateButton from '@/components/AffiliateButton'
import { fadeIn, slideUp } from '@/utils/motion'

const ContactClient = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    inquiryType: 'general',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<string | null>(null)

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus('success')
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        inquiryType: 'general',
      })

      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus(null), 3000)
    }, 2000)
  }

  const inquiryTypes = [
    { value: 'general', label: 'General Inquiry' },
    { value: 'technical', label: 'Technical Support' },
    { value: 'partnership', label: 'Partnership Opportunity' },
    { value: 'feedback', label: 'Feedback & Suggestions' },
    { value: 'press', label: 'Press & Media' },
  ]

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email Us',
      info: 'info@AstroLoveGuides.com',
      description: 'Send us your questions anytime',
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Call Us',
      info: '+1 (555) 123-4567',
      description: 'Mon-Fri 9AM-6PM PST',
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Visit Us',
      info: 'Los Angeles, CA',
      description: 'By appointment only',
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Response Time',
      info: '24-48 hours',
      description: 'We respond to all inquiries',
    },
  ]

  const faqs = [
    {
      question: 'How accurate are the horoscopes and readings?',
      answer:
        'Our horoscopes are created by experienced astrologers and are meant for entertainment and guidance purposes. For personalized accuracy, we recommend connecting with our professional psychic partners.',
    },
    {
      question: 'Are the psychic services really confidential?',
      answer:
        'Yes, all readings through our partner platforms are completely private and confidential. Your personal information and reading details are never shared.',
    },
    {
      question: 'How do I know which psychic advisor to choose?',
      answer:
        'Each advisor has detailed profiles with their specialties, ratings, and reviews. You can also try our compatibility quiz to find advisors that match your needs.',
    },
    {
      question: "What if I'm not satisfied with my reading?",
      answer:
        "Our partner platforms offer satisfaction guarantees and customer support. If you're not happy with your reading, contact their support team for assistance.",
    },
  ]

  return (
    <div className="min-h-screen py-20 px-4">
      <motion.div {...fadeIn} className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center items-center gap-3 mb-6">
            <MessageCircle className="w-10 h-10 text-purple-400" />
            <Star className="w-12 h-12 text-yellow-400" />
            <MessageCircle className="w-10 h-10 text-purple-400" />
          </div>
          <h1 className="text-5xl font-bold text-white mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Get in Touch
          </h1>
          <p className="text-xl text-purple-200 max-w-3xl mx-auto">
            Have questions about our services or need guidance? We're here to
            help you on your cosmic journey
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <motion.div
            {...slideUp}
            className="bg-gradient-to-br from-purple-800 to-indigo-800 p-8 rounded-2xl border border-purple-500"
          >
            <h2 className="text-2xl font-bold text-white mb-6">
              Send Us a Message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-purple-200 mb-2 font-semibold"
                  >
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full p-3 bg-black bg-opacity-50 border border-purple-400 rounded-lg text-white placeholder-purple-300 focus:border-pink-400 focus:outline-none transition-colors duration-300"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-purple-200 mb-2 font-semibold"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full p-3 bg-black bg-opacity-50 border border-purple-400 rounded-lg text-white placeholder-purple-300 focus:border-pink-400 focus:outline-none transition-colors duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="inquiryType"
                  className="block text-purple-200 mb-2 font-semibold"
                >
                  Inquiry Type
                </label>
                <select
                  id="inquiryType"
                  name="inquiryType"
                  value={formData.inquiryType}
                  onChange={handleInputChange}
                  className="w-full p-3 bg-black bg-opacity-50 border border-purple-400 rounded-lg text-white focus:border-pink-400 focus:outline-none transition-colors duration-300"
                >
                  {inquiryTypes.map((type) => (
                    <option key={type.value} value={type.value}>
                      {type.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-purple-200 mb-2 font-semibold"
                >
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full p-3 bg-black bg-opacity-50 border border-purple-400 rounded-lg text-white placeholder-purple-300 focus:border-pink-400 focus:outline-none transition-colors duration-300"
                  placeholder="Brief description of your inquiry"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-purple-200 mb-2 font-semibold"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full p-3 bg-black bg-opacity-50 border border-purple-400 rounded-lg text-white placeholder-purple-300 focus:border-pink-400 focus:outline-none transition-colors duration-300 resize-vertical"
                  placeholder="Tell us more about your question or how we can help..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 disabled:from-gray-600 disabled:to-gray-700 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </button>

              {submitStatus === 'success' && (
                <div className="bg-green-800 border border-green-500 text-green-200 p-4 rounded-lg">
                  Thank you for your message! We'll get back to you within 24-48
                  hours.
                </div>
              )}
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div {...slideUp} className="space-y-8">
            <div className="bg-gradient-to-br from-indigo-800 to-purple-800 p-8 rounded-2xl border border-purple-500">
              <h2 className="text-2xl font-bold text-white mb-6">
                Contact Information
              </h2>
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="text-purple-400 mt-1">{item.icon}</div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">
                        {item.title}
                      </h3>
                      <p className="text-purple-200 font-medium mb-1">
                        {item.info}
                      </p>
                      <p className="text-purple-300 text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Need Immediate Help CTA */}
            <div className="bg-gradient-to-br from-pink-800 to-red-800 p-8 rounded-2xl border border-pink-500">
              <Heart className="w-10 h-10 text-pink-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">
                Need Immediate Guidance?
              </h3>
              <p className="text-pink-200 mb-6">
                Don't wait for email responses. Connect with a professional
                psychic advisor right now for instant insights and guidance.
              </p>
              <AffiliateButton
                href="https://www.atom.com/name/Test"
                text="Talk to Advisor Now"
                className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white py-3 px-6 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
              />
            </div>
          </motion.div>
        </div>

        {/* FAQ Section */}
        <motion.div {...fadeIn} className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                {...slideUp}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-purple-800 to-indigo-800 p-6 rounded-2xl border border-purple-500"
              >
                <h3 className="text-lg font-bold text-white mb-3">
                  {faq.question}
                </h3>
                <p className="text-purple-200 text-sm leading-relaxed">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* About Section */}
        <motion.div {...slideUp} className="text-center">
          <div className="bg-gradient-to-r from-purple-800 to-pink-800 p-8 rounded-2xl border border-purple-500">
            <Star className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-white mb-4">
              About AstroLoveGuides
            </h2>
            <p className="text-purple-200 mb-6 max-w-3xl mx-auto">
              AstroLoveGuides is your trusted source for astrological guidance,
              daily horoscopes, and connections to professional psychic
              services. We're passionate about helping people discover their
              cosmic potential and find clarity in their spiritual journey.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div>
                <h4 className="text-lg font-bold text-white mb-2">
                  Our Mission
                </h4>
                <p className="text-purple-200 text-sm">
                  To make spiritual guidance accessible and help people connect
                  with their cosmic destiny
                </p>
              </div>
              <div>
                <h4 className="text-lg font-bold text-white mb-2">
                  Our Values
                </h4>
                <p className="text-purple-200 text-sm">
                  Authenticity, compassion, and respect for all spiritual paths
                  and beliefs
                </p>
              </div>
              <div>
                <h4 className="text-lg font-bold text-white mb-2">
                  Our Promise
                </h4>
                <p className="text-purple-200 text-sm">
                  To provide quality content and connect you with trusted
                  spiritual advisors
                </p>
              </div>
            </div>

            <div className="text-center">
              <AffiliateButton
                href="https://www.atom.com/name/Test"
                text="Explore Our Services"
                className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
              />
            </div>

            <div className="mt-8 pt-6 border-t border-purple-500">
              <p className="text-purple-300 text-sm">
                <strong>Disclaimer:</strong> This website contains affiliate
                links to psychic and spiritual services. We may receive
                compensation when you click on these links or make purchases.
                All content is for entertainment purposes only.
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default ContactClient
