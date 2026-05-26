'use client'
import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { BookOpen, CheckCircle, Activity, Cpu } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import GlassCard from '../ui/GlassCard'

const caseStudies = {
  "job-requisition-rag": {
    title: "Building a Multi-Agent AI System for Job Requisition Automation",
    project: "Agentic RAG · Workday Integration",
    problem: "Manual job requisition workflows were slow and error-prone, with no structured generation or downstream platform integration.",
    constraints: [
      "Workday API had strict schema requirements — outputs had to be structured exactly",
      "LLMs alone produced hallucinated or generic JD content without grounding",
      "Latency budget required retrieval + generation under 3 seconds",
    ],
    architectureDecisions: "Chose multi-agent design so ingestion, retrieval, reasoning, and Workday sync agents could be tested and scaled independently. Used chunked embeddings with metadata filtering for domain-specific precision retrieval. Prompt templates were structured with explicit role, context, and output schema to reduce drift.",
    tradeoffs: [
      "Multi-agent adds orchestration complexity but enables independent upgrades per agent",
      "Vector search adds latency but cuts hallucination rate significantly",
      "Strict prompt templates reduce flexibility but dramatically improve output consistency for structured JD fields",
    ],
    results: [
      "Hallucination rate reduced via retrieval grounding",
      "Sub-3s end-to-end execution target met",
      "Workday integration enabled fully automated requisition creation",
      "Reusable RAG pipeline adopted across other HR workflows",
    ],
  },
  "aws-serverless": {
    title: "AWS Serverless Event Processing: Architecture Decisions & Tradeoffs",
    project: "AWS Serverless · EventBridge · Lambda · Firehose",
    problem: "Legacy monolithic pipelines had scaling bottlenecks and high idle infrastructure costs under variable load.",
    constraints: [
      "Variable throughput meant fixed compute was wasteful",
      "Downstream systems needed protection from burst traffic",
      "Deployment independence was required across data pipeline stages",
    ],
    architectureDecisions: "Chose fully serverless event-driven design using AWS native services. EventBridge decouples producers from consumers. Lambda handles transformation with zero idle cost. Firehose provides micro-batch buffering to protect S3 and analytics layers.",
    tradeoffs: [
      "Serverless cold starts add occasional latency but eliminate idle compute costs",
      "EventBridge adds routing complexity but enables clean decoupling",
      "Firehose buffering improves throughput but adds small delivery delay",
    ],
    results: [
      "~45% infrastructure cost reduction via serverless migration",
      "Horizontally scalable pipeline handling variable throughput",
      "Rate limiting and caching protecting downstream systems",
      "Independent deployments per pipeline stage",
    ],
  },
  "ai-automation": {
    title: "AI Workflow Automation Platform: CRM & Messaging Integration",
    project: "n8n · WhatsApp API · OpenAI",
    problem: "Sales and support spent 60%+ time on repetitive lead qualification and CRM entries.",
    constraints: [
      "WhatsApp API rate limits and strict messaging guidelines required queue management",
      "OpenAI classification latency needed to be hidden from synchronous webhooks",
      "Data sync needed to be idempotent to prevent duplicate lead entries in CRM",
    ],
    architectureDecisions: "Built n8n workflows connecting WhatsApp Business API, CRM webhooks, and OpenAI to automate lead capture, qualification, and intelligent responses. Used a Redis queue for processing WhatsApp events asynchronously to guarantee delivery within API limits.",
    tradeoffs: [
      "Asynchronous workflow adds slight latency but guarantees zero dropped events",
      "n8n visual editing simplifies maintenance at the expense of pure code flexibility",
      "Strict routing restricts LLM creativity but ensures high qualification accuracy",
    ],
    results: [
      "50%+ manual support effort eliminated",
      "Instant real-time CRM updates on qualifying actions",
      "98% accuracy in automated lead tagging and categorizations",
    ],
  },
  "full-stack-saas": {
    title: "Full Stack AI SaaS Dashboard with RAG and Fine-Grained Auth",
    project: "React · Node.js · MongoDB · JWT · RBAC",
    problem: "Enterprise clients required a unified interface for custom data queries with strict multi-tenant privacy.",
    constraints: [
      "Secure separation of admin, manager, and viewer roles with RBAC",
      "Contextual database queries had to stay within strict tenant boundaries",
      "System performance needed to handle real-time data sync across tens of clients",
    ],
    architectureDecisions: "Implemented a full-stack dashboard with React, Express, and MongoDB. Embedded a custom RAG chatbot scoped entirely to the logged-in user's tenant context. Designed a secure JWT + cookie-based RBAC authentication system.",
    tradeoffs: [
      "Client-side state management is highly responsive but adds frontend bundle size",
      "Context isolation in vector storage prevents leakage but increases query mapping complexity",
      "Structured MongoDB schema simplifies RBAC audits but limits schema modifications",
    ],
    results: [
      "Secure enterprise-ready authorization with full audit logging",
      "In-context RAG chatbot delivering grounded, tenant-isolated insights",
      "Optimized index queries yielding sub-100ms dashboard load times",
    ],
  }
};

