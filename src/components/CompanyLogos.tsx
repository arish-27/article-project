import React from 'react';

interface LogoProps {
  className?: string;
}

// 1. ACCENTURE
export const AccentureLogo: React.FC<LogoProps> = ({ className = 'w-full h-full' }) => (
  <svg viewBox="0 0 160 45" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <text x="4" y="32" fontFamily="Arial, Helvetica, sans-serif" fontWeight="900" fontSize="26" fill="#111111" letterSpacing="-0.5">
      accenture
    </text>
    {/* Iconic Accenture purple chevron over the 't' */}
    <path d="M78 8 L87 14 L78 20" stroke="#A100FF" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
  </svg>
);

// 2. TCS (TATA CONSULTANCY SERVICES)
export const TCSLogo: React.FC<LogoProps> = ({ className = 'w-full h-full' }) => (
  <svg viewBox="0 0 160 45" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="6" width="34" height="32" rx="4" fill="#004F9E" />
    <path d="M12 16 H30 M21 16 V30" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" />
    <text x="46" y="24" fontFamily="Arial, Helvetica, sans-serif" fontWeight="900" fontSize="16" fill="#004F9E" letterSpacing="1">
      TCS
    </text>
    <text x="46" y="35" fontFamily="Arial, Helvetica, sans-serif" fontWeight="700" fontSize="8" fill="#555555" letterSpacing="0.5">
      TATA CONSULTANCY
    </text>
  </svg>
);

// 3. INFOSYS
export const InfosysLogo: React.FC<LogoProps> = ({ className = 'w-full h-full' }) => (
  <svg viewBox="0 0 160 45" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <text x="6" y="30" fontFamily="'Trebuchet MS', 'Segoe UI', sans-serif" fontWeight="800" fontSize="26" fill="#007CC3" letterSpacing="-0.5">
      Infosys
    </text>
    <circle cx="102" cy="13" r="2.5" fill="#007CC3" />
    <path d="M110 28 C 122 18, 138 18, 150 28" stroke="#007CC3" strokeWidth="2.5" fill="none" strokeLinecap="round" />
  </svg>
);

// 4. WIPRO
export const WiproLogo: React.FC<LogoProps> = ({ className = 'w-full h-full' }) => (
  <svg viewBox="0 0 160 45" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <g transform="translate(20, 22)">
      <circle cx="0" cy="-12" r="3" fill="#E02B20" />
      <circle cx="9" cy="-8" r="3" fill="#F47721" />
      <circle cx="12" cy="0" r="3" fill="#FFC20E" />
      <circle cx="9" cy="8" r="3" fill="#80BC00" />
      <circle cx="0" cy="12" r="3" fill="#009639" />
      <circle cx="-9" cy="8" r="3" fill="#00A9E0" />
      <circle cx="-12" cy="0" r="3" fill="#0055B8" />
      <circle cx="-9" cy="-8" r="3" fill="#78228C" />
      <circle cx="0" cy="0" r="3" fill="#1C1C1C" />
    </g>
    <text x="44" y="30" fontFamily="Arial, Helvetica, sans-serif" fontWeight="800" fontSize="22" fill="#1C1C1C" letterSpacing="0.5">
      wipro
    </text>
  </svg>
);

// 5. COGNIZANT
export const CognizantLogo: React.FC<LogoProps> = ({ className = 'w-full h-full' }) => (
  <svg viewBox="0 0 160 45" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22 10 C 13 10, 7 16, 7 23 C 7 30, 13 36, 22 36 C 28 36, 32 33, 34 29" stroke="#0033A0" strokeWidth="4.5" strokeLinecap="round" fill="none" />
    <circle cx="26" cy="23" r="3.5" fill="#00A9E0" />
    <text x="42" y="30" fontFamily="Arial, Helvetica, sans-serif" fontWeight="800" fontSize="18" fill="#0033A0" letterSpacing="-0.2">
      cognizant
    </text>
  </svg>
);

