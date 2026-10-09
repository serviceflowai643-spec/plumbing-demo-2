import React, { useState } from 'react';
import { Phone, Menu, X, Shield, ArrowRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/companyData';

interface HeaderProps {
  onQuoteClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onQuoteClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 bg-[#081526]/95 backdrop-blur-md border-b border-[#10263D] transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 gap-8">
            
            {/* Zone 1: Brand Lockup */}
            <a 
              href="/" 
              className="flex items-center gap-3.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#168BFA] rounded-md"
              aria-label="London Plumbers Homepage"
            >
              {/* Professional Plumbing Badge Icon */}
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#168BFA] to-[#0D62B3] flex items-center justify-center text-white shadow-lg shadow-[#168BFA]/20 group-hover:scale-105 transition-transform">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M19.5 9.5c0-.83-.67-1.5-1.5-1.5h-1V6c0-2.21-1.79-4-4-4S9 3.79 9 6v2H8c-.83 0-1.5.67-1.5 1.5V11H5v2h1.5v1.5c0 .83.67 1.5 1.5 1.5h1V18c0 2.21 1.79 4 4 4s4-1.79 4-4v-2h1c.83 0 1.5-.67 1.5-1.5V13H21v-2h-1.5V9.5zM11 6c0-1.1.9-2 2-2s2 .9 2 2v2h-4V6zm4 12c0 1.1-.9 2-2 2s-2-.9-2-2v-2h4v2z" />
                </svg>
              </div>

              <div className="flex flex-col">
                <span className="text-xl font-extrabold tracking-tight text-white whitespace-nowrap">
                  LONDON PLUMBERS
                </span>
                <span className="text-[10px] font-semibold tracking-wider text-[#168BFA] uppercase whitespace-nowrap">
                  PLUMBING • HEATING • DRAINAGE
                </span>
              </div>
            </a>

            {/* Zone 2: Navigation Links (Desktop) */}
            <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-300">
              <a 
                href="#services" 
                className="hover:text-white hover:underline underline-offset-4 decoration-[#168BFA] transition-colors whitespace-nowrap"
              >
                Services
              </a>
              <a 
                href="#why-choose" 
                className="hover:text-white hover:underline underline-offset-4 decoration-[#168BFA] transition-colors whitespace-nowrap"
              >
                About
              </a>
              <a 
                href="#reviews" 
                className="hover:text-white hover:underline underline-offset-4 decoration-[#168BFA] transition-colors whitespace-nowrap"
              >
                Reviews
              </a>
              <a 
                href="#areas" 
                className="hover:text-white hover:underline underline-offset-4 decoration-[#168BFA] transition-colors whitespace-nowrap"
              >
                Areas Covered
              </a>
              <a 
                href="#faq" 
                className="hover:text-white hover:underline underline-offset-4 decoration-[#168BFA] transition-colors whitespace-nowrap"
              >
                FAQs
              </a>
              <a 
                href="#contact" 
                className="hover:text-white hover:underline underline-offset-4 decoration-[#168BFA] transition-colors whitespace-nowrap"
              >
                Contact
              </a>
            </nav>

            {/* Zone 3: Primary CTA */}
            <div className="hidden sm:flex items-center gap-4 shrink-0">
              <a
                href={BUSINESS_INFO.phoneTel}
                className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-lg text-sm font-bold text-white bg-[#168BFA] hover:bg-[#1272CE] active:bg-[#0D62B3] shadow-md shadow-[#168BFA]/25 transition-all whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#168BFA] focus:ring-offset-[#081526]"
              >
                <Phone className="w-4 h-4 animate-pulse" />
                <span>Call an Emergency Plumber</span>
              </a>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex sm:hidden items-center">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle navigation menu"
                className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-[#10263D] transition-colors focus:outline-none focus:ring-2 focus:ring-[#168BFA]"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#081526] border-b border-[#10263D] px-4 pt-3 pb-6 space-y-3 animate-fadeIn">
            <div className="flex flex-col space-y-2 text-base font-medium text-slate-200">
              <a
                href="#services"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-md hover:bg-[#10263D] transition-colors"
              >
                Services
              </a>
              <a
                href="#why-choose"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-md hover:bg-[#10263D] transition-colors"
              >
                About
              </a>
              <a
                href="#reviews"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-md hover:bg-[#10263D] transition-colors"
              >
                Reviews (4.7 ★)
              </a>
              <a
                href="#areas"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-md hover:bg-[#10263D] transition-colors"
              >
                Areas Covered
              </a>
              <a
                href="#faq"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-md hover:bg-[#10263D] transition-colors"
              >
                FAQs
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-md hover:bg-[#10263D] transition-colors"
              >
                Contact
              </a>
            </div>

            <div className="pt-3 border-t border-[#10263D] flex flex-col gap-2.5">
              <a
                href={BUSINESS_INFO.phoneTel}
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-[#168BFA] text-white font-bold text-sm shadow-md"
              >
                <Phone className="w-4 h-4" />
                <span>Call 07796 345453 (24/7)</span>
              </a>
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onQuoteClick();
                }}
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-[#10263D] text-slate-100 font-semibold text-sm hover:bg-[#173859]"
              >
                <span>Request a Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Fixed Mobile Bottom Action Bar (Capped <= 15% Viewport Height) */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-30 bg-[#081526]/95 backdrop-blur-md border-t border-[#10263D] px-3 py-2 shadow-2xl">
        <div className="grid grid-cols-2 gap-2 max-w-md mx-auto">
          <a
            href={BUSINESS_INFO.phoneTel}
            className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg bg-[#168BFA] text-white font-bold text-xs tracking-wide shadow-md active:bg-[#1272CE]"
          >
            <Phone className="w-3.5 h-3.5 animate-pulse" />
            <span className="truncate">Call Plumber</span>
          </a>
          <button
            type="button"
            onClick={onQuoteClick}
            className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg bg-[#10263D] text-slate-100 font-semibold text-xs border border-slate-700/60 active:bg-[#173859]"
          >
            <span>Get a Quote</span>
          </button>
        </div>
      </div>
    </>
  );
};
