import React, { useState, useEffect, useMemo } from 'react';
import {
  BookOpen,
  Search,
  ChevronLeft,
  ChevronRight,
  Copy,
  Check,
  X,
  ArrowLeft,
  Highlighter,
  Share2,
} from 'lucide-react';

export interface BibleVersionOption {
  id: string;
  label: string;
  fullName: string;
  dataUrl: string;
  available: boolean;
}

export const BIBLE_VERSIONS: BibleVersionOption[] = [
  {
    id: 'kjv',
    label: 'KJV',
    fullName: 'King James Version',
    dataUrl: '/data/bible/kjv.json',
    available: true,
  },
  {
    id: 'esv',
    label: 'ESV',
    fullName: 'English Standard Version',
    dataUrl: '/data/bible/esv.json',
    available: true,
  },
  {
    id: 'gnt',
    label: 'GNT',
    fullName: 'Good News Bible',
    dataUrl: '/data/bible/gnt.json',
    available: true,
  },
];

const bibleVersionCache: Record<string, BibleBook[]> = {};

export interface BibleBook {
  abbrev: string;
  name: string;
  chapters: string[][];
}

interface SearchMatch {
  bookIndex: number;
  bookName: string;
  chapterIndex: number;
  verseIndex: number;
  text: string;
}

interface BibleReaderProps {
  onBackToHymns: () => void;
  initialQuery?: string;
}

const OLD_TESTAMENT_COUNT = 39;
const STORAGE_BOOK_KEY = 'hymnal_bible_book_idx';
const STORAGE_CHAPTER_KEY = 'hymnal_bible_chapter_idx';
const STORAGE_VERSION_KEY = 'hymnal_bible_version';
const STORAGE_HIGHLIGHTS_KEY = 'hymnal_bible_highlights';

type HighlightColorId = 'amber' | 'emerald' | 'sky' | 'rose';

const HIGHLIGHT_COLORS: {
  id: HighlightColorId;
  label: string;
  swatchClass: string;
  rowClass: string;
}[] = [
  {
    id: 'amber',
    label: 'Gold',
    swatchClass: 'bg-amber-300 dark:bg-amber-600 border-amber-500',
    rowClass: 'bg-amber-100/80 dark:bg-amber-900/35',
  },
  {
    id: 'emerald',
    label: 'Green',
    swatchClass: 'bg-emerald-300 dark:bg-emerald-600 border-emerald-500',
    rowClass: 'bg-emerald-100/75 dark:bg-emerald-900/35',
  },
  {
    id: 'sky',
    label: 'Blue',
    swatchClass: 'bg-sky-300 dark:bg-sky-600 border-sky-500',
    rowClass: 'bg-sky-100/75 dark:bg-sky-900/35',
  },
  {
    id: 'rose',
    label: 'Rose',
    swatchClass: 'bg-rose-300 dark:bg-rose-600 border-rose-500',
    rowClass: 'bg-rose-100/75 dark:bg-rose-900/35',
  },
];

