'use client'
import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, CheckCircle2 } from 'lucide-react'
import type { Lang, Project } from '@/types'
import { sectionLabels } from '@/data/siteData'

interface ProjectModalProps {
  project: Project | null
  lang: Lang
  onClose: () => void
}

const badgeStyles: Record<Project['badge'], string> = {
  client: 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300',
  team: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300',
  solo: 'bg-stone-100 text-stone-700 dark:bg-stone-800/50 dark:text-stone-300',
  university: 'bg-violet-100 text-violet-800 dark:bg-violet-900/30 dark:text-violet-300',
  confidential: 'bg-zinc-100 text-zinc-700 dark:bg-zinc-800/60 dark:text-zinc-300',
}

export default function ProjectModal({ project, lang, onClose }: ProjectModalProps) {
  // Close on Escape key
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [onClose])

  // Prevent scroll when open
  useEffect(() => {
    if (project) document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [project])

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[80] flex items-center justify-center p-4"
          onClick={onClose}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-ink/40 backdrop-blur-sm" />

          {/* Panel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 10 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            onClick={(e) => e.stopPropagation()}
            className="relative bg-card rounded-2xl border border-divider w-full max-w-xl max-h-[90vh] overflow-y-auto"
            style={{ boxShadow: '0 20px 60px rgba(0,0,0,0.25)' }}
          >
            {/* Header gradient */}
            <div
              className={`h-24 rounded-t-2xl bg-gradient-to-br ${project.gradient} flex items-end px-6 pb-4`}
            >
              <div className="flex flex-wrap gap-2">
                <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${badgeStyles[project.badge]}`}>
                  {project.type[lang]}
                </span>
                {project.year && (
                  <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-card/70 text-ink-2 border border-divider">
                    {project.year}
                  </span>
                )}
              </div>
            </div>

            {/* Close button */}
            <button
              onClick={onClose}
              aria-label={sectionLabels.close[lang]}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-card/80 border border-divider text-ink-2 hover:text-ink hover:bg-card transition-all duration-200"
            >
              <X size={15} />
            </button>

            {/* Content */}
            <div className="p-6 space-y-5">
              <h2 className="text-xl font-bold text-ink leading-snug">{project.name[lang]}</h2>

              {/* Status */}
              <div>
                <div className="text-xs font-semibold text-ink-3 uppercase tracking-widest mb-1">
                  {sectionLabels.status[lang]}
                </div>
                <p className="text-sm text-ink-2">{project.status[lang]}</p>
              </div>

              {/* Description */}
              <div>
                <p className="text-sm text-ink-2 leading-relaxed">{project.description[lang]}</p>
              </div>

              {/* Role */}
              <div>
                <div className="text-xs font-semibold text-ink-3 uppercase tracking-widest mb-1">
                  {sectionLabels.role[lang]}
                </div>
                <p className="text-sm text-ink-2">{project.role[lang]}</p>
              </div>

              {/* Team */}
              <div>
                <div className="text-xs font-semibold text-ink-3 uppercase tracking-widest mb-1">
                  {sectionLabels.team[lang]}
                </div>
                <p className="text-sm text-ink-2">{project.teamInfo[lang]}</p>
              </div>

              {/* Technologies */}
              <div>
                <div className="text-xs font-semibold text-ink-3 uppercase tracking-widest mb-2">
                  {sectionLabels.technologies[lang]}
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((t) => (
                    <span key={t} className="text-xs px-2.5 py-1 rounded-md bg-subtle border border-divider text-ink-2">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div>
                <div className="text-xs font-semibold text-ink-3 uppercase tracking-widest mb-2">
                  {sectionLabels.features[lang]}
                </div>
                <ul className="space-y-1.5">
                  {project.features[lang].map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-ink-2">
                      <CheckCircle2 size={14} className="text-accent mt-0.5 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
