import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SystemTerminal from './components/SystemTerminal';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Background3D from './components/Background3D';

export default function App() {
  return (
    <div className="min-h-screen bg-[#070a12] text-slate-100 relative selection:bg-sky-500/20 selection:text-sky-300 overflow-x-hidden">
      {/* Dynamic Background System */}
      <Background3D />

      {/* Main Page Content - Clean Full Viewport Flow */}
      <div className="relative z-10 flex flex-col min-h-screen w-full">
        <Navbar />
        <main className="flex-grow w-full">
          <Hero />
          <SystemTerminal />
          <Experience />
          <Projects />
          <Skills />
          <Education />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}
