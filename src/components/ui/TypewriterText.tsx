'use client'
import { useEffect, useState } from 'react'

const phrases = [
  'Senior AI Full Stack Engineer',
  'RAG Pipeline Architect',
  'AWS Serverless Engineer',
  'LangChain Developer',
  'GenAI Systems Builder',
]

export default function TypewriterText() {
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = phrases[phraseIndex]
    const timeout = setTimeout(() => {
      if (!deleting) {
        setText(current.slice(0, text.length + 1))
        if (text.length === current.length) {
          setTimeout(() => setDeleting(true), 2000)
        }
      } else {
        setText(current.slice(0, text.length - 1))
        if (text.length === 0) {
          setDeleting(false)
          setPhraseIndex((i) => (i + 1) % phrases.length)
        }
      }
    }, deleting ? 40 : 80)
    return () => clearTimeout(timeout)
  }, [text, deleting, phraseIndex])

  return (
    <span className="inline-block min-h-[1.5em] font-mono text-accent">
      {text}
      <span className="animate-[pulse_1s_infinite] ml-1">|</span>
    </span>
  )
}
