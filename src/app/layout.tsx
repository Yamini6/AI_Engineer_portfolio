import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Yamini Kandrekula | Senior AI Full Stack Engineer',
  description: 'Senior AI Full Stack Engineer with 6+ years building RAG pipelines, AWS serverless architectures, LangChain agents, and production full-stack systems.',
  keywords: 'Senior AI Engineer, Full Stack Engineer, GenAI Engineer, AWS Serverless Engineer, RAG Engineer, LangChain Developer, Node.js, React, TypeScript, OpenAI',
  authors: [{ name: 'Yamini Kandrekula' }],
  openGraph: {
    title: 'Yamini Kandrekula | Senior AI Full Stack Engineer',
    description: 'Building production AI systems, RAG pipelines, and AWS serverless architectures.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="noise antialiased">
        {children}
      </body>
    </html>
  )
}
