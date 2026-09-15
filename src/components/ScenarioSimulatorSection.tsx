import React, { useState, useMemo } from 'react';
import { RotateCcw, TrendingDown, TrendingUp, Flame, Sparkles, ArrowDownRight, ArrowUpRight, ShieldAlert } from 'lucide-react';

export const ScenarioSimulatorSection: React.FC = () => {
  const [aiAdoption, setAiAdoption] = useState(50);
  const [workModel, setWorkModel] = useState(50);
  const [fresherHiring, setFresherHiring] = useState(50);
  const [itGrowth, setItGrowth] = useState(50);
  const [cityFocus, setCityFocus] = useState<'blr' | 'hyd' | 'che'>('che');
  const [chennaiArea, setChennaiArea] = useState('omr');

  const getAdoptionLabel = (val: number) => {
    if (val <= 33) return 'LOW (Gradual Task Assist)';
    if (val <= 66) return 'MEDIUM (Autonomous Co-Pilots)';
    return 'HIGH (Autonomous Agent Swarms)';
  };

  const getWorkModelLabel = (val: number) => {
    if (val <= 33) return '5-DAY IN-OFFICE';
    if (val <= 66) return 'HYBRID (2-3 DAYS IN-OFFICE)';
    return 'FULL REMOTE / DISTRIBUTED';
  };

  const getFresherLabel = (val: number) => {
    if (val <= 33) return 'CONTRACTING (-25%)';
    if (val <= 66) return 'STABLE / SELECTIVE';
    return 'EXPANDING (+20%)';
  };

  const getGrowthLabel = (val: number) => {
    if (val <= 33) return 'CONTRACTING (-10%)';
    if (val <= 66) return 'MODERATE (+12%)';
    return 'RAPID EXPANSION (+30%)';
  };

  const resetScenario = () => {
    setAiAdoption(50);
    setWorkModel(50);
    setFresherHiring(50);
    setItGrowth(50);
    setCityFocus('che');
    setChennaiArea('omr');
  };

  const { vectors, summaryStats, equilibriumState } = useMemo(() => {
    // 10 Vector calculations (0 - 100 scale, baseline is 50)
    const entryScore = fresherHiring * 0.6 + (100 - aiAdoption) * 0.4 - (aiAdoption > 65 ? 15 : 0);
    const seniorScore = aiAdoption * 0.65 + itGrowth * 0.35;
    const officeScore = (100 - workModel) * 0.75 + (itGrowth * 0.25);
    const rentalScore = (100 - workModel) * 0.45 + fresherHiring * 0.35 + (itGrowth * 0.2);
    const hotelScore = itGrowth * 0.55 + (100 - workModel) * 0.35 + 5;
    const foodScore = (100 - workModel) * 0.6 + itGrowth * 0.4;
    const deliveryScore = (workModel * 0.45) + (itGrowth * 0.35) + 10;
    const transitScore = (100 - workModel) * 0.65 + itGrowth * 0.35;
    const coworkingScore = (workModel * 0.6) + (aiAdoption * 0.4);
    const trainingScore = aiAdoption * 0.75 + 15;

    // Helper to calculate exact business destruction (-) or growth (+) percentage
    const calcImpact = (score: number, multiplier = 1.4) => {
      const delta = score - 50;
      const pct = Math.round(delta * multiplier);
      return Math.max(-85, Math.min(95, pct));
    };

    const items = [
      {
        title: 'Entry-Level Hiring',
        score: entryScore,
        percent: calcImpact(entryScore, 1.5),
        category: 'WORKFORCE',
        businessType: 'Campus Recruitment & Training',
        destructionDriver: 'Routine syntax, bug fixing & manual QA boilerplate automated by LLM agents.',
        growthDriver: 'Specialized hiring for AI-orchestration, full-stack reasoning & prompt engineering.',
        desc: entryScore < 48 ? 'High automation of junior tasks leads to compressed campus hiring batches.' : 'Healthy junior onboarding with focus on AI-assisted development.'
      },
      {
        title: 'Senior Technical Roles',
        score: seniorScore,
        percent: calcImpact(seniorScore, 1.4),
        category: 'WORKFORCE',
        businessType: 'Enterprise Architecture & Leads',
        destructionDriver: 'Middle-layer managerial coordination condensed by automated AI reporting.',
        growthDriver: 'Massive compensation surge for sovereign cloud, distributed systems & AI safety architects.',
        desc: seniorScore > 52 ? 'Massive compensation premium for distributed architects & AI engineering leads.' : 'Steady demand across enterprise solutions.'
      },
      {
        title: 'Office Attendance',
        score: officeScore,
        percent: calcImpact(officeScore, 1.5),
        category: 'URBAN FOOTPRINT',
        businessType: 'IT Parks & Commercial Real Estate',
        destructionDriver: 'Remote/hybrid work models lead to floorplate rationalization & lease compression.',
        growthDriver: 'Full return-to-office mandates restore 100% physical campus density.',
        desc: officeScore < 48 ? 'Depressed physical desk occupancy; corporate campus floorplate downsizing.' : 'High physical presence supporting local tech park ecosystem.'
      },
      {
        title: 'Rental & PG Demand',
        score: rentalScore,
        percent: calcImpact(rentalScore, 1.3),
        category: 'REAL ESTATE',
        businessType: 'Corridor PGs & Rental Housing',
        destructionDriver: 'Reduced entry-level batch intake causes vacancy surge in bachelor PGs.',
        growthDriver: 'Senior family relocations drive up rents for gated 2BHK/3BHK societies.',
        desc: rentalScore < 48 ? 'Bachelor PG facilities face double-digit vacancy; gated family units resilient.' : 'Robust rental yields across IT arterial corridors.'
      },
      {
        title: 'Hotels & Business Travel',
        score: hotelScore,
        percent: calcImpact(hotelScore, 1.2),
        category: 'HOSPITALITY',
        businessType: 'Corporate Hotels & MICE',
        destructionDriver: 'Virtual meetings & cost-control reduce routine executive travel budgets.',
        growthDriver: 'Boom in global GCC leadership delegations & high-value AI summits.',
        desc: hotelScore < 48 ? 'Corporate room night compression along IT belts.' : 'Surging executive travel and international GCC delegations.'
      },
      {
        title: 'Restaurants & Food Courts',
        score: foodScore,
        percent: calcImpact(foodScore, 1.3),
        category: 'LOCAL RETAIL',
        businessType: 'Tech Park F&B & Diners',
        destructionDriver: 'Hybrid work shrinks Monday/Friday tech park lunch footfalls by over 30%.',
        growthDriver: 'Peak in-office days drive massive volume in food courts & dinner bistros.',
        desc: foodScore < 48 ? 'Weekday lunch rush contracts; pivot to evening neighborhood deliveries.' : 'High footfalls across tech park food courts and dinner bistros.'
      },
      {
        title: 'Food Delivery Volume',
        score: deliveryScore,
        percent: calcImpact(deliveryScore, 1.1),
        category: 'LOCAL SERVICES',
        businessType: 'Quick Commerce & QSR Cloud Kitchens',
        destructionDriver: 'Shift toward home cooking or in-office corporate catered meals.',
        growthDriver: 'Hyper-convenience demand surges among remote workers & late-night AI pods.',
        desc: 'Sustained high order frequency across both residential zones and campus nodes.'
      },
      {
        title: 'Transit & Ride-Hailing',
        score: transitScore,
        percent: calcImpact(transitScore, 1.4),
        category: 'MOBILITY',
        businessType: 'App Cabs, Autos & Metro Links',
        destructionDriver: 'Mid-week traffic drops reduce daily cab rides and arterial corridor fares.',
        growthDriver: 'Daily peak-hour commute congestion drives record metro ridership and shared cabs.',
        desc: transitScore < 48 ? 'Reduced peak-hour taxi and auto demand along IT arterial corridors.' : 'High daily ridership across metro links and app-based cabs.'
      },
      {
        title: 'Co-Working & Flex Space',
        score: coworkingScore,
        percent: calcImpact(coworkingScore, 1.5),
        category: 'COMMERCIAL',
        businessType: 'Managed Flex Workspaces',
        destructionDriver: 'Long-term enterprise lease lock-ins slow down agile expansion.',
        growthDriver: 'Enterprises discard fixed leases in favor of on-demand flexible desk networks.',
        desc: coworkingScore > 52 ? 'High flex desk adoption by hybrid satellite teams and AI startups.' : 'Standard long-term dedicated lease absorption.'
      },
      {
        title: 'Upskilling & Training',
        score: trainingScore,
        percent: calcImpact(trainingScore, 1.6),
        category: 'EDUCATION',
        businessType: 'EdTech & AI Bootcamps',
        destructionDriver: 'Traditional generic coding coaching (basic Java/HTML) rendered obsolete.',
        growthDriver: 'Mandatory corporate reskilling in LLM agents, MLOps, and AI architecture.',
        desc: 'Unprecedented surge in demand for AI, Cloud, and distributed systems bootcamps.'
      }
    ];

    let destructCount = 0;
    let growCount = 0;
    let stableCount = 0;
    let totalDestructPct = 0;
    let totalGrowPct = 0;

    items.forEach(it => {
      if (it.percent < -5) {
        destructCount++;
        totalDestructPct += Math.abs(it.percent);
      } else if (it.percent > 5) {
        growCount++;
        totalGrowPct += it.percent;
      } else {
        stableCount++;
      }
    });

    const avgDestruction = destructCount > 0 ? Math.round(totalDestructPct / destructCount) : 0;
    const avgGrowth = growCount > 0 ? Math.round(totalGrowPct / growCount) : 0;

    let eq = {
      label: 'BALANCED TRANSITION STATE (Moderate Absorption)',
      badgeClass: 'bg-amber-100 text-amber-900 border border-amber-300'
    };

    if (destructCount >= 4) {
      eq = {
        label: 'STRUCTURAL FRICTION STATE (High Disruption / Contraction)',
        badgeClass: 'bg-rose-100 text-rose-900 border border-rose-300'
      };
    } else if (growCount >= 6) {
      eq = {
        label: 'HIGH-GROWTH EQUILIBRIUM (Productivity & Tech Expansion)',
        badgeClass: 'bg-emerald-100 text-emerald-900 border border-emerald-300'
      };
    }

    return {
      vectors: items,
      summaryStats: { destructCount, growCount, stableCount, avgDestruction, avgGrowth },
      equilibriumState: eq
    };
  }, [aiAdoption, workModel, fresherHiring, itGrowth]);


  return (
    <section id="simulator" className="py-16 md:py-24 px-4 sm:px-8 border-b border-hairline bg-cream">
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Section Header */}
        <div className="border-b border-hairline pb-4 flex flex-wrap items-end justify-between gap-4">
          <div>
            <span className="font-mono text-xs tracking-widest text-neutral-500 uppercase font-bold">SECTION 05 • DYNAMIC SIMULATION</span>
            <h2 className="font-serif font-bold text-3xl md:text-4xl text-ink mt-1">2030 Scenario Simulator</h2>
          </div>
          <div>
            <span className={`badge-mono text-xs px-3 py-1 ${equilibriumState.badgeClass}`}>
              {equilibriumState.label}
            </span>
          </div>
        </div>

        {/* Simulator Interactive Form */}
        <div className="bg-bone p-6 md:p-8 border border-hairline space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Slider 1 */}
            <div>
              <div className="flex justify-between font-mono text-xs mb-1">
                <label className="font-bold text-ink">AI ADOPTION</label>
                <span className="text-amberAccent font-bold text-[0.7rem]">{getAdoptionLabel(aiAdoption)}</span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={aiAdoption}
                onChange={e => setAiAdoption(parseInt(e.target.value, 10))}
                className="w-full h-1.5 rounded-full cursor-pointer"
                style={{
                  background: `linear-gradient(to right, #C97A3E 0%, #C97A3E ${aiAdoption}%, #E3DFD4 ${aiAdoption}%, #E3DFD4 100%)`
                }}
              />
              <div className="flex justify-between font-mono text-[0.6rem] text-neutral-400 mt-1">
                <span>GRADUAL (0%)</span>
                <span>EXPONENTIAL (100%)</span>
              </div>
            </div>

            {/* Slider 2 */}
            <div>
              <div className="flex justify-between font-mono text-xs mb-1">
                <label className="font-bold text-ink">WORK MODEL</label>
                <span className="text-amberAccent font-bold text-[0.7rem]">{getWorkModelLabel(workModel)}</span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={workModel}
                onChange={e => setWorkModel(parseInt(e.target.value, 10))}
                className="w-full h-1.5 rounded-full cursor-pointer"
                style={{
                  background: `linear-gradient(to right, #C97A3E 0%, #C97A3E ${workModel}%, #E3DFD4 ${workModel}%, #E3DFD4 100%)`
                }}
              />
              <div className="flex justify-between font-mono text-[0.6rem] text-neutral-400 mt-1">
                <span>IN-OFFICE</span>
                <span>REMOTE</span>
              </div>
            </div>

            {/* Slider 3 */}
            <div>
              <div className="flex justify-between font-mono text-xs mb-1">
                <label className="font-bold text-ink">FRESHER HIRING</label>
                <span className="text-amberAccent font-bold text-[0.7rem]">{getFresherLabel(fresherHiring)}</span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={fresherHiring}
                onChange={e => setFresherHiring(parseInt(e.target.value, 10))}
                className="w-full h-1.5 rounded-full cursor-pointer"
                style={{
                  background: `linear-gradient(to right, #C97A3E 0%, #C97A3E ${fresherHiring}%, #E3DFD4 ${fresherHiring}%, #E3DFD4 100%)`
                }}
              />
              <div className="flex justify-between font-mono text-[0.6rem] text-neutral-400 mt-1">
                <span>CONTRACTING</span>
                <span>EXPANDING</span>
              </div>
            </div>

            {/* Slider 4 */}
            <div>
              <div className="flex justify-between font-mono text-xs mb-1">
                <label className="font-bold text-ink">IT WORKFORCE</label>
                <span className="text-amberAccent font-bold text-[0.7rem]">{getGrowthLabel(itGrowth)}</span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={itGrowth}
                onChange={e => setItGrowth(parseInt(e.target.value, 10))}
                className="w-full h-1.5 rounded-full cursor-pointer"
                style={{
                  background: `linear-gradient(to right, #C97A3E 0%, #C97A3E ${itGrowth}%, #E3DFD4 ${itGrowth}%, #E3DFD4 100%)`
                }}
              />
              <div className="flex justify-between font-mono text-[0.6rem] text-neutral-400 mt-1">
                <span>CONTRACTING</span>
                <span>RAPID GROWTH</span>
              </div>
            </div>
          </div>

          {/* City Selection Row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-hairline font-mono text-xs">
            <div>
              <label className="text-[0.65rem] text-neutral-500 uppercase font-bold block mb-1">SELECT METROPOLITAN CLUSTER</label>
              <select
                value={cityFocus}
                onChange={e => setCityFocus(e.target.value as 'blr' | 'hyd' | 'che')}
                className="w-full bg-cream border border-hairline p-2 text-ink text-xs focus:outline-none focus:border-ink font-mono"
              >
                <option value="che">CHENNAI (SaaS, Auto-Tech &amp; Enterprise)</option>
                <option value="blr">BENGALURU (Product &amp; Startups)</option>
                <option value="hyd">HYDERABAD (GCC &amp; Cloud Hub)</option>
              </select>
            </div>

            {cityFocus === 'che' && (
              <div>
                <label className="text-[0.65rem] text-neutral-500 uppercase font-bold block mb-1">CHENNAI CORRIDOR FOCUS</label>
                <select
                  value={chennaiArea}
                  onChange={e => setChennaiArea(e.target.value)}
                  className="w-full bg-cream border border-hairline p-2 text-ink text-xs focus:outline-none focus:border-ink font-mono"
                >
                  <option value="omr">OMR (Taramani - Sholinganallur)</option>
                  <option value="sholinganallur">Sholinganallur Junction</option>
                  <option value="taramani">Taramani / TIDEL Park</option>
                  <option value="guindy">Guindy &amp; Mount-Poonamallee</option>
                  <option value="siruseri">Siruseri SIPCOT Hub</option>
                  <option value="porur">Porur DLF Cybercity</option>
                </select>
              </div>
            )}

            <div className="flex items-end">
              <button
                type="button"
                onClick={resetScenario}
                className="btn-editorial-secondary w-full py-2 flex items-center justify-center gap-1.5"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>RESET DEFAULT SCENARIO</span>
              </button>
            </div>
          </div>
        </div>

        {/* 10 Output Vectors Grid */}
        <div className="space-y-4">
          <div className="flex flex-wrap justify-between items-center gap-2 font-mono text-xs text-neutral-500 border-b border-hairline pb-2">
            <span className="font-bold uppercase tracking-wider text-ink">
              PROJECTED MULTI-SECTOR IMPACT VECTORS (10 DIMENSIONS)
            </span>
            <div className="flex items-center gap-2 text-[0.68rem]">
              <span className="text-neutral-500 uppercase font-semibold">
                DETERMINISTIC SIMULATION ENGINE V2.4
              </span>
              <span className="text-neutral-300">•</span>
              <span className="font-bold text-neutral-700">
                {summaryStats.destructCount} CONTRACTING | {summaryStats.growCount} EXPANDING
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
            {vectors.map(v => {
              const isDestruction = v.percent <= -8;
              const isGrowth = v.percent >= 8;

              let status = 'TRANSFORMING';
              let badgeClass = 'bg-amber-100 text-amber-900 border-amber-300';
              let barColor = 'bg-amber-600';
              let pctSign = v.percent > 0 ? `+${v.percent}%` : `${v.percent}%`;

              if (isDestruction) {
                status = `SHRINKING (${pctSign})`;
                badgeClass = 'bg-rose-100 text-rose-900 border-rose-300';
                barColor = 'bg-rose-700';
              } else if (isGrowth) {
                status = `GROWING (${pctSign})`;
                badgeClass = 'bg-emerald-100 text-emerald-900 border-emerald-300';
                barColor = 'bg-emerald-700';
              } else {
                status = `TRANSFORMING (${pctSign})`;
              }

              return (
                <div
                  key={v.title}
                  className="bg-bone p-4 border border-hairline hover:border-ink transition-all flex flex-col justify-between shadow-xs"
                >
                  <div>
                    {/* Header Row: Category & Status Badge */}
                    <div className="flex items-center justify-between gap-1.5 mb-2 font-mono text-[0.65rem]">
                      <span className="text-neutral-500 uppercase font-semibold">{v.category}</span>
                      <span className={`badge-mono ${badgeClass}`}>
                        {status}
                      </span>
                    </div>

                    {/* Title */}
                    <h5 className="font-serif font-bold text-base text-ink mb-1.5">{v.title}</h5>

                    {/* Description */}
                    <p className="font-sans text-xs text-neutral-600 leading-relaxed mb-3">
                      {v.desc}
                    </p>
                  </div>

                  {/* Visual Impact Level Bar */}
                  <div className="pt-2 border-t border-hairline/60">
                    <div className="flex justify-between font-mono text-[0.62rem] text-neutral-500 mb-1">
                      <span>PROJECTED IMPACT</span>
                      <strong className={`font-bold ${isDestruction ? 'text-rose-700' : isGrowth ? 'text-emerald-800' : 'text-neutral-700'}`}>
                        {pctSign}
                      </strong>
                    </div>
                    <div className="w-full bg-neutral-200 h-1.5 rounded-full overflow-hidden">
                      <div
                        className={`${barColor} h-full transition-all duration-500`}
                        style={{ width: `${Math.min(100, Math.max(12, Math.abs(v.score)))}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Disclaimer */}
        <div className="bg-parchment p-4 border border-hairline text-center text-xs font-mono text-neutral-600">
          “This is an illustrative scenario model based on selected assumptions, not an official economic forecast.”
        </div>
      </div>
    </section>
  );
};
