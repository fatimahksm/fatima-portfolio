'use client'
import { useTheme } from '@/hooks/useTheme'
import { useLanguage } from '@/hooks/useLanguage'
import ScrollProgress from './ScrollProgress'
import BackToTop from './BackToTop'
import Navbar from './Navbar'
import Hero from './Hero'
import About from './About'
import Experience from './Experience'
import Projects from './Projects'
import Skills from './Skills'
import Education from './Education'
import Contact from './Contact'
import Footer from './Footer'

export default function Portfolio() {
  const { theme, toggleTheme, mounted } = useTheme()
  const { lang, toggleLang } = useLanguage()

  return (
    <>
      <ScrollProgress />
      <Navbar
        theme={theme}
        toggleTheme={toggleTheme}
        lang={lang}
        toggleLang={toggleLang}
        mounted={mounted}
      />
      <main>
        <Hero lang={lang} />
        <About lang={lang} />
        <Experience lang={lang} />
        <Projects lang={lang} />
        <Skills lang={lang} />
        <Education lang={lang} />
        <Contact lang={lang} />
      </main>
      <Footer lang={lang} />
      <BackToTop />
    </>
  )
}
