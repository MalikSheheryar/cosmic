'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Shield, Star, ArrowLeft, Eye, Lock, UserCheck } from 'lucide-react'
import { fadeIn, slideUp } from '@/utils/motion'

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br">
      {/* Header */}
      <section className="relative py-10 px-4">
        <motion.div {...fadeIn} className="max-w-4xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-purple-300 hover:text-white transition-colors duration-300 mb-8"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </Link>

          <div className="flex items-center justify-center mb-8">
            <div className="relative">
              <Shield className="w-16 h-16 text-purple-400" />
              <Star className="w-6 h-6 text-yellow-400 absolute -top-1 -right-1 animate-pulse" />
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-center text-white mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Privacy Policy
          </h1>
          <p className="text-xl text-purple-200 text-center max-w-2xl mx-auto">
            Your privacy is sacred to us. Learn how we protect your cosmic
            journey.
          </p>
        </motion.div>
      </section>

      {/* Content */}
      <section className="py-8 px-4">
        <motion.div {...slideUp} className="max-w-4xl mx-auto">
          <div className="bg-black bg-opacity-30 backdrop-blur-sm rounded-3xl border border-purple-500 p-8 md:p-12">
            <div className="mb-8">
              <p className="text-purple-200 text-lg leading-relaxed">
                <strong>Effective Date:</strong> January 1, 2025
              </p>
              <p className="text-purple-200 text-lg leading-relaxed mt-4">
                At AstroLoveGuides, we respect your privacy and are committed to
                protecting your personal information. This Privacy Policy
                explains how we collect, use, and safeguard your data when you
                visit our website and use our services.
              </p>
            </div>

            <div className="space-y-8">
              {/* Information We Collect */}
              <div className="border-l-4 border-purple-400 pl-6">
                <div className="flex items-center gap-3 mb-4">
                  <Eye className="w-6 h-6 text-purple-400" />
                  <h2 className="text-2xl font-bold text-white">
                    Information We Collect
                  </h2>
                </div>
                <div className="space-y-4 text-purple-200">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      Personal Information
                    </h3>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>
                        Email addresses when you subscribe to our newsletter
                      </li>
                      <li>Names and contact information when you contact us</li>
                      <li>
                        Birth dates and zodiac information for personalized
                        readings
                      </li>
                      <li>
                        Payment information when you purchase services
                        (processed securely by third parties)
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      Automatically Collected Information
                    </h3>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>IP addresses and device information</li>
                      <li>Browser type and operating system</li>
                      <li>Pages visited and time spent on our site</li>
                      <li>Cookies and similar tracking technologies</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* How We Use Information */}
              <div className="border-l-4 border-pink-400 pl-6">
                <div className="flex items-center gap-3 mb-4">
                  <UserCheck className="w-6 h-6 text-pink-400" />
                  <h2 className="text-2xl font-bold text-white">
                    How We Use Your Information
                  </h2>
                </div>
                <ul className="list-disc list-inside space-y-2 text-purple-200 ml-4">
                  <li>
                    Provide personalized horoscopes and astrological insights
                  </li>
                  <li>Send newsletters and updates about cosmic events</li>
                  <li>Process payments for premium services</li>
                  <li>Improve our website and user experience</li>
                  <li>
                    Respond to your inquiries and provide customer support
                  </li>
                  <li>Comply with legal obligations and protect our rights</li>
                </ul>
              </div>

              {/* Information Sharing */}
              <div className="border-l-4 border-yellow-400 pl-6">
                <h2 className="text-2xl font-bold text-white mb-4">
                  Information Sharing
                </h2>
                <div className="space-y-4 text-purple-200">
                  <p>
                    We do not sell, trade, or rent your personal information to
                    third parties. We may share your information only in the
                    following circumstances:
                  </p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>
                      <strong>Service Providers:</strong> Trusted third parties
                      who help us operate our website and provide services
                    </li>
                    <li>
                      <strong>Legal Requirements:</strong> When required by law
                      or to protect our rights and safety
                    </li>
                    <li>
                      <strong>Business Transfers:</strong> In the event of a
                      merger, acquisition, or sale of assets
                    </li>
                    <li>
                      <strong>Consent:</strong> When you explicitly consent to
                      sharing your information
                    </li>
                  </ul>
                </div>
              </div>

              {/* Data Security */}
              <div className="border-l-4 border-blue-400 pl-6">
                <div className="flex items-center gap-3 mb-4">
                  <Lock className="w-6 h-6 text-blue-400" />
                  <h2 className="text-2xl font-bold text-white">
                    Data Security
                  </h2>
                </div>
                <p className="text-purple-200">
                  We implement appropriate technical and organizational measures
                  to protect your personal information against unauthorized
                  access, alteration, disclosure, or destruction. This includes
                  encryption, secure servers, and regular security assessments.
                </p>
              </div>

              {/* Cookies */}
              <div className="border-l-4 border-green-400 pl-6">
                <h2 className="text-2xl font-bold text-white mb-4">
                  Cookies and Tracking
                </h2>
                <div className="space-y-4 text-purple-200">
                  <p>We use cookies and similar technologies to:</p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Remember your preferences and settings</li>
                    <li>Analyze website traffic and usage patterns</li>
                    <li>Provide personalized content and advertisements</li>
                    <li>Improve our services and user experience</li>
                  </ul>
                  <p>
                    You can control cookies through your browser settings, but
                    disabling them may affect website functionality.
                  </p>
                </div>
              </div>

              {/* Your Rights */}
              <div className="border-l-4 border-purple-400 pl-6">
                <h2 className="text-2xl font-bold text-white mb-4">
                  Your Rights
                </h2>
                <div className="space-y-4 text-purple-200">
                  <p>You have the right to:</p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Access and review your personal information</li>
                    <li>Correct inaccurate or incomplete data</li>
                    <li>
                      Delete your personal information (subject to legal
                      requirements)
                    </li>
                    <li>Opt-out of marketing communications</li>
                    <li>Request data portability</li>
                    <li>Object to certain processing activities</li>
                  </ul>
                  <p className="mt-4">
                    To exercise these rights, please contact us at{' '}
                    <strong>privacy@astroloveguides.com</strong>
                  </p>
                </div>
              </div>

              {/* Third-Party Links */}
              <div className="border-l-4 border-red-400 pl-6">
                <h2 className="text-2xl font-bold text-white mb-4">
                  Third-Party Links
                </h2>
                <p className="text-purple-200">
                  Our website may contain links to third-party websites,
                  including affiliate partners. We are not responsible for the
                  privacy practices of these external sites. We encourage you to
                  review their privacy policies before providing any personal
                  information.
                </p>
              </div>

              {/* Children's Privacy */}
              <div className="border-l-4 border-orange-400 pl-6">
                <h2 className="text-2xl font-bold text-white mb-4">
                  Children's Privacy
                </h2>
                <p className="text-purple-200">
                  Our services are not intended for children under 13 years of
                  age. We do not knowingly collect personal information from
                  children under 13. If we become aware that we have collected
                  such information, we will take steps to delete it promptly.
                </p>
              </div>

              {/* Changes to Policy */}
              <div className="border-l-4 border-teal-400 pl-6">
                <h2 className="text-2xl font-bold text-white mb-4">
                  Changes to This Policy
                </h2>
                <p className="text-purple-200">
                  We may update this Privacy Policy from time to time. We will
                  notify you of any material changes by posting the new policy
                  on this page and updating the effective date. Your continued
                  use of our services after such changes constitutes acceptance
                  of the updated policy.
                </p>
              </div>

              {/* Contact Information */}
              <div className="bg-gradient-to-r from-purple-800 to-pink-800 p-6 rounded-2xl border border-purple-400">
                <h2 className="text-2xl font-bold text-white mb-4">
                  Contact Us
                </h2>
                <p className="text-purple-200 mb-4">
                  If you have any questions about this Privacy Policy or our
                  data practices, please contact us:
                </p>
                <div className="space-y-2 text-purple-200">
                  <p>
                    <strong>Email:</strong> privacy@astroloveguides.com
                  </p>
                  <p>
                    <strong>Phone:</strong> +1 (555) 123-4567
                  </p>
                  <p>
                    <strong>Address:</strong> Los Angeles, CA
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  )
}

export default PrivacyPolicy
