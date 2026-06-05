'use client'
import { motion } from 'framer-motion'
import { GraduationCap, BookOpen } from 'lucide-react'
import type { Lang } from '@/types'
import { education, sectionLabels } from '@/data/siteData'
import SectionHeader from './SectionHeader'

interface EducationProps {
  lang: Lang
}

export default function Education({ lang }: EducationProps) {
  return (
    <section id="education" className="py-24 bg-subtle">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <SectionHeader title={sectionLabels.education[lang]} />

        <div className="grid sm:grid-cols-2 gap-6">
          {education.map((item, i) => {
            const Icon = item.current ? BookOpen : GraduationCap
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.55, delay: i * 0.12, ease: 'easeOut' }}
                className="bg-card rounded-xl border border-divider p-6 relative overflow-hidden"
                style={{ boxShadow: 'var(--shadow)' }}
              >
                {/* Current badge */}
                {item.current && (
                  <span className="absolute top-4 right-4 text-xs font-semibold px-2.5 py-0.5 rounded-full bg-accent/10 text-accent border border-accent/20">
                    {item.year[lang]}
                  </span>
                )}

                {/* Icon */}
                <div className="w-10 h-10 rounded-lg bg-subtle border border-divider flex items-center justify-center mb-4">
                  <Icon size={18} className="text-accent" />
                </div>

                {/* Degree */}
                <div className="text-xs font-semibold text-accent uppercase tracking-widest mb-1">
                  {item.degree[lang]}
                </div>

                {/* Institution */}
                <h3 className="text-base font-semibold text-ink leading-snug mb-1">
                  {item.institution[lang]}
                </h3>

                {/* Field */}
                <p className="text-sm text-ink-2 leading-relaxed mb-3">
                  {item.field[lang]}
                </p>

                {/* Year (only for non-current) */}
                {!item.current && (
                  <div className="text-xs text-ink-3 font-medium">{item.year[lang]}</div>
                )}

                {/* Decorative */}
                <div
                  className="absolute bottom-0 right-0 w-24 h-24 rounded-tl-full opacity-5"
                  style={{ background: 'var(--accent)' }}
                  aria-hidden="true"
                />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
