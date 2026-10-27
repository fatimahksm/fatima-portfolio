import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://fatima-portfolio-rose.vercel.app'),
  title: 'Fatima Kassem — Full Stack Web & Mobile Developer | Applied AI',
  description:
    'Portfolio of Fatima Kassem, Full Stack Web & Mobile Developer based in Lebanon. Flutter, Next.js, React, Java Spring Boot, and applied AI — LLM fine-tuning with QLoRA, mBERT routing and retrieval.',
  openGraph: {
    type: 'website',
    title: 'Fatima Kassem — Full Stack Web & Mobile Developer | Applied AI',
    description:
      'Full Stack Web & Mobile Developer based in Lebanon. Flutter, Next.js, React, Java Spring Boot, and applied AI.',
    siteName: 'Fatima Kassem',
    url: 'https://fatima-portfolio-rose.vercel.app',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fatima Kassem — Full Stack Web & Mobile Developer | Applied AI',
    description:
      'Full Stack Web & Mobile Developer based in Lebanon. Flutter, Next.js, React, Java Spring Boot, and applied AI.',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Prevent flash of wrong theme */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t==='dark'){document.documentElement.classList.add('dark')}else if(!t&&window.matchMedia('(prefers-color-scheme: dark)').matches){document.documentElement.classList.add('dark')}}catch(e){}})()`,
          }}
        />
      </head>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  )
}
