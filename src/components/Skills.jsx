import React, { useState } from 'react';
import { Cpu, Server, Code2, Wrench, CheckCircle } from 'lucide-react';
import { skillCategories } from '../data/resumeData';
import Card3D from './Card3D';

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState(0);

  const getCategoryIcon = (iconName) => {
    switch (iconName) {
      case 'Server':
        return <Server className="w-5 h-5 text-sky-400" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-teal-400" />;
      case 'Code2':
        return <Code2 className="w-5 h-5 text-indigo-400" />;
      default:
        return <Wrench className="w-5 h-5 text-amber-400" />;
    }
  };

  return (
    <section id="skills" className="py-20 md:py-24 relative">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-700 text-xs font-mono text-sky-400">
            <Cpu className="w-3.5 h-3.5" />
            <span>TECHNICAL CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Skills & Infrastructure Stack
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto">
            A comprehensive matrix encompassing Data Center systems administration, virtualization, frontend engineering, and 3D simulation tools.
          </p>
        </div>

        {/* Categories Tab Selector */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-3 mb-8 sm:mb-10">
          {skillCategories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedCategory(idx)}
              className={`p-3.5 sm:p-4 rounded-xl border text-left transition-colors flex flex-col justify-between ${
                selectedCategory === idx
                  ? 'bg-slate-800 border-sky-500/60 shadow-sm'
                  : 'bg-slate-900/80 border-slate-800 hover:border-slate-700'
              }`}
            >
              <div className="flex items-center justify-between mb-2.5 sm:mb-3">
                <div className="p-2 rounded-lg bg-slate-900 border border-slate-700/80">
                  {getCategoryIcon(cat.icon)}
                </div>
                {selectedCategory === idx && (
                  <span className="w-2 h-2 rounded-full bg-sky-400"></span>
                )}
              </div>
              <div>
                <h4 className="font-semibold text-white text-xs sm:text-sm leading-tight">
                  {cat.category}
                </h4>
                <p className="text-[11px] font-mono text-sky-400 mt-1">
                  {cat.skills.length} Capabilities
                </p>
              </div>
            </button>
          ))}
        </div>

        {/* Selected Category Skill Matrix Display */}
        <Card3D maxTilt={2}>
          <div className="rounded-2xl bg-slate-900/90 border border-slate-800 p-5 sm:p-7 md:p-8 backdrop-blur-xl shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-5 sm:pb-6 border-b border-slate-800 gap-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-slate-800 border border-slate-700">
                  {getCategoryIcon(skillCategories[selectedCategory].icon)}
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white">
                    {skillCategories[selectedCategory].category}
                  </h3>
                  <p className="text-xs font-mono text-slate-400">
                    Enterprise-tested competencies & operational proficiencies
                  </p>
                </div>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-xs font-mono text-emerald-400 self-start sm:self-auto">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                <span>OPERATIONAL EXPERTISE</span>
              </div>
            </div>

            {/* Detailed Skill Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 pt-5 sm:pt-6">
              {skillCategories[selectedCategory].skills.map((skill, sIdx) => {
                const isAdvanced = skill.level === 'Advanced';
                return (
                  <div
                    key={sIdx}
                    className="p-3.5 sm:p-4 rounded-xl bg-slate-800/40 border border-slate-750 hover:border-slate-700 transition-colors flex items-start justify-between gap-3 group"
                  >
                    <div className="space-y-1">
                      <div className="font-semibold text-white text-sm group-hover:text-sky-300 transition-colors">
                        {skill.name}
                      </div>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        {skill.desc}
                      </p>
                    </div>

                    <div className="shrink-0 text-right">
                      <span className={`text-[10px] font-mono font-medium px-2 py-0.5 rounded-md border ${
                        isAdvanced
                          ? 'bg-sky-500/10 text-sky-400 border-sky-500/30'
                          : 'bg-indigo-500/10 text-indigo-400 border-indigo-500/30'
                      }`}>
                        {skill.level}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Quick Summary Banner */}
            <div className="mt-6 sm:mt-8 p-4 rounded-xl bg-slate-800/60 border border-slate-700/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-mono text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-teal-400 shrink-0" />
                <span>
                  Standardized on Linux/Windows enterprise environments, VMware virtualization, and Next.js reactive workflows.
                </span>
              </div>
              <a
                href="#contact"
                className="btn-secondary px-3.5 py-1.5 text-xs font-mono text-slate-200 shrink-0"
              >
                Connect With Sohaib →
              </a>
            </div>

          </div>
        </Card3D>

      </div>
    </section>
  );
}
