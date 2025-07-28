import { Variants } from 'framer-motion'

// Framer Motion animation variants and utilities
export const fadeIn: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
}

export const slideUp: Variants = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
}

export const slideDown: Variants = {
  initial: { opacity: 0, y: -40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
}

export const slideLeft: Variants = {
  initial: { opacity: 0, x: 40 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
}

export const slideRight: Variants = {
  initial: { opacity: 0, x: -40 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
}

export const scaleIn: Variants = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
}

export const staggerContainer: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

export const staggerItem: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
}

// Hover animations
export const hoverScale = {
  whileHover: { scale: 1.05 },
  whileTap: { scale: 0.95 },
  transition: { duration: 0.2 },
}

export const hoverGlow = {
  whileHover: {
    boxShadow: '0 0 20px rgba(168, 85, 247, 0.4)',
    transition: { duration: 0.3 },
  },
}

// Page transition animations
export const pageTransition: Variants = {
  initial: { opacity: 0, x: -20 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 20 },
  transition: { duration: 0.4, ease: [0.42, 0, 0.58, 1] },
}

// Loading animations
export const pulse = {
  animate: {
    scale: [1, 1.05, 1],
    opacity: [0.7, 1, 0.7],
  },
  transition: {
    duration: 2,
    repeat: Infinity,
    ease: [0.42, 0, 0.58, 1],
  },
}

export const rotate = {
  animate: {
    rotate: 360,
  },
  transition: {
    duration: 2,
    repeat: Infinity,
    ease: 'linear' as const,
  },
}

// Card animations
export const cardHover = {
  whileHover: {
    y: -5,
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
    transition: { duration: 0.3 },
  },
}

// Button animations
export const buttonPress = {
  whileHover: { scale: 1.05 },
  whileTap: { scale: 0.95 },
  transition: { type: 'spring' as const, stiffness: 400, damping: 17 },
}

// Modal animations
export const modalBackdrop: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.3 },
}

export const modalContent: Variants = {
  initial: { opacity: 0, scale: 0.8, y: 20 },
  animate: { opacity: 1, scale: 1, y: 0 },
  exit: { opacity: 0, scale: 0.8, y: 20 },
  transition: { duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] },
}

// Utility function to create delayed animations
export const createDelayedAnimation = (baseAnimation: any, delay: number) => ({
  ...baseAnimation,
  transition: {
    ...baseAnimation.transition,
    delay,
  },
})

// Utility function for responsive animations
export const responsiveAnimation = (
  mobileAnimation: any,
  desktopAnimation: any
) => {
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768
  return isMobile ? mobileAnimation : desktopAnimation
}

// Additional easing presets for convenience
export const easings = {
  easeOut: [0.25, 0.46, 0.45, 0.94] as const,
  easeIn: [0.55, 0.055, 0.675, 0.19] as const,
  easeInOut: [0.42, 0, 0.58, 1] as const,
  bouncy: [0.68, -0.55, 0.265, 1.55] as const,
  smooth: [0.25, 0.1, 0.25, 1] as const,
}

// Spring presets
export const springs = {
  gentle: { type: 'spring' as const, stiffness: 120, damping: 14 },
  wobbly: { type: 'spring' as const, stiffness: 180, damping: 12 },
  stiff: { type: 'spring' as const, stiffness: 400, damping: 30 },
  slow: { type: 'spring' as const, stiffness: 60, damping: 15 },
}

// Common animation combinations
export const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: easings.easeOut },
}

export const fadeInDown = {
  initial: { opacity: 0, y: -30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: easings.easeOut },
}

export const fadeInLeft = {
  initial: { opacity: 0, x: -30 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: easings.easeOut },
}

export const fadeInRight = {
  initial: { opacity: 0, x: 30 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: easings.easeOut },
}

export const zoomIn = {
  initial: { opacity: 0, scale: 0.5 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.5, ease: easings.bouncy },
}

export const flipIn = {
  initial: { opacity: 0, rotateX: -90 },
  animate: { opacity: 1, rotateX: 0 },
  transition: { duration: 0.6, ease: easings.easeOut },
}
