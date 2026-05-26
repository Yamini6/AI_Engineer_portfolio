'use client'
import SectionHeading from '@/components/ui/SectionHeading'
import GlassCard from '@/components/ui/GlassCard'

const highlights = [
  { label: '6+', desc: 'Years Experience' },
  { label: '4', desc: 'Companies' },
  { label: '3+', desc: 'Years AI & Agentic' },
  { label: '3', desc: 'Awards Won' },
]

const coreSkills = [
  'TypeScript / JavaScript', 'React & Next.js', 'Node.js & Express',
  'AWS Serverless (Lambda, EventBridge, S3, Firehose)',
  'AI / LLM Integration', 'LangChain & RAG Pipelines',
  'Prompt Engineering', 'Vector Databases',
  'n8n Workflow Automation', 'Event-Driven Architecture',
  'MongoDB & SQL', 'REST APIs & GraphQL',
]

export default function About() {
  return (
    <section id="about" className="py-20 relative bg-background">
      <div className="max-w-6xl mx-auto px-4">
        <SectionHeading eyebrow="About Me" title="Background & Engineering Core" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          {/* Left: Bio */}
          <div className="space-y-6 flex flex-col justify-between">
            <div className="space-y-6 text-muted text-sm sm:text-base leading-relaxed">
              <p>
                I&apos;m a Senior AI Full Stack Engineer with 6+ years of experience delivering production-grade systems across fintech, HR tech, and enterprise software. Based in Hyderabad, India, currently at Applaud.
              </p>
              <p>
                My work sits at the intersection of AI/LLM engineering and cloud-native architecture. I build RAG pipelines, multi-agent systems, and AWS serverless workflows that are designed to scale and stay reliable in production.
              </p>
              <p>
                Beyond building features, I care deeply about engineering fundamentals — clean APIs, modular components, proper evaluation strategies for AI systems, and architectures that survive contact with real-world scale.
              </p>
              <p className="font-mono text-accent text-xs">
                Recognized with Spot Award and GRACIAS Award for high-impact engineering contributions.
              </p>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 border-t border-border pt-8">
              {highlights.map((h) => (
                <div key={h.desc} className="space-y-1">
                  <div className="text-2xl font-bold text-white font-mono">{h.label}</div>
                  <div className="text-xs text-muted leading-snug">{h.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Skills grid */}
          <div className="space-y-8">
            <GlassCard glow="purple" className="border border-border/80 p-6 sm:p-8 space-y-6">
              <h3 className="text-lg font-semibold text-white">Core Expertise</h3>
              <div className="flex flex-wrap gap-2.5">
                {coreSkills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-xs font-mono bg-surface rounded-lg text-white border border-border/80"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Education */}
              <div className="border-t border-border pt-6 mt-6 space-y-3">
                <h4 className="text-sm font-semibold text-white font-mono uppercase tracking-wider">Education</h4>
                <div>
                  <div className="text-sm font-medium text-white">B.Tech in Computer Science</div>
                  <div className="text-xs text-muted">Anil Neerukonda Institute of Technology & Sciences</div>
                  <div className="text-xs text-muted">Jan 2016 – Dec 2019</div>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  )
}
