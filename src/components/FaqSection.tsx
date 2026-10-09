import React, { useState } from 'react';
import { ChevronDown, Phone } from 'lucide-react';
import { FAQS, BUSINESS_INFO } from '../data/companyData';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 sm:py-24 bg-[#F4F7FA] border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="text-xs sm:text-sm font-bold tracking-wider text-[#168BFA] uppercase mb-2">
            FREQUENT QUESTIONS
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#081526] tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-base text-[#68778A]">
            Answers to common enquiries about our London plumbing, heating, and emergency services.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-2xs transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#168BFA]"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-bold text-[#081526]">
                    {faq.question}
                  </span>
                  <div className={`w-7 h-7 rounded-full bg-[#F4F7FA] flex items-center justify-center shrink-0 text-[#168BFA] transition-transform duration-200 ${isOpen ? 'rotate-180 bg-[#168BFA] text-white' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#68778A] leading-relaxed border-t border-slate-100 bg-[#F4F7FA]/30">
                    <p>{faq.answer}</p>
                    {idx === 0 || idx === 6 ? (
                      <div className="mt-3 pt-3 border-t border-slate-200/80 flex items-center gap-2 text-xs font-semibold text-[#081526]">
                        <span>Emergency Line:</span>
                        <a href={BUSINESS_INFO.phoneTel} className="text-[#168BFA] hover:underline flex items-center gap-1">
                          <Phone className="w-3.5 h-3.5" />
                          <span>07796 345453 (24/7)</span>
                        </a>
                      </div>
                    ) : null}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
