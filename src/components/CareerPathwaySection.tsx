import React, { useState } from 'react';
import { careerTracks } from '../data/careerRoadmapsData';
import { DataStatusBadge } from './DataStatusBadge';

export const CareerPathwaySection: React.FC = () => {
  const [activeTrackId, setActiveTrackId] = useState('java-backend');
  const track = careerTracks[activeTrackId];

  const trackButtons = [
    { id: 'java-backend', label: 'JAVA BACKEND' },
    { id: 'frontend', label: 'FRONTEND / UI' },
    { id: 'fullstack', label: 'FULL STACK' },
    { id: 'qa', label: 'QA & TESTING' },
    { id: 'devops', label: 'DEVOPS / CLOUD' },
    { id: 'data', label: 'DATA & AI' },
    { id: 'security', label: 'CYBERSECURITY' },
    { id: 'product', label: 'PRODUCT / BA' }
  ];

  const timelineRoadmap = [
    { year: 'STEP 1', title: 'START WITH CORE SOFTWARE', desc: 'Programming basics, problem solving, databases, and writing clean code.' },
    { year: 'STEP 2', title: 'USE AI IN YOUR DAILY WORK', desc: 'Work with AI coding helpers, write prompts, and connect smart AI APIs.' },
    { year: 'STEP 3', title: 'UNDERSTAND BIGGER SYSTEMS', desc: 'Cloud servers, automated testing pipelines, and connecting microservices.' },
    { year: 'STEP 4', title: 'MASTER A SPECIFIC INDUSTRY', desc: 'Deep business understanding in areas like Banking, Health, or Automotive.' },
    { year: 'STEP 5', title: 'MOVE TO SENIOR & LEAD ROLES', desc: 'Design large-scale systems, guide AI tools, and solve complex business problems.' }
  ];

  return (
    <section id="roadmaps" className="py-16 md:py-24 px-4 sm:px-8 border-b border-hairline bg-bone">
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Section Header */}
        <div className="border-b border-hairline pb-4 flex flex-wrap items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs tracking-widest text-neutral-500 uppercase font-bold">
                SCREEN 14 • CAREER ADVICE
              </span>
              <DataStatusBadge status="FORECAST" />
            </div>
            <h2 className="font-serif font-bold text-3xl md:text-4xl text-ink mt-1">
              HOW CAN YOU PREPARE FOR THE FUTURE?
            </h2>
          </div>
          <div className="font-mono text-xs text-neutral-600 max-w-md text-left md:text-right">
            Simple step-by-step guides showing how different software and IT jobs can upgrade their skills over the next 5 years.
          </div>
        </div>

        {/* Master 5-Year Survival Sequence Banner */}
        <div className="bg-cream border border-hairline p-6 shadow-sm">
          <span className="font-mono text-xs uppercase font-bold text-neutral-500 tracking-widest block mb-4">
            5 STEPS TO BUILD A FUTURE-PROOF CAREER
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-3 font-mono text-xs">
            {timelineRoadmap.map((step) => (
              <div key={step.year} className="p-3 bg-bone border border-hairline flex flex-col justify-between">
                <div>
                  <span className="text-amberAccent font-black text-sm block">{step.year}</span>
                  <div className="font-bold text-ink text-[0.7rem] uppercase mt-0.5 leading-tight">{step.title}</div>
                </div>
                <p className="font-sans text-[0.68rem] text-neutral-600 mt-2 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Track Selection Buttons */}
        <div className="flex flex-wrap gap-2 font-mono text-xs">
          {trackButtons.map(t => (
            <button
              key={t.id}
              onClick={() => setActiveTrackId(t.id)}
              className={`px-3 py-2 border transition-all cursor-pointer font-bold ${
                t.id === activeTrackId
                  ? 'bg-ink text-bone border-ink shadow-sm'
                  : 'bg-cream text-neutral-700 border-hairline hover:border-ink'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Overview Blueprint Card */}
        {track && (
          <div className="bg-cream p-6 md:p-8 border border-hairline shadow-sm space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-hairline pb-4">
              <div>
                <span className="font-mono text-xs tracking-widest text-neutral-500 uppercase font-bold">
                  CAREER UPGRADE BLUEPRINT
                </span>
                <h3 className="font-serif font-bold text-2xl md:text-3xl text-ink mt-1">{track.title}</h3>
              </div>
              <div className="text-left sm:text-right">
                <span className="font-mono text-[0.65rem] text-neutral-500 uppercase block">FUTURE TARGET ROLE</span>
                <span className="font-mono text-xs font-bold text-ink bg-bone px-3 py-1 border border-hairline inline-block mt-0.5">
                  {track.target2030Role}
                </span>
              </div>
            </div>

            {/* 4-Columns Matrix */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* 1. Current Foundation */}
              <div className="bg-bone p-4 border border-hairline flex flex-col justify-between">
                <div>
                  <div className="font-mono text-[0.65rem] text-neutral-500 uppercase font-bold mb-1">01 • WHAT THIS ROLE DOES TODAY</div>
                  <div className="font-serif font-bold text-ink text-sm mb-3">{track.currentRole}</div>
                </div>
                <div className="flex flex-wrap gap-1 mt-2">
                  {track.currentSkills.map(s => (
                    <span key={s} className="bg-cream px-2 py-0.5 border border-hairline font-mono text-[0.65rem] text-neutral-700">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              {/* 2. AI-Assisted Tasks */}
              <div className="bg-bone p-4 border border-hairline flex flex-col justify-between">
                <div>
                  <div className="font-mono text-[0.65rem] text-neutral-500 uppercase font-bold mb-1">02 • TASKS AI CAN HELP WITH</div>
                  <div className="font-sans text-xs text-neutral-700 font-medium mb-2">AI handles routine repetitive work:</div>
                  <ul className="space-y-1.5 text-xs text-neutral-600">
                    {track.aiAssistedTasks.map(t => (
                      <li key={t} className="flex items-start gap-1.5">
                        <span className="text-neutral-400 font-bold">•</span>
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* 3. Human Value Moat */}
              <div className="bg-bone p-4 border border-hairline flex flex-col justify-between">
                <div>
                  <div className="font-mono text-[0.65rem] text-neutral-500 uppercase font-bold mb-1">03 • WHAT ONLY HUMANS DO WELL</div>
                  <div className="font-sans text-xs text-neutral-700 font-medium mb-2">Essential human strengths:</div>
                  <ul className="space-y-1.5 text-xs text-neutral-600">
                    {track.humanValueMoat.map(m => (
                      <li key={m} className="flex items-start gap-1.5">
                        <span className="text-neutral-400 font-bold">•</span>
                        <span>{m}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* 4. Future Skills Mandate */}
              <div className="bg-bone p-4 border border-hairline flex flex-col justify-between">
                <div>
                  <div className="font-mono text-[0.65rem] text-neutral-500 uppercase font-bold mb-1">04 • SKILLS TO LEARN FOR THE FUTURE</div>
                  <div className="font-sans text-xs text-neutral-700 font-medium mb-2">High-value modern tools &amp; concepts:</div>
                </div>
                <div className="flex flex-wrap gap-1 mt-2">
                  {track.futureSkills.map(s => (
                    <span key={s} className="bg-cream px-2 py-0.5 border border-hairline font-mono text-[0.65rem] text-neutral-800">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Step-by-Step Transition Journey */}
            <div className="pt-4 border-t border-hairline">
              <span className="font-mono text-xs uppercase font-bold text-neutral-500 tracking-widest block mb-4">
                STEP-BY-STEP PROGRESSION:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {track.stages.map(stage => (
                  <div key={stage.step} className="bg-bone p-4 border border-hairline space-y-2 flex flex-col justify-between">
                    <div className="space-y-2">
                      <div className="flex justify-between items-center text-[0.65rem] font-mono">
                        <span className="font-bold text-neutral-400">{stage.step}</span>
                        <span className="px-1.5 py-0.5 font-bold bg-parchment text-neutral-600 border border-hairline">{stage.statusLabel}</span>
                      </div>
                      <h5 className="font-serif font-bold text-sm text-ink">{stage.title}</h5>
                      <p className="text-xs font-sans text-neutral-600 leading-relaxed">{stage.description}</p>
                    </div>
                    <div className="pt-2 border-t border-hairline text-[0.7rem] font-mono text-neutral-700 font-semibold">
                      <span className="text-neutral-500">NEXT STEP:</span> {stage.action}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
