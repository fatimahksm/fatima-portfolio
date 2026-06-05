'use client'
import { motion } from 'framer-motion'
import type { Lang } from '@/types'
import { skillCategories, sectionLabels } from '@/data/siteData'
import SectionHeader from './SectionHeader'

interface SkillsProps {
  lang: Lang
}

const categoryColors = [
  'bg-amber-50/80 border-amber-200/50 dark:bg-amber-950/10 dark:border-amber-800/20',
  'bg-neutral-50 border-neutral-200/60 dark:bg-neutral-900/20 dark:border-neutral-700/20',
  'bg-stone-50 border-stone-200/50 dark:bg-stone-900/20 dark:border-stone-700/20',
  'bg-amber-50/60 border-amber-100/60 dark:bg-amber-950/8 dark:border-amber-900/15',
  'bg-zinc-50 border-zinc-200/50 dark:bg-zinc-900/20 dark:border-zinc-700/20',
  'bg-neutral-50 border-neutral-200/50 dark:bg-neutral-900/15 dark:border-neutral-700/15',
]

const headerColors = [
  'text-amber-700 dark:text-amber-400',
  'text-neutral-500 dark:text-neutral-300',
  'text-stone-500 dark:text-stone-300',
  'text-amber-600 dark:text-amber-400',
  'text-zinc-500 dark:text-zinc-300',
  'text-neutral-500 dark:text-neutral-300',
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
