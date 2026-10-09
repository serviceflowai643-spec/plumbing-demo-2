import React from 'react';
import { Phone, CalendarClock, AlertOctagon } from 'lucide-react';
import { BUSINESS_INFO } from '../data/companyData';

interface EmergencyBannerProps {
  onQuoteClick: () => void;
}

export const EmergencyBanner: React.FC<EmergencyBannerProps> = ({ onQuoteClick }) => {
  return (
    <section id="emergency" className="relative bg-[#081526] text-white py-14 sm:py-18 overflow-hidden border-y border-[#10263D]">
      {/* Decorative subtle blue gradient wash */}
      <div 
        className="absolute inset-0 bg-gradient-to-r from-[#168BFA]/10 via-transparent to-[#168BFA]/5 pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-wider text-[#168BFA] uppercase">
            <AlertOctagon className="w-4 h-4" />
            <span>24/7 GREATER LONDON EMERGENCY ATTENDANCE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white text-balance">
            Plumbing Emergency? We're Here to Help.
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Leaks, blocked drains and heating problems can quickly become stressful. Call our team to discuss the issue and arrange assistance.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={BUSINESS_INFO.phoneTel}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-base font-bold text-white bg-[#168BFA] hover:bg-[#1272CE] active:bg-[#0D62B3] shadow-lg shadow-[#168BFA]/30 transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#168BFA] focus:ring-offset-[#081526]"
            >
              <Phone className="w-5 h-5 animate-pulse" />
              <span>Call 07796 345453</span>
            </a>

            <button
              type="button"
              onClick={onQuoteClick}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-base font-semibold text-slate-200 hover:text-white bg-[#10263D] hover:bg-[#173859] border border-slate-700/60 transition-all focus:outline-none focus:ring-2 focus:ring-slate-400"
            >
              <CalendarClock className="w-4 h-4" />
              <span>Request an Appointment</span>
            </button>
          </div>

          <p className="text-xs text-slate-400 pt-1">
            Serving residential homes, apartments, and light commercial properties across London.
          </p>

        </div>
      </div>
    </section>
  );
};
