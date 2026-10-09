import React from 'react';
import { PhoneCall, ClipboardList, CalendarCheck2, CheckCircle } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Tell Us the Problem',
      desc: 'Describe your plumbing, heating or drainage issue.',
      icon: PhoneCall
    },
    {
      num: '02',
      title: 'Discuss Your Options',
      desc: 'The team can discuss the required work and arrange a suitable appointment.',
      icon: ClipboardList
    },
    {
      num: '03',
      title: 'Arrange a Visit',
      desc: 'Confirm the appointment details with the business.',
      icon: CalendarCheck2
    },
    {
      num: '04',
      title: 'Get the Problem Addressed',
      desc: 'The engineer assesses the issue and explains the work required.',
      icon: CheckCircle
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#F4F7FA] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs sm:text-sm font-bold tracking-wider text-[#168BFA] uppercase mb-2">
            STRAIGHTFORWARD SERVICE PROCESS
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#081526] tracking-tight">
            How It Works
          </h2>
          <p className="mt-3 text-base text-[#68778A]">
            A transparent four-step process from your initial enquiry to complete peace of mind.
          </p>
        </div>

        {/* 4-Step Timeline */}
        <div className="relative">
          {/* Connecting line (Desktop) */}
          <div 
            className="hidden lg:block absolute top-1/2 left-12 right-12 h-0.5 bg-slate-300 -translate-y-8 z-0" 
            aria-hidden="true" 
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div 
                  key={idx}
                  className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-xs flex flex-col items-center text-center relative group hover:border-[#168BFA] transition-colors"
                >
                  {/* Step Badge */}
                  <div className="w-14 h-14 rounded-full bg-[#081526] text-white flex items-center justify-center font-extrabold text-base mb-4 border-4 border-white shadow-md group-hover:bg-[#168BFA] transition-colors">
                    {step.num}
                  </div>

                  <div className="w-8 h-8 rounded-lg bg-[#F4F7FA] text-[#168BFA] flex items-center justify-center mb-3">
                    <Icon className="w-4 h-4" />
                  </div>

                  <h3 className="text-base font-bold text-[#081526]">
                    {step.title}
                  </h3>

                  <p className="mt-2 text-xs text-[#68778A] leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-10 text-center">
          <p className="text-xs text-slate-500 max-w-xl mx-auto">
            Note: Submitting an online quote request connects you directly with our team to discuss your issue; appointment dates and arrival times are confirmed directly with our dispatch staff.
          </p>
        </div>

      </div>
    </section>
  );
};
