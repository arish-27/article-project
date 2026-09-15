import { CityProfile } from '../types';

export const citiesData: Record<'blr' | 'hyd' | 'che', CityProfile> = {
  blr: {
    id: 'blr',
    name: 'BENGALURU',
    clusterNumber: '01',
    tagline: 'Silicon Valley of India • Product & Deep-Tech Capital',
    description: 'Bengaluru possesses the highest density of venture-backed AI startups, foundational research units, and product architecture teams in India. Because it houses complex engineering rather than mere legacy maintenance, its talent pool experiences high AI adoption rather than sudden displacement.',
    coreCorridors: 'Outer Ring Road, Whitefield, Electronic City',
    primaryRisk: 'Urban infrastructure & rent inflation',
    riskColorClass: 'text-rose-700',
    resilienceScore: '92 / 100 (HIGH)',
    economicNodes: [
      'Bellandur Tech-Plex',
      'HSR Layout Startup Belt',
      'Whitefield ITPL Zone',
      'Manyata Tech Park',
      'Electronic City Phase 1'
    ],
    metrics: {
      workforce2024: '~1,650,000',
      workforce2030Projection: '▲ Projecting 1.95M by 2030',
      gccShare: '42% National Share',
      gccDetails: 'Over 550 Global Tech Centers',
      softwareValueAddition: 88,
      campusIntakeRisk: 58,
      campusRiskLabel: 'Moderate (-14%)',
      residentialBuffer: 75,
      residentialBufferLabel: 'Strong'
    },
    analystNote: 'Bengaluru acts as the absorption sponge for AI disruption. Startups create net new job roles (Prompt Designers, Evaluation Engineers, Fine-tuners) faster than automation destroys baseline maintenance roles.',
    hasDossierModal: false
  },
  hyd: {
    id: 'hyd',
    name: 'HYDERABAD',
    clusterNumber: '02',
    tagline: 'Cyberabad Scale • GCC & Cloud Infrastructure Giant',
    description: 'Hyderabad\'s master-planned HITEC City and Financial District house massive mega-campuses for Microsoft, Amazon, Google, and major financial GCCs. With lower operational costs and rapid infrastructure development, it is aggressively capturing enterprise backend expansion.',
    coreCorridors: 'HITEC City, Gachibowli, Financial District',
    primaryRisk: 'Service desk & junior developer saturation',
    riskColorClass: 'text-amber-700',
    resilienceScore: '85 / 100 (VERY STRONG)',
    economicNodes: [
      'Mindspace CyberCity',
      'Knowledge City Raidurg',
      'Financial Dist. Nanakramguda',
      'Kokapet SEZ',
      'Tellapur Techno-Belt'
    ],
    metrics: {
      workforce2024: '~1,050,000',
      workforce2030Projection: '▲ Rapid growth toward 1.45M by 2030',
      gccShare: '+28% GCC Footprint',
      gccDetails: 'Highest office absorption in Q1 2024',
      softwareValueAddition: 92,
      campusIntakeRisk: 68,
      campusRiskLabel: 'High (68%)',
      residentialBuffer: 86,
      residentialBufferLabel: 'Exceptional'
    },
    analystNote: 'Hyderabad\'s strength lies in proactive government land allocations and robust Grade-A office parks. If the city\'s universities bridge AI engineering gaps quickly, it will capture GCC operations migrating away from congested corridors elsewhere.',
    hasDossierModal: true
  },
  che: {
    id: 'che',
    name: 'CHENNAI',
    clusterNumber: '03',
    tagline: 'SaaS Capital • Industrial Automotive & Deep Enterprise IT',
    description: 'Chennai represents India’s most diversified industrial-software nexus. The historic Old Mahabalipuram Road (OMR) corridor hosts both multi-decade IT service campuses and global B2B SaaS giants (Zoho, Freshworks), while Mount-Poonamallee and Guindy anchor modern industrial-tech innovation.',
    coreCorridors: 'OMR (Taramani to Siruseri), Guindy, Ambattur',
    primaryRisk: 'Vulnerability of manual testing & legacy maintenance',
    riskColorClass: 'text-amber-700',
    resilienceScore: '79 / 100 (BALANCED)',
    economicNodes: [
      'TIDEL Park & Taramani',
      'Sholinganallur Junction',
      'Siruseri SIPCOT Hub',
      'Guindy Olympia Tech Park',
      'Porur DLF Cybercity'
    ],
    metrics: {
      workforce2024: '~650,000',
      workforce2030Projection: '▲ Steady pivot toward 780K by 2030',
      gccShare: '#1 Auto-Tech Hub',
      gccDetails: 'EV, Avionics & Embedded Software',
      softwareValueAddition: 85,
      campusIntakeRisk: 74,
      campusRiskLabel: 'Substantial (74%)',
      residentialBuffer: 62,
      residentialBufferLabel: 'Selective / Reshaping'
    },
    analystNote: 'Chennai has an unheralded defense mechanism: deep hardware, automotive electronics, and vertical industrial SaaS. Pure-play maintenance contracts on OMR face margin compression, but deep engineering teams in Guindy and Sholinganallur remain deeply sticky.',
    hasDossierModal: true
  }
};

