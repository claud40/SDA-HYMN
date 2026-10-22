import { Hymn, SAMPLE_HYMNS } from '../data/hymns';

export interface HymnValidationResult {
  isValid: boolean;
  hymn?: Hymn;
  error?: string;
}

export interface BatchValidationResult {
  validHymns: Hymn[];
  rejectedCount: number;
  duplicateCount: number;
}

/**
 * Validates a single hymn record candidate.
 * Strictly verifies required fields and data structures while PRESERVING
 * the original Bemba spelling, punctuation, capitalization, verse order, and choruses.
 */
export function validateHymnRecord(candidate: unknown): HymnValidationResult {
  if (!candidate || typeof candidate !== 'object') {
    return { isValid: false, error: 'Hymn record must be a valid non-null object.' };
  }

  const raw = candidate as Record<string, unknown>;

  // 1. Validate Hymn Number (must be positive integer between 1 and 999)
  let hymnNumber: number;
  if (typeof raw.number === 'number' && Number.isInteger(raw.number)) {
    hymnNumber = raw.number;
  } else if (typeof raw.number === 'string') {
    const parsed = parseInt(raw.number.trim(), 10);
    if (isNaN(parsed)) {
      return { isValid: false, error: 'Invalid hymn number format.' };
    }
    hymnNumber = parsed;
  } else {
    return { isValid: false, error: 'Hymn number is required.' };
  }

  if (hymnNumber <= 0 || hymnNumber > 999) {
    return { isValid: false, error: `Hymn number (${hymnNumber}) must be between 1 and 999.` };
  }

  // 2. Validate Title (must be non-empty string, preserve original Bemba spelling and punctuation)
  if (typeof raw.title !== 'string' || raw.title.trim().length === 0) {
    return { isValid: false, error: `Hymn #${hymnNumber} requires a valid title.` };
  }
  const cleanTitle = raw.title.trim();

  // 3. Validate Verses (must be non-empty array of string arrays, preserve verse order and Bemba lyrics)
  if (!Array.isArray(raw.verses) || raw.verses.length === 0) {
    return { isValid: false, error: `Hymn #${hymnNumber} must contain at least one verse.` };
  }

  const cleanVerses: string[][] = [];
  for (let vIdx = 0; vIdx < raw.verses.length; vIdx++) {
    const rawVerse = raw.verses[vIdx];
    if (!Array.isArray(rawVerse) || rawVerse.length === 0) {
      return { isValid: false, error: `Verse ${vIdx + 1} of Hymn #${hymnNumber} is empty or invalid.` };
    }

    const lines: string[] = [];
    for (let lIdx = 0; lIdx < rawVerse.length; lIdx++) {
      const line = rawVerse[lIdx];
      if (typeof line !== 'string') {
        return { isValid: false, error: `Verse ${vIdx + 1}, line ${lIdx + 1} of Hymn #${hymnNumber} must be text.` };
      }
      // Preserve exact line text, trim trailing line breaks
      const cleanLine = line.replace(/[\r\n]+$/, '').trimEnd();
      if (cleanLine.length > 0) {
        lines.push(cleanLine);
      }
    }

    if (lines.length === 0) {
      return { isValid: false, error: `Verse ${vIdx + 1} of Hymn #${hymnNumber} contains no valid lyric lines.` };
    }

    cleanVerses.push(lines);
  }

  // 4. Validate Chorus (preserve chorus lines and Bemba punctuation)
  let cleanChorus: string[] | null = null;
  if (Array.isArray(raw.chorus) && raw.chorus.length > 0) {
    const chorusLines = raw.chorus
      .filter((line): line is string => typeof line === 'string')
      .map((line) => line.replace(/[\r\n]+$/, '').trimEnd())
      .filter((line) => line.length > 0);

    if (chorusLines.length > 0) {
      cleanChorus = chorusLines;
    }
  }

  // 5. Safe metadata fields (preserving original Bemba wording, with safe defaults if missing)
  const cleanId = (typeof raw.id === 'string' && raw.id.trim().length > 0)
    ? raw.id.trim()
    : `hymn-${hymnNumber}`;

  const cleanWriter = (typeof raw.writer === 'string' && raw.writer.trim().length > 0)
    ? raw.writer.trim()
    : 'Traditional';

  const cleanCategory = (typeof raw.category === 'string' && raw.category.trim().length > 0)
    ? raw.category.trim()
    : 'praise-and-worship';

  const cleanCategoryBemba = (typeof raw.categoryBemba === 'string' && raw.categoryBemba.trim().length > 0)
    ? raw.categoryBemba.trim()
    : 'Ukupepa no Kulumbanya';

  const cleanTune = (typeof raw.englishTune === 'string' && raw.englishTune.trim().length > 0)
    ? raw.englishTune.trim()
    : `Traditional Hymn Tune #${hymnNumber}`;

  const cleanKey = (typeof raw.key === 'string' && raw.key.trim().length > 0)
    ? raw.key.trim()
    : 'C Major';

  const cleanTime = (typeof raw.timeSignature === 'string' && raw.timeSignature.trim().length > 0)
    ? raw.timeSignature.trim()
    : '4/4';

  const cleanScripture = (typeof raw.scripture === 'string' && raw.scripture.trim().length > 0)
    ? raw.scripture.trim()
    : 'Amalumbo';

  const cleanChorusLabel = typeof raw.chorusLabel === 'string' ? raw.chorusLabel.trim() : 'Icililishi (Chorus)';

  // Safe MIDI melodic preview
  let melodicPreview: number[] | undefined;
  if (Array.isArray(raw.melodicPreview) && raw.melodicPreview.length > 0) {
    const validNotes = raw.melodicPreview.filter(
      (n): n is number => typeof n === 'number' && Number.isInteger(n) && n >= 21 && n <= 108
    );
    if (validNotes.length > 0) {
      melodicPreview = validNotes;
    }
  }

  const validHymn: Hymn = {
    id: cleanId,
    number: hymnNumber,
    title: cleanTitle,
    writer: cleanWriter,
    englishTune: cleanTune,
    category: cleanCategory,
    categoryBemba: cleanCategoryBemba,
    key: cleanKey,
    timeSignature: cleanTime,
    scripture: cleanScripture,
    verses: cleanVerses,
    chorus: cleanChorus,
    chorusLabel: cleanChorusLabel,
    isSample: true,
    melodicPreview,
  };

  return { isValid: true, hymn: validHymn };
}

