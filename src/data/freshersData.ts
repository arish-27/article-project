import { DataStatusType } from '../types';

export interface FresherComparisonDimension {
  dimension: string;
  baseline2026: string;
  scenario2030: string;
  implication: string;
  status: DataStatusType;
}

export const fresherComparisonData: FresherComparisonDimension[] = [
  {
    dimension: 'How Freshers Get Hired',
    baseline2026: 'College Degree → Aptitude Test → 3–6 Month Company Training → Assigned to Basic Project Tasks.',
    scenario2030: 'College Degree + Real Projects on GitHub + AI & Cloud Skills + Problem Solving → AI-Enabled Developer.',
    implication: 'A college degree alone is no longer enough; showing actual working projects is essential.',
    status: 'ESTIMATED'
  },
  {
    dimension: 'Campus Hiring Numbers',
    baseline2026: '~160,000 – 190,000 graduates hired each year across big IT firms (down from the pandemic peak).',
    scenario2030: '~120,000 – 140,000 graduates hired per year with higher salaries for candidates with strong multi-tool skills.',
    implication: 'Hiring is more selective, but skilled freshers can earn higher starting packages.',
    status: 'FORECAST'
  },
  {
    dimension: 'First Year Work Tasks',
    baseline2026: 'Writing manual test steps, basic database queries, fixing minor bugs, and updating spreadsheets.',
    scenario2030: 'Checking AI-generated code for errors, connecting AI tools, testing user workflows, and building real features.',
    implication: 'Freshers spend more time reviewing and guiding software rather than typing basic lines from scratch.',
    status: 'SCENARIO'
  },
  {
    dimension: 'College Interview Filters',
    baseline2026: 'Interviews focus heavily on marks (CGPA), math aptitude tests, and memorized coding puzzles.',
    scenario2030: 'Interviews test practical problem solving, how well you understand software systems, and how you use modern AI tools.',
    implication: 'Memorizing standard algorithms matters less than knowing how to build and fix real software.',
    status: 'FORECAST'
  },
  {
    dimension: 'Repetitive Starter Work',
    baseline2026: 'Moderate; companies still have some manual maintenance tasks for freshers to learn on.',
    scenario2030: 'Low; AI tools handle most repetitive template writing automatically.',
    implication: 'Freshers need to learn how bigger systems work from day one rather than doing only basic repetitive tasks.',
    status: 'SCENARIO'
  },
  {
    dimension: 'New AI Entry Roles Available',
    baseline2026: 'Junior AI Assistant, Data Annotation, Python/SQL support (~40K beginner openings).',
    scenario2030: 'AI Quality Evaluator, Prompt Engineer, Automation Specialist, Junior Cloud Engineer (~120K+ openings).',
    implication: 'Exciting new entry-level career paths open up for students who learn modern tools early.',
    status: 'SCENARIO'
  }
];

export const fresherSurvivalRules = [
  {
    ruleNumber: '01',
    title: 'BUILD & LAUNCH REAL PROJECTS',
    description: 'Avoid submitting copy-pasted college projects (like basic library systems). Build a working web app or mobile tool that real people can use online.'
  },
  {
    ruleNumber: '02',
    title: 'LEARN TO USE AI TOOLS DAILY',
    description: 'Practice coding with AI tools like GitHub Copilot and Cursor. Learn how to verify the AI answers, spot security bugs, and improve the code.'
  },
  {
    ruleNumber: '03',
    title: 'UNDERSTAND HOW SYSTEMS WORK',
    description: 'Learn the fundamentals: how databases store data, how servers connect over the internet (Cloud/Docker/APIs), and how apps stay reliable.'
  },
  {
    ruleNumber: '04',
    title: 'LEARN A REAL BUSINESS INDUSTRY',
    description: 'Understand the business you build for — like banking, healthcare, retail, or automotive software. Business understanding makes you stand out.'
  }
];
