'use client'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { personalInfo } from '@/lib/data'

const links = [
  { href: '#about', label: 'About' },
  { href: '#stack', label: 'Stack' },
  { href: '#projects', label: 'Projects' },
  { href: '#architecture', label: 'Architecture' },
  { href: '#casestudy', label: 'Case Study' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass py-3' : 'py-5 bg-transparent'}`}>
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
        <a href="#" className="text-xl font-bold font-mono tracking-wider gradient-text">
          YK.
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <a
            href={personalInfo.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium border border-border px-4 py-2 rounded-lg text-white hover:border-white transition-colors"
          >
            Resume
          </a>
          <a
            href="#contact"
            className="text-sm font-medium bg-accent text-background px-4 py-2 rounded-lg hover:bg-accent/80 font-semibold transition-colors"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile */}
        <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden text-white" aria-label="Toggle Menu">
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="absolute top-full left-0 right-0 glass border-t border-border/80 flex flex-col p-6 gap-4 md:hidden">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-muted hover:text-white transition-colors text-base font-medium"
            >
              {link.label}
            </a>
          ))}
          <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-border">
            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-center border border-border py-2.5 rounded-lg text-white hover:border-white transition-colors"
            >
              Resume
            </a>
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="text-center bg-accent text-background py-2.5 rounded-lg hover:bg-accent/80 font-semibold transition-colors"
            >
              Hire Me
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
