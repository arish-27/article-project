import { BusinessSectorAdaptation, DataStatusType } from '../types';

export interface CityRentalComparison {
  cityId: 'che' | 'blr' | 'hyd';
  cityName: string;
  focusTier: 'PRIMARY' | 'SECONDARY' | 'THIRD';
  keyRentalHubs: string;
  apartmentDemandCurrent: string;
  pgHostelDemandCurrent: string;
  coLivingTrends: string;
  potential2030RentalShift: string;
  resilienceMechanisms: string;
  status: DataStatusType;
}

export const cityRentalData: CityRentalComparison[] = [
  {
    cityId: 'che',
    cityName: 'CHENNAI (PRIMARY FOCUS)',
    focusTier: 'PRIMARY',
    keyRentalHubs: 'OMR (Sholinganallur, Navalur, Siruseri), Thoraipakkam, Perungudi, Porur, Guindy',
    apartmentDemandCurrent: 'Gated 2BHK/3BHK communities along OMR and Porur maintain stable 6%–9% annual appreciation, driven by senior engineers, dual-income tech families, and manufacturing executives.',
    pgHostelDemandCurrent: 'High concentration of bachelor PG clusters in Sholinganallur and Navalur (~45,000 beds). Vulnerable to fresher hiring contractions, prompting PG operators to upgrade amenities.',
    coLivingTrends: 'Managed co-living operators (Stanza Living, Zolo, Boston Living) converting standalone PGs into hybrid professional suites with high-speed fiber and coworking lounges.',
    potential2030RentalShift: 'Bifurcated market: Bachelor budget PGs face -10% to -18% demand compression if junior hiring stays selective; premium family apartments and luxury gated enclaves project +15%–25% rent resilience.',
    resilienceMechanisms: 'Strong industrial diversification (Automotive corridor in Oragadam/Sriperumbudur, Healthcare hub, Port logistics) provides housing demand buffer when pure IT services fluctuate.',
    status: 'SCENARIO'
  },
  {
    cityId: 'blr',
    cityName: 'BENGALURU (SECONDARY FOCUS)',
    focusTier: 'SECONDARY',
    keyRentalHubs: 'Outer Ring Road (Bellandur, Marathahalli), Whitefield, Electronic City, HSR Layout, Sarjapur Road',
    apartmentDemandCurrent: 'Highest rental yields in India (4.2%–5.5%). Intense competition for premium gated societies near tech parks with rents rising 25%–40% across 2022–2025.',
    pgHostelDemandCurrent: 'Massive PG inventory across Silk Board to Marathahalli belt (~120,000+ beds). High occupancy sustained by VC-backed startup hiring and GCC expansion.',
    coLivingTrends: 'Pioneer of institutional co-living in India; high demand for flexible monthly leases among transient product engineers.',
    potential2030RentalShift: 'Moderate normalization: High base rents plateau; peripheral corridor supply (Kanakapura, North Bengaluru airport corridor) eases central density pressure.',
    resilienceMechanisms: 'Deep-tech product startups, unicorn headquarters, and VC funding concentration insulate rental absorption from basic services slowdowns.',
    status: 'SCENARIO'
  },
  {
    cityId: 'hyd',
    cityName: 'HYDERABAD (THIRD FOCUS)',
    focusTier: 'THIRD',
    keyRentalHubs: 'HITEC City, Gachibowli, Financial District, Kondapur, Nallagandla, Tellapur',
    apartmentDemandCurrent: 'Rapid high-rise gated development across Financial District and Kokapet; high influx of senior engineering leadership migrating for lower cost-of-living.',
    pgHostelDemandCurrent: 'Concentrated around Madhapur and Gachibowli (~60,000 beds); strong absorption from mega-campus operations (Amazon, Google, Microsoft, Tech Mahindra).',
    coLivingTrends: 'Rapid growth of integrated mega-co-living campuses (500+ beds) with luxury amenities, sports courts, and all-inclusive meal plans.',
    potential2030RentalShift: 'Steady expansion (+12% to +20% by 2030) supported by aggressive state infrastructure expansion, metro line extensions, and major Grade-A commercial office absorption.',
    resilienceMechanisms: 'Low land acquisition constraints, modern urban master-planning, and expanding Pharma-Tech / Aerospace clusters provide secondary economic anchors.',
    status: 'SCENARIO'
  }
];

