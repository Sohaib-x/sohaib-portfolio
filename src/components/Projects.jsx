import React, { useState } from 'react';
import { 
  FolderGit2, 
  Trophy, 
  Gamepad2, 
  Layers, 
  Car, 
  ArrowUpRight,
  Info,
  X,
  ExternalLink
} from 'lucide-react';
import { projects } from '../data/resumeData';
import Card3D from './Card3D';

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = projects.filter((p) => {
    if (activeCategory === 'all') return true;
    if (activeCategory === 'web') return p.category.includes('Web');
    if (activeCategory === 'game') return p.category.includes('Game');
    return true;
  });

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Gamepad2':
        return <Gamepad2 className="w-5 h-5 text-amber-400" />;
      case 'Car':
        return <Car className="w-5 h-5 text-teal-400" />;
      default:
        return <Layers className="w-5 h-5 text-sky-400" />;
    }
  };

  return (
    <section id="projects" className="py-20 md:py-24 relative bg-slate-900/30">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12 gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-700 text-xs font-mono text-sky-400">
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>PROJECTS & SYSTEMS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Featured Builds
            </h2>
            <p className="text-slate-300 text-sm sm:text-base max-w-xl">
              From the award-winning 3D terrain simulation in Unreal Engine 5 to production-grade Next.js web applications.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-900 border border-slate-800 rounded-xl self-start md:self-auto overflow-x-auto max-w-full">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors whitespace-nowrap ${
                activeCategory === 'all'
                  ? 'bg-sky-600 text-white font-semibold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              All Builds
            </button>
            <button
              onClick={() => setActiveCategory('web')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors whitespace-nowrap ${
                activeCategory === 'web'
                  ? 'bg-sky-600 text-white font-semibold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Web & Mobile
            </button>
            <button
              onClick={() => setActiveCategory('game')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors whitespace-nowrap ${
                activeCategory === 'game'
                  ? 'bg-sky-600 text-white font-semibold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Game Dev & 3D
            </button>
          </div>
        </div>

        {/* Projects Grid with 3D Card Tilt */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => {
            const isAwarded = !!project.award;

            return (
              <Card3D key={project.id} maxTilt={4} className="h-full">
                <div
                  className={`rounded-2xl bg-slate-900/85 border transition-all duration-200 flex flex-col justify-between p-6 relative h-full shadow-sm hover:border-slate-700 ${
                    isAwarded
                      ? 'border-amber-500/40 bg-gradient-to-b from-slate-900 via-slate-900/90 to-amber-950/10'
                      : 'border-slate-800'
                  }`}
                >
                  {/* Award Banner if applicable */}
                  {isAwarded && (
                    <div className="mb-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono font-semibold self-start">
                      <Trophy className="w-3.5 h-3.5" />
                      <span>{project.award}</span>
                    </div>
                  )}

                  <div className="space-y-4">
                    {/* Top Bar inside card */}
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center">
                        {getIcon(project.icon)}
                      </div>
                      <span className="text-[11px] font-mono font-medium px-2.5 py-0.5 rounded-md bg-slate-800 text-slate-300 border border-slate-700">
                        {project.category}
                      </span>
                    </div>

                    {/* Title & Subtitle */}
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-sky-300 transition-colors flex items-center gap-1.5">
                        <span>{project.title}</span>
                        <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-sky-400" />
                      </h3>
                      <p className="text-xs text-slate-400 font-mono mt-0.5">{project.subtitle}</p>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-slate-300 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Key Metrics / Highlights */}
                    <div className="grid grid-cols-3 gap-2 pt-1">
                      {project.metrics.map((m, mIdx) => (
                        <div
                          key={mIdx}
                          className="p-2 rounded-lg bg-slate-800/60 border border-slate-750 text-center"
                        >
                          <div className="text-[10px] uppercase font-mono text-slate-400">
                            {m.label}
                          </div>
                          <div className="text-xs font-bold text-slate-200 truncate mt-0.5">
                            {m.value}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech Stack Pills & Action Footer */}
                  <div className="pt-5 mt-5 border-t border-slate-800 space-y-3">
                    <div className="flex flex-wrap gap-1.5">
                      {project.stack.map((s, sIdx) => (
                        <span
                          key={sIdx}
                          className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700/60"
                        >
                          {s}
                        </span>
                      ))}
                    </div>

                    <button
                      onClick={() => setSelectedProject(project)}
                      className="btn-secondary w-full py-2 px-3 text-xs font-medium flex items-center justify-center gap-2"
                    >
                      <Info className="w-3.5 h-3.5 text-sky-400" />
                      <span>View Specifications</span>
                    </button>
                  </div>

                </div>
              </Card3D>
            );
          })}
        </div>

        {/* Modal for Detailed Project Inspect */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="relative w-full max-w-xl rounded-2xl bg-slate-900 border border-slate-700 p-6 md:p-8 shadow-2xl space-y-5">
              
              <div className="flex items-start justify-between">
                <div>
                  {selectedProject.award && (
                    <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono font-semibold mb-2">
                      <Trophy className="w-3.5 h-3.5" />
                      <span>{selectedProject.award}</span>
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-white">{selectedProject.title}</h3>
                  <p className="text-xs font-mono text-sky-400 mt-0.5">{selectedProject.subtitle}</p>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white border border-slate-700"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-3 text-sm text-slate-300 leading-relaxed">
                <p>{selectedProject.description}</p>
                <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700/80 space-y-2">
                  <div className="text-xs font-mono uppercase text-sky-400">Technical Highlights</div>
                  <ul className="text-xs space-y-1.5 text-slate-300 list-disc list-inside">
                    <li>Engineered with modular, reusable components and robust state handling.</li>
                    <li>Designed for responsive execution across both mobile and desktop viewports.</li>
                    <li>Integrated real-time database flow or low-latency simulation physics.</li>
                  </ul>
                </div>
              </div>

              <div className="space-y-2">
                <div className="text-xs font-mono text-slate-400">Technology Stack:</div>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.stack.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-md bg-slate-800 text-xs font-mono text-slate-200 border border-slate-700"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800 flex justify-end gap-3">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="btn-secondary px-4 py-2 text-xs"
                >
                  Close
                </button>
                <a
                  href={`mailto:sohaibabdullah709@gmail.com?subject=Inquiry regarding ${selectedProject.title}`}
                  className="btn-primary px-4 py-2 text-xs"
                >
                  Inquire About Project
                </a>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
