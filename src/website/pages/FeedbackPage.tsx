import React, { useState, useRef, useEffect } from 'react';
import { CheckCircle2, Send, ShieldCheck, Mail } from 'lucide-react';
import {
  sanitizeUserText,
  sanitizeHymnNumberField,
  isValidEmail,
  containsSuspiciousMarkup,
} from '../security';

const CONTACT_EMAIL = 'fidelintyintergrity@gmail.com';
type FeedbackType = 'spelling-numbering' | 'missing-hymn' | 'improvement' | 'general';

const FEEDBACK_TYPES: ReadonlyArray<{ id: FeedbackType; label: string; helper: string }> = [
  {
    id: 'spelling-numbering',
    label: 'Incorrect hymn spelling or numbering',
    helper: 'Report a typo, wrong stanza order, or hymn number discrepancy.',
  },
  {
    id: 'missing-hymn',
    label: 'Missing hymn',
    helper: 'Let us know if a hymn is missing from Bemba, Tonga, Chewa, or English.',
  },
  {
    id: 'improvement',
    label: 'Suggest an improvement',
    helper: 'Share ideas for readability, worship tools, or device compatibility.',
  },
  {
    id: 'general',
    label: 'General feedback',
    helper: 'Share general comments or questions about Kristu mu Nyimbo.',
  },
];

const HYMN_LANGUAGES = ['Bemba', 'Tonga', 'Chewa', 'English'] as const;
const MAX_MESSAGE_LENGTH = 1200;
const SUBMISSION_COOLDOWN_MS = 4000;

