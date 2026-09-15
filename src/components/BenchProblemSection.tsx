import React, { useState } from 'react';
import { benchFlowStages } from '../data/benchData';
import { DataStatusBadge } from './DataStatusBadge';
import { BenchTrendVisualChart } from './ResearchCharts';
import { AlertCircle } from 'lucide-react';

export const BenchProblemSection: React.FC = () => {
  const [selectedStageIndex, setSelectedStageIndex] = useState(2); // Default to The Bench
  const currentStage = benchFlowStages[selectedStageIndex];

  return (
    <section id="bench-problem" className="py-16 md:py-24 px-4 sm:px-8 border-b border-hairline bg-bone">
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Section Header */}
        <div className="border-b border-hairline pb-4 flex flex-wrap items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs tracking-widest text-neutral-500 uppercase font-bold">
                SCREEN 04 • UNDERSTANDING THE BENCH
              </span>
              <DataStatusBadge status="INDUSTRY ESTIMATE" />
            </div>
            <h2 className="font-serif font-bold text-3xl md:text-4xl text-ink mt-1">
              WHAT DOES "BENCH" MEAN?
            </h2>
          </div>
          <div className="font-mono text-xs text-neutral-600 max-w-md text-left md:text-right">
            In IT companies, "bench" means an employee who is currently not assigned to a client project while waiting for their next assignment.
          </div>
        </div>

        {/* Critical Distinction Banner */}
        <div className="bg-amber-50 border border-amber-300 p-5 font-sans text-xs text-amber-950 space-y-2 shadow-sm">
          <div className="flex items-center gap-2 font-mono font-bold uppercase tracking-wider text-amber-900">
            <AlertCircle className="w-4 h-4 text-amber-700 shrink-0" />
            IMPORTANT: BEING ON THE BENCH IS NOT JOB LOSS
          </div>
          <p className="leading-relaxed">
            In IT companies, the <strong>Bench</strong> is a normal pool of employees (usually 14%–18% of the company) waiting between client projects. It does <strong>not</strong> mean you have lost your job. Employees continue to receive their normal salary while using this time for training in modern AI and cloud skills.
          </p>
          <p className="leading-relaxed text-amber-900 font-medium">
            <strong>Why does it matter with AI?</strong> AI helps teams finish some tasks faster. This could change team sizes on certain projects, but it does NOT mean everyone waiting for a project will lose their job.
          </p>
        </div>

        {/* Graph 04: Bench Trend Chart (2021 to 2030) */}
        <BenchTrendVisualChart />

        {/* 6-Stage Visual Flow Grid */}
        <div>
          <div className="flex justify-between items-center mb-3 font-mono text-xs text-neutral-500 uppercase font-bold">
            <span>HOW EMPLOYEES MOVE BETWEEN PROJECTS (CLICK ANY STEP)</span>
            <span>6 PHASES</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3">
            {benchFlowStages.map((stage, idx) => {
              const isSelected = idx === selectedStageIndex;
              return (
                <div
                  key={stage.stepNumber}
                  onClick={() => setSelectedStageIndex(idx)}
                  className={`p-4 border transition-all cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? 'bg-ink text-bone border-ink shadow-md scale-102'
                      : 'bg-cream text-ink border-hairline hover:border-ink'
                  }`}
                >
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className={`font-mono text-xs font-bold ${isSelected ? 'text-amberAccent' : 'text-neutral-400'}`}>
                        {stage.stepNumber}
                      </span>
                      <span className={`text-[0.6rem] font-mono px-1 py-0.5 ${isSelected ? 'bg-neutral-800 text-neutral-200' : 'bg-parchment text-neutral-700'}`}>
                        {stage.estimatedShare}
                      </span>
                    </div>
                    <h4 className="font-serif font-bold text-sm leading-tight mb-2">
                      {stage.title}
                    </h4>
                  </div>
                  <div className="pt-2 border-t border-hairline/40 text-[0.65rem] font-mono flex items-center justify-between">
                    <span className={isSelected ? 'text-neutral-300' : 'text-neutral-500'}>
                      {isSelected ? 'SELECTED' : 'CLICK TO VIEW'}
                    </span>
                    <span className={isSelected ? 'text-amberAccent font-bold' : 'text-neutral-400'}>
                      →
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Selected Stage Detail Dossier */}
        {currentStage && (
          <div className="bg-cream border border-hairline p-6 md:p-8 shadow-sm">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 pb-4 border-b border-hairline">
              <div>
                <span className="font-mono text-xs font-bold uppercase text-amberAccent">
                  STEP {currentStage.stepNumber} IN DETAIL
                </span>
                <h3 className="font-serif font-black text-2xl text-ink mt-0.5">
                  {currentStage.title}
                </h3>
              </div>
              <div className="flex items-center gap-2">
                <span className="bg-parchment border border-hairline px-3 py-1 font-mono text-xs font-bold text-ink">
                  ESTIMATE: {currentStage.estimatedShare}
                </span>
                <DataStatusBadge status={currentStage.status} />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-6 text-xs font-sans">
              <div className="p-4 bg-bone border border-hairline space-y-2">
                <span className="font-mono text-[0.65rem] font-bold text-neutral-500 uppercase block">
                  WHAT THIS STEP MEANS
                </span>
                <p className="text-neutral-700 leading-relaxed">
                  {currentStage.description}
                </p>
              </div>

              <div className="p-4 bg-bone border border-hairline space-y-2">
                <span className="font-mono text-[0.65rem] font-bold text-neutral-500 uppercase block">
                  WHAT ACTUALLY HAPPENS
                </span>
                <p className="text-neutral-700 leading-relaxed">
                  {currentStage.operationalReality}
                </p>
              </div>

              <div className="p-4 bg-bone border border-hairline space-y-2">
                <span className="font-mono text-[0.65rem] font-bold text-amber-800 uppercase block">
                  HOW COMPANIES &amp; WORKERS RESPOND
                </span>
                <p className="text-neutral-700 leading-relaxed font-medium">
                  {currentStage.mitigationPath}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
