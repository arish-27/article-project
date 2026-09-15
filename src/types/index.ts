export type TransformationType = 'GROWING' | 'TRANSFORMING' | 'SHRINKING' | 'AT RISK';

export type AIExposureLevel = 'LOW' | 'MEDIUM' | 'HIGH';

export type DataStatusType = 
  | 'REPORTED' 
  | 'ESTIMATED' 
  | 'INDUSTRY ESTIMATE' 
  | 'FORECAST' 
  | 'SCENARIO' 
  | 'CALCULATED ESTIMATE';

export interface ITRole {
  id: string;
  title: string;
  category: string;
  categoryLabel: string;
  transformation: TransformationType;
  transformationBadgeClass: string;
  aiExposure: number; // percentage 0 - 100
  aiExposureLevel: AIExposureLevel;
  humanAnchor: string;
  summary: string;
  responsibilities: string[];
  tasksAutomated: string[];
  tasksDurable: string[];
  futureSkills: string[];
  futureDirection: string;
  verdict: string;
  chennaiContext?: string;
}

export interface CityProfile {
  id: 'blr' | 'hyd' | 'che';
  name: string;
  clusterNumber: string;
  tagline: string;
  description: string;
  coreCorridors: string;
  primaryRisk: string;
  riskColorClass: string;
  resilienceScore: string;
  economicNodes: string[];
  metrics: {
    workforce2024: string;
    workforce2030Projection: string;
    gccShare: string;
    gccDetails: string;
    softwareValueAddition: number;
    campusIntakeRisk: number;
    campusRiskLabel: string;
    residentialBuffer: number;
    residentialBufferLabel: string;
  };
  analystNote: string;
  hasDossierModal?: boolean;
}

export interface EmergingRole {
  id: string;
  title: string;
  type: 'growing_existing' | 'brand_new_emerging';
  growthDriver: string;
  responsibilities: string;
  skills: string[];
  relatedExistingRoles: string;
  learningDirection: string;
  fresherEntryPath?: string;
  whyItEmerges?: string;
}

export interface CareerStage {
  step: string;
  statusLabel: string;
  statusColorClass: string;
  title: string;
  description: string;
  action: string;
}

export interface CareerTrack {
  id: string;
  title: string;
  currentRole: string;
  currentSkills: string[];
  aiAssistedTasks: string[];
  humanValueMoat: string[];
  futureSkills: string[];
  target2030Role: string;
  progressionPath: string;
  stages: CareerStage[];
}

export interface ScenarioInputState {
  aiAdoption: number; // 0 to 100
  workModel: number; // 0 (Office) to 100 (Remote)
  fresherHiring: number; // 0 (Down) to 100 (Up)
  itGrowth: number; // 0 (Down) to 100 (Up)
  cityFocus: 'blr' | 'hyd' | 'che';
  chennaiAreaFocus?: string;
}

export interface CompanyData {
  id: string;
  name: string;
  tier: 'Tier-1 IT Services' | 'Global Enterprise / Tech' | 'Specialized & Mid-Tier' | 'Product & SaaS';
  headquarters: string;
  globalWorkforce: string;
  indiaWorkforce: string;
  indiaHeadcount?: string;
  cityPresence: {
    chennai: string;
    bengaluru: string;
    hyderabad: string;
    otherIndia?: string;
  };
  aiInitiatives: string;
  hiringTrend: string;
  layoffsContext: string;
  benchProjectAvailability: string;
  fresherIntake: string;
  aiWorkforceTransformation: string;
  dataStatus: DataStatusType;
  source: string;
  dataPeriod: string;
  disclosureNote?: string;
}

export interface MacroIndicator {
  id: string;
  label: string;
  current2026: string;
  scenario2030: string;
  trend: 'UP' | 'DOWN' | 'TRANSFORMING';
  status: DataStatusType;
  source: string;
  period: string;
  insight: string;
}

export interface BenchFlowStage {
  stepNumber: string;
  title: string;
  estimatedShare: string;
  status: DataStatusType;
  description: string;
  operationalReality: string;
  mitigationPath: string;
}

export interface TimelineYearPoint {
  year: string;
  phaseTitle: string;
  aiMaturity: string;
  workforceImpact: string;
  hiringReality: string;
  roleEvolution: string;
  criticalSkillFocus: string[];
  status: DataStatusType;
}

export interface DecliningJobRole {
  id: string;
  title: string;
  riskCategory: 'HIGH RISK' | 'MEDIUM RISK' | 'LOWER RISK';
  riskBadgeClass: string;
  currentDemand: string;
  aiExposurePercentage: number;
  exposureMechanism: string;
  scenario2030: string;
  transitionPathway: string;
  status: DataStatusType;
}

export interface BusinessSectorAdaptation {
  sector: string;
  iconName: string;
  problem: string;
  adaptationStrategy: string;
  newOpportunity: string;
  chennaiFocus: string;
  status: DataStatusType;
}
