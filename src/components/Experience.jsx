import React, { useState } from 'react';
import { Briefcase, Calendar, MapPin, Building2, Server, Code } from 'lucide-react';
import { experiences } from '../data/resumeData';
import Card3D from './Card3D';

export default function Experience() {
  const [filter, setFilter] = useState('all');

  const filteredExperiences = experiences.filter((exp) => {
    if (filter === 'all') return true;
    if (filter === 'systems') return exp.badge.includes('Infrastructure') || exp.badge.includes('Data Center');
    if (filter === 'dev') return exp.badge.includes('Web') || exp.badge.includes('Enterprise');
    return true;
  });

  return (
    <section id="experience" className="py-20 md:py-24 relative">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12 gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-700 text-xs font-mono text-sky-400">
              <Briefcase className="w-3.5 h-3.5" />
              <span>CAREER TIMELINE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Work Experience
            </h2>
            <p className="text-slate-300 text-sm sm:text-base max-w-xl">
              Proven track record spanning mission-critical Data Center administration and production frontend web development.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-900 border border-slate-800 rounded-xl self-start md:self-auto overflow-x-auto max-w-full">
            <button
              onClick={() => setFilter('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors whitespace-nowrap ${
                filter === 'all'
                  ? 'bg-sky-600 text-white font-semibold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              All Roles
            </button>
            <button
              onClick={() => setFilter('systems')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors whitespace-nowrap ${
                filter === 'systems'
                  ? 'bg-sky-600 text-white font-semibold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Data Center & Systems
            </button>
            <button
              onClick={() => setFilter('dev')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors whitespace-nowrap ${
                filter === 'dev'
                  ? 'bg-sky-600 text-white font-semibold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Software Engineering
            </button>
          </div>
        </div>

        {/* Timeline Stack */}
        <div className="space-y-6 sm:space-y-8 relative before:absolute before:inset-0 before:left-4 sm:before:left-6 md:before:left-8 before:w-0.5 before:bg-gradient-to-b before:from-sky-500 before:via-slate-700 before:to-slate-800/40 before:z-0">
          {filteredExperiences.map((exp) => {
            const isCurrent = exp.type === 'Current Role';
            const isDC = exp.id.includes('ntc');

            return (
              <div
                key={exp.id}
                className="relative pl-10 sm:pl-14 md:pl-20 group transition-all"
              >
                {/* Node icon on line */}
                <div
                  className={`absolute left-4 sm:left-6 md:left-8 -translate-x-1/2 top-6 w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center border z-10 transition-transform duration-200 group-hover:scale-105 ${
                    isCurrent
                      ? 'bg-slate-900 border-sky-400 text-sky-400 shadow-sm'
                      : 'bg-slate-900 border-slate-700 text-slate-400 group-hover:border-slate-500 group-hover:text-slate-200'
                  }`}
                >
                  {isDC ? (
                    <Server className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  ) : (
                    <Code className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  )}
                </div>

                {/* 3D Card Container */}
                <Card3D maxTilt={3}>
                  <div className={`rounded-2xl bg-slate-900/85 border p-5 sm:p-7 md:p-8 backdrop-blur-md transition-all shadow-sm ${
                    isCurrent
                      ? 'border-sky-500/30 hover:border-sky-500/50'
                      : 'border-slate-800 hover:border-slate-700'
                  }`}>
                    
                    {/* Card Header */}
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-3 md:gap-4 border-b border-slate-800 pb-4 sm:pb-5">
                      <div>
                        <div className="flex flex-wrap items-center gap-2 mb-1.5">
                          <span className="text-xs font-mono font-medium px-2.5 py-0.5 rounded-full bg-slate-800 border border-slate-700 text-sky-300">
                            {exp.badge}
                          </span>
                          {isCurrent && (
                            <span className="text-xs font-mono font-semibold px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center gap-1.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                              ACTIVE ROLE
                            </span>
                          )}
                        </div>
                        <h3 className="text-lg sm:text-2xl font-bold text-white group-hover:text-sky-300 transition-colors">
                          {exp.role}
                        </h3>
                        <div className="text-xs sm:text-sm font-semibold text-slate-300 flex items-center gap-1.5 mt-1">
                          <Building2 className="w-4 h-4 text-sky-400 shrink-0" />
                          <span>{exp.company}</span>
                          {exp.division && (
                            <span className="text-slate-400 text-xs hidden sm:inline">
                              — {exp.division}
                            </span>
                          )}
                        </div>
                      </div>

                      <div className="flex flex-row md:flex-col md:items-end flex-wrap items-center gap-2 md:gap-1 text-xs font-mono text-slate-400">
                        <div className="flex items-center gap-1.5 text-slate-200 font-medium bg-slate-800 px-2.5 py-1 rounded-md border border-slate-700">
                          <Calendar className="w-3.5 h-3.5 text-sky-400" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-slate-400 pt-0.5">
                          <MapPin className="w-3.5 h-3.5 text-slate-500" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Bullet Highlights */}
                    <div className="pt-4 sm:pt-5 space-y-2.5 sm:space-y-3">
                      {exp.highlights.map((item, hIdx) => (
                        <div key={hIdx} className="flex items-start gap-2.5 sm:gap-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                          <div className="w-1.5 h-1.5 rounded-full bg-sky-400 mt-2 shrink-0"></div>
                          <p className="flex-1">{item}</p>
                        </div>
                      ))}
                    </div>

                    {/* Tech Tags */}
                    <div className="mt-5 sm:mt-6 pt-4 sm:pt-5 border-t border-slate-800 flex flex-wrap items-center gap-1.5 sm:gap-2">
                      <span className="text-xs font-mono text-slate-400 mr-1 sm:mr-2">Tech:</span>
                      {exp.tech.map((t, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md bg-slate-800/80 border border-slate-700/70 text-[11px] sm:text-xs font-mono text-slate-300"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                  </div>
                </Card3D>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
