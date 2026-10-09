import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle2, AlertCircle, Clock } from 'lucide-react';
import { BUSINESS_INFO, SERVICES } from '../data/companyData';
import { EnquiryFormData } from '../types';

interface ContactFormProps {
  initialService?: string;
}

export const ContactForm: React.FC<ContactFormProps> = ({ initialService }) => {
  const [formData, setFormData] = useState<EnquiryFormData>({
    fullName: '',
    phone: '',
    email: '',
    service: initialService || SERVICES[0].title,
    postcode: '',
    description: '',
    preferredDate: '',
    preferredTime: 'Morning (08:00 - 12:00)',
    consent: false
  });

  const [errors, setErrors] = useState<Partial<Record<keyof EnquiryFormData, string>>>({});
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [serverMessage, setServerMessage] = useState('');

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof EnquiryFormData, string>> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please enter your full name';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Please enter a contact telephone number';
    } else if (!/^[0-9+\s()-]{9,15}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Please enter a valid telephone number (e.g. 07796 345453)';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email address';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.postcode.trim()) {
      newErrors.postcode = 'Please enter your London postcode (e.g. W5 5HT)';
    }

    if (!formData.description.trim()) {
      newErrors.description = 'Please provide a brief description of the plumbing issue';
    }

    if (!formData.consent) {
      newErrors.consent = 'Please confirm consent to process your enquiry';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setStatus('loading');
    setServerMessage('');

    try {
      const response = await fetch('/api/enquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: formData.fullName,
          phone: formData.phone,
          email: formData.email,
          service: formData.service,
          postcode: formData.postcode,
          description: formData.description,
          preferredDate: formData.preferredDate || 'Earliest available',
          preferredTime: formData.preferredTime
        })
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus('success');
        setServerMessage(data.message || 'Your enquiry has been successfully registered with our London dispatch office.');
      } else {
        setStatus('error');
        setServerMessage(data.error || 'Unable to register enquiry right now. Please call 07796 345453 directly.');
      }
    } catch (err: any) {
      // In case backend is not reached, handle gracefully with true transparency
      setStatus('error');
      setServerMessage('Network connection issue. For immediate assistance, please call our emergency team directly on 07796 345453 or email enquiries@londonplumbers.com.');
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Direct Contact Details & Assistance */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="text-xs sm:text-sm font-bold tracking-wider text-[#168BFA] uppercase mb-2">
                GET IN TOUCH
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#081526] tracking-tight">
                Tell Us What You Need Help With
              </h2>
              <p className="mt-4 text-base text-[#68778A] leading-relaxed">
                Whether you have an emergency leak or would like an upfront quote for boiler repairs, bathroom plumbing or drainage, our team is ready to assist.
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-4">
              <a
                href={BUSINESS_INFO.phoneTel}
                className="flex items-start gap-4 p-4 rounded-xl bg-[#F4F7FA] border border-slate-200 hover:border-[#168BFA] transition-colors group"
              >
                <div className="w-12 h-12 rounded-lg bg-[#081526] text-[#168BFA] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-slate-500 font-semibold uppercase">Telephone (24/7 Available)</span>
                  <span className="text-lg font-extrabold text-[#081526] group-hover:text-[#168BFA] transition-colors tabular-nums">
                    {BUSINESS_INFO.phoneDisplay}
                  </span>
                  <span className="text-xs text-[#168BFA] mt-0.5 font-medium">Click to dial directly</span>
                </div>
              </a>

              <a
                href={BUSINESS_INFO.emailMailto}
                className="flex items-start gap-4 p-4 rounded-xl bg-[#F4F7FA] border border-slate-200 hover:border-[#168BFA] transition-colors group"
              >
                <div className="w-12 h-12 rounded-lg bg-[#081526] text-[#168BFA] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-slate-500 font-semibold uppercase">Email Enquiries</span>
                  <span className="text-base font-bold text-[#081526] group-hover:text-[#168BFA] transition-colors">
                    {BUSINESS_INFO.email}
                  </span>
                  <span className="text-xs text-[#168BFA] mt-0.5 font-medium">Click to send an email</span>
                </div>
              </a>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-[#F4F7FA] border border-slate-200">
                <div className="w-12 h-12 rounded-lg bg-[#081526] text-[#168BFA] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-slate-500 font-semibold uppercase">Registered Address</span>
                  <span className="text-sm font-bold text-[#081526]">
                    {BUSINESS_INFO.address}
                  </span>
                  <span className="text-xs text-slate-500 mt-1">Ealing, Greater London</span>
                </div>
              </div>
            </div>

            {/* Direct Call / Email buttons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={BUSINESS_INFO.phoneTel}
                className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-bold text-white bg-[#168BFA] hover:bg-[#1272CE] transition-colors shadow-sm"
              >
                <Phone className="w-4 h-4" />
                <span>Call Now</span>
              </a>
              <a
                href={BUSINESS_INFO.emailMailto}
                className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-bold text-[#081526] bg-[#F4F7FA] hover:bg-[#E2E8F0] border border-slate-300 transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>Send Email</span>
              </a>
            </div>

            <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200 text-xs text-amber-900 leading-relaxed">
              <p className="font-bold flex items-center gap-1.5 mb-1 text-amber-800">
                <AlertCircle className="w-4 h-4 text-amber-700" />
                <span>Urgent Emergency Notice</span>
              </p>
              For active leaks, burst pipes or sudden loss of heating in freezing weather, please phone us immediately on <strong>07796 345453</strong> rather than waiting for an email reply.
            </div>
          </div>

          {/* Right Column: Validated Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#F4F7FA] rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs">
              <h3 className="text-xl font-bold text-[#081526] mb-1">
                Request a Plumbing or Heating Quote
              </h3>
              <p className="text-xs text-[#68778A] mb-6">
                Fill in your details and our team will get in touch with an upfront price assessment.
              </p>

              {status === 'success' ? (
                <div className="p-6 bg-white rounded-xl border border-emerald-200 space-y-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div className="text-center space-y-2">
                    <h4 className="text-base font-bold text-slate-900">Enquiry Successfully Registered</h4>
                    <p className="text-xs text-slate-600 leading-relaxed max-w-md mx-auto">
                      {serverMessage}
                    </p>
                  </div>
                  <div className="pt-2 text-center">
                    <button
                      type="button"
                      onClick={() => {
                        setStatus('idle');
                        setFormData({
                          fullName: '',
                          phone: '',
                          email: '',
                          service: SERVICES[0].title,
                          postcode: '',
                          description: '',
                          preferredDate: '',
                          preferredTime: 'Morning (08:00 - 12:00)',
                          consent: false
                        });
                      }}
                      className="text-xs font-bold text-[#168BFA] hover:underline"
                    >
                      Submit another enquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  
                  {status === 'error' && (
                    <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-xs text-red-800 flex items-start gap-2">
                      <AlertCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                      <span>{serverMessage}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Full Name */}
                    <div>
                      <label htmlFor="fullName" className="block text-xs font-bold text-[#081526] mb-1">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="fullName"
                        type="text"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. David Walker"
                        className={`w-full px-3.5 py-2.5 rounded-xl border text-xs bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#168BFA] ${
                          errors.fullName ? 'border-red-400' : 'border-slate-300'
                        }`}
                      />
                      {errors.fullName && <p className="text-[11px] text-red-600 mt-1">{errors.fullName}</p>}
                    </div>

                    {/* Phone Number */}
                    <div>
                      <label htmlFor="phone" className="block text-xs font-bold text-[#081526] mb-1">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. 07796 345453"
                        className={`w-full px-3.5 py-2.5 rounded-xl border text-xs bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#168BFA] ${
                          errors.phone ? 'border-red-400' : 'border-slate-300'
                        }`}
                      />
                      {errors.phone && <p className="text-[11px] text-red-600 mt-1">{errors.phone}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-xs font-bold text-[#081526] mb-1">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. client@example.co.uk"
                        className={`w-full px-3.5 py-2.5 rounded-xl border text-xs bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#168BFA] ${
                          errors.email ? 'border-red-400' : 'border-slate-300'
                        }`}
                      />
                      {errors.email && <p className="text-[11px] text-red-600 mt-1">{errors.email}</p>}
                    </div>

                    {/* Postcode */}
                    <div>
                      <label htmlFor="postcode" className="block text-xs font-bold text-[#081526] mb-1">
                        Property Postcode <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="postcode"
                        type="text"
                        value={formData.postcode}
                        onChange={(e) => setFormData({ ...formData, postcode: e.target.value })}
                        placeholder="e.g. W5 5HT or UB6"
                        className={`w-full px-3.5 py-2.5 rounded-xl border text-xs bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#168BFA] ${
                          errors.postcode ? 'border-red-400' : 'border-slate-300'
                        }`}
                      />
                      {errors.postcode && <p className="text-[11px] text-red-600 mt-1">{errors.postcode}</p>}
                    </div>
                  </div>

                  {/* Service Required Dropdown (All 8 services) */}
                  <div>
                    <label htmlFor="service" className="block text-xs font-bold text-[#081526] mb-1">
                      Service Required <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="service"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#168BFA]"
                    >
                      {SERVICES.map((s) => (
                        <option key={s.id} value={s.title}>
                          {s.title}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Problem Description */}
                  <div>
                    <label htmlFor="description" className="block text-xs font-bold text-[#081526] mb-1">
                      Problem Description <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="description"
                      rows={3}
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      placeholder="Please describe the issue (e.g. boiler pressure drop, leak under sink, drain backing up, radiator cold at bottom)..."
                      className={`w-full px-3.5 py-2.5 rounded-xl border text-xs bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#168BFA] ${
                        errors.description ? 'border-red-400' : 'border-slate-300'
                      }`}
                    />
                    {errors.description && <p className="text-[11px] text-red-600 mt-1">{errors.description}</p>}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Preferred Date */}
                    <div>
                      <label htmlFor="preferredDate" className="block text-xs font-bold text-[#081526] mb-1">
                        Preferred Date
                      </label>
                      <input
                        id="preferredDate"
                        type="date"
                        value={formData.preferredDate}
                        onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#168BFA]"
                      />
                    </div>

                    {/* Preferred Time Window */}
                    <div>
                      <label htmlFor="preferredTime" className="block text-xs font-bold text-[#081526] mb-1">
                        Preferred Time Window
                      </label>
                      <select
                        id="preferredTime"
                        value={formData.preferredTime}
                        onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#168BFA]"
                      >
                        <option value="Morning (08:00 - 12:00)">Morning (08:00 - 12:00)</option>
                        <option value="Afternoon (12:00 - 16:00)">Afternoon (12:00 - 16:00)</option>
                        <option value="Evening (16:00 - 20:00)">Evening (16:00 - 20:00)</option>
                        <option value="Urgent 24/7 ASAP">Urgent 24/7 ASAP (Emergency)</option>
                      </select>
                    </div>
                  </div>

                  {/* Consent Checkbox */}
                  <div className="pt-2">
                    <label className="flex items-start gap-2.5 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.consent}
                        onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                        className="mt-0.5 rounded border-slate-300 text-[#168BFA] focus:ring-[#168BFA]"
                      />
                      <span className="text-[11px] text-slate-600 leading-normal">
                        I consent to London Plumbers processing my contact details to discuss and arrange a plumbing or heating quote in accordance with the privacy policy.
                      </span>
                    </label>
                    {errors.consent && <p className="text-[11px] text-red-600 mt-1">{errors.consent}</p>}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-[#168BFA] hover:bg-[#1272CE] active:bg-[#0D62B3] text-white font-bold text-sm shadow-md transition-all disabled:opacity-50"
                    >
                      {status === 'loading' ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          <span>Submitting Request...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Request a Quote</span>
                        </>
                      )}
                    </button>
                  </div>

                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
