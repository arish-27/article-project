import { TimelineYearPoint } from '../types';

export const timelineYearsData: TimelineYearPoint[] = [
  {
    year: '2026',
    phaseTitle: 'PHASE 1: ASSISTED CO-PILOTS & WORKBENCH INTEGRATION',
    aiMaturity: 'Code co-pilots and LLM APIs widely integrated into IDEs (GitHub Copilot, Cursor, Amazon Q). Code completion is ubiquitous; human reviews all generated syntax.',
    workforceImpact: 'Individual productivity gains of 20%–35% in boilerplate generation and documentation. Traditional roles begin reallocating time toward system design and API verification.',
    hiringReality: 'Entry-level campus intake remains selective (~170K/yr). Hiring focuses on candidates who can build full-stack apps with AI tool assistance.',
    roleEvolution: 'Manual testing contracts face margin renegotiation. Data engineering teams begin upgrading data warehouses into vector lakehouses.',
    criticalSkillFocus: ['Python & TypeScript', 'Prompt Engineering', 'API Integration', 'Cloud Fundamentals', 'Git & CI/CD'],
    status: 'REPORTED'
  },
  {
    year: '2027',
    phaseTitle: 'PHASE 2: MULTI-AGENT ORCHESTRATION & DATA CONVERGENCE',
    aiMaturity: 'Autonomous multi-agent frameworks (LangGraph, CrewAI, AutoGen) handle end-to-end bug fixing, automated regression testing, and initial PR reviews.',
    workforceImpact: 'Senior engineers supervise pods of specialized AI agents. Middle management pivots from task tracking to architectural governance and accuracy verification.',
    hiringReality: 'Hiring becomes outcome-based. Services firms shift billing models from hourly headcount (T&M) to milestone value pricing.',
    roleEvolution: 'L1 support and manual data entry decline sharply. "AI Agent Developer" and "Evaluation Engineer" become high-volume recruitment titles.',
    criticalSkillFocus: ['Multi-Agent Architecture', 'Vector Databases (Pinecone/pgvector)', 'RAG Optimization', 'Distributed Observability', 'Zero-Trust Security'],
    status: 'FORECAST'
  },
  {
    year: '2028',
    phaseTitle: 'PHASE 3: ENTERPRISE AUTOMATION & GCC EXPANSION',
    aiMaturity: 'Domain-specific enterprise models run privately on sovereign cloud clusters. Legacy system refactoring (COBOL/Java 8 to modern microservices) is 70% automated.',
    workforceImpact: 'Global Capability Centers (GCCs) in Bengaluru, Hyderabad, and Chennai expand senior engineering hubs while reducing routine junior maintenance headcount.',
    hiringReality: 'Campus recruitment demands verified GitHub portfolios and proven full-stack project builds; standardized aptitude test filtering becomes obsolete.',
    roleEvolution: 'DevOps evolves into AI Platform Engineering. Security teams focus heavily on prompt-injection defense and autonomous penetration testing.',
    criticalSkillFocus: ['MLOps & LLMOps', 'Kubernetes GPU Scheduling', 'Sovereign AI Governance', 'Enterprise Architecture', 'Domain Process Mining'],
    status: 'FORECAST'
  },
  {
    year: '2029',
    phaseTitle: 'PHASE 4: SELF-HEALING PLATFORMS & HYPER-SPECIALIZATION',
    aiMaturity: 'Self-healing cloud infrastructure and automated security patching reduce routine incident tickets by over 60%. Foundation models achieve near-zero hallucination in code synthesis.',
    workforceImpact: 'Engineering talent polarizes into two high-value segments: Deep Infrastructure/Systems Architects and Domain-Specific Solution Strategists.',
    hiringReality: 'High compensation premiums for engineers with cross-disciplinary expertise (e.g., Automotive + Embedded AI in Chennai; FinTech + High-Throughput Cloud in Hyderabad).',
    roleEvolution: 'Traditional junior maintenance developer role is fully replaced by "AI-Native Software Engineer" operating with 5x leverage.',
    criticalSkillFocus: ['Distributed Systems Resilience', 'AI Safety Auditing', 'Fine-Tuning & Quantization', 'Domain Business Strategy', 'Hardware-Software Co-Design'],
    status: 'SCENARIO'
  },
  {
    year: '2030',
    phaseTitle: 'PHASE 5: THE AI-NATIVE ENTERPRISE ECOSYSTEM',
    aiMaturity: 'AI is the native runtime substrate for enterprise computing. Software is synthesized, tested, deployed, and continuously monitored by orchestrated agent swarms under human oversight.',
    workforceImpact: 'Total Indian IT workforce reaches 5.85M–6.2M with dramatically higher revenue per employee. Compensation moats exist for human judgment, ethics, and systems architecture.',
    hiringReality: 'Hiring is continuous and capability-driven. Freshers enter directly into apprentice-style engineering squads managing autonomous systems.',
    roleEvolution: '12+ entirely new occupational categories exist as mainstream titles; routine repetitive maintenance titles are fully phased into automated workloads.',
    criticalSkillFocus: ['Autonomous System Oversight', 'Strategic Systems Design', 'Human-in-the-Loop Governance', 'Ethical AI & Compliance', 'Deep Tech Innovation'],
    status: 'SCENARIO'
  }
];
