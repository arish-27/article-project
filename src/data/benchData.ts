import { BenchFlowStage } from '../types';

export const benchFlowStages: BenchFlowStage[] = [
  {
    stepNumber: '01',
    title: 'TOTAL WORKFORCE',
    estimatedShare: '100% (~5.43M)',
    status: 'REPORTED',
    description: 'All engineers, developers, testers, and consultants employed across Indian IT companies.',
    operationalReality: 'All employees receive their standard monthly salary and benefits.',
    mitigationPath: 'Companies review team skills and plan training programs across all departments.'
  },
  {
    stepNumber: '02',
    title: 'WORKING ON CLIENT PROJECTS',
    estimatedShare: '82% – 86% (~4.55M)',
    status: 'REPORTED',
    description: 'Engineers who are currently actively working on live client software, apps, and systems.',
    operationalReality: 'Their work directly generates revenue for the company from client contracts.',
    mitigationPath: 'Teams use AI tools to finish tasks faster and write higher quality code.'
  },
  {
    stepNumber: '03',
    title: 'ON THE BENCH (WAITING FOR WORK)',
    estimatedShare: '14% – 18% (~880K)',
    status: 'INDUSTRY ESTIMATE',
    description: 'Employees who have finished one project and are waiting for their next project assignment.',
    operationalReality: 'IMPORTANT: Being on the bench does NOT mean being fired. Employees continue to receive their regular salary.',
    mitigationPath: 'Employees use this waiting time to complete certified training in AI, Cloud, and Cybersecurity.'
  },
  {
    stepNumber: '04',
    title: 'WAITING LONGER (> 90 DAYS)',
    estimatedShare: '4% – 6% (~250K)',
    status: 'ESTIMATED',
    description: 'Employees whose specific skills (like older manual testing) are in lower demand and who have waited longer than 3 months.',
    operationalReality: 'Companies actively encourage these employees to switch to newer, in-demand technical skills.',
    mitigationPath: 'Fast-track practical training bootcamps to help them switch into modern AI and automated testing roles.'
  },
  {
    stepNumber: '05',
    title: 'LEARNING NEW SKILLS & SWITCHING ROLES',
    estimatedShare: '3% – 5% (~180K)',
    status: 'INDUSTRY ESTIMATE',
    description: 'Engineers who are actively learning modern AI tools, cloud platforms, and data engineering in company programs.',
    operationalReality: 'Over 70% of reskilled employees successfully get assigned to modern client projects after training.',
    mitigationPath: 'Mentorship from senior engineers and bonuses for passing official certification exams.'
  },
  {
    stepNumber: '06',
    title: 'MOVING TO NEW OPPORTUNITIES',
    estimatedShare: '1% – 2.5% (~60K – 120K)',
    status: 'ESTIMATED',
    description: 'A small group who do not transition into new project areas; they may find jobs elsewhere or transition to other careers.',
    operationalReality: 'This affects only a small percentage of people, not the entire group of people waiting on the bench.',
    mitigationPath: 'Career counseling, severance packages, and job placement assistance.'
  }
];

export interface BenchTrendPoint {
  period: string;
  utilizationRate: number;
  benchRate: number;
  label: string;
  status: 'REPORTED' | 'INDUSTRY ESTIMATE' | 'SCENARIO';
}

export const benchHistoricalAndForecast: BenchTrendPoint[] = [
  { period: '2021 (Pandemic Boom)', utilizationRate: 88.5, benchRate: 11.5, label: 'High Hiring & Projects', status: 'REPORTED' },
  { period: '2023 (Correction)', utilizationRate: 81.0, benchRate: 19.0, label: 'Project Slowdown', status: 'REPORTED' },
  { period: '2024 (Stabilizing)', utilizationRate: 84.0, benchRate: 16.0, label: 'Steady Recovery', status: 'REPORTED' },
  { period: '2026 (Today)', utilizationRate: 85.2, benchRate: 14.8, label: 'AI Learning Phase', status: 'INDUSTRY ESTIMATE' },
  { period: '2028 (Forecast)', utilizationRate: 88.0, benchRate: 12.0, label: 'AI-Assisted Projects', status: 'SCENARIO' },
  { period: '2030 (Scenario)', utilizationRate: 90.5, benchRate: 9.5, label: 'Fast Project Matching', status: 'SCENARIO' }
];
