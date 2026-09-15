import React from 'react';
import { DataStatusBadge } from './DataStatusBadge';

export const CausalCascadeSection: React.FC = () => {
  return (
    <section id="cascade" className="py-16 md:py-24 px-4 sm:px-8 border-b border-hairline bg-bone">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="border-b border-hairline pb-4 flex flex-wrap items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs tracking-widest text-neutral-500 uppercase font-bold">
                SCREEN 15 • CITY RIPPLE EFFECTS
              </span>
              <DataStatusBadge status="SCENARIO" />
            </div>
            <h2 className="font-serif font-bold text-3xl md:text-4xl text-ink mt-1">
              WHAT HAPPENS TO CITIES IF IT JOBS CHANGE?
            </h2>
          </div>
          <div className="font-mono text-xs text-neutral-600 max-w-md text-left md:text-right">
            If the way people work in IT changes, the effect is also felt by nearby rental homes, buses, restaurants, and local shops.
          </div>
        </div>

        {/* 5-Stage Hierarchy Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 font-mono text-xs">
          <div className="bg-cream p-5 border border-hairline hover:border-ink transition-colors flex flex-col justify-between">
            <div>
              <span className="text-lg font-bold text-neutral-400 block mb-2">01</span>
              <h4 className="font-serif font-bold text-base text-ink mb-1">AI in Daily Work</h4>
              <p className="font-sans text-xs text-neutral-600 leading-relaxed">
                Companies bring AI tools into everyday projects to help write code, fix bugs, and speed up routine work.
              </p>
            </div>
            <span className="text-[0.6rem] font-mono text-neutral-400 pt-3 border-t border-hairline/60">WORK GETS FASTER</span>
          </div>

          <div className="bg-cream p-5 border border-hairline hover:border-ink transition-colors flex flex-col justify-between">
            <div>
              <span className="text-lg font-bold text-neutral-400 block mb-2">02</span>
              <h4 className="font-serif font-bold text-base text-ink mb-1">Hiring Evolving</h4>
              <p className="font-sans text-xs text-neutral-600 leading-relaxed">
                Companies hire more selectively, looking for problem solvers while existing teams take on bigger responsibilities.
              </p>
            </div>
            <span className="text-[0.6rem] font-mono text-neutral-400 pt-3 border-t border-hairline/60">SELECTIVE RECRUITMENT</span>
          </div>

          <div className="bg-cream p-5 border border-hairline hover:border-ink transition-colors flex flex-col justify-between">
            <div>
              <span className="text-lg font-bold text-neutral-400 block mb-2">03</span>
              <h4 className="font-serif font-bold text-base text-ink mb-1">Office Schedules</h4>
              <p className="font-sans text-xs text-neutral-600 leading-relaxed">
                More people work on hybrid schedules (such as 3 days in office), changing how often workers commute each week.
              </p>
            </div>
            <span className="text-[0.6rem] font-mono text-neutral-400 pt-3 border-t border-hairline/60">HYBRID ROUTINES</span>
          </div>

          <div className="bg-cream p-5 border border-hairline hover:border-ink transition-colors flex flex-col justify-between">
            <div>
              <span className="text-lg font-bold text-neutral-400 block mb-2">04</span>
              <h4 className="font-serif font-bold text-base text-ink mb-1">Local Spending</h4>
              <p className="font-sans text-xs text-neutral-600 leading-relaxed">
                Food courts, local tea stalls, auto drivers, and cab services see busy days and quieter days during the week.
              </p>
            </div>
            <span className="text-[0.6rem] font-mono text-neutral-400 pt-3 border-t border-hairline/60">NEIGHBORHOOD RHYTHMS</span>
          </div>

          <div className="bg-ink text-bone p-5 border border-darkhairline flex flex-col justify-between">
            <div>
              <span className="text-lg font-bold text-amberAccent block mb-2">05</span>
              <h4 className="font-serif font-bold text-base text-bone mb-1">Businesses Adapt</h4>
              <p className="font-sans text-xs text-neutral-300 leading-relaxed">
                PGs upgrade amenities, buses offer flexible routes, and restaurants start home delivery plans to grow.
              </p>
            </div>
            <span className="text-[0.6rem] font-mono text-amberAccent pt-3 border-t border-neutral-800 font-bold">LOCAL BUSINESSES UPGRADE</span>
          </div>
        </div>

        {/* Urban Informal Multiplier Callout */}
        <div className="bg-cream p-6 md:p-8 border border-hairline shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-4 border-b lg:border-b-0 lg:border-r border-hairline pb-4 lg:pb-0 lg:pr-6">
              <span className="font-mono text-xs font-bold text-amberAccent uppercase block mb-1">
                HOW TECH SUPPORTS THE LOCAL ECONOMY
              </span>
              <div className="font-serif font-black text-4xl md:text-5xl text-ink">1 : 3.6</div>
              <div className="font-mono text-xs text-neutral-500 mt-1">
                1 IT Job Helps Support ~3.6 Other Local Livelihoods
              </div>
            </div>
            <div className="lg:col-span-8 space-y-2 font-sans text-xs text-neutral-700 leading-relaxed">
              <p>
                In tech cities like Chennai, Bengaluru, and Hyderabad, IT employees spend money that supports thousands of local businesses — including paying rent to landlords and PGs, hiring cabs and autos, eating at local cafes, and shopping at nearby stores.
              </p>
              <p className="font-mono text-[0.68rem] text-neutral-500 italic">
                * Note: Cities are resilient because they also have manufacturing, healthcare, education, and port trade that keep the economy strong.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
