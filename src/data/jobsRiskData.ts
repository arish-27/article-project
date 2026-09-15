import { DecliningJobRole } from '../types';

export const decliningJobsData: DecliningJobRole[] = [
  {
    id: 'data-entry-ops',
    title: 'Manual Data Entry & Document Typing',
    riskCategory: 'HIGH RISK',
    riskBadgeClass: 'bg-rose-100 text-rose-900 border border-rose-300',
    currentDemand: 'Companies are using AI vision tools that read invoices, receipts, and medical forms automatically with high accuracy.',
    aiExposurePercentage: 88,
    exposureMechanism: 'AI can read scanned PDFs and photos directly, extracting text and numbers without someone typing each line by hand.',
    scenario2030: 'Routine typing jobs will shrink; remaining staff will verify unusual errors, handle edge cases, and ensure data privacy.',
    transitionPathway: 'Learn data verification, document AI tools, or digital workflow management.',
    status: 'ESTIMATED'
  },
  {
    id: 'manual-testing',
    title: 'Manual Software Testing (Click-and-Check)',
    riskCategory: 'HIGH RISK',
    riskBadgeClass: 'bg-rose-100 text-rose-900 border border-rose-300',
    currentDemand: 'Clients increasingly expect automated tests that run instantly whenever code is updated, rather than slow manual clicking.',
    aiExposurePercentage: 82,
    exposureMechanism: 'AI tools can look at an app design, write automated test scripts, and check for bugs across thousands of screens in minutes.',
    scenario2030: 'Pure manual clicking roles will decline; testers who know how to build automated test scripts and verify user experience will thrive.',
    transitionPathway: 'Learn automated testing tools (Playwright/Selenium), API testing, and AI quality checks.',
    status: 'ESTIMATED'
  },
  {
    id: 'repetitive-coding',
    title: 'Basic Repetitive & Boilerplate Coding',
    riskCategory: 'HIGH RISK',
    riskBadgeClass: 'bg-rose-100 text-rose-900 border border-rose-300',
    currentDemand: 'Junior roles that only write standard boilerplate code, simple buttons, and copy-paste templates are becoming less needed.',
    aiExposurePercentage: 78,
    exposureMechanism: 'Generative AI tools can write standard starter code, database connections, and simple web pages in seconds from plain English prompts.',
    scenario2030: 'Fewer jobs for people who only type basic code templates; higher demand for engineers who connect systems and solve real logic problems.',
    transitionPathway: 'Learn full-stack system design, database architecture, and building complete apps with AI helpers.',
    status: 'SCENARIO'
  },
  {
    id: 'l1-tech-support',
    title: 'Basic IT Helpdesk & Scripted Customer Support',
    riskCategory: 'HIGH RISK',
    riskBadgeClass: 'bg-rose-100 text-rose-900 border border-rose-300',
    currentDemand: 'Simple queries like password resets, software setup, and basic troubleshooting are handled by smart AI assistants.',
    aiExposurePercentage: 75,
    exposureMechanism: 'AI chatbots trained on company handbooks can answer common questions and resolve standard tickets immediately at any time of day.',
    scenario2030: 'Basic call-centre and ticket-handling jobs will decrease; human support will focus on complex technical issues and client relationships.',
    transitionPathway: 'Learn cloud administration, advanced IT support, or customer relationship management.',
    status: 'ESTIMATED'
  },
  {
    id: 'routine-monitoring',
    title: 'Routine Server & Network Screen Monitoring',
    riskCategory: 'MEDIUM RISK',
    riskBadgeClass: 'bg-amber-100 text-amber-900 border border-amber-300',
    currentDemand: 'Sitting and watching server dashboard graphs 24/7 is being replaced by smart alert systems.',
    aiExposurePercentage: 68,
    exposureMechanism: 'AI monitors servers continuously, predicts when a machine might fail, and automatically restarts systems before humans even notice.',
    scenario2030: 'Workers shift from watching screens to setting up automated monitoring systems and improving cloud reliability.',
    transitionPathway: 'Learn cloud monitoring platforms, site reliability engineering (SRE), and automation scripts.',
    status: 'ESTIMATED'
  },
  {
    id: 'basic-reporting',
    title: 'Manual Spreadsheet & Weekly Status Reports',
    riskCategory: 'MEDIUM RISK',
    riskBadgeClass: 'bg-amber-100 text-amber-900 border border-amber-300',
    currentDemand: 'Manually copying numbers from databases into weekly Excel files and PDF presentations is becoming automated.',
    aiExposurePercentage: 64,
    exposureMechanism: 'Modern business intelligence tools automatically pull live data and create charts with written summaries when asked simple questions.',
    scenario2030: 'Demand shifts from people who copy-paste numbers to analysts who explain what the trends mean and what decisions leaders should make.',
    transitionPathway: 'Learn business analytics tools (PowerBI, Tableau, SQL) and business storytelling.',
    status: 'SCENARIO'
  },
  {
    id: 'repetitive-docs',
    title: 'Standard Release Notes & Technical Documentation',
    riskCategory: 'LOWER RISK',
    riskBadgeClass: 'bg-emerald-100 text-emerald-900 border border-emerald-300',
    currentDemand: 'AI can draft initial software documentation directly from code commits, speeding up documentation writing.',
    aiExposurePercentage: 58,
    exposureMechanism: 'AI scans new code and drafts descriptions of what changed, though human writers must still review it for accuracy and clarity.',
    scenario2030: 'Technical writers will spend less time on basic formatting and more time writing comprehensive tutorials and guidebooks for developers.',
    transitionPathway: 'Learn developer advocacy, user experience writing, and technical content strategy.',
    status: 'SCENARIO'
  },
  {
    id: 'low-complexity-ops',
    title: 'Basic Database Backups & Routine Maintenance',
    riskCategory: 'MEDIUM RISK',
    riskBadgeClass: 'bg-amber-100 text-amber-900 border border-amber-300',
    currentDemand: 'Routine database backups, system updates, and basic indexing are now built directly into modern cloud services.',
    aiExposurePercentage: 62,
    exposureMechanism: 'Cloud platforms (like Amazon AWS and Google Cloud) automatically tune databases, back up data, and recover from failures without manual steps.',
    scenario2030: 'Database administrators will focus on data architecture, security permissions, and connecting complex modern databases.',
    transitionPathway: 'Learn modern cloud data architecture, AI vector databases, and data security.',
    status: 'ESTIMATED'
  }
];
