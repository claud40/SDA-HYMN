import { Hymn } from '../data/hymns';

/**
 * Maximum character limit for search queries to prevent memory exhaustion,
 * payload flooding, or excessive processing on unusual inputs.
 */
export const MAX_SEARCH_LENGTH = 80;

/**
 * Sanitizes user search input to strictly safe plain text:
 * - Strips control characters and null bytes (\u0000)
 * - Strips HTML/XML tags (<...>) to prevent code or tag injection
 * - Normalizes Unicode (NFC) for consistent Bemba character handling
 * - Clamps input length to MAX_SEARCH_LENGTH
 * - Replaces excessive whitespace with a single space
 */
export function sanitizeSearchQuery(input: unknown): string {
  if (typeof input !== 'string') return '';

  // Normalize Unicode representation
  let clean = input.normalize('NFC');

  // Strip null bytes and non-printable control characters
  clean = clean.replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F-\u009F]/g, '');

  // Strip HTML / script / iframe / style tags
  clean = clean.replace(/<[^>]*>/g, '');

  // Strip carriage returns and dangerous byte combinations
  clean = clean.replace(/[\x00\r]/g, '');

  // Collapse multiple whitespaces
  clean = clean.replace(/\s+/g, ' ');

  // Enforce max length bounds
  if (clean.length > MAX_SEARCH_LENGTH) {
    clean = clean.slice(0, MAX_SEARCH_LENGTH);
  }

  return clean.trim();
}

/**
 * Pure, read-only search matching function.
 * Evaluates whether a hymn matches the plain-text search query.
 * Treats all input as literal text, preventing HTML, SQL, or code execution.
 * Guaranteed never to mutate or alter hymn data.
 */
export function matchHymnByQuery(hymn: Readonly<Hymn>, rawQuery: string): boolean {
  const cleanQuery = sanitizeSearchQuery(rawQuery).toLowerCase();
  if (!cleanQuery) return true;

  // Exact number match (e.g. "7" or "12")
  if (hymn.number.toString().includes(cleanQuery)) {
    return true;
  }

  // Title match
  if (hymn.title && hymn.title.toLowerCase().includes(cleanQuery)) {
    return true;
  }

  // Writer / Author match
  if (hymn.writer && hymn.writer.toLowerCase().includes(cleanQuery)) {
    return true;
  }

  // English tune match
  if (hymn.englishTune && hymn.englishTune.toLowerCase().includes(cleanQuery)) {
    return true;
  }

  // Scripture reference match
  if (hymn.scripture && hymn.scripture.toLowerCase().includes(cleanQuery)) {
    return true;
  }

  // Category Bemba title match
  if (hymn.categoryBemba && hymn.categoryBemba.toLowerCase().includes(cleanQuery)) {
    return true;
  }

  // Verses / Stanzas match
  if (Array.isArray(hymn.verses)) {
    const matchedInVerses = hymn.verses.some((verse) =>
      Array.isArray(verse) &&
      verse.some((line) => typeof line === 'string' && line.toLowerCase().includes(cleanQuery))
    );
    if (matchedInVerses) return true;
  }

  // Chorus match
  if (Array.isArray(hymn.chorus)) {
    const matchedInChorus = hymn.chorus.some(
      (line) => typeof line === 'string' && line.toLowerCase().includes(cleanQuery)
    );
    if (matchedInChorus) return true;
  }

  return false;
}

export interface HighlightSegment {
  text: string;
  isMatch: boolean;
}

/**
 * Safely partitions text into matching and non-matching segments
 * using safe substring indexing (indexOf) rather than dynamic RegExp.
 * Completely eliminates ReDoS vulnerabilities, regex syntax exceptions,
 * and malicious regex patterns.
 */
export function getSafeHighlightSegments(text: string, rawQuery?: string): HighlightSegment[] {
  if (!text) return [];
  const cleanQuery = sanitizeSearchQuery(rawQuery || '');
  if (!cleanQuery) {
    return [{ text, isMatch: false }];
  }

  const segments: HighlightSegment[] = [];
  const lowerText = text.toLowerCase();
  const lowerQuery = cleanQuery.toLowerCase();
  const queryLen = cleanQuery.length;

  let currentIndex = 0;
  let matchIndex = lowerText.indexOf(lowerQuery, currentIndex);

  while (matchIndex !== -1) {
    // Add text preceding the match
    if (matchIndex > currentIndex) {
      segments.push({
        text: text.slice(currentIndex, matchIndex),
        isMatch: false,
      });
    }

    // Add matched text
    segments.push({
      text: text.slice(matchIndex, matchIndex + queryLen),
      isMatch: true,
    });

    currentIndex = matchIndex + queryLen;
    matchIndex = lowerText.indexOf(lowerQuery, currentIndex);
  }

  // Add trailing remainder text
  if (currentIndex < text.length) {
    segments.push({
      text: text.slice(currentIndex),
      isMatch: false,
    });
  }

  return segments;
}

/**
 * Sanitizes arbitrary text input to safe, plain text:
 * - Strips control characters, null bytes, and non-printable bytes
 * - Strips all HTML/XML tags (<...>) to prevent XSS/injection
 * - Normalizes Unicode to NFC
 * - Trims and clamps length to maxLength
 */
export function sanitizePlainText(input: unknown, maxLength = 1000): string {
  if (typeof input !== 'string') return '';
  let clean = input.normalize('NFC');
  clean = clean.replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F-\u009F]/g, '');
  clean = clean.replace(/<[^>]*>/g, '');
  clean = clean.replace(/\0/g, '');
  clean = clean.replace(/\r/g, '');
  if (clean.length > maxLength) {
    clean = clean.slice(0, maxLength);
  }
  return clean.trim();
}

/**
 * Sanitizes hymn number field (alphanumeric, max 10 chars, e.g. "7", "18", "125")
 */
export function sanitizeHymnNumber(input: unknown): string {
  if (typeof input !== 'string') return '';
  return input.replace(/[^0-9a-zA-Z-]/g, '').slice(0, 10).trim();
}
