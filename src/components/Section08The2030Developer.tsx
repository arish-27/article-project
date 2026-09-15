import React from 'react';
import { Plus, Equal, Terminal, Sparkles, Bot, Cloud, Shield, Target } from 'lucide-react';

export const Section08The2030Developer: React.FC = () => {
  const formulaElements = [
    { name: 'FUNDAMENTALS', icon: Terminal, desc: 'Algorithms, memory, SQL, data structures' },
    { name: 'AI', icon: Sparkles, desc: 'LLM APIs, prompt engineering, fine-tuning' },
    { name: 'AUTOMATION', icon: Bot, desc: 'Multi-agent loops, workflow orchestration' },
    { name: 'CLOUD', icon: Cloud, desc: 'Distributed infrastructure, GPU clusters' },
    { name: 'SECURITY', icon: Shield, desc: 'Adversarial defense, zero-trust integrity' },
    { name: 'PROBLEM SOLVING', icon: Target, desc: 'Business architecture & domain translation' },
  ];

  return (
    <section id="section-future-engineer" className="py-24 md:py-36 bg-[#111111] text-[#F8F6F1] border-b border-[#2A2A2A] relative overflow-hidden">
      {/* Subtle Background Grid */}
      <div className="absolute inset-0 dark-grid opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        {/* Section Header Meta */}
        <div className="max-w-4xl mb-14">
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-xs font-bold text-[#C25E2E] tracking-widest uppercase">
              SECTION 08 • FINAL MONOGRAPH
            </span>
            <span className="text-neutral-600">—</span>
            <span className="font-mono text-xs text-neutral-400 uppercase tracking-widest">
              THE 2030 SYNTHESIS
            </span>
          </div>

          {/* Large Editorial Statement */}
          <div className="border-l-2 border-[#C25E2E] pl-6 sm:pl-10 my-8">
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal leading-[1.15] text-[#FAF8F5] mb-6 tracking-tight">
              “AI can generate code.
            </h2>
            <p className="font-serif text-2xl sm:text-4xl lg:text-5xl font-light italic leading-snug text-neutral-300">
              Engineers still need to understand what should be built, why it should be built, and whether the result is actually correct.”
            </p>
          </div>
        </div>

        {/* Visual Formula Equation */}
        <div className="mt-16 pt-12 border-t border-[#262626]">
          <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-[#C25E2E] font-bold block mb-8 text-center sm:text-left">
            THE ARCHITECTURAL EQUATION FOR 2030
          </span>

          {/* Equation Pipeline on Desktop / Stacked on Mobile */}
          <div className="flex flex-wrap items-center justify-center lg:justify-between gap-3 bg-[#181818] border border-[#2D2D2D] p-6 sm:p-8">
            {formulaElements.map((el, idx) => (
              <React.Fragment key={el.name}>
                {/* Element Pill */}
                <div className="flex flex-col items-center text-center p-3 sm:p-4 bg-[#202020] border border-[#333333] hover:border-[#C25E2E] transition-colors w-[140px] sm:w-[155px]">
                  <el.icon className="w-5 h-5 text-[#C25E2E] mb-2" />
                  <span className="font-mono text-xs font-bold text-white tracking-wider">
                    {el.name}
                  </span>
                  <span className="font-sans text-[10px] text-neutral-400 mt-1 leading-tight">
                    {el.desc}
                  </span>
                </div>

                {/* Plus Sign */}
                {idx < formulaElements.length - 1 && (
                  <div className="text-neutral-500 font-mono text-sm font-bold px-1">
                    <Plus className="w-4 h-4 text-[#C25E2E]" />
                  </div>
                )}
              </React.Fragment>
            ))}

            {/* Equals Sign */}
            <div className="w-full lg:w-auto flex justify-center py-2 lg:py-0 text-[#C25E2E]">
              <Equal className="w-6 h-6" />
            </div>

            {/* Target Outcome: AI-NATIVE ENGINEER */}
            <div className="w-full lg:w-auto p-5 bg-[#C25E2E] text-white border border-[#D96B36] text-center shadow-lg">
              <span className="font-mono text-[10px] tracking-widest uppercase block text-white/80 font-bold mb-1">
                EMERGENT PROFILE
              </span>
              <span className="font-serif text-lg sm:text-xl font-black tracking-tight text-white block">
                AI-NATIVE ENGINEER
              </span>
              <span className="font-mono text-[10px] text-white/85 mt-1 block">
                High-leverage architectural leader
              </span>
            </div>
          </div>

          {/* Commentary Subtext */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-neutral-400 text-xs font-mono leading-relaxed">
            <div className="border-t border-[#262626] pt-3">
              <span className="text-white font-bold block mb-1">01 • SYNTAX IS COMMODITIZED</span>
              Typing code is no longer the bottleneck. Clarity of functional specifications and edge invariant boundaries is.
            </div>
            <div className="border-t border-[#262626] pt-3">
              <span className="text-white font-bold block mb-1">02 • VERIFICATION IS THE WORK</span>
              Every generated line must be validated against performance, state integrity, and real-world failure modes.
            </div>
            <div className="border-t border-[#262626] pt-3">
              <span className="text-white font-bold block mb-1">03 • HUMAN CONTEXT PREVAILS</span>
              Business empathy, user understanding, and ethical discretion cannot be synthesized into an API prompt.
            </div>
          </div>

          {/* Concluding Monograph Photo */}
          <div className="mt-12 border border-[#2D2D2D] bg-[#181818] p-2.5 sm:p-3 shadow-lg">
            <div className="relative overflow-hidden aspect-[16/7] sm:aspect-[2.8/1]">
              <img
                src="/images/urban_tech_ripple.jpg"
                alt="Urban tech ecosystem and engineering innovation skyline"
                className="w-full h-full object-cover filter brightness-90 contrast-110"
              />
              <div className="absolute top-3 left-3 bg-[#111111]/90 backdrop-blur-xs text-[#F8F6F1] font-mono text-[10px] uppercase px-2.5 py-1 tracking-wider border border-[#333333]">
                MONOGRAPH FINALE • 2030 SYNTHESIS
              </div>
            </div>
            <div className="pt-2.5 pb-1 px-1 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 text-xs font-mono text-neutral-400">
              <p className="font-sans text-xs text-neutral-300">
                <span className="font-mono font-bold text-[#C25E2E] mr-1.5">FIG 8.1</span>
                The 2030 Synthesis: Technology architecture expands beyond isolated software repos into urban infrastructure, real-world distributed state, and human-directed AI systems.
              </p>
              <span className="text-[10px] text-neutral-500 uppercase whitespace-nowrap">
                RESEARCH DOSSIER COMPLETE
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
