import React from 'react';
import { Compass, Sparkles, Binary, Share2, Server, PackageCheck } from 'lucide-react';

export const Section07RelevancePrinciples: React.FC = () => {
  // Exactly 5 principles as required by instructions
  const principles = [
    {
      num: '01',
      title: 'MASTER FUNDAMENTALS',
      desc: 'Java, SQL, DSA, networking and system fundamentals.',
      details: 'Syntax syntax can be synthesized, but execution mechanics, runtime memory models, and transactional ACID constraints remain absolute.',
      icon: Binary,
    },
    {
      num: '02',
      title: 'USE AI DAILY',
      desc: 'Use AI for coding, debugging, learning, documentation and research.',
      details: 'Treat AI as an active collaborative copilot. Build ergonomic muscle memory around prompting, context priming, and validation loops.',
      icon: Sparkles,
    },
    {
      num: '03',
      title: 'LEARN AUTOMATION',
      desc: 'Connect APIs, databases, workflows and AI agents.',
      details: 'Move past single prompts to multi-agent loops. Chain LLMs to live database schemas, webhook events, and enterprise tools.',
      icon: Share2,
    },
    {
      num: '04',
      title: 'UNDERSTAND SYSTEMS',
      desc: 'Cloud, Linux, DevOps, security and deployment matter beyond code generation.',
      details: 'Generative tools fail silently without defensive architecture, distributed consensus, container orchestration, and zero-trust security.',
      icon: Server,
    },
    {
      num: '05',
      title: 'BUILD REAL PRODUCTS',
      desc: 'Use AI as leverage, but understand the architecture and business problem yourself.',
      details: 'The market rewards solved problems, not raw code volume. Own the end-to-end product architecture and domain problem intimately.',
      icon: PackageCheck,
    },
  ];

  return (
    <section id="section-principles" className="py-20 md:py-28 border-b border-[#E5E0D8] bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="max-w-4xl mb-16">
          <div className="flex items-center gap-3 mb-3">
            <span className="font-mono text-xs font-bold text-[#C25E2E] tracking-widest uppercase">
              SECTION 07
            </span>
            <span className="text-[#DDD7CC]">—</span>
            <span className="font-mono text-xs text-neutral-500 uppercase tracking-widest">
              STRATEGIC IMPERATIVES
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-black text-neutral-900 tracking-tight leading-[1.05] mb-6">
            DON’T COMPETE WITH AI.
            <br />
            <span className="text-[#C25E2E]">LEARN TO BUILD WITH IT.</span>
          </h2>
          <p className="font-sans text-lg sm:text-xl text-neutral-700 leading-relaxed font-normal">
            Five core tactical axioms for engineers navigating the transition from syntactical producers to high-leverage architectural directors.
          </p>
        </div>

        {/* 5 Principles - Clean Minimal Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {principles.map((item, idx) => {
            const Icon = item.icon;
            const isFullWidth = idx === 4; // 5th item takes remaining span on lg

            return (
              <div
                key={item.num}
                className={`bg-white border border-[#E5E0D8] p-6 sm:p-8 flex flex-col justify-between hover:border-neutral-900 transition-all ${
                  isFullWidth ? 'md:col-span-2 lg:col-span-2' : ''
                }`}
              >
                <div>
                  {/* Top Bar */}
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#F0EBE1]">
                    <span className="font-mono text-xl font-bold text-[#C25E2E]">
                      {item.num}
                    </span>
                    <Icon className="w-5 h-5 text-neutral-400" />
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-neutral-900 tracking-tight mb-2">
                    {item.title}
                  </h3>

                  {/* Principle Core Sentence */}
                  <p className="font-sans text-sm font-semibold text-neutral-800 mb-3">
                    {item.desc}
                  </p>

                  {/* Detail */}
                  <p className="font-sans text-xs text-neutral-500 leading-relaxed">
                    {item.details}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#F5F2EB] flex items-center justify-between text-[10px] font-mono text-neutral-400 uppercase">
                  <span>PRINCIPLE {item.num} OF 05</span>
                  <span className="text-neutral-900 font-bold">CORE AXIOM</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
