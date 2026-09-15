import React, { useState, useEffect, useRef } from 'react';
import { ArrowDown, Sparkles, ChevronRight } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const timelineRef = useRef<HTMLDivElement>(null);

  const timelineSteps = [
    {
      year: '2026',
      label: 'LEARN AI',
      desc: 'Master fundamentals while learning prompt ergonomics, LLM interfaces, and assisted workflows.',
      stage: 'Phase 01',
    },
    {
      year: '2027',
      label: 'WORK WITH AI',
      desc: 'Pair program with copilots across everyday writing, refactoring, unit tests, and debugging.',
      stage: 'Phase 02',
    },
    {
      year: '2028',
      label: 'AUTOMATE WITH AI',
      desc: 'Orchestrate agents, autonomous pipelines, and API integrations across developer workflows.',
      stage: 'Phase 03',
    },
    {
      year: '2029',
      label: 'BUILD AI-ENABLED SYSTEMS',
      desc: 'Embed intelligence directly into software architecture, data layers, and distributed systems.',
      stage: 'Phase 04',
    },
    {
      year: '2030',
      label: 'BECOME AI-NATIVE',
      desc: 'Direct multi-agent architectures, verify critical output, and steer complex enterprise intent.',
      stage: 'Phase 05',
    },
  ];

  // Scroll-driven progressive reveal of the timeline
  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;
      const rect = timelineRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate progress through the timeline container
      if (rect.top < windowHeight * 0.85) {
        const scrolledIntoSection = (windowHeight * 0.85) - rect.top;
        const totalTravel = rect.height + windowHeight * 0.3;
        const ratio = Math.min(Math.max(scrolledIntoSection / totalTravel, 0), 1);
        const stepIndex = Math.min(Math.floor(ratio * timelineSteps.length), timelineSteps.length - 1);
        setActiveStep(stepIndex);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [timelineSteps.length]);

  return (
    <section id="hero" className="relative pt-12 pb-20 md:pt-20 md:pb-28 border-b border-[#E5E0D8] bg-[#F8F6F1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Editorial Masthead / Header Meta */}
        <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 mb-10 border-b border-[#111111]/15 text-neutral-600 font-mono text-[11px] tracking-wider uppercase">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#C25E2E] animate-pulse" />
            <span className="font-bold text-neutral-900">WORKFORCE INTELLIGENCE BRIEFING</span>
          </div>
          <div className="mt-2 md:mt-0 flex items-center gap-4">
            <span>HORIZON 2026 → 2030</span>
            <span>•</span>
            <span>RESEARCH MONOGRAPH</span>
          </div>
        </div>

        {/* Main Headline Block */}
        <div className="max-w-5xl">
          <span className="inline-block font-mono text-xs uppercase tracking-[0.25em] text-[#C25E2E] font-semibold mb-4">
            THE EDITORIAL ESSAY ON ENGINEERING VALUE
          </span>
          <h1 className="font-serif text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight text-neutral-900 leading-[0.98] mb-8">
            THE IT JOBS SHIFT
          </h1>
          <p className="font-serif text-2xl sm:text-3xl text-neutral-800 leading-snug font-normal max-w-3xl italic mb-6">
            “What AI changes between 2026 → 2030 — and how developers can stay valuable.”
          </p>
          <p className="font-sans text-base sm:text-lg text-neutral-600 leading-relaxed max-w-2xl font-normal">
            AI will not simply erase IT careers. It will change what companies expect from people who build, test, deploy and maintain technology.
          </p>
        </div>

        {/* Magazine Lead Editorial Feature Image */}
        <div className="mt-12 border border-[#E5E0D8] bg-white p-2.5 sm:p-3 shadow-sm">
          <div className="relative overflow-hidden aspect-[16/9] sm:aspect-[2.4/1]">
            <img
              src="/images/ai_software_engineers.jpg"
              alt="Engineers collaborating with generative AI in modern development lab"
              className="w-full h-full object-cover filter contrast-[1.03]"
            />
            <div className="absolute top-3 left-3 bg-[#111111]/85 backdrop-blur-xs text-[#F8F6F1] font-mono text-[10px] uppercase px-2.5 py-1 tracking-wider">
              COVER REPORT • DISPATCH
            </div>
          </div>
          <div className="pt-3 pb-1 px-2 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-t border-[#F0EBE1] text-xs font-mono text-neutral-500">
            <p className="font-sans text-xs text-neutral-700">
              <span className="font-mono font-bold text-[#C25E2E] mr-1.5">FIG 0.1</span>
              Software engineering teams pairing with generative copilot models inside high-throughput development labs (2026–2030 Horizon).
            </p>
            <span className="text-[10px] text-neutral-400 uppercase whitespace-nowrap">
              ARCHIVE: TECHNOLOGY INTELLIGENCE
            </span>
          </div>
        </div>

        {/* 2026 → 2030 Progressive Timeline Strip */}
        <div ref={timelineRef} className="mt-16 pt-10 border-t border-[#E5E0D8]">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-8">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-neutral-500">
                SCROLL-DRIVEN PROGRESSION
              </span>
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-neutral-900 mt-1">
                The 5-Year Developer Evolutionary Arc
              </h2>
            </div>
            <div className="mt-3 sm:mt-0 flex items-center gap-2 font-mono text-xs text-neutral-500">
              <span>ACTIVE HORIZON:</span>
              <span className="px-2 py-0.5 bg-neutral-900 text-[#F8F6F1] font-bold">
                {timelineSteps[activeStep].year} — {timelineSteps[activeStep].label}
              </span>
            </div>
          </div>

          {/* Timeline Track & Cards */}
          <div className="relative">
            {/* Horizontal Connecting Guide Line */}
            <div className="hidden lg:block absolute top-7 left-0 right-0 h-[1px] bg-[#D8D2C7] z-0" />
            <div
              className="hidden lg:block absolute top-7 left-0 h-[2px] bg-[#C25E2E] z-0 transition-all duration-500 ease-out"
              style={{ width: `${(activeStep / (timelineSteps.length - 1)) * 100}%` }}
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 relative z-10">
              {timelineSteps.map((step, idx) => {
                const isActive = idx === activeStep;
                const isPassed = idx <= activeStep;

                return (
                  <div
                    key={step.year}
                    onClick={() => setActiveStep(idx)}
                    className={`cursor-pointer transition-all duration-300 p-5 border text-left ${
                      isActive
                        ? 'bg-white border-[#111111] shadow-md -translate-y-1'
                        : isPassed
                        ? 'bg-white/70 border-[#E5E0D8] hover:border-neutral-400'
                        : 'bg-[#F4F1EA]/60 border-[#EAE5DC] opacity-75 hover:opacity-100'
                    }`}
                  >
                    {/* Node / Marker */}
                    <div className="flex items-center justify-between mb-4">
                      <span
                        className={`font-mono text-xs font-bold px-2 py-0.5 tracking-wider ${
                          isActive
                            ? 'bg-[#111111] text-[#F8F6F1]'
                            : isPassed
                            ? 'bg-[#EAE5DC] text-neutral-800'
                            : 'bg-transparent border border-[#DDD7CC] text-neutral-400'
                        }`}
                      >
                        {step.year}
                      </span>
                      <span className="font-mono text-[10px] tracking-wider text-neutral-400">
                        {step.stage}
                      </span>
                    </div>

                    {/* Step Title */}
                    <h3
                      className={`font-serif text-lg font-bold tracking-tight mb-2 ${
                        isActive ? 'text-[#C25E2E]' : 'text-neutral-900'
                      }`}
                    >
                      {step.label}
                    </h3>

                    {/* Step Description */}
                    <p className="font-sans text-xs leading-relaxed text-neutral-600">
                      {step.desc}
                    </p>

                    {/* Active Indicator Bar */}
                    <div className="mt-4 pt-3 border-t border-[#F0EBE1] flex items-center justify-between">
                      <span className="font-mono text-[10px] text-neutral-400">
                        {idx === activeStep ? 'IN FOCUS' : 'CLICK TO VIEW'}
                      </span>
                      {isActive && <ChevronRight className="w-3.5 h-3.5 text-[#C25E2E]" />}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Quick jump anchor to graph */}
          <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-6 border-t border-[#EAE5DC] text-xs font-mono text-neutral-500">
            <div className="flex items-center gap-2">
              <span className="font-bold text-neutral-900">CORE THESIS:</span>
              <span>Engineering relevance moves from syntax generation to verification and system architectural intent.</span>
            </div>
            <a
              href="#section-growth"
              className="inline-flex items-center gap-1 text-neutral-900 hover:text-[#C25E2E] transition-colors font-semibold"
            >
              <span>BEGIN READING</span>
              <ArrowDown className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
