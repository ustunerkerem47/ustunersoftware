import { useRef } from 'react'
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'

export function Reveal({ children, delay = 0, y = 28, className, as = 'div' }) {
  const M = motion[as]
  return (
    <M
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </M>
  )
}

export function Rise({ children, className, from = 140, scaleFrom = 0.9 }) {
  const ref = useRef(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'center center'] })
  const y = useTransform(scrollYProgress, [0, 1], [reduce ? 0 : from, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [reduce ? 1 : scaleFrom, 1])
  const opacity = useTransform(scrollYProgress, [0, 0.35], [reduce ? 1 : 0.2, 1])
  return (
    <motion.div ref={ref} className={className} style={{ y, scale, opacity }}>
      {children}
    </motion.div>
  )
}
