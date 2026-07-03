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

const badgeIcons: Record<Project['badge'], string> = {
  client: '🛒',
  team: '⚡',
  solo: '🌿',
  university: '🎓',
  confidential: '🔒',
}

// Project visual: real screenshot if provided, otherwise a device mockup
function ProjectVisual({ project }: { project: Project }) {
  if (project.image) {
    return (
      <div className="h-40 w-full rounded-t-xl overflow-hidden">
        <img
          src={project.image}
          alt={project.name.en}
          className="w-full h-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-500"
        />
      </div>
    )
  }

  const icon = badgeIcons[project.badge]
  const isMobile = project.technologies.some((t) => /react native|flutter|android/i.test(t))

  return (
    <div className={`h-40 w-full rounded-t-xl bg-gradient-to-br ${project.gradient} relative overflow-hidden flex items-end justify-center`}>
      {/* Soft glows */}
      <div className="absolute -top-10 -right-10 w-36 h-36 rounded-full bg-white/40 dark:bg-white/10 blur-2xl" aria-hidden="true" />
      <div className="absolute -bottom-12 -left-12 w-40 h-40 rounded-full bg-white/25 dark:bg-white/5 blur-3xl" aria-hidden="true" />

      {isMobile ? (
        /* Phone mockup */
        <div className="relative z-10 w-24 translate-y-4 rounded-t-[1.35rem] bg-card border border-divider shadow-xl p-1.5 pb-0 group-hover:translate-y-2 transition-transform duration-500">
          <div className="rounded-t-[1rem] bg-subtle h-32 flex flex-col items-center pt-2.5 gap-2.5 overflow-hidden">
            <div className="w-8 h-1 rounded-full bg-divider" />
            <span className="text-2xl" role="img" aria-hidden="true">{icon}</span>
            <div className="w-14 h-1.5 rounded-full bg-divider" />
            <div className="w-9 h-1.5 rounded-full bg-divider" />
            <div className="grid grid-cols-2 gap-1.5 px-2 w-full">
              <div className="h-6 rounded-md bg-card border border-divider" />
              <div className="h-6 rounded-md bg-card border border-divider" />
            </div>
          </div>
        </div>
      ) : (
        /* Browser mockup */
        <div className="relative z-10 w-[80%] translate-y-3 rounded-t-lg bg-card border border-divider shadow-xl overflow-hidden group-hover:translate-y-1.5 transition-transform duration-500">
          <div className="flex items-center gap-1.5 px-3 py-2 border-b border-divider bg-subtle">
            <span className="w-2 h-2 rounded-full bg-rose-300" />
            <span className="w-2 h-2 rounded-full bg-amber-300" />
            <span className="w-2 h-2 rounded-full bg-emerald-300" />
            <span className="ml-2 h-2 flex-1 max-w-[55%] rounded-full bg-divider" />
          </div>
          <div className="px-4 py-3 flex items-center gap-3">
            <span className="text-2xl" role="img" aria-hidden="true">{icon}</span>
            <div className="flex-1 space-y-2">
              <div className="h-2 w-3/4 rounded-full bg-divider" />
              <div className="h-2 w-1/2 rounded-full bg-divider/70" />
            </div>
          </div>
        </div>
      )}
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
                <ProjectVisual project={project} />

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
