'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function MotionDiv({
  children,
  className,
}: {
  children: React.ReactNode
  className: string
}) {
  const ref = useRef(null)
  const isInView = useInView(ref)

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ y: 80, opacity: 0 }}
      animate={{ y: isInView ? 0 : 80, opacity: isInView ? 1 : 0 }}
      transition={{ ease: 'easeInOut', duration: 0.75 }}
    >
      {children}
    </motion.div>
  )
}
