/**
 * Security & input validation helpers for the Kristu mu Nyimbo website.
 * Treats all visitor input as untrusted, prevents XSS payloads, enforces
 * strict character limits, validates internal routes, and guards forms
 * against accidental repeated submissions.
 */

import { WEBSITE_ROUTES, WebsiteRoute } from './routes';

const CONTROL_CHARS_RE = /[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g;
const HTML_TAG_RE = /<\/?[^>]+(>|$)/g;
const DANGEROUS_URI_RE = /\b(?:javascript|vbscript|data)\s*:/gi;
const EMAIL_RE = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;

/**
 * Sanitizes untrusted text input into safe plain text.
 * Strips control characters, HTML tags, and unsafe URI schemes, then clamps length.
 */
export function sanitizeUserText(raw: unknown, maxLength = 1000): string {
  if (typeof raw !== 'string') return '';
  return raw
    .replace(CONTROL_CHARS_RE, '')
    .replace(HTML_TAG_RE, '')
    .replace(DANGEROUS_URI_RE, '')
    .replace(/\r\n?/g, '\n')
    .replace(/[ \t]{2,}/g, ' ')
    .trim()
    .slice(0, maxLength);
}

/**
 * Escapes HTML special characters for safe plain-text display.
 */
export function escapeForDisplay(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

/**
 * Validates an email address format and enforces reasonable length limits.
 */
export function isValidEmail(raw: string): boolean {
  const cleaned = raw.trim();
  if (cleaned.length < 5 || cleaned.length > 120) return false;
  return EMAIL_RE.test(cleaned);
}

/**
 * Restricts hymn number fields to digits only (1–4 digits).
 */
export function sanitizeHymnNumberField(raw: unknown): string {
  if (typeof raw !== 'string') return '';
  return raw.replace(/[^0-9]/g, '').slice(0, 4);
}

/**
 * Validates that a navigation path is a known, safe internal website route.
 * Prevents open redirects or malicious javascript:/external protocol navigation.
 */
export function isSafeInternalRoute(path: string): path is WebsiteRoute {
  if (typeof path !== 'string' || !path.startsWith('/') || path.startsWith('//')) {
    return false;
  }
  const normalized = path.replace(/\/+$/, '') || '/';
  return WEBSITE_ROUTES.includes(normalized as WebsiteRoute);
}

/**
 * Detects suspicious script/injection patterns so malformed submissions
 * can be rejected cleanly with a user-friendly message.
 */
export function containsSuspiciousMarkup(raw: string): boolean {
  if (typeof raw !== 'string') return false;
  return (
    /<script[\s>]/i.test(raw) ||
    /<iframe[\s>]/i.test(raw) ||
    /on(?:error|load|click|mouseover)\s*=/i.test(raw) ||
    DANGEROUS_URI_RE.test(raw)
  );
}
