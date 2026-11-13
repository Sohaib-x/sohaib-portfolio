import React, { useState } from 'react';
import { 
  Server, 
  Terminal, 
  ShieldCheck, 
  Copy, 
  Check, 
  ArrowRight, 
  Globe, 
  HardDrive,
  Download,
  FileText
} from 'lucide-react';
import { personalInfo } from '../data/resumeData';
import ServerCore3D from './ServerCore3D';
import Card3D from './Card3D';

export default function Hero() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="hero" className="relative min-h-[calc(100vh-4.5rem)] flex flex-col justify-center pt-28 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      {/* Subtle Aesthetic Ambient Lighting (No harsh glowing or neon blooms) */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-sky-500/[0.04] rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[300px] bg-indigo-500/[0.04] rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid: Left Pitch, Right 3D Interactive Core */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Core Positioning & CTAs */}
          <div className="lg:col-span-6 space-y-6 text-left">
            
            {/* Live Operational Status Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/70 text-xs font-mono text-slate-200 shadow-sm backdrop-blur-md">
              <span className="flex h-2 w-2 relative">
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
              </span>
              <span className="text-white font-medium">NTC Data Center Operations</span>
              <span className="text-slate-600">|</span>
              <span className="text-emerald-400 font-semibold tracking-wide">UPTIME: 99.9%</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
                Enterprise Systems & <br />
                <span className="bg-gradient-to-r from-sky-400 via-indigo-300 to-teal-300 bg-clip-text text-transparent">
                  Modern Web Apps
                </span>
              </h1>
              <div className="flex items-center gap-2.5 flex-wrap pt-1">
                <span className="text-xl sm:text-2xl font-bold text-slate-100">{personalInfo.name}</span>
                <span className="text-sky-300 text-xs font-mono px-2 py-0.5 rounded-md bg-slate-800/90 border border-slate-700">
                  SYSADMIN & FRONTEND DEV
                </span>
              </div>
            </div>

            {/* Perspective Statement */}
            <p className="text-sm sm:text-base text-slate-300 max-w-xl leading-relaxed">
              Junior System Administrator managing high-availability Windows & Linux infrastructure at the <strong className="text-white font-semibold">National Telecommunication Corporation (NTC)</strong> Data Center. Experienced in production web applications with <span className="text-sky-300 font-medium">React, Next.js</span>, and award-winning <span className="text-indigo-300 font-medium">Unreal Engine 5</span> simulations.
            </p>

            {/* Server Rack Telemetry Pill */}
            <div className="p-3 sm:p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs font-mono shadow-sm">
              <div className="flex items-center gap-2">
                <HardDrive className="w-4 h-4 text-sky-400" />
                <span className="text-slate-400">RACK_DC-01:</span>
                <span className="text-emerald-400 font-semibold flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  ONLINE
                </span>
              </div>
              <div className="flex items-center gap-3 text-slate-300 text-[11px]">
                <span className="text-sky-300">NIC: 10Gbps</span>
                <span className="text-slate-700">|</span>
                <span className="text-slate-300">RAID 10 ACTIVE</span>
              </div>
            </div>

            {/* Quick Action Buttons - Clean, Aesthetic, Touch-Friendly */}
            <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 pt-1">
              
              {/* Primary Resume Download Button */}
              <a
                href="/Sohaib_Abdullah_Sadiq_Resume.pdf"
                download="Sohaib_Abdullah_Sadiq_Resume.pdf"
                className="btn-emerald text-sm"
              >
                <Download className="w-4 h-4" />
                <span>DOWNLOAD RESUME</span>
              </a>

              {/* Explore Work */}
              <a
                href="#experience"
                className="btn-primary text-sm"
              >
                <span>EXPLORE WORK</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              {/* Secondary Buttons Row */}
              <div className="flex items-center gap-2">
                <a
                  href="#terminal"
                  className="btn-secondary text-sm flex-1 sm:flex-initial"
                >
                  <Terminal className="w-4 h-4 text-sky-400" />
                  <span>CLI</span>
                </a>

                <button
                  onClick={copyEmail}
                  className="btn-secondary text-sm flex-1 sm:flex-initial"
                  title="Copy email to clipboard"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span className="text-emerald-400 font-mono text-xs font-semibold">COPIED</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-slate-300" />
                      <span className="font-mono text-xs">COPY EMAIL</span>
                    </>
                  )}
                </button>
              </div>

            </div>

            {/* Quick Location & Security Tags */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-1 text-xs font-mono text-slate-400">
              <div className="flex items-center gap-2">
                <Globe className="w-3.5 h-3.5 text-sky-400" />
                <span className="text-slate-300">{personalInfo.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-slate-300">National Telecomm Standard</span>
              </div>
            </div>

          </div>

          {/* Right Column: 3D Interactive Model */}
          <div className="lg:col-span-6 w-full">
            <ServerCore3D />
          </div>

        </div>

        {/* Global Highlight Metrics Bar */}
        <div className="mt-12 sm:mt-16 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          {personalInfo.stats.map((stat, idx) => {
            const accentColors = [
              "border-sky-500/20 text-sky-400",
              "border-teal-500/20 text-teal-400",
              "border-amber-500/20 text-amber-400",
              "border-indigo-500/20 text-indigo-400",
            ];
            return (
              <Card3D key={idx} maxTilt={4}>
                <div className={`p-4 rounded-xl bg-slate-900/80 border ${accentColors[idx % 4].split(' ')[0]} backdrop-blur-md hover:border-slate-700 transition-colors shadow-sm`}>
                  <div className="text-xl sm:text-2xl font-bold text-white font-mono tracking-tight">
                    {stat.value}
                  </div>
                  <div className={`text-xs font-semibold mt-1 uppercase tracking-wider font-mono ${accentColors[idx % 4].split(' ')[1]}`}>
                    {stat.label}
                  </div>
                  <div className="text-[11px] text-slate-400 mt-0.5">
                    {stat.sub}
                  </div>
                </div>
              </Card3D>
            );
          })}
        </div>

      </div>
    </section>
  );
}