export interface UrbanTransportFoodSector {
  cityId: 'che' | 'blr' | 'hyd';
  cityName: string;
  companyBusesAndCabs: string;
  autosAndPublicTransit: string;
  restaurantsAndCafes: string;
  foodDeliveryAndCanteens: string;
  status: DataStatusType;
}

export const urbanTransportFoodData: UrbanTransportFoodSector[] = [
  {
    cityId: 'che',
    cityName: 'CHENNAI (PRIMARY FOCUS)',
    companyBusesAndCabs: 'Over 2,200 contracted IT buses and 6,000+ fleet cabs operate daily along the OMR-Siruseri and Porur-DLF corridors. Hybrid schedules (3-day office) have led transport operators to offer flex-route corporate subscriptions.',
    autosAndPublicTransit: 'Chennai Metro Phase-2 construction along OMR (Corridor 3) is transforming transit. Share-autos and app-based autos at TIDEL Park and Sholinganallur junction connect last-mile PG clusters.',
    restaurantsAndCafes: 'Vibrant corridor dining: Classic south Indian mess hubs (Navalur/Thoraipakkam) serve entry-level engineers, while specialty cafes and resto-bars in Perungudi and Guindy cater to senior SaaS architects.',
    foodDeliveryAndCanteens: 'Swiggy/Zomato report OMR among highest density food delivery zones in South India; corporate cafeterias shift to multi-vendor digital food courts with subsidized corporate meal cards.',
    status: 'ESTIMATED'
  },
  {
    cityId: 'blr',
    cityName: 'BENGALURU',
    companyBusesAndCabs: 'Extensive private bus fleets on ORR; BMTC Vajra Volvo bus networks heavily utilized. Traffic congestion drives high demand for carpooling and EV shuttle fleets.',
    autosAndPublicTransit: 'Namma Metro Yellow & Blue Line extensions actively ease ORR choke points. Auto-rickshaw fleets in HSR/Koramangala highly integrated with app aggregators.',
    restaurantsAndCafes: 'Dense microbrewery and specialty coffee culture (Indiranagar, Koramangala, Whitefield) acting as de facto secondary meeting rooms for startup founders and engineers.',
    foodDeliveryAndCanteens: 'Pinnacle food delivery market; cloud kitchen hubs in Bellandur and Marathahalli serve round-the-clock developer cohorts during sprint releases.',
    status: 'ESTIMATED'
  },
  {
    cityId: 'hyd',
    cityName: 'HYDERABAD',
    companyBusesAndCabs: 'High reliance on organized corporate EV cab fleets and TSRTC Cyberliner AC buses traversing Nehru Outer Ring Road and HITEC City elevated corridors.',
    autosAndPublicTransit: 'Hyderabad Metro Blue/Red lines provide fast transit between residential hubs (Kukatpally, Miyapur) and Financial District tech parks.',
    restaurantsAndCafes: 'High-energy dining clusters in Jubilee Hills, Gachibowli, and Knowledge City; high corporate dinner and team-outbound spend driven by enterprise GCC allowances.',
    foodDeliveryAndCanteens: 'Mega-campus in-house dining pavilions (e.g., Amazon, Microsoft) rival commercial food streets; late-night delivery thrives across Gachibowli and Kondapur.',
    status: 'ESTIMATED'
  }
];

