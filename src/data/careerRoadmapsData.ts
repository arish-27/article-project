import { CareerTrack } from '../types';

export const careerTracks: Record<string, CareerTrack> = {
  'java-backend': {
    id: 'java-backend',
    title: 'Java Backend Developer',
    currentRole: 'Java Backend Developer (Building Server & App Logic)',
    currentSkills: ['Java Basics', 'Spring Boot', 'SQL & Databases', 'REST APIs', 'Git', 'Testing'],
    aiAssistedTasks: [
      'Writing repetitive database connection code',
      'Creating standard test cases and sample mock data',
      'Upgrading older Java code to modern versions',
      'Translating database queries into application code'
    ],
    humanValueMoat: [
      'Designing how different server systems talk to each other reliably',
      'Solving complex system slowdowns and preventing crashes',
      'Understanding specific business rules (like banking or healthcare policies)',
      'Reviewing AI-generated code for security flaws and mistakes'
    ],
    futureSkills: [
      'Cloud Computing (AWS / Google Cloud)',
      'Managing software containers (Docker & Kubernetes)',
      'Connecting streaming data systems (Kafka)',
      'API Security and protecting user data',
      'Connecting AI models with Java apps (Spring AI)',
      'Searching databases using AI embeddings',
      'Monitoring live servers for performance issues'
    ],
    target2030Role: 'Senior AI & Backend Systems Lead',
    progressionPath: 'Java Developer → AI-Assisted Developer → Cloud Backend Specialist → Lead Systems Architect',
    stages: [
      {
        step: '01',
        statusLabel: 'STARTER LEVEL',
        statusColorClass: 'text-rose-800',
        title: 'Start with Software Development',
        description: 'Learn core programming, database queries, and building basic app features. AI tools can help speed up writing basic templates.',
        action: 'Use AI helpers to write standard code faster.'
      },
      {
        step: '02',
        statusLabel: 'INTERMEDIATE',
        statusColorClass: 'text-amber-800',
        title: 'Use AI in Your Daily Work',
        description: 'Review code written by AI, catch subtle security bugs, optimize database queries, and ensure data calculations are accurate.',
        action: 'Focus on testing, code quality, and debugging.'
      },
      {
        step: '03',
        statusLabel: 'ADVANCED',
        statusColorClass: 'text-emerald-800',
        title: 'Understand How Bigger Systems Work',
        description: 'Translate business needs into reliable cloud architecture, connect real-time data flows, and design systems that never crash.',
        action: 'Learn cloud infrastructure and system design.'
      },
      {
        step: '04',
        statusLabel: 'LEADERSHIP (2030)',
        statusColorClass: 'text-ink',
        title: 'Lead Advanced AI & Cloud Projects',
        description: 'Guide multiple AI agents, connect corporate knowledge bases to intelligent tools, and make key technical architecture decisions.',
        action: 'Step into principal engineering leadership.'
      }
    ]
  },
  'frontend': {
    id: 'frontend',
    title: 'Frontend & UI Engineer',
    currentRole: 'Frontend Developer (React, TypeScript, CSS)',
    currentSkills: ['HTML5/CSS3', 'JavaScript ES6+', 'React / Next.js', 'Tailwind CSS', 'State Management', 'REST APIs'],
    aiAssistedTasks: [
      'Figma auto-conversion to React/Tailwind code',
      'Responsive CSS flex/grid layout boilerplate',
      'Standard form validation logic and input state',
      'Snapshot test authoring and simple DOM checks'
    ],
    humanValueMoat: [
      'Complex canvas WebGL and streaming generative UI feedback',
      'Sub-millisecond interaction feedback loops and visual brand taste',
      'Inclusive screen-reader accessibility (WCAG AAA) compliance',
      'Client-side on-device model execution (WASM / WebGPU)'
    ],
    futureSkills: [
      'Next.js / Modern SSR & Server Components',
      'WebAssembly (WASM) & WebGPU client models',
      'Generative UI streams & WebSockets',
      'Design Systems & Accessibility Engineering'
    ],
    target2030Role: 'Interactive Experience & AI-Interface Architect',
    progressionPath: 'Frontend Dev → UI Component Specialist → Generative Experience Engineer → Client Platform Architect',
    stages: [
      {
        step: '01',
        statusLabel: 'AUTOMATABLE IN 2025',
        statusColorClass: 'text-rose-800',
        title: 'Component Slicing & Markup',
        description: 'Converting Figma mockups to Tailwind code, wiring basic form validation, and writing standard layout markup.',
        action: 'Automate using design-to-code generative plugins.'
      },
      {
        step: '02',
        statusLabel: 'COLLABORATIVE AUGMENTATION',
        statusColorClass: 'text-amber-800',
        title: 'State Optimization & Animations',
        description: 'Optimizing rendering lifecycles, managing complex client-side caching, and implementing micro-interactions with Framer Motion.',
        action: 'Focus on performance profiling and fluid UX.'
      },
      {
        step: '03',
        statusLabel: 'HIGH HUMAN AGENCY',
        statusColorClass: 'text-emerald-800',
        title: 'Generative Canvas Interfaces',
        description: 'Building multi-modal streaming canvases, token-by-token streaming UI state, and rich interactive data visualizations.',
        action: 'Master real-time WebSocket state and generative UI heuristics.'
      },
      {
        step: '04',
        statusLabel: 'THE 2030 TARGET',
        statusColorClass: 'text-ink',
        title: 'Client Platform & WASM Architect',
        description: 'Running lightweight LLMs directly in-browser using WebGPU and WebAssembly for zero-latency client data intelligence.',
        action: 'Pioneer next-generation edge interface architectures.'
      }
    ]
  },
  'fullstack': {
    id: 'fullstack',
    title: 'Full Stack Engineer',
    currentRole: 'Full Stack Developer (Node, Python, React, DB)',
    currentSkills: ['TypeScript', 'Node.js / Python', 'React / Vue', 'PostgreSQL', 'Docker', 'REST APIs'],
    aiAssistedTasks: [
      'Scaffolding full-stack application boilerplates',
      'Generating API client bindings from backend schemas',
      'Writing integration test templates and mocks',
      'Generating changelogs and release documentation'
    ],
    humanValueMoat: [
      'End-to-end product architecture and commercial trade-offs',
      'Holistic security analysis across client, API, and DB',
      'Rapid prototype validation with product managers',
      'Autonomous system debugging and telemetry'
    ],
    futureSkills: [
      'Polyglot proficiency (TypeScript, Python, Go)',
      'AI agent frameworks (LangGraph, CrewAI)',
      'Serverless and containerized deployment pipelines',
      'Product empathy and business model understanding'
    ],
    target2030Role: 'High-Leverage Product Builder / Startup CTO',
    progressionPath: 'Full Stack Dev → Autonomous Feature Owner → Product Engineer → Technical Co-Founder / CTO',
    stages: [
      {
        step: '01',
        statusLabel: 'AUTOMATABLE IN 2025',
        statusColorClass: 'text-rose-800',
        title: 'Routine CRUD & Setup',
        description: 'Scaffolding projects, setting up authentication boilerplate, writing standard migrations, and creating basic dashboard UI.',
        action: 'Use AI co-pilots for 10x development velocity.'
      },
      {
        step: '02',
        statusLabel: 'COLLABORATIVE AUGMENTATION',
        statusColorClass: 'text-amber-800',
        title: 'Integrated RAG Features',
        description: 'Hooking up vector embeddings to relational databases, creating semantic search, and configuring structured output agents.',
        action: 'Ship AI-powered business features into existing stacks.'
      },
      {
        step: '03',
        statusLabel: 'HIGH HUMAN AGENCY',
        statusColorClass: 'text-emerald-800',
        title: 'Autonomous System Delivery',
        description: 'Leading entire product verticals solo with AI agent teams, validating customer traction, and refining unit economics.',
        action: 'Operate with high entrepreneurial agency.'
      },
      {
        step: '04',
        statusLabel: 'THE 2030 TARGET',
        statusColorClass: 'text-ink',
        title: 'Autonomous Systems CTO',
        description: 'Directing AI agent swarms that continuously build, test, monitor, and iterate production enterprise software.',
        action: 'Drive strategic product differentiation.'
      }
    ]
  },
  'qa': {
    id: 'qa',
    title: 'QA & Test Specialist',
    currentRole: 'QA Engineer (Manual Testing, Selenium, Postman)',
    currentSkills: ['Manual Test Cases', 'Selenium / Cypress', 'Postman', 'JIRA', 'SQL', 'Regression Testing'],
    aiAssistedTasks: [
      'Generating locator selectors and test script steps',
      'Executing repetitive UI regression suites',
      'Drafting defect logs with reproduction steps',
      'API contract smoke test generation'
    ],
    humanValueMoat: [
      'Chaos engineering and distributed stress test design',
      'Evaluating non-deterministic LLM output quality and hallucinations',
      'Security boundary testing and ethical adversarial red-teaming',
      'Ensuring compliance with healthcare/financial safety guidelines'
    ],
    futureSkills: [
      'CI/CD Pipeline Integration (GitHub Actions)',
      'Performance and load testing tools (k6, Locust)',
      'Model evaluation frameworks (Ragas, DeepEval)',
      'AI Red-Teaming & Adversarial Prompt Testing'
    ],
    target2030Role: 'Quality Platform & AI Safety Engineer',
    progressionPath: 'Manual Tester → Automation Engineer → Quality Platform Engineer → AI Safety & Evaluation Lead',
    stages: [
      {
        step: '01',
        statusLabel: 'AUTOMATABLE IN 2025',
        statusColorClass: 'text-rose-800',
        title: 'Manual Clicking & Basic Scripts',
        description: 'Writing step-by-step test plans, manual regression checks, and basic Selenium test authoring.',
        action: 'Transition away from pure manual verification immediately.'
      },
      {
        step: '02',
        statusLabel: 'COLLABORATIVE AUGMENTATION',
        statusColorClass: 'text-amber-800',
        title: 'Automated CI/CD Test Pipelines',
        description: 'Building self-healing test automation integrated into pull requests and running synthetic load tests using k6.',
        action: 'Master modern Playwright, Python test scripting, and CI/CD.'
      },
      {
        step: '03',
        statusLabel: 'HIGH HUMAN AGENCY',
        statusColorClass: 'text-emerald-800',
        title: 'AI Model & RAG Evaluation',
        description: 'Measuring context precision, faithfulness, hallucination frequency, and answer relevancy using Ragas and DeepEval.',
        action: 'Specialize in probabilistic LLM quality benchmarks.'
      },
      {
        step: '04',
        statusLabel: 'THE 2030 TARGET',
        statusColorClass: 'text-ink',
        title: 'AI Safety & Resilience Director',
        description: 'Auditing multi-agent system guardrails, preventing prompt injection attacks, and ensuring regulatory compliance.',
        action: 'Lead enterprise AI safety and reliability governance.'
      }
    ]
  },
  'devops': {
    id: 'devops',
    title: 'DevOps & Cloud Engineer',
    currentRole: 'DevOps / Cloud Engineer (AWS, Linux, Docker, K8s)',
    currentSkills: ['Linux', 'Docker', 'Kubernetes', 'Terraform', 'AWS / Azure', 'CI/CD Pipelines'],
    aiAssistedTasks: [
      'Drafting boilerplate Kubernetes manifests and Helm charts',
      'Generating standard CI/CD workflow files',
      'Writing basic Ansible and Terraform modules',
      'Routine log parsing and anomaly notification'
    ],
    humanValueMoat: [
      'Multi-cloud disaster recovery failover and cascade prevention',
      'FinOps cloud budget enforcement and GPU cost optimization',
      'Post-mortem human root-cause analyses and blameless culture',
      'Cyber-warfare and ransomware isolation during live breaches'
    ],
    futureSkills: [
      'Terraform / OpenTofu & Crossplane',
      'Kubernetes Service Meshes (Istio) & Multi-cluster',
      'GPU Cluster Orchestration & Ray / vLLM MLOps',
      'Cloud FinOps and Sovereign AI Infrastructure'
    ],
    target2030Role: 'Platform Engineering & MLOps Architect',
    progressionPath: 'DevOps Engineer → Cloud Specialist → Platform Engineer → MLOps Infrastructure Architect',
    stages: [
      {
        step: '01',
        statusLabel: 'AUTOMATABLE IN 2025',
        statusColorClass: 'text-rose-800',
        title: 'Basic YAML & Script Writing',
        description: 'Writing Dockerfiles, generating basic Terraform templates, and setting up standard pipeline triggers.',
        action: 'Automate boilerplate IaC with AI.'
      },
      {
        step: '02',
        statusLabel: 'COLLABORATIVE AUGMENTATION',
        statusColorClass: 'text-amber-800',
        title: 'GitOps & Self-Service Portals',
        description: 'Building internal developer platforms (IDP) using Backstage and ArgoCD so software developers can self-serve infrastructure safely.',
        action: 'Evolve from ticket-taker to internal platform builder.'
      },
      {
        step: '03',
        statusLabel: 'HIGH HUMAN AGENCY',
        statusColorClass: 'text-emerald-800',
        title: 'MLOps & GPU Cluster Management',
        description: 'Managing high-cost GPU nodes, configuring vLLM model serving instances, and automating model quantization pipelines.',
        action: 'Master specialized AI compute orchestration.'
      },
      {
        step: '04',
        statusLabel: 'THE 2030 TARGET',
        statusColorClass: 'text-ink',
        title: 'Autonomous Systems Infrastructure Lead',
        description: 'Orchestrating sovereign AI multi-cloud data centers with automated self-healing triggers and zero-trust perimeter defenses.',
        action: 'Direct enterprise resilience and sovereign AI compute.'
      }
    ]
  },
  'data': {
    id: 'data',
    title: 'Data & AI Engineer',
    currentRole: 'Data Engineer / Scientist (SQL, Python, Spark, ETL)',
    currentSkills: ['SQL', 'Python', 'Apache Spark', 'Data Warehousing', 'ETL Pipelines', 'Pandas'],
    aiAssistedTasks: [
      'Writing standard SQL transformations and joins',
      'Generating data profiling and sanity check scripts',
      'Drafting PySpark / dbt model boilerplates',
      'Documenting schema column data dictionaries'
    ],
    humanValueMoat: [
      'Architecting real-time streaming topologies for live AI inference',
      'Designing vector store indexing and chunking strategies for RAG',
      'Ensuring data lineage, privacy, and GDPR/DPDP Act compliance',
      'Optimizing multi-terabyte analytical queries and storage costs'
    ],
    futureSkills: [
      'Apache Spark, Flink & Kafka / Redpanda',
      'dbt & Modern Data Warehousing (Snowflake / BigQuery)',
      'Vector Databases (Milvus, Pinecone, Qdrant, pgvector)',
      'Data Governance, Lakehouse architectures & Iceberg'
    ],
    target2030Role: 'Real-Time AI Data Platform Architect',
    progressionPath: 'Data Analyst → ETL Engineer → Data Platform Engineer → Chief Data & AI Architect',
    stages: [
      {
        step: '01',
        statusLabel: 'AUTOMATABLE IN 2025',
        statusColorClass: 'text-rose-800',
        title: 'Basic ETL & Query Writing',
        description: 'Writing standard batch extraction scripts, creating simple dashboard SQL views, and cleaning tabular data.',
        action: 'Offload repetitive SQL generation to AI.'
      },
      {
        step: '02',
        statusLabel: 'COLLABORATIVE AUGMENTATION',
        statusColorClass: 'text-amber-800',
        title: 'Modern Lakehouses & dbt',
        description: 'Building version-controlled data pipelines in dbt and storing massive datasets in Apache Iceberg open table formats.',
        action: 'Master modern cloud data lakehouse stacks.'
      },
      {
        step: '03',
        statusLabel: 'HIGH HUMAN AGENCY',
        statusColorClass: 'text-emerald-800',
        title: 'Vector Pipeline & Streaming Topologies',
        description: 'Building streaming pipelines with Kafka and Flink, and managing vector search index tuning for enterprise search.',
        action: 'Connect streaming data lakes with vector RAG engines.'
      },
      {
        step: '04',
        statusLabel: 'THE 2030 TARGET',
        statusColorClass: 'text-ink',
        title: 'Chief Data & AI Architect',
        description: 'Designing sovereign enterprise data intelligence platforms that power all autonomous company workflows.',
        action: 'Lead enterprise data governance and AI platform strategy.'
      }
    ]
  },
  'security': {
    id: 'security',
    title: 'Cybersecurity Engineer',
    currentRole: 'Security Analyst / SOC Engineer (SIEM, Firewalls)',
    currentSkills: ['Network Security', 'SIEM & Log Analysis', 'Vulnerability Scanning', 'Linux Hardening', 'IAM'],
    aiAssistedTasks: [
      'Scanning known vulnerability databases (CVEs)',
      'Parsing security logs for routine intrusion signatures',
      'Generating standard compliance audit documentation',
      'Drafting initial security awareness training materials'
    ],
    humanValueMoat: [
      'Threat hunting against novel AI-generated cyber attacks',
      'Defending against prompt injections and model poisoning',
      'Incident command during high-stakes corporate breaches',
      'Architecting resilient Zero-Trust cryptographic architectures'
    ],
    futureSkills: [
      'AI Security (OWASP Top 10 for LLMs, red-teaming AI)',
      'Cloud Security Posture Management (CSPM, CIEM)',
      'Identity Federation, Zero-Trust Architecture & Cryptography',
      'Threat Intelligence and SIEM/SOAR Engineering'
    ],
    target2030Role: 'Enterprise AI Security & Trust Officer',
    progressionPath: 'Security Analyst → Penetration Tester → Cloud SecOps Lead → Chief Information Security Officer (CISO)',
    stages: [
      {
        step: '01',
        statusLabel: 'AUTOMATABLE IN 2025',
        statusColorClass: 'text-rose-800',
        title: 'Log Parsing & Routine Scans',
        description: 'Running scheduled vulnerability scans, checking compliance checklists, and triaging known CVE alerts.',
        action: 'Automate routine SOC alerting using AI SIEM.'
      },
      {
        step: '02',
        statusLabel: 'COLLABORATIVE AUGMENTATION',
        statusColorClass: 'text-amber-800',
        title: 'Cloud Security & Zero-Trust',
        description: 'Implementing Zero-Trust identity federation, micro-segmentation, and automated cloud posture management (CSPM).',
        action: 'Master cloud security architecture across AWS/Azure.'
      },
      {
        step: '03',
        statusLabel: 'HIGH HUMAN AGENCY',
        statusColorClass: 'text-emerald-800',
        title: 'AI Red-Teaming & Model Defense',
        description: 'Proactively jailbreaking models, testing adversarial prompt injection vulnerabilities, and preventing training data leaks.',
        action: 'Pioneer AI application penetration testing.'
      },
      {
        step: '04',
        statusLabel: 'THE 2030 TARGET',
        statusColorClass: 'text-ink',
        title: 'AI Trust & Sovereign Defense Director',
        description: 'Guarding national enterprise infrastructure against state-sponsored automated AI cyber warfare and deepfake attacks.',
        action: 'Lead board-level cybersecurity resilience.'
      }
    ]
  },
  'product': {
    id: 'product',
    title: 'Product & Business Strategist',
    currentRole: 'Product Manager / Business Analyst',
    currentSkills: ['User Stories', 'Roadmapping', 'Agile / Scrum', 'Wireframing', 'Market Research', 'Stakeholder Management'],
    aiAssistedTasks: [
      'Drafting user stories and acceptance criteria',
      'Synthesizing survey responses and feature requests',
      'Generating competitor feature comparison matrices',
      'Writing initial release communications and documentation'
    ],
    humanValueMoat: [
      'Deep user empathy and discovering unarticulated customer pain',
      'Strategic prioritization under extreme market uncertainty',
      'Evaluating ethical and legal implications of AI features',
      'Inspiring engineering, design, and executive stakeholders'
    ],
    futureSkills: [
      'AI Product Design & Human-in-the-Loop workflows',
      'Data-informed experimentation (A/B testing, causal metrics)',
      'Pricing models for token-based and agentic software',
      'High-impact stakeholder storytelling and negotiation'
    ],
    target2030Role: 'AI Product Leader / Strategic Venture Builder',
    progressionPath: 'Business Analyst → Product Manager → Head of AI Products → Chief Product Officer (CPO)',
    stages: [
      {
        step: '01',
        statusLabel: 'AUTOMATABLE IN 2025',
        statusColorClass: 'text-rose-800',
        title: 'Documentation & User Stories',
        description: 'Writing Jira tickets, transcribing meeting notes, drafting competitive analysis matrices, and creating basic slide decks.',
        action: 'Offload administrative PRD writing to AI.'
      },
      {
        step: '02',
        statusLabel: 'COLLABORATIVE AUGMENTATION',
        statusColorClass: 'text-amber-800',
        title: 'Rapid Prototyping & Experimentation',
        description: 'Prototyping interactive apps in hours using LLM code generation to test customer demand before committing engineering pods.',
        action: 'Accelerate hypothesis testing cycles.'
      },
      {
        step: '03',
        statusLabel: 'HIGH HUMAN AGENCY',
        statusColorClass: 'text-emerald-800',
        title: 'Probabilistic AI Product Design',
        description: 'Designing intuitive interfaces for non-deterministic AI outputs, managing token unit economics, and aligning pricing models.',
        action: 'Master human-AI interaction patterns.'
      },
      {
        step: '04',
        statusLabel: 'THE 2030 TARGET',
        statusColorClass: 'text-ink',
        title: 'AI Venture & Product Leader',
        description: 'Creating entirely new business categories powered by autonomous multi-agent software workflows.',
        action: 'Drive enterprise commercial innovation.'
      }
    ]
  }
};
