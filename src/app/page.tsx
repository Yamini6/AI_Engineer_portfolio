import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import TechStack from '@/components/sections/TechStack'
import Projects from '@/components/sections/Projects'
import Experience from '@/components/sections/Experience'
import Achievements from '@/components/sections/Achievements'
import Philosophy from '@/components/sections/Philosophy'
import Contact from '@/components/sections/Contact'
import Architecture from '@/components/sections/Architecture'
import CaseStudy from '@/components/sections/CaseStudy'

export default function Home() {
  return (
    <main className="bg-background text-white min-h-screen relative">
      <Navbar />
      <Hero />
      <About />
      <TechStack />
      <Projects />
      <Architecture />
      <CaseStudy />
      <Experience />
      <Achievements />
      <Philosophy />
      <Contact />
      <Footer />
    </main>
  )
}