export const localBusinessAdaptations: BusinessSectorAdaptation[] = [
  {
    sector: 'Residential Rental & PG Operators',
    iconName: 'Building',
    problem: 'Single-bed budget PG rooms face lower occupancy as entry-level fresher batch hiring contracts and hybrid work permits remote stints.',
    adaptationStrategy: 'Upgrade traditional dorms into premium managed co-living with dedicated ergonomic workstations, high-speed Wi-Fi, power backups, and private single rooms.',
    newOpportunity: 'Attracting mid-career remote professionals and digital nomads seeking flexible 3–6 month serviced stays with community amenities.',
    chennaiFocus: 'Navalur and Sholinganallur PG conversions to serviced executive residences for OMR and Siruseri engineers.',
    status: 'SCENARIO'
  },
  {
    sector: 'Corporate Transport & Cab Fleets',
    iconName: 'Bus',
    problem: 'Fixed 5-day annual bus lease contracts decline as corporate enterprises standardize on 3-day hybrid office policies.',
    adaptationStrategy: 'Transition from rigid annual contracts to flexible dynamic on-demand shuttle pooling apps with electric vehicles (EVs).',
    newOpportunity: 'Inter-hub corporate commuter shuttles, airport business transfers, and weekend leisure tourism packages.',
    chennaiFocus: 'Electrified employee transport networks connecting Tambaram, Velachery, and Central Chennai to OMR tech parks.',
    status: 'SCENARIO'
  },
  {
    sector: 'Restaurants, Cafes & Cloud Kitchens',
    iconName: 'Utensils',
    problem: 'Mid-week lunch footfalls in office tech park cafeterias drop on remote work days (Mondays/Fridays).',
    adaptationStrategy: 'Pivot to corporate catering subscriptions, specialized health-focused meal deliveries, and weekend experiential dining.',
    newOpportunity: 'Subscription-based corporate meal plans delivered directly to residential gated communities and flexible coworking hubs.',
    chennaiFocus: 'Food street modernizations along Thoraipakkam and Perungudi catering to evening tech gatherings and weekend families.',
    status: 'SCENARIO'
  },
  {
    sector: 'Coworking & Flex Workspace Providers',
    iconName: 'Briefcase',
    problem: 'Enterprises moving away from 10-year inflexible commercial leases; mid-tier firms reducing fixed desk commitments.',
    adaptationStrategy: 'Offer enterprise flex-memberships with hot-desking, private acoustic pods for AI prompt engineers, and on-demand meeting suites.',
    newOpportunity: 'Capturing distributed GCC satellite teams and independent AI consultants who require Grade-A infrastructure closer to residential suburbs.',
    chennaiFocus: 'Rapid expansion of flex-spaces in Guindy, Anna Nagar, and Porur, saving employees long OMR commutes.',
    status: 'ESTIMATED'
  },
  {
    sector: 'Private Training Institutes & EdTech',
    iconName: 'GraduationCap',
    problem: 'Generic Java/Python 3-month coding bootcamps face collapsing student enrollments as basic syntax skills become commoditized.',
    adaptationStrategy: 'Overhaul curriculum to teach Full-Stack AI orchestration, Vector Databases, MLOps, System Architecture, and Enterprise Security.',
    newOpportunity: 'High-ticket corporate upskilling contracts and executive AI engineering bootcamps for mid-career engineers facing displacement.',
    chennaiFocus: 'Transforming Velachery and Tambaram training hubs from basic test-automation centers into Applied AI academies.',
    status: 'SCENARIO'
  },
  {
    sector: 'Retail, Salons, Gyms & Local Services',
    iconName: 'ShoppingBag',
    problem: 'Hyper-reliance on weekday footfall from tech park workers creates revenue volatility between weekdays and weekends.',
    adaptationStrategy: 'Integrate omni-channel loyalty programs, corporate health wellness partnerships, and extended late-evening operational hours.',
    newOpportunity: 'Serving the growing resident population of tech families living permanently in suburban master-planned townships.',
    chennaiFocus: 'Thriving retail malls and lifestyle centers in OMR (Marina Mall, BSR Mall) and Porur DLF vicinity.',
    status: 'SCENARIO'
  }
];
