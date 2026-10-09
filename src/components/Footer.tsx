import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, ShieldCheck, X } from 'lucide-react';
import { BUSINESS_INFO, SERVICES } from '../data/companyData';

export const Footer: React.FC = () => {
  const [legalModal, setLegalModal] = useState<'privacy' | 'cookies' | 'terms' | null>(null);

  return (
    <>
      <footer className="bg-[#081526] text-slate-300 pt-16 pb-24 sm:pb-16 border-t border-[#10263D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-[#10263D]">
            
            {/* Column 1: Brand & Overview (Col span 4) */}
            <div className="lg:col-span-4 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#168BFA] flex items-center justify-center text-white shadow-md">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M19.5 9.5c0-.83-.67-1.5-1.5-1.5h-1V6c0-2.21-1.79-4-4-4S9 3.79 9 6v2H8c-.83 0-1.5.67-1.5 1.5V11H5v2h1.5v1.5c0 .83.67 1.5 1.5 1.5h1V18c0 2.21 1.79 4 4 4s4-1.79 4-4v-2h1c.83 0 1.5-.67 1.5-1.5V13H21v-2h-1.5V9.5zM11 6c0-1.1.9-2 2-2s2 .9 2 2v2h-4V6zm4 12c0 1.1-.9 2-2 2s-2-.9-2-2v-2h4v2z" />
                  </svg>
                </div>
                <div>
                  <span className="text-lg font-extrabold text-white tracking-tight">LONDON PLUMBERS</span>
                  <p className="text-[10px] font-semibold tracking-wider text-[#168BFA] uppercase">PLUMBING • HEATING • DRAINAGE</p>
                </div>
              </div>

              <p className="text-xs text-slate-400 leading-relaxed pr-4">
                Established plumbing, heating, boiler repair, and drainage services serving residential homes and commercial clients across Greater London.
              </p>

              <div className="flex items-center gap-2 text-xs text-slate-300">
                <ShieldCheck className="w-4 h-4 text-[#168BFA]" />
                <span>Gas Safe Registered Engineers Available</span>
              </div>
            </div>

            {/* Column 2: Quick Links (Col span 2) */}
            <div className="lg:col-span-2 space-y-3">
              <h3 className="text-xs font-bold tracking-wider text-white uppercase">
                Quick Links
              </h3>
              <ul className="space-y-2 text-xs">
                <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
                <li><a href="#why-choose" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#reviews" className="hover:text-white transition-colors">Reviews</a></li>
                <li><a href="#areas" className="hover:text-white transition-colors">Areas Covered</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* Column 3: Core Services (Col span 3) */}
            <div className="lg:col-span-3 space-y-3">
              <h3 className="text-xs font-bold tracking-wider text-white uppercase">
                Services
              </h3>
              <ul className="space-y-2 text-xs">
                {SERVICES.slice(0, 6).map((service) => (
                  <li key={service.id}>
                    <a href="#services" className="hover:text-white transition-colors">
                      {service.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Contact Details (Col span 3) */}
            <div className="lg:col-span-3 space-y-3">
              <h3 className="text-xs font-bold tracking-wider text-white uppercase">
                Contact & Dispatch
              </h3>
              <div className="space-y-2.5 text-xs text-slate-400">
                <div className="flex items-start gap-2">
                  <Phone className="w-4 h-4 text-[#168BFA] shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-slate-400 text-[11px]">24/7 Telephone:</span>
                    <a href={BUSINESS_INFO.phoneTel} className="font-bold text-white hover:text-[#168BFA] transition-colors tabular-nums">
                      {BUSINESS_INFO.phoneDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <Mail className="w-4 h-4 text-[#168BFA] shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-slate-400 text-[11px]">Email:</span>
                    <a href={BUSINESS_INFO.emailMailto} className="text-white hover:text-[#168BFA] transition-colors">
                      {BUSINESS_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-[#168BFA] shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-slate-400 text-[11px]">Address:</span>
                    <span className="text-slate-300">{BUSINESS_INFO.address}</span>
                  </div>
                </div>

                <div className="flex items-start gap-2 pt-1">
                  <Clock className="w-4 h-4 text-[#168BFA] shrink-0 mt-0.5" />
                  <span className="text-slate-300 font-medium">24/7 Emergency Service</span>
                </div>
              </div>
            </div>

          </div>

          {/* Bottom Bar: Legal & Copyright */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
            <p>© 2026 London Plumbers. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <button 
                type="button" 
                onClick={() => setLegalModal('privacy')}
                className="hover:text-white transition-colors"
              >
                Privacy Policy
              </button>
              <button 
                type="button" 
                onClick={() => setLegalModal('cookies')}
                className="hover:text-white transition-colors"
              >
                Cookie Policy
              </button>
              <button 
                type="button" 
                onClick={() => setLegalModal('terms')}
                className="hover:text-white transition-colors"
              >
                Terms of Service
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Legal Modals */}
      {legalModal && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs"
          role="dialog"
          aria-modal="true"
        >
          <div className="bg-white text-slate-900 rounded-2xl max-w-lg w-full max-h-[85vh] overflow-y-auto p-6 shadow-2xl border border-slate-200">
            <div className="flex items-center justify-between pb-4 border-b border-slate-200 mb-4">
              <h3 className="text-lg font-bold text-[#081526]">
                {legalModal === 'privacy' && 'Privacy Policy'}
                {legalModal === 'cookies' && 'Cookie Policy'}
                {legalModal === 'terms' && 'Terms of Service'}
              </h3>
              <button
                type="button"
                onClick={() => setLegalModal(null)}
                aria-label="Close modal"
                className="p-1 rounded-md text-slate-500 hover:text-slate-900"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="text-xs text-slate-600 space-y-3 leading-relaxed">
              {legalModal === 'privacy' && (
                <>
                  <p><strong>London Plumbers</strong> respects your privacy. When you contact us or request a quote, we collect contact information (such as your name, telephone number, email, and postcode) solely for the purpose of communicating regarding your plumbing, heating, or drainage enquiry and coordinating engineer visits.</p>
                  <p>We do not sell, rent, or trade your personal information to third parties. Data is handled securely and stored only as long as necessary to complete your service request.</p>
                  <p>For any privacy-related queries, please write to enquiries@londonplumbers.com or visit 43 Sunnyside Road, London, W5 5HT.</p>
                </>
              )}
              {legalModal === 'cookies' && (
                <>
                  <p>This website uses essential technical cookies necessary for fundamental website security, session navigation, and responsive user preferences.</p>
                  <p>No intrusive third-party cross-site advertising trackers are deployed on this demonstration website.</p>
                </>
              )}
              {legalModal === 'terms' && (
                <>
                  <p><strong>Enquiry Terms:</strong> Submitting an online quote request or message through this website registers your enquiry with London Plumbers. It does not constitute a legally binding appointment until confirmed by our dispatch team.</p>
                  <p><strong>Emergency Callouts:</strong> For urgent water leaks, burst pipes, and heating breakdowns, customers are advised to contact our 24/7 telephone line directly on 07796 345453.</p>
                  <p><strong>Gas Safety Notice:</strong> In the event of a suspected gas leak or gas smell, do not operate switches and contact the National Gas Emergency Service immediately on 0800 111 999.</p>
                </>
              )}
            </div>

            <div className="pt-4 mt-4 border-t border-slate-200 text-right">
              <button
                type="button"
                onClick={() => setLegalModal(null)}
                className="px-4 py-2 rounded-lg bg-[#081526] text-white text-xs font-semibold hover:bg-[#10263D]"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
