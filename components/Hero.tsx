'use client'
import { motion } from 'framer-motion'
import { MapPin, Download, Mail, FolderOpen } from 'lucide-react'
import type { Lang } from '@/types'
import { heroContent, personalInfo, commonLinks } from '@/data/siteData'
import TypingText from './TypingText'

interface HeroProps {
  lang: Lang
}

// Abstract decorative SVG for the hero
function AbstractVisual() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <svg
        viewBox="0 0 400 400"
        className="w-72 h-72 md:w-80 md:h-80 opacity-60"
        fill="none"
        aria-hidden="true"
      >
        {/* Outer ring */}
        <circle cx="200" cy="200" r="180" stroke="var(--accent)" strokeWidth="0.8" strokeDasharray="8 6" opacity="0.4" />
        {/* Middle ring */}
        <circle cx="200" cy="200" r="130" stroke="var(--accent)" strokeWidth="0.8" opacity="0.25" />
        {/* Inner circle */}
        <circle cx="200" cy="200" r="80" fill="var(--subtle)" />
        <circle cx="200" cy="200" r="80" stroke="var(--accent)" strokeWidth="1" opacity="0.5" />
        {/* Code brackets */}
        <text x="162" y="215" fontSize="42" fontWeight="300" fill="var(--accent)" opacity="0.9" fontFamily="monospace">&lt;/&gt;</text>
        {/* Dots */}
        <circle cx="200" cy="52" r="4" fill="var(--accent)" opacity="0.6" />
        <circle cx="340" cy="160" r="3" fill="var(--accent)" opacity="0.4" />
        <circle cx="316" cy="316" r="4" fill="var(--accent)" opacity="0.5" />
        <circle cx="84" cy="316" r="3" fill="var(--accent)" opacity="0.4" />
        <circle cx="60" cy="160" r="4" fill="var(--accent)" opacity="0.6" />
        {/* Corner accents */}
        <line x1="30" y1="30" x2="60" y2="30" stroke="var(--accent)" strokeWidth="1.5" opacity="0.5" />
        <line x1="30" y1="30" x2="30" y2="60" stroke="var(--accent)" strokeWidth="1.5" opacity="0.5" />
        <line x1="370" y1="30" x2="340" y2="30" stroke="var(--accent)" strokeWidth="1.5" opacity="0.5" />
        <line x1="370" y1="30" x2="370" y2="60" stroke="var(--accent)" strokeWidth="1.5" opacity="0.5" />
        <line x1="30" y1="370" x2="60" y2="370" stroke="var(--accent)" strokeWidth="1.5" opacity="0.5" />
        <line x1="30" y1="370" x2="30" y2="340" stroke="var(--accent)" strokeWidth="1.5" opacity="0.5" />
        <line x1="370" y1="370" x2="340" y2="370" stroke="var(--accent)" strokeWidth="1.5" opacity="0.5" />
        <line x1="370" y1="370" x2="370" y2="340" stroke="var(--accent)" strokeWidth="1.5" opacity="0.5" />
      </svg>
    </div>
  )
}

export default function Hero({ lang }: HeroProps) {
  const { heading, typingTexts, buttons } = heroContent

  function scrollTo(id: string) {
    const el = document.getElementById(id)
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 72
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-page"
    >
      {/* Soft background gradient */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 70% 60% at 80% 40%, var(--subtle) 0%, transparent 70%)',
        }}
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 w-full py-24 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left: Text content */}
          <div>
            {/* Location pill */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-1.5 text-xs font-medium text-ink-2 bg-subtle border border-divider rounded-full px-3 py-1.5 mb-6"
            >
              <MapPin size={12} className="text-accent" />
              {personalInfo.location}
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-ink leading-[1.18] tracking-tight mb-6"
            >
              {heading[lang]}
            </motion.h1>

            {/* Typing text */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-base sm:text-lg font-medium text-accent mb-8 h-7"
            >
              <TypingText texts={typingTexts[lang]} />
            </motion.div>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.55 }}
              className="flex flex-wrap gap-3"
            >
              <button
                onClick={() => scrollTo('projects')}
                className="inline-flex items-center gap-2 bg-accent text-page text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-accent-h transition-colors duration-200"
              >
                <FolderOpen size={16} />
                {buttons.viewProjects[lang]}
              </button>

              <button
                onClick={() => scrollTo('contact')}
                className="inline-flex items-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-lg border border-divider text-ink-2 hover:border-accent hover:text-accent transition-all duration-200"
              >
                <Mail size={16} />
                {buttons.contactMe[lang]}
              </button>

              <a
                href={commonLinks.cv}
                download
                className="inline-flex items-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-lg border border-divider text-ink-2 hover:border-accent hover:text-accent transition-all duration-200"
              >
                <Download size={16} />
                {buttons.downloadCV[lang]}
              </a>
            </motion.div>
          </div>

          {/* Right: Abstract visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            className="hidden lg:flex justify-center items-center"
          >
            <AbstractVisual />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
      >
        <span className="text-xs text-ink-3 tracking-widest uppercase">scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-px h-8 bg-gradient-to-b from-accent to-transparent"
        />
      </motion.div>
    </section>
  )
}
