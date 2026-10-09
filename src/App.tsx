/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustStrip } from './components/TrustStrip';
import { ServicesSection } from './components/ServicesSection';
import { EmergencyBanner } from './components/EmergencyBanner';
import { WhyChooseUs } from './components/WhyChooseUs';
import { HowItWorks } from './components/HowItWorks';
import { ReviewSection } from './components/ReviewSection';
import { AreasCovered } from './components/AreasCovered';
import { ContactForm } from './components/ContactForm';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { AIAssistant } from './components/AIAssistant';
import { OpeningAnimation } from './components/OpeningAnimation';

export default function App() {
  const [selectedServiceForQuote, setSelectedServiceForQuote] = useState<string | undefined>(undefined);
  const [isAnimationFinished, setIsAnimationFinished] = useState(false);

  const scrollToContact = (serviceTitle?: string) => {
    if (serviceTitle) {
      setSelectedServiceForQuote(serviceTitle);
    }
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F4F7FA] text-[#081526] selection:bg-[#168BFA] selection:text-white relative">
      {/* Website Opening Animation */}
      <OpeningAnimation onComplete={() => setIsAnimationFinished(true)} />

      {/* Navigation Header */}
      <Header onQuoteClick={() => scrollToContact()} />

      {/* Main Content Flow */}
      <main className={`flex-1 transition-opacity duration-700 ${isAnimationFinished ? 'opacity-100' : 'opacity-95'}`}>
        {/* 1. Hero Section */}
        <Hero onQuoteClick={() => scrollToContact()} />

        {/* 2. Trust Strip */}
        <TrustStrip />

        {/* 3. Services Section */}
        <ServicesSection onQuoteClick={(serviceTitle) => scrollToContact(serviceTitle)} />

        {/* 4. Emergency Conversion Banner */}
        <EmergencyBanner onQuoteClick={() => scrollToContact()} />

        {/* 5. Why Choose London Plumbers */}
        <WhyChooseUs onQuoteClick={() => scrollToContact()} />

        {/* 6. How It Works */}
        <HowItWorks />

        {/* 7. Reviews Section */}
        <ReviewSection />

        {/* 8. Areas Covered */}
        <AreasCovered />

        {/* 9. Contact & Quote Form */}
        <ContactForm initialService={selectedServiceForQuote} />

        {/* 10. FAQs Section */}
        <FaqSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating AI Customer Support Assistant */}
      <AIAssistant onQuoteClick={(serviceTitle) => scrollToContact(serviceTitle)} />
    </div>
  );
}
