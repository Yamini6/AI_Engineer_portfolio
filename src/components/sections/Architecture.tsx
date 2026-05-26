'use client'
import React from 'react'
import { Server, Database, Cpu, Share2, ArrowRight } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import GlassCard from '../ui/GlassCard'

export default function Architecture() {
  return (
    <section id="architecture" className="py-20 bg-background/50 relative overflow-hidden">
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accentPurple/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <SectionHeading 
          eyebrow="Cloud Native" 
          title="AWS Serverless Architecture" 
          subtitle="A decoupled, high-throughput event processing pipeline designed for scale, elasticity, and cost efficiency."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12 items-stretch">
          {/* Node 1: Ingestion */}
          <GlassCard glow="blue" className="flex flex-col gap-4 justify-between h-full border border-border">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-lg bg-accent/10 text-accent">
                  <Share2 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-white">1. Event Ingestion</h3>
                  <p className="text-xs text-muted">Decoupled Sources</p>
                </div>
              </div>
              <p className="text-sm text-muted">
                High-throughput events from real-time news APIs, CRM webhook subscriptions, and active messaging interfaces land on Amazon EventBridge.
              </p>
            </div>
            <div className="bg-surface p-3 rounded-lg border border-border">
              <code className="text-xs text-accent">EventBridge Bus</code>
            </div>
          </GlassCard>

          {/* Node 2: Processing */}
          <GlassCard glow="green" className="flex flex-col gap-4 justify-between h-full border border-border">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-lg bg-accentGreen/10 text-accentGreen">
                  <Cpu className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-white">2. Serverless Compute</h3>
                  <p className="text-xs text-accentGreen">AWS Lambda</p>
                </div>
              </div>
              <p className="text-sm text-muted">
                Event-driven Lambda functions trigger on specific rules. They parse event payloads, run validation, run classification steps, and execute light transforms.
              </p>
            </div>
            <div className="bg-surface p-3 rounded-lg border border-border">
              <code className="text-xs text-accentGreen">Lambda Transformation</code>
            </div>
          </GlassCard>

          {/* Node 3: Storage */}
          <GlassCard glow="purple" className="flex flex-col gap-4 justify-between h-full border border-border">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-lg bg-accentPurple/10 text-accentPurple">
                  <Database className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-white">3. Streaming & Storage</h3>
                  <p className="text-xs text-accentPurple">Kinesis Firehose & S3</p>
                </div>
              </div>
              <p className="text-sm text-muted">
                Processed items stream into Kinesis Firehose for automated micro-batch buffering and partition writes onto scalable storage inside Amazon S3 buckets.
              </p>
            </div>
            <div className="bg-surface p-3 rounded-lg border border-border">
              <code className="text-xs text-accentPurple">Buffered Ingestion ➔ S3</code>
            </div>
          </GlassCard>
        </div>

        {/* Custom SVG Architecture Map */}
        <div className="mt-16 bg-surface/50 border border-border rounded-2xl p-6 md:p-10 flex flex-col items-center">
          <h4 className="text-sm font-mono text-muted mb-6 uppercase tracking-wider">Architecture Data Flow Map</h4>
          <div className="w-full max-w-4xl">
            <svg viewBox="0 0 800 240" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
              <defs>
                <linearGradient id="blue-green" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#00d4ff" />
                  <stop offset="100%" stopColor="#00ff88" />
                </linearGradient>
                <linearGradient id="green-purple" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#00ff88" />
                  <stop offset="100%" stopColor="#7c3aed" />
                </linearGradient>
              </defs>

              {/* Connections with dashed animations */}
              <path d="M160 120 H250" stroke="url(#blue-green)" strokeWidth="3" strokeDasharray="6,4" />
              <path d="M370 120 H460" stroke="url(#green-purple)" strokeWidth="3" strokeDasharray="6,4" />
              <path d="M580 120 H670" stroke="#7c3aed" strokeWidth="3" strokeDasharray="6,4" />

              {/* Steps circles & cards */}
              {/* Ingress Node */}
              <rect x="20" y="70" width="140" height="100" rx="10" fill="#111111" stroke="#00d4ff" strokeWidth="1.5" />
              <circle cx="90" cy="110" r="16" fill="#00d4ff" fillOpacity="0.1" stroke="#00d4ff" strokeWidth="1.5" />
              <path d="M90 102V118M82 110H98" stroke="#00d4ff" strokeWidth="1.5" strokeLinecap="round" />
              <text x="90" y="152" fill="#e5e5e5" fontSize="11" textAnchor="middle" fontFamily="sans-serif">Events / Webhooks</text>

              {/* Router Node */}
              <rect x="230" y="70" width="140" height="100" rx="10" fill="#111111" stroke="#00ff88" strokeWidth="1.5" />
              <circle cx="300" cy="110" r="16" fill="#00ff88" fillOpacity="0.1" stroke="#00ff88" strokeWidth="1.5" />
              <path d="M294 104L306 116M306 104L294 116" stroke="#00ff88" strokeWidth="1.5" strokeLinecap="round" />
              <text x="300" y="152" fill="#e5e5e5" fontSize="11" textAnchor="middle" fontFamily="sans-serif">AWS EventBridge</text>

              {/* Transform Node */}
              <rect x="440" y="70" width="140" height="100" rx="10" fill="#111111" stroke="#7c3aed" strokeWidth="1.5" />
              <circle cx="510" cy="110" r="16" fill="#7c3aed" fillOpacity="0.1" stroke="#7c3aed" strokeWidth="1.5" />
              <path d="M502 110H518M510 102V118" stroke="#7c3aed" strokeWidth="1.5" strokeLinecap="round" />
              <text x="510" y="152" fill="#e5e5e5" fontSize="11" textAnchor="middle" fontFamily="sans-serif">AWS Lambda</text>

              {/* S3 Node */}
              <rect x="640" y="70" width="140" height="100" rx="10" fill="#111111" stroke="#ff6b35" strokeWidth="1.5" />
              <circle cx="710" cy="110" r="16" fill="#ff6b35" fillOpacity="0.1" stroke="#ff6b35" strokeWidth="1.5" />
              <path d="M702 114V106C702 103.8 703.8 102 706 102H714C716.2 102 718 103.8 718 106V114M702 114H718" stroke="#ff6b35" strokeWidth="1.5" strokeLinecap="round" />
              <text x="710" y="152" fill="#e5e5e5" fontSize="11" textAnchor="middle" fontFamily="sans-serif">Amazon S3</text>
            </svg>
          </div>
          <div className="flex gap-6 mt-8 text-xs font-mono text-muted">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 bg-accent rounded-full inline-block" /> Ingest</span>
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 bg-accentGreen rounded-full inline-block" /> Route</span>
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 bg-accentPurple rounded-full inline-block" /> Transform</span>
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 bg-[#ff6b35] rounded-full inline-block" /> Persist</span>
          </div>
        </div>
      </div>
    </section>
  )
}
