import React, { useState, useRef, useEffect } from 'react';
import { Mail, Phone, CheckCircle2, Send, Copy, Check } from 'lucide-react';
import {
  sanitizeUserText,
  isValidEmail,
  containsSuspiciousMarkup,
} from '../security';

const CONTACT_EMAIL = 'fidelintyintergrity@gmail.com';
const CONTACT_PHONE = '+260 771500266';
const CONTACT_PHONE_HREF = 'tel:+260771500266';
const MAX_MESSAGE_LENGTH = 1500;
const SUBMISSION_COOLDOWN_MS = 4000;

const TOPIC_LABELS: Record<string, string> = {
  general: 'General Inquiry',
  correction: 'Hymn Lyric or Translation Correction',
  support: 'Technical Help & Offline Support',
  feedback: 'Suggestion or Feedback',
};

export const ContactPage: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [topic, setTopic] = useState('general');
  const [message, setMessage] = useState('');
  // Hidden honeypot field to filter automated bot submissions
  const [honeypot, setHoneypot] = useState('');

  const [error, setError] = useState<string | null>(null);
  const [submittedMailto, setSubmittedMailto] = useState<string | null>(null);
  const [isCoolingDown, setIsCoolingDown] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (honeypot.trim() !== '') {
      setSubmittedMailto(`mailto:${CONTACT_EMAIL}`);
      return;
    }

    const now = Date.now();
    if (isCoolingDown || now - lastSubmitAtRef.current < SUBMISSION_COOLDOWN_MS) {
      setError('Please wait a few seconds before sending another message.');
      return;
    }

    if (
      containsSuspiciousMarkup(name) ||
      containsSuspiciousMarkup(email) ||
      containsSuspiciousMarkup(message)
    ) {
      setError('Please enter plain text only without HTML tags or scripts.');
      return;
    }

    const cleanName = sanitizeUserText(name, 100);
    const cleanEmail = sanitizeUserText(email, 120);
    const cleanMessage = sanitizeUserText(message, MAX_MESSAGE_LENGTH);

    if (cleanName.length < 2) {
      setError('Please enter your name (at least 2 characters).');
      return;
    }

    if (!isValidEmail(cleanEmail)) {
      setError('Please enter a valid email address.');
      return;
    }

    if (cleanMessage.length < 10) {
      setError('Please enter a message of at least 10 characters.');
      return;
    }

    const fingerprint = `${cleanEmail.toLowerCase()}|${topic}|${cleanMessage.toLowerCase()}`;
    if (fingerprint === lastPayloadRef.current) {
      setError('This message was already prepared. Thank you for reaching out.');
      return;
    }

    const topicLabel = TOPIC_LABELS[topic] || 'General Inquiry';
    const emailSubject = `[Kristu mu Nyimbo] ${topicLabel} — ${cleanName}`;
    const emailBody = [
      `Name: ${cleanName}`,
      `Reply Email: ${cleanEmail}`,
      `Topic: ${topicLabel}`,
      '',
      cleanMessage,
    ].join('\n');

    const mailtoHref = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      emailSubject
    )}&body=${encodeURIComponent(emailBody)}`;

    lastPayloadRef.current = fingerprint;
    lastSubmitAtRef.current = now;
    setIsCoolingDown(true);
    setSubmittedMailto(mailtoHref);
    setName('');
    setEmail('');
    setMessage('');

    // Open the visitor's default email client with the pre-filled message
    window.location.href = mailtoHref;

    if (cooldownTimerRef.current !== null) {
      window.clearTimeout(cooldownTimerRef.current);
    }
    cooldownTimerRef.current = window.setTimeout(() => {
      setIsCoolingDown(false);
      cooldownTimerRef.current = null;
    }, SUBMISSION_COOLDOWN_MS);
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT_EMAIL);
      setCopiedEmail(true);
      window.setTimeout(() => setCopiedEmail(false), 2500);
    } catch {
      // Clipboard unavailable
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 space-y-12">
      <header className="space-y-4 max-w-2xl">
        <h1 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 dark:text-slate-100 tracking-tight">
          Contact Us
        </h1>
        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
          Have a question about Kristu mu Nyimbo, noticed a lyric typo, or want to share feedback? Reach out using the contact details or form below.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Official Contact Information */}
        <aside className="lg:col-span-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 sm:p-8 space-y-6">
          <div className="space-y-1">
            <h2 className="font-serif text-lg font-semibold text-slate-900 dark:text-slate-100">
              Contact Details
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
              Communication with the Kristu mu Nyimbo team is handled via email.
            </p>
          </div>

          <dl className="space-y-5 text-sm">
            <div className="flex items-start gap-3">
              <Mail className="w-4 h-4 text-[#0D47A1] dark:text-blue-400 shrink-0 mt-1" />
              <div className="min-w-0 space-y-2">
                <dt className="font-semibold text-slate-900 dark:text-slate-100">
                  Email (Primary Contact)
                </dt>
                <dd className="space-y-2">
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="block text-[#0B3B8C] dark:text-blue-300 hover:underline font-mono text-xs sm:text-sm break-all"
                  >
                    {CONTACT_EMAIL}
                  </a>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-[#F3F7FD] dark:hover:bg-slate-800 text-xs font-medium text-slate-700 dark:text-slate-300 transition-colors cursor-pointer"
                  >
                    {copiedEmail ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span>Email Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Email Address</span>
                      </>
                    )}
                  </button>
                </dd>
              </div>
            </div>

            <div className="flex items-start gap-3 pt-4 border-t border-slate-100 dark:border-slate-800">
              <Phone className="w-4 h-4 text-[#0D47A1] dark:text-blue-400 shrink-0 mt-1" />
              <div>
                <dt className="font-semibold text-slate-900 dark:text-slate-100">Phone</dt>
                <dd className="mt-0.5">
                  <a
                    href={CONTACT_PHONE_HREF}
                    className="text-slate-700 dark:text-slate-300 hover:text-[#0B3B8C] dark:hover:text-blue-300 hover:underline font-mono text-xs sm:text-sm"
                  >
                    {CONTACT_PHONE}
                  </a>
                </dd>
              </div>
            </div>
          </dl>
        </aside>

        {/* Email Message Composer Form */}
        <section className="lg:col-span-7 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 sm:p-8">
          <div className="mb-5 space-y-1">
            <h2 className="font-serif text-lg font-semibold text-slate-900 dark:text-slate-100">
              Send an Email
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Fill out the form below to open your email app pre-addressed to{' '}
              <span className="font-mono text-slate-700 dark:text-slate-300">{CONTACT_EMAIL}</span>.
            </p>
          </div>

          {submittedMailto && (
            <div
              role="status"
              className="mb-6 p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/60 flex items-start gap-3 text-sm text-emerald-900 dark:text-emerald-200"
            >
              <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5 text-emerald-700 dark:text-emerald-400" />
              <div className="space-y-2">
                <p className="font-semibold">Your email is ready to send</p>
                <p className="text-xs sm:text-sm opacity-90">
                  Your email app should open with your message addressed to{' '}
                  <span className="font-mono">{CONTACT_EMAIL}</span>. If it did not open automatically, click below:
                </p>
                <a
                  href={submittedMailto}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#0B3B8C] hover:bg-[#0D47A1] text-white text-xs font-semibold transition-colors"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Open Email App</span>
                </a>
              </div>
            </div>
          )}

          {error && (
            <div
              role="alert"
              className="mb-5 p-3.5 rounded-xl bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800/60 text-sm text-red-800 dark:text-red-300"
            >
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4" noValidate>
            {/* Hidden honeypot field */}
            <div className="hidden" aria-hidden="true">
              <label htmlFor="contact-website">Leave this field blank</label>
              <input
                id="contact-website"
                type="text"
                tabIndex={-1}
                autoComplete="off"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="contact-name"
                  className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5"
                >
                  Your Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value.slice(0, 100))}
                  maxLength={100}
                  placeholder="Enter your name"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#F3F7FD] dark:bg-slate-950 border border-slate-300 dark:border-slate-700 text-sm text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:outline-hidden focus:ring-2 focus:ring-[#0D47A1]/30 focus:border-[#0D47A1]"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5"
                >
                  Email Address
                </label>
                <input
                  id="contact-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value.slice(0, 120))}
                  maxLength={120}
                  placeholder="you@example.com"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#F3F7FD] dark:bg-slate-950 border border-slate-300 dark:border-slate-700 text-sm text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:outline-hidden focus:ring-2 focus:ring-[#0D47A1]/30 focus:border-[#0D47A1]"
                  required
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="contact-topic"
                className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5"
              >
                Topic
              </label>
              <select
                id="contact-topic"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#F3F7FD] dark:bg-slate-950 border border-slate-300 dark:border-slate-700 text-sm text-slate-900 dark:text-slate-100 focus:outline-hidden focus:ring-2 focus:ring-[#0D47A1]/30 focus:border-[#0D47A1]"
              >
                <option value="general">General Inquiry</option>
                <option value="correction">Hymn Lyric or Translation Correction</option>
                <option value="support">Technical Help &amp; Offline Support</option>
                <option value="feedback">Suggestion or Feedback</option>
              </select>
            </div>

            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label
                  htmlFor="contact-message"
                  className="block text-xs font-semibold text-slate-700 dark:text-slate-300"
                >
                  Message
                </label>
                <span className="text-xs font-mono tabular-nums text-slate-400">
                  {message.length}/{MAX_MESSAGE_LENGTH}
                </span>
              </div>
              <textarea
                id="contact-message"
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value.slice(0, MAX_MESSAGE_LENGTH))}
                maxLength={MAX_MESSAGE_LENGTH}
                placeholder="Write your question, hymn correction, or feedback..."
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#F3F7FD] dark:bg-slate-950 border border-slate-300 dark:border-slate-700 text-sm text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:outline-hidden focus:ring-2 focus:ring-[#0D47A1]/30 focus:border-[#0D47A1] resize-y"
                required
              />
            </div>

            <button
              type="submit"
              disabled={isCoolingDown}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#0B3B8C] hover:bg-blue-950 dark:bg-[#1565C0] dark:hover:bg-[#1976D2] text-white text-sm font-semibold transition-colors cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
            >
              <Send className="w-4 h-4" />
              <span>{isCoolingDown ? 'Message Sent' : 'Send Message'}</span>
            </button>
          </form>
        </section>
      </div>
    </div>
  );
};
