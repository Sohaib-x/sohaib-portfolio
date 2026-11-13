import React, { useEffect, useRef, useState } from 'react';
import { Layers, Sparkles, Network, CircleDot } from 'lucide-react';

/**
 * Background: Aesthetic, modern, high-performance background system.
 * Replaces the old wireframe grid with a refined interactive cloud network mesh,
 * soft ambient aurora gradients, or minimal micro-dots.
 */
export default function Background3D() {
  const canvasRef = useRef(null);
  const [bgStyle, setBgStyle] = useState('network'); // 'network' | 'aurora' | 'minimal'

  useEffect(() => {
    if (bgStyle !== 'network') return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Responsive particle density
    const isMobile = window.innerWidth < 768;
    const particleCount = isMobile ? 36 : 72;
    const maxDistance = isMobile ? 85 : 125;

    const colors = [
      'rgba(56, 189, 248, ',  // sky
      'rgba(99, 102, 241, ',  // indigo
      'rgba(45, 212, 191, ',  // teal
      'rgba(148, 163, 184, ', // slate
    ];

    class Particle {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.45;
        this.vy = (Math.random() - 0.5) * 0.45;
        this.radius = Math.random() * 1.5 + 1.2;
        this.colorPrefix = colors[Math.floor(Math.random() * colors.length)];
        this.baseAlpha = Math.random() * 0.4 + 0.3;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0) this.x = width;
        else if (this.x > width) this.x = 0;

        if (this.y < 0) this.y = height;
        else if (this.y > height) this.y = 0;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.colorPrefix + this.baseAlpha + ')';
        ctx.fill();
      }
    }

    const particles = Array.from({ length: particleCount }, () => new Particle());

    let mouse = { x: -1000, y: -1000 };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw faint connections between nearby nodes
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            const alpha = (1 - dist / maxDistance) * 0.16;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(148, 163, 184, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }

        // Draw faint link to cursor if nearby
        if (mouse.x > 0 && mouse.y > 0) {
          const mdx = particles[i].x - mouse.x;
          const mdy = particles[i].y - mouse.y;
          const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
          if (mdist < 140) {
            const mAlpha = (1 - mdist / 140) * 0.22;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = `rgba(56, 189, 248, ${mAlpha})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }

        particles[i].update();
        particles[i].draw();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', handleResize);
    };
  }, [bgStyle]);

  return (
    <>
      {/* 1. Underlying Deep Canvas Background */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#070a12]">
        
        {/* Style A: Interactive Network Mesh */}
        {bgStyle === 'network' && (
          <>
            {/* Subtle Top & Center Radial Ambient Depth */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-sky-500/[0.035] rounded-full blur-[140px] pointer-events-none" />
            <div className="absolute top-1/2 right-0 w-[600px] h-[500px] bg-indigo-500/[0.025] rounded-full blur-[150px] pointer-events-none" />
            
            {/* Soft Modern Micro-Dot Grid */}
            <div 
              className="absolute inset-0 opacity-25"
              style={{
                backgroundImage: 'radial-gradient(rgba(148, 163, 184, 0.12) 1px, transparent 1px)',
                backgroundSize: '32px 32px'
              }}
            />

            {/* Interactive Connected Nodes Canvas */}
            <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
          </>
        )}

        {/* Style B: Soft Modern Aurora */}
        {bgStyle === 'aurora' && (
          <div className="absolute inset-0">
            <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-sky-500/[0.07] rounded-full blur-[140px] pointer-events-none" />
            <div className="absolute top-1/3 -right-40 w-[650px] h-[650px] bg-indigo-500/[0.06] rounded-full blur-[160px] pointer-events-none" />
            <div className="absolute bottom-10 left-1/4 w-[500px] h-[500px] bg-teal-500/[0.05] rounded-full blur-[140px] pointer-events-none" />
            
            <div 
              className="absolute inset-0 opacity-30"
              style={{
                backgroundImage: 'radial-gradient(rgba(148, 163, 184, 0.15) 1px, transparent 1px)',
                backgroundSize: '24px 24px'
              }}
            />
          </div>
        )}

        {/* Style C: Minimalist Pure Dark */}
        {bgStyle === 'minimal' && (
          <div className="absolute inset-0 bg-[#080b13]">
            <div 
              className="absolute inset-0 opacity-15"
              style={{
                backgroundImage: 'linear-gradient(to right, rgba(148, 163, 184, 0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(148, 163, 184, 0.08) 1px, transparent 1px)',
                backgroundSize: '48px 48px'
              }}
            />
            <div className="absolute inset-0 bg-radial-vignette opacity-80" />
          </div>
        )}

      </div>

      {/* Discreet Background Style Selector (Bottom-Left) */}
      <div className="fixed bottom-4 left-4 z-40 hidden md:flex items-center gap-1 p-1 rounded-full bg-slate-900/90 border border-slate-800 text-[11px] font-mono backdrop-blur-md shadow-lg shadow-black/40">
        <span className="text-slate-400 px-2 py-0.5 flex items-center gap-1.5 font-medium">
          <Network className="w-3.5 h-3.5 text-sky-400" />
          <span>BG:</span>
        </span>
        <button
          onClick={() => setBgStyle('network')}
          className={`px-2.5 py-1 rounded-full transition-colors ${
            bgStyle === 'network'
              ? 'bg-sky-600 text-white font-semibold'
              : 'text-slate-400 hover:text-white'
          }`}
          title="Interactive Cloud Network Mesh"
        >
          Network
        </button>
        <button
          onClick={() => setBgStyle('aurora')}
          className={`px-2.5 py-1 rounded-full transition-colors ${
            bgStyle === 'aurora'
              ? 'bg-sky-600 text-white font-semibold'
              : 'text-slate-400 hover:text-white'
          }`}
          title="Soft Ambient Aurora"
        >
          Aurora
        </button>
        <button
          onClick={() => setBgStyle('minimal')}
          className={`px-2.5 py-1 rounded-full transition-colors ${
            bgStyle === 'minimal'
              ? 'bg-sky-600 text-white font-semibold'
              : 'text-slate-400 hover:text-white'
          }`}
          title="Minimal Slate"
        >
          Minimal
        </button>
      </div>
    </>
  );
}
