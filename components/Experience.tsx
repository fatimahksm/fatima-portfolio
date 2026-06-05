'use client'
import { motion } from 'framer-motion'
import { Briefcase, Lock, Building2 } from 'lucide-react'
import type { Lang } from '@/types'
import { experiences, sectionLabels } from '@/data/siteData'
import SectionHeader from './SectionHeader'

interface ExperienceProps {
  lang: Lang
}

const badgeConfig = {
  client: { label: { en: 'Client Project', fr: 'Projet Client' }, color: 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300' },
  confidential: { label: { en: 'Confidential', fr: 'Confidentiel' }, color: 'bg-zinc-100 text-zinc-700 dark:bg-zinc-800/60 dark:text-zinc-300' },
  internship: { label: { en: 'Internship', fr: 'Stage' }, color: 'bg-stone-100 text-stone-700 dark:bg-stone-800/60 dark:text-stone-300' },
}

const iconMap = {
  client: Briefcase,
  confidential: Lock,
  internship: Building2,
}

export default function Experience({ lang }: ExperienceProps) {
  return (
    <section id="experience" className="py-24 bg-page">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <SectionHeader title={sectionLabels.experience[lang]} />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-5 top-0 bottom-0 w-px bg-divider hidden sm:block" aria-hidden="true" />

          <div className="space-y-10">
            {experiences.map((exp, i) => {
              const cfg = badgeConfig[exp.badge]
              const Icon = iconMap[exp.badge]
              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, delay: i * 0.08, ease: 'easeOut' }}
                  className="sm:pl-16 relative"
                >
                  {/* Timeline dot */}
                  <div className="hidden sm:flex absolute left-0 top-1 w-10 h-10 rounded-full bg-subtle border-2 border-divider items-center justify-center">
                    <Icon size={16} className="text-accent" />
                  </div>

                  <div
                    className="bg-card rounded-xl border border-divider p-5 sm:p-6"
                    style={{ boxShadow: 'var(--shadow)' }}
                  >
                    {/* Top row */}
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                      <div className="flex flex-wrap gap-2">
                        <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${cfg.color}`}>
                          {cfg.label[lang]}
                        </span>
                        {exp.workType && (
                          <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-subtle text-ink-2 border border-divider">
                            {exp.workType[lang]}
                          </span>
                        )}
                      </div>
                      {(exp.year || exp.date) && (
                        <span className="text-xs text-ink-3 whitespace-nowrap">
                          {exp.date ?? exp.year}
                        </span>
                      )}
                    </div>

                    {/* Title */}
                    <h3 className="text-base sm:text-lg font-semibold text-ink leading-snug mb-1">
                      {exp.title[lang]}
                    </h3>

                    {/* Role + org */}
                    <p className="text-sm text-accent font-medium mb-1">
                      {exp.role[lang]}
                      {exp.organization && (
                        <span className="text-ink-3 font-normal"> · {exp.organization}</span>
                      )}
                    </p>

                    {/* Status */}
                    <p className="text-xs text-ink-3 mb-3">{exp.status[lang]}</p>

                    {/* Description */}
                    <p className="text-sm text-ink-2 leading-relaxed mb-4">
                      {exp.description[lang]}
                    </p>

                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs px-2.5 py-1 rounded-md bg-subtle border border-divider text-ink-2"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
