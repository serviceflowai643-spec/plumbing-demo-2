import React from 'react';
import { Star, ExternalLink, CheckCircle } from 'lucide-react';
import { REVIEWS, BUSINESS_INFO } from '../data/companyData';

export const ReviewSection: React.FC = () => {
  return (
    <section id="reviews" className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Rating Overview Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="text-xs sm:text-sm font-bold tracking-wider text-[#168BFA] uppercase mb-2">
            PROVEN COMMUNITY REPUTATION
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#081526] tracking-tight">
            Trusted by Customers Across London
          </h2>
          
          {/* Visual Rating Lockup with Google Branding */}
          <div className="mt-5 inline-flex flex-wrap items-center justify-center gap-3 bg-[#F4F7FA] px-5 py-3 rounded-2xl border border-slate-200">
            {/* Google G Logo SVG */}
            <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"/>
              <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"/>
              <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.14-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.98 0 12s.45 3.82 1.25 5.42l4.03-3.15z"/>
              <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"/>
            </svg>

            <div className="flex items-center gap-1 text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>

            <div className="flex items-center gap-1.5 text-xs font-semibold text-[#081526]">
              <span className="text-base font-bold tabular-nums">4.7 / 5</span>
              <span className="text-[#68778A]">Google Rating</span>
              <span className="text-[#68778A]">·</span>
              <span className="text-[#68778A]">189 Google Reviews</span>
            </div>
          </div>
        </div>

        {/* 3 Genuine Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {REVIEWS.map((rev) => (
            <div
              key={rev.id}
              className="bg-[#F4F7FA] rounded-2xl p-6 border border-slate-200/90 flex flex-col justify-between hover:border-slate-300 transition-colors"
            >
              <div>
                {/* Header: Stars & Date */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-0.5 text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] text-[#68778A]">{rev.date}</span>
                </div>

                {/* Review Theme Header */}
                <h3 className="text-sm font-bold text-[#081526] mb-2 leading-snug">
                  {rev.theme}
                </h3>

                {/* Review Summary */}
                <p className="text-xs text-[#081526]/85 leading-relaxed">
                  "{rev.summary}"
                </p>
              </div>

              {/* Author & Verification Footer */}
              <div className="pt-4 mt-4 border-t border-slate-200 flex items-center justify-between text-xs">
                <div className="flex flex-col">
                  <span className="font-semibold text-[#081526]">{rev.author}</span>
                  <span className="text-[11px] text-[#68778A]">{rev.location}</span>
                </div>
                <div className="flex items-center gap-1 text-[11px] text-[#168BFA] font-medium">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>Verified feedback</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA to Google Reviews */}
        <div className="mt-10 text-center">
          <a
            href={BUSINESS_INFO.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-bold text-[#081526] bg-white hover:bg-slate-50 border border-slate-300 shadow-2xs transition-colors"
          >
            <span>Read Google Reviews</span>
            <ExternalLink className="w-3.5 h-3.5 text-[#68778A]" />
          </a>
        </div>

      </div>
    </section>
  );
};
