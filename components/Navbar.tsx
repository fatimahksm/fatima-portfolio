'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Sun, Moon, Menu, X } from 'lucide-react'
import type { Lang, Theme } from '@/types'
import { navItems, personalInfo } from '@/data/siteData'

interface NavbarProps {
  theme: Theme
  toggleTheme: () => void
  lang: Lang
  toggleLang: () => void
  mounted: boolean
}

export default function Navbar({ theme, toggleTheme, lang, toggleLang, mounted }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 40)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  function scrollTo(id: string) {
    setMenuOpen(false)
    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }
    const el = document.getElementById(id)
    if (el) {
      const offset = 72
      const top = el.getBoundingClientRect().top + window.scrollY - offset
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'nav-blur' : 'bg-transparent'
        }`}
      >
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 h-[68px] flex items-center justify-end">
          {/* Desktop nav — centered in the bar */}
          <nav className="hidden lg:flex items-center gap-6 absolute left-1/2 -translate-x-1/2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-sm font-medium text-ink-2 hover:text-accent transition-colors duration-200"
              >
                {item[lang]}
              </button>
            ))}
          </nav>

          {/* Controls */}
          <div className="flex items-center gap-2">
            {/* Language toggle */}
            <button
              onClick={toggleLang}
              className="hidden sm:flex text-xs font-semibold tracking-widest text-ink-2 hover:text-accent px-2.5 py-1.5 rounded-md border border-divider hover:border-accent transition-all duration-200"
            >
              {lang === 'en' ? 'FR' : 'EN'}
            </button>

            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="w-9 h-9 flex items-center justify-center rounded-md text-ink-2 hover:text-accent hover:bg-subtle transition-all duration-200"
            >
              {mounted ? (
                theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />
              ) : (
                <span className="w-4 h-4 rounded-full bg-divider block" />
              )}
            </button>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              className="lg:hidden w-9 h-9 flex items-center justify-center rounded-md text-ink-2 hover:text-accent hover:bg-subtle transition-all duration-200"
            >
              <Menu size={20} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile full-screen menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[60] bg-page flex flex-col"
          >
            {/* Header row */}
            <div className="flex items-center justify-between px-6 h-[68px] border-b border-divider">
              <span className="text-base font-semibold text-ink">
                {personalInfo.name}
              </span>
              <div className="flex items-center gap-2">
                <button
                  onClick={toggleLang}
                  className="text-xs font-semibold tracking-widest text-ink-2 hover:text-accent px-2.5 py-1.5 rounded-md border border-divider hover:border-accent transition-all duration-200"
                >
                  {lang === 'en' ? 'FR' : 'EN'}
                </button>
                <button
                  onClick={() => setMenuOpen(false)}
                  aria-label="Close menu"
                  className="w-9 h-9 flex items-center justify-center rounded-md text-ink-2 hover:text-accent hover:bg-subtle transition-all duration-200"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Links */}
            <nav className="flex-1 flex flex-col justify-center px-8">
              {navItems.map((item, i) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.3 }}
                  onClick={() => scrollTo(item.id)}
                  className="text-left text-2xl font-semibold text-ink hover:text-accent py-4 border-b border-divider last:border-0 transition-colors duration-200"
                >
                  {item[lang]}
                </motion.button>
              ))}
            </nav>

            {/* Footer of menu */}
            <div className="px-8 pb-10 text-ink-3 text-sm">
              {personalInfo.name}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
