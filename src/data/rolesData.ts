import { ITRole } from '../types';

export const itRoles: ITRole[] = [
  {
    id: 'java-backend',
    title: 'Java / Spring Backend Dev',
    category: 'backend',
    categoryLabel: 'BACKEND ENGINEERING',
    transformation: 'TRANSFORMING',
    transformationBadgeClass: 'bg-amber-100 text-amber-900 border border-amber-300',
    aiExposure: 65,
    aiExposureLevel: 'HIGH',
    humanAnchor: 'Distributed consistency, DB locking & DDD',
    summary: 'Standard CRUD, REST endpoints, and ORM boilerplate are heavily auto-completed. Value pivots to concurrency, database tuning, and API security.',
    responsibilities: [
      'Design and maintain microservice APIs using Spring Boot and Java 17/21',
      'Manage relational database schemas, transactions, and caching layers',
      'Ensure high throughput, low latency, and zero-downtime deployments',
      'Integrate enterprise message queues (Kafka, RabbitMQ) and AI APIs'
    ],
    tasksAutomated: [
      'REST CRUD controllers and DTO boilerplate mappings',
      'Standard JUnit 5 unit test generation and mock setup',
      'Basic SQL query syntax and JPA entity scaffolding',
      'Documentation comments and OpenAPI spec drafting'
    ],
    tasksDurable: [
      'Distributed cache race-condition handling & Saga patterns',
      'High-throughput database partitioning & connection pool tuning',
      'Domain-Driven Design (DDD) bounded contexts and business logic',
      'Regulatory data localization and DPDP Act compliance validation'
    ],
    futureSkills: [
      'Spring Boot 3.x & Spring Cloud',
      'Event-Driven Systems (Kafka / RabbitMQ)',
      'Vector DBs & Spring AI / LangChain4j',
      'OpenTelemetry Observability',
      'Cloud-Native Deployments (AWS/GCP, K8s)'
    ],
    futureDirection: 'Transforms from manual code author to Distributed System & AI Integration Architect.',
    verdict: 'The routine "Spring Boot glue code" developer role will shrink. Backend engineers must pivot to distributed systems architecture, asynchronous event systems, and performance tuning.',
    chennaiContext: 'High concentration across banking, insurance GCCs, and fintech hubs in Guindy and OMR.'
  },
  {
    id: 'frontend-dev',
    title: 'Design Engineer / Frontend Dev',
    category: 'frontend',
    categoryLabel: 'INTERFACE SYSTEMS',
    transformation: 'TRANSFORMING',
    transformationBadgeClass: 'bg-amber-100 text-amber-900 border border-amber-300',
    aiExposure: 58,
    aiExposureLevel: 'MEDIUM',
    humanAnchor: 'Accessibility (a11y), UX psychology & client WASM',
    summary: 'Figma-to-code plugins and prompt-driven UI generators commoditize static slicing. Engineers evolve into interaction and generative UI architects.',
    responsibilities: [
      'Craft responsive, accessible web interfaces and design systems',
      'Optimize Core Web Vitals (LCP, INP, CLS) and client-side rendering',
      'Implement real-time WebSocket state, streaming UI, and canvas visualizations',
      'Collaborate with product designers to bridge design and engineering tokens'
    ],
    tasksAutomated: [
      'Converting design mocks (Figma) into HTML/CSS component templates',
      'Basic form input validation and standard client-side state wiring',
      'Writing snapshot tests and basic DOM assertion unit tests',
      'Cross-browser vendor prefixing and boilerplate polyfill configurations'
    ],
    tasksDurable: [
      'Complex interactive data visualizer state engines (WebGL / Canvas)',
      'Deep accessibility compliance (WCAG AAA) for screen readers',
      'Client-side on-device inference via WebAssembly (WASM) & WebGPU',
      'Subtle motion ergonomics and spatial layout design systems'
    ],
    futureSkills: [
      'Modern SSR / Server Components (Next.js / Remix)',
      'WebAssembly (WASM) & WebGPU in-browser compute',
      'Generative UI streams & Token-by-token rendering',
      'Design Tokens architecture & Micro-interaction choreography'
    ],
    futureDirection: 'Evolves from UI slicer to Human-AI Interaction & Real-Time Canvas Architect.',
    verdict: 'Junior layout slicing is heavily automated. Frontend engineers with deep systems thinking, performance profiling, and interaction craft command higher compensation.',
    chennaiContext: 'Strong demand in enterprise SaaS headquarters (Zoho, Freshworks) along the OMR corridor.'
  },
  {
    id: 'fullstack-dev',
    title: 'Autonomous Full Stack Engineer',
    category: 'fullstack',
    categoryLabel: 'FULL STACK',
    transformation: 'GROWING',
    transformationBadgeClass: 'bg-emerald-100 text-emerald-900 border border-emerald-300',
    aiExposure: 52,
    aiExposureLevel: 'MEDIUM',
    humanAnchor: 'End-to-end product architecture & customer domain',
    summary: 'Individual contributors now operate with the velocity of full squads by delegating boilerplate across the stack to AI coding agents.',
    responsibilities: [
      'Architect, develop, test, and ship end-to-end cloud web applications',
      'Integrate AI foundation model APIs into existing business workflows',
      'Maintain security, database consistency, and high availability',
      'Iterate rapidly based on direct user feedback and telemetry metrics'
    ],
    tasksAutomated: [
      'Generating API client SDK bindings from backend schemas',
      'Scaffolding full-stack application boilerplates and auth flows',
      'Writing end-to-end integration test templates and mock datasets',
      'Generating changelogs, migration scripts, and release documentation'
    ],
    tasksDurable: [
      'Holistic architectural decisions across client, API, and DB tiers',
      'End-to-end threat modeling and zero-trust data boundary controls',
      'Deep domain empathy to build differentiated customer features',
      'Autonomous debugging of complex distributed failure cascades'
    ],
    futureSkills: [
      'Polyglot proficiency (TypeScript, Python, Go, Rust)',
      'AI agent frameworks (LangGraph, CrewAI, AutoGen)',
      'Serverless architectures and Edge computing',
      'Product telemetry and customer-centric experimentation'
    ],
    futureDirection: 'Expands into a high-leverage Product Engineer or Solo Venture Founder.',
    verdict: 'Demand for full-stack engineers who leverage AI agents to deliver complete products independently will experience massive sustained growth.',
    chennaiContext: 'High demand across startup incubators at IIT Madras Research Park and Taramani.'
  },
  {
    id: 'manual-tester',
    title: 'Manual QA / Test Analyst',
    category: 'qa',
    categoryLabel: 'QUALITY & ASSURANCE',
    transformation: 'SHRINKING',
    transformationBadgeClass: 'bg-rose-100 text-rose-900 border border-rose-300',
    aiExposure: 82,
    aiExposureLevel: 'HIGH',
    humanAnchor: 'Exploratory chaos testing & safety compliance',
    summary: 'Scripted manual test execution is the single most vulnerable entry-level IT role. Immediate upskilling into automation and LLM evaluation is imperative.',
    responsibilities: [
      'Execute manual test cases across web and mobile builds',
      'Log defect tickets with reproduction steps in JIRA',
      'Perform exploratory smoke testing on production releases',
      'Verify localization, UI formatting, and cross-device display'
    ],
    tasksAutomated: [
      'Repetitive regression test clicking and verification checklists',
      'Standard test case documentation and matrix generation',
      'Basic cross-browser compatibility visual inspections',
      'Formatting and logging automated bug reports'
    ],
    tasksDurable: [
      'Designing exploratory chaos scenarios that break edge assumptions',
      'Evaluating non-deterministic AI model hallucination risks',
      'Ensuring safety compliance in clinical and banking software',
      'Interpreting ambiguous business regulations into quality guardrails'
    ],
    futureSkills: [
      'Python & TypeScript for automated test scripting',
      'Playwright & Cypress modern automation suites',
      'LLM Evaluation frameworks (Ragas, DeepEval)',
      'API performance and load testing (k6, Locust)'
    ],
    futureDirection: 'Must pivot to AI Evaluation Engineer or Quality Platform Specialist.',
    verdict: 'Routine manual testing headcount is contracting rapidly across major IT services contracts. Upskilling into automated test engineering and AI safety is urgently necessary.',
    chennaiContext: 'Highest vulnerability concentrated in legacy services campuses in Siruseri and Sholinganallur.'
  },
  {
    id: 'automation-qa',
    title: 'QA Automation & AI Safety Eng',
    category: 'qa',
    categoryLabel: 'QUALITY & ASSURANCE',
    transformation: 'TRANSFORMING',
    transformationBadgeClass: 'bg-amber-100 text-amber-900 border border-amber-300',
    aiExposure: 48,
    aiExposureLevel: 'MEDIUM',
    humanAnchor: 'Synthetic benchmark design & LLM red-teaming',
    summary: 'Moves from maintaining fragile UI selectors to architecting autonomous test agents, model evaluation pipelines, and adversarial security red-teams.',
    responsibilities: [
      'Build scalable end-to-end automation frameworks in CI/CD',
      'Benchmark AI application accuracy, context retrieval, and safety',
      'Conduct automated chaos and resilience engineering tests',
      'Monitor production error budgets and telemetry regressions'
    ],
    tasksAutomated: [
      'Generating CSS/XPath locator selectors automatically',
      'Writing repetitive Page Object Model (POM) boilerplate classes',
      'Routine flaky test failure triaging and rerun orchestration',
      'Generating synthetic mock datasets for standard unit tests'
    ],
    tasksDurable: [
      'Engineering synthetic golden datasets for non-deterministic AI tests',
      'Red-teaming models against adversarial prompt injections',
      'Designing distributed load and disaster-recovery simulations',
      'Setting enterprise quality governance standards across microservices'
    ],
    futureSkills: [
      'Playwright, k6, and Chaos Mesh',
      'AI Evaluation Metrics (Faithfulness, Context Recall, Semantic Similarity)',
      'GitHub Actions & Argo Workflows CI/CD integration',
      'Security red-teaming tools and OWASP LLM Top 10'
    ],
    futureDirection: 'Evolves into Enterprise AI Quality & Safety Architect.',
    verdict: 'Automation engineers who upgrade to probabilistic AI benchmarking, performance chaos testing, and security evaluations will see growing demand.',
    chennaiContext: 'Strong hiring across fintech and automotive software labs in Guindy and Porur.'
  },
  {
    id: 'support-engineer',
    title: 'Technical Support & L1/L2 Ops',
    category: 'operations',
    categoryLabel: 'OPERATIONS & SUPPORT',
    transformation: 'SHRINKING',
    transformationBadgeClass: 'bg-rose-100 text-rose-900 border border-rose-300',
    aiExposure: 78,
    aiExposureLevel: 'HIGH',
    humanAnchor: 'High-stakes customer escalation & crisis diplomacy',
    summary: 'Autonomous agentic triage bots handle Tier-1 ticket resolution. Human support shifts to mission-critical escalation and client relationship management.',
    responsibilities: [
      'Monitor application alerts, error logs, and system dashboards',
      'Triage incoming client tickets and execute standard runbooks',
      'Escalate unresolved software bugs to core engineering teams',
      'Communicate status updates during enterprise service outages'
    ],
    tasksAutomated: [
      'Password resets, access provisioning, and standard permission requests',
      'Initial log retrieval and error categorization via semantic search',
      'Standard knowledge-base question resolution for end users',
      'Routine system health status check updates'
    ],
    tasksDurable: [
      'De-escalating emotionally charged VIP client crises during outages',
      'Investigating complex multi-system anomalies with unknown causes',
      'Collaborating with security teams during active cyber breaches',
      'Refining enterprise knowledge bases and agent runbooks'
    ],
    futureSkills: [
      'Site Reliability Engineering (SRE) fundamentals',
      'Log querying (KQL, PromQL, CloudWatch Insights)',
      'Incident command frameworks and stakeholder diplomacy',
      'Basic scripting in Python and Bash for automated remediation'
    ],
    futureDirection: 'Must pivot to SRE Operations, Customer Success Engineering, or Cloud Ops.',
    verdict: 'Entry-level Tier-1 ticket triage is contracting. Engineers must transition into automation-heavy SRE roles or consultative customer technical success.',
    chennaiContext: 'High exposure across BPO/IT service facilities along Ambattur and OMR.'
  },
  {
    id: 'devops-engineer',
    title: 'Platform & DevOps Engineer',
    category: 'devops',
    categoryLabel: 'INFRASTRUCTURE & PLATFORMS',
    transformation: 'GROWING',
    transformationBadgeClass: 'bg-emerald-100 text-emerald-900 border border-emerald-300',
    aiExposure: 42,
    aiExposureLevel: 'LOW',
    humanAnchor: 'Resilient multi-cloud topology & FinOps governance',
    summary: 'Code volume is exploding due to AI; platform teams are critical to manage Kubernetes clusters, GPU allocations, and developer productivity platforms.',
    responsibilities: [
      'Build internal developer platforms (IDP) and automated CI/CD',
      'Manage multi-region Kubernetes clusters and container registries',
      'Optimize cloud computing costs and GPU resource utilization',
      'Enforce infrastructure security and automated compliance guardrails'
    ],
    tasksAutomated: [
      'Drafting standard Kubernetes YAML manifests and Helm charts',
      'Writing boilerplate Terraform and CloudFormation scripts',
      'Parsing unstructured syslog data for anomaly detection',
      'Generating routine CI/CD pipeline template files'
    ],
    tasksDurable: [
      'Designing fault-tolerant multi-region failover strategies',
      'Complex FinOps cost governance and GPU capacity negotiation',
      'Building secure air-gapped VPC architectures for sensitive data',
      'Leading post-incident root cause investigations and architecture reviews'
    ],
    futureSkills: [
      'Kubernetes (K8s) multi-cluster management & Istio',
      'Terraform / OpenTofu & Crossplane',
      'MLOps orchestration (Ray, Kubeflow, vLLM)',
      'Cloud FinOps and sovereign data center architecture'
    ],
    futureDirection: 'Expands into Cloud Platform & MLOps Infrastructure Architect.',
    verdict: 'As AI accelerates software generation, the need for robust platform engineering and GPU orchestration expands significantly.',
    chennaiContext: 'Heavy demand in cloud data center corridors around Ambattur and Siruseri.'
  },
  {
    id: 'cloud-engineer',
    title: 'Enterprise Cloud Architect',
    category: 'devops',
    categoryLabel: 'INFRASTRUCTURE & PLATFORMS',
    transformation: 'GROWING',
    transformationBadgeClass: 'bg-emerald-100 text-emerald-900 border border-emerald-300',
    aiExposure: 38,
    aiExposureLevel: 'LOW',
    humanAnchor: 'Hybrid-cloud sovereignty & low-latency topologies',
    summary: 'Hybrid cloud migrations, sovereign AI data centers, and multi-cloud resilience are top board-level priorities across Indian GCCs.',
    responsibilities: [
      'Design hybrid and multi-cloud enterprise architectures',
      'Migrate legacy on-premise workloads to cloud-native platforms',
      'Ensure data sovereignty compliance with national data protection laws',
      'Implement identity federation and zero-trust security perimeters'
    ],
    tasksAutomated: [
      'Calculating basic cloud sizing and cost comparison matrices',
      'Generating standard network topology diagram scripts',
      'Writing basic cloud security group and firewall configurations',
      'Running automated compliance scan reports against CIS benchmarks'
    ],
    tasksDurable: [
      'High-level disaster recovery and business continuity design',
      'Negotiating sovereign data boundaries under Indian DPDP Act',
      'Architecting ultra-low latency compute nodes for industrial IoT',
      'Aligning cloud infrastructure with executive business strategy'
    ],
    futureSkills: [
      'AWS / Azure / GCP Solutions Architecture (Professional)',
      'Sovereign Cloud & Edge Computing architectures',
      'Zero-Trust network access (ZTNA) and IAM federation',
      'Enterprise cloud migration governance'
    ],
    futureDirection: 'High-compensation strategic executive cloud advisory role.',
    verdict: 'Enterprise cloud migration and private AI infrastructure deployment ensure robust long-term demand for skilled cloud architects.',
    chennaiContext: 'High demand in banking and manufacturing tech centers across Guindy and Taramani.'
  },
  {
    id: 'sre',
    title: 'Site Reliability Engineer (SRE)',
    category: 'devops',
    categoryLabel: 'INFRASTRUCTURE & PLATFORMS',
    transformation: 'GROWING',
    transformationBadgeClass: 'bg-emerald-100 text-emerald-900 border border-emerald-300',
    aiExposure: 40,
    aiExposureLevel: 'LOW',
    humanAnchor: 'Chaos engineering, SLO governance & live triage',
    summary: 'Probabilistic AI components introduce non-deterministic system behaviors; SREs manage reliability, error budgets, and automated self-healing.',
    responsibilities: [
      'Define and enforce Service Level Objectives (SLOs) and SLIs',
      'Design automated self-healing infrastructure and failover circuits',
      'Lead incident management during high-severity production outages',
      'Conduct blameless post-mortems and engineer system reliability'
    ],
    tasksAutomated: [
      'Generating alert rule thresholds from baseline telemetry metrics',
      'Summarizing incident logs and writing initial incident draft reports',
      'Executing standard automated rollback scripts upon deployment failure',
      'Synthesizing synthetic monitoring health checks'
    ],
    tasksDurable: [
      'Triaging cascading failures across non-deterministic AI microservices',
      'Balancing rapid feature velocity against production stability budgets',
      'Conducting complex chaos engineering simulations on live traffic',
      'Fostering a resilient, blameless engineering culture'
    ],
    futureSkills: [
      'Distributed Tracing & OpenTelemetry standards',
      'Prometheus, Grafana, and Datadog advanced instrumentation',
      'Chaos Engineering tools (Gremlin, Chaos Mesh)',
      'Go and Python for high-performance reliability automation'
    ],
    futureDirection: 'Critical pillar of modern high-availability engineering teams.',
    verdict: 'High-leverage engineering discipline with strong compensation growth as systems become more distributed and complex.',
    chennaiContext: 'Sought after by tier-1 global capability centers and hyperscale SaaS vendors.'
  },
  {
    id: 'data-engineer',
    title: 'Real-Time Data Platform Eng',
    category: 'data',
    categoryLabel: 'DATA & INTELLIGENCE',
    transformation: 'GROWING',
    transformationBadgeClass: 'bg-emerald-100 text-emerald-900 border border-emerald-300',
    aiExposure: 44,
    aiExposureLevel: 'LOW',
    humanAnchor: 'Data lakehouse topology, vector indexing & governance',
    summary: 'AI quality is completely dependent on clean, governed, real-time data pipelines and high-performance vector infrastructure.',
    responsibilities: [
      'Design and scale real-time streaming pipelines (Kafka, Flink)',
      'Implement modern data lakehouse architectures (Iceberg, Delta Lake)',
      'Build vector embedding indexing pipelines for enterprise RAG',
      'Enforce data governance, quality contracts, and privacy masking'
    ],
    tasksAutomated: [
      'Writing standard SQL queries, joins, and basic schema migrations',
      'Generating documentation comments and column descriptions',
      'Drafting basic PySpark and dbt data transformation templates',
      'Writing boilerplate data sanity checks and null-value validations'
    ],
    tasksDurable: [
      'Architecting multi-terabyte real-time event streaming pipelines',
      'Optimizing high-dimensional vector search indexing and chunking strategies',
      'Enforcing regulatory compliance (PII redaction, DPDP Act data rights)',
      'Designing resilient data contracts between decoupled engineering squads'
    ],
    futureSkills: [
      'Apache Spark, Flink, and Kafka / Redpanda',
      'Modern Lakehouse: Apache Iceberg & Snowflake / BigQuery',
      'Vector Databases: Milvus, Qdrant, Pinecone, pgvector',
      'dbt (Data Build Tool) & Data Mesh governance'
    ],
    futureDirection: 'Expands into Enterprise AI Data Platform Architect.',
    verdict: 'Data engineering is the fundamental prerequisite for enterprise AI adoption. Demand continues to outstrip market supply.',
    chennaiContext: 'High demand across retail, healthcare, and automotive analytics centers in OMR.'
  },
  {
    id: 'data-scientist',
    title: 'Applied AI & Data Scientist',
    category: 'data',
    categoryLabel: 'DATA & INTELLIGENCE',
    transformation: 'TRANSFORMING',
    transformationBadgeClass: 'bg-amber-100 text-amber-900 border border-amber-300',
    aiExposure: 60,
    aiExposureLevel: 'MEDIUM',
    humanAnchor: 'Causal inference, statistical validity & domain intuition',
    summary: 'Basic predictive modeling is commoditized by AutoML. Focus shifts to causal inference, fine-tuning foundation models, and business alignment.',
    responsibilities: [
      'Formulate business problems into rigorous mathematical hypotheses',
      'Fine-tune open-weights models and train domain-specific models',
      'Design A/B experimentation frameworks and causal inference models',
      'Communicate data-driven strategic insights to executive leadership'
    ],
    tasksAutomated: [
      'Exploratory data analysis (EDA) charts and summary statistics',
      'Standard hyperparameter tuning runs via automated libraries',
      'Drafting baseline regression and classification model code in Python',
      'Generating executive presentation slide summaries'
    ],
    tasksDurable: [
      'Disentangling correlation from true causal business drivers',
      'Designing novel domain-specific evaluation loss functions',
      'Auditing models for hidden demographic and algorithmic bias',
      'Formulating actionable strategic direction from complex ambiguous data'
    ],
    futureSkills: [
      'PyTorch & Hugging Face Transformers',
      'Causal Inference & Advanced Econometric modeling',
      'LLM Fine-tuning (LoRA, QLoRA, DPO, RLHF)',
      'Model interpretability frameworks (SHAP, LIME, Captum)'
    ],
    futureDirection: 'Transforms into Strategic Decision Scientist or ML Research Lead.',
    verdict: 'Junior data analyst tasks are automated. Data scientists with deep statistical rigor, domain depth, and fine-tuning skills remain highly valued.',
    chennaiContext: 'Strong footprint in healthcare IT and automotive software clusters.'
  },
  {
    id: 'ai-ml-engineer',
    title: 'Foundational AI / ML Systems Eng',
    category: 'data',
    categoryLabel: 'DATA & INTELLIGENCE',
    transformation: 'GROWING',
    transformationBadgeClass: 'bg-emerald-100 text-emerald-900 border border-emerald-300',
    aiExposure: 32,
    aiExposureLevel: 'LOW',
    humanAnchor: 'CUDA optimization, multi-agent graphs & latency budgets',
    summary: 'The epicenter of modern software innovation. High demand for engineers who can fine-tune, quantize, and orchestrate autonomous multi-agent networks.',
    responsibilities: [
      'Fine-tune, quantize, and serve high-throughput open-weights models',
      'Build autonomous multi-agent systems with tool-calling capabilities',
      'Optimize GPU inference latency and token memory budgets',
      'Deploy localized on-premise AI models in private enterprise VPCs'
    ],
    tasksAutomated: [
      'Generating standard model architecture boilerplate code',
      'Writing basic data loader pipelines for standard datasets',
      'Parsing API response JSON formats and structuring outputs',
      'Drafting benchmark performance report summaries'
    ],
    tasksDurable: [
      'Custom CUDA kernel development and low-level hardware acceleration',
      'Architecting complex stateful multi-agent decision graphs',
      'Mitigating catastrophic forgetting during domain-specific fine-tuning',
      'Designing safe model fallback loops under extreme latency constraints'
    ],
    futureSkills: [
      'PyTorch, vLLM, TensorRT-LLM, and Triton Inference Server',
      'Agent Frameworks: LangGraph, CrewAI, AutoGen',
      'Model Quantization: AWQ, GGUF, EXL2, bitsandbytes',
      'Vector Search & Advanced Retrieval (Hybrid Search, Re-ranking)'
    ],
    futureDirection: 'Highest tier of technical software engineering compensation.',
    verdict: 'Massive multi-year talent shortage across Indian tech corridors. Strongest growth trajectory across all technical disciplines.',
    chennaiContext: 'Surging hiring across R&D labs in IIT-M Research Park and OMR product campuses.'
  },
  {
    id: 'cybersecurity',
    title: 'Zero-Trust & AI Security Eng',
    category: 'security',
    categoryLabel: 'SECURITY & GOVERNANCE',
    transformation: 'GROWING',
    transformationBadgeClass: 'bg-emerald-100 text-emerald-900 border border-emerald-300',
    aiExposure: 35,
    aiExposureLevel: 'LOW',
    humanAnchor: 'Adversarial red-teaming, threat hunting & live breaches',
    summary: 'AI creates novel attack vectors (prompt injection, synthetic identity fraud) requiring continuous adversarial defense and zero-trust engineering.',
    responsibilities: [
      'Protect enterprise cloud perimeters against automated cyber threats',
      'Conduct adversarial red-team simulations and LLM jailbreak audits',
      'Implement Zero-Trust identity federation and cryptographic controls',
      'Lead rapid incident response during mission-critical security breaches'
    ],
    tasksAutomated: [
      'Scanning known vulnerability registries (CVE databases)',
      'Parsing syslog streams for standard signature-matched intrusion alerts',
      'Generating preliminary compliance audit checklists and matrices',
      'Drafting employee cybersecurity awareness training emails'
    ],
    tasksDurable: [
      'Proactively hunting sophisticated nation-state persistent threats (APTs)',
      'Defending generative models against data poisoning and indirect injection',
      'Conducting live crisis command during severe corporate ransomware attacks',
      'Designing mathematically provable zero-trust cryptographic architectures'
    ],
    futureSkills: [
      'OWASP Top 10 for LLMs & AI Red-Teaming frameworks',
      'Cloud Security Posture Management (CSPM, CIEM)',
      'Threat Hunting with SIEM/SOAR platforms (Splunk, Microsoft Sentinel)',
      'Identity Governance, Passkeys, and Post-Quantum Cryptography'
    ],
    futureDirection: 'Expands into Chief Information Security Officer (CISO) track.',
    verdict: 'Critical defensive pillar with sustained non-cyclical budget growth across all enterprise and government sectors.',
    chennaiContext: 'High demand across defense electronics and international banking hubs in Guindy.'
  },
  {
    id: 'product-manager',
    title: 'AI Product Strategy Lead',
    category: 'product',
    categoryLabel: 'PRODUCT & STRATEGY',
    transformation: 'GROWING',
    transformationBadgeClass: 'bg-emerald-100 text-emerald-900 border border-emerald-300',
    aiExposure: 46,
    aiExposureLevel: 'LOW',
    humanAnchor: 'Customer empathy, unit economics & ethical trade-offs',
    summary: 'Must understand probabilistic model behavior, token economics, and human-in-the-loop UX to build viable AI-first software products.',
    responsibilities: [
      'Define product vision, customer user journeys, and go-to-market strategy',
      'Evaluate unit economics of token usage versus business customer value',
      'Design intuitive UX patterns for non-deterministic AI system outputs',
      'Prioritize engineering backlogs to maximize enterprise ROI'
    ],
    tasksAutomated: [
      'Drafting standard user stories, acceptance criteria, and JIRA epics',
      'Synthesizing customer feedback surveys and feature request tickets',
      'Compiling competitor feature matrix comparison documents',
      'Writing preliminary release notes and changelog announcements'
    ],
    tasksDurable: [
      'Uncovering deep, unspoken customer pain points through empathy interviews',
      'Navigating complex ethical, privacy, and regulatory product dilemmas',
      'Negotiating high-stakes cross-functional stakeholder alignment',
      'Making decisive product trade-offs under conditions of extreme market ambiguity'
    ],
    futureSkills: [
      'AI UX Design heuristics & Streaming Interaction patterns',
      'Token economics, API pricing models, and SaaS unit economics',
      'Data-driven hypothesis testing and causal experimentation',
      'Executive communication, storytelling, and strategic negotiation'
    ],
    futureDirection: 'Transitions into Chief Product Officer or Venture Startup Founder.',
    verdict: 'Product leaders who master probabilistic product design and rapid AI prototyping gain tremendous organizational influence.',
    chennaiContext: 'Strong ecosystem within Chennai\'s world-class SaaS corridor.'
  },
  {
    id: 'business-analyst',
    title: 'AI Workflow & Process Analyst',
    category: 'product',
    categoryLabel: 'PRODUCT & STRATEGY',
    transformation: 'TRANSFORMING',
    transformationBadgeClass: 'bg-amber-100 text-amber-900 border border-amber-300',
    aiExposure: 62,
    aiExposureLevel: 'MEDIUM',
    humanAnchor: 'Enterprise workflow mapping & domain translation',
    summary: 'Bridges non-technical domain experts and AI engineering squads to map complex enterprise business processes to autonomous agent workflows.',
    responsibilities: [
      'Analyze end-to-end enterprise business processes and identify bottlenecks',
      'Translate complex business rules into precise specifications for AI workflows',
      'Measure productivity KPIs, time savings, and operational cost reductions',
      'Facilitate user acceptance testing (UAT) and corporate change management'
    ],
    tasksAutomated: [
      'Documenting current-state process flow diagrams and standard runbooks',
      'Summarizing meeting transcripts and extracting basic action items',
      'Generating standard requirement traceability matrices in spreadsheets',
      'Drafting baseline user training guides and FAQ manuals'
    ],
    tasksDurable: [
      'Navigating corporate political resistance to automation and change',
      'Disentangling convoluted legacy business rules and undocumented edge cases',
      'Designing human-in-the-loop validation checkpoints for high-risk decisions',
      'Calculating rigorous enterprise business case ROI for executive approval'
    ],
    futureSkills: [
      'Process Mining tools (Celonis) & Workflow Orchestration (Temporal, n8n)',
      'Prompt Design & AI Workflow Specification mapping',
      'Agile Business Analysis & Stakeholder Change Management',
      'Data Querying (SQL) and PowerBI / Tableau visualization'
    ],
    futureDirection: 'Transforms into Enterprise AI Transformation Lead or Operations Consultant.',
    verdict: 'Routine documentation analysts will shrink. Analysts who can redesign enterprise workflows for autonomous agents will be in high demand.',
    chennaiContext: 'High volume across IT service headquarters in OMR and Sholinganallur.'
  },
  {
    id: 'solution-architect',
    title: 'Principal Solutions Architect',
    category: 'architecture',
    categoryLabel: 'ARCHITECTURE & LEADERSHIP',
    transformation: 'GROWING',
    transformationBadgeClass: 'bg-emerald-100 text-emerald-900 border border-emerald-300',
    aiExposure: 30,
    aiExposureLevel: 'LOW',
    humanAnchor: 'Macro system boundaries, trade-offs & governance',
    summary: 'As AI accelerates code production by 10x, human architects are vital to guarantee system resilience, security boundaries, and enterprise governance.',
    responsibilities: [
      'Define macro architectural patterns across enterprise application suites',
      'Evaluate complex architectural trade-offs (consistency, latency, cost)',
      'Establish technical governance, security boundaries, and API contracts',
      'Guide executive leadership on multi-year technology transformation roadmaps'
    ],
    tasksAutomated: [
      'Generating standard Architectural Decision Record (ADR) text templates',
      'Drafting initial cloud component sizing estimates and billing breakdowns',
      'Creating baseline C4 system context diagram scripts (PlantUML, Mermaid)',
      'Researching vendor API specifications and feature comparison matrices'
    ],
    tasksDurable: [
      'Making irreversible high-stakes technical architecture commitments',
      'Designing resilient fault isolation boundaries to prevent catastrophic failure',
      'Aligning long-term technology roadmaps with global corporate strategy',
      'Mentoring senior engineering talent and fostering architectural rigor'
    ],
    futureSkills: [
      'Distributed Systems Architecture (Event-Driven, Microservices, CQRS)',
      'Enterprise AI Integration Patterns and Vector Infrastructure',
      'Cloud-Native Architectures (Multi-Cloud, Sovereign Data, FinOps)',
      'Executive Leadership, Technical Influence, and Boardroom Advisory'
    ],
    futureDirection: 'Apex technical leadership role (CTO / Chief Architect track).',
    verdict: 'Highest strategic value in enterprise tech. Irreplaceable human role with enduring multi-decade career longevity.',
    chennaiContext: 'High concentration across global enterprise delivery centers in Taramani and Guindy.'
  }
];
