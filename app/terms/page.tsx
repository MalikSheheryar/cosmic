'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  FileText,
  Star,
  ArrowLeft,
  Scale,
  AlertTriangle,
  CheckCircle,
} from 'lucide-react'
import { fadeIn, slideUp } from '@/utils/motion'

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br ">
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
              <FileText className="w-16 h-16 text-purple-400" />
              <Star className="w-6 h-6 text-yellow-400 absolute -top-1 -right-1 animate-pulse" />
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-center text-white mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Terms of Service
          </h1>
          <p className="text-xl text-purple-200 text-center max-w-2xl mx-auto">
            The cosmic rules that govern our spiritual journey together.
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
                Welcome to AstroLoveGuides! These Terms of Service ("Terms")
                govern your use of our website and services. By accessing or
                using our platform, you agree to be bound by these Terms.
              </p>
            </div>

            <div className="space-y-8">
              {/* Acceptance of Terms */}
              <div className="border-l-4 border-purple-400 pl-6">
                <div className="flex items-center gap-3 mb-4">
                  <CheckCircle className="w-6 h-6 text-purple-400" />
                  <h2 className="text-2xl font-bold text-white">
                    Acceptance of Terms
                  </h2>
                </div>
                <p className="text-purple-200">
                  By accessing AstroLoveGuides, you acknowledge that you have
                  read, understood, and agree to be bound by these Terms and our
                  Privacy Policy. If you do not agree to these Terms, please do
                  not use our services.
                </p>
              </div>

              {/* Description of Services */}
              <div className="border-l-4 border-pink-400 pl-6">
                <h2 className="text-2xl font-bold text-white mb-4">
                  Description of Services
                </h2>
                <div className="space-y-4 text-purple-200">
                  <p>AstroLoveGuides provides:</p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Daily horoscopes and astrological insights</li>
                    <li>Zodiac compatibility analysis</li>
                    <li>Interactive quizzes and personality tests</li>
                    <li>Blog content about astrology and spirituality</li>
                    <li>Referrals to professional psychic services</li>
                    <li>Educational content about cosmic phenomena</li>
                  </ul>
                  <p className="mt-4">
                    Our services are for entertainment and educational purposes.
                    They should not replace professional medical, legal, or
                    financial advice.
                  </p>
                </div>
              </div>

              {/* User Responsibilities */}
              <div className="border-l-4 border-yellow-400 pl-6">
                <h2 className="text-2xl font-bold text-white mb-4">
                  User Responsibilities
                </h2>
                <div className="space-y-4 text-purple-200">
                  <p>As a user of our services, you agree to:</p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Provide accurate and truthful information</li>
                    <li>Use our services only for lawful purposes</li>
                    <li>Respect the intellectual property rights of others</li>
                    <li>Not attempt to hack, disrupt, or damage our systems</li>
                    <li>Not use our services to harass or harm others</li>
                    <li>
                      Not create multiple accounts to circumvent restrictions
                    </li>
                    <li>
                      Maintain the confidentiality of your account information
                    </li>
                  </ul>
                </div>
              </div>

              {/* Prohibited Activities */}
              <div className="border-l-4 border-red-400 pl-6">
                <div className="flex items-center gap-3 mb-4">
                  <AlertTriangle className="w-6 h-6 text-red-400" />
                  <h2 className="text-2xl font-bold text-white">
                    Prohibited Activities
                  </h2>
                </div>
                <div className="space-y-4 text-purple-200">
                  <p>You may not:</p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>
                      Copy, reproduce, or distribute our content without
                      permission
                    </li>
                    <li>
                      Use automated systems to access our services (bots,
                      scrapers)
                    </li>
                    <li>Attempt to reverse engineer our software or systems</li>
                    <li>Upload malicious code or viruses</li>
                    <li>Impersonate others or provide false information</li>
                    <li>Engage in spam or unsolicited marketing</li>
                    <li>Violate any applicable laws or regulations</li>
                  </ul>
                </div>
              </div>

              {/* Intellectual Property */}
              <div className="border-l-4 border-blue-400 pl-6">
                <h2 className="text-2xl font-bold text-white mb-4">
                  Intellectual Property
                </h2>
                <div className="space-y-4 text-purple-200">
                  <p>
                    All content on AstroLoveGuides, including text, graphics,
                    logos, images, and software, is owned by us or our licensors
                    and is protected by copyright, trademark, and other
                    intellectual property laws.
                  </p>
                  <p>
                    You may view and use our content for personal,
                    non-commercial purposes only. Any other use requires our
                    written permission.
                  </p>
                </div>
              </div>

              {/* Affiliate Relationships */}
              <div className="border-l-4 border-green-400 pl-6">
                <h2 className="text-2xl font-bold text-white mb-4">
                  Affiliate Relationships
                </h2>
                <div className="space-y-4 text-purple-200">
                  <p>
                    AstroLoveGuides participates in affiliate marketing
                    programs. We may receive compensation when you click on
                    certain links or purchase products/services through our
                    referrals.
                  </p>
                  <p>
                    This does not affect the price you pay or our editorial
                    independence. We only recommend products and services we
                    believe may be of value to our users.
                  </p>
                </div>
              </div>

              {/* Disclaimers */}
              <div className="border-l-4 border-orange-400 pl-6">
                <div className="flex items-center gap-3 mb-4">
                  <Scale className="w-6 h-6 text-orange-400" />
                  <h2 className="text-2xl font-bold text-white">Disclaimers</h2>
                </div>
                <div className="space-y-4 text-purple-200">
                  <p>
                    <strong>Entertainment Purpose:</strong> Our astrological
                    content is for entertainment and educational purposes only.
                  </p>
                  <p>
                    <strong>No Professional Advice:</strong> We do not provide
                    medical, legal, financial, or professional advice.
                  </p>
                  <p>
                    <strong>Third-Party Services:</strong> We are not
                    responsible for the quality or accuracy of third-party
                    psychic services.
                  </p>
                  <p>
                    <strong>Results Not Guaranteed:</strong> We make no
                    guarantees about the accuracy of predictions or
                    compatibility assessments.
                  </p>
                </div>
              </div>

              {/* Limitation of Liability */}
              <div className="border-l-4 border-teal-400 pl-6">
                <h2 className="text-2xl font-bold text-white mb-4">
                  Limitation of Liability
                </h2>
                <p className="text-purple-200">
                  To the fullest extent permitted by law, AstroLoveGuides shall
                  not be liable for any indirect, incidental, special,
                  consequential, or punitive damages, including but not limited
                  to loss of profits, data, or use, arising from your use of our
                  services.
                </p>
              </div>

              {/* Indemnification */}
              <div className="border-l-4 border-purple-400 pl-6">
                <h2 className="text-2xl font-bold text-white mb-4">
                  Indemnification
                </h2>
                <p className="text-purple-200">
                  You agree to indemnify and hold harmless AstroLoveGuides from
                  any claims, damages, or expenses arising from your use of our
                  services or violation of these Terms.
                </p>
              </div>

              {/* Termination */}
              <div className="border-l-4 border-red-400 pl-6">
                <h2 className="text-2xl font-bold text-white mb-4">
                  Termination
                </h2>
                <div className="space-y-4 text-purple-200">
                  <p>
                    We reserve the right to terminate or suspend your access to
                    our services at any time, without notice, for any reason,
                    including violation of these Terms.
                  </p>
                  <p>
                    Upon termination, your right to use our services will cease
                    immediately, but the provisions regarding intellectual
                    property, disclaimers, and limitation of liability will
                    survive.
                  </p>
                </div>
              </div>

              {/* Governing Law */}
              <div className="border-l-4 border-indigo-400 pl-6">
                <h2 className="text-2xl font-bold text-white mb-4">
                  Governing Law
                </h2>
                <p className="text-purple-200">
                  These Terms are governed by the laws of California, United
                  States, without regard to conflict of law principles. Any
                  disputes will be resolved in the courts of Los Angeles County,
                  California.
                </p>
              </div>

              {/* Changes to Terms */}
              <div className="border-l-4 border-pink-400 pl-6">
                <h2 className="text-2xl font-bold text-white mb-4">
                  Changes to Terms
                </h2>
                <p className="text-purple-200">
                  We may update these Terms from time to time. We will notify
                  you of material changes by posting the updated Terms on our
                  website. Your continued use of our services after such changes
                  constitutes acceptance of the new Terms.
                </p>
              </div>

              {/* Contact Information */}
              <div className="bg-gradient-to-r from-purple-800 to-pink-800 p-6 rounded-2xl border border-purple-400">
                <h2 className="text-2xl font-bold text-white mb-4">
                  Contact Us
                </h2>
                <p className="text-purple-200 mb-4">
                  If you have any questions about these Terms of Service, please
                  contact us:
                </p>
                <div className="space-y-2 text-purple-200">
                  <p>
                    <strong>Email:</strong> legal@astroloveguides.com
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

export default TermsOfService
