import React, { useState } from 'react';
import { decliningJobsData } from '../data/jobsRiskData';
import { DataStatusBadge } from './DataStatusBadge';
import { JobRiskMatrixChart } from './ResearchCharts';
import { ShieldAlert, Sparkles } from 'lucide-react';

export const JobsAtRiskSection: React.FC = () => {
  const [selectedRiskFilter, setSelectedRiskFilter] = useState('all');

  const filteredJobs = decliningJobsData.filter(j => {
    if (selectedRiskFilter === 'all') return true;
    return j.riskCategory === selectedRiskFilter;
  });

  return (
    <section id="jobs-at-risk" className="py-16 md:py-24 px-4 sm:px-8 border-b border-hairline bg-cream">
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Section Header */}
        <div className="border-b border-hairline pb-4 flex flex-wrap items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs tracking-widest text-neutral-500 uppercase font-bold">
                SCREEN 11 • ROLES WITH HIGH REPETITIVE WORK
              </span>
              <DataStatusBadge status="ESTIMATED" />
            </div>
            <h2 className="font-serif font-bold text-3xl md:text-4xl text-ink mt-1">
              WHICH IT JOBS COULD CHANGE THE MOST?
            </h2>
          </div>
          {/* Risk Level Filters */}
          <div className="flex items-center gap-2 font-mono text-xs font-bold">
            <button
              onClick={() => setSelectedRiskFilter('all')}
              className={`px-3 py-1.5 border transition-all cursor-pointer ${
                selectedRiskFilter === 'all'
                  ? 'bg-ink text-bone border-ink'
                  : 'bg-bone text-neutral-700 border-hairline hover:border-ink'
              }`}
            >
              ALL ROLES
            </button>
            <button
              onClick={() => setSelectedRiskFilter('HIGH RISK')}
              className={`px-3 py-1.5 border transition-all cursor-pointer ${
                selectedRiskFilter === 'HIGH RISK'
                  ? 'bg-rose-800 text-bone border-rose-800'
                  : 'bg-bone text-neutral-700 border-hairline hover:border-ink'
              }`}
            >
              MOST REPETITIVE (&gt;70%)
            </button>
            <button
              onClick={() => setSelectedRiskFilter('MEDIUM RISK')}
              className={`px-3 py-1.5 border transition-all cursor-pointer ${
                selectedRiskFilter === 'MEDIUM RISK'
                  ? 'bg-amber-800 text-bone border-amber-800'
                  : 'bg-bone text-neutral-700 border-hairline hover:border-ink'
              }`}
            >
              MODERATE CHANGE (50–69%)
            </button>
          </div>
        </div>

        {/* Graph 09: Job Risk & Automation Probability Matrix */}
        <JobRiskMatrixChart />

        {/* Plain Language Note */}
        <div className="bg-bone border border-hairline p-4 font-mono text-xs text-neutral-600 flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <ShieldAlert className="w-4 h-4 text-amberAccent shrink-0" />
            <span>EXPLAINING PERCENTAGES: "% Exposure" means how much repetitive work AI can assist with. It does NOT mean that percentage of people will lose their jobs.</span>
          </div>
          <span className="text-[0.65rem] uppercase text-neutral-400 font-bold">HOW WORK IS CHANGING</span>
        </div>

        {/* Jobs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {filteredJobs.map(job => (
            <div
              key={job.id}
              className="bg-bone border border-hairline p-6 hover:border-ink transition-all flex flex-col justify-between shadow-sm space-y-4"
            >
              <div>
                {/* Card Header */}
                <div className="flex justify-between items-start gap-3 pb-3 border-b border-hairline">
                  <div>
                    <span className="font-mono text-[0.65rem] text-neutral-400 uppercase font-bold block mb-1">
                      ROLE OVERVIEW
                    </span>
                    <h3 className="font-serif font-bold text-xl text-ink">
                      {job.title}
                    </h3>
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <span className={`px-2 py-0.5 text-[0.6rem] font-mono font-bold uppercase ${job.riskBadgeClass}`}>
                      {job.riskCategory === 'HIGH RISK' ? 'HIGH REPETITIVE WORK' : job.riskCategory === 'MEDIUM RISK' ? 'MODERATE CHANGE' : 'LOWER RISK'}
                    </span>
                    <span className="font-mono text-xs font-bold text-ink">
                      {job.aiExposurePercentage}% TASKS AI CAN HELP WITH
                    </span>
                  </div>
                </div>

                {/* 3-Step Progression (Current Demand -> AI Exposure -> 2030 Scenario) */}
                <div className="my-4 space-y-3 font-sans text-xs">
                  {/* Step 1: Current Demand */}
                  <div className="p-3 bg-cream border border-hairline space-y-1">
                    <span className="font-mono text-[0.65rem] font-bold text-neutral-500 uppercase block">
                      1. WHAT IS HAPPENING TODAY
                    </span>
                    <p className="text-neutral-700 leading-relaxed">
                      {job.currentDemand}
                    </p>
                  </div>

                  {/* Step 2: AI Exposure Mechanism */}
                  <div className="p-3 bg-cream border border-hairline space-y-1">
                    <span className="font-mono text-[0.65rem] font-bold text-amber-800 uppercase block">
                      2. HOW AI AFFECTS THIS WORK
                    </span>
                    <p className="text-neutral-700 leading-relaxed">
                      {job.exposureMechanism}
                    </p>
                  </div>

                  {/* Step 3: 2030 Scenario */}
                  <div className="p-3 bg-parchment border border-hairline space-y-1">
                    <span className="font-mono text-[0.65rem] font-bold text-rose-900 uppercase block">
                      3. WHAT COULD CHANGE BY 2030
                    </span>
                    <p className="text-neutral-800 leading-relaxed font-medium">
                      {job.scenario2030}
                    </p>
                  </div>
                </div>
              </div>

              {/* Transition Pathway */}
              <div className="pt-3 border-t border-hairline flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 font-mono text-xs">
                <div className="flex items-center gap-1.5 text-emerald-800 font-bold text-[0.7rem] shrink-0">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>HOW TO PREPARE:</span>
                </div>
                <span className="text-neutral-700 text-[0.7rem]">{job.transitionPathway}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
