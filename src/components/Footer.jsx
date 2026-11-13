import React from 'react';
import { ArrowUp, Server, Download, Mail } from 'lucide-react';
import { personalInfo } from '../data/resumeData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-800/80 bg-[#070a12]/90 backdrop-blur-md py-12 relative">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand Info */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-700 flex items-center justify-center text-sky-400">
              <Server className="w-4 h-4" />
            </div>
            <div>
              <div className="font-bold text-white text-sm">
                {personalInfo.name}
              </div>
              <div className="text-xs text-slate-400 font-mono">
                Junior System Administrator & Frontend Engineer
              </div>
            </div>
          </div>

          {/* Center Links & Status */}
          <div className="flex flex-wrap items-center justify-center gap-5 text-xs font-mono text-slate-400">
            <div className="flex items-center gap-1.5 text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              <span>All Systems Operational</span>
            </div>
            <span className="text-slate-700 hidden sm:inline">|</span>
            <a 
              href="/Sohaib_Abdullah_Sadiq_Resume.pdf"
              download="Sohaib_Abdullah_Sadiq_Resume.pdf"
              className="text-slate-300 hover:text-white flex items-center gap-1 transition-colors"
            >
              <Download className="w-3.5 h-3.5 text-sky-400" />
              <span>Resume PDF</span>
            </a>
            <span className="text-slate-700 hidden sm:inline">|</span>
            <span className="text-slate-400">Islamabad, PK</span>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="btn-secondary p-2.5 rounded-xl text-xs font-mono flex items-center gap-2"
            title="Back to top"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-sky-400" />
          </button>

        </div>

        <div className="mt-8 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
          <p className="flex items-center gap-1 font-mono text-slate-400">
            High-Availability Infrastructure & Modern Web Architecture
          </p>
        </div>
      </div>
    </footer>
  );
}
