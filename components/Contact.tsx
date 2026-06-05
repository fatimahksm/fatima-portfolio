'use client'
import { motion } from 'framer-motion'
import { Mail, MessageCircle, Download } from 'lucide-react'
import { FaLinkedin } from 'react-icons/fa'
import type { Lang } from '@/types'
import { contactContent, sectionLabels } from '@/data/siteData'
import SectionHeader from './SectionHeader'

interface ContactProps {
  lang: Lang
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const iconMap: Record<string, React.FC<any>> = {
  email: Mail,
  whatsapp: MessageCircle,
  linkedin: FaLinkedin,
  cv: Download,
}

const buttonVariants: Record<string, string> = {
  email: 'bg-accent text-page hover:bg-accent-h',
  whatsapp: 'bg-card border border-divider text-ink-2 hover:border-accent hover:text-accent',
  linkedin: 'bg-card border border-divider text-ink-2 hover:border-accent hover:text-accent',
  cv: 'bg-card border border-divider text-ink-2 hover:border-accent hover:text-accent',
}

export default function Contact({ lang }: ContactProps) {
  return (
    <section id="contact" className="py-24 bg-page">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
        <SectionHeader title={sectionLabels.contact[lang]} />

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-ink-2 text-base leading-relaxed mb-10"
        >
          {contactContent.text[lang]}
        </motion.p>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
          className="flex flex-wrap justify-center gap-3"
        >
          {contactContent.buttons.map((btn) => {
            const Icon = iconMap[btn.key]
            const isExternal = !btn.href.startsWith('mailto:') && btn.href !== '/Fatima_Kassem_CV.pdf'
            const isCV = btn.key === 'cv'
            return (
              <motion.a
                key={btn.key}
                variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0, transition: { duration: 0.4 } } }}
                href={btn.href}
                target={isExternal ? '_blank' : undefined}
                rel={isExternal ? 'noopener noreferrer' : undefined}
                download={isCV ? true : undefined}
                className={`inline-flex items-center gap-2 text-sm font-semibold px-5 py-3 rounded-lg transition-all duration-200 ${buttonVariants[btn.key]}`}
              >
                {Icon && <Icon size={16} />}
                {btn[lang]}
              </motion.a>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
