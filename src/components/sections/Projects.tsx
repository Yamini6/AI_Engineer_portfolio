'use client'
import { BookOpen } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'
import { projects } from '@/lib/data'

export default function Projects() {
  return (
    <section id="projects" className="py-20 relative bg-background">
      <div className="max-w-6xl mx-auto px-4">
        <SectionHeading eyebrow="My Work" title="Production Engineering Projects" subtitle="A curation of core designs and AI applications built with precise constraints." />

        <div className="space-y-16 mt-12">
          {projects.map((project) => (
            <div
              key={project.id}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch border border-border/60 bg-surface/10 rounded-3xl overflow-hidden p-6 md:p-8"
            >
              {/* Visual/color panel */}
              <div
                className="lg:col-span-4 rounded-2xl p-6 sm:p-8 flex flex-col justify-between text-black relative"
                style={{ backgroundColor: project.color || '#222222' }}
              >
                <div className="space-y-4">
                  <span className="text-xs font-mono uppercase tracking-widest text-black/60 font-semibold block">
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-bold tracking-tight text-black leading-tight">
                    {project.title}
                  </h3>
                  <p className="text-xs font-mono font-medium text-black/80">
                    {project.tagline}
                  </p>
                </div>

                {/* Action buttons */}
                <div className="flex flex-wrap items-center gap-3 mt-8">
                  <button
                    onClick={() => {
                      document.getElementById("casestudy")?.scrollIntoView({ behavior: "smooth" });
                      window.dispatchEvent(new CustomEvent("openCaseStudy", { detail: { id: project.caseStudyId } }));
                    }}
                    className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-lg text-xs font-mono font-bold hover:bg-black/80 transition-colors cursor-pointer"
                  >
                    <BookOpen className="w-3.5 h-3.5" /> Case Study
                  </button>
                </div>
              </div>

              {/* Content panel */}
              <div className="lg:col-span-8 flex flex-col justify-between space-y-6 lg:pl-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Problem */}
                  <div className="space-y-2">
                    <h4 className="text-xs uppercase font-mono text-accent font-semibold tracking-wider">Problem</h4>
                    <p className="text-sm text-muted leading-relaxed font-sans">{project.problem}</p>
                  </div>

                  {/* Solution */}
                  <div className="space-y-2">
                    <h4 className="text-xs uppercase font-mono text-accentGreen font-semibold tracking-wider">Solution</h4>
                    <p className="text-sm text-muted leading-relaxed font-sans">{project.solution}</p>
                  </div>
                </div>

                {/* Impact + Stack */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-border">
                  <div className="space-y-2">
                    <h4 className="text-xs uppercase font-mono text-white/95 font-semibold tracking-wider">Business Impact</h4>
                    <ul className="space-y-1.5 text-xs text-muted font-sans">
                      {project.impact.map((item) => (
                        <li key={item} className="flex items-start gap-1.5 leading-relaxed">
                          <span className="text-accent">▸</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <h4 className="text-xs uppercase font-mono text-white/95 font-semibold tracking-wider">Tech Stack</h4>
                    <div className="flex flex-wrap gap-1.5">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 text-[11px] font-mono rounded bg-surface border border-border/80 text-white/80"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Architecture */}
                <div className="pt-4 border-t border-border">
                  <h4 className="text-xs uppercase font-mono text-muted/80 tracking-wider">Architecture Flow</h4>
                  <div className="mt-2 bg-[#0c0c0c] border border-border rounded-lg p-3 text-[12px] font-mono text-accentGreen">
                    {project.architecture}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
