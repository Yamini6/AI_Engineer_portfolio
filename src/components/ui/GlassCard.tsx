import { cn } from '@/lib/utils'
import { ReactNode } from 'react'

interface Props {
  children: ReactNode
  className?: string
  glow?: 'blue' | 'green' | 'purple' | 'none'
}

export default function GlassCard({ children, className, glow = 'none' }: Props) {
  const glowMap = {
    blue: 'glow-blue',
    green: 'glow-green',
    purple: 'glow-purple',
    none: '',
  }
  return (
    <div className={cn('glass rounded-2xl p-6', glowMap[glow], className)}>
      {children}
    </div>
  )
}
