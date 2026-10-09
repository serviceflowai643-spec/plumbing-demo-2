import React from 'react';
import { Clock, ShieldCheck, PoundSterling, Building2 } from 'lucide-react';

export const TrustStrip: React.FC = () => {
  const items = [
    {
      icon: Clock,
      title: 'Available 24/7 for Emergencies',
      description: 'Day or night callouts across Greater London'
    },
    {
      icon: ShieldCheck,
      title: 'Gas Safe Registered Engineers',
      description: 'Certified domestic boiler & heating specialists'
    },
    {
      icon: PoundSterling,
      title: 'Clear, Upfront Pricing',
      description: 'Transparent quotes explained before work begins'
    },
    {
      icon: Building2,
      title: 'Residential & Commercial Services',
      description: 'From family homes to local business premises'
    }
  ];

  return (
    <section className="bg-white border-b border-slate-200 py-6 sm:py-8 shadow-xs" aria-label="Company Trust Signals">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index} 
                className="flex items-start gap-3.5 p-2 rounded-xl transition-colors hover:bg-[#F4F7FA]"
              >
                <div className="w-10 h-10 rounded-lg bg-[#F4F7FA] border border-slate-200/80 flex items-center justify-center text-[#168BFA] shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <h3 className="text-sm font-bold text-[#081526] leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#68778A] mt-1 leading-normal">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
