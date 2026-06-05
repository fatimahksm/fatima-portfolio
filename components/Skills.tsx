'use client'
import { motion } from 'framer-motion'
import type { Lang } from '@/types'
import { skillCategories, sectionLabels } from '@/data/siteData'
import SectionHeader from './SectionHeader'

interface SkillsProps {
  lang: Lang
}

const categoryColors = [
  'bg-amber-50 border-amber-200/60 dark:bg-amber-950/20 dark:border-amber-800/30',
  'bg-rose-50 border-rose-200/60 dark:bg-rose-950/20 dark:border-rose-800/30',
  'bg-stone-50 border-stone-200/60 dark:bg-stone-900/30 dark:border-stone-700/30',
  'bg-teal-50 border-teal-200/60 dark:bg-teal-950/20 dark:border-teal-800/30',
  'bg-violet-50 border-violet-200/60 dark:bg-violet-950/20 dark:border-violet-800/30',
  'bg-orange-50 border-orange-200/60 dark:bg-orange-950/20 dark:border-orange-800/30',
]

const headerColors = [
  'text-amber-800 dark:text-amber-400',
  'text-rose-800 dark:text-rose-400',
  'text-stone-700 dark:text-stone-300',
  'text-teal-800 dark:text-teal-400',
  'text-violet-800 dark:text-violet-400',
  'text-orange-800 dark:text-orange-400',
]

export default function Skills({ lang }: SkillsProps) {
  return (
    <section id="skills" className="py-24 bg-page">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeader title={sectionLabels.skills[lang]} />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {skillCategories.map((cat, idx) => (
            <motion.div
              key={cat.id}
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
              className={`rounded-xl border p-5 ${categoryColors[idx % categoryColors.length]}`}
            >
              <h3 className={`text-sm font-bold mb-4 tracking-wide ${headerColors[idx % headerColors.length]}`}>
                {cat.label[lang]}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, si) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: si * 0.04, duration: 0.3 }}
                    className="text-xs font-medium px-2.5 py-1 rounded-md bg-card border border-divider text-ink-2"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
