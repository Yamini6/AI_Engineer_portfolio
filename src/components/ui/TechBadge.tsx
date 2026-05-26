interface Props {
  name: string
  color?: string
}

export default function TechBadge({ name, color = '#222222' }: Props) {
  return (
    <span 
      className="px-3 py-1 text-xs font-mono rounded-full border bg-surface/30 text-white/90"
      style={{ borderColor: color }}
    >
      {name}
    </span>
  )
}
