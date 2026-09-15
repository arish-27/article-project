import { EmergingRole } from '../types';

export interface NewAIRoleItem {
  id: string;
  role: string;
  whyItEmerges: string;
  keySkills: string[];
  fresherEntryPath: string;
  responsibilities: string;
  growthCategory: 'Core AI Engineering' | 'Infrastructure & Ops' | 'Security & Governance' | 'Product & Strategy';
  demandTier: 'CRITICAL DEMAND' | 'RAPID EXPANSION' | 'EMERGING STRATEGIC';
}

export const specific12NewAIRoles: NewAIRoleItem[] = [
  {
    id: 'ai-engineer',
    role: 'AI Engineer',
    whyItEmerges: 'Companies want engineers who can connect smart AI models (like Gemini and Claude) directly into their everyday websites and mobile apps.',
    keySkills: ['Python & JavaScript', 'Connecting AI APIs', 'Storing and searching data (Vector DBs)', 'Connecting databases to AI', 'Web Development'],
    fresherEntryPath: 'Build and launch a real web app that connects to an AI tool to answer questions from documents or help users complete tasks.',
    responsibilities: 'Builds AI features into websites and apps, makes sure responses are fast, and connects company databases securely.',
    growthCategory: 'Core AI Engineering',
    demandTier: 'CRITICAL DEMAND'
  },
  {
    id: 'ai-agent-developer',
    role: 'AI Agent Developer',
    whyItEmerges: 'Companies are moving beyond simple chatbots to building AI Agents — software systems that can plan and complete multi-step tasks with less human help.',
    keySkills: ['AI Agent Frameworks (LangGraph, CrewAI)', 'Connecting Tools & APIs', 'Managing memory and multi-step tasks', 'Python programming'],
    fresherEntryPath: 'Create an automated agent that can research a topic online, summarize findings, and email a formatted report automatically.',
    responsibilities: 'Designs smart workflows where AI can use external tools, check its own mistakes, and complete complex business processes.',
    growthCategory: 'Core AI Engineering',
    demandTier: 'RAPID EXPANSION'
  },
  {
    id: 'ai-automation-engineer',
    role: 'AI Automation Engineer',
    whyItEmerges: 'Replaces old, fragile automation scripts with smart AI that can read messy scanned documents, emails, and website forms without breaking.',
    keySkills: ['Workflow automation (n8n, Python)', 'Automated browser testing (Playwright)', 'Reading images & text with AI', 'Connecting APIs'],
    fresherEntryPath: 'Build a project that reads invoice PDFs automatically, verifies the totals, and updates a spreadsheet without manual data entry.',
    responsibilities: 'Builds reliable automated pipelines for everyday business tasks so human employees do not have to copy-paste repetitive data.',
    growthCategory: 'Infrastructure & Ops',
    demandTier: 'RAPID EXPANSION'
  },
  {
    id: 'llm-engineer',
    role: 'LLM & Model Specialist',
    whyItEmerges: 'Banks, hospitals, and airlines need customized AI models (Large Language Models) tailored specifically to their confidential business data.',
    keySkills: ['Machine Learning Basics (PyTorch)', 'Customizing AI models (Fine-tuning)', 'Speeding up AI responses', 'Evaluating answer accuracy'],
    fresherEntryPath: 'Take a free open-source AI model and teach it to answer questions on a specialized subject (like Indian tax laws or medical guidelines).',
    responsibilities: 'Trains and refines AI models with company data so the AI gives accurate, expert-level answers without making mistakes.',
    growthCategory: 'Core AI Engineering',
    demandTier: 'CRITICAL DEMAND'
  },
  {
    id: 'mlops-engineer',
    role: 'MLOps Engineer (AI Operations)',
    whyItEmerges: 'Someone needs to keep AI systems running smoothly 24/7 without crashing, running out of memory, or costing too much money.',
    keySkills: ['Cloud platforms (AWS, Azure, GCP)', 'Docker & Kubernetes (App containers)', 'System monitoring & alerts', 'GPU server management'],
    fresherEntryPath: 'Set up an automated cloud pipeline that launches an AI model and alerts you on Discord/Slack if the server slows down.',
    responsibilities: 'Manages the computers and cloud servers running AI models, making sure they stay fast, reliable, and cost-effective.',
    growthCategory: 'Infrastructure & Ops',
    demandTier: 'CRITICAL DEMAND'
  },
  {
    id: 'ai-product-manager',
    role: 'AI Product Manager',
    whyItEmerges: 'Companies need leaders who understand what customers want and know how to turn AI capabilities into simple, useful software products.',
    keySkills: ['User Experience (UX) Design', 'Understanding AI capabilities & limits', 'Cost estimation for AI features', 'Customer research'],
    fresherEntryPath: 'Write a detailed product guide showing how an existing app (like a food delivery or banking app) could add a helpful AI assistant.',
    responsibilities: 'Decides what AI features to build, sets quality standards, and works with engineers and designers to launch great products.',
    growthCategory: 'Product & Strategy',
    demandTier: 'RAPID EXPANSION'
  },
  {
    id: 'ai-security-engineer',
    role: 'AI Security Specialist',
    whyItEmerges: 'AI systems can be tricked by malicious prompts or hacked to leak secret company data. Companies need experts to protect their AI systems.',
    keySkills: ['Preventing AI prompt tricks (Prompt Injection)', 'Data privacy & security rules', 'Testing AI systems for safety flaws', 'API Security'],
    fresherEntryPath: 'Practice finding security weaknesses in sample AI apps and create safety filters that block harmful or illegal requests.',
    responsibilities: 'Tests AI tools for security loopholes, sets up safety guardrails, and protects sensitive customer data from being leaked.',
    growthCategory: 'Security & Governance',
    demandTier: 'CRITICAL DEMAND'
  },
  {
    id: 'ai-governance-specialist',
    role: 'AI Rules & Ethics Specialist',
    whyItEmerges: 'Governments around the world are creating new laws requiring companies to prove their AI systems are fair, honest, and protect personal privacy.',
    keySkills: ['Data privacy laws (DPDP Act, GDPR)', 'Checking AI for fairness & bias', 'Writing clear safety guidelines', 'Risk assessment'],
    fresherEntryPath: 'Learn key privacy laws and build audit checklists that evaluate whether an AI application treats all users fairly.',
    responsibilities: 'Checks AI applications to make sure they follow government regulations, avoid biased decisions, and respect user privacy.',
    growthCategory: 'Security & Governance',
    demandTier: 'EMERGING STRATEGIC'
  },
  {
    id: 'ai-solutions-architect',
    role: 'AI Solutions Architect',
    whyItEmerges: 'Large corporations need senior technical guides to plan how their existing computer systems will connect with modern AI technology.',
    keySkills: ['Big picture system design', 'Cloud computing architecture', 'Data security & storage', 'Cost management for enterprise tech'],
    fresherEntryPath: 'Natural mid-to-senior career path: Start as a software engineer, learn cloud systems, and design end-to-end applications.',
    responsibilities: 'Draws the overall technical blueprint for company systems, choosing the best cloud services and AI tools for the job.',
    growthCategory: 'Product & Strategy',
    demandTier: 'CRITICAL DEMAND'
  },
  {
    id: 'ai-trainer-evaluator',
    role: 'AI Quality Tester & Evaluator',
    whyItEmerges: 'Before an AI model is used by customers, human experts must test its answers to make sure it does not give wrong, dangerous, or confusing information.',
    keySkills: ['Strong analytical & writing skills', 'Subject expertise (Law, Finance, Science)', 'Grading AI response quality', 'Basic Python for data checks'],
    fresherEntryPath: 'Great entry role for graduates in English, science, commerce, or engineering who have sharp analytical thinking and good communication.',
    responsibilities: 'Tests AI models with tricky questions, grades the answers, and helps train the AI to give clearer, more helpful responses.',
    growthCategory: 'Core AI Engineering',
    demandTier: 'RAPID EXPANSION'
  },
  {
    id: 'ai-infra-engineer',
    role: 'AI Hardware & Cloud Engineer',
    whyItEmerges: 'Training AI models requires thousands of specialized computer chips (GPUs) working together at ultra-high speeds without overheating or freezing.',
    keySkills: ['Linux operating systems', 'Computer hardware & networking', 'GPU cluster management', 'Speed optimization'],
    fresherEntryPath: 'Learn Linux command line, computer hardware architecture, and how high-speed computer networks transfer data.',
    responsibilities: 'Keeps high-powered AI data centres running fast and reliably, fixing hardware bottlenecks and network slowdowns.',
    growthCategory: 'Infrastructure & Ops',
    demandTier: 'CRITICAL DEMAND'
  },
  {
    id: 'ai-cybersec-specialist',
    role: 'Cybersecurity Defense Specialist',
    whyItEmerges: 'Hackers now use AI to generate new types of cyber attacks. Companies need smart defensive tools that detect and block attacks instantly.',
    keySkills: ['Network security & firewalls', 'Using AI to spot cyber threats', 'Stopping malware and phishing', 'Ethical hacking basics'],
    fresherEntryPath: 'Practice on online ethical hacking platforms, earn beginner security certificates (like CompTIA Security+), and write Python security scripts.',
    responsibilities: 'Protects company servers, user accounts, and data networks from hackers and automated cyber attacks.',
    growthCategory: 'Security & Governance',
    demandTier: 'CRITICAL DEMAND'
  }
];

export const existingExpandingRoles: EmergingRole[] = specific12NewAIRoles.map(r => ({
  id: r.id,
  title: r.role,
  type: 'growing_existing',
  growthDriver: r.whyItEmerges,
  responsibilities: r.responsibilities,
  skills: r.keySkills,
  relatedExistingRoles: r.growthCategory,
  learningDirection: r.fresherEntryPath,
  fresherEntryPath: r.fresherEntryPath,
  whyItEmerges: r.whyItEmerges
}));

export const brandNewRoles: EmergingRole[] = existingExpandingRoles;
