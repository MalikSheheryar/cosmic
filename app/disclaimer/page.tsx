'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  AlertCircle,
  Star,
  ArrowLeft,
  Info,
  Heart,
  Sparkles,
} from 'lucide-react'
import { fadeIn, slideUp } from '@/utils/motion'

const Disclaimer = () => {
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
              <AlertCircle className="w-16 h-16 text-purple-400" />
              <Star className="w-6 h-6 text-yellow-400 absolute -top-1 -right-1 animate-pulse" />
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-center text-white mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Disclaimer
          </h1>
          <p className="text-xl text-purple-200 text-center max-w-2xl mx-auto">
            Important information about our cosmic guidance and services.
          </p>
        </motion.div>
      </section>

      {/* Content */}
      <section className="py-8 px-4">
        <motion.div {...slideUp} className="max-w-4xl mx-auto">
          <div className="bg-black bg-opacity-30 backdrop-blur-sm rounded-3xl border border-purple-500 p-8 md:p-12">
            <div className="mb-8">
              <p className="text-purple-200 text-lg leading-relaxed">
                <strong>Last Updated:</strong> January 1, 2025
              </p>
              <p className="text-purple-200 text-lg leading-relaxed mt-4">
                This disclaimer governs your use of AstroLoveGuides and
                clarifies the nature of our astrological and spiritual content.
                Please read this carefully before using our services.
              </p>
            </div>

            <div className="space-y-8">
              {/* Entertainment Purpose */}
              <div className="border-l-4 border-purple-400 pl-6">
                <div className="flex items-center gap-3 mb-4">
                  <Sparkles className="w-6 h-6 text-purple-400" />
                  <h2 className="text-2xl font-bold text-white">
                    Entertainment and Educational Purpose
                  </h2>
                </div>
                <div className="space-y-4 text-purple-200">
                  <p>
                    All content on AstroLoveGuides, including horoscopes,
                    compatibility readings, quizzes, and astrological insights,
                    is provided for{' '}
                    <strong>entertainment and educational purposes only</strong>
                    .
                  </p>
                  <p>
                    Our astrological content is based on traditional
                    astrological principles and interpretations, but should not
                    be considered as factual, scientific, or guaranteed
                    predictions of future events.
                  </p>
                </div>
              </div>

              {/* Not Professional Advice */}
              <div className="border-l-4 border-red-400 pl-6">
                <div className="flex items-center gap-3 mb-4">
                  <AlertCircle className="w-6 h-6 text-red-400" />
                  <h2 className="text-2xl font-bold text-white">
                    Not Professional Advice
                  </h2>
                </div>
                <div className="space-y-4 text-purple-200">
                  <p>
                    <strong>AstroLoveGuides does NOT provide:</strong>
                  </p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>
                      <strong>Medical advice:</strong> Our content cannot
                      diagnose, treat, or cure any medical condition
                    </li>
                    <li>
                      <strong>Legal advice:</strong> We do not provide legal
                      counsel or guidance
                    </li>
                    <li>
                      <strong>Financial advice:</strong> Our content should not
                      influence investment or financial decisions
                    </li>
                    <li>
                      <strong>Professional counseling:</strong> We are not
                      licensed therapists or counselors
                    </li>
                    <li>
                      <strong>Relationship therapy:</strong> Our compatibility
                      insights are not professional relationship advice
                    </li>
                  </ul>
                  <p className="mt-4 font-semibold">
                    Always consult qualified professionals for medical, legal,
                    financial, or psychological concerns.
                  </p>
                </div>
              </div>

              {/* Accuracy and Reliability */}
              <div className="border-l-4 border-yellow-400 pl-6">
                <h2 className="text-2xl font-bold text-white mb-4">
                  Accuracy and Reliability
                </h2>
                <div className="space-y-4 text-purple-200">
                  <p>
                    While we strive to provide engaging and thoughtful
                    astrological content, we make <strong>no guarantees</strong>{' '}
                    regarding:
                  </p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>The accuracy of horoscope predictions</li>
                    <li>The reliability of compatibility assessments</li>
                    <li>The occurrence of predicted events or outcomes</li>
                    <li>The effectiveness of suggested remedies or advice</li>
                    <li>The completeness or timeliness of our content</li>
                  </ul>
                  <p className="mt-4">
                    Astrological interpretations are subjective and may vary
                    between practitioners and traditions.
                  </p>
                </div>
              </div>

              {/* Personal Responsibility */}
              <div className="border-l-4 border-blue-400 pl-6">
                <div className="flex items-center gap-3 mb-4">
                  <Info className="w-6 h-6 text-blue-400" />
                  <h2 className="text-2xl font-bold text-white">
                    Personal Responsibility
                  </h2>
                </div>
                <div className="space-y-4 text-purple-200">
                  <p>You acknowledge and agree that:</p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>
                      You use our services at your own risk and discretion
                    </li>
                    <li>
                      You are responsible for your own decisions and actions
                    </li>
                    <li>
                      You will not rely solely on astrological guidance for
                      important life decisions
                    </li>
                    <li>
                      You understand the speculative nature of astrological
                      content
                    </li>
                    <li>You will seek professional help when needed</li>
                  </ul>
                </div>
              </div>

              {/* Third-Party Services */}
              <div className="border-l-4 border-green-400 pl-6">
                <h2 className="text-2xl font-bold text-white mb-4">
                  Third-Party Psychic Services
                </h2>
                <div className="space-y-4 text-purple-200">
                  <p>
                    AstroLoveGuides may refer users to third-party psychic
                    readers, spiritual advisors, or related services through
                    affiliate partnerships.
                  </p>
                  <p>
                    <strong>Important:</strong>
                  </p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>
                      We do not directly provide psychic readings or spiritual
                      counseling
                    </li>
                    <li>
                      We are not responsible for the quality, accuracy, or
                      outcomes of third-party services
                    </li>
                    <li>
                      Third-party practitioners operate independently and have
                      their own terms and policies
                    </li>
                    <li>
                      We may receive compensation for referrals, but this does
                      not guarantee service quality
                    </li>
                    <li>
                      You should research and evaluate third-party services
                      independently
                    </li>
                  </ul>
                </div>
              </div>

              {/* Affiliate Disclosure */}
              <div className="border-l-4 border-pink-400 pl-6">
                <div className="flex items-center gap-3 mb-4">
                  <Heart className="w-6 h-6 text-pink-400" />
                  <h2 className="text-2xl font-bold text-white">
                    Affiliate Disclosure
                  </h2>
                </div>
                <div className="space-y-4 text-purple-200">
                  <p>
                    AstroLoveGuides participates in affiliate marketing programs
                    and may earn commissions from qualifying purchases made
                    through our links.
                  </p>
                  <p>
                    This means we may receive financial compensation when you:
                  </p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Click on affiliate links</li>
                    <li>Purchase products or services through our referrals</li>
                    <li>Sign up for recommended services</li>
                  </ul>
                  <p className="mt-4">
                    Our affiliate relationships do not influence the price you
                    pay or compromise our editorial integrity. We only recommend
                    products and services we believe may benefit our users.
                  </p>
                </div>
              </div>

              {/* Age Restrictions */}
              <div className="border-l-4 border-orange-400 pl-6">
                <h2 className="text-2xl font-bold text-white mb-4">
                  Age Restrictions
                </h2>
                <div className="space-y-4 text-purple-200">
                  <p>
                    Our services are intended for users who are at least 18
                    years old. If you are under 18, you may only use our
                    services with parental or guardian supervision and consent.
                  </p>
                  <p>
                    Parents and guardians should review our content and
                    determine its appropriateness for minors under their care.
                  </p>
                </div>
              </div>

              {/* Limitation of Liability */}
              <div className="border-l-4 border-teal-400 pl-6">
                <h2 className="text-2xl font-bold text-white mb-4">
                  Limitation of Liability
                </h2>
                <div className="space-y-4 text-purple-200">
                  <p>
                    To the fullest extent permitted by law, AstroLoveGuides and
                    its owners, employees, and affiliates shall not be liable
                    for any:
                  </p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>
                      Direct, indirect, incidental, or consequential damages
                    </li>
                    <li>Loss of profits, data, or business opportunities</li>
                    <li>Personal injury or emotional distress</li>
                    <li>Decisions made based on our content</li>
                    <li>Issues arising from third-party services</li>
                  </ul>
                  <p className="mt-4">
                    Your use of our services is at your own risk, and you assume
                    full responsibility for any consequences.
                  </p>
                </div>
              </div>

              {/* Changes to Disclaimer */}
              <div className="border-l-4 border-indigo-400 pl-6">
                <h2 className="text-2xl font-bold text-white mb-4">
                  Changes to This Disclaimer
                </h2>
                <p className="text-purple-200">
                  We reserve the right to modify this disclaimer at any time.
                  Changes will be posted on this page with an updated date. Your
                  continued use of our services after changes are posted
                  constitutes acceptance of the modified disclaimer.
                </p>
              </div>

              {/* Contact Information */}
              <div className="bg-gradient-to-r from-purple-800 to-pink-800 p-6 rounded-2xl border border-purple-400">
                <h2 className="text-2xl font-bold text-white mb-4">
                  Questions or Concerns?
                </h2>
                <p className="text-purple-200 mb-4">
                  If you have any questions about this disclaimer or our
                  services, please contact us:
                </p>
                <div className="space-y-2 text-purple-200">
                  <p>
                    <strong>Email:</strong> info@astroloveguides.com
                  </p>
                  <p>
                    <strong>Phone:</strong> +1 (555) 123-4567
                  </p>
                  <p>
                    <strong>Address:</strong> Los Angeles, CA
                  </p>
                </div>
              </div>

              {/* Final Notice */}
              <div className="bg-gradient-to-r from-yellow-800 to-orange-800 p-6 rounded-2xl border border-yellow-400">
                <div className="flex items-center gap-3 mb-4">
                  <AlertCircle className="w-6 h-6 text-yellow-400" />
                  <h3 className="text-xl font-bold text-white">Remember</h3>
                </div>
                <p className="text-yellow-200">
                  Astrology and spiritual guidance can be wonderful tools for
                  self-reflection and entertainment, but they should complement,
                  not replace, your own judgment and professional advice when
                  making important life decisions. Trust your intuition, but
                  also trust qualified experts when you need them.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  )
}

export default Disclaimer
