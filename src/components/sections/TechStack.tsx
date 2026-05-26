'use client'
import SectionHeading from '@/components/ui/SectionHeading'
import { techStack } from '@/lib/data'

const categoryColors: Record<string, string> = {
  Frontend: '#00d4ff',
  Backend: '#00ff88',
  AI: '#7c3aed',
  'Cloud & AWS': '#ff6b35',
  Automation: '#f59e0b',
  Database: '#ec4899',
}

export default function TechStack() {
  return (
    <section id="stack" className="py-20 bg-background/50 relative">
      <div className="max-w-6xl mx-auto px-4">
        <SectionHeading eyebrow="Expertise" title="Core Technical Stack" subtitle="Structured by specialization layers with estimated production maturity levels." />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {Object.entries(techStack).map(([category, skills]) => {
            const color = categoryColors[category] || '#ffffff'
            return (
              <div key={category} className="glass rounded-2xl p-6 border border-border space-y-6">
                <h3 className="font-semibold text-lg text-white flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full inline-block" style={{ backgroundColor: color }} />
                  {category}
                </h3>

                <div className="space-y-4">
                  {skills.map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex items-center justify-between text-xs sm:text-sm font-mono">
                        <span className="text-muted">{skill.name}</span>
                        <span className="text-white/80">{skill.level}%</span>
                      </div>
                      <div className="h-1 bg-subtle rounded-full overflow-hidden">
                        <div
                          className="h-full rounded-full transition-all duration-500"
                          style={{ backgroundColor: color, width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
