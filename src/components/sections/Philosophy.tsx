'use client'
import SectionHeading from '@/components/ui/SectionHeading'
import { philosophy } from '@/lib/data'

export default function Philosophy() {
  return (
    <section className="py-20 relative bg-background/50">
      <div className="max-w-6xl mx-auto px-4">
        <SectionHeading eyebrow="Mindset" title="Engineering Philosophy" subtitle="Practical guidelines that shape code style, architecture design, and choices." />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {philosophy.map((p) => (
            <div
              key={p.title}
              className="glass border border-border/80 hover:border-white/10 rounded-2xl p-6 transition-all duration-300 flex flex-col gap-4"
            >
              <div className="text-3xl">{p.icon}</div>
              <div className="space-y-2">
                <h4 className="font-semibold text-base text-white font-sans">{p.title}</h4>
                <p className="text-xs sm:text-sm text-muted leading-relaxed font-sans">{p.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
