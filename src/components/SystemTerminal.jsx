import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, CornerDownLeft, RefreshCw, Download } from 'lucide-react';
import { personalInfo, experiences, projects, skillCategories, education } from '../data/resumeData';
import Card3D from './Card3D';

export default function SystemTerminal() {
  const [inputCommand, setInputCommand] = useState('');
  const [history, setHistory] = useState([
    {
      command: 'init',
      response: [
        'SYSTEM INITIALIZED: Sohaib Abdullah Sadiq Profile Environment v3.2',
        'Current Role: Junior System Administrator (NTC Headquarters Data Center, Islamabad)',
        'Frontend & Systems Stack: React, Next.js, Linux/Windows Servers, VMware, UE5',
        'Type "help" or click any query chip below to explore.'
      ],
      type: 'system'
    }
  ]);

  const terminalEndRef = useRef(null);

  const availableCommands = [
    { cmd: 'help', desc: 'Display all commands' },
    { cmd: 'sysinfo', desc: 'System admin & profile overview' },
    { cmd: 'skills', desc: 'List core technical proficiencies' },
    { cmd: 'experience', desc: 'Query data center & frontend career' },
    { cmd: 'projects', desc: 'List software & 3D game projects' },
    { cmd: 'resume', desc: 'Download / view official resume' },
    { cmd: 'clear', desc: 'Clear console logs' }
  ];

  const handleCommandRun = (cmdString) => {
    const trimmed = cmdString.trim().toLowerCase();
    if (!trimmed) return;

    if (trimmed === 'clear') {
      setHistory([]);
      setInputCommand('');
      return;
    }

    let response = [];
    let type = 'output';

    switch (trimmed) {
      case 'help':
        response = [
          'AVAILABLE SYSTEM COMMANDS:',
          ...availableCommands.map((c) => `  ${c.cmd.padEnd(12)} - ${c.desc}`),
          '',
          'Tip: Tap any command chip for instant execution.'
        ];
        break;

      case 'sysinfo':
        response = [
          '-------------------------------------------------------',
          `NAME         : ${personalInfo.name}`,
          `CURRENT ROLE : ${personalInfo.currentRole}`,
          `LOCATION     : ${personalInfo.location}`,
          `EMAIL        : ${personalInfo.email}`,
          `EDUCATION    : ${education.degree}`,
          `INSTITUTION  : ${education.institution}`,
          `DC STACK     : Windows & Linux Servers, VMware, Alert Monitoring`,
          `WEB STACK    : Next.js, React.js, Redux, RESTful APIs`,
          `3D ENGINES   : Unreal Engine 5 (Best Final Year Project Award)`,
          '-------------------------------------------------------'
        ];
        break;

      case 'skills':
        response = [
          'SYSTEM ADMINISTRATION & OPS:',
          '  • Windows & Linux Servers (Config, Hardening, Patching)',
          '  • Infrastructure Monitoring, Incident Handling & DR Readiness',
          '  • Virtualization (VM Provisioning, Resource Optimization)',
          '',
          'FRONTEND & WEB DEVELOPMENT:',
          '  • React.js, Next.js (SSR/SSG), JavaScript (ES6+)',
          '  • Redux State Architecture, REST APIs, Firebase Backend',
          '  • ShadCN, Tailwind CSS, Material UI, Chakra UI',
          '',
          'SIMULATION & 3D:',
          '  • Unreal Engine 5, Blueprints, Niagara VFX, Kupwara Height-maps'
        ];
        break;

      case 'experience':
        response = [
          'CHRONOLOGICAL CAREER TIMELINE:',
          ...experiences.flatMap((exp) => [
            `► [${exp.period}] ${exp.role.toUpperCase()} @ ${exp.company}`,
            `   Location: ${exp.location}`,
            `   Focus: ${exp.highlights[0]}`,
            `   Tech: ${exp.tech.join(', ')}`,
            ''
          ])
        ];
        break;

      case 'projects':
        response = [
          'ACTIVE REPOSITORIES & DEPLOYMENTS:',
          ...projects.flatMap((p) => [
            `► ${p.title} (${p.category}) ${p.award ? '★ ' + p.award : ''}`,
            `   Stack: ${p.stack.join(', ')}`,
            `   Summary: ${p.description}`,
            ''
          ])
        ];
        break;

      case 'resume':
        window.open('/Sohaib_Abdullah_Sadiq_Resume.pdf', '_blank');
        response = [
          'Opening Sohaib_Abdullah_Sadiq_Resume.pdf in browser...',
          'Direct link: /Sohaib_Abdullah_Sadiq_Resume.pdf'
        ];
        break;

      default:
        response = [
          `Command not recognized: "${trimmed}". Type "help" to view executable commands.`
        ];
        type = 'error';
    }

    setHistory((prev) => [...prev, { command: cmdString, response, type }]);
    setInputCommand('');
  };

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  return (
    <section id="terminal" className="py-20 md:py-24 relative">
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-700 text-sky-400 font-mono text-xs">
            <TerminalIcon className="w-3.5 h-3.5" />
            <span>INTERACTIVE CLI</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Terminal Diagnostics
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto">
            Execute diagnostic queries to inspect Sohaib's datacenter background, code repositories, and 3D simulation projects.
          </p>
        </div>

        {/* Chassis Wrap */}
        <Card3D maxTilt={2}>
          <div className="rounded-2xl bg-slate-900/95 border border-slate-800 shadow-xl overflow-hidden font-mono text-xs sm:text-sm relative">
            
            {/* Top Bar */}
            <div className="bg-slate-900 border-b border-slate-800 px-4 py-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-500/80"></span>
                <span className="w-3 h-3 rounded-full bg-amber-500/80"></span>
                <span className="w-3 h-3 rounded-full bg-emerald-500/80"></span>
                <span className="ml-2 text-xs text-slate-300 font-mono hidden sm:inline">
                  sohaib@ntc-datacenter:~
                </span>
              </div>
              <div className="flex items-center gap-3 text-xs text-slate-400">
                <a
                  href="/Sohaib_Abdullah_Sadiq_Resume.pdf"
                  download="Sohaib_Abdullah_Sadiq_Resume.pdf"
                  className="hover:text-white flex items-center gap-1.5 transition-colors text-slate-300"
                  title="Download Resume"
                >
                  <Download className="w-3.5 h-3.5 text-sky-400" />
                  <span className="text-[11px] hidden sm:inline">Resume</span>
                </a>

                <button
                  onClick={() => setHistory([])}
                  className="hover:text-white flex items-center gap-1 transition-colors text-slate-400"
                  title="Clear terminal"
                >
                  <RefreshCw className="w-3 h-3" />
                  <span className="text-[11px]">Clear</span>
                </button>
              </div>
            </div>

            {/* Quick Command Chips */}
            <div className="bg-slate-900/80 border-b border-slate-800 px-4 py-2 flex items-center gap-2 overflow-x-auto text-xs">
              <span className="text-slate-500 text-[11px] uppercase tracking-wider shrink-0 font-semibold">Run:</span>
              {availableCommands.map((cmd) => (
                <button
                  key={cmd.cmd}
                  onClick={() => handleCommandRun(cmd.cmd)}
                  className="px-2.5 py-1 rounded-md bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 text-xs font-mono shrink-0 transition-colors border border-slate-700/60"
                >
                  ${cmd.cmd}
                </button>
              ))}
            </div>

            {/* Terminal Body */}
            <div className="p-4 sm:p-6 min-h-[260px] max-h-[420px] overflow-y-auto space-y-4">
              {history.map((item, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex items-center gap-2 text-sky-400">
                    <span className="text-teal-400 font-semibold">sohaib@ntc:~$</span>
                    <span className="text-white">{item.command}</span>
                  </div>
                  <div
                    className={`pl-3 sm:pl-4 space-y-0.5 leading-relaxed ${
                      item.type === 'error'
                        ? 'text-rose-400'
                        : item.type === 'system'
                        ? 'text-sky-300/90'
                        : 'text-slate-300'
                    }`}
                  >
                    {item.response.map((line, lIdx) => (
                      <div key={lIdx} className="whitespace-pre-wrap">
                        {line}
                      </div>
                    ))}
                  </div>
                </div>
              ))}

              {/* Active Command Line Input */}
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleCommandRun(inputCommand);
                }}
                className="flex items-center gap-2 pt-2 text-sky-400"
              >
                <span className="text-teal-400 font-semibold shrink-0">sohaib@ntc:~$</span>
                <input
                  type="text"
                  value={inputCommand}
                  onChange={(e) => setInputCommand(e.target.value)}
                  placeholder="type command (e.g. skills, sysinfo, projects, resume)..."
                  className="w-full bg-transparent text-white font-mono focus:outline-none placeholder:text-slate-600 text-xs sm:text-sm"
                />
                <button
                  type="submit"
                  className="p-1.5 rounded-md bg-slate-800 text-slate-200 hover:text-white hover:bg-slate-700 transition-colors"
                  title="Execute command"
                >
                  <CornerDownLeft className="w-3.5 h-3.5" />
                </button>
              </form>
              <div ref={terminalEndRef} />
            </div>

          </div>
        </Card3D>

      </div>
    </section>
  );
}
