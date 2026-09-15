import React, { useState } from 'react';
import { DataStatusBadge } from './DataStatusBadge';
import { Sparkles, TrendingUp, Layers, HelpCircle, ArrowRight, ShieldCheck, Cpu } from 'lucide-react';

type ScenarioMode = 'LOW' | 'BASE' | 'HIGH';

interface AdoptionPoint {
  year: number;
  adoption: number;
  stage: string;
  shortDesc: string;
  milestone: string;
}

const scenarioData: Record<ScenarioMode, AdoptionPoint[]> = {
  LOW: [
    { year: 2026, adoption: 30, stage: 'Companies try AI', shortDesc: 'Small pilot trials and optional AI helpers for developers.', milestone: 'Trying AI' },
    { year: 2027, adoption: 36, stage: 'People use AI help', shortDesc: 'AI assists with standard code drafting and simple tasks.', milestone: 'Assisted' },
    { year: 2028, adoption: 43, stage: 'AI in daily work', shortDesc: 'AI tools search company documents and help answer technical questions.', milestone: 'Daily Work' },
    { year: 2029, adoption: 51, stage: 'Automating routines', shortDesc: 'Automatic test generation and routine bug sorting become common.', milestone: 'Automated' },
    { year: 2030, adoption: 60, stage: 'AI in everyday work', shortDesc: 'AI systems handle routine steps with human engineers guiding the work.', milestone: 'Everyday AI' }
  ],
  BASE: [
    { year: 2026, adoption: 35, stage: 'Companies try AI', shortDesc: 'Companies test AI tools across projects and learn where they help most.', milestone: 'Trying AI' },
    { year: 2027, adoption: 45, stage: 'People use AI help', shortDesc: 'AI helps write routine code, draft tests, and summarize project updates.', milestone: 'AI Help' },
    { year: 2028, adoption: 56, stage: 'AI in regular work', shortDesc: 'AI systems connect directly to company systems and project trackers.', milestone: 'Regular Work' },
    { year: 2029, adoption: 68, stage: 'More automated tasks', shortDesc: 'AI tools run automated checks, translate old code, and handle initial tickets.', milestone: 'Automating' },
    { year: 2030, adoption: 78, stage: 'AI in everyday work', shortDesc: 'Human engineers work alongside smart AI systems to build software faster.', milestone: 'Everyday AI' }
  ],
  HIGH: [
    { year: 2026, adoption: 40, stage: 'Companies try AI', shortDesc: 'Fast adoption across engineering teams with clear corporate guidelines.', milestone: 'Active Trials' },
    { year: 2027, adoption: 52, stage: 'People use AI help', shortDesc: 'Most developers use AI helpers daily for writing code and documentation.', milestone: 'Daily Help' },
    { year: 2028, adoption: 65, stage: 'AI in regular work', shortDesc: 'Coordinated AI tools carry out multi-step build and deployment tasks.', milestone: 'Deep Systems' },
    { year: 2029, adoption: 78, stage: 'More automated tasks', shortDesc: 'Automated test suites and systems that automatically fix common errors.', milestone: 'Fast Auto' },
    { year: 2030, adoption: 88, stage: 'AI in everyday work', shortDesc: 'AI handles repetitive work while human engineers direct system architecture.', milestone: 'AI-Centered' }
  ]
};

const workMixData = [
  { year: 2026, human: 60, assisted: 30, automated: 10 },
  { year: 2028, human: 40, assisted: 42, automated: 18 },
  { year: 2030, human: 25, assisted: 48, automated: 27 }
];

