import GlassCard from './GlassCard'
import TechBadge from './TechBadge'
import { ExternalLink } from 'lucide-react'

const GithubIcon = ({ className = "w-5 h-5" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
)

interface Props {
  title: string
  description: string
  techStack: string[]
  githubUrl: string
  demoUrl: string
  color: string
}

export default function ProjectCard({ title, description, techStack, githubUrl, demoUrl, color }: Props) {
  return (
    <GlassCard className="flex flex-col justify-between h-full border border-border/80 hover:border-white/10 transition-colors" glow="none">
      <div className="space-y-4">
        <div className="flex items-start justify-between">
          <h3 className="font-semibold text-lg text-white group-hover:text-accent transition-colors">{title}</h3>
          <div className="flex items-center gap-2">
            <a href={githubUrl} className="text-muted hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
              <GithubIcon className="w-5 h-5" />
            </a>
            <a href={demoUrl} className="text-muted hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>
        </div>
        <p className="text-sm text-muted leading-relaxed">{description}</p>
      </div>
      <div className="flex flex-wrap gap-2 mt-6">
        {techStack.map((tech) => (
          <TechBadge key={tech} name={tech} color={color} />
        ))}
      </div>
    </GlassCard>
  )
}
