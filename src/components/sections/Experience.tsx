'use client'
import SectionHeading from '@/components/ui/SectionHeading'
import { experience } from '@/lib/data'

export default function Experience() {
  return (
    <section id="experience" className="py-20 relative bg-background/50">
      <div className="max-w-5xl mx-auto px-4">
        <SectionHeading eyebrow="Journey" title="Professional Experience" subtitle="A timeline of Senior and Core engineer contributions inside corporate teams." />

        <div className="mt-16 relative">
          {/* Vertical timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2" />

          <div className="space-y-16">
            {experience.map((job, i) => {
              const isEven = i % 2 === 0
              return (
                <div key={job.company} className="relative flex flex-col md:flex-row items-stretch">
                  {/* Timeline dot */}
                  <div 
                    className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full -translate-x-1/2 top-1.5 border-4 border-background z-10"
                    style={{ backgroundColor: job.color || '#00d4ff' }}
                  />

                  {/* Left / Right alignment wrapper */}
                  <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${isEven ? 'md:pr-12 md:text-right' : 'md:translate-x-full md:pl-12'}`}>
                    <div className="glass rounded-2xl p-6 border border-border relative">
                      <div className={`flex flex-col ${isEven ? 'md:items-end' : 'md:items-start'}`}>
                        <span 
                          className="px-2 py-0.5 text-[10px] font-mono font-medium rounded-full mb-3 inline-block"
                          style={{ backgroundColor: `${job.color}15`, color: job.color }}
                        >
                          {job.period}
                        </span>
                        <h3 className="font-semibold text-lg text-white font-sans">{job.company}</h3>
                        <p className="text-sm text-accent font-medium font-mono mt-0.5">{job.role}</p>
                        <p className="text-xs text-muted font-mono mt-1">📍 {job.location}</p>
                      </div>

                      <ul className={`mt-6 space-y-2.5 text-xs text-muted font-sans text-left ${isEven ? 'md:flex md:flex-col md:items-end' : ''}`}>
                        {job.highlights.map((h) => (
                          <li key={h} className={`flex items-start gap-2 max-w-xl ${isEven ? 'md:justify-end md:text-right' : ''}`}>
                            {!isEven && <span className="text-accent font-semibold mt-0.5">➔</span>}
                            <span>{h}</span>
                            {isEven && <span className="text-accent font-semibold mt-0.5">➔</span>}
                          </li>
                        ))}
                      </ul>

                      <div className={`flex flex-wrap gap-1.5 mt-6 pt-4 border-t border-border/80 ${isEven ? 'md:justify-end' : 'md:justify-start'}`}>
                        {job.tech.map((t) => (
                          <span
                            key={t}
                            className="px-2 py-1 text-[10px] font-mono bg-surface rounded border border-border/80 text-white/80"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