export const AIAdoptionPredictionSection: React.FC = () => {
  const [scenario, setScenario] = useState<ScenarioMode>('BASE');
  const [hoveredPoint, setHoveredPoint] = useState<AdoptionPoint | null>(null);

  const points = scenarioData[scenario];
  const startPoint = points[0];
  const endPoint = points[points.length - 1];
  const growthDelta = endPoint.adoption - startPoint.adoption;

  // Active point for tooltip or preview
  const activePoint = hoveredPoint || points[2]; // default to 2028

  // SVG coordinates calculation (width: 580, height: 260)
  const svgWidth = 580;
  const svgHeight = 220;
  const paddingLeft = 45;
  const paddingRight = 35;
  const paddingTop = 25;
  const paddingBottom = 45;

  const chartWidth = svgWidth - paddingLeft - paddingRight;
  const chartHeight = svgHeight - paddingTop - paddingBottom;

  const getCoordinates = (p: AdoptionPoint, index: number) => {
    const x = paddingLeft + (index / (points.length - 1)) * chartWidth;
    // Y-axis 0% to 100%
    const y = paddingTop + chartHeight - (p.adoption / 100) * chartHeight;
    return { x, y };
  };

  const polylinePoints = points
    .map((p, idx) => {
      const { x, y } = getCoordinates(p, idx);
      return `${x},${y}`;
    })
    .join(' ');

  const areaPoints = `${paddingLeft},${paddingTop + chartHeight} ${polylinePoints} ${
    paddingLeft + chartWidth
  },${paddingTop + chartHeight}`;

  return (
    <section id="ai-adoption-prediction" className="py-16 md:py-24 px-4 sm:px-8 border-b border-hairline bg-cream">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="border-b border-hairline pb-4 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="font-mono text-xs tracking-widest text-neutral-500 uppercase font-bold">
                5-YEAR OUTLOOK • 2026 → 2030
              </span>
              <DataStatusBadge status="SCENARIO" />
            </div>
            <h2 className="font-serif font-black text-3xl md:text-5xl text-ink tracking-tight uppercase">
              HOW FAST COULD AI BECOME PART OF OUR WORK?
            </h2>
            <p className="font-sans text-xs sm:text-sm text-neutral-700 max-w-2xl mt-2 leading-relaxed">
              One possible path showing how companies could move from testing AI tools to using them in everyday work.
            </p>
          </div>

          <div className="flex flex-col items-start md:items-end gap-1.5">
            <span className="text-[10px] font-mono tracking-wider text-neutral-500 uppercase font-bold">
              ONE POSSIBLE FUTURE PATH
            </span>
            <span className="px-2.5 py-1 bg-amber-100 text-amber-900 border border-amber-300 font-mono text-[10px] font-bold uppercase">
              2026 TODAY → 2030 SCENARIO
            </span>
          </div>
        </div>

        {/* 3 KPI Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {/* Card 1: 2026 Baseline */}
          <div className="bg-bone p-5 border border-hairline hover:border-ink transition-colors flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-center mb-1">
                <span className="font-mono text-[0.65rem] text-neutral-500 uppercase font-bold">01 • TODAY (2026)</span>
                <span className="text-[0.6rem] font-mono px-1.5 py-0.5 bg-neutral-200 text-neutral-700 font-bold uppercase">STARTING POINT</span>
              </div>
              <div className="font-serif font-black text-3xl md:text-4xl text-ink my-1">
                {startPoint.adoption}%
              </div>
              <div className="font-mono text-xs font-bold text-amberAccent uppercase tracking-wide">
                Initial AI Adoption
              </div>
            </div>
            <p className="text-xs font-sans text-neutral-600 mt-3 pt-2 border-t border-hairline/60">
              Companies are currently running small trials and testing AI code assistants across select project teams.
            </p>
          </div>

          {/* Card 2: 2030 Scenario Level */}
          <div className="bg-bone p-5 border border-hairline hover:border-ink transition-colors flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-center mb-1">
                <span className="font-mono text-[0.65rem] text-neutral-500 uppercase font-bold">02 • BY 2030 (POSSIBLE SCENARIO)</span>
                <span className="text-[0.6rem] font-mono px-1.5 py-0.5 bg-emerald-100 text-emerald-800 font-bold uppercase">SCENARIO</span>
              </div>
              <div className="font-serif font-black text-3xl md:text-4xl text-ink my-1">
                {endPoint.adoption}%
              </div>
              <div className="font-mono text-xs font-bold text-neutral-800 uppercase tracking-wide">
                Possible AI Use Level
              </div>
            </div>
            <p className="text-xs font-sans text-neutral-600 mt-3 pt-2 border-t border-hairline/60">
              <strong>Note:</strong> This does <em>not</em> mean {endPoint.adoption}% of people lose jobs. It represents how widely AI tools could assist everyday company work.
            </p>
          </div>

          {/* Card 3: Trajectory & Drivers */}
          <div className="bg-bone p-5 border border-hairline hover:border-ink transition-colors flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-center mb-1">
                <span className="font-mono text-[0.65rem] text-neutral-500 uppercase font-bold">03 • 5-YEAR INCREASE</span>
                <span className="text-[0.6rem] font-mono px-1.5 py-0.5 bg-amber-100 text-amber-900 font-bold uppercase">GROWTH</span>
              </div>
              <div className="font-serif font-black text-3xl md:text-4xl text-amberAccent my-1">
                +{growthDelta}%
              </div>
              <div className="font-mono text-xs font-bold text-ink uppercase tracking-wide">
                Growing Use of AI
              </div>
            </div>
            <p className="text-xs font-sans text-neutral-600 mt-3 pt-2 border-t border-hairline/60">
              Driven by smarter developer tools, automated test checking, and AI connected directly to company systems.
            </p>
          </div>
        </div>

        {/* Main Interactive Graph Box */}
        <div className="bg-bone p-6 md:p-8 border border-hairline shadow-sm space-y-6">
          {/* Top Bar: Title & Scenario Toggle */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-hairline pb-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[0.65rem] font-mono font-bold tracking-widest text-neutral-500 uppercase">
                  GRAPH 01 • SCENARIO ENGINE
                </span>
                <span className="text-[0.6rem] font-mono px-1.5 py-0.2 bg-neutral-200 text-neutral-700 font-semibold uppercase">
                  THIS IS A SCENARIO — NOT A GUARANTEED FUTURE
                </span>
              </div>
              <h3 className="font-serif font-bold text-xl md:text-2xl text-ink mt-0.5">
                How Fast Could Companies Start Using AI? (2026 → 2030)
              </h3>
              <p className="text-xs font-sans text-neutral-600">
                This graph shows one possible way AI use could grow between 2026 and 2030. The actual future may be faster or slower.
              </p>
            </div>

            {/* Scenario Mode Toggle Buttons */}
            <div className="flex items-center gap-1.5 bg-cream p-1 border border-hairline self-start sm:self-auto">
              <span className="text-[10px] font-mono uppercase text-neutral-500 px-2 font-bold hidden md:inline">
                SCENARIO:
              </span>
              {(['LOW', 'BASE', 'HIGH'] as ScenarioMode[]).map((mode) => (
                <button
                  key={mode}
                  onClick={() => {
                    setScenario(mode);
                    setHoveredPoint(null);
                  }}
                  className={`px-3 py-1.5 text-xs font-mono font-bold transition-all cursor-pointer ${
                    scenario === mode
                      ? 'bg-ink text-bone shadow-sm'
                      : 'text-neutral-600 hover:text-ink hover:bg-parchment'
                  }`}
                >
                  {mode}
                </button>
              ))}
            </div>
          </div>

          {/* SVG Line Chart with Responsive Scroll Wrapper */}
          <div className="w-full overflow-x-auto">
            <div className="min-w-[560px]">
              <svg viewBox={`0 0 ${svgWidth} ${svgHeight}`} className="w-full h-64 select-none">
                <defs>
                  <linearGradient id="aiAdoptionGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#C97A3E" stopOpacity="0.25" />
                    <stop offset="100%" stopColor="#C97A3E" stopOpacity="0.0" />
                  </linearGradient>
                </defs>

                {/* Horizontal Gridlines */}
                {[20, 40, 60, 80, 100].map((val) => {
                  const y = paddingTop + chartHeight - (val / 100) * chartHeight;
                  return (
                    <g key={val}>
                      <line
                        x1={paddingLeft}
                        y1={y}
                        x2={paddingLeft + chartWidth}
                        y2={y}
                        stroke="#E3DFD4"
                        strokeDasharray={val === 100 ? 'none' : '3,3'}
                        strokeWidth="1"
                      />
                      <text
                        x={paddingLeft - 8}
                        y={y + 3}
                        textAnchor="end"
                        className="text-[9px] font-mono fill-neutral-400 font-semibold"
                      >
                        {val}%
                      </text>
                    </g>
                  );
                })}

                {/* Shaded Area under Curve */}
                <polygon points={areaPoints} fill="url(#aiAdoptionGradient)" />

                {/* Primary Trend Line */}
                <polyline
                  points={polylinePoints}
                  fill="none"
                  stroke="#C97A3E"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                {/* Milestone Indicators & Data Circles */}
                {points.map((p, idx) => {
                  const { x, y } = getCoordinates(p, idx);
                  const isHovered = activePoint.year === p.year;

                  return (
                    <g
                      key={p.year}
                      className="cursor-pointer group"
                      onMouseEnter={() => setHoveredPoint(p)}
                    >
                      {/* Vertical Guideline */}
                      <line
                        x1={x}
                        y1={paddingTop}
                        x2={x}
                        y2={paddingTop + chartHeight}
                        stroke={isHovered ? '#111111' : '#E3DFD4'}
                        strokeWidth={isHovered ? '1.5' : '1'}
                        strokeDasharray={isHovered ? 'none' : '2,2'}
                      />

                      {/* Milestone Pill Label at Top */}
                      <g transform={`translate(${x}, ${paddingTop - 10})`}>
                        <rect
                          x="-48"
                          y="-10"
                          width="96"
                          height="16"
                          fill={isHovered ? '#111111' : '#FAF8F3'}
                          stroke={isHovered ? '#111111' : '#E3DFD4'}
                          rx="2"
                        />
                        <text
                          x="0"
                          y="1"
                          textAnchor="middle"
                          className={`text-[8px] font-mono font-bold uppercase ${
                            isHovered ? 'fill-bone' : 'fill-neutral-600'
                          }`}
                        >
                          {p.milestone}
                        </text>
                      </g>

                      {/* Data Point Node */}
                      <circle
                        cx={x}
                        cy={y}
                        r={isHovered ? 7 : 5}
                        fill={isHovered ? '#111111' : '#C97A3E'}
                        stroke="#FAF8F3"
                        strokeWidth="2.5"
                        className="transition-all duration-150"
                      />

                      {/* Percentage Value Label */}
                      <text
                        x={x}
                        y={y - 12}
                        textAnchor="middle"
                        className="text-[11px] font-mono font-black fill-ink"
                      >
                        {p.adoption}%
                      </text>

                      {/* Year Label on X-Axis */}
                      <text
                        x={x}
                        y={paddingTop + chartHeight + 18}
                        textAnchor="middle"
                        className={`text-[11px] font-mono font-bold ${
                          isHovered ? 'fill-ink font-black' : 'fill-neutral-600'
                        }`}
                      >
                        {p.year}
                      </text>
                    </g>
                  );
                })}
              </svg>
            </div>
          </div>

          {/* Interactive Inspection Detail Card */}
          <div className="bg-cream p-4 border border-hairline flex flex-col md:flex-row items-start md:items-center justify-between gap-4 font-mono text-xs">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="font-bold text-ink text-sm">YEAR {activePoint.year}</span>
                <span className="text-neutral-400">•</span>
                <span className="text-amberAccent font-bold uppercase">{activePoint.stage}</span>
                <span className="text-neutral-400">•</span>
                <span className="bg-bone px-2 py-0.5 border border-hairline font-bold text-ink">
                  {scenario} SCENARIO: {activePoint.adoption}%
                </span>
              </div>
              <p className="text-neutral-600 font-sans text-xs">
                {activePoint.shortDesc}
              </p>
            </div>

            <div className="text-[11px] text-neutral-500 font-mono text-left md:text-right shrink-0">
              In this scenario, about {activePoint.adoption}% of routine tasks could use AI assistance by {activePoint.year}.
            </div>
          </div>

          {/* Persistent Scenario Disclaimer Banner */}
          <div className="flex items-center justify-between border-t border-hairline pt-3 text-[0.65rem] font-mono text-neutral-500">
            <span>THIS IS A SCENARIO — NOT A GUARANTEED FUTURE</span>
            <span>DATA STATUS: SCENARIO MODEL</span>
          </div>
        </div>

        {/* 5 AI Adoption Stages Visual Progression */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-serif font-bold text-xl text-ink">
              How AI Use Could Progress in 5 Steps (2026 → 2030)
            </h3>
            <span className="text-[0.65rem] font-mono text-neutral-500 uppercase font-bold">
              STEP-BY-STEP PROGRESSION
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 font-mono text-xs">
            {/* Stage 1: 2026 */}
            <div className="bg-bone p-4 border border-hairline flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-center text-[10px] text-neutral-500 mb-2 font-bold">
                  <span>STEP 01</span>
                  <span>2026</span>
                </div>
                <h4 className="font-serif font-bold text-sm text-ink mb-1 uppercase">COMPANIES TRY AI</h4>
                <p className="font-sans text-[11px] text-neutral-600 leading-relaxed">
                  Teams test AI coding helpers and basic tools in safe sandbox trials with clear company safety rules.
                </p>
              </div>
              <div className="mt-3 pt-2 border-t border-hairline text-[10px] text-amberAccent font-bold">
                Trying AI Tools
              </div>
            </div>

            {/* Stage 2: 2027 */}
            <div className="bg-bone p-4 border border-hairline flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-center text-[10px] text-neutral-500 mb-2 font-bold">
                  <span>STEP 02</span>
                  <span>2027</span>
                </div>
                <h4 className="font-serif font-bold text-sm text-ink mb-1 uppercase">PEOPLE USE AI HELP</h4>
                <p className="font-sans text-[11px] text-neutral-600 leading-relaxed">
                  AI helpers become standard across project teams for writing boilerplate code and drafting automated tests.
                </p>
              </div>
              <div className="mt-3 pt-2 border-t border-hairline text-[10px] text-amberAccent font-bold">
                Working with AI
              </div>
            </div>

            {/* Stage 3: 2028 */}
            <div className="bg-bone p-4 border border-hairline flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-center text-[10px] text-neutral-500 mb-2 font-bold">
                  <span>STEP 03</span>
                  <span>2028</span>
                </div>
                <h4 className="font-serif font-bold text-sm text-ink mb-1 uppercase">AI IN REGULAR WORK</h4>
                <p className="font-sans text-[11px] text-neutral-600 leading-relaxed">
                  AI tools connect directly into company databases, documentation wikis, and project ticketing systems.
                </p>
              </div>
              <div className="mt-3 pt-2 border-t border-hairline text-[10px] text-amberAccent font-bold">
                Connected Systems
              </div>
            </div>

            {/* Stage 4: 2029 */}
            <div className="bg-bone p-4 border border-hairline flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-center text-[10px] text-neutral-500 mb-2 font-bold">
                  <span>STEP 04</span>
                  <span>2029</span>
                </div>
                <h4 className="font-serif font-bold text-sm text-ink mb-1 uppercase">MORE TASKS AUTOMATED</h4>
                <p className="font-sans text-[11px] text-neutral-600 leading-relaxed">
                  AI automatically runs large software tests, translates old legacy code, and handles initial support tickets.
                </p>
              </div>
              <div className="mt-3 pt-2 border-t border-hairline text-[10px] text-amberAccent font-bold">
                Automated Checking
              </div>
            </div>

            {/* Stage 5: 2030 */}
            <div className="bg-bone p-4 border border-hairline flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-center text-[10px] text-neutral-500 mb-2 font-bold">
                  <span>STEP 05</span>
                  <span>2030</span>
                </div>
                <h4 className="font-serif font-bold text-sm text-ink mb-1 uppercase">AI IN EVERYDAY WORK</h4>
                <p className="font-sans text-[11px] text-neutral-600 leading-relaxed">
                  Work is built around automated AI pipelines, while human engineers direct system design and make final decisions.
                </p>
              </div>
              <div className="mt-3 pt-2 border-t border-hairline text-[10px] text-amberAccent font-bold">
                Human Leadership
              </div>
            </div>
          </div>
        </div>

        {/* Secondary Graph: Work Type Transformation Stacked Bar Chart */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left Column: Stacked Bar Chart + Systems Lab Visual */}
          <div className="lg:col-span-6 space-y-4">
            <div className="bg-bone p-5 md:p-6 border border-hairline space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-hairline pb-2">
                <div>
                  <span className="text-[0.65rem] font-mono font-bold tracking-widest text-neutral-500 uppercase block">
                    SECONDARY VISUALIZATION • WORKFORCE TRANSFORMATION
                  </span>
                  <h4 className="font-serif font-bold text-base md:text-lg text-ink">
                    WHAT CHANGES AS AI ADOPTION RISES?
                  </h4>
                </div>
                <span className="text-[0.6rem] font-mono px-2 py-0.5 bg-neutral-200 text-neutral-700 font-bold uppercase">
                  WORK-MIX SHIFT
                </span>
              </div>

              {/* Stacked Bars */}
              <div className="space-y-3 font-mono text-xs">
                {workMixData.map((item) => (
                  <div key={item.year} className="p-3 bg-cream border border-hairline">
                    <div className="flex justify-between items-center text-xs font-bold text-ink mb-1.5">
                      <span>YEAR {item.year}</span>
                      <span className="text-[10px] text-neutral-500 font-mono">
                        Human: {item.human}% • Assisted: {item.assisted}% • Auto: {item.automated}%
                      </span>
                    </div>

                    <div className="h-5 flex w-full overflow-hidden border border-hairline">
                      <div
                        style={{ width: `${item.human}%` }}
                        className="bg-neutral-800 flex items-center justify-center text-[9px] font-bold text-bone"
                        title={`Human-Led: ${item.human}%`}
                      >
                        {item.human}%
                      </div>
                      <div
                        style={{ width: `${item.assisted}%` }}
                        className="bg-amberAccent flex items-center justify-center text-[9px] font-bold text-bone"
                        title={`AI-Assisted: ${item.assisted}%`}
                      >
                        {item.assisted}%
                      </div>
                      <div
                        style={{ width: `${item.automated}%` }}
                        className="bg-neutral-400 flex items-center justify-center text-[9px] font-bold text-ink"
                        title={`Highly Automated: ${item.automated}%`}
                      >
                        {item.automated}%
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Legend */}
              <div className="flex flex-wrap items-center gap-4 pt-2 border-t border-hairline text-[0.68rem] font-mono text-neutral-600">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 bg-neutral-800 inline-block"></span>
                  <span>Human-Led</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 bg-amberAccent inline-block"></span>
                  <span>AI-Assisted</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 bg-neutral-400 inline-block"></span>
                  <span>Automated</span>
                </div>
              </div>
            </div>

            {/* Systems Engineering Lab Photo */}
            <div className="relative overflow-hidden border border-hairline group">
              <img
                src="/images/ai_engineers_lab.jpg"
                alt="AI Systems Engineering and Architecture Pod"
                className="w-full h-44 sm:h-48 object-cover grayscale-[15%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian/90 via-obsidian/30 to-transparent flex items-end p-3.5">
                <div className="text-bone font-mono text-[11px]">
                  <span className="text-[9px] text-amberAccent font-bold uppercase tracking-wider block">
                    ENTERPRISE SYSTEMS LAB
                  </span>
                  <span className="font-serif text-sm font-bold">Multi-Agent Architecture &amp; Review Pods</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Interpretation & Cascade Dynamics */}
          <div className="lg:col-span-6 space-y-4">
            <div className="bg-bone p-5 md:p-6 border border-hairline space-y-3">
              <div className="flex items-center gap-2 text-ink font-serif font-bold text-base">
                <HelpCircle className="w-4 h-4 text-amberAccent" />
                <span>Editorial Interpretation</span>
              </div>
              <p className="text-xs font-sans text-neutral-700 leading-relaxed">
                AI adoption does not translate directly into jobs lost. As adoption increases, routine repetitive tasks become automated, while engineering roles are redesigned around orchestration, system boundaries, and AI oversight.
              </p>
              <p className="text-[11px] font-sans text-neutral-500 leading-relaxed pt-2 border-t border-hairline/60">
                This scenario illustrates a possible direction of travel. Actual adoption will vary by company scale, industry domain, regulation, and workforce capability.
              </p>
            </div>

            {/* Visual Transformation Flow: AI Adoption to New Roles */}
            <div className="bg-bone p-5 md:p-6 border border-hairline space-y-3 font-mono text-xs">
              <span className="font-bold text-ink uppercase tracking-wider text-[11px] block border-b border-hairline pb-2">
                OCCUPATIONAL CASCADE DYNAMICS
              </span>
              <div className="space-y-2 text-[11px]">
                <div className="flex items-center gap-2.5 text-neutral-700 p-2 bg-cream border border-hairline">
                  <span className="w-4 h-4 rounded-full bg-bone border border-hairline flex items-center justify-center text-[9px] font-bold shrink-0">1</span>
                  <span className="font-semibold">AI Adoption Expands Across Delivery Centers</span>
                </div>
                <div className="flex items-center gap-2.5 text-neutral-700 p-2 bg-cream border border-hairline">
                  <span className="w-4 h-4 rounded-full bg-bone border border-hairline flex items-center justify-center text-[9px] font-bold shrink-0">2</span>
                  <span>Repetitive Coding, QA &amp; L1 Triage Tasks Automated</span>
                </div>
                <div className="flex items-center gap-2.5 text-neutral-700 p-2 bg-cream border border-hairline">
                  <span className="w-4 h-4 rounded-full bg-bone border border-hairline flex items-center justify-center text-[9px] font-bold shrink-0">3</span>
                  <span>Core Engineering Roles Redesigned &amp; Augmented</span>
                </div>
                <div className="flex items-center gap-2.5 text-neutral-700 p-2 bg-cream border border-hairline">
                  <span className="w-4 h-4 rounded-full bg-bone border border-hairline flex items-center justify-center text-[9px] font-bold shrink-0">4</span>
                  <span>AI Systems, Security &amp; Architecture Skills Surge</span>
                </div>
                <div className="flex items-center gap-2.5 text-ink font-bold p-2 bg-amber-50/60 border border-amberAccent/40">
                  <span className="w-4 h-4 rounded-full bg-amberAccent text-bone flex items-center justify-center text-[9px] shrink-0 font-bold">✓</span>
                  <span className="text-amber-900">12+ New Specialized AI Engineering Disciplines Emerge</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* City Ecosystem Contextualization */}
        <div className="bg-bone p-6 border border-hairline space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-hairline pb-3">
            <div>
              <span className="text-[0.65rem] font-mono font-bold tracking-widest text-neutral-500 uppercase">
                GEOGRAPHIC TRANSLATION • TRI-CITY IMPACT
              </span>
              <h4 className="font-serif font-bold text-base md:text-lg text-ink">
                How AI Adoption Scenarios Differ Across Tech Clusters
              </h4>
            </div>
            <p className="text-[11px] font-mono text-neutral-500 max-w-sm">
              AI adoption affects ecosystems differently based on GCC concentration, IT-services exposure, and product density.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-mono text-xs">
            {/* Chennai */}
            <div className="p-4 bg-cream border border-hairline space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-bold text-amberAccent text-[11px]">01. CHENNAI (PRIMARY)</span>
                <span className="text-[10px] text-neutral-500">SaaS &amp; Auto-Tech</span>
              </div>
              <p className="font-sans text-xs text-neutral-700 leading-relaxed">
                Strong insulation in proprietary B2B SaaS (Zoho, Freshworks) and automotive embedded firmware (Oragadam/Guindy), mitigating raw maintenance displacement.
              </p>
            </div>

            {/* Bengaluru */}
            <div className="p-4 bg-cream border border-hairline space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-bold text-ink text-[11px]">02. BENGALURU</span>
                <span className="text-[10px] text-neutral-500">Deep-Tech Sponge</span>
              </div>
              <p className="font-sans text-xs text-neutral-700 leading-relaxed">
                Acts as an absorption sponge: rapid creation of net new AI agent developer, LLMOps, and research roles offsets routine entry-level compression.
              </p>
            </div>

            {/* Hyderabad */}
            <div className="p-4 bg-cream border border-hairline space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-bold text-ink text-[11px]">03. HYDERABAD</span>
                <span className="text-[10px] text-neutral-500">Cloud &amp; GCC Mega-Hub</span>
              </div>
              <p className="font-sans text-xs text-neutral-700 leading-relaxed">
                Hyperscale data center investments and enterprise banking GCCs accelerate adoption of autonomous cloud governance and FinOps workflows.
              </p>
            </div>
          </div>
        </div>

        {/* Methodology & Scenario Guide Footnote */}
        <div className="bg-parchment p-4 border border-hairline text-xs font-sans text-neutral-700 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-ink shrink-0" />
            <span>
              <strong>Methodology Note:</strong> This visualization is a scenario model, not an official forecast. It illustrates how AI adoption could progress from experimentation toward scaled enterprise use. Actual outcomes may differ by industry sector and economic conditions.
            </span>
          </div>
          <a
            href="#methodology"
            className="font-mono text-[11px] font-bold text-ink hover:text-amberAccent uppercase tracking-wider underline whitespace-nowrap"
          >
            VIEW DATA CITATIONS →
          </a>
        </div>
      </div>
    </section>
  );
};
