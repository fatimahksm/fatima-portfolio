'use client'
import { motion } from 'framer-motion'

interface SectionHeaderProps {
  title: string
  subtitle?: string
}

export default function SectionHeader({ title, subtitle }: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px 120px 0px' }}
      transition={{ duration: 0.38, ease: 'easeOut' }}
      className="mb-14 text-center"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-ink mb-3 tracking-tight">
        {title}
      </h2>
      <div className="flex justify-center">
        <span className="block h-0.5 w-12 bg-accent rounded-full" />
      </div>
      {subtitle && (
        <p className="mt-4 text-ink-2 text-base max-w-xl mx-auto leading-relaxed">{subtitle}</p>
      )}
    </motion.div>
  )
}
