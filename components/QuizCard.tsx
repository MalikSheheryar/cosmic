"use client"

import type React from "react"
import { motion } from "framer-motion"
import { Play, Users, Clock } from "lucide-react"
import { fadeIn } from "@/utils/motion"

// Update the QuizCardProps interface to match the Sanity Quiz type
interface QuizCardProps {
  quiz: {
    _id: string
    title: string
    description: string
    type: string
    difficulty: string
    duration: number
    participants: string
    tags: string[]
    questions: { question: string; answers: string[] }[]
    results: { title: string; description: string }[]
  }
  icon: React.ReactNode
  className?: string // Added className prop for external styling
}

const QuizCard: React.FC<QuizCardProps> = ({ quiz, icon, className }) => {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy":
        return "text-green-400 bg-green-900"
      case "Medium":
        return "text-yellow-400 bg-yellow-900"
      case "Hard":
        return "text-red-400 bg-red-900"
      default:
        return "text-purple-400 bg-purple-900"
    }
  }

  const getTypeGradient = (type: string) => {
    switch (type) {
      case "zodiac":
        return "from-purple-800 to-indigo-800"
      case "love":
        return "from-pink-800 to-red-800"
      case "future":
        return "from-blue-800 to-cyan-800"
      case "personality":
        return "from-green-800 to-emerald-800"
      default:
        return "from-purple-800 to-blue-800"
    }
  }

  return (
    <motion.div
      {...fadeIn}
      // Removed transition={{ delay }} as it's handled by the parent
      className={`relative bg-gradient-to-br ${getTypeGradient(
        quiz.type,
      )} p-6 rounded-2xl border border-purple-500 hover:border-purple-400 transition-all duration-300 cursor-pointer transform hover:scale-105 group
      ${className} h-full flex flex-col justify-between min-h-[320px]`} // Added h-full, flex-col, justify-between, and min-h
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="text-purple-300 group-hover:text-white transition-colors duration-300">{icon}</div>
        <div className={`px-3 py-1 rounded-full text-xs font-semibold ${getDifficultyColor(quiz.difficulty)}`}>
          {quiz.difficulty}
        </div>
      </div>
      {/* Title and Description */}
      <div className="mb-6 flex-grow">
        {" "}
        {/* Added flex-grow to allow description to take available space */}
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-200 transition-colors duration-300">
          {quiz.title}
        </h3>
        <p className="text-purple-200 text-sm leading-relaxed">{quiz.description}</p>
      </div>
      {/* Quiz Stats */}
      <div className="flex items-center justify-between mb-6 text-sm">
        <div className="flex items-center gap-2 text-purple-300">
          <Users className="w-4 h-4" />
          <span>{quiz.participants} taken</span>
        </div>
        <div className="flex items-center gap-2 text-purple-300">
          <Clock className="w-4 h-4" />
          <span>{quiz.duration} min</span>
        </div>
      </div>
      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-6">
        {quiz.tags.slice(0, 3).map((tag: string, index: number) => (
          <span key={index} className="bg-black bg-opacity-30 text-purple-200 px-2 py-1 rounded-full text-xs">
            #{tag}
          </span>
        ))}
      </div>
      {/* Action Button */}
      <div className="flex items-center justify-center">
        <div className="flex items-center gap-2 text-purple-300 group-hover:text-white font-semibold transition-colors duration-300">
          <Play className="w-5 h-5" />
          <span>Start Quiz</span>
        </div>
      </div>
      {/* Hover Effect Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl"></div>
    </motion.div>
  )
}

export default QuizCard
