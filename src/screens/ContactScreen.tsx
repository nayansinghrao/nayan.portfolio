import React, { useState, useEffect } from 'react';

export const ContactScreen: React.FC = () => {
  const [studioTime, setStudioTime] = useState('');
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [budget, setBudget] = useState('$1k – $3k');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    scope: '',
    message: '',
  });

  // Live IST Clock
  useEffect(() => {
    const updateTime = () => {
      try {
        const now = new Date();
        const formatter = new Intl.DateTimeFormat('en-US', {
          timeZone: 'Asia/Kolkata',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true,
        });
        setStudioTime(`${formatter.format(now)} IST (UTC+5:30)`);
      } catch (e) {
        setStudioTime('09:30 PM IST (UTC+5:30)');
      }
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('hello@nayansinghrao.design');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const budgetOptions = ['< $1k', '$1k – $3k', '$3k – $5k+', 'Flexible'];

  return (
    <div className="flex flex-col w-full animate-fadeIn">
      {/* Top Intro Section */}
      <section className="max-w-[1440px] w-full mx-auto px-5 lg:px-12 py-10 lg:py-16 flex flex-col gap-8">
        <div className="flex flex-col items-start gap-4 max-w-4xl">
          {/* Status Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#efeeeb] dark:bg-[#1f2125] shadow-xs border border-[#e5e2dc]/60 dark:border-[#2d3034] transition-colors">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-600"></span>
            </span>
            <span className="font-display text-xs uppercase tracking-wider text-[#1b1c1a] dark:text-[#f3f2ee] font-bold">
              Available for work • Q3/Q4 2025
            </span>
          </div>

          {/* Main Heading & Subtitle */}
          <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl text-[#1b1c1a] dark:text-[#f3f2ee] tracking-tight font-bold leading-tight transition-colors">
            Let's create something <span className="text-[#fd591e] italic">great</span> together.
          </h1>
          <p className="font-sans text-base sm:text-lg text-[#5f6368] dark:text-[#a2a09c] max-w-2xl leading-relaxed transition-colors">
            I'm actively open to full-time roles, freelance identity assignments, viral reels, and creative AI commercial collaborations worldwide.
          </p>
        </div>

        {/* Info Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-2">
          <div className="p-5 rounded-xl bg-[#f5f3f0] dark:bg-[#141517] flex flex-col gap-1 shadow-xs border border-[#e5e2dc]/60 dark:border-[#26282c] transition-colors">
            <span className="font-display text-xs uppercase text-[#5f6368] dark:text-[#a2a09c] font-semibold">Response Time</span>
            <span className="font-display text-xl sm:text-2xl font-bold text-[#1b1c1a] dark:text-[#f3f2ee]">&lt; 12 Hours</span>
          </div>
          <div className="p-5 rounded-xl bg-[#f5f3f0] dark:bg-[#141517] flex flex-col gap-1 shadow-xs border border-[#e5e2dc]/60 dark:border-[#26282c] transition-colors">
            <span className="font-display text-xs uppercase text-[#5f6368] dark:text-[#a2a09c] font-semibold">Capacity</span>
            <span className="font-display text-xl sm:text-2xl font-bold text-[#1b1c1a] dark:text-[#f3f2ee]">2 Slots Open</span>
          </div>
          <div className="p-5 rounded-xl bg-[#f5f3f0] dark:bg-[#141517] flex flex-col gap-1 shadow-xs border border-[#e5e2dc]/60 dark:border-[#26282c] transition-colors">
            <span className="font-display text-xs uppercase text-[#5f6368] dark:text-[#a2a09c] font-semibold">Base Location</span>
            <span className="font-display text-xl sm:text-2xl font-bold text-[#1b1c1a] dark:text-[#f3f2ee]">India (IST)</span>
          </div>
          <div className="p-5 rounded-xl bg-[#f5f3f0] dark:bg-[#141517] flex flex-col gap-1 shadow-xs border border-[#e5e2dc]/60 dark:border-[#26282c] transition-colors">
            <span className="font-display text-xs uppercase text-[#5f6368] dark:text-[#a2a09c] font-semibold">Coverage</span>
            <span className="font-display text-xl sm:text-2xl font-bold text-[#1b1c1a] dark:text-[#f3f2ee]">US • EU • APAC</span>
          </div>
        </div>
      </section>

      {/* Split Grid Section (5 Col / 7 Col) */}
      <section className="max-w-[1440px] w-full mx-auto px-5 lg:px-12 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Direct Contact & Availability */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="flex flex-col gap-1.5">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#fd591e]"></span>
                <span className="font-display text-xs uppercase tracking-wider text-[#5f6368] dark:text-[#a2a09c] font-bold">
                  Channels
                </span>
              </div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#1b1c1a] dark:text-[#f3f2ee] transition-colors">
                Get in touch directly
              </h2>
              <p className="font-sans text-sm text-[#5f6368] dark:text-[#a2a09c] leading-relaxed transition-colors">
                Have a specific brief or just exploring ideas? Reach out directly via any channel below. Typical reply time is under 12 hours.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              {/* Card 1: Email */}
              <div className="p-6 rounded-xl bg-[#f5f3f0] dark:bg-[#141517] flex flex-col justify-between gap-4 transition-all duration-300 hover:-translate-y-1 shadow-xs border border-[#e5e2dc]/60 dark:border-[#26282c]">
                <div className="flex items-start justify-between">
                  <div className="w-11 h-11 rounded-full bg-[#efeeeb] dark:bg-[#1f2125] flex items-center justify-center text-[#1b1c1a] dark:text-[#f3f2ee] transition-colors">
                    <span className="material-symbols-outlined text-[20px]">alternate_email</span>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-[#eae8e5] dark:bg-[#202226] text-[#1b1c1a] dark:text-[#f3f2ee] font-display text-xs font-semibold">
                    Primary
                  </span>
                </div>
                <div>
                  <span className="font-display text-xs text-[#5f6368] dark:text-[#a2a09c] uppercase font-semibold">
                    Work Inquiries & Briefs
                  </span>
                  <p className="font-display text-lg sm:text-xl font-bold text-[#1b1c1a] dark:text-[#f3f2ee] select-all mt-1">
                    hello@nayansinghrao.design
                  </p>
                </div>
                <div className="flex items-center gap-4 pt-1">
                  <a
                    className="inline-flex items-center gap-1 font-display text-xs font-bold text-[#fd591e] hover:text-[#ae3200] transition-colors"
                    href="mailto:hello@nayansinghrao.design"
                  >
                    <span>Send Email</span>
                    <span className="material-symbols-outlined text-[16px]">north_east</span>
                  </a>
                  <span className="text-[#c4c7c7] dark:text-[#424449]">•</span>
                  <button
                    onClick={handleCopyEmail}
                    className="font-display text-xs font-semibold text-[#5f6368] dark:text-[#a2a09c] hover:text-[#1b1c1a] dark:hover:text-[#f3f2ee] transition-colors cursor-pointer"
                  >
                    {copiedEmail ? 'Copied!' : 'Copy Address'}
                  </button>
                  {copiedEmail && (
                    <span className="text-emerald-600 dark:text-emerald-400 font-display text-xs font-bold animate-fadeIn">
                      ✓ Copied
                    </span>
                  )}
                </div>
              </div>

              {/* Card 2: WhatsApp */}
              <div className="p-6 rounded-xl bg-[#f5f3f0] dark:bg-[#141517] flex flex-col justify-between gap-4 transition-all duration-300 hover:-translate-y-1 shadow-xs border border-[#e5e2dc]/60 dark:border-[#26282c]">
                <div className="flex items-start justify-between">
                  <div className="w-11 h-11 rounded-full bg-[#efeeeb] dark:bg-[#1f2125] flex items-center justify-center text-[#1b1c1a] dark:text-[#f3f2ee] transition-colors">
                    <span className="material-symbols-outlined text-[20px]">chat</span>
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/70 text-emerald-800 dark:text-emerald-300 font-display text-xs font-semibold border border-transparent dark:border-emerald-800/40">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 dark:bg-emerald-400"></span>
                    Fastest Response
                  </span>
                </div>
                <div>
                  <span className="font-display text-xs text-[#5f6368] dark:text-[#a2a09c] uppercase font-semibold">
                    Instant Chat & Voice Notes
                  </span>
                  <p className="font-display text-lg sm:text-xl font-bold text-[#1b1c1a] dark:text-[#f3f2ee] mt-1">
                    +91 98765 43210
                  </p>
                </div>
                <a
                  className="inline-flex items-center gap-1 font-display text-xs font-bold text-[#fd591e] hover:text-[#ae3200] transition-colors"
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>Chat on WhatsApp</span>
                  <span className="material-symbols-outlined text-[16px]">north_east</span>
                </a>
              </div>

              {/* Card 3: Social & Folios */}
              <div className="p-6 rounded-xl bg-[#f5f3f0] dark:bg-[#141517] flex flex-col gap-4 shadow-xs border border-[#e5e2dc]/60 dark:border-[#26282c]">
                <span className="font-display text-xs text-[#5f6368] dark:text-[#a2a09c] uppercase font-semibold">
                  Online Folios & Networks
                </span>
                <div className="grid grid-cols-2 gap-3">
                  <a
                    className="p-3.5 rounded-lg bg-white dark:bg-[#1b1c20] flex items-center justify-between hover:bg-[#efeeeb] dark:hover:bg-[#23252a] transition-colors shadow-xs border border-[#e5e2dc]/60 dark:border-[#2d3034]"
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[18px] text-[#1b1c1a] dark:text-[#f3f2ee]">link</span>
                      <span className="font-display text-xs sm:text-sm font-semibold text-[#1b1c1a] dark:text-[#f3f2ee]">LinkedIn</span>
                    </div>
                    <span className="material-symbols-outlined text-[14px] text-[#5f6368] dark:text-[#a2a09c]">north_east</span>
                  </a>
                  <a
                    className="p-3.5 rounded-lg bg-white dark:bg-[#1b1c20] flex items-center justify-between hover:bg-[#efeeeb] dark:hover:bg-[#23252a] transition-colors shadow-xs border border-[#e5e2dc]/60 dark:border-[#2d3034]"
                    href="https://behance.net"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[18px] text-[#fd591e]">palette</span>
                      <span className="font-display text-xs sm:text-sm font-semibold text-[#1b1c1a] dark:text-[#f3f2ee]">Behance</span>
                    </div>
                    <span className="material-symbols-outlined text-[14px] text-[#5f6368] dark:text-[#a2a09c]">north_east</span>
                  </a>
                </div>
              </div>

              {/* Card 4: Location & Timezone with Live Clock */}
              <div className="p-6 rounded-xl bg-[#f5f3f0] dark:bg-[#141517] flex flex-col gap-4 shadow-xs border border-[#e5e2dc]/60 dark:border-[#26282c]">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[20px] text-[#fd591e]">schedule</span>
                    <span className="font-display text-xs uppercase text-[#5f6368] dark:text-[#a2a09c] font-bold">
                      Current Studio Time
                    </span>
                  </div>
                  <div className="px-3 py-1 rounded-full bg-[#efeeeb] dark:bg-[#202226] text-[#1b1c1a] dark:text-[#f3f2ee] font-display text-xs font-semibold border border-[#e5e2dc] dark:border-[#2d3034]">
                    {studioTime || 'IST (UTC+5:30)'}
                  </div>
                </div>
                <div>
                  <p className="font-display text-xl font-bold text-[#1b1c1a] dark:text-[#f3f2ee]">
                    Rajasthan, India
                  </p>
                  <p className="font-sans text-xs text-[#5f6368] dark:text-[#a2a09c] mt-1 leading-relaxed">
                    Working smoothly across US East/West Coast, Central Europe (CET), and APAC daytime slots.
                  </p>
                </div>
                <div className="p-3 rounded-lg bg-white dark:bg-[#1b1c20] flex items-center gap-2 border border-[#e5e2dc]/60 dark:border-[#2d3034]">
                  <span className="w-2 h-2 rounded-full bg-[#fd591e]"></span>
                  <span className="font-sans text-xs text-[#1b1c1a] dark:text-[#f3f2ee]">
                    Status: Accepting 2 new creative partnerships this month
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Project Inquiry Form */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="p-6 sm:p-10 rounded-2xl bg-white dark:bg-[#141517] shadow-xl flex flex-col gap-6 border border-[#e5e2dc] dark:border-[#26282c] transition-colors">
              <div className="flex flex-col gap-1 pb-1">
                <div className="inline-flex items-center gap-2">
                  <span className="font-display text-xs uppercase tracking-wider text-[#fd591e] font-bold">
                    Direct Inquiry
                  </span>
                  <span className="text-[#c4c7c7] dark:text-[#424449]">•</span>
                  <span className="font-sans text-xs text-[#5f6368] dark:text-[#a2a09c]">
                    Typical response &lt; 12 hrs
                  </span>
                </div>
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#1b1c1a] dark:text-[#f3f2ee] tracking-tight">
                  Send a project brief
                </h2>
                <p className="font-sans text-sm text-[#5f6368] dark:text-[#a2a09c] leading-relaxed">
                  Fill in the details of your concept, requirements, and projected release schedule.
                </p>
              </div>

              {isSubmitted ? (
                <div className="p-8 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-center flex flex-col items-center gap-3 animate-fadeIn">
                  <span className="material-symbols-outlined text-emerald-600 dark:text-emerald-400 text-[44px]">
                    check_circle
                  </span>
                  <h3 className="font-display text-xl font-bold text-emerald-900 dark:text-emerald-200">
                    Inquiry Received!
                  </h3>
                  <p className="font-sans text-sm text-emerald-800 dark:text-emerald-300 max-w-md">
                    Thank you, {formData.name || 'there'}! Your brief has been routed directly to Nayan. You will receive an assessment and scope estimate within 12 hours.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ name: '', email: '', scope: '', message: '' });
                    }}
                    className="mt-4 px-6 py-2.5 rounded-full bg-emerald-700 hover:bg-emerald-800 text-white font-display text-xs font-semibold cursor-pointer transition-colors"
                  >
                    Submit Another Brief
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  {/* Name & Email (2-col grid) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="font-display text-xs font-bold text-[#1b1c1a] dark:text-[#f3f2ee]">
                        Full Name <span className="text-[#fd591e]">*</span>
                      </label>
                      <input
                        className="w-full px-4 py-3 rounded-lg bg-[#f5f3f0] dark:bg-[#1b1c20] text-[#1b1c1a] dark:text-[#f3f2ee] font-sans text-sm placeholder:text-[#5f6368]/60 dark:placeholder:text-[#a2a09c]/50 focus:bg-white dark:focus:bg-[#202228] focus:outline-none focus:ring-1 focus:ring-[#fd591e] border border-[#e5e2dc] dark:border-[#2d3034] transition-all"
                        placeholder="e.g. Maya Sharma"
                        required
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="font-display text-xs font-bold text-[#1b1c1a] dark:text-[#f3f2ee]">
                        Email Address <span className="text-[#fd591e]">*</span>
                      </label>
                      <input
                        className="w-full px-4 py-3 rounded-lg bg-[#f5f3f0] dark:bg-[#1b1c20] text-[#1b1c1a] dark:text-[#f3f2ee] font-sans text-sm placeholder:text-[#5f6368]/60 dark:placeholder:text-[#a2a09c]/50 focus:bg-white dark:focus:bg-[#202228] focus:outline-none focus:ring-1 focus:ring-[#fd591e] border border-[#e5e2dc] dark:border-[#2d3034] transition-all"
                        placeholder="e.g. maya@company.com"
                        required
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                  </div>

                  {/* Project Type Dropdown */}
                  <div className="flex flex-col gap-1.5">
                    <label className="font-display text-xs font-bold text-[#1b1c1a] dark:text-[#f3f2ee]">
                      Project Scope / Assignment <span className="text-[#fd591e]">*</span>
                    </label>
                    <div className="relative">
                      <select
                        className="w-full px-4 py-3 rounded-lg bg-[#f5f3f0] dark:bg-[#1b1c20] text-[#1b1c1a] dark:text-[#f3f2ee] font-sans text-sm focus:bg-white dark:focus:bg-[#202228] focus:outline-none focus:ring-1 focus:ring-[#fd591e] border border-[#e5e2dc] dark:border-[#2d3034] appearance-none transition-colors cursor-pointer pr-10"
                        required
                        value={formData.scope}
                        onChange={(e) => setFormData({ ...formData, scope: e.target.value })}
                      >
                        <option value="" disabled className="bg-white dark:bg-[#1b1c20]">Select the primary deliverable...</option>
                        <option value="brand-identity" className="bg-white dark:bg-[#1b1c20]">Brand Identity & Visual Guidelines</option>
                        <option value="motion-reels" className="bg-white dark:bg-[#1b1c20]">Motion Graphics & Social Video Reels</option>
                        <option value="ai-commercials" className="bg-white dark:bg-[#1b1c20]">AI Video Ads & Concept Commercials</option>
                        <option value="packaging" className="bg-white dark:bg-[#1b1c20]">Packaging, Print & Spatial Label Design</option>
                        <option value="full-time" className="bg-white dark:bg-[#1b1c20]">Full-time Lead / Senior Designer Contract</option>
                        <option value="other" className="bg-white dark:bg-[#1b1c20]">Other Creative Collaboration</option>
                      </select>
                      <span className="material-symbols-outlined pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#5f6368] dark:text-[#a2a09c] text-[20px]">
                        unfold_more
                      </span>
                    </div>
                  </div>

                  {/* Budget Radios / Chips */}
                  <div className="flex flex-col gap-2">
                    <label className="font-display text-xs font-bold text-[#1b1c1a] dark:text-[#f3f2ee]">
                      Estimated Budget Range (USD)
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {budgetOptions.map((opt) => {
                        const isChecked = budget === opt;
                        return (
                          <button
                            type="button"
                            key={opt}
                            onClick={() => setBudget(opt)}
                            className={`p-3 rounded-lg text-center font-display text-xs sm:text-sm font-semibold transition-all cursor-pointer border ${
                              isChecked
                                ? 'bg-[#111111] dark:bg-[#fd591e] text-white border-[#111111] dark:border-[#fd591e] shadow-xs'
                                : 'bg-[#f5f3f0] dark:bg-[#1b1c20] text-[#1b1c1a] dark:text-[#f3f2ee] border-[#e5e2dc] dark:border-[#2d3034] hover:bg-[#efeeeb] dark:hover:bg-[#24262c]'
                            }`}
                          >
                            {opt}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Project Details Textarea */}
                  <div className="flex flex-col gap-1.5">
                    <label className="font-display text-xs font-bold text-[#1b1c1a] dark:text-[#f3f2ee]">
                      Project Details & Objectives <span className="text-[#fd591e]">*</span>
                    </label>
                    <textarea
                      className="w-full px-4 py-3 rounded-lg bg-[#f5f3f0] dark:bg-[#1b1c20] text-[#1b1c1a] dark:text-[#f3f2ee] font-sans text-sm placeholder:text-[#5f6368]/60 dark:placeholder:text-[#a2a09c]/50 focus:bg-white dark:focus:bg-[#202228] focus:outline-none focus:ring-1 focus:ring-[#fd591e] border border-[#e5e2dc] dark:border-[#2d3034] transition-colors resize-y"
                      placeholder="Tell me about your brand, primary goals, target audience, references, and targeted launch date..."
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    ></textarea>
                  </div>

                  {/* Action Area */}
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                    <button
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#fd591e] text-white font-display text-sm font-semibold hover:bg-[#ae3200] transition-colors duration-200 shadow-md cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
                      type="submit"
                    >
                      <span>Send Message</span>
                      <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                    </button>
                    <div className="flex items-center gap-1.5 text-[#5f6368] dark:text-[#a2a09c] font-sans text-xs">
                      <span className="material-symbols-outlined text-[16px] text-emerald-600 dark:text-emerald-400">lock</span>
                      <span>100% confidential. No spam, ever.</span>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Bottom High-Impact Banner */}
      <section className="max-w-[1440px] w-full mx-auto px-5 lg:px-12 pb-16">
        <div className="rounded-2xl bg-[#111111] dark:bg-[#16171a] text-white p-8 sm:p-14 relative overflow-hidden shadow-2xl border border-transparent dark:border-[#26282c]">
          <div className="absolute -right-20 -bottom-20 w-96 h-96 rounded-full bg-[#fd591e]/20 blur-3xl pointer-events-none"></div>
          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="flex flex-col gap-2 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white font-display text-xs uppercase tracking-wider backdrop-blur-md w-fit">
                <span className="material-symbols-outlined text-[14px] text-[#fd591e]">bolt</span>
                <span>Let's build something ambitious</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl tracking-tight text-white font-bold">
                Have a project in mind? Hire me
              </h2>
              <p className="font-sans text-sm sm:text-base text-white/70 leading-relaxed">
                Skip the form and start an immediate conversation on WhatsApp or schedule a quick 15-minute discovery call to align on scope.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full lg:w-auto">
              <a
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#fd591e] text-white font-display text-sm font-semibold hover:bg-[#ae3200] transition-colors duration-200 cursor-pointer shadow-md"
                href="https://wa.me/919876543210"
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="material-symbols-outlined text-[18px]">chat</span>
                <span>Chat on WhatsApp</span>
              </a>
              <a
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-display text-sm font-semibold transition-colors duration-200 backdrop-blur-sm cursor-pointer border border-white/10"
                href="mailto:hello@nayansinghrao.design?subject=Discovery%20Call%20Request"
              >
                <span className="material-symbols-outlined text-[18px]">calendar_today</span>
                <span>Schedule a 15-min Call</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
