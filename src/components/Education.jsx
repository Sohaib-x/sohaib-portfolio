import React from 'react';
import { GraduationCap, Award, Calendar, MapPin, Trophy } from 'lucide-react';
import { education } from '../data/resumeData';
import Card3D from './Card3D';

export default function Education() {
  return (
    <section id="education" className="py-20 md:py-24 relative bg-slate-900/30">
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-700 text-xs font-mono text-sky-400">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>ACADEMIC FOUNDATION & AWARDS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education & Honors
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto">
            Rigorous computer science curriculum backed by top honors for technical engineering excellence.
          </p>
        </div>

        {/* Education & Award Card Stack */}
        <div className="space-y-6">
          
          {/* Degree Main Card */}
          <Card3D maxTilt={3}>
            <div className="rounded-2xl bg-slate-900/90 border border-slate-800 p-6 sm:p-8 backdrop-blur-xl shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6 hover:border-slate-700 transition-colors">
              <div className="space-y-3 max-w-2xl">
                <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-slate-800 border border-slate-700 text-sky-300 font-mono text-xs font-semibold">
                  COMPUTER SCIENCE DEGREE
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  {education.degree}
                </h3>
                <p className="text-sm sm:text-base text-slate-300 font-medium">
                  {education.institution}
                </p>
                <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400 pt-1">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-sky-400" />
                    <span className="text-slate-300">{education.period}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-slate-500" />
                    <span>{education.location}</span>
                  </div>
                </div>
              </div>

              {/* University Badge */}
              <div className="shrink-0 p-4 sm:p-5 rounded-2xl bg-slate-800/80 border border-slate-700 text-center space-y-1 self-start md:self-auto">
                <GraduationCap className="w-7 h-7 sm:w-8 sm:h-8 text-sky-400 mx-auto" />
                <div className="text-xs font-bold text-white font-mono">PAF-IAST</div>
                <div className="text-[10px] text-teal-400 font-mono">Class of 2026</div>
              </div>
            </div>
          </Card3D>

          {/* Award Spotlight Box */}
          <Card3D maxTilt={3}>
            <div className="relative rounded-2xl bg-gradient-to-br from-slate-900 via-slate-900/95 to-amber-950/20 border border-amber-500/30 p-6 sm:p-8 backdrop-blur-xl shadow-sm overflow-hidden">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                <div className="space-y-3.5">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 font-mono text-xs font-semibold self-start">
                    <Trophy className="w-3.5 h-3.5" />
                    <span>PRESTIGIOUS RECOGNITION: AWARDED BEST FINAL YEAR PROJECT</span>
                  </div>

                  <div>
                    <h4 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2 flex-wrap">
                      <span>{education.project.title}</span>
                      <span className="text-xs font-mono px-2 py-0.5 rounded-md bg-amber-500/20 text-amber-300 border border-amber-500/30 font-medium">
                        1st Place FYP
                      </span>
                    </h4>
                    <p className="text-xs font-mono text-slate-400 mt-1">
                      Tech Stack: {education.project.tech}
                    </p>
                  </div>

                  <p className="text-sm text-slate-300 leading-relaxed max-w-2xl">
                    {education.project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-1">
                    <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-slate-800 border border-slate-700 text-slate-300">
                      Height-map Kupwara Terrain
                    </span>
                    <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-slate-800 border border-slate-700 text-slate-300">
                      Procedural Foliage & Biomes
                    </span>
                    <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-slate-800 border border-slate-700 text-slate-300">
                      Dynamic Combat & HUD
                    </span>
                  </div>
                </div>

                <div className="shrink-0 p-4 rounded-xl bg-slate-800/90 border border-amber-500/30 text-center flex flex-col items-center justify-center min-w-[130px] self-start md:self-auto">
                  <Award className="w-8 h-8 text-amber-400 mb-1.5" />
                  <div className="text-xs font-bold font-mono text-amber-300">
                    TOP HONORS
                  </div>
                  <div className="text-[10px] text-slate-400 font-mono mt-0.5">
                    Awarded 2026
                  </div>
                </div>

              </div>

            </div>
          </Card3D>

        </div>

      </div>
    </section>
  );
}
