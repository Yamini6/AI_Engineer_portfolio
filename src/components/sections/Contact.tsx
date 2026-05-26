'use client'
import { Mail, Download } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'
import { personalInfo } from '@/lib/data'

const LinkedinIcon = ({ className = "w-5 h-5" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" rx="1" />
    <circle cx="4" cy="4" r="2" />
  </svg>
)

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-background relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-accent/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 text-center relative z-10 space-y-10">
        <SectionHeading eyebrow="Contact" title="Let&apos;s Build Something Scalable" subtitle="Open to Senior •I, Full Stack, and Cloud solution engineering roles globally." />

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
          <a
            href={`mailto:${personalInfo.email}`}
            className="flex items-center justify-center gap-3 bg-surface hover:bg-surfaceHover border border-border hover:border-white/10 px-6 py-4 rounded-xl text-muted hover:text-white font-medium transition-all"
          >
            <Mail className="w-5 h-5 text-accent" />
            Send Email
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 bg-surface hover:bg-surfaceHover border border-border hover:border-white/10 px-6 py-4 rounded-xl text-muted hover:text-white font-medium transition-all"
          >
            <LinkedinIcon className="w-5 h-5 text-accentGreen" />
            LinkedIn Profile
          </a>
          <a
            href={personalInfo.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 bg-surface hover:bg-surfaceHover border border-border hover:border-white/10 px-6 py-4 rounded-xl text-muted hover:text-white font-medium transition-all"
          >
            <Download className="w-5 h-5 text-accentPurple" />
            Download Resume
          </a>
        </div>

        <div className="text-xs sm:text-sm text-muted font-mono pt-4">
          📍 Hyderabad, India &nbsp;•&nbsp; Open to remote & hybrid roles globally
        </div>
      </div>
    </section>
  )
}