// 6. CAPGEMINI
export const CapgeminiLogo: React.FC<LogoProps> = ({ className = 'w-full h-full' }) => (
  <svg viewBox="0 0 160 45" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 9 C 20 9, 8 18, 8 24 C 8 28, 12 31, 16 30 C 18 29.5, 19.5 28, 20 26 C 20.5 28, 22 29.5, 24 30 C 28 31, 32 28, 32 24 C 32 18, 20 9, 20 9 Z" fill="#0070AD" />
    <path d="M18 28 L 16 36 H 24 L 22 28 Z" fill="#0070AD" />
    <text x="40" y="29" fontFamily="Arial, Helvetica, sans-serif" fontWeight="800" fontSize="17" fill="#0070AD" letterSpacing="-0.3">
      Capgemini
    </text>
  </svg>
);

// 7. HCLTECH
export const HCLTechLogo: React.FC<LogoProps> = ({ className = 'w-full h-full' }) => (
  <svg viewBox="0 0 160 45" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <text x="6" y="31" fontFamily="Arial, Helvetica, sans-serif" fontWeight="900" fontSize="24" fill="#0054A6" letterSpacing="0.5">
      HCL<tspan fill="#00B4D8">Tech</tspan>
    </text>
  </svg>
);

// 8. TECH MAHINDRA
export const TechMahindraLogo: React.FC<LogoProps> = ({ className = 'w-full h-full' }) => (
  <svg viewBox="0 0 160 45" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 32 L 18 12 L 28 32 Z" fill="#E31837" />
    <path d="M22 32 L 30 16 L 38 32 Z" fill="#8B0015" opacity="0.85" />
    <text x="44" y="22" fontFamily="Arial, Helvetica, sans-serif" fontWeight="800" fontSize="13" fill="#1C1C1C">
      Tech
    </text>
    <text x="44" y="34" fontFamily="Arial, Helvetica, sans-serif" fontWeight="800" fontSize="13" fill="#E31837">
      Mahindra
    </text>
  </svg>
);

// 9. IBM
export const IBMLogo: React.FC<LogoProps> = ({ className = 'w-full h-full' }) => (
  <svg viewBox="0 0 160 45" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Bar 1 (y: 6.0, h: 2.6) */}
    <rect x="14" y="6.0" width="28" height="2.6" fill="#0062FF" />
    <rect x="48" y="6.0" width="36" height="2.6" fill="#0062FF" />
    <rect x="92" y="6.0" width="10" height="2.6" fill="#0062FF" />
    <rect x="117" y="6.0" width="10" height="2.6" fill="#0062FF" />
    <rect x="142" y="6.0" width="10" height="2.6" fill="#0062FF" />

    {/* Bar 2 (y: 10.2, h: 2.6) */}
    <rect x="23" y="10.2" width="10" height="2.6" fill="#0062FF" />
    <rect x="48" y="10.2" width="10" height="2.6" fill="#0062FF" />
    <rect x="76" y="10.2" width="10" height="2.6" fill="#0062FF" />
    <rect x="92" y="10.2" width="10" height="2.6" fill="#0062FF" />
    <rect x="112" y="10.2" width="7" height="2.6" fill="#0062FF" />
    <rect x="125" y="10.2" width="7" height="2.6" fill="#0062FF" />
    <rect x="142" y="10.2" width="10" height="2.6" fill="#0062FF" />

    {/* Bar 3 (y: 14.4, h: 2.6) */}
    <rect x="23" y="14.4" width="10" height="2.6" fill="#0062FF" />
    <rect x="48" y="14.4" width="10" height="2.6" fill="#0062FF" />
    <rect x="78" y="14.4" width="10" height="2.6" fill="#0062FF" />
    <rect x="92" y="14.4" width="10" height="2.6" fill="#0062FF" />
    <rect x="107" y="14.4" width="7" height="2.6" fill="#0062FF" />
    <rect x="130" y="14.4" width="7" height="2.6" fill="#0062FF" />
    <rect x="142" y="14.4" width="10" height="2.6" fill="#0062FF" />

    {/* Bar 4 (y: 18.6, h: 2.6) */}
    <rect x="23" y="18.6" width="10" height="2.6" fill="#0062FF" />
    <rect x="48" y="18.6" width="34" height="2.6" fill="#0062FF" />
    <rect x="92" y="18.6" width="10" height="2.6" fill="#0062FF" />
    <rect x="102" y="18.6" width="8" height="2.6" fill="#0062FF" />
    <rect x="134" y="18.6" width="8" height="2.6" fill="#0062FF" />
    <rect x="142" y="18.6" width="10" height="2.6" fill="#0062FF" />

    {/* Bar 5 (y: 22.8, h: 2.6) */}
    <rect x="23" y="22.8" width="10" height="2.6" fill="#0062FF" />
    <rect x="48" y="22.8" width="34" height="2.6" fill="#0062FF" />
    <rect x="92" y="22.8" width="10" height="2.6" fill="#0062FF" />
    <rect x="118" y="22.8" width="8" height="2.6" fill="#0062FF" />
    <rect x="142" y="22.8" width="10" height="2.6" fill="#0062FF" />

    {/* Bar 6 (y: 27.0, h: 2.6) */}
    <rect x="23" y="27.0" width="10" height="2.6" fill="#0062FF" />
    <rect x="48" y="27.0" width="10" height="2.6" fill="#0062FF" />
    <rect x="78" y="27.0" width="10" height="2.6" fill="#0062FF" />
    <rect x="92" y="27.0" width="10" height="2.6" fill="#0062FF" />
    <rect x="142" y="27.0" width="10" height="2.6" fill="#0062FF" />

    {/* Bar 7 (y: 31.2, h: 2.6) */}
    <rect x="23" y="31.2" width="10" height="2.6" fill="#0062FF" />
    <rect x="48" y="31.2" width="10" height="2.6" fill="#0062FF" />
    <rect x="76" y="31.2" width="10" height="2.6" fill="#0062FF" />
    <rect x="92" y="31.2" width="10" height="2.6" fill="#0062FF" />
    <rect x="142" y="31.2" width="10" height="2.6" fill="#0062FF" />

    {/* Bar 8 (y: 35.4, h: 2.6) */}
    <rect x="14" y="35.4" width="28" height="2.6" fill="#0062FF" />
    <rect x="48" y="35.4" width="36" height="2.6" fill="#0062FF" />
    <rect x="88" y="35.4" width="18" height="2.6" fill="#0062FF" />
    <rect x="138" y="35.4" width="18" height="2.6" fill="#0062FF" />
  </svg>
);