export interface ChennaiCorridorDetail {
  id: string;
  name: string;
  tagline: string;
  zone: string;
  zoneBadgeClass: string;
  summary: string;
  anchors: string;
  commercialVacancy: string;
  pgVsLuxuryYield: string;
  informalMultiplier: string;
  resilienceVector: string;
}

export const chennaiCorridors: ChennaiCorridorDetail[] = [
  {
    id: 'taramani',
    name: 'Zone 1: Taramani & TIDEL Park',
    tagline: 'Inner Core & Birthplace of Chennai Tech',
    zone: 'INNER CORE',
    zoneBadgeClass: 'bg-emerald-100 text-emerald-800',
    summary: 'High density, near-zero commercial vacancy (4.8%), rapid transition to Global Capability Centers (GCCs), highly resilient rental yields across Thiruvanmiyur and Adyar fringe.',
    anchors: 'TIDEL Park, Ascendas International Tech Park, IIT-M Research Park, Ramanujan IT City',
    commercialVacancy: '4.8% (Extremely Tight)',
    pgVsLuxuryYield: '-8% PG / +20% Luxury Gated',
    informalMultiplier: '1 IT : 3.8 Service Multiplier',
    resilienceVector: 'Superior metro transit connectivity, research university proximity, and high concentration of specialized product architects.'
  },
  {
    id: 'perungudi',
    name: 'Zone 2: Perungudi & Kandanchavadi',
    tagline: 'Inner OMR Tech Strip & Transition Zone',
    zone: 'TRANSITION ZONE',
    zoneBadgeClass: 'bg-amber-100 text-amber-900',
    summary: 'Hybrid flex workspaces and co-living conversions. Mid-tier IT service firms downsizing floorplates; rapid absorption by enterprise SaaS product startups.',
    anchors: 'SP Infocity, Prince Info City, RMZ Millenia, Global Infocity',
    commercialVacancy: '8.5% (Stable / Modernizing)',
    pgVsLuxuryYield: '-14% PG / +14% 2BHK/3BHK',
    informalMultiplier: '1 IT : 3.5 Service Multiplier',
    resilienceVector: 'Strong appeal to mid-level senior developers seeking quick commute access to central Chennai amenities and schools.'
  },
  {
    id: 'sholinganallur',
    name: 'Zone 3: Sholinganallur Junction',
    tagline: 'Arterial Central Node & PG Capital',
    zone: 'CENTRAL NODE',
    zoneBadgeClass: 'bg-rose-100 text-rose-900',
    summary: 'Major SEZ hubs (ELCOT), dense bachelor PG clusters. Acute vulnerability to fresher hiring contraction, offset by resilient 3BHK gated community demand.',
    anchors: 'ELCOT SEZ, Wipro Campus, HCL Technologies, Cognizant, Infosys',
    commercialVacancy: '11.2% (Under Structural Transition)',
    pgVsLuxuryYield: '-24% Bachelor PG / +12% Gated Townships',
    informalMultiplier: '1 IT : 3.2 Service Multiplier',
    resilienceVector: 'Metro Phase 2 elevated link will reconnect Sholinganallur directly to Central Station and Airport by 2027.'
  },
  {
    id: 'siruseri',
    name: 'Zone 4: Navalur & Siruseri SIPCOT',
    tagline: 'Mega-Scale Outer Arc SEZ',
    zone: 'OUTER ARC',
    zoneBadgeClass: 'bg-neutral-200 text-neutral-800',
    summary: 'Largest campus scale in Tamil Nadu (1,000+ acres). High commercial vacancy shifts as batch training consolidates; pricing stabilization around integrated mega-townships.',
    anchors: 'SIPCOT IT Park (1,000 Acres), TCS Signature Campus, Cognizant, Hexaware',
    commercialVacancy: '14.5% (High Exposure to Remote Models)',
    pgVsLuxuryYield: '-28% Budget PG / +6% Large Townships',
    informalMultiplier: '1 IT : 2.8 Service Multiplier',
    resilienceVector: 'Campuses retrofitting legacy test labs into high-security AI compute nodes and private cloud facilities.'
  },
  {
    id: 'guindy',
    name: 'Guindy & Mount-Poonamallee',
    tagline: 'Central Multi-Modal Hub & BFSI Tech',
    zone: 'CENTRAL ARTERY',
    zoneBadgeClass: 'bg-emerald-100 text-emerald-800',
    summary: 'Airport-adjacent enterprise tech park corridor. Hosts multinational banking tech units, consulting headquarters, and executive management.',
    anchors: 'Olympia Tech Park, Tamarai Tech Park, L&T Infotech Park',
    commercialVacancy: '5.2% (Premium Demand)',
    pgVsLuxuryYield: '-4% PG / +22% Residential',
    informalMultiplier: '1 IT : 4.1 Service Multiplier',
    resilienceVector: 'Direct metro rail interchange and airport proximity insulate this corridor against remote work relocation shocks.'
  },
  {
    id: 'porur',
    name: 'Porur & DLF Cybercity',
    tagline: 'Western Chennai Tech & Health Hub',
    zone: 'WESTERN CORRIDOR',
    zoneBadgeClass: 'bg-amber-100 text-amber-900',
    summary: 'Vibrant software and healthcare IT corridor. Diversified across healthcare software, industrial engineering, and IT services.',
    anchors: 'DLF Cybercity Chennai, Commerzone Porur, Jayanth Tech Park',
    commercialVacancy: '7.8% (Steady Inflow)',
    pgVsLuxuryYield: '-10% PG / +15% Residential',
    informalMultiplier: '1 IT : 3.6 Service Multiplier',
    resilienceVector: 'High industrial base and medical tech integration provide balanced economic defense.'
  },
  {
    id: 'ambattur',
    name: 'Ambattur Industrial & Data Center Belt',
    tagline: 'Hyperscale Cloud & Hardware Transformation',
    zone: 'DATA & HARDWARE HUB',
    zoneBadgeClass: 'bg-emerald-100 text-emerald-800',
    summary: 'Historically industrial, now home to Tier-3/4 hyperscale data centers, BPO transformation centers, and edge compute server farms.',
    anchors: 'Ambit IT Park, Prince Info Park, RackBank, STT GDC India',
    commercialVacancy: '6.4% (Surging Data Demand)',
    pgVsLuxuryYield: '-6% PG / +10% Housing',
    informalMultiplier: '1 IT : 3.0 Service Multiplier',
    resilienceVector: 'Explosion in sovereign AI data infrastructure driving heavy capital investment independent of daily desk headcount.'
  }
];

