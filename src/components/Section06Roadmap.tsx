import React, { useState } from 'react';
import { Terminal, Cpu, Bot, Network, Sparkles, CheckCircle2 } from 'lucide-react';

export const Section06Roadmap: React.FC = () => {
  const [selectedYear, setSelectedYear] = useState<number>(2026);

  const roadmapStages = [
    {
      year: 2026,
      stage: 'FOUNDATION',
      title: 'Core Computing Principles & Tooling',
      icon: Terminal,
      skills: ['Java', 'SQL', 'DSA', 'Git', 'Linux'],
      summary: 'Before directing synthetic output, engineers must thoroughly understand execution runtimes, data structures, and relational schemas.',
      quote: 'You cannot audit or verify code you do not fundamentally know how to execute.',
    },
    {
      year: 2027,
      stage: 'AI-ASSISTED ENGINEER',
      title: 'Generative Synthesis & Copilot Ergonomics',
      icon: Cpu,
      skills: ['LLM tools', 'AI coding assistants', 'Prompting', 'AI APIs', 'AI-assisted debugging'],
      summary: 'Pairing with generative copilots becomes habitual. Speed increases across test scaffolding, boilerplate writing, and error trace analysis.',
      quote: 'AI is an extension of developer leverage, multiplying individual output volume.',
    },
    {
      year: 2028,
      stage: 'AUTOMATION ENGINEER',
      title: 'Agentic Workflows & System Orchestration',
      icon: Bot,
      skills: ['AI agents', 'Workflow automation', 'API integration', 'Cloud', 'DevOps'],
      summary: 'Transitioning from single-prompt interactions to orchestrating multi-agent loops, continuous integration hooks, and event-driven micro-pipelines.',
      quote: 'Software engineering becomes the orchestration of self-directing task agents.',
    },
    {
      year: 2029,
      stage: 'AI-ENABLED SOFTWARE ENGINEER',
      title: 'Deep System Architecture & Distributed Intelligence',
      icon: Network,
      skills: ['AI inside applications', 'System design', 'Backend architecture', 'Security', 'Scalable deployment'],
      summary: 'Embedding models natively within enterprise business logic. Focus shifts entirely to concurrency, distributed state, failovers, and latency.',
      quote: 'Models are volatile components; robust system design makes them dependable.',
    },
    {
      year: 2030,
      stage: 'AI-NATIVE ENGINEER',
      title: 'Strategic Verification & Complex Synthesis',
      icon: Sparkles,
      skills: ['Build systems with AI', 'Manage AI agents', 'Evaluate AI output', 'Secure AI systems', 'Solve complex business problems'],
      summary: 'The engineer acts as chief architect and sovereign validator. Defining the problem domain, ensuring safety invariants, and deploying synthetic swarms.',
      quote: 'The ultimate skill of 2030: Discerning what should exist, and proving that it runs safely.',
    },
  ];

  return (
    <section id="section-roadmap" className="py-20 md:py-28 border-b border-[#E5E0D8] bg-[#F8F6F1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-3 mb-3">
            <span className="font-mono text-xs font-bold text-[#C25E2E] tracking-widest uppercase">
              SECTION 06
            </span>
            <span className="text-[#DDD7CC]">—</span>
            <span className="font-mono text-xs text-neutral-500 uppercase tracking-widest">
              CURRICULUM TRAJECTORY
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-black text-neutral-900 tracking-tight leading-[1.08] mb-6">
            2026 → 2030 ROADMAP
          </h2>
          <p className="font-sans text-lg sm:text-xl text-neutral-700 leading-relaxed font-normal">
            A structured progression for software professionals transitioning from conventional syntax developers to AI-native system directors.
          </p>
        </div>

        {/* Premium Visual Timeline Track (Not generic cards) */}
        <div className="relative border-l-2 border-neutral-900 ml-4 sm:ml-8 pl-6 sm:pl-12 space-y-12">
          {roadmapStages.map((stage, idx) => {
            const isSelected = selectedYear === stage.year;
            const Icon = stage.icon;

            return (
              <div
                key={stage.year}
                onClick={() => setSelectedYear(stage.year)}
                className={`relative group cursor-pointer transition-all duration-200 ${
                  isSelected ? 'opacity-100' : 'opacity-85 hover:opacity-100'
                }`}
              >
                {/* Timeline Dot on the Rail */}
                <div
                  className={`absolute -left-[31px] sm:-left-[55px] top-1.5 w-5 h-5 rounded-none flex items-center justify-center border-2 transition-all ${
                    isSelected
                      ? 'bg-[#C25E2E] border-neutral-900 ring-4 ring-[#FAF8F5]'
                      : 'bg-white border-neutral-900 group-hover:bg-[#C25E2E]'
                  }`}
                >
                  <div className="w-1.5 h-1.5 bg-neutral-900" />
                </div>

                {/* Main Content Row */}
                <div className={`p-6 sm:p-8 border transition-all ${
                  isSelected
                    ? 'bg-white border-neutral-900 shadow-sm'
                    : 'bg-[#FCFBF9] border-[#E5E0D8] hover:border-neutral-400'
                }`}>
                  {/* Top Bar: Year & Stage Title */}
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between pb-4 mb-4 border-b border-[#F0EBE1] gap-2">
                    <div className="flex items-baseline gap-3">
                      <span className="font-mono text-xl sm:text-2xl font-black text-neutral-900">
                        {stage.year}
                      </span>
                      <span className="text-[#C25E2E] font-serif font-bold text-lg">
                        — {stage.stage}
                      </span>
                    </div>
                    <span className="font-mono text-xs text-neutral-500 uppercase tracking-widest">
                      MILESTONE 0{idx + 1}
                    </span>
                  </div>

                  {/* Stage Subtitle & Summary */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                    <div className="lg:col-span-7 space-y-3">
                      <h3 className="font-serif text-lg font-bold text-neutral-900">
                        {stage.title}
                      </h3>
                      <p className="font-sans text-sm text-neutral-600 leading-relaxed">
                        {stage.summary}
                      </p>
                      <p className="font-serif italic text-xs text-neutral-800 border-l-2 border-[#C25E2E] pl-3 py-0.5">
                        “{stage.quote}”
                      </p>
                    </div>

                    {/* Skill Tags Pill Group */}
                    <div className="lg:col-span-5 bg-[#FAF8F5] p-4 border border-[#EAE5DC]">
                      <span className="font-mono text-[10px] uppercase tracking-wider text-neutral-500 font-bold block mb-2.5">
                        TECHNICAL CAPABILITY ARTIFACTS
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {stage.skills.map((skill) => (
                          <span
                            key={skill}
                            className="font-mono text-xs px-2.5 py-1 bg-white border border-[#E2DDD5] text-neutral-900 font-medium"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Note */}
        <div className="mt-12 pt-6 border-t border-[#E5E0D8] flex justify-between items-center text-xs font-mono text-neutral-500">
          <span>PROGRESSION HORIZON: 5 CONTINUOUS ACCRETIVE STAGES</span>
          <span className="font-bold text-neutral-900">2026 → 2030</span>
        </div>
      </div>
    </section>
  );
};
