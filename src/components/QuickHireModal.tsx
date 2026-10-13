import React, { useState, useRef } from 'react';
import { isValidEmail } from './ContactForm';

interface QuickHireModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigateContact: () => void;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export const QuickHireModal: React.FC<QuickHireModalProps> = ({
  isOpen,
  onClose,
  onNavigateContact,
}) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitAttempted, setSubmitAttempted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'brand-identity',
    budget: '$1k - $3k',
    message: '',
  });
  const [honeypot, setHoneypot] = useState('');

  const [touched, setTouched] = useState<{
    name?: boolean;
    email?: boolean;
    message?: boolean;
  }>({});
  const [errors, setErrors] = useState<FormErrors>({});

  const nameInputRef = useRef<HTMLInputElement>(null);
  const emailInputRef = useRef<HTMLInputElement>(null);
  const messageInputRef = useRef<HTMLTextAreaElement>(null);

  if (!isOpen) return null;

  const validateField = (field: 'name' | 'email' | 'message', value: string): string | undefined => {
    const trimmed = value.trim();
    if (field === 'name') {
      if (!trimmed) return 'Full name is required';
      if (trimmed.length < 2) return 'Name must be at least 2 characters';
    }
    if (field === 'email') {
      if (!trimmed) return 'Email address is required';
      if (!isValidEmail(trimmed)) return 'Please enter a valid email address';
    }
    if (field === 'message') {
      if (!trimmed) return 'Project brief is required';
      if (trimmed.length < 10) return 'Please write at least 10 characters';
    }
    return undefined;
  };

  const validateAll = (): FormErrors => {
    const errs: FormErrors = {};
    const nameErr = validateField('name', formData.name);
    if (nameErr) errs.name = nameErr;

    const emailErr = validateField('email', formData.email);
    if (emailErr) errs.email = emailErr;

    const msgErr = validateField('message', formData.message);
    if (msgErr) errs.message = msgErr;

    return errs;
  };

  const handleChange = (field: 'name' | 'email' | 'message', val: string) => {
    setFormData((prev) => ({ ...prev, [field]: val }));
    if (touched[field] || submitAttempted) {
      const fieldError = validateField(field, val);
      setErrors((prev) => ({ ...prev, [field]: fieldError }));
    }
  };

  const handleBlur = (field: 'name' | 'email' | 'message') => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    const fieldError = validateField(field, formData[field]);
    setErrors((prev) => ({ ...prev, [field]: fieldError }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    setSubmitAttempted(true);
    setTouched({ name: true, email: true, message: true });

    const newErrors = validateAll();
    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      if (newErrors.name && nameInputRef.current) {
        nameInputRef.current.focus();
      } else if (newErrors.email && emailInputRef.current) {
        emailInputRef.current.focus();
      } else if (newErrors.message && messageInputRef.current) {
        messageInputRef.current.focus();
      }
      return;
    }

    // Honeypot spam trap
    if (honeypot && honeypot.trim().length > 0) {
      console.warn('[Anti-Spam] Bot detected in QuickHireModal honeypot. Discarding silently.');
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitted(true);
      }, 600);
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1000);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      projectType: 'brand-identity',
      budget: '$1k - $3k',
      message: '',
    });
    setHoneypot('');
    setTouched({});
    setErrors({});
    setSubmitAttempted(false);
    setSubmitted(false);
  };

  const nameHasError = Boolean((touched.name || submitAttempted) && errors.name);
  const emailHasError = Boolean((touched.email || submitAttempted) && errors.email);
  const messageHasError = Boolean((touched.message || submitAttempted) && errors.message);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div 
        className="relative w-full max-w-lg bg-[#fbf9f6] dark:bg-[#141517] rounded-2xl shadow-2xl border border-[#e5e2dc] dark:border-[#26282c] p-6 sm:p-8 animate-fadeIn transition-colors"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#efeeeb] dark:bg-[#202226] hover:bg-[#eae8e5] dark:hover:bg-[#272a30] text-[#1b1c1a] dark:text-[#f3f2ee] flex items-center justify-center transition-colors cursor-pointer border border-transparent dark:border-[#2d3034]"
          aria-label="Close dialog"
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
          <div
            role="status"
            aria-live="polite"
            className="p-6 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-center flex flex-col items-center gap-3 animate-fadeIn"
          >
            <div className="w-14 h-14 rounded-full bg-emerald-100 dark:bg-emerald-900/60 border border-emerald-200 dark:border-emerald-700 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shadow-xs">
              <span className="material-symbols-outlined text-[32px]">
                check_circle
              </span>
            </div>
            <h4 className="font-display font-bold text-xl text-emerald-950 dark:text-emerald-100">
              Inquiry Sent, {formData.name.trim()}! 🎉
            </h4>
            <p className="font-sans text-xs sm:text-sm text-emerald-800 dark:text-emerald-300 leading-relaxed max-w-sm">
              Thank you for reaching out! A confirmation has been registered for{' '}
              <strong>{formData.email.trim()}</strong>. Nayan will review your brief and respond within 24 hours.
            </p>

            <div className="flex items-center gap-2.5 pt-2">
              <button
                type="button"
                onClick={handleReset}
                className="px-4 py-2 rounded-xl bg-white dark:bg-[#202228] text-emerald-900 dark:text-emerald-200 border border-emerald-200 dark:border-emerald-700 font-display text-xs font-semibold hover:bg-emerald-50 dark:hover:bg-[#272a32] transition-colors cursor-pointer"
              >
                Send Another Brief
              </button>
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 rounded-xl bg-[#ff5a1f] text-white font-display text-xs font-semibold hover:bg-[#e04810] shadow-xs transition-colors cursor-pointer"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <form noValidate onSubmit={handleSubmit} aria-busy={isSubmitting} className="flex flex-col gap-4">
            {/* Honeypot anti-spam field */}
            <div
              className="absolute opacity-0 pointer-events-none -z-50 select-none h-0 w-0 overflow-hidden"
              style={{
                position: 'absolute',
                left: '-9999px',
                top: '-9999px',
                width: '1px',
                height: '1px',
                overflow: 'hidden',
                opacity: 0,
                pointerEvents: 'none',
              }}
              aria-hidden="true"
              tabIndex={-1}
            >
              <label htmlFor="modal-website-hp">Please leave this field empty</label>
              <input
                id="modal-website-hp"
                type="text"
                name="company_url_hp"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
                tabIndex={-1}
                autoComplete="off"
              />
            </div>

            {submitAttempted && Object.keys(errors).length > 0 && !isSubmitting && (
              <div
                role="alert"
                className="p-3 rounded-lg bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-900/60 text-xs text-red-700 dark:text-red-300 flex items-center gap-2"
              >
                <span className="material-symbols-outlined text-[18px] text-red-500 shrink-0">
                  error
                </span>
                <span>Please fill in all required fields with valid details.</span>
              </div>
            )}

            <div>
              <label
                htmlFor="modal-name"
                className="block font-display text-xs font-semibold text-[#1b1c1a] dark:text-[#f3f2ee] mb-1"
              >
                Your Name <span className="text-[#ff5a1f]">*</span>
              </label>
              <input
                ref={nameInputRef}
                id="modal-name"
                type="text"
                autoComplete="name"
                disabled={isSubmitting}
                aria-required="true"
                aria-invalid={nameHasError}
                aria-describedby={nameHasError ? 'modal-name-error' : undefined}
                placeholder="e.g. Maya Sharma"
                value={formData.name}
                onChange={(e) => handleChange('name', e.target.value)}
                onBlur={() => handleBlur('name')}
                className={`w-full px-3.5 py-2.5 rounded-lg bg-[#f5f3f0] dark:bg-[#1a1b1f] font-sans text-sm text-[#1b1c1a] dark:text-[#f3f2ee] placeholder:text-[#5f6368]/60 dark:placeholder:text-[#a2a09c]/50 focus:bg-white dark:focus:bg-[#202228] focus:outline-none transition-colors border disabled:opacity-70 disabled:cursor-not-allowed ${
                  nameHasError
                    ? 'border-red-500 focus:border-red-500'
                    : 'border-[#e5e2dc] dark:border-[#2d3034] focus:border-[#fd591e]'
                }`}
              />
              {nameHasError && (
                <p id="modal-name-error" role="alert" className="text-xs text-red-600 dark:text-red-400 mt-1 flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">error</span>
                  <span>{errors.name}</span>
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="modal-email"
                className="block font-display text-xs font-semibold text-[#1b1c1a] dark:text-[#f3f2ee] mb-1"
              >
                Work Email <span className="text-[#ff5a1f]">*</span>
              </label>
              <input
                ref={emailInputRef}
                id="modal-email"
                type="email"
                autoComplete="email"
                disabled={isSubmitting}
                aria-required="true"
                aria-invalid={emailHasError}
                aria-describedby={emailHasError ? 'modal-email-error' : undefined}
                placeholder="Work email address (e.g. name@company.com)"
                value={formData.email}
                onChange={(e) => handleChange('email', e.target.value)}
                onBlur={() => handleBlur('email')}
                className={`w-full px-3.5 py-2.5 rounded-lg bg-[#f5f3f0] dark:bg-[#1a1b1f] font-sans text-sm text-[#1b1c1a] dark:text-[#f3f2ee] placeholder:text-[#5f6368]/60 dark:placeholder:text-[#a2a09c]/50 focus:bg-white dark:focus:bg-[#202228] focus:outline-none transition-colors border disabled:opacity-70 disabled:cursor-not-allowed ${
                  emailHasError
                    ? 'border-red-500 focus:border-red-500'
                    : 'border-[#e5e2dc] dark:border-[#2d3034] focus:border-[#fd591e]'
                }`}
              />
              {emailHasError && (
                <p id="modal-email-error" role="alert" className="text-xs text-red-600 dark:text-red-400 mt-1 flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">error</span>
                  <span>{errors.email}</span>
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="modal-type"
                className="block font-display text-xs font-semibold text-[#1b1c1a] dark:text-[#f3f2ee] mb-1"
              >
                Primary Deliverable
              </label>
              <select
                id="modal-type"
                disabled={isSubmitting}
                value={formData.projectType}
                onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-lg bg-[#f5f3f0] dark:bg-[#1a1b1f] border border-[#e5e2dc] dark:border-[#2d3034] font-sans text-sm text-[#1b1c1a] dark:text-[#f3f2ee] focus:bg-white dark:focus:bg-[#202228] focus:outline-none focus:border-[#fd591e] transition-colors cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
              >
                <option value="brand-identity" className="bg-white dark:bg-[#1a1b1f]">Brand Identity & Styleguide</option>
                <option value="motion-reels" className="bg-white dark:bg-[#1a1b1f]">Reels & Kinetic Motion Graphics</option>
                <option value="ai-ads" className="bg-white dark:bg-[#1a1b1f]">AI Video Ads</option>
                <option value="packaging" className="bg-white dark:bg-[#1a1b1f]">Packaging & Retail Labels</option>
                <option value="amazon-a-plus" className="bg-white dark:bg-[#1a1b1f]">Amazon A+ E-Commerce Suite</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="modal-message"
                className="block font-display text-xs font-semibold text-[#1b1c1a] dark:text-[#f3f2ee] mb-1"
              >
                Brief / Goals <span className="text-[#ff5a1f]">*</span>
              </label>
              <textarea
                ref={messageInputRef}
                id="modal-message"
                rows={3}
                disabled={isSubmitting}
                aria-required="true"
                aria-invalid={messageHasError}
                aria-describedby={messageHasError ? 'modal-message-error' : undefined}
                placeholder="Tell me about your product, expected timeline, and vision..."
                value={formData.message}
                onChange={(e) => handleChange('message', e.target.value)}
                onBlur={() => handleBlur('message')}
                className={`w-full px-3.5 py-2.5 rounded-lg bg-[#f5f3f0] dark:bg-[#1a1b1f] font-sans text-sm text-[#1b1c1a] dark:text-[#f3f2ee] placeholder:text-[#5f6368]/60 dark:placeholder:text-[#a2a09c]/50 focus:bg-white dark:focus:bg-[#202228] focus:outline-none transition-colors border disabled:opacity-70 disabled:cursor-not-allowed ${
                  messageHasError
                    ? 'border-red-500 focus:border-red-500'
                    : 'border-[#e5e2dc] dark:border-[#2d3034] focus:border-[#fd591e]'
                }`}
              ></textarea>
              {messageHasError && (
                <p id="modal-message-error" role="alert" className="text-xs text-red-600 dark:text-red-400 mt-1 flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">error</span>
                  <span>{errors.message}</span>
                </p>
              )}
            </div>

            <div className="flex items-center gap-3 pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                aria-disabled={isSubmitting}
                className={`w-full py-3 px-6 rounded-full font-display text-sm font-semibold flex items-center justify-center gap-2 shadow-md transition-all ${
                  isSubmitting
                    ? 'bg-[#fd591e]/80 text-white/90 cursor-not-allowed opacity-80 pointer-events-none'
                    : 'bg-[#fd591e] hover:bg-[#ae3200] text-white cursor-pointer active:scale-98'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <svg
                      className="animate-spin -ml-0.5 h-4 w-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-90"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    <span>Sending Brief...</span>
                  </>
                ) : (
                  <>
                    <span>Send Brief</span>
                    <span className="material-symbols-outlined text-[16px]">send</span>
                  </>
                )}
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
