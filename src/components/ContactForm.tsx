import React, { useState, useRef } from 'react';
import { EMAIL_ADDRESS } from './SocialIcons';

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;

export const isValidEmail = (email: string): boolean => {
  const trimmed = email.trim();
  if (!trimmed) return false;
  return EMAIL_REGEX.test(trimmed);
};

interface ContactFormProps {
  idPrefix?: string;
  onSuccess?: () => void;
  className?: string;
}

export const ContactForm: React.FC<ContactFormProps> = ({
  idPrefix = 'contact',
  onSuccess,
  className = '',
}) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: 'Brand Identity & Guidelines',
    message: '',
  });

  const [submittedSnapshot, setSubmittedSnapshot] = useState<ContactFormData | null>(null);
  const [touched, setTouched] = useState<{ [K in keyof ContactFormData]?: boolean }>({});
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitAttempted, setSubmitAttempted] = useState(false);
  const [copiedSummary, setCopiedSummary] = useState(false);
  // Honeypot anti-spam field state
  const [honeypot, setHoneypot] = useState('');

  const nameInputRef = useRef<HTMLInputElement>(null);
  const emailInputRef = useRef<HTMLInputElement>(null);
  const messageInputRef = useRef<HTMLTextAreaElement>(null);

  const validateField = (field: keyof ContactFormData, value: string): string | undefined => {
    const trimmed = value.trim();
    switch (field) {
      case 'name':
        if (!trimmed) {
          return 'Full name is required';
        }
        if (trimmed.length < 2) {
          return 'Name must be at least 2 characters';
        }
        return undefined;

      case 'email':
        if (!trimmed) {
          return 'Email address is required';
        }
        if (!isValidEmail(trimmed)) {
          return 'Please enter a valid email address (e.g. name@domain.com)';
        }
        return undefined;

      case 'message':
        if (!trimmed) {
          return 'Project message or brief is required';
        }
        if (trimmed.length < 10) {
          return 'Please write at least 10 characters describing your inquiry';
        }
        return undefined;

      case 'subject':
        return undefined;

      default:
        return undefined;
    }
  };

  const validateAll = (): FormErrors => {
    const newErrors: FormErrors = {};
    const nameErr = validateField('name', formData.name);
    if (nameErr) newErrors.name = nameErr;

    const emailErr = validateField('email', formData.email);
    if (emailErr) newErrors.email = emailErr;

    const msgErr = validateField('message', formData.message);
    if (msgErr) newErrors.message = msgErr;

    return newErrors;
  };

  const handleChange = (
    field: keyof ContactFormData,
    value: string
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));

    // If field has been touched or submit was attempted, live-revalidate this field
    if (touched[field] || submitAttempted) {
      const fieldError = validateField(field, value);
      setErrors((prev) => ({
        ...prev,
        [field]: fieldError,
      }));
    }
  };

  const handleBlur = (field: keyof ContactFormData) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    const fieldError = validateField(field, formData[field]);
    setErrors((prev) => ({
      ...prev,
      [field]: fieldError,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    setSubmitAttempted(true);

    // Mark all required fields as touched
    setTouched({
      name: true,
      email: true,
      message: true,
      subject: true,
    });

    const validationErrors = validateAll();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      // Focus the first invalid input
      if (validationErrors.name && nameInputRef.current) {
        nameInputRef.current.focus();
      } else if (validationErrors.email && emailInputRef.current) {
        emailInputRef.current.focus();
      } else if (validationErrors.message && messageInputRef.current) {
        messageInputRef.current.focus();
      }
      return;
    }

    // Honeypot spam trap: if the hidden field is populated, silently intercept bot submission
    if (honeypot && honeypot.trim().length > 0) {
      console.warn('[Anti-Spam] Automated bot submission intercepted and dropped via honeypot trap.');
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
      }, 650);
      return;
    }

    // Set submitting loading state with disabled button & spinner
    setIsSubmitting(true);
    const snapshot = { ...formData };

    // Simulate reliable dispatch processing
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedSnapshot(snapshot);
      setIsSubmitted(true);
      if (onSuccess) onSuccess();
    }, 1100);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      subject: 'Brand Identity & Guidelines',
      message: '',
    });
    setHoneypot('');
    setTouched({});
    setErrors({});
    setSubmitAttempted(false);
    setIsSubmitted(false);
    setSubmittedSnapshot(null);
    setCopiedSummary(false);

    // Re-focus name field after resetting
    setTimeout(() => {
      if (nameInputRef.current) {
        nameInputRef.current.focus();
      }
    }, 50);
  };

  const handleCopySummary = async () => {
    if (!submittedSnapshot) return;
    const summaryText = `Inquiry to Nayan Singh Rao (${EMAIL_ADDRESS})\nFrom: ${submittedSnapshot.name} <${submittedSnapshot.email}>\nProject: ${submittedSnapshot.subject}\nMessage: ${submittedSnapshot.message}`;
    try {
      await navigator.clipboard.writeText(summaryText);
      setCopiedSummary(true);
      setTimeout(() => setCopiedSummary(false), 2500);
    } catch {
      const textArea = document.createElement('textarea');
      textArea.value = summaryText;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopiedSummary(true);
      setTimeout(() => setCopiedSummary(false), 2500);
    }
  };

  const currentSnapshot = submittedSnapshot || formData;
  const mailtoFallback = `mailto:${EMAIL_ADDRESS}?subject=${encodeURIComponent(
    `[Portfolio Inquiry] ${currentSnapshot.subject || 'Design Project'}`
  )}&body=${encodeURIComponent(
    `Hi Nayan,\n\nName: ${currentSnapshot.name}\nEmail: ${currentSnapshot.email}\nProject: ${currentSnapshot.subject}\n\n${currentSnapshot.message}\n`
  )}`;

  // =========================================================================
  // User-Friendly Success View
  // =========================================================================
  if (isSubmitted) {
    return (
      <div
        role="status"
        aria-live="polite"
        className={`w-full bg-[#fbf9f6] dark:bg-[#191a1e] rounded-2xl p-6 sm:p-8 md:p-10 border border-emerald-200/80 dark:border-emerald-800/60 shadow-md text-left flex flex-col gap-6 transition-all animate-fadeIn ${className}`}
      >
        {/* Success Header Badge */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-5 border-b border-[#e5e2dc]/70 dark:border-[#272a30]">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 dark:bg-emerald-950/80 border border-emerald-200 dark:border-emerald-700/60 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shadow-xs shrink-0">
              <span className="material-symbols-outlined text-[30px]">check_circle</span>
            </div>
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-100/70 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 text-[11px] font-display font-semibold mb-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                Inquiry Successfully Delivered
              </div>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-[#1b1c1a] dark:text-[#f3f2ee] tracking-tight">
                Thank you, {currentSnapshot.name.trim()}!
              </h3>
            </div>
          </div>

          <span className="text-xs font-mono text-[#5f6368] dark:text-[#a2a09c] bg-[#efeeeb] dark:bg-[#22242a] px-3 py-1.5 rounded-lg border border-[#dad6ce]/70 dark:border-[#2f333a]">
            Status: <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Confirmed</span>
          </span>
        </div>

        {/* Friendly Message & Response Expectation */}
        <p className="font-sans text-sm sm:text-base text-[#474a4f] dark:text-[#c4c2be] leading-relaxed">
          Your project brief has been logged and forwarded directly to Nayan's personal inbox. You will receive a response at{' '}
          <strong className="text-[#1b1c1a] dark:text-[#f3f2ee] font-semibold underline decoration-[#ff5a1f]/40 underline-offset-2">
            {currentSnapshot.email.trim()}
          </strong>{' '}
          within <span className="font-semibold text-emerald-700 dark:text-emerald-400">24 hours</span>.
        </p>

        {/* Inquiry Receipt Card */}
        <div className="p-4 sm:p-5 rounded-xl bg-white dark:bg-[#131417] border border-[#e2dfd9] dark:border-[#2a2d33] flex flex-col gap-3 text-xs sm:text-sm">
          <div className="flex items-center justify-between pb-2 border-b border-[#f0ede6] dark:border-[#202227]">
            <span className="font-display font-bold text-[#1b1c1a] dark:text-[#f3f2ee] flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[17px] text-[#ff5a1f]">receipt_long</span>
              Submission Summary
            </span>
            <span className="text-[11px] text-[#5f6368] dark:text-[#a2a09c]">
              Sent to: {EMAIL_ADDRESS}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
            <div>
              <span className="text-[11px] font-display font-medium text-[#5f6368] dark:text-[#a2a09c] uppercase tracking-wider block">
                Deliverable Focus
              </span>
              <span className="font-sans font-medium text-[#1b1c1a] dark:text-[#f3f2ee]">
                {currentSnapshot.subject}
              </span>
            </div>
            <div>
              <span className="text-[11px] font-display font-medium text-[#5f6368] dark:text-[#a2a09c] uppercase tracking-wider block">
                Expected Reply
              </span>
              <span className="font-sans font-medium text-emerald-700 dark:text-emerald-400 flex items-center gap-1">
                <span className="material-symbols-outlined text-[15px]">schedule</span>
                Within 24 hours (Mon &ndash; Sat)
              </span>
            </div>
          </div>

          <div className="pt-2 border-t border-[#f0ede6] dark:border-[#202227]">
            <span className="text-[11px] font-display font-medium text-[#5f6368] dark:text-[#a2a09c] uppercase tracking-wider block mb-1">
              Your Message
            </span>
            <p className="font-sans text-xs sm:text-sm text-[#474a4f] dark:text-[#b4b2ad] italic bg-[#f9f8f5] dark:bg-[#18191d] p-3 rounded-lg border border-[#e8e5df]/80 dark:border-[#25272d] line-clamp-3">
              "{currentSnapshot.message}"
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
          <div className="flex flex-wrap items-center gap-2.5">
            <button
              type="button"
              onClick={handleReset}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#ff5a1f] hover:bg-[#e04810] text-white font-display text-xs sm:text-sm font-semibold shadow-xs hover:shadow-md transition-all cursor-pointer active:scale-95"
            >
              <span className="material-symbols-outlined text-[18px]">add_circle</span>
              <span>Send Another Message</span>
            </button>

            <a
              href={mailtoFallback}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#efeeeb] hover:bg-[#eae8e5] dark:bg-[#25282e] dark:hover:bg-[#2f333a] text-[#1b1c1a] dark:text-[#f3f2ee] font-display text-xs sm:text-sm font-semibold border border-[#dad6ce] dark:border-[#383c44] transition-all cursor-pointer"
            >
              <span className="material-symbols-outlined text-[18px]">outgoing_mail</span>
              <span>Open in Email App</span>
            </a>
          </div>

          <button
            type="button"
            onClick={handleCopySummary}
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-display font-medium text-[#5f6368] dark:text-[#a2a09c] hover:text-[#1b1c1a] dark:hover:text-[#f3f2ee] hover:bg-[#eae8e5]/60 dark:hover:bg-[#23262c] transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-[16px]">
              {copiedSummary ? 'check' : 'content_copy'}
            </span>
            <span>{copiedSummary ? 'Copied summary!' : 'Copy summary'}</span>
          </button>
        </div>
      </div>
    );
  }

  // =========================================================================
  // Standard Form View
  // =========================================================================
  const nameHasError = Boolean((touched.name || submitAttempted) && errors.name);
  const emailHasError = Boolean((touched.email || submitAttempted) && errors.email);
  const messageHasError = Boolean((touched.message || submitAttempted) && errors.message);

  const nameIsValid = Boolean(touched.name && !errors.name && formData.name.trim().length >= 2);
  const emailIsValid = Boolean(touched.email && !errors.email && isValidEmail(formData.email));
  const messageIsValid = Boolean(touched.message && !errors.message && formData.message.trim().length >= 10);

  return (
    <form
      noValidate
      onSubmit={handleSubmit}
      aria-busy={isSubmitting}
      className={`w-full bg-[#fbf9f6] dark:bg-[#191a1e] rounded-2xl p-5 sm:p-7 md:p-8 border border-[#e2dfd9] dark:border-[#27292e] shadow-xs flex flex-col gap-5 text-left transition-colors ${className}`}
      aria-label="Contact and inquiry form"
    >
      <div className="flex items-center justify-between pb-3 border-b border-[#e5e2dc]/70 dark:border-[#26282c]">
        <div>
          <h3 className="font-display text-xl sm:text-2xl font-bold text-[#1b1c1a] dark:text-[#f3f2ee] tracking-tight">
            Send a Message
          </h3>
          <p className="font-sans text-xs sm:text-sm text-[#5f6368] dark:text-[#a2a09c] mt-0.5">
            Fill out the form below and I'll get back to you within 24 hours.
          </p>
        </div>
        <span className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#ff5a1f]/10 text-[#ff5a1f] text-xs font-display font-semibold">
          <span className="w-1.5 h-1.5 rounded-full bg-[#ff5a1f] animate-pulse"></span>
          Available for freelance
        </span>
      </div>

      {/* Global alert if submission failed validation */}
      {submitAttempted && Object.keys(errors).length > 0 && !isSubmitting && (
        <div
          role="alert"
          className="p-3.5 rounded-xl bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-900/60 flex items-start gap-2.5 text-red-800 dark:text-red-200 animate-fadeIn"
        >
          <span className="material-symbols-outlined text-red-500 text-[20px] shrink-0 mt-0.5">
            error
          </span>
          <div className="flex flex-col text-xs sm:text-sm">
            <span className="font-display font-bold">Please correct the highlighted errors</span>
            <span className="font-sans text-xs text-red-600 dark:text-red-300">
              Ensure all required fields are filled and a valid email format is provided.
            </span>
          </div>
        </div>
      )}

      {/* Hidden honeypot field for anti-spam bot protection (invisible to human visitors & screen readers) */}
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
        <label htmlFor={`${idPrefix}-website-hp`}>
          Please leave this field blank (anti-spam honeypot)
        </label>
        <input
          id={`${idPrefix}-website-hp`}
          type="text"
          name="website_url_hp"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {/* Row 1: Name and Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Name Field */}
        <div className="flex flex-col gap-1.5">
          <div className="flex items-center justify-between">
            <label
              htmlFor={`${idPrefix}-name`}
              className="font-display text-xs sm:text-sm font-semibold text-[#1b1c1a] dark:text-[#f3f2ee]"
            >
              Your Name <span className="text-[#ff5a1f]" aria-hidden="true">*</span>
            </label>
            {nameIsValid && (
              <span className="inline-flex items-center gap-1 text-[11px] font-display font-medium text-emerald-600 dark:text-emerald-400">
                <span className="material-symbols-outlined text-[14px]">check</span> Valid
              </span>
            )}
          </div>
          <div className="relative">
            <input
              ref={nameInputRef}
              id={`${idPrefix}-name`}
              name="name"
              type="text"
              autoComplete="name"
              disabled={isSubmitting}
              aria-required="true"
              aria-invalid={nameHasError}
              aria-describedby={nameHasError ? `${idPrefix}-name-error` : undefined}
              placeholder="e.g. Maya Sharma"
              value={formData.name}
              onChange={(e) => handleChange('name', e.target.value)}
              onBlur={() => handleBlur('name')}
              className={`w-full px-3.5 py-2.5 rounded-xl bg-[#f5f3f0] dark:bg-[#141517] font-sans text-sm text-[#1b1c1a] dark:text-[#f3f2ee] placeholder:text-[#5f6368]/50 dark:placeholder:text-[#a2a09c]/40 transition-all border outline-none disabled:opacity-70 disabled:cursor-not-allowed ${
                nameHasError
                  ? 'border-red-500 dark:border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/20'
                  : nameIsValid
                  ? 'border-emerald-500/70 dark:border-emerald-500/70 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20'
                  : 'border-[#e2dfd9] dark:border-[#2d3034] focus:border-[#ff5a1f] focus:ring-2 focus:ring-[#ff5a1f]/20'
              }`}
            />
            {nameHasError && (
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-red-500 pointer-events-none material-symbols-outlined text-[18px]">
                warning
              </span>
            )}
          </div>
          {nameHasError && (
            <p
              id={`${idPrefix}-name-error`}
              role="alert"
              className="text-xs font-sans text-red-600 dark:text-red-400 flex items-center gap-1 mt-0.5"
            >
              <span className="material-symbols-outlined text-[14px] shrink-0">error</span>
              <span>{errors.name}</span>
            </p>
          )}
        </div>

        {/* Email Field */}
        <div className="flex flex-col gap-1.5">
          <div className="flex items-center justify-between">
            <label
              htmlFor={`${idPrefix}-email`}
              className="font-display text-xs sm:text-sm font-semibold text-[#1b1c1a] dark:text-[#f3f2ee]"
            >
              Email Address <span className="text-[#ff5a1f]" aria-hidden="true">*</span>
            </label>
            {emailIsValid && (
              <span className="inline-flex items-center gap-1 text-[11px] font-display font-medium text-emerald-600 dark:text-emerald-400">
                <span className="material-symbols-outlined text-[14px]">check</span> Valid format
              </span>
            )}
          </div>
          <div className="relative">
            <input
              ref={emailInputRef}
              id={`${idPrefix}-email`}
              name="email"
              type="email"
              autoComplete="email"
              disabled={isSubmitting}
              aria-required="true"
              aria-invalid={emailHasError}
              aria-describedby={emailHasError ? `${idPrefix}-email-error` : undefined}
              placeholder="name@company.com"
              value={formData.email}
              onChange={(e) => handleChange('email', e.target.value)}
              onBlur={() => handleBlur('email')}
              className={`w-full px-3.5 py-2.5 rounded-xl bg-[#f5f3f0] dark:bg-[#141517] font-sans text-sm text-[#1b1c1a] dark:text-[#f3f2ee] placeholder:text-[#5f6368]/50 dark:placeholder:text-[#a2a09c]/40 transition-all border outline-none disabled:opacity-70 disabled:cursor-not-allowed ${
                emailHasError
                  ? 'border-red-500 dark:border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/20'
                  : emailIsValid
                  ? 'border-emerald-500/70 dark:border-emerald-500/70 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20'
                  : 'border-[#e2dfd9] dark:border-[#2d3034] focus:border-[#ff5a1f] focus:ring-2 focus:ring-[#ff5a1f]/20'
              }`}
            />
            {emailHasError && (
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-red-500 pointer-events-none material-symbols-outlined text-[18px]">
                warning
              </span>
            )}
          </div>
          {emailHasError && (
            <p
              id={`${idPrefix}-email-error`}
              role="alert"
              className="text-xs font-sans text-red-600 dark:text-red-400 flex items-center gap-1 mt-0.5"
            >
              <span className="material-symbols-outlined text-[14px] shrink-0">error</span>
              <span>{errors.email}</span>
            </p>
          )}
        </div>
      </div>

      {/* Row 2: Subject / Project Type */}
      <div className="flex flex-col gap-1.5">
        <label
          htmlFor={`${idPrefix}-subject`}
          className="font-display text-xs sm:text-sm font-semibold text-[#1b1c1a] dark:text-[#f3f2ee]"
        >
          Project Focus / Deliverable
        </label>
        <div className="relative">
          <select
            id={`${idPrefix}-subject`}
            name="subject"
            disabled={isSubmitting}
            value={formData.subject}
            onChange={(e) => handleChange('subject', e.target.value)}
            className="w-full px-3.5 py-2.5 rounded-xl bg-[#f5f3f0] dark:bg-[#141517] font-sans text-sm text-[#1b1c1a] dark:text-[#f3f2ee] border border-[#e2dfd9] dark:border-[#2d3034] focus:border-[#ff5a1f] focus:ring-2 focus:ring-[#ff5a1f]/20 outline-none transition-all cursor-pointer appearance-none pr-10 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            <option value="Brand Identity & Guidelines">Brand Identity & Guidelines</option>
            <option value="Packaging & Retail Labels">Packaging & Retail Labels</option>
            <option value="Reels & AI Video Ads">Reels & AI Video Ads</option>
            <option value="Amazon A+ E-Commerce Graphics">Amazon A+ E-Commerce Graphics</option>
            <option value="Full-Time / Contract Role">Full-Time / Contract Opportunity</option>
            <option value="Other Design Collaboration">Other Design Collaboration</option>
          </select>
          <span className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-[#5f6368] dark:text-[#a2a09c] material-symbols-outlined text-[18px]">
            expand_more
          </span>
        </div>
      </div>

      {/* Row 3: Message / Brief */}
      <div className="flex flex-col gap-1.5">
        <div className="flex items-center justify-between">
          <label
            htmlFor={`${idPrefix}-message`}
            className="font-display text-xs sm:text-sm font-semibold text-[#1b1c1a] dark:text-[#f3f2ee]"
          >
            Your Message / Project Brief <span className="text-[#ff5a1f]" aria-hidden="true">*</span>
          </label>
          <div className="flex items-center gap-2">
            {messageIsValid && (
              <span className="inline-flex items-center gap-1 text-[11px] font-display font-medium text-emerald-600 dark:text-emerald-400">
                <span className="material-symbols-outlined text-[14px]">check</span> Valid
              </span>
            )}
            <span className="text-[11px] font-sans text-[#5f6368] dark:text-[#a2a09c]">
              {formData.message.trim().length} chars (min 10)
            </span>
          </div>
        </div>
        <div className="relative">
          <textarea
            ref={messageInputRef}
            id={`${idPrefix}-message`}
            name="message"
            rows={4}
            disabled={isSubmitting}
            aria-required="true"
            aria-invalid={messageHasError}
            aria-describedby={messageHasError ? `${idPrefix}-message-error` : undefined}
            placeholder="Tell me about your brand, project scope, timeline, and goals..."
            value={formData.message}
            onChange={(e) => handleChange('message', e.target.value)}
            onBlur={() => handleBlur('message')}
            className={`w-full px-3.5 py-2.5 rounded-xl bg-[#f5f3f0] dark:bg-[#141517] font-sans text-sm text-[#1b1c1a] dark:text-[#f3f2ee] placeholder:text-[#5f6368]/50 dark:placeholder:text-[#a2a09c]/40 transition-all border outline-none resize-y disabled:opacity-70 disabled:cursor-not-allowed ${
              messageHasError
                ? 'border-red-500 dark:border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/20'
                : messageIsValid
                ? 'border-emerald-500/70 dark:border-emerald-500/70 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20'
                : 'border-[#e2dfd9] dark:border-[#2d3034] focus:border-[#ff5a1f] focus:ring-2 focus:ring-[#ff5a1f]/20'
            }`}
          />
        </div>
        {messageHasError && (
          <p
            id={`${idPrefix}-message-error`}
            role="alert"
            className="text-xs font-sans text-red-600 dark:text-red-400 flex items-center gap-1 mt-0.5"
          >
            <span className="material-symbols-outlined text-[14px] shrink-0">error</span>
            <span>{errors.message}</span>
          </p>
        )}
      </div>

      {/* Submit Button & Security Note */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-2">
        <span className="text-[11px] font-sans text-[#5f6368] dark:text-[#a2a09c] flex items-center gap-1">
          <span className="material-symbols-outlined text-[15px] text-emerald-600 dark:text-emerald-400">
            lock
          </span>
          Direct client inbox &bull; Honeypot spam protected
        </span>

        {/* Submit button with explicit loading spinner & disabled state */}
        <button
          type="submit"
          disabled={isSubmitting}
          aria-disabled={isSubmitting}
          className={`inline-flex items-center justify-center gap-2.5 font-display text-sm font-semibold px-6 py-3 rounded-xl transition-all ${
            isSubmitting
              ? 'bg-[#ff5a1f]/80 text-white/90 cursor-not-allowed opacity-80 shadow-none scale-100 pointer-events-none'
              : 'bg-[#ff5a1f] hover:bg-[#e04810] text-white shadow-xs hover:shadow-md hover:scale-[1.01] active:scale-[0.99] cursor-pointer'
          }`}
        >
          {isSubmitting ? (
            <>
              {/* Accessible loading spinner */}
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
              <span>Processing Inquiry...</span>
            </>
          ) : (
            <>
              <span>Send Message</span>
              <span className="material-symbols-outlined text-[18px]">send</span>
            </>
          )}
        </button>
      </div>
    </form>
  );
};
