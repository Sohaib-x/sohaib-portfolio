import React, { useState, useEffect } from 'react';
import { Server, Menu, X, Download, Mail } from 'lucide-react';
import { personalInfo } from '../data/resumeData';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['hero', 'terminal', 'experience', 'projects', 'skills', 'education', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Overview', href: '#hero', id: 'hero' },
    { name: 'Terminal', href: '#terminal', id: 'terminal' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Education', href: '#education', id: 'education' },
    { name: 'Resume', href: '#contact', id: 'contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#070a12]/90 backdrop-blur-md border-b border-slate-800 shadow-md shadow-black/30 py-3'
          : 'bg-transparent py-4 sm:py-5'
      }`}
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo / Brand */}
          <a href="#hero" className="flex items-center gap-2.5 sm:gap-3 group">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center text-sky-400 group-hover:border-sky-500 transition-colors shadow-sm">
              <Server className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-200 group-hover:scale-105" />
            </div>
            <div>
              <div className="font-bold tracking-tight text-white flex items-center gap-1.5 sm:gap-2 text-sm sm:text-base">
                <span>{personalInfo.name.split(' ')[0]}</span>
                <span className="text-sky-300 font-mono text-[10px] sm:text-xs px-1.5 py-0.5 rounded bg-slate-800 border border-slate-700">
                  SYSADMIN
                </span>
              </div>
              <div className="text-[10px] sm:text-[11px] font-mono text-slate-400 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                <span>NTC Data Center Ops</span>
              </div>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-900/80 border border-slate-800 rounded-full px-3 py-1.5 backdrop-blur-md shadow-sm">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className={`px-3 py-1.5 text-xs font-medium rounded-full transition-colors ${
                  activeSection === link.id
                    ? 'text-white bg-slate-800 shadow-sm font-semibold'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Actions: Resume Download + Direct Connect */}
          <div className="hidden sm:flex items-center gap-2.5">
            <a
              href="/Sohaib_Abdullah_Sadiq_Resume.pdf"
              download="Sohaib_Abdullah_Sadiq_Resume.pdf"
              className="btn-emerald text-xs px-3.5 py-2"
              title="Download PDF Resume"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Resume</span>
            </a>

            <a
              href="#contact"
              className="btn-secondary text-xs px-3.5 py-2"
            >
              <Mail className="w-3.5 h-3.5 text-sky-400" />
              <span>Connect</span>
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-slate-900 border border-slate-700 text-slate-200 hover:bg-slate-800 focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#070a12]/95 backdrop-blur-xl border-b border-slate-800 px-4 pt-3 pb-6 animate-in slide-in-from-top-4 duration-200 shadow-2xl">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3.5 py-2.5 text-sm font-medium rounded-lg transition-colors ${
                  activeSection === link.id
                    ? 'bg-slate-800 text-white font-semibold border-l-2 border-sky-400'
                    : 'text-slate-300 hover:bg-slate-850'
                }`}
              >
                {link.name}
              </a>
            ))}
            
            {/* Mobile Action Buttons */}
            <div className="pt-3 border-t border-slate-800 mt-2 space-y-2">
              <a
                href="/Sohaib_Abdullah_Sadiq_Resume.pdf"
                download="Sohaib_Abdullah_Sadiq_Resume.pdf"
                onClick={() => setMobileMenuOpen(false)}
                className="btn-emerald w-full py-2.5 text-xs font-semibold"
              >
                <Download className="w-4 h-4" />
                <span>DOWNLOAD RESUME (PDF)</span>
              </a>

              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="btn-secondary w-full py-2.5 text-xs font-semibold"
              >
                <Mail className="w-4 h-4 text-sky-400" />
                <span>DIRECT CONNECT</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