// 10. LTIMINDTREE
export const LTIMindtreeLogo: React.FC<LogoProps> = ({ className = 'w-full h-full' }) => (
  <svg viewBox="0 0 160 45" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="6" y="10" width="10" height="24" rx="2" fill="#1D2A44" />
    <rect x="18" y="18" width="10" height="16" rx="2" fill="#D92D27" />
    <text x="34" y="24" fontFamily="Arial, Helvetica, sans-serif" fontWeight="900" fontSize="14" fill="#1D2A44" letterSpacing="0.5">
      LTI<tspan fill="#D92D27">Mindtree</tspan>
    </text>
  </svg>
);

// 11. MPHASIS
export const MphasisLogo: React.FC<LogoProps> = ({ className = 'w-full h-full' }) => (
  <svg viewBox="0 0 160 45" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Mphasis red geometric M mark */}
    <g transform="translate(6, 8)">
      <path d="M 0 28 L 0 6 L 10 18 L 20 6 L 20 28" stroke="#D8232A" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </g>
    <text x="36" y="29" fontFamily="Arial, Helvetica, sans-serif" fontWeight="900" fontSize="19" fill="#1C1C1C" letterSpacing="-0.2">
      Mphasis
    </text>
  </svg>
);

// 12. PERSISTENT SYSTEMS
export const PersistentLogo: React.FC<LogoProps> = ({ className = 'w-full h-full' }) => (
  <svg viewBox="0 0 160 45" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <g transform="translate(6, 8)">
      <circle cx="14" cy="14" r="14" fill="#F37021" />
      <path d="M 9 22 V 7 H 17 C 20 7, 22 9, 22 12 C 22 15, 20 17, 17 17 H 9" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </g>
    <text x="42" y="23" fontFamily="Arial, Helvetica, sans-serif" fontWeight="800" fontSize="13" fill="#1C1C1C">
      Persistent
    </text>
    <text x="42" y="34" fontFamily="Arial, Helvetica, sans-serif" fontWeight="600" fontSize="9" fill="#F37021" letterSpacing="1">
      SYSTEMS
    </text>
  </svg>
);

