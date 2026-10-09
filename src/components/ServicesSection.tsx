import React, { useState } from 'react';
import { 
  AlertCircle, 
  Wrench, 
  Flame, 
  Droplets, 
  Search, 
  Thermometer, 
  Bath, 
  Sun, 
  ArrowRight, 
  X, 
  Phone, 
  CheckCircle2 
} from 'lucide-react';
import { SERVICES, BUSINESS_INFO } from '../data/companyData';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  onQuoteClick: (serviceTitle?: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onQuoteClick }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'AlertCircle': return <AlertCircle className="w-5 h-5" />;
      case 'Wrench': return <Wrench className="w-5 h-5" />;
      case 'Flame': return <Flame className="w-5 h-5" />;
      case 'Droplets': return <Droplets className="w-5 h-5" />;
      case 'Search': return <Search className="w-5 h-5" />;
      case 'Thermometer': return <Thermometer className="w-5 h-5" />;
      case 'Bath': return <Bath className="w-5 h-5" />;
      case 'Sun': return <Sun className="w-5 h-5" />;
      default: return <Wrench className="w-5 h-5" />;
    }
  };

  return (
    <section id="services" className="py-16 sm:py-24 bg-[#F4F7FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="text-xs sm:text-sm font-bold tracking-wider text-[#168BFA] uppercase mb-2">
            COMPLETE DOMESTIC & COMMERCIAL EXPERTISE
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#081526] tracking-tight">
            Plumbing & Heating Services Across London
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#68778A]">
            From urgent plumbing problems to planned installations, get help with the services you need.
          </p>
        </div>

        {/* 8 Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="group bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-xs hover:shadow-md hover:border-[#168BFA]/50 transition-all flex flex-col justify-between"
            >
              <div>
                {/* Visual Header: Authentic image or precision SVG pattern */}
                {service.image ? (
                  <div className="relative h-44 overflow-hidden bg-slate-100">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                    <div className="absolute top-3 left-3 w-9 h-9 rounded-lg bg-[#081526]/80 backdrop-blur-md text-[#168BFA] flex items-center justify-center shadow-sm">
                      {getIcon(service.iconName)}
                    </div>
                  </div>
                ) : (
                  <div className="relative h-44 bg-gradient-to-br from-[#10263D] to-[#081526] p-4 flex flex-col justify-between text-white overflow-hidden">
                    <div className="w-10 h-10 rounded-xl bg-[#168BFA]/20 border border-[#168BFA]/40 flex items-center justify-center text-[#168BFA]">
                      {getIcon(service.iconName)}
                    </div>
                    {/* Architectural trade blueprint grid line */}
                    <div className="absolute right-[-20px] bottom-[-20px] w-32 h-32 rounded-full border border-white/5 pointer-events-none" />
                    <div className="relative z-10">
                      <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                        Qualified Engineers
                      </span>
                      <p className="text-sm font-bold text-white mt-0.5">
                        {service.title}
                      </p>
                    </div>
                  </div>
                )}

                {/* Card Body */}
                <div className="p-5">
                  <h3 className="text-lg font-bold text-[#081526] group-hover:text-[#168BFA] transition-colors">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm text-[#68778A] line-clamp-3 leading-relaxed">
                    {service.shortDesc}
                  </p>
                </div>
              </div>

              {/* Action Footer */}
              <div className="px-5 pb-5 pt-1">
                <button
                  type="button"
                  onClick={() => setSelectedService(service)}
                  className="w-full inline-flex items-center justify-between text-xs font-bold text-[#168BFA] hover:text-[#1272CE] py-2 px-3 rounded-lg bg-[#F4F7FA] hover:bg-[#EBF3FC] transition-colors focus:outline-none focus:ring-2 focus:ring-[#168BFA]"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Service Details Modal */}
      {selectedService && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fadeIn"
          role="dialog"
          aria-modal="true"
        >
          <div className="bg-white rounded-2xl max-w-xl w-full max-h-[90vh] overflow-y-auto border border-slate-200 shadow-2xl animate-scaleUp">
            
            {/* Modal Header */}
            <div className="relative bg-[#081526] text-white p-6 rounded-t-2xl">
              <button
                type="button"
                onClick={() => setSelectedService(null)}
                aria-label="Close modal"
                className="absolute top-4 right-4 p-2 rounded-lg text-slate-300 hover:text-white hover:bg-[#10263D] transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-xl bg-[#168BFA] flex items-center justify-center text-white">
                  {getIcon(selectedService.iconName)}
                </div>
                <div>
                  <span className="text-xs font-bold tracking-wider text-[#168BFA] uppercase">
                    LONDON PLUMBERS
                  </span>
                  <h3 className="text-xl font-extrabold text-white">
                    {selectedService.title}
                  </h3>
                </div>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6 space-y-6">
              <div>
                <h4 className="text-xs font-bold tracking-wider text-[#68778A] uppercase mb-2">
                  Service Overview
                </h4>
                <p className="text-sm text-[#081526] leading-relaxed">
                  {selectedService.fullDesc}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold tracking-wider text-[#68778A] uppercase mb-3">
                  Key Scope of Work
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedService.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-[#168BFA] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-bold tracking-wider text-[#68778A] uppercase mb-3">
                  Typical Situations We Resolve
                </h4>
                <ul className="list-disc list-inside text-xs text-slate-600 space-y-1">
                  {selectedService.commonIssues.map((issue, idx) => (
                    <li key={idx}>{issue}</li>
                  ))}
                </ul>
              </div>

              {/* Actions */}
              <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center gap-3">
                <a
                  href={BUSINESS_INFO.phoneTel}
                  className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#168BFA] hover:bg-[#1272CE] text-white font-bold text-sm shadow-md"
                >
                  <Phone className="w-4 h-4 animate-pulse" />
                  <span>Call 07796 345453</span>
                </a>
                <button
                  type="button"
                  onClick={() => {
                    const title = selectedService.title;
                    setSelectedService(null);
                    onQuoteClick(title);
                  }}
                  className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#10263D] hover:bg-[#081526] text-white font-semibold text-sm"
                >
                  <span>Request Quote For This</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
