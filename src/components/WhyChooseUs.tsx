import React from 'react';
import { Clock, MessageSquare, PoundSterling, Award, ArrowRight } from 'lucide-react';

interface WhyChooseUsProps {
  onQuoteClick: () => void;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ onQuoteClick }) => {
  const benefits = [
    {
      icon: Clock,
      title: 'Emergency Availability',
      desc: 'Plumbing assistance is available around the clock for emergencies.'
    },
    {
      icon: MessageSquare,
      title: 'Clear Communication',
      desc: 'Explain the issue and understand the next steps before work begins.'
    },
    {
      icon: PoundSterling,
      title: 'Upfront Pricing',
      desc: 'Encourage customers to request a clear price before authorising work.'
    },
    {
      icon: Award,
      title: 'Experienced Professionals',
      desc: "Present the business's plumbing and heating expertise accurately."
    }
  ];

  return (
    <section id="why-choose" className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Authentic Portrait of London Plumbing Engineer */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-xl bg-slate-100">
              <img
                src="/src/assets/images/why_choose_plumber_1791529071217.jpg"
                alt="Gas Safe qualified London plumbing and heating engineer with digital service tablet beside modern domestic heating system"
                className="w-full h-[440px] sm:h-[500px] object-cover object-top"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div 
                className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" 
                aria-hidden="true" 
              />
              <div className="absolute bottom-4 left-4 right-4 bg-[#081526]/85 backdrop-blur-md rounded-xl p-3 border border-slate-700/60 text-white">
                <p className="text-xs font-semibold">Gas Safe Qualified Heating Specialists</p>
                <p className="text-[11px] text-slate-300">Dedicated local service based in Ealing, West London</p>
              </div>
            </div>
          </div>

          {/* Right Column: Benefits */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-8">
            <div>
              <div className="text-xs sm:text-sm font-bold tracking-wider text-[#168BFA] uppercase mb-2">
                WHY WORK WITH LONDON PLUMBERS
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#081526] tracking-tight">
                Professional Service. Practical Solutions. Peace of Mind.
              </h2>
              <p className="mt-4 text-base text-[#68778A] leading-relaxed">
                Whether you need swift relief from a burst pipe or planned maintenance on your central heating, our approach combines prompt attendance with clear, honest customer guidance.
              </p>
            </div>

            {/* 4 Benefits Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {benefits.map((benefit, idx) => {
                const Icon = benefit.icon;
                return (
                  <div key={idx} className="p-4 rounded-xl bg-[#F4F7FA] border border-slate-200/80">
                    <div className="w-10 h-10 rounded-lg bg-white text-[#168BFA] border border-slate-200 flex items-center justify-center shadow-2xs mb-3">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-sm font-bold text-[#081526]">
                      {benefit.title}
                    </h3>
                    <p className="mt-1.5 text-xs text-[#68778A] leading-normal">
                      {benefit.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Prominent Action Button */}
            <div className="pt-2">
              <button
                type="button"
                onClick={onQuoteClick}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-[#168BFA] hover:bg-[#1272CE] active:bg-[#0D62B3] shadow-md shadow-[#168BFA]/20 transition-all focus:outline-none focus:ring-2 focus:ring-[#168BFA]"
              >
                <span>Request a Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
