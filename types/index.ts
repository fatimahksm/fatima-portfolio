export type Lang = 'en' | 'fr'
export type Theme = 'light' | 'dark'

export interface Project {
  id: string
  name: { en: string; fr: string }
  type: { en: string; fr: string }
  year?: string
  status: { en: string; fr: string }
  workType: { en: string; fr: string }
  technologies: string[]
  description: { en: string; fr: string }
  features: { en: string[]; fr: string[] }
  role: { en: string; fr: string }
  teamInfo: { en: string; fr: string }
  badge: 'client' | 'team' | 'solo' | 'university' | 'confidential'
  gradient: string
  githubUrl?: string
  privateCode?: boolean
  image?: string
}

export interface ExperienceItem {
  id: string
  title: { en: string; fr: string }
  role: { en: string; fr: string }
  organization?: string
  date?: string
  year?: string
  project?: string
  status: { en: string; fr: string }
  workType?: { en: string; fr: string }
  technologies: string[]
  description: { en: string; fr: string }
  badge: 'client' | 'confidential' | 'internship'
}

export interface SkillCategory {
  id: string
  label: { en: string; fr: string }
  skills: string[]
}

export interface EducationItem {
  id: string
  degree: { en: string; fr: string }
  institution: { en: string; fr: string }
  field: { en: string; fr: string }
  year: { en: string; fr: string }
  current: boolean
}

export interface NavItem {
  id: string
  en: string
  fr: string
}
