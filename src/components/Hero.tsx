import React from 'react';
import { Phone, ArrowRight, Star, Clock, ShieldCheck, Home } from 'lucide-react';
import { BUSINESS_INFO } from '../data/companyData';

interface HeroProps {
  onQuoteClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onQuoteClick }) => {
  return (
    <section className="relative bg-[#081526] text-white overflow-hidden pt-8 pb-16 lg:py-20 border-b border-[#10263D]">
      {/* Subtle radial ambient glow */}
      <div 
        className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#168BFA]/10 blur-[140px] pointer-events-none rounded-full" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Proposition & Actions */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
            
            {/* Small Trust Label (No pill box, clean typographic kicker) */}
            <div className="flex items-center gap-2 text-xs sm:text-sm font-bold tracking-wider text-[#168BFA] uppercase">
              <span className="w-2 h-0.5 bg-[#168BFA]" aria-hidden="true" />
              <span>TRUSTED PLUMBING & HEATING SERVICES IN LONDON</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15] text-balance">
              London Plumbers You Can Rely On, Day or Night.
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              From emergency leaks and blocked drains to boiler breakdowns and heating repairs, our team helps homes and businesses across London get things flowing again.
            </p>

            {/* Social Proof & Credentials Strip */}
            <div className="pt-2 pb-1 grid grid-cols-2 sm:grid-cols-4 gap-4 border-y border-[#10263D]/80">
              <div className="flex flex-col py-2">
                <div className="flex items-center gap-1 text-amber-400">
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                  <span className="text-base font-bold text-white tabular-nums">4.7 / 5</span>
                </div>
                <span className="text-xs text-slate-400">189 Google reviews</span>
              </div>

              <div className="flex flex-col py-2">
                <div className="flex items-center gap-1.5 text-[#168BFA]">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm font-bold text-white">24/7 Available</span>
                </div>
                <span className="text-xs text-slate-400">Emergency dispatch</span>
              </div>

              <div className="flex flex-col py-2">
                <div className="flex items-center gap-1.5 text-[#168BFA]">
                  <ShieldCheck className="w-4 h-4" />
                  <span className="text-sm font-bold text-white">Gas Safe</span>
                </div>
                <span className="text-xs text-slate-400">Registered engineers</span>
              </div>

              <div className="flex flex-col py-2">
                <div className="flex items-center gap-1.5 text-[#168BFA]">
                  <Home className="w-4 h-4" />
                  <span className="text-sm font-bold text-white">Residential</span>
                </div>
                <span className="text-xs text-slate-400">& Commercial care</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <a
                href={BUSINESS_INFO.phoneTel}
                className="inline-flex items-center justify-center gap-3 px-6 py-4 rounded-xl text-base font-bold text-white bg-[#168BFA] hover:bg-[#1272CE] active:bg-[#0D62B3] shadow-lg shadow-[#168BFA]/30 transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#168BFA] focus:ring-offset-[#081526]"
              >
                <Phone className="w-5 h-5 animate-pulse" />
                <span>Call Now — 07796 345453</span>
              </a>

              <button
                type="button"
                onClick={onQuoteClick}
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-base font-semibold text-slate-200 bg-[#10263D] hover:bg-[#173859] hover:text-white border border-slate-700/60 transition-all focus:outline-none focus:ring-2 focus:ring-slate-400"
              >
                <span>Request a Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Reassurance Line */}
            <p className="text-xs sm:text-sm text-slate-400 pt-1">
              Clear communication • Professional workmanship • Convenient appointments
            </p>

          </div>

          {/* Right Column: High-Quality Realistic Boiler Engineer Image */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-[#10263D] shadow-2xl bg-[#10263D]">
              <img
                src="/src/assets/images/hero_boiler_engineer_1791529021286.jpg"
                alt="Gas Safe registered London heating engineer inspecting a domestic boiler and checking pressure gauge in a London home"
                className="w-full h-[400px] sm:h-[480px] lg:h-[500px] object-cover object-center"
                loading="eager"
                referrerPolicy="no-referrer"
              />

              {/* Natural subtle gradient frame */}
              <div 
                className="absolute inset-0 bg-gradient-to-t from-[#081526]/80 via-transparent to-transparent pointer-events-none" 
                aria-hidden="true" 
              />

              {/* Discreet photo verification caption */}
              <div className="absolute bottom-4 left-4 right-4 bg-[#081526]/85 backdrop-blur-md rounded-xl p-3 border border-slate-700/50 flex items-center justify-between text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#168BFA]" />
                  <span className="font-semibold text-white">Domestic Boiler Diagnostic</span>
                </div>
                <span className="text-slate-400">London Residential Service</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
