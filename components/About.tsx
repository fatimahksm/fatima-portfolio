'use client'
import Image from 'next/image'
import { motion, useReducedMotion } from 'framer-motion'
import type { Lang } from '@/types'
import { aboutContent, personalInfo, sectionLabels } from '@/data/siteData'
import SectionHeader from './SectionHeader'

interface AboutProps {
  lang: Lang
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35 } },
}

export default function About({ lang }: AboutProps) {
  const reduceMotion = useReducedMotion()

  return (
    <section id="about" className="py-24 bg-subtle">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeader title={sectionLabels.about[lang]} />

        <div className="grid md:grid-cols-[240px_1fr] lg:grid-cols-[280px_1fr] gap-10 lg:gap-14 items-start">
          {/* Portrait */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '0px 0px 120px 0px' }}
            transition={{ duration: 0.38, ease: 'easeOut' }}
            className="relative mx-auto md:mx-0 w-[230px] md:w-full"
          >
            {/* Warm glow behind the frame, breathing slowly */}
            <motion.div
              aria-hidden="true"
              className="absolute -inset-3 rounded-[28px] bg-accent/15 blur-xl"
              animate={reduceMotion ? {} : { opacity: [0.6, 1, 0.6], scale: [1, 1.03, 1] }}
              transition={reduceMotion ? {} : { repeat: Infinity, duration: 6.5, ease: 'easeInOut' }}
            />

            <div
              className="relative rounded-2xl overflow-hidden border border-divider"
              style={{ boxShadow: 'var(--shadow)' }}
            >
              {/* Very slow drift so the photo feels alive without distracting */}
              <motion.div
                animate={reduceMotion ? {} : { scale: [1, 1.06, 1] }}
                transition={reduceMotion ? {} : { repeat: Infinity, duration: 18, ease: 'easeInOut' }}
              >
                <Image
                  src="/fatima-portrait.jpg"
                  alt={personalInfo.name}
                  width={720}
                  height={900}
                  sizes="(max-width: 768px) 230px, 280px"
                  className="w-full h-auto"
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Text + stats */}
          <div>
            <motion.p
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '0px 0px 120px 0px' }}
              transition={{ duration: 0.38, ease: 'easeOut' }}
              className="text-ink-2 text-base leading-relaxed"
            >
              {aboutContent.text[lang]}
            </motion.p>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '0px 0px 120px 0px' }}
              className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-8"
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
      </div>
    </section>
  )
}
