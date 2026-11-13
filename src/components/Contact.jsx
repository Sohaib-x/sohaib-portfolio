import React, { useState } from 'react';
import { 
  Mail, 
  MapPin, 
  Copy, 
  Check, 
  Download, 
  FileText, 
  ExternalLink, 
  ShieldCheck, 
  Server, 
  Award, 
  CheckCircle2,
  Calendar,
  Sparkles
} from 'lucide-react';
import { personalInfo, education } from '../data/resumeData';
import Card3D from './Card3D';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-20 md:py-24 relative">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-700 text-xs font-mono text-sky-400">
            <FileText className="w-3.5 h-3.5" />
            <span>RESUME & CONTACT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Resume & Direct Connect
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto">
            Download my verified resume or reach out directly for System Administration, Cloud Infrastructure, and Frontend Engineering opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Direct Info Cards */}
          <div className="lg:col-span-5 space-y-4 flex flex-col justify-between">
            
            {/* Primary Email Card */}
            <Card3D maxTilt={3}>
              <div className="rounded-2xl bg-slate-900/90 border border-slate-800 p-6 space-y-4 shadow-sm hover:border-slate-700 transition-colors">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-sky-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <button
                    onClick={copyEmail}
                    className="btn-secondary px-3 py-1.5 rounded-lg text-xs font-mono flex items-center gap-1.5"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400 font-semibold">COPIED</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>COPY</span>
                      </>
                    )}
                  </button>
                </div>

                <div>
                  <div className="text-xs font-mono text-sky-400 uppercase tracking-wider">Direct Email</div>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="text-base sm:text-lg font-bold text-white hover:text-sky-300 font-mono transition-colors block truncate mt-1"
                  >
                    {personalInfo.email}
                  </a>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Available for full-time roles, data center infrastructure operations, and production frontend web development.
                </p>
                <div className="pt-2">
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="btn-primary w-full text-xs font-mono"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>COMPOSE MESSAGE</span>
                  </a>
                </div>
              </div>
            </Card3D>

            {/* Location Card */}
            <Card3D maxTilt={3}>
              <div className="rounded-2xl bg-slate-900/90 border border-slate-800 p-5 space-y-2 shadow-sm hover:border-slate-700 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-teal-400">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-teal-400 uppercase tracking-wider">Base Location</div>
                    <div className="text-sm font-bold text-white font-mono">
                      {personalInfo.location}
                    </div>
                  </div>
                </div>
                <p className="text-xs text-slate-400 pt-1">
                  Data Center Operations at NTC Headquarters (G-5/2). Open to on-site roles in Islamabad/Rawalpindi as well as remote opportunities.
                </p>
              </div>
            </Card3D>

            {/* Availability Status */}
            <Card3D maxTilt={3}>
              <div className="rounded-2xl bg-slate-900/90 border border-slate-800 p-5 space-y-2 shadow-sm">
                <div className="flex items-center gap-2 text-xs font-mono font-semibold text-emerald-400">
                  <span className="relative flex h-2 w-2">
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
                  </span>
                  <span>STATUS: OPEN FOR NEW OPPORTUNITIES</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Actively evaluating technical roles in System Administration, Virtualization & Server Infrastructure, and Next.js / React Development.
                </p>
              </div>
            </Card3D>

          </div>

          {/* Right Column: Featured Resume Download & CV Overview Hub */}
          <div className="lg:col-span-7 flex flex-col">
            <Card3D maxTilt={2} className="h-full">
              <div className="rounded-2xl bg-slate-900/90 border border-slate-800 p-6 sm:p-8 backdrop-blur-xl shadow-lg flex flex-col justify-between h-full">
                
                {/* Header with Title and File Metadata */}
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-5 mb-6">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="px-2.5 py-0.5 rounded-md bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-mono font-medium">
                          VERIFIED CV
                        </span>
                        <span className="text-xs font-mono text-slate-400">PDF FORMAT</span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                        Curriculum Vitae
                      </h3>
                    </div>

                    <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                      <Calendar className="w-3.5 h-3.5 text-slate-500" />
                      <span>Updated 2026</span>
                    </div>
                  </div>

                  {/* Resume Highlights Breakdown */}
                  <div className="space-y-4 mb-6">
                    <div className="text-xs font-mono text-sky-400 uppercase tracking-wider">
                      Executive Summary & Roles
                    </div>

                    {/* Snapshot 1: Current NTC */}
                    <div className="p-3.5 rounded-xl bg-slate-800/50 border border-slate-800 space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-semibold text-white">Junior System Administrator</span>
                        <span className="text-xs font-mono text-sky-400">Jul 2026 - Present</span>
                      </div>
                      <div className="text-xs text-slate-300">National Telecommunication Corporation (NTC) Data Center</div>
                      <p className="text-[11px] text-slate-400">
                        Administering Windows & Linux servers, 24/7 uptime monitoring, backup routines, and VMware virtualization.
                      </p>
                    </div>

                    {/* Snapshot 2: Software Engineer MFSYS */}
                    <div className="p-3.5 rounded-xl bg-slate-800/50 border border-slate-800 space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-semibold text-white">Software Engineer</span>
                        <span className="text-xs font-mono text-teal-400">Jul 2025 - Sep 2025</span>
                      </div>
                      <div className="text-xs text-slate-300">MFSYS Pvt Ltd</div>
                      <p className="text-[11px] text-slate-400">
                        Built high-performance Next.js (SSR/SSG) & React.js web applications, integrated RESTful APIs, and state architecture.
                      </p>
                    </div>

                    {/* Snapshot 3: Education & Honors */}
                    <div className="p-3.5 rounded-xl bg-slate-800/50 border border-slate-800 space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-semibold text-white">Bachelor of Computer Science</span>
                        <span className="text-xs font-mono text-amber-400">Best FYP Award</span>
                      </div>
                      <div className="text-xs text-slate-300">PAF-IAST (2022 - 2026)</div>
                      <p className="text-[11px] text-slate-400">
                        Final Year Project: Operation Black Mirage (Unreal Engine 5 tactical FPS simulation with procedural terrain).
                      </p>
                    </div>
                  </div>
                </div>

                {/* Primary Action Buttons */}
                <div className="pt-4 border-t border-slate-800">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <a
                      href="/Sohaib_Abdullah_Sadiq_Resume.pdf"
                      download="Sohaib_Abdullah_Sadiq_Resume.pdf"
                      className="btn-emerald py-3.5 text-sm tracking-wide font-medium flex items-center justify-center gap-2"
                    >
                      <Download className="w-4 h-4" />
                      <span>DOWNLOAD RESUME (PDF)</span>
                    </a>

                    <a
                      href="/Sohaib_Abdullah_Sadiq_Resume.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary py-3.5 text-sm tracking-wide font-medium flex items-center justify-center gap-2"
                    >
                      <ExternalLink className="w-4 h-4 text-slate-300" />
                      <span>PREVIEW IN BROWSER</span>
                    </a>
                  </div>
                  <div className="mt-3 text-center">
                    <span className="text-[11px] text-slate-400 font-mono">
                      File: Sohaib_Abdullah_Sadiq_Resume.pdf • Direct Download
                    </span>
                  </div>
                </div>

              </div>
            </Card3D>
          </div>

        </div>

      </div>
    </section>
  );
}
