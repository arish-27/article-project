import React from 'react';
import { ArrowRight, Sparkles, CheckCircle2, ShieldCheck } from 'lucide-react';

export const FinalQuestionSection: React.FC = () => {
  return (
    <section id="final-thesis" className="py-20 md:py-32 px-4 sm:px-8 border-b border-darkhairline bg-obsidian text-bone relative overflow-hidden">
      <div className="max-w-5xl mx-auto space-y-12 relative z-10 text-center">
        {/* Supertitle */}
        <div className="inline-flex items-center gap-2 bg-neutral-900 border border-neutral-700 px-4 py-1.5 font-mono text-[0.65rem] uppercase tracking-widest text-amberAccent font-bold">
          <Sparkles className="w-3.5 h-3.5" />
          <span>SCREEN 21 • RESEARCH THESIS CONCLUSION</span>
        </div>

        {/* Main Title */}
        <h2 className="font-serif font-black text-3xl sm:text-5xl md:text-6xl tracking-tight uppercase leading-tight text-bone">
          WILL AI DESTROY IT JOBS —<br />
          <span className="text-amberAccent">OR TRANSFORM THEM?</span>
        </h2>

        {/* Core Narrative Messages */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto text-left font-sans text-xs">
          <div className="p-5 bg-neutral-900/80 border border-neutral-800 space-y-2">
            <span className="font-mono text-rose-400 font-bold text-sm block">01. ROUTINE DECLINE</span>
            <p className="text-neutral-300 leading-relaxed">
              Repetitive manual testing, pure boilerplate typing, and L1 ticket screening are contracting rapidly as autonomous tooling scales.
            </p>
          </div>

          <div className="p-5 bg-neutral-900/80 border border-neutral-800 space-y-2">
            <span className="font-mono text-amber-400 font-bold text-sm block">02. CORE TRANSFORMATION</span>
            <p className="text-neutral-300 leading-relaxed">
              Software engineering, data platforms, and cloud operations transform from line-by-line syntax writing to architectural governance and AI evaluation.
            </p>
          </div>

          <div className="p-5 bg-neutral-900/80 border border-neutral-800 space-y-2">
            <span className="font-mono text-emerald-400 font-bold text-sm block">03. NET CREATION</span>
            <p className="text-neutral-300 leading-relaxed">
              New high-agency specializations in AI agent design, vector infrastructure, AI security, and algorithmic compliance expand rapidly.
            </p>
          </div>
        </div>

        {/* The Central Question Callout */}
        <div className="py-6 border-y border-neutral-800 max-w-3xl mx-auto">
          <p className="font-serif italic text-lg sm:text-2xl md:text-3xl text-neutral-200 leading-snug">
            "Which jobs will change, which jobs will decline, and who will adapt fast enough?"
          </p>
        </div>

        {/* The Concluding Verdict Banner */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <div className="px-8 py-4 bg-neutral-900 border border-neutral-700 font-mono text-sm md:text-base font-black tracking-widest text-neutral-300 uppercase">
            2026 → <span className="text-bone">ADAPT</span>
          </div>
          <span className="font-serif text-2xl text-amberAccent font-black hidden sm:inline">⟶</span>
          <div className="px-8 py-4 bg-amberAccent border border-amber-600 font-mono text-sm md:text-base font-black tracking-widest text-bone uppercase shadow-lg">
            2030 → <span>THRIVE</span>
          </div>
        </div>

        {/* Quick Return CTAs */}
        <div className="flex flex-wrap justify-center items-center gap-4 pt-6 font-mono text-xs">
          <a
            href="#simulator"
            className="px-6 py-3 bg-bone text-ink font-bold uppercase tracking-wider hover:bg-neutral-200 transition-colors"
          >
            RUN SCENARIO SIMULATOR →
          </a>
          <a
            href="#methodology"
            className="px-6 py-3 border border-neutral-700 text-neutral-300 font-bold uppercase tracking-wider hover:text-bone hover:border-neutral-500 transition-colors"
          >
            REVIEW RESEARCH SOURCES
          </a>
        </div>
      </div>
    </section>
  );
};