export const FeedbackPage: React.FC = () => {
  const [category, setCategory] = useState<FeedbackType>('spelling-numbering');
  const [hymnalLanguage, setHymnalLanguage] = useState<string>('Bemba');
  const [hymnNumber, setHymnNumber] = useState('');
  const [senderName, setSenderName] = useState('');
  const [replyEmail, setReplyEmail] = useState('');
  const [details, setDetails] = useState('');
  // Hidden honeypot field to filter automated spam submissions
  const [honeypot, setHoneypot] = useState('');

  const [error, setError] = useState<string | null>(null);
  const [submittedSummary, setSubmittedSummary] = useState<{
    categoryLabel: string;
    reference?: string;
    mailtoHref: string;
  } | null>(null);
  const [isCoolingDown, setIsCoolingDown] = useState(false);

  const lastPayloadRef = useRef<string>('');
  const lastSubmitAtRef = useRef<number>(0);
  const cooldownTimerRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (cooldownTimerRef.current !== null) {
        window.clearTimeout(cooldownTimerRef.current);
      }
    };
  }, []);

  const needsHymnContext = category === 'spelling-numbering' || category === 'missing-hymn';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    // Silent reject if honeypot was filled by a bot
    if (honeypot.trim() !== '') {
      setSubmittedSummary({ categoryLabel: 'Feedback', mailtoHref: `mailto:${CONTACT_EMAIL}` });
      return;
    }

    const now = Date.now();
    if (isCoolingDown || now - lastSubmitAtRef.current < SUBMISSION_COOLDOWN_MS) {
      setError('Please wait a few seconds before submitting another suggestion.');
      return;
    }

    if (
      containsSuspiciousMarkup(details) ||
      containsSuspiciousMarkup(senderName) ||
      containsSuspiciousMarkup(replyEmail)
    ) {
      setError('Please enter plain text only without HTML tags or scripts.');
      return;
    }

    const cleanDetails = sanitizeUserText(details, MAX_MESSAGE_LENGTH);
    const cleanName = sanitizeUserText(senderName, 80);
    const cleanEmail = sanitizeUserText(replyEmail, 120);
    const cleanHymnNum = sanitizeHymnNumberField(hymnNumber);

    if (cleanDetails.length < 10) {
      setError('Please provide at least 10 characters describing your feedback or correction.');
      return;
    }

    if (cleanEmail && !isValidEmail(cleanEmail)) {
      setError('Please enter a valid email address, or leave the email field blank.');
      return;
    }

    if (needsHymnContext && cleanHymnNum && (Number(cleanHymnNum) < 1 || Number(cleanHymnNum) > 9999)) {
      setError('Please enter a valid hymn number.');
      return;
    }

    const payloadFingerprint = `${category}|${hymnalLanguage}|${cleanHymnNum}|${cleanDetails.toLowerCase()}`;
    if (payloadFingerprint === lastPayloadRef.current) {
      setError('This exact suggestion was already submitted. Thank you for your help.');
      return;
    }

    // Validated suggestion — never modifies the hymn collection or IndexedDB
    lastPayloadRef.current = payloadFingerprint;
    lastSubmitAtRef.current = now;
    setIsCoolingDown(true);

    const selectedType = FEEDBACK_TYPES.find((t) => t.id === category);
    const categoryLabel = selectedType ? selectedType.label : 'Feedback';
    const reference = needsHymnContext
      ? `${hymnalLanguage}${cleanHymnNum ? ` · Hymn #${cleanHymnNum}` : ''}`
      : undefined;

    const subject = `[Kristu mu Nyimbo Feedback] ${categoryLabel}${reference ? ` (${reference})` : ''}`;
    const bodyLines = [
      `Category: ${categoryLabel}`,
      ...(reference ? [`Reference: ${reference}`] : []),
      ...(cleanName ? [`Name: ${cleanName}`] : []),
      ...(cleanEmail ? [`Reply Email: ${cleanEmail}`] : []),
      '',
      cleanDetails,
    ];
    const mailtoHref = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(bodyLines.join('\n'))}`;

    setSubmittedSummary({
      categoryLabel,
      reference,
      mailtoHref,
    });

    setDetails('');
    setHymnNumber('');
    if (cleanName) setSenderName(cleanName);

    window.location.href = mailtoHref;

    if (cooldownTimerRef.current !== null) {
      window.clearTimeout(cooldownTimerRef.current);
    }
    cooldownTimerRef.current = window.setTimeout(() => {
      setIsCoolingDown(false);
      cooldownTimerRef.current = null;
    }, SUBMISSION_COOLDOWN_MS);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 space-y-10">
      <header className="space-y-4">
        <h1 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 dark:text-slate-100 tracking-tight">
          Feedback &amp; Suggestions
        </h1>
        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
          Help keep Kristu mu Nyimbo accurate and easy to use. Report spelling or numbering issues, note missing hymns, or suggest improvements.
        </p>
      </header>

      <div className="rounded-2xl bg-slate-100/80 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 p-5 flex items-start gap-3">
        <ShieldCheck className="w-5 h-5 text-[#0D47A1] dark:text-blue-400 shrink-0 mt-0.5" />
        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
          <strong>Review Notice:</strong> Submissions made here are treated strictly as suggestions for review and do not automatically modify the hymn collection or Bible text in the application.
        </p>
      </div>

      <section className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 sm:p-8 space-y-6">
        {submittedSummary && (
          <div
            role="status"
            className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/60 flex items-start gap-3 text-sm text-emerald-900 dark:text-emerald-200"
          >
            <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5 text-emerald-700 dark:text-emerald-400" />
            <div className="space-y-2">
              <p className="font-semibold">Suggestion prepared for email review</p>
              <p className="text-xs sm:text-sm opacity-90">
                Category: {submittedSummary.categoryLabel}
                {submittedSummary.reference ? ` (${submittedSummary.reference})` : ''}. Your email app should open addressed to{' '}
                <span className="font-mono">{CONTACT_EMAIL}</span>.
              </p>
              <a
                href={submittedSummary.mailtoHref}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#0B3B8C] hover:bg-[#0D47A1] text-white text-xs font-semibold transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Send via Email App</span>
              </a>
            </div>
          </div>
        )}

        {error && (
          <div
            role="alert"
            className="p-3.5 rounded-xl bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800/60 text-sm text-red-800 dark:text-red-300"
          >
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5" noValidate>
          {/* Honeypot field hidden from human visitors */}
          <div className="hidden" aria-hidden="true">
            <label htmlFor="feedback-website">Leave this field blank</label>
            <input
              id="feedback-website"
              type="text"
              tabIndex={-1}
              autoComplete="off"
              value={honeypot}
              onChange={(e) => setHoneypot(e.target.value)}
            />
          </div>

          {/* Feedback Category */}
          <fieldset className="space-y-2.5">
            <legend className="text-xs font-semibold text-slate-700 dark:text-slate-300">
              What would you like to share?
            </legend>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {FEEDBACK_TYPES.map((item) => {
                const isSelected = category === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setCategory(item.id)}
                    aria-pressed={isSelected}
                    className={`p-3.5 rounded-xl border text-left transition-colors cursor-pointer ${
                      isSelected
                        ? 'border-[#0D47A1] bg-[#F3F7FD]/70 dark:bg-blue-950/30 text-slate-900 dark:text-slate-100'
                        : 'border-slate-200 dark:border-slate-800 bg-[#F3F7FD] dark:bg-slate-950 text-slate-700 dark:text-slate-300 hover:border-slate-300 dark:hover:border-slate-700'
                    }`}
                  >
                    <div className="text-sm font-semibold">{item.label}</div>
                    <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                      {item.helper}
                    </div>
                  </button>
                );
              })}
            </div>
          </fieldset>

          {/* Optional Hymn Language & Number for Hymn Reports */}
          {needsHymnContext && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="feedback-language"
                  className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5"
                >
                  Hymnal Language
                </label>
                <select
                  id="feedback-language"
                  value={hymnalLanguage}
                  onChange={(e) => setHymnalLanguage(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#F3F7FD] dark:bg-slate-950 border border-slate-300 dark:border-slate-700 text-sm text-slate-900 dark:text-slate-100 focus:outline-hidden focus:ring-2 focus:ring-[#0D47A1]/30 focus:border-[#0D47A1]"
                >
                  {HYMN_LANGUAGES.map((lang) => (
                    <option key={lang} value={lang}>
                      {lang}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="feedback-hymn-number"
                  className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5"
                >
                  Hymn Number (optional)
                </label>
                <input
                  id="feedback-hymn-number"
                  type="text"
                  inputMode="numeric"
                  value={hymnNumber}
                  onChange={(e) => setHymnNumber(sanitizeHymnNumberField(e.target.value))}
                  maxLength={4}
                  placeholder="e.g. 18"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#F3F7FD] dark:bg-slate-950 border border-slate-300 dark:border-slate-700 text-sm font-mono text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:outline-hidden focus:ring-2 focus:ring-[#0D47A1]/30 focus:border-[#0D47A1]"
                />
              </div>
            </div>
          )}

          {/* Details */}
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label
                htmlFor="feedback-details"
                className="text-xs font-semibold text-slate-700 dark:text-slate-300"
              >
                Details
              </label>
              <span className="text-xs font-mono tabular-nums text-slate-400">
                {details.length}/{MAX_MESSAGE_LENGTH}
              </span>
            </div>
            <textarea
              id="feedback-details"
              rows={5}
              value={details}
              onChange={(e) => setDetails(e.target.value.slice(0, MAX_MESSAGE_LENGTH))}
              maxLength={MAX_MESSAGE_LENGTH}
              placeholder="Describe the stanza correction, missing hymn title, or suggestion clearly..."
              className="w-full px-3.5 py-2.5 rounded-xl bg-[#F3F7FD] dark:bg-slate-950 border border-slate-300 dark:border-slate-700 text-sm text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:outline-hidden focus:ring-2 focus:ring-[#0D47A1]/30 focus:border-[#0D47A1] resize-y"
              required
            />
          </div>

          {/* Optional Name & Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="feedback-name"
                className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5"
              >
                Your Name (optional)
              </label>
              <input
                id="feedback-name"
                type="text"
                value={senderName}
                onChange={(e) => setSenderName(e.target.value.slice(0, 80))}
                maxLength={80}
                placeholder="Optional"
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#F3F7FD] dark:bg-slate-950 border border-slate-300 dark:border-slate-700 text-sm text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:outline-hidden focus:ring-2 focus:ring-[#0D47A1]/30 focus:border-[#0D47A1]"
              />
            </div>

            <div>
              <label
                htmlFor="feedback-email"
                className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5"
              >
                Email for Follow-up (optional)
              </label>
              <input
                id="feedback-email"
                type="email"
                value={replyEmail}
                onChange={(e) => setReplyEmail(e.target.value.slice(0, 120))}
                maxLength={120}
                placeholder="you@example.com"
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#F3F7FD] dark:bg-slate-950 border border-slate-300 dark:border-slate-700 text-sm text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:outline-hidden focus:ring-2 focus:ring-[#0D47A1]/30 focus:border-[#0D47A1]"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={isCoolingDown}
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#0B3B8C] hover:bg-blue-950 dark:bg-[#1565C0] dark:hover:bg-[#1976D2] text-white text-sm font-semibold transition-colors cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
          >
            <Send className="w-4 h-4" />
            <span>{isCoolingDown ? 'Suggestion Submitted' : 'Submit Suggestion'}</span>
          </button>
        </form>
      </section>
    </div>
  );
};
