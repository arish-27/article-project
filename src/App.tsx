import React from 'react';
import { StickyHeader } from './components/StickyHeader';
import { HeroSection } from './components/HeroSection';
import { Section01AIGrowth } from './components/Section01AIGrowth';
import { Section02JobGrowthGraph } from './components/Section02JobGrowthGraph';
import { Section03JobImpact } from './components/Section03JobImpact';
import { SectionWhoIsAffected } from './components/SectionWhoIsAffected';
import { SectionUrbanRipple } from './components/SectionUrbanRipple';
import { Section04NewRoles } from './components/Section04NewRoles';
import { Section05SkillShift } from './components/Section05SkillShift';
import { Section06Roadmap } from './components/Section06Roadmap';
import { Section07RelevancePrinciples } from './components/Section07RelevancePrinciples';
import { Section08The2030Developer } from './components/Section08The2030Developer';
import { CallToActionBanner } from './components/CallToActionBanner';
import { MainFooter } from './components/MainFooter';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#F8F6F1] text-[#111111] selection:bg-[#111111] selection:text-[#F8F6F1]">
      {/* 1. Publication Header */}
      <StickyHeader />

      {/* 2. Main Editorial Flow */}
      <main className="flex-1">
        {/* Hero: Title, Subtitle, Supporting Text & Progressive 2026-2030 Timeline */}
        <HeroSection />

        {/* Section 01: AI Growth (Tool to Infrastructure & Momentum Chart) */}
        <Section01AIGrowth />

        {/* Section 02: Key Visualization — Where IT Job Demand is Moving (2026-2030 Graph) */}
        <Section02JobGrowthGraph />

        {/* Section 03: What Happens to IT Jobs? (3-Part Comparison) */}
        <Section03JobImpact />

        {/* Stakeholder Impact: Who All Will Be Affected by This AI Growth? */}
        <SectionWhoIsAffected />

        {/* Urban & Economic Ripple: PGs, Rentals, City Population & Beyond */}
        <SectionUrbanRipple />

        {/* Section 04: New Roles Are Emerging (8 Roles, 1 Sentence Each) */}
        <Section04NewRoles />

        {/* Section 05: The Skill Shift (Old vs New Horizontal Visual Comparison) */}
        <Section05SkillShift />

        {/* Section 06: 2026 → 2030 Roadmap (Curriculum & Timeline) */}
        <Section06Roadmap />

        {/* Section 07: How to Stay Relevant (5 Core Principles) */}
        <Section07RelevancePrinciples />

        {/* Section 08: The 2030 Developer (Statement & Graphic Equation) */}
        <Section08The2030Developer />

        {/* Final CTA Statement */}
        <CallToActionBanner />
      </main>

      {/* 3. Research Publication Footer */}
      <MainFooter />
    </div>
  );
};

export default App;
