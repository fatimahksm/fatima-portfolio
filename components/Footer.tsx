'use client'
import type { Lang } from '@/types'
import { navItems, personalInfo, commonLinks } from '@/data/siteData'

interface FooterProps {
  lang: Lang
}

export default function Footer({ lang }: FooterProps) {
  const year = new Date().getFullYear()

  function scrollTo(id: string) {
    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }
    const el = document.getElementById(id)
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 72
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <footer className="border-t border-divider bg-subtle py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid sm:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="text-base font-bold text-ink mb-1">
              {personalInfo.name}
            </div>
            <div className="text-sm text-ink-2">{personalInfo.title[lang]}</div>
          </div>

          {/* Quick links */}
          <div>
            <div className="text-xs font-semibold text-ink-3 uppercase tracking-widest mb-3">
              {lang === 'en' ? 'Quick Links' : 'Liens Rapides'}
            </div>
            <nav className="flex flex-col gap-2">
              {navItems.slice(0, 4).map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className="text-sm text-ink-2 hover:text-accent transition-colors duration-200 text-left"
                >
                  {item[lang]}
                </button>
              ))}
            </nav>
          </div>

          {/* More links */}
          <div>
            <div className="text-xs font-semibold text-ink-3 uppercase tracking-widest mb-3">
              {lang === 'en' ? 'More' : 'Plus'}
            </div>
            <nav className="flex flex-col gap-2">
              {navItems.slice(4).map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className="text-sm text-ink-2 hover:text-accent transition-colors duration-200 text-left"
                >
                  {item[lang]}
                </button>
              ))}
              <a
                href={commonLinks.emailLink}
                className="text-sm text-ink-2 hover:text-accent transition-colors duration-200"
              >
                {commonLinks.email}
              </a>
            </nav>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-divider pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-ink-3">
            © {year} {personalInfo.name}. {lang === 'en' ? 'All rights reserved.' : 'Tous droits réservés.'}
          </p>
          <p className="text-xs text-ink-3">
            {lang === 'en' ? 'Built with Next.js & Tailwind CSS' : 'Construit avec Next.js & Tailwind CSS'}
          </p>
        </div>
      </div>
    </footer>
  )
}
