import React, { useState } from 'react';
import { cityRentalData, urbanTransportFoodData, localBusinessAdaptations } from '../data/cityEconomyData';
import { DataStatusBadge } from './DataStatusBadge';
import { UrbanRentalShiftChart } from './ResearchCharts';
import { Building, Bus, Utensils, ShoppingBag } from 'lucide-react';

export const CityEconomySection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'rentals' | 'transport-food' | 'local-business' | 'adaptation'>('rentals');

  return (
    <section id="city-economy" className="py-16 md:py-24 px-4 sm:px-8 border-b border-hairline bg-bone">
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Section Header */}
        <div className="border-b border-hairline pb-4 flex flex-wrap items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs tracking-widest text-neutral-500 uppercase font-bold">
                SCREENS 16–19 • LOCAL CITY IMPACT
              </span>
              <DataStatusBadge status="SCENARIO" />
            </div>
            <h2 className="font-serif font-bold text-3xl md:text-4xl text-ink mt-1">
              Houses, Transport &amp; Local Business Impact
            </h2>
          </div>

          {/* Sub-Navigation Tabs */}
          <div className="flex flex-wrap items-center gap-2 font-mono text-xs font-bold">
            <button
              onClick={() => setActiveTab('rentals')}
              className={`px-3 py-2 border transition-all cursor-pointer ${
                activeTab === 'rentals'
                  ? 'bg-ink text-bone border-ink shadow-sm'
                  : 'bg-cream text-neutral-700 border-hairline hover:border-ink'
              }`}
            >
              16. HOUSING &amp; PGS
            </button>
            <button
              onClick={() => setActiveTab('transport-food')}
              className={`px-3 py-2 border transition-all cursor-pointer ${
                activeTab === 'transport-food'
                  ? 'bg-ink text-bone border-ink shadow-sm'
                  : 'bg-cream text-neutral-700 border-hairline hover:border-ink'
              }`}
            >
              17. COMMUTE &amp; FOOD
            </button>
            <button
              onClick={() => setActiveTab('local-business')}
              className={`px-3 py-2 border transition-all cursor-pointer ${
                activeTab === 'local-business'
                  ? 'bg-ink text-bone border-ink shadow-sm'
                  : 'bg-cream text-neutral-700 border-hairline hover:border-ink'
              }`}
            >
              18. SHOPS &amp; LOCAL SERVICES
            </button>
            <button
              onClick={() => setActiveTab('adaptation')}
              className={`px-3 py-2 border transition-all cursor-pointer ${
                activeTab === 'adaptation'
                  ? 'bg-amberAccent text-bone border-amberAccent shadow-sm'
                  : 'bg-cream text-neutral-700 border-hairline hover:border-ink'
              }`}
            >
              19. HOW BUSINESSES CAN ADAPT
            </button>
          </div>
        </div>

        {/* SCREEN 16: Rental Housing & PGs */}
        {activeTab === 'rentals' && (
          <div className="space-y-6">
            <div className="border-b border-hairline pb-2 flex justify-between items-center">
              <h3 className="font-serif font-bold text-2xl text-ink">
                What Happens to Rental Houses and PGs?
              </h3>
              <span className="font-mono text-xs text-neutral-500 font-bold uppercase">
                CHENNAI • BENGALURU • HYDERABAD
              </span>
            </div>

            {/* Graph 08: Real Estate & Rental Shift Chart */}
            <UrbanRentalShiftChart />

            {/* Editorial Co-living & Housing Lifestyle Showcase */}
            <div className="relative overflow-hidden border border-hairline bg-obsidian text-bone">
              <div className="grid grid-cols-1 md:grid-cols-12 items-stretch">
                <div className="md:col-span-7 relative h-52 sm:h-64 overflow-hidden">
                  <img
                    src="/images/urban_coliving.jpg"
                    alt="Urban Tech Co-Living and Serviced Suites"
                    className="w-full h-full object-cover grayscale-[15%] hover:grayscale-0 hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-transparent via-obsidian/30 to-obsidian pointer-events-none"></div>
                  <div className="absolute top-3 left-3 bg-obsidian/85 backdrop-blur-sm px-2.5 py-1 border border-darkhairline text-[10px] font-mono text-neutral-300 font-bold uppercase tracking-wider">
                    MODERN CO-LIVING ALONG TECH CORRIDORS
                  </div>
                </div>

                <div className="md:col-span-5 p-5 md:p-6 flex flex-col justify-between bg-obsidian border-t md:border-t-0 md:border-l border-darkhairline">
                  <div className="space-y-2">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-amberAccent font-bold">
                      HOW HOUSING IS CHANGING
                    </span>
                    <h4 className="font-serif font-bold text-lg md:text-xl text-bone">
                      PGs Upgrading into Modern Co-Living Spaces
                    </h4>
                    <p className="text-xs text-neutral-400 font-sans leading-relaxed">
                      Many basic student PGs in areas like Navalur and Sholinganallur (Chennai) and Marathahalli (Bengaluru) are upgrading into serviced co-living spaces with fast Wi-Fi, work desks, and flexible month-to-month rent.
                    </p>
                  </div>

                  <div className="pt-3 border-t border-darkhairline text-[10px] font-mono text-neutral-400 flex justify-between">
                    <span>UPGRADED ROOM DEMAND</span>
                    <span className="text-emerald-400 font-bold">Strong demand for modern amenities</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {cityRentalData.map(c => (
                <div
                  key={c.cityId}
                  className={`p-6 border flex flex-col justify-between space-y-4 shadow-sm ${
                    c.focusTier === 'PRIMARY'
                      ? 'bg-parchment/60 border-amberAccent'
                      : 'bg-cream border-hairline'
                  }`}
                >
                  <div>
                    <div className="flex justify-between items-center pb-2 border-b border-hairline">
                      <span className="font-mono text-[0.65rem] font-bold text-neutral-500 uppercase">
                        {c.cityName}
                      </span>
                      {c.focusTier === 'PRIMARY' && (
                        <span className="bg-amberAccent text-bone px-1.5 py-0.5 text-[0.55rem] font-mono font-bold uppercase">
                          PRIMARY FOCUS
                        </span>
                      )}
                    </div>

                    <div className="my-3 font-mono text-xs">
                      <span className="text-[0.65rem] text-neutral-500 block uppercase font-bold">KEY CORRIDORS:</span>
                      <p className="font-semibold text-ink text-[0.75rem]">{c.keyRentalHubs}</p>
                    </div>

                    <div className="space-y-3 text-xs font-sans">
                      <div className="p-3 bg-bone border border-hairline">
                        <strong className="font-mono text-[0.65rem] uppercase text-neutral-600 block mb-0.5">
                          APARTMENT REALITY (CURRENT):
                        </strong>
                        <p className="text-neutral-700 leading-relaxed text-[0.75rem]">{c.apartmentDemandCurrent}</p>
                      </div>

                      <div className="p-3 bg-bone border border-hairline">
                        <strong className="font-mono text-[0.65rem] uppercase text-neutral-600 block mb-0.5">
                          BACHELOR PG &amp; HOSTEL DYNAMICS:
                        </strong>
                        <p className="text-neutral-700 leading-relaxed text-[0.75rem]">{c.pgHostelDemandCurrent}</p>
                      </div>

                      <div className="p-3 bg-bone border border-hairline">
                        <strong className="font-mono text-[0.65rem] uppercase text-neutral-600 block mb-0.5">
                          MANAGED CO-LIVING PENETRATION:
                        </strong>
                        <p className="text-neutral-700 leading-relaxed text-[0.75rem]">{c.coLivingTrends}</p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-hairline space-y-2">
                    <div className="p-3 bg-cream border border-hairline">
                      <strong className="font-mono text-[0.65rem] uppercase text-neutral-700 block mb-0.5">
                        POTENTIAL 2030 RENTAL SHIFT:
                      </strong>
                      <p className="text-neutral-800 text-[0.75rem] leading-relaxed font-medium">
                        {c.potential2030RentalShift}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* SCREEN 17: Transport + Food + Hospitality */}
        {activeTab === 'transport-food' && (
          <div className="space-y-6">
            <div className="border-b border-hairline pb-2 flex justify-between items-center">
              <h3 className="font-serif font-bold text-2xl text-ink">
                Screen 17: Tech Corridor Transport, Food &amp; Hospitality
              </h3>
              <span className="font-mono text-xs text-neutral-500 font-bold uppercase">
                FLEETS • AUTOS • CAFES • CANTEENS
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {urbanTransportFoodData.map(c => (
                <div key={c.cityId} className="bg-cream p-6 border border-hairline space-y-4 shadow-sm">
                  <div className="flex justify-between items-center pb-2 border-b border-hairline">
                    <h4 className="font-serif font-bold text-lg text-ink">{c.cityName}</h4>
                    <DataStatusBadge status={c.status} />
                  </div>

                  <div className="space-y-3 text-xs font-sans">
                    <div className="p-3 bg-bone border border-hairline space-y-1">
                      <div className="flex items-center gap-1.5 font-mono text-[0.65rem] font-bold uppercase text-neutral-700">
                        <Bus className="w-3.5 h-3.5 text-amberAccent" />
                        <span>COMPANY BUSES &amp; CAB FLEETS</span>
                      </div>
                      <p className="text-neutral-700 leading-relaxed text-[0.75rem]">{c.companyBusesAndCabs}</p>
                    </div>

                    <div className="p-3 bg-bone border border-hairline space-y-1">
                      <div className="flex items-center gap-1.5 font-mono text-[0.65rem] font-bold uppercase text-neutral-700">
                        <Building className="w-3.5 h-3.5 text-neutral-600" />
                        <span>AUTOS &amp; PUBLIC TRANSIT</span>
                      </div>
                      <p className="text-neutral-700 leading-relaxed text-[0.75rem]">{c.autosAndPublicTransit}</p>
                    </div>

                    <div className="p-3 bg-bone border border-hairline space-y-1">
                      <div className="flex items-center gap-1.5 font-mono text-[0.65rem] font-bold uppercase text-neutral-700">
                        <Utensils className="w-3.5 h-3.5 text-neutral-600" />
                        <span>RESTAURANTS, CAFES &amp; MESSES</span>
                      </div>
                      <p className="text-neutral-700 leading-relaxed text-[0.75rem]">{c.restaurantsAndCafes}</p>
                    </div>

                    <div className="p-3 bg-bone border border-hairline space-y-1">
                      <div className="flex items-center gap-1.5 font-mono text-[0.65rem] font-bold uppercase text-neutral-700">
                        <ShoppingBag className="w-3.5 h-3.5 text-neutral-600" />
                        <span>FOOD DELIVERY &amp; CANTEENS</span>
                      </div>
                      <p className="text-neutral-700 leading-relaxed text-[0.75rem]">{c.foodDeliveryAndCanteens}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* SCREEN 18: Local Business Ecosystem */}
        {activeTab === 'local-business' && (
          <div className="space-y-6">
            <div className="border-b border-hairline pb-2 flex justify-between items-center">
              <h3 className="font-serif font-bold text-2xl text-ink">
                Screen 18: Local Business Ecosystem &amp; Commercial Real Estate
              </h3>
              <span className="font-mono text-xs text-neutral-500 font-bold uppercase">
                RETAIL • COWORKING • GYMS • TRAINING
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 font-sans text-xs">
              <div className="bg-cream p-5 border border-hairline space-y-2">
                <span className="font-mono text-[0.65rem] font-bold uppercase text-neutral-500">01. COMMERCIAL LEASING &amp; COWORKING</span>
                <h4 className="font-serif font-bold text-base text-ink">Flex Workspace Migration</h4>
                <p className="text-neutral-700 leading-relaxed">
                  Enterprises downsize rigid 10-year lock-in floorplates along OMR and ORR in favor of flexible managed enterprise suites. Coworking operators expand managed branch desks for hybrid workers.
                </p>
              </div>

              <div className="bg-cream p-5 border border-hairline space-y-2">
                <span className="font-mono text-[0.65rem] font-bold uppercase text-neutral-500">02. PRIVATE TRAINING INSTITUTES</span>
                <h4 className="font-serif font-bold text-base text-ink">Curriculum Obsolescence Pressure</h4>
                <p className="text-neutral-700 leading-relaxed">
                  Traditional offline coaching centers in Velachery, Tambaram, and Ameerpet teaching basic manual QA and syntax coding face consolidation; modern bootcamps pivot to AI agent development and MLOps.
                </p>
              </div>

              <div className="bg-cream p-5 border border-hairline space-y-2">
                <span className="font-mono text-[0.65rem] font-bold uppercase text-neutral-500">03. RETAIL MALLS &amp; ENTERTAINMENT</span>
                <h4 className="font-serif font-bold text-base text-ink">Weekend Suburb Polarization</h4>
                <p className="text-neutral-700 leading-relaxed">
                  Corridor retail (Marina Mall OMR, Nexus Shantiniketan Whitefield) sees weekday footfalls decline but weekend family entertainment and experiential dining spend remain strong.
                </p>
              </div>

              <div className="bg-cream p-5 border border-hairline space-y-2">
                <span className="font-mono text-[0.65rem] font-bold uppercase text-neutral-500">04. FITNESS, SALONS &amp; LAUNDRY</span>
                <h4 className="font-serif font-bold text-base text-ink">Subscription Loyalty Models</h4>
                <p className="text-neutral-700 leading-relaxed">
                  Service providers around bachelor PG belts introduce flexible monthly digital memberships to counter fluctuating residency patterns among transient tech workers.
                </p>
              </div>

              <div className="bg-cream p-5 border border-hairline space-y-2">
                <span className="font-mono text-[0.65rem] font-bold uppercase text-neutral-500">05. RECRUITMENT AGENCIES</span>
                <h4 className="font-serif font-bold text-base text-ink">Contingent Search Evolution</h4>
                <p className="text-neutral-700 leading-relaxed">
                  Staffing agencies transition from high-volume contingent resume screening to specialized executive technical headhunting for AI safety, vector data infrastructure, and compiler engineering.
                </p>
              </div>

              <div className="bg-cream p-5 border border-hairline space-y-2">
                <span className="font-mono text-[0.65rem] font-bold uppercase text-neutral-500">06. LOCAL PROVISIONS &amp; SHOPS</span>
                <h4 className="font-serif font-bold text-base text-ink">Township Retail Anchors</h4>
                <p className="text-neutral-700 leading-relaxed">
                  Corner grocery and medical stores increasingly partner with quick-commerce platforms (Blinkit, Zepto, Swiggy Instamart) serving high-density gated townships along tech corridors.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* SCREEN 19: Business Adaptation Matrix */}
        {activeTab === 'adaptation' && (
          <div className="space-y-6">
            <div className="border-b border-hairline pb-2 flex justify-between items-center">
              <div>
                <span className="font-mono text-xs font-bold uppercase text-neutral-500 block">
                  SCREEN 19 • RESILIENCE FRAMEWORK
                </span>
                <h3 className="font-serif font-bold text-2xl text-ink">
                  HOW CAN THE URBAN ECOSYSTEM SURVIVE?
                </h3>
              </div>
              <DataStatusBadge status="SCENARIO" />
            </div>

            <p className="text-xs font-sans text-neutral-600 leading-relaxed">
              Every disrupted sector possesses a clear economic adaptation vector. The framework below illustrates how local urban businesses pivot from legacy dependency to new opportunities.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {localBusinessAdaptations.map(biz => (
                <div
                  key={biz.sector}
                  className="bg-cream border border-hairline p-6 hover:border-ink hover:bg-cream/90 transition-all flex flex-col justify-between shadow-xs space-y-4 font-sans text-xs rounded-xs"
                >
                  <div>
                    <div className="flex justify-between items-center pb-2.5 border-b border-hairline">
                      <h4 className="font-serif font-bold text-base text-ink">{biz.sector}</h4>
                      <DataStatusBadge status={biz.status} />
                    </div>

                    <div className="my-3 space-y-2.5">
                      {/* 1. Problem - Standard Website Theme Styling */}
                      <div className="p-3 bg-bone border border-hairline space-y-1 rounded-xs">
                        <strong className="font-mono text-[0.62rem] uppercase text-neutral-600 block font-bold tracking-wider">
                          1. THE CURRENT PROBLEM:
                        </strong>
                        <p className="text-neutral-800 text-[0.75rem] leading-relaxed">{biz.problem}</p>
                      </div>

                      {/* 2. Adaptation - Standard Website Theme Styling */}
                      <div className="p-3 bg-bone border border-hairline space-y-1 rounded-xs">
                        <strong className="font-mono text-[0.62rem] uppercase text-amberAccent block font-bold tracking-wider">
                          2. THE ADAPTATION STRATEGY:
                        </strong>
                        <p className="text-neutral-800 text-[0.75rem] leading-relaxed">{biz.adaptationStrategy}</p>
                      </div>

                      {/* 3. New Opportunity - Standard Website Theme Styling */}
                      <div className="p-3 bg-parchment border border-hairline space-y-1 rounded-xs">
                        <strong className="font-mono text-[0.62rem] uppercase text-neutral-700 block font-bold tracking-wider">
                          3. NEW OPPORTUNITY &amp; GROWTH:
                        </strong>
                        <p className="text-neutral-900 text-[0.75rem] leading-relaxed font-medium">{biz.newOpportunity}</p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-2.5 border-t border-hairline font-mono text-[0.65rem] text-neutral-600">
                    <strong className="text-amberAccent">CHENNAI CONTEXT:</strong> {biz.chennaiFocus}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