/**
 * Validates a list of hymns, deduplicating by hymn number.
 * Prevents accidental duplicate hymn records and corrupt entries.
 */
export function validateAndDeduplicateHymns(candidates: unknown[]): BatchValidationResult {
  if (!Array.isArray(candidates)) {
    return { validHymns: [], rejectedCount: 0, duplicateCount: 0 };
  }

  const hymnsByNumber = new Map<number, Hymn>();
  let rejectedCount = 0;
  let duplicateCount = 0;

  for (const candidate of candidates) {
    const result = validateHymnRecord(candidate);
    if (!result.isValid || !result.hymn) {
      rejectedCount++;
      continue;
    }

    const hymn = result.hymn;

    // Check for duplicate hymn number
    if (hymnsByNumber.has(hymn.number)) {
      duplicateCount++;
      // If the duplicate has richer verse content, prefer it; otherwise keep existing
      const existing = hymnsByNumber.get(hymn.number)!;
      if (hymn.verses.length > existing.verses.length || (hymn.chorus && !existing.chorus)) {
        hymnsByNumber.set(hymn.number, hymn);
      }
    } else {
      hymnsByNumber.set(hymn.number, hymn);
    }
  }

  // Sort deterministically by hymn number ascending
  const validHymns = Array.from(hymnsByNumber.values()).sort((a, b) => a.number - b.number);

  return {
    validHymns,
    rejectedCount,
    duplicateCount,
  };
}

/**
 * Ensures baseline hymns are never deleted or corrupted.
 * Merges loaded hymns with the default baseline, ensuring no duplicates.
 */
export function mergeWithDefaultHymns(
  existingHymns: Hymn[],
  defaultHymns: Hymn[] = SAMPLE_HYMNS
): Hymn[] {
  const map = new Map<number, Hymn>();

  // First seed with defaults
  for (const h of defaultHymns) {
    map.set(h.number, h);
  }

  // Then overlay existing valid hymns
  for (const h of existingHymns) {
    if (h && typeof h.number === 'number' && h.number > 0) {
      map.set(h.number, h);
    }
  }

  return Array.from(map.values()).sort((a, b) => a.number - b.number);
}