export const BibleReader: React.FC<BibleReaderProps> = ({
  onBackToHymns,
  initialQuery = '',
}) => {
  const [selectedVersion, setSelectedVersion] = useState<string>(() => {
    try {
      return localStorage.getItem(STORAGE_VERSION_KEY) || 'kjv';
    } catch {
      return 'kjv';
    }
  });

  const [books, setBooks] = useState<BibleBook[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [loadError, setLoadError] = useState<string | null>(null);

  const [bookIdx, setBookIdx] = useState<number>(() => {
    try {
      const saved = parseInt(localStorage.getItem(STORAGE_BOOK_KEY) || '0', 10);
      return isNaN(saved) || saved < 0 || saved > 65 ? 0 : saved;
    } catch {
      return 0;
    }
  });

  const [chapterIdx, setChapterIdx] = useState<number>(() => {
    try {
      const saved = parseInt(localStorage.getItem(STORAGE_CHAPTER_KEY) || '0', 10);
      return isNaN(saved) || saved < 0 ? 0 : saved;
    } catch {
      return 0;
    }
  });

  const [highlightedVerse, setHighlightedVerse] = useState<number | null>(null);
  const [selectedVerse, setSelectedVerse] = useState<number | null>(null);
  const [savedHighlights, setSavedHighlights] = useState<Record<string, HighlightColorId>>(() => {
    try {
      const raw = localStorage.getItem(STORAGE_HIGHLIGHTS_KEY);
      return raw ? JSON.parse(raw) : {};
    } catch {
      return {};
    }
  });
  const [searchInput, setSearchInput] = useState<string>(initialQuery);
  const [searchResults, setSearchResults] = useState<SearchMatch[] | null>(null);
  const [copiedVerseKey, setCopiedVerseKey] = useState<string | null>(null);
  const [sharedVerseKey, setSharedVerseKey] = useState<string | null>(null);
  const [showBookPicker, setShowBookPicker] = useState<boolean>(false);
  const [testamentFilter, setTestamentFilter] = useState<'all' | 'ot' | 'nt'>('all');

  const versionInfo = useMemo(
    () => BIBLE_VERSIONS.find((v) => v.id === selectedVersion) || BIBLE_VERSIONS[0],
    [selectedVersion]
  );

  // Load Bible JSON lazily when Bible view opens or version switches
  useEffect(() => {
    let mounted = true;
    const cached = bibleVersionCache[versionInfo.id];
    if (cached) {
      setBooks(cached);
      setIsLoading(false);
      setLoadError(null);
      return;
    }

    setIsLoading(true);
    setLoadError(null);

    fetch(versionInfo.dataUrl)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then((data: BibleBook[]) => {
        if (!mounted) return;
        bibleVersionCache[versionInfo.id] = data;
        setBooks(data);
        setIsLoading(false);
      })
      .catch(() => {
        if (!mounted) return;
        setLoadError(
          `Unable to load ${versionInfo.fullName} (${versionInfo.label}) offline. Please connect once to cache this version.`
        );
        setIsLoading(false);
      });

    return () => {
      mounted = false;
    };
  }, [versionInfo.id, versionInfo.dataUrl, versionInfo.fullName, versionInfo.label]);

  // Persist current reading position
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_BOOK_KEY, String(bookIdx));
      localStorage.setItem(STORAGE_CHAPTER_KEY, String(chapterIdx));
      localStorage.setItem(STORAGE_VERSION_KEY, selectedVersion);
    } catch {
      // ignore
    }
  }, [bookIdx, chapterIdx, selectedVersion]);

  const currentBook = books ? books[bookIdx] || books[0] : null;
  const safeChapterIdx =
    currentBook && chapterIdx < currentBook.chapters.length ? chapterIdx : 0;
  const currentVerses = currentBook ? currentBook.chapters[safeChapterIdx] || [] : [];

  const handleSelectBook = (idx: number) => {
    setBookIdx(idx);
    setChapterIdx(0);
    setHighlightedVerse(null);
    setSelectedVerse(null);
    setSearchResults(null);
    setShowBookPicker(false);
  };

  const handleSelectChapter = (chIdx: number) => {
    setChapterIdx(chIdx);
    setHighlightedVerse(null);
    setSelectedVerse(null);
    setSearchResults(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePrevChapter = () => {
    if (!books) return;
    if (safeChapterIdx > 0) {
      handleSelectChapter(safeChapterIdx - 1);
    } else if (bookIdx > 0) {
      const prevBook = books[bookIdx - 1];
      setBookIdx(bookIdx - 1);
      setChapterIdx(prevBook.chapters.length - 1);
      setHighlightedVerse(null);
      setSelectedVerse(null);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleNextChapter = () => {
    if (!books || !currentBook) return;
    if (safeChapterIdx < currentBook.chapters.length - 1) {
      handleSelectChapter(safeChapterIdx + 1);
    } else if (bookIdx < books.length - 1) {
      setBookIdx(bookIdx + 1);
      setChapterIdx(0);
      setHighlightedVerse(null);
      setSelectedVerse(null);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!books) return;
    const raw = searchInput.trim();
    if (!raw) {
      setSearchResults(null);
      return;
    }

    // Check reference format e.g. "John 3:16", "1 John 4:8", "Psalms 23", "Gen 1"
    const refMatch = raw.match(/^([1-3]?\s*[a-zA-Z]+(?:\s+[a-zA-Z]+)*)\s+(\d+)(?::(\d+))?$/);
    if (refMatch) {
      const [, bookQuery, chapStr, verseStr] = refMatch;
      const bq = bookQuery.toLowerCase().trim();
      const matchedBookIdx = books.findIndex((b) => {
        const nameLower = b.name.toLowerCase();
        return (
          nameLower === bq ||
          nameLower.startsWith(bq) ||
          bq.startsWith(nameLower) ||
          b.abbrev.toLowerCase() === bq ||
          (bq.startsWith('song') && nameLower.startsWith('song'))
        );
      });
      if (matchedBookIdx >= 0) {
        const targetBook = books[matchedBookIdx];
        const ch = Math.max(0, Math.min(targetBook.chapters.length - 1, parseInt(chapStr, 10) - 1));
        setBookIdx(matchedBookIdx);
        setChapterIdx(ch);
        setHighlightedVerse(verseStr ? parseInt(verseStr, 10) : null);
        setSelectedVerse(null);
        setSearchResults(null);
        setShowBookPicker(false);
        return;
      }
    }

    // Keyword search across verses (cap at 60 matches for snappy UI)
    const needle = raw.toLowerCase();
    const matches: SearchMatch[] = [];
    for (let b = 0; b < books.length && matches.length < 60; b++) {
      const book = books[b];
      for (let c = 0; c < book.chapters.length && matches.length < 60; c++) {
        const verses = book.chapters[c];
        for (let v = 0; v < verses.length && matches.length < 60; v++) {
          if (verses[v].toLowerCase().includes(needle)) {
            matches.push({
              bookIndex: b,
              bookName: book.name,
              chapterIndex: c,
              verseIndex: v,
              text: verses[v],
            });
          }
        }
      }
    }
    setSearchResults(matches);
  };

  const handleToggleHighlight = (verseNum: number, color: HighlightColorId | null) => {
    const key = `${bookIdx}-${safeChapterIdx}-${verseNum}`;
    setSavedHighlights((prev) => {
      const next = { ...prev };
      if (color === null || next[key] === color) {
        delete next[key];
      } else {
        next[key] = color;
      }
      try {
        localStorage.setItem(STORAGE_HIGHLIGHTS_KEY, JSON.stringify(next));
      } catch {
        // ignore storage quota
      }
      return next;
    });
  };

  const handleCopyVerse = (verseNum: number, text: string) => {
    if (!currentBook) return;
    const key = `${bookIdx}-${safeChapterIdx}-${verseNum}`;
    const citation = `${currentBook.name} ${safeChapterIdx + 1}:${verseNum} (${versionInfo.label})`;
    navigator.clipboard?.writeText(`"${text}" — ${citation}`).catch(() => {});
    setCopiedVerseKey(key);
    setTimeout(() => setCopiedVerseKey((prev) => (prev === key ? null : prev)), 1800);
  };

  const handleShareVerse = async (verseNum: number, text: string) => {
    if (!currentBook) return;
    const key = `${bookIdx}-${safeChapterIdx}-${verseNum}`;
    const citation = `${currentBook.name} ${safeChapterIdx + 1}:${verseNum} (${versionInfo.label})`;
    const shareText = `"${text}" — ${citation}`;

    if (typeof navigator !== 'undefined' && navigator.share) {
      try {
        await navigator.share({
          title: citation,
          text: shareText,
        });
        return;
      } catch {
        // Fallback to copy if share cancelled or unavailable
      }
    }

    navigator.clipboard?.writeText(shareText).catch(() => {});
    setSharedVerseKey(key);
    setTimeout(() => setSharedVerseKey((prev) => (prev === key ? null : prev)), 1800);
  };

  const filteredBooks = useMemo(() => {
    if (!books) return [];
    return books
      .map((b, idx) => ({ book: b, idx }))
      .filter(({ idx }) => {
        if (testamentFilter === 'ot') return idx < OLD_TESTAMENT_COUNT;
        if (testamentFilter === 'nt') return idx >= OLD_TESTAMENT_COUNT;
        return true;
      });
  }, [books, testamentFilter]);

  return (
    <div className="w-full">
      {/* Top Toolbar */}
      <div className="w-full bg-white dark:bg-stone-900 border-b border-stone-200 dark:border-stone-800 px-4 py-4 sm:px-6 sm:py-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3 min-w-0">
            <button
              type="button"
              onClick={onBackToHymns}
              className="h-10 px-3 rounded-xl border border-stone-200 dark:border-stone-700 hover:bg-stone-100 dark:hover:bg-stone-800 text-xs font-medium text-stone-700 dark:text-stone-300 flex items-center gap-1.5 transition-colors shrink-0"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Hymns</span>
            </button>

            <div className="min-w-0">
              <div className="flex items-center gap-2 text-xs text-stone-500 dark:text-stone-400">
                <BookOpen className="w-3.5 h-3.5 text-amber-900 dark:text-amber-400 shrink-0" />
                <span>Holy Bible</span>
                <span aria-hidden="true">·</span>
                <span>{versionInfo.fullName}</span>
              </div>
              <h2 className="font-display text-xl sm:text-2xl font-bold text-stone-900 dark:text-stone-100 truncate">
                {currentBook ? `${currentBook.name} ${safeChapterIdx + 1}` : `Holy Bible (${versionInfo.label})`}
              </h2>
            </div>
          </div>

          {/* Bible Version Selector */}
          <div className="flex items-center gap-2">
            <label htmlFor="bible-version-select" className="text-xs text-stone-500 dark:text-stone-400">
              Version
            </label>
            <select
              id="bible-version-select"
              value={selectedVersion}
              onChange={(e) => {
                setSelectedVersion(e.target.value);
                setSearchResults(null);
              }}
              className="h-10 px-3 rounded-xl bg-stone-100 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 text-xs font-semibold text-stone-900 dark:text-stone-100 focus:outline-hidden focus:ring-2 focus:ring-amber-800/30"
            >
              {BIBLE_VERSIONS.map((v) => (
                <option key={v.id} value={v.id}>
                  {v.label} — {v.fullName}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Navigation Controls & Reference Search */}
        <div className="mt-4 pt-4 border-t border-stone-200/70 dark:border-stone-800 grid grid-cols-1 lg:grid-cols-12 gap-3">
          {/* Book + Chapter selectors */}
          <div className="lg:col-span-6 flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={() => setShowBookPicker(!showBookPicker)}
              className="h-10 px-4 rounded-xl bg-amber-900 hover:bg-amber-950 dark:bg-amber-800 dark:hover:bg-amber-700 text-white text-xs font-semibold transition-colors"
            >
              {currentBook ? currentBook.name : 'Select Book'}
            </button>

            {currentBook && (
              <select
                aria-label="Select Chapter"
                value={safeChapterIdx}
                onChange={(e) => handleSelectChapter(parseInt(e.target.value, 10))}
                className="h-10 px-3 rounded-xl bg-stone-100 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 text-xs font-semibold text-stone-900 dark:text-stone-100"
              >
                {currentBook.chapters.map((_, idx) => (
                  <option key={idx} value={idx}>
                    Chapter {idx + 1}
                  </option>
                ))}
              </select>
            )}

            <div className="flex items-center gap-1 ml-auto sm:ml-0">
              <button
                type="button"
                onClick={handlePrevChapter}
                disabled={!books || (bookIdx === 0 && safeChapterIdx === 0)}
                aria-label="Previous chapter"
                className="w-10 h-10 rounded-xl border border-stone-200 dark:border-stone-700 flex items-center justify-center text-stone-700 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-800 disabled:opacity-30 transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={handleNextChapter}
                disabled={
                  !books ||
                  !currentBook ||
                  (bookIdx === books.length - 1 && safeChapterIdx === currentBook.chapters.length - 1)
                }
                aria-label="Next chapter"
                className="w-10 h-10 rounded-xl border border-stone-200 dark:border-stone-700 flex items-center justify-center text-stone-700 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-800 disabled:opacity-30 transition-colors"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Search reference or keyword */}
          <form onSubmit={handleSearchSubmit} className="lg:col-span-6 flex items-center gap-2">
            <div className="relative flex-1">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" />
              <input
                type="text"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                placeholder="Jump or search (e.g. John 3:16, Psalm 23, shepherd)..."
                className="w-full h-10 pl-9 pr-8 rounded-xl bg-stone-100 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 text-xs sm:text-sm text-stone-900 dark:text-stone-100 placeholder:text-stone-400 focus:outline-hidden focus:ring-2 focus:ring-amber-800/30"
              />
              {searchInput && (
                <button
                  type="button"
                  onClick={() => {
                    setSearchInput('');
                    setSearchResults(null);
                  }}
                  aria-label="Clear Bible search"
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
            <button
              type="submit"
              className="h-10 px-4 rounded-xl bg-stone-900 hover:bg-stone-800 dark:bg-stone-100 dark:hover:bg-stone-200 text-white dark:text-stone-900 text-xs font-semibold transition-colors shrink-0"
            >
              Go
            </button>
          </form>
        </div>

        {/* Collapsible 66-Book Picker */}
        {showBookPicker && books && (
          <div className="mt-4 pt-4 border-t border-stone-200/70 dark:border-stone-800 space-y-3">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <div className="flex items-center gap-1 p-1 bg-stone-100 dark:bg-stone-800 rounded-xl">
                {[
                  { id: 'all', label: 'All (66)' },
                  { id: 'ot', label: 'Old Testament (39)' },
                  { id: 'nt', label: 'New Testament (27)' },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setTestamentFilter(tab.id as 'all' | 'ot' | 'nt')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                      testamentFilter === tab.id
                        ? 'bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-100 shadow-xs'
                        : 'text-stone-600 dark:text-stone-400 hover:text-stone-900'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
              <button
                type="button"
                onClick={() => setShowBookPicker(false)}
                className="text-xs text-stone-500 hover:text-stone-800 dark:hover:text-stone-200"
              >
                Close
              </button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-1.5 max-h-[300px] overflow-y-auto pr-1">
              {filteredBooks.map(({ book, idx }) => {
                const isActive = idx === bookIdx;
                return (
                  <button
                    key={book.abbrev}
                    type="button"
                    onClick={() => handleSelectBook(idx)}
                    className={`px-3 py-2 rounded-lg text-left text-xs font-medium transition-colors truncate ${
                      isActive
                        ? 'bg-amber-900 text-white'
                        : 'bg-stone-50 dark:bg-stone-800/70 text-stone-800 dark:text-stone-200 hover:bg-amber-50 dark:hover:bg-amber-950/40'
                    }`}
                  >
                    {book.name}
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* Loading / Error State */}
      {isLoading && (
        <div className="w-full bg-white dark:bg-stone-900 border-b border-stone-200 dark:border-stone-800 p-10 text-center text-sm text-stone-500 dark:text-stone-400">
          Loading {versionInfo.fullName} ({versionInfo.label})...
        </div>
      )}

      {loadError && (
        <div className="w-full bg-white dark:bg-stone-900 border-b border-stone-200 dark:border-stone-800 p-8 text-center text-sm text-red-700 dark:text-red-400">
          {loadError}
        </div>
      )}

      {/* Search Results View */}
      {!isLoading && !loadError && searchResults && (
        <div className="w-full bg-white dark:bg-stone-900 border-b border-stone-200 dark:border-stone-800 px-4 py-5 sm:px-6 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-serif text-base font-bold text-stone-900 dark:text-stone-100">
              Search Results ({searchResults.length}
              {searchResults.length === 60 ? '+' : ''})
            </h3>
            <button
              type="button"
              onClick={() => setSearchResults(null)}
              className="text-xs font-semibold text-amber-900 dark:text-amber-400 hover:underline"
            >
              Back to chapter
            </button>
          </div>

          {searchResults.length === 0 ? (
            <p className="text-sm text-stone-500 dark:text-stone-400 py-4">
              No verses matched "{searchInput}". Try a reference like "John 3:16" or a shorter phrase.
            </p>
          ) : (
            <div className="divide-y divide-stone-200/70 dark:divide-stone-800">
              {searchResults.map((m) => (
                <button
                  key={`${m.bookIndex}-${m.chapterIndex}-${m.verseIndex}`}
                  type="button"
                  onClick={() => {
                    setBookIdx(m.bookIndex);
                    setChapterIdx(m.chapterIndex);
                    setHighlightedVerse(m.verseIndex + 1);
                    setSearchResults(null);
                  }}
                  className="w-full text-left py-3 hover:bg-stone-50 dark:hover:bg-stone-800/40 px-2 rounded-lg transition-colors"
                >
                  <div className="text-xs font-semibold text-amber-900 dark:text-amber-400">
                    {m.bookName} {m.chapterIndex + 1}:{m.verseIndex + 1}
                  </div>
                  <p className="text-sm text-stone-800 dark:text-stone-200 mt-1 leading-relaxed">
                    {m.text}
                  </p>
                </button>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Chapter Verses Reader */}
      {!isLoading && !loadError && !searchResults && currentBook && (
        <article className="w-full bg-white dark:bg-stone-900 border-b border-stone-200 dark:border-stone-800 px-4 py-5 sm:px-8 sm:py-8">
          <header className="pb-5 mb-6 border-b border-stone-200/70 dark:border-stone-800 flex items-baseline justify-between gap-4 flex-wrap">
            <div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-stone-900 dark:text-stone-100">
                {currentBook.name} {safeChapterIdx + 1}
              </h3>
              <p className="text-xs text-stone-500 dark:text-stone-400 mt-1">
                {versionInfo.fullName} · {currentVerses.length} verses · Tap any verse to highlight, copy, or share
              </p>
            </div>
          </header>

          <div
            className="w-full space-y-2.5"
            style={{
              fontFamily: 'var(--hymn-font-family, inherit)',
              fontSize: 'var(--verse-font-size, 1.0625rem)',
              lineHeight: 'var(--verse-line-height, 1.7)',
            }}
          >
            {currentVerses.map((verseText, idx) => {
              const verseNum = idx + 1;
              const vKey = `${bookIdx}-${safeChapterIdx}-${verseNum}`;
              const userColorId = savedHighlights[vKey];
              const userColorObj = HIGHLIGHT_COLORS.find((c) => c.id === userColorId);
              const isJumpHighlighted = highlightedVerse === verseNum;
              const isSelected = selectedVerse === verseNum;
              const isCopied = copiedVerseKey === vKey;
              const isShared = sharedVerseKey === vKey;

              const rowBgClass = userColorObj
                ? userColorObj.rowClass
                : isJumpHighlighted || isSelected
                ? 'bg-amber-50/90 dark:bg-amber-950/30'
                : 'hover:bg-stone-50 dark:hover:bg-stone-800/30';

              return (
                <div
                  key={verseNum}
                  className={`rounded-xl transition-colors ${rowBgClass}`}
                >
                  <button
                    type="button"
                    onClick={() =>
                      setSelectedVerse((prev) => (prev === verseNum ? null : verseNum))
                    }
                    className="w-full text-left flex items-start gap-3 px-2.5 py-2 rounded-xl cursor-pointer"
                  >
                    <span className="w-7 shrink-0 text-right font-mono tabular-nums text-xs font-semibold text-amber-900/80 dark:text-amber-400/90 pt-1.5 select-none">
                      {verseNum}
                    </span>
                    <span className="flex-1 text-stone-900 dark:text-stone-100">
                      {verseText}
                    </span>
                  </button>

                  {/* Tap Action Bar: Highlight colors, Copy, Share */}
                  {isSelected && (
                    <div className="px-3 pb-3 pt-1 ml-10 flex flex-wrap items-center gap-2 border-t border-stone-200/60 dark:border-stone-800/60">
                      <div className="flex items-center gap-1.5 mr-1">
                        <Highlighter className="w-3.5 h-3.5 text-stone-500 dark:text-stone-400 mr-0.5" />
                        {HIGHLIGHT_COLORS.map((c) => {
                          const activeColor = userColorId === c.id;
                          return (
                            <button
                              key={c.id}
                              type="button"
                              onClick={() => handleToggleHighlight(verseNum, c.id)}
                              aria-label={`Highlight ${currentBook.name} ${safeChapterIdx + 1}:${verseNum} in ${c.label}`}
                              title={`Highlight ${c.label}`}
                              className={`w-7 h-7 rounded-full border transition-transform flex items-center justify-center ${c.swatchClass} ${
                                activeColor
                                  ? 'ring-2 ring-stone-900 dark:ring-white scale-105'
                                  : 'hover:scale-105'
                              }`}
                            >
                              {activeColor && <Check className="w-3.5 h-3.5 text-stone-900" />}
                            </button>
                          );
                        })}
                        {userColorId && (
                          <button
                            type="button"
                            onClick={() => handleToggleHighlight(verseNum, null)}
                            className="h-8 px-2.5 rounded-lg border border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-900 text-xs font-medium text-stone-600 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors"
                          >
                            Clear
                          </button>
                        )}
                      </div>

                      <div className="flex items-center gap-2 ml-auto">
                        <button
                          type="button"
                          onClick={() => handleCopyVerse(verseNum, verseText)}
                          className="h-9 px-3 rounded-lg border border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-900 hover:bg-stone-100 dark:hover:bg-stone-800 text-xs font-semibold text-stone-800 dark:text-stone-200 flex items-center gap-1.5 transition-colors"
                        >
                          {isCopied ? (
                            <>
                              <Check className="w-3.5 h-3.5 text-emerald-700 dark:text-emerald-400" />
                              <span>Copied</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-3.5 h-3.5" />
                              <span>Copy</span>
                            </>
                          )}
                        </button>

                        <button
                          type="button"
                          onClick={() => handleShareVerse(verseNum, verseText)}
                          className="h-9 px-3 rounded-lg bg-amber-900 hover:bg-amber-950 dark:bg-amber-800 dark:hover:bg-amber-700 text-white text-xs font-semibold flex items-center gap-1.5 transition-colors"
                        >
                          {isShared ? (
                            <>
                              <Check className="w-3.5 h-3.5" />
                              <span>Ready to Share</span>
                            </>
                          ) : (
                            <>
                              <Share2 className="w-3.5 h-3.5" />
                              <span>Share</span>
                            </>
                          )}
                        </button>

                        <button
                          type="button"
                          onClick={() => setSelectedVerse(null)}
                          aria-label="Close verse actions"
                          className="w-9 h-9 rounded-lg flex items-center justify-center text-stone-500 hover:text-stone-900 dark:text-stone-400 dark:hover:text-stone-100 hover:bg-stone-200/60 dark:hover:bg-stone-800 transition-colors"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <footer className="mt-8 pt-5 border-t border-stone-200/70 dark:border-stone-800 flex items-center justify-between gap-3">
            <button
              type="button"
              onClick={handlePrevChapter}
              disabled={!books || (bookIdx === 0 && safeChapterIdx === 0)}
              className="h-10 px-4 rounded-xl border border-stone-200 dark:border-stone-700 hover:bg-stone-100 dark:hover:bg-stone-800 text-xs font-semibold text-stone-700 dark:text-stone-300 flex items-center gap-1.5 disabled:opacity-30 transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Previous Chapter</span>
            </button>

            <button
              type="button"
              onClick={handleNextChapter}
              disabled={
                !books ||
                (bookIdx === books.length - 1 && safeChapterIdx === currentBook.chapters.length - 1)
              }
              className="h-10 px-4 rounded-xl bg-amber-900 hover:bg-amber-950 dark:bg-amber-800 dark:hover:bg-amber-700 text-white text-xs font-semibold flex items-center gap-1.5 disabled:opacity-30 transition-colors"
            >
              <span>Next Chapter</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </footer>
        </article>
      )}
    </div>
  );
};
