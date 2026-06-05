'use client'
import { motion } from 'framer-motion'
import type { Lang } from '@/types'
import { aboutContent, sectionLabels } from '@/data/siteData'
import SectionHeader from './SectionHeader'

interface AboutProps {
  lang: Lang
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
}

export default function About({ lang }: AboutProps) {
  return (
    <section id="about" className="py-24 bg-subtle">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeader title={sectionLabels.about[lang]} />

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Text column */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <p className="text-ink-2 text-base leading-relaxed">
              {aboutContent.text[lang]}
            </p>
          </motion.div>

          {/* Stats grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="grid grid-cols-2 gap-4"
          >
            {aboutContent.stats.map((stat) => (
              <motion.div
                key={stat.value}
                variants={itemVariants}
                className="bg-card rounded-xl border border-divider p-5 text-center"
                style={{ boxShadow: 'var(--shadow)' }}
              >
                <div className="text-3xl font-bold text-accent mb-1">{stat.value}</div>
                <div className="text-xs font-medium text-ink-2 leading-snug">{stat.label[lang]}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
