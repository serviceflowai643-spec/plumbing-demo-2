import React, { useState, useEffect } from 'react';
import { ShieldCheck, Phone } from 'lucide-react';
import { BUSINESS_INFO } from '../data/companyData';

interface OpeningAnimationProps {
  onComplete?: () => void;
}

export const OpeningAnimation: React.FC<OpeningAnimationProps> = ({ onComplete }) => {
  const [phase, setPhase] = useState<'intro' | 'exiting' | 'hidden'>('intro');
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setPhase('hidden');
      onComplete?.();
      return;
    }

    // Smooth progress counter
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 5;
      });
    }, 45);

    // Transition to exiting phase
    const exitTimer = setTimeout(() => {
      setPhase('exiting');
    }, 1250);

    // Completely remove from DOM
    const hideTimer = setTimeout(() => {
      setPhase('hidden');
      onComplete?.();
    }, 1800);

    return () => {
      clearInterval(interval);
      clearTimeout(exitTimer);
      clearTimeout(hideTimer);
    };
  }, [onComplete]);

  const handleDismiss = () => {
    setPhase('hidden');
    onComplete?.();
  };

  if (phase === 'hidden') return null;

  return (
    <div
      onClick={handleDismiss}
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#081526] transition-all duration-500 ease-in-out cursor-pointer select-none ${
        phase === 'exiting' ? 'opacity-0 -translate-y-6 pointer-events-none' : 'opacity-100 translate-y-0'
      }`}
      aria-label="London Plumbers Loading Presentation"
    >
      {/* Background ambient radial blue glow */}
      <div 
        className="absolute w-[500px] h-[500px] bg-[#168BFA]/15 blur-[120px] rounded-full pointer-events-none"
        aria-hidden="true" 
      />

      <div className="relative z-10 flex flex-col items-center max-w-sm px-6 text-center">
        
        {/* Animated Brand Emblem */}
        <div className="relative mb-6">
          {/* Pulsing ring */}
          <div className="absolute -inset-3 rounded-2xl bg-[#168BFA]/20 blur-md animate-pulse" />
          
          <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-[#168BFA] to-[#0D62B3] flex items-center justify-center text-white shadow-2xl shadow-[#168BFA]/40 scale-100 hover:scale-105 transition-transform">
            <svg className="w-9 h-9 sm:w-11 sm:h-11 fill-current" viewBox="0 0 24 24">
              <path d="M19.5 9.5c0-.83-.67-1.5-1.5-1.5h-1V6c0-2.21-1.79-4-4-4S9 3.79 9 6v2H8c-.83 0-1.5.67-1.5 1.5V11H5v2h1.5v1.5c0 .83.67 1.5 1.5 1.5h1V18c0 2.21 1.79 4 4 4s4-1.79 4-4v-2h1c.83 0 1.5-.67 1.5-1.5V13H21v-2h-1.5V9.5zM11 6c0-1.1.9-2 2-2s2 .9 2 2v2h-4V6zm4 12c0 1.1-.9 2-2 2s-2-.9-2-2v-2h4v2z" />
            </svg>
          </div>
        </div>

        {/* Brand Typography with subtle stagger */}
        <div className="space-y-1.5">
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
            LONDON PLUMBERS
          </h1>
          <p className="text-[11px] font-semibold tracking-widest text-[#168BFA] uppercase">
            PLUMBING • HEATING • DRAINAGE
          </p>
        </div>

        {/* Progress Bar & Status */}
        <div className="w-56 mt-8 space-y-2.5">
          <div className="w-full h-1 bg-[#10263D] rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-[#168BFA] to-cyan-400 transition-all duration-75 rounded-full"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="flex items-center justify-between text-[11px] text-slate-400">
            <span className="flex items-center gap-1 text-slate-300">
              <ShieldCheck className="w-3.5 h-3.5 text-[#168BFA]" />
              <span>24/7 Emergency Dispatch</span>
            </span>
            <span className="font-mono tabular-nums text-[#168BFA] font-bold">
              {progress}%
            </span>
          </div>
        </div>

        {/* Subtle quick dismiss hint */}
        <div className="mt-8 text-[11px] text-slate-500">
          <span>Click anywhere to continue</span>
        </div>

      </div>
    </div>
  );
};