// 13. DXC TECHNOLOGY
export const DXCLogo: React.FC<LogoProps> = ({ className = 'w-full h-full' }) => (
  <svg viewBox="0 0 160 45" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <text x="6" y="31" fontFamily="Arial, Helvetica, sans-serif" fontWeight="900" fontSize="24" fill="#5F259F" letterSpacing="1">
      DXC<tspan fill="#1C1C1C" fontSize="13" fontWeight="700">.technology</tspan>
    </text>
  </svg>
);

// 14. ORACLE
export const OracleLogo: React.FC<LogoProps> = ({ className = 'w-full h-full' }) => (
  <svg viewBox="0 0 160 45" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <text x="8" y="31" fontFamily="'Franklin Gothic Medium', Arial, sans-serif" fontWeight="900" fontSize="25" fill="#C74634" letterSpacing="1.5">
      ORACLE
    </text>
  </svg>
);

// 15. MICROSOFT
export const MicrosoftLogo: React.FC<LogoProps> = ({ className = 'w-full h-full' }) => (
  <svg viewBox="0 0 160 45" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <g transform="translate(6, 10)">
      <rect x="0" y="0" width="11" height="11" fill="#F25022" />
      <rect x="13" y="0" width="11" height="11" fill="#7FBA00" />
      <rect x="0" y="13" width="11" height="11" fill="#00A4EF" />
      <rect x="13" y="13" width="11" height="11" fill="#FFB900" />
    </g>
    <text x="38" y="29" fontFamily="'Segoe UI', Arial, sans-serif" fontWeight="600" fontSize="18" fill="#5E5E5E" letterSpacing="-0.3">
      Microsoft
    </text>
  </svg>
);

// 16. AMAZON / AWS
export const AmazonLogo: React.FC<LogoProps> = ({ className = 'w-full h-full' }) => (
  <svg viewBox="0 0 160 45" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <text x="6" y="27" fontFamily="Arial, Helvetica, sans-serif" fontWeight="800" fontSize="20" fill="#1C1C1C">
      amazon<tspan fill="#FF9900">.in</tspan>
    </text>
    <path d="M 8 33 Q 42 42 72 32" stroke="#FF9900" strokeWidth="2.8" strokeLinecap="round" fill="none" />
    <path d="M 69 30 L 75 33 L 70 37" fill="#FF9900" />
  </svg>
);

// 17. GOOGLE
export const GoogleLogo: React.FC<LogoProps> = ({ className = 'w-full h-full' }) => (
  <svg viewBox="0 0 160 45" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <g transform="translate(16, 22)">
      <circle cx="0" cy="0" r="13" fill="none" stroke="#4285F4" strokeWidth="4" />
      <path d="M 0 -13 A 13 13 0 0 1 13 0 L 0 0 Z" fill="#4285F4" />
      <path d="M 13 0 A 13 13 0 0 1 0 13 L 0 0 Z" fill="#34A853" />
      <path d="M 0 13 A 13 13 0 0 1 -13 0 L 0 0 Z" fill="#FBBC05" />
      <path d="M -13 0 A 13 13 0 0 1 0 -13 L 0 0 Z" fill="#EA4335" />
      <circle cx="0" cy="0" r="8" fill="#FAF8F3" />
      <rect x="0" y="-3" width="13" height="6" fill="#4285F4" />
    </g>
    <text x="40" y="30" fontFamily="'Product Sans', Arial, sans-serif" fontWeight="700" fontSize="20" fill="#1C1C1C">
      Google
    </text>
  </svg>
);

// 18. ZOHO
export const ZohoLogo: React.FC<LogoProps> = ({ className = 'w-full h-full' }) => (
  <svg viewBox="0 0 160 45" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <g transform="translate(6, 9)">
      <rect x="0" y="0" width="24" height="26" rx="3" fill="#EA212D" />
      <text x="12" y="19" textAnchor="middle" fontFamily="Arial, Helvetica, sans-serif" fontWeight="900" fontSize="17" fill="#FFFFFF">Z</text>
      <rect x="27" y="0" width="24" height="26" rx="3" fill="#2BAE49" />
      <text x="39" y="19" textAnchor="middle" fontFamily="Arial, Helvetica, sans-serif" fontWeight="900" fontSize="17" fill="#FFFFFF">O</text>
      <rect x="54" y="0" width="24" height="26" rx="3" fill="#0D72B9" />
      <text x="66" y="19" textAnchor="middle" fontFamily="Arial, Helvetica, sans-serif" fontWeight="900" fontSize="17" fill="#FFFFFF">H</text>
      <rect x="81" y="0" width="24" height="26" rx="3" fill="#F8B11B" />
      <text x="93" y="19" textAnchor="middle" fontFamily="Arial, Helvetica, sans-serif" fontWeight="900" fontSize="17" fill="#FFFFFF">O</text>
    </g>
  </svg>
);

