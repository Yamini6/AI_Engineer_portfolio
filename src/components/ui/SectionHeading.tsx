interface Props {
  eyebrow: string
  title: string
  subtitle?: string
}

export default function SectionHeading({ eyebrow, title, subtitle }: Props) {
  return (
    <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
      <span className="text-xs uppercase tracking-widest text-accent font-mono block">{eyebrow}</span>
      <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">{title}</h2>
      {subtitle && <p className="text-muted text-sm md:text-base leading-relaxed">{subtitle}</p>}
    </div>
  )
}