export interface HyderabadZoneDetail {
  id: string;
  name: string;
  subtext: string;
  occupancy: string;
  details: string;
}

export const hyderabadZones: HyderabadZoneDetail[] = [
  {
    id: 'hitec-city',
    name: 'HITEC City & Madhapur Strip',
    subtext: 'Epicenter of Cyberabad & Global Capability Hub',
    occupancy: '94.2% Absorption',
    details: 'Houses flagship engineering centers for Microsoft, Oracle, and Google with high density Grade-A office absorption.'
  },
  {
    id: 'gachibowli',
    name: 'Gachibowli Financial Hub',
    subtext: 'Fintech, Insurance GCCs & Large Campuses',
    occupancy: '91.8% Absorption',
    details: 'Anchors enterprise BFSI backends, Capgemini, and multinational investment banking engineering centers.'
  },
  {
    id: 'financial-dist',
    name: 'Financial District & Nanakramguda',
    subtext: 'High-Rise Tier-1 Corporate Headquarters',
    occupancy: '96.5% Absorption',
    details: 'Tallest commercial towers in South India with booming luxury residential high-rise integration.'
  },
  {
    id: 'kokapet-tellapur',
    name: 'Kokapet SEZ & Neopolis Belt',
    subtext: 'Next-Generation Mega Infrastructure',
    occupancy: 'Expanding Fast',
    details: 'Master-planned Neopolis layout attracting hyperscale cloud data centers and future tech campuses.'
  }
];