// 19. FRESHWORKS
export const FreshworksLogo: React.FC<LogoProps> = ({ className = 'w-full h-full' }) => (
  <svg viewBox="0 0 160 45" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <g transform="translate(6, 8)">
      <circle cx="14" cy="14" r="14" fill="#FF6B35" />
      <path d="M 8 14 C 8 10, 12 8, 16 8 C 20 8, 20 12, 16 14 C 12 16, 12 20, 16 20" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" fill="none" />
    </g>
    <text x="42" y="29" fontFamily="Arial, Helvetica, sans-serif" fontWeight="900" fontSize="17" fill="#1C1C1C" letterSpacing="-0.3">
      freshworks
    </text>
  </svg>
);

// 20. COFORGE
export const CoforgeLogo: React.FC<LogoProps> = ({ className = 'w-full h-full' }) => (
  <svg viewBox="0 0 160 45" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <g transform="translate(6, 10)">
      <path d="M 0 12 L 10 2 L 16 8 L 6 18 Z" fill="#0084CA" />
      <path d="M 12 12 L 22 2 L 28 8 L 18 18 Z" fill="#E35205" />
    </g>
    <text x="40" y="29" fontFamily="Arial, Helvetica, sans-serif" fontWeight="900" fontSize="20" fill="#1C1C1C" letterSpacing="0.2">
      Coforge
    </text>
  </svg>
);

// 21. HEXAWARE
export const HexawareLogo: React.FC<LogoProps> = ({ className = 'w-full h-full' }) => (
  <svg viewBox="0 0 160 45" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <g transform="translate(6, 8)">
      {/* Hexagon icon */}
      <polygon points="14,2 26,8 26,20 14,26 2,20 2,8" fill="#005A9C" />
      <polygon points="14,6 22,10 22,18 14,22 6,18 6,10" fill="#4BB543" />
    </g>
    <text x="38" y="29" fontFamily="Arial, Helvetica, sans-serif" fontWeight="900" fontSize="17" fill="#005A9C" letterSpacing="-0.2">
      HEXAWARE
    </text>
  </svg>
);

// Master Helper Map for all 21 companies
export const getCompanyLogoComponent = (companyName: string) => {
  const norm = (companyName || '').toLowerCase().trim();
  
  // Specific checks with high priority
  if (norm.includes('ibm')) return IBMLogo;
  if (norm.includes('ltimindtree') || norm.includes('mindtree') || /\blti\b/.test(norm)) return LTIMindtreeLogo;
  if (norm.includes('accenture')) return AccentureLogo;
  if (norm.includes('tcs') || norm.includes('tata consultancy') || norm.includes('tata')) return TCSLogo;
  if (norm.includes('infosys')) return InfosysLogo;
  if (norm.includes('wipro')) return WiproLogo;
  if (norm.includes('cognizant')) return CognizantLogo;
  if (norm.includes('capgemini')) return CapgeminiLogo;
  if (norm.includes('hcl')) return HCLTechLogo;
  if (norm.includes('mahindra')) return TechMahindraLogo;
  if (norm.includes('mphasis')) return MphasisLogo;
  if (norm.includes('persistent')) return PersistentLogo;
  if (norm.includes('dxc')) return DXCLogo;
  if (norm.includes('oracle')) return OracleLogo;
  if (norm.includes('microsoft')) return MicrosoftLogo;
  if (norm.includes('amazon') || norm.includes('aws')) return AmazonLogo;
  if (norm.includes('google') || norm.includes('alphabet')) return GoogleLogo;
  if (norm.includes('zoho')) return ZohoLogo;
  if (norm.includes('freshworks')) return FreshworksLogo;
  if (norm.includes('coforge')) return CoforgeLogo;
  if (norm.includes('hexaware')) return HexawareLogo;
  return null;
};
