'use client'
import SectionHeading from '@/components/ui/SectionHeading'
import AnimatedCounter from '@/components/ui/AnimatedCounter'
import { achievements } from '@/lib/data'

const extraAchievements = [
  'Built and deployed production multi-agent AI systems',
  'Awarded Spot Award and GRACIAS Award at LTIMindtree',
  'Designed LLM evaluation frameworks for hallucination reduction',
  'Mentored junior engineers; led comprehensive code reviews',
  'Designed secure RBAC + JWT auth systems at scale',
]

export default function Achievements() {
  return (
    <section className="py-20 relative bg-background">
      <div className="max-w-6xl mx-auto px-4">
        <SectionHeading eyebrow="Impact" title="Metrics & Key Achievements" subtitle="A summary of measurable business value and technology leadership." />

        {/* Metric cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {achievements.map((a) => (
            <div
              key={a.label}
              className="glass border border-border rounded-2xl p-6 flex flex-col justify-between min-h-[160px]"
            >
              <div className="text-3xl sm:text-4xl font-bold text-accent font-mono tracking-tight">
                <AnimatedCounter end={a.value} suffix={a.suffix} />
              </div>
              <div className="space-y-1 mt-4">
                <h4 className="font-semibold text-sm text-white font-sans">{a.label}</h4>
                <p className="text-xs text-muted leading-normal font-sans">{a.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Notable achievements list */}
        <div className="mt-16 glass border border-border rounded-2xl p-8 max-w-3xl mx-auto space-y-6">
          <h4 className="text-sm font-semibold text-white font-mono uppercase tracking-wider">Notable Engineering Achievements</h4>
          <ul className="space-y-3.5 text-sm text-muted font-sans">
            {extraAchievements.map((a) => (
              <li key={a} className="flex items-start gap-3">
                <span className="text-accent font-semibold">✓</span>
                <span className="leading-relaxed">{a}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
