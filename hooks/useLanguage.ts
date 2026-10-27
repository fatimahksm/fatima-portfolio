'use client'
import { useState, useEffect } from 'react'
import type { Lang } from '@/types'

export function useLanguage() {
  const [lang, setLang] = useState<Lang>('en')

  useEffect(() => {
    const stored = localStorage.getItem('lang') as Lang | null
    if (stored === 'en' || stored === 'fr') {
      setLang(stored)
    }
  }, [])

  // Keep <html lang> in step so screen readers and crawlers read the right language
  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  function toggleLang() {
    const next: Lang = lang === 'en' ? 'fr' : 'en'
    setLang(next)
    localStorage.setItem('lang', next)
  }

  return { lang, toggleLang }
}
