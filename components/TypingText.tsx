'use client'
import { useState, useEffect, useRef } from 'react'

interface TypingTextProps {
  texts: string[]
  typingSpeed?: number
  deletingSpeed?: number
  pauseMs?: number
}

export default function TypingText({
  texts,
  typingSpeed = 60,
  deletingSpeed = 35,
  pauseMs = 1800,
}: TypingTextProps) {
  const [displayed, setDisplayed] = useState('')
  const [phase, setPhase] = useState<'typing' | 'pausing' | 'deleting'>('typing')
  const [index, setIndex] = useState(0)
  const charRef = useRef(0)

  useEffect(() => {
    charRef.current = 0
    setDisplayed('')
    setPhase('typing')
  }, [texts])

  useEffect(() => {
    const current = texts[index]

    if (phase === 'typing') {
      if (charRef.current < current.length) {
        const t = setTimeout(() => {
          charRef.current++
          setDisplayed(current.slice(0, charRef.current))
        }, typingSpeed)
        return () => clearTimeout(t)
      } else {
        const t = setTimeout(() => setPhase('deleting'), pauseMs)
        return () => clearTimeout(t)
      }
    }

    if (phase === 'deleting') {
      if (charRef.current > 0) {
        const t = setTimeout(() => {
          charRef.current--
          setDisplayed(current.slice(0, charRef.current))
        }, deletingSpeed)
        return () => clearTimeout(t)
      } else {
        setIndex((prev) => (prev + 1) % texts.length)
        setPhase('typing')
      }
    }
  }, [phase, displayed, index, texts, typingSpeed, deletingSpeed, pauseMs])

  return (
    <span className="inline-flex items-center">
      <span>{displayed}</span>
      <span className="ml-0.5 inline-block w-0.5 h-5 bg-accent align-middle animate-pulse" />
    </span>
  )
}