export default function CaseStudy() {
  const [activeCaseStudy, setActiveCaseStudy] = useState<string>("job-requisition-rag");
  const [activeTab, setActiveTab] = useState<number>(0);

  useEffect(() => {
    const handler = (e: Event) => {
      const customEvent = e as CustomEvent;
      if (customEvent.detail && customEvent.detail.id) {
        setActiveCaseStudy(customEvent.detail.id);
        setActiveTab(0); // reset active tab to first section
      }
    };
    window.addEventListener("openCaseStudy", handler);
    return () => window.removeEventListener("openCaseStudy", handler);
  }, []);

  const study = caseStudies[activeCaseStudy as keyof typeof caseStudies] || caseStudies["job-requisition-rag"];

  const sections = [
    { heading: "The Problem", content: study.problem },
    { heading: "Constraints", list: study.constraints },
    { heading: "Architecture Decisions", content: study.architectureDecisions },
    { heading: "Key Tradeoffs", list: study.tradeoffs },
    { heading: "Results", list: study.results },
  ];

  return (
    <section id="casestudy" className="py-20 bg-background relative overflow-hidden">
      {/* Background highlights */}
      <div className="absolute bottom-10 right-10 w-[300px] h-[300px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <SectionHeading 
          eyebrow="Deep Dive" 
          title="Engineering Case Study" 
          subtitle="Exploring the critical architectural decisions and real-world tradeoffs made under production pressure."
        />

        <GlassCard glow="blue" className="mt-12 p-8 border border-border">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-border pb-6">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-lg bg-accent/10 text-accent">
                <BookOpen className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold text-xl text-white font-sans">{study.title}</h3>
                <p className="text-xs text-muted mt-1">Project: <span className="text-accent">{study.project}</span></p>
              </div>
            </div>
          </div>

          {/* Dynamic Sections Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8">
            {/* Tabs List */}
            <div className="flex md:flex-col overflow-x-auto md:overflow-x-visible gap-2 md:col-span-1 border-b md:border-b-0 md:border-r border-border pb-4 md:pb-0 md:pr-4">
              {sections.map((sec, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTab(idx)}
                  className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 whitespace-nowrap md:whitespace-normal cursor-pointer ${
                    activeTab === idx 
                      ? 'bg-accent/10 text-accent border-l-2 border-accent' 
                      : 'text-muted hover:text-white hover:bg-surface'
                  }`}
                >
                  {sec.heading}
                </button>
              ))}
            </div>

            {/* Tab Panel */}
            <div className="md:col-span-3 min-h-[220px] flex flex-col justify-between">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-4"
                >
                  <h4 className="text-lg font-semibold text-white">
                    {sections[activeTab].heading}
                  </h4>
                  {sections[activeTab].content ? (
                    <p className="text-sm text-muted leading-relaxed font-sans">
                      {sections[activeTab].content}
                    </p>
                  ) : (
                    <ul className="space-y-2.5 text-sm text-muted font-sans">
                      {sections[activeTab].list?.map((item, lIdx) => (
                        <li key={lIdx} className="flex items-start gap-2">
                          <span className="text-accent mt-1">▸</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </motion.div>
              </AnimatePresence>

              {/* Bottom statistics relative to current tab */}
              <div className="border-t border-border pt-6 mt-8 flex flex-wrap gap-6 text-xs text-muted font-mono">
                <span className="flex items-center gap-1.5 text-accentGreen">
                  <CheckCircle className="w-4 h-4" /> Hallucinations Reduced
                </span>
                <span className="flex items-center gap-1.5 text-accent">
                  <Activity className="w-4 h-4" /> Sub-3s Execution Target
                </span>
                <span className="flex items-center gap-1.5 text-accentPurple">
                  <Cpu className="w-4 h-4" /> Multi-Agent Context Routing
                </span>
              </div>
            </div>
          </div>
        </GlassCard>
      </div>
    </section>
  )
}
