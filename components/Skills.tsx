'use client'
import { motion } from 'framer-motion'
import type { Lang } from '@/types'
import { skillCategories, sectionLabels } from '@/data/siteData'
import SectionHeader from './SectionHeader'

interface SkillsProps {
  lang: Lang
}

const categoryColors = [
  'bg-stone-50 border-stone-200/50 dark:bg-stone-900/20 dark:border-stone-700/20',
  'bg-rose-50/70 border-rose-200/40 dark:bg-rose-950/10 dark:border-rose-900/20',
  'bg-slate-50 border-slate-200/50 dark:bg-slate-900/15 dark:border-slate-700/20',
  'bg-sky-50/70 border-sky-200/40 dark:bg-sky-950/10 dark:border-sky-900/20',
  'bg-violet-50/60 border-violet-200/40 dark:bg-violet-950/10 dark:border-violet-900/20',
  'bg-neutral-50 border-neutral-200/50 dark:bg-neutral-900/15 dark:border-neutral-700/20',
]

const headerColors = [
  'text-stone-500 dark:text-stone-300',
  'text-rose-400 dark:text-rose-400',
  'text-slate-500 dark:text-slate-400',
  'text-sky-500 dark:text-sky-400',
  'text-violet-500 dark:text-violet-400',
  'text-neutral-500 dark:text-neutral-400',
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
