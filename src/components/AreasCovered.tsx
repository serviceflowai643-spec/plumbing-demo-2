import React, { useState } from 'react';
import { MapPin, Navigation, Search } from 'lucide-react';
import { AREAS_COVERED, BUSINESS_INFO } from '../data/companyData';

export const AreasCovered: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredAreas = AREAS_COVERED.filter(area => 
    area.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    area.postcodes.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section id="areas" className="py-16 sm:py-24 bg-[#F4F7FA] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="text-xs sm:text-sm font-bold tracking-wider text-[#168BFA] uppercase mb-2">
            LOCAL BOROUGHS & DISTRICTS
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#081526] tracking-tight">
            Local Plumbing Services Across Greater London
          </h2>
          <p className="mt-4 text-base text-[#68778A]">
            Based at 43 Sunnyside Road in Ealing (W5 5HT), our mobile plumbing engineers provide prompt callouts across West London and the wider Greater London region.
          </p>

          {/* Quick Postcode Filter Input */}
          <div className="mt-6 max-w-md mx-auto relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
              <Search className="w-4 h-4" />
            </div>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search your London area or postcode (e.g. Ealing, W5, Acton)..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 bg-white text-xs text-[#081526] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#168BFA] focus:border-transparent transition-all shadow-2xs"
            />
          </div>
        </div>

        {/* 10 Areas Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {filteredAreas.map((area, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl p-4 border border-slate-200/90 shadow-2xs hover:border-[#168BFA] transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm font-bold text-[#081526]">
                    {area.name}
                  </h3>
                  <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                    {area.postcodes}
                  </span>
                </div>
                <p className="text-xs text-[#68778A] leading-relaxed">
                  {area.description}
                </p>
              </div>

              <div className="mt-3 pt-2 border-t border-slate-100 flex items-center gap-1.5 text-[11px] text-[#168BFA] font-semibold">
                <MapPin className="w-3.5 h-3.5" />
                <span>Service Available</span>
              </div>
            </div>
          ))}
        </div>

        {filteredAreas.length === 0 && (
          <div className="text-center py-8 bg-white rounded-xl border border-slate-200">
            <p className="text-xs text-slate-600">
              Don't see your specific postcode listed? We cover all of Greater London. Call <span className="font-bold text-[#081526]">07796 345453</span> to check engineer availability.
            </p>
          </div>
        )}

        {/* Interactive Base Card with Google Maps Directions */}
        <div className="mt-10 bg-white rounded-2xl p-6 border border-slate-200/90 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#10263D] text-[#168BFA] flex items-center justify-center shrink-0">
              <Navigation className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#081526]">
                Operational Dispatch Hub
              </h4>
              <p className="text-xs text-[#68778A] mt-0.5">
                {BUSINESS_INFO.address}
              </p>
              <p className="text-[11px] text-slate-500 mt-1">
                Engineers operate in fully-equipped mobile service vans dispatched directly across Greater London.
              </p>
            </div>
          </div>

          <div className="shrink-0 w-full sm:w-auto">
            <a
              href={BUSINESS_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-[#081526] hover:bg-[#10263D] transition-colors"
            >
              <MapPin className="w-4 h-4 text-[#168BFA]" />
              <span>Open in Google Maps</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
