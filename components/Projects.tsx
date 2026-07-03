'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Lock } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'
import type { Lang, Project } from '@/types'
import { projects, sectionLabels } from '@/data/siteData'
import SectionHeader from './SectionHeader'
import ProjectModal from './ProjectModal'

interface ProjectsProps {
  lang: Lang
}

const badgeStyles: Record<Project['badge'], { label: { en: string; fr: string }; style: string }> = {
  client: { label: { en: 'Client Project', fr: 'Projet Client' }, style: 'bg-stone-100 text-stone-600 dark:bg-stone-800/50 dark:text-stone-300' },
  team: { label: { en: 'Team Project', fr: 'Projet en Équipe' }, style: 'bg-slate-100 text-slate-600 dark:bg-slate-800/40 dark:text-slate-300' },
  solo: { label: { en: 'Solo Project', fr: 'Projet Individuel' }, style: 'bg-neutral-100 text-neutral-600 dark:bg-neutral-800/40 dark:text-neutral-300' },
  university: { label: { en: 'University Project', fr: 'Projet Universitaire' }, style: 'bg-violet-100/80 text-violet-700 dark:bg-violet-900/20 dark:text-violet-300' },
  confidential: { label: { en: 'Confidential', fr: 'Confidentiel' }, style: 'bg-zinc-100 text-zinc-600 dark:bg-zinc-800/50 dark:text-zinc-300' },
}

// Abstract placeholder visual per project
function ProjectVisual({ gradient, badge }: { gradient: string; badge: Project['badge'] }) {
  const icons: Record<Project['badge'], string> = {
    client: '🛒',
    team: '⚡',
    solo: '🌿',
    university: '🎓',
    confidential: '🔒',
  }
  return (
    <div className={`h-36 w-full rounded-t-xl bg-gradient-to-br ${gradient} flex items-center justify-center relative overflow-hidden`}>
      {/* Abstract lines */}
      <svg viewBox="0 0 200 80" className="absolute inset-0 w-full h-full opacity-20" aria-hidden="true">
        <line x1="0" y1="20" x2="200" y2="40" stroke="currentColor" strokeWidth="0.8" />
        <line x1="0" y1="50" x2="200" y2="20" stroke="currentColor" strokeWidth="0.8" />
        <circle cx="160" cy="25" r="20" stroke="currentColor" strokeWidth="0.8" fill="none" />
        <rect x="30" y="30" width="30" height="30" rx="4" stroke="currentColor" strokeWidth="0.8" fill="none" />
      </svg>
      <span className="text-3xl relative z-10" role="img" aria-hidden="true">{icons[badge]}</span>
    </div>
  )
}

export default function Projects({ lang }: ProjectsProps) {
  const [selected, setSelected] = useState<Project | null>(null)

  return (
    <section id="projects" className="py-24 bg-subtle">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeader title={sectionLabels.projects[lang]} />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {projects.map((project) => {
            const badge = badgeStyles[project.badge]
            return (
              <motion.div
                key={project.id}
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
                className="bg-card rounded-xl border border-divider overflow-hidden flex flex-col group hover:border-accent/40 transition-colors duration-300"
                style={{ boxShadow: 'var(--shadow)' }}
              >
                <ProjectVisual gradient={project.gradient} badge={project.badge} />

                <div className="p-5 flex flex-col flex-1">
                  {/* Badges row */}
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${badge.style}`}>
                      {badge.label[lang]}
                    </span>
                    {project.year ? (
                      <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-subtle text-ink-2 border border-divider">
                        {project.year}
                      </span>
                    ) : (
                      <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-subtle text-ink-2 border border-divider">
                        {project.status[lang]}
                      </span>
                    )}
                  </div>

                  {/* Name */}
                  <h3 className="text-base font-semibold text-ink mb-2 leading-snug">
                    {project.name[lang]}
                  </h3>

                  {/* Short description */}
                  <p className="text-sm text-ink-2 leading-relaxed mb-4 flex-1 line-clamp-3">
                    {project.description[lang]}
                  </p>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.technologies.slice(0, 3).map((t) => (
                      <span key={t} className="text-xs px-2 py-0.5 rounded-md bg-subtle border border-divider text-ink-3">
                        {t}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="text-xs px-2 py-0.5 rounded-md bg-subtle border border-divider text-ink-3">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  {/* View Details + code link / private note */}
                  <div className="flex items-center justify-between gap-2">
                    <button
                      onClick={() => setSelected(project)}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent hover:text-accent-h transition-colors duration-200"
                    >
                      <ExternalLink size={13} />
                      {sectionLabels.viewDetails[lang]}
                    </button>

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.name[lang]} — GitHub`}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-ink-2 hover:text-ink transition-colors duration-200"
                      >
                        <FaGithub size={14} />
                        GitHub
                      </a>
                    )}
                    {project.privateCode && (
                      <span className="inline-flex items-center gap-1 text-[11px] font-medium text-ink-3">
                        <Lock size={11} />
                        {sectionLabels.privateCode[lang]}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>

      <ProjectModal project={selected} lang={lang} onClose={() => setSelected(null)} />
    </section>
  )
}
