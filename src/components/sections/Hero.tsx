'use client'
import { ArrowDown, Download } from 'lucide-react'
import TypewriterText from '@/components/ui/TypewriterText'
import { personalInfo } from '@/lib/data'

const LinkedinIcon = ({ className = "w-5 h-5" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" rx="1" />
    <circle cx="4" cy="4" r="2" />
  </svg>
)

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-between items-center relative pt-32 pb-12 overflow-hidden grid-bg">
      {/* Ambient blobs */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px] pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accentPurple/5 rounded-full blur-[100px] pointer-events-none animate-pulse-slow" />

      {/* Top Spacer */}
      <div />

      <div className="max-w-4xl mx-auto px-4 text-center relative z-10 space-y-8 my-auto">
        {/* Status badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent/20 bg-accent/5 text-accent text-xs font-mono font-medium">
          <span className="w-2 h-2 rounded-full bg-accentGreen animate-ping" />
          Available for Senior AI / Full Stack roles
        </div>

        {/* Main headline */}
        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white font-sans leading-tight">
          Hi, I&apos;m <span className="gradient-text font-extrabold">{personalInfo.name}</span>
        </h1>

        {/* Typewriter */}
        <div className="text-xl sm:text-3xl font-semibold">
          <TypewriterText />
        </div>

        {/* Sub-headline */}
        <p className="text-muted text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-sans">
          {personalInfo.subheadline}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <a
            href="#projects"
            className="w-full sm:w-auto text-center bg-accent text-background px-6 py-3.5 rounded-xl font-bold hover:bg-accent/80 transition-colors"
          >
            View Projects
          </a>
          <a
            href={personalInfo.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto text-center border border-border bg-surface/30 text-white px-6 py-3.5 rounded-xl font-medium hover:border-white transition-all flex items-center justify-center gap-2"
          >
            <Download className="w-4 h-4" />
            Download Resume
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto text-center border border-border bg-surface/30 text-muted px-6 py-3.5 rounded-xl font-medium hover:text-white hover:border-white transition-all"
          >
            Contact Me
          </a>
        </div>
      </div>

      {/* Bottom Panel */}
      <div className="w-full text-center relative z-10 mt-12 pb-16">
        {/* Social links */}
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-xs font-mono text-muted">
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors flex items-center gap-2"
          >
            <LinkedinIcon className="w-4.5 h-4.5" /> LinkedIn
          </a>
          <span className="hidden sm:inline text-subtle">•</span>
          <span className="flex items-center gap-2">
            📍 Greater Hyderabad, India
          </span>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 hidden md:flex justify-center">
          <a href="#about" className="text-muted hover:text-accent transition-colors duration-300" aria-label="Scroll down">
            <ArrowDown className="w-6 h-6 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  )
}
