import React, { useState } from 'react';

interface QuickHireModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigateContact: () => void;
}

export const QuickHireModal: React.FC<QuickHireModalProps> = ({
  isOpen,
  onClose,
  onNavigateContact,
}) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'brand-identity',
    budget: '$1k - $3k',
    message: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div 
        className="relative w-full max-w-lg bg-[#fbf9f6] dark:bg-[#141517] rounded-2xl shadow-2xl border border-[#e5e2dc] dark:border-[#26282c] p-6 sm:p-8 animate-fadeIn transition-colors"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#efeeeb] dark:bg-[#202226] hover:bg-[#eae8e5] dark:hover:bg-[#272a30] text-[#1b1c1a] dark:text-[#f3f2ee] flex items-center justify-center transition-colors cursor-pointer border border-transparent dark:border-[#2d3034]"
        >
          <span className="material-symbols-outlined text-[18px]">close</span>
        </button>

        <h3 className="font-display text-2xl font-bold tracking-tight text-[#1b1c1a] dark:text-[#f3f2ee]">
          Let's work together.
        </h3>
        <p className="font-sans text-sm text-[#5f6368] dark:text-[#a2a09c] mt-1 mb-6">
          Have a project brief or inquiry? Send a quick message below.
        </p>

        {submitted ? (
          <div className="p-6 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-center flex flex-col items-center gap-2">
            <span className="material-symbols-outlined text-emerald-600 dark:text-emerald-400 text-[36px]">
              check_circle
            </span>
            <h4 className="font-display font-bold text-lg text-emerald-900 dark:text-emerald-200">
              Brief Received!
            </h4>
            <p className="font-sans text-xs text-emerald-700 dark:text-emerald-300">
              Thanks for reaching out! Nayan will review your message shortly.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <label className="block font-display text-xs font-semibold text-[#1b1c1a] dark:text-[#f3f2ee] mb-1">
                Your Name *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Maya Sharma"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-lg bg-[#f5f3f0] dark:bg-[#1a1b1f] border border-[#e5e2dc] dark:border-[#2d3034] font-sans text-sm text-[#1b1c1a] dark:text-[#f3f2ee] placeholder:text-[#5f6368]/60 dark:placeholder:text-[#a2a09c]/50 focus:bg-white dark:focus:bg-[#202228] focus:outline-none focus:border-[#fd591e] transition-colors"
              />
            </div>

            <div>
              <label className="block font-display text-xs font-semibold text-[#1b1c1a] dark:text-[#f3f2ee] mb-1">
                Work Email *
              </label>
              <input
                type="email"
                required
                placeholder="Work email address"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-lg bg-[#f5f3f0] dark:bg-[#1a1b1f] border border-[#e5e2dc] dark:border-[#2d3034] font-sans text-sm text-[#1b1c1a] dark:text-[#f3f2ee] placeholder:text-[#5f6368]/60 dark:placeholder:text-[#a2a09c]/50 focus:bg-white dark:focus:bg-[#202228] focus:outline-none focus:border-[#fd591e] transition-colors"
              />
            </div>

            <div>
              <label className="block font-display text-xs font-semibold text-[#1b1c1a] dark:text-[#f3f2ee] mb-1">
                Primary Deliverable
              </label>
              <select
                value={formData.projectType}
                onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-lg bg-[#f5f3f0] dark:bg-[#1a1b1f] border border-[#e5e2dc] dark:border-[#2d3034] font-sans text-sm text-[#1b1c1a] dark:text-[#f3f2ee] focus:bg-white dark:focus:bg-[#202228] focus:outline-none focus:border-[#fd591e] transition-colors cursor-pointer"
              >
                <option value="brand-identity" className="bg-white dark:bg-[#1a1b1f]">Brand Identity & Styleguide</option>
                <option value="motion-reels" className="bg-white dark:bg-[#1a1b1f]">Reels & Kinetic Motion Graphics</option>
                <option value="ai-ads" className="bg-white dark:bg-[#1a1b1f]">AI Video Ads</option>
                <option value="packaging" className="bg-white dark:bg-[#1a1b1f]">Packaging & Retail Labels</option>
                <option value="amazon-a-plus" className="bg-white dark:bg-[#1a1b1f]">Amazon A+ E-Commerce Suite</option>
              </select>
            </div>

            <div>
              <label className="block font-display text-xs font-semibold text-[#1b1c1a] dark:text-[#f3f2ee] mb-1">
                Brief / Goals
              </label>
              <textarea
                rows={3}
                required
                placeholder="Tell me about your product, expected timeline, and vision..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-lg bg-[#f5f3f0] dark:bg-[#1a1b1f] border border-[#e5e2dc] dark:border-[#2d3034] font-sans text-sm text-[#1b1c1a] dark:text-[#f3f2ee] placeholder:text-[#5f6368]/60 dark:placeholder:text-[#a2a09c]/50 focus:bg-white dark:focus:bg-[#202228] focus:outline-none focus:border-[#fd591e] transition-colors"
              ></textarea>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <button
                type="submit"
                className="w-full py-3 px-6 rounded-full bg-[#fd591e] hover:bg-[#ae3200] text-white font-display text-sm font-semibold flex items-center justify-center gap-1.5 shadow-md cursor-pointer transition-colors"
              >
                <span>Send Brief</span>
                <span className="material-symbols-outlined text-[16px]">send</span>
              </button>
            </div>

            <button
              type="button"
              onClick={() => {
                onClose();
                onNavigateContact();
              }}
              className="text-center font-display text-xs text-[#5f6368] dark:text-[#a2a09c] hover:text-[#1b1c1a] dark:hover:text-[#f3f2ee] underline cursor-pointer mt-1"
            >
              Or open complete project planner on Contact page →
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
