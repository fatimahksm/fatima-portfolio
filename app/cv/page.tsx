import type { Metadata } from 'next'
import CV from '@/components/CV'

export const metadata: Metadata = {
  title: 'Fatima Kassem — CV',
  description: 'Curriculum Vitae of Fatima Kassem, Full Stack Web & Mobile Developer based in Lebanon.',
}

export default function CVPage() {
  return <CV />
}
