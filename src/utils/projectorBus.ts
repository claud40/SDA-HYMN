import type { Hymn } from '../data/hymns';

export type ProjectorLangMode = 'side-by-side' | 'bemba' | 'english';

export interface HymnSlide {
  id: string;
  type: 'stanza' | 'chorus';
  stanzaNumber?: number;
  label: string;
  englishLabel: string;
  selectLabel: string;
  localLines: string[];
  englishLines: string[];
}

export interface LiveBiblePayload {
  bookIdx: number;
  bookName: string;
  chapterIdx: number;
  verseNum: number;
  verses: string[];
  versionLabel: string;
  activeVerseText?: string;
}

export interface LiveHymnPayload {
  hymnId: string;
  hymnNumber: number;
  hymnTitle: string;
  slideIndex: number;
  slides: HymnSlide[];
  langMode: ProjectorLangMode;
  languageLabel: string;
  displaySlideNumber?: number;
  displayTotalSlides?: number;
}

export interface LiveProjectorState {
  kind: 'idle' | 'bible' | 'hymn';
  isBlank: boolean;
  isDarkSlide: boolean;
  bible?: LiveBiblePayload;
  hymn?: LiveHymnPayload;
  updatedAt: number;
}

const STORAGE_KEY = 'kristu_live_projector_state';
const CHANNEL_NAME = 'kristu_projector_sync';
const WINDOW_EVENT = 'kristu-projector-live-change';

const DEFAULT_STATE: LiveProjectorState = {
  kind: 'idle',
  isBlank: false,
  isDarkSlide: false,
  updatedAt: 0,
};

let sharedChannel: BroadcastChannel | null = null;

function getChannel(): BroadcastChannel | null {
  if (typeof window === 'undefined' || typeof BroadcastChannel === 'undefined') {
    return null;
  }
  if (!sharedChannel) {
    try {
      sharedChannel = new BroadcastChannel(CHANNEL_NAME);
    } catch {
      sharedChannel = null;
    }
  }
  return sharedChannel;
}

export function buildHymnSlides(hymn: Hymn): HymnSlide[] {
  const built: HymnSlide[] = [];
  const chorusLocal = hymn.chorus || [];
  const chorusEnglish = hymn.englishChorus || [];
  const hasChorus = chorusLocal.length > 0 || chorusEnglish.length > 0;
  const hasEnglish = Boolean(hymn.englishVerses && hymn.englishVerses.length > 0);
  const chorusHeading = (hymn.chorusLabel || 'Chibwekesho').replace(/:$/, '');
  const stanzaTotal = Math.max(
    hymn.verses.length,
    hasEnglish && hymn.englishVerses ? hymn.englishVerses.length : 0
  );

  for (let i = 0; i < stanzaTotal; i++) {
    const stanzaNum = i + 1;
    const localLines = hymn.verses[i] || [];
    const englishLines = hymn.englishVerses?.[i] || [];

    built.push({
      id: `stanza-${stanzaNum}`,
      type: 'stanza',
      stanzaNumber: stanzaNum,
      label: `Stanza ${stanzaNum}`,
      englishLabel: `Stanza ${stanzaNum}`,
      selectLabel: `Stanza ${stanzaNum}`,
      localLines,
      englishLines,
    });

    if (hasChorus) {
      built.push({
        id: `chorus-after-${stanzaNum}`,
        type: 'chorus',
        label: chorusHeading,
        englishLabel: 'Chorus',
        selectLabel: `${chorusHeading} (after ${stanzaNum})`,
        localLines: chorusLocal,
        englishLines: chorusEnglish,
      });
    }
  }

  return built;
}

export function getLiveProjectorState(): LiveProjectorState {
  if (typeof window === 'undefined') return DEFAULT_STATE;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULT_STATE;
    const parsed = JSON.parse(raw) as LiveProjectorState;
    if (
      parsed &&
      (parsed.kind === 'idle' || parsed.kind === 'bible' || parsed.kind === 'hymn')
    ) {
      return {
        kind: parsed.kind,
        isBlank: Boolean(parsed.isBlank),
        isDarkSlide: Boolean(parsed.isDarkSlide),
        bible: parsed.bible,
        hymn: parsed.hymn,
        updatedAt: parsed.updatedAt || 0,
      };
    }
  } catch {
    // ignore storage parse errors
  }
  return DEFAULT_STATE;
}

function commitLiveState(next: LiveProjectorState): LiveProjectorState {
  if (typeof window === 'undefined') return next;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  } catch {
    // ignore quota errors
  }
  const ch = getChannel();
  if (ch) {
    try {
      ch.postMessage(next);
    } catch {
      // ignore closed channel
    }
  }
  window.dispatchEvent(new CustomEvent(WINDOW_EVENT, { detail: next }));
  return next;
}

export function subscribeLiveProjector(
  callback: (state: LiveProjectorState) => void
): () => void {
  if (typeof window === 'undefined') return () => {};

  const handleWindowEvent = (e: Event) => {
    const detail = (e as CustomEvent<LiveProjectorState>).detail;
    if (detail) callback(detail);
  };

  const handleStorageEvent = (e: StorageEvent) => {
    if (e.key === STORAGE_KEY) {
      callback(getLiveProjectorState());
    }
  };

  let ch: BroadcastChannel | null = null;
  const handleChannelMessage = (e: MessageEvent<LiveProjectorState>) => {
    if (e.data) callback(e.data);
  };

  window.addEventListener(WINDOW_EVENT, handleWindowEvent);
  window.addEventListener('storage', handleStorageEvent);

  if (typeof BroadcastChannel !== 'undefined') {
    try {
      ch = new BroadcastChannel(CHANNEL_NAME);
      ch.addEventListener('message', handleChannelMessage);
    } catch {
      ch = null;
    }
  }

  return () => {
    window.removeEventListener(WINDOW_EVENT, handleWindowEvent);
    window.removeEventListener('storage', handleStorageEvent);
    if (ch) {
      ch.removeEventListener('message', handleChannelMessage);
      ch.close();
    }
  };
}

export function projectBibleVerse(payload: LiveBiblePayload): LiveProjectorState {
  const prev = getLiveProjectorState();
  const safeVerse =
    payload.verses.length > 0
      ? Math.max(1, Math.min(payload.verses.length, payload.verseNum))
      : 1;
  return commitLiveState({
    ...prev,
    kind: 'bible',
    isBlank: false,
    bible: {
      ...payload,
      verseNum: safeVerse,
    },
    updatedAt: Date.now(),
  });
}

export function projectHymnSlide(payload: LiveHymnPayload): LiveProjectorState {
  const prev = getLiveProjectorState();
  const safeIndex =
    payload.slides.length > 0
      ? Math.max(0, Math.min(payload.slides.length - 1, payload.slideIndex))
      : 0;
  return commitLiveState({
    ...prev,
    kind: 'hymn',
    isBlank: false,
    hymn: {
      ...payload,
      slideIndex: safeIndex,
    },
    updatedAt: Date.now(),
  });
}

export function stepProjectorSlide(delta: -1 | 1): LiveProjectorState {
  const prev = getLiveProjectorState();
  if (prev.kind === 'bible' && prev.bible && prev.bible.verses.length > 0) {
    const nextVerse = Math.max(
      1,
      Math.min(prev.bible.verses.length, prev.bible.verseNum + delta)
    );
    return commitLiveState({
      ...prev,
      isBlank: false,
      bible: {
        ...prev.bible,
        verseNum: nextVerse,
      },
      updatedAt: Date.now(),
    });
  }
  if (prev.kind === 'hymn' && prev.hymn && prev.hymn.slides.length > 0) {
    const nextIndex = Math.max(
      0,
      Math.min(prev.hymn.slides.length - 1, prev.hymn.slideIndex + delta)
    );
    return commitLiveState({
      ...prev,
      isBlank: false,
      hymn: {
        ...prev.hymn,
        slideIndex: nextIndex,
      },
      updatedAt: Date.now(),
    });
  }
  return prev;
}

export function jumpProjectorSlide(targetIndexOrVerse: number): LiveProjectorState {
  const prev = getLiveProjectorState();
  if (prev.kind === 'bible' && prev.bible && prev.bible.verses.length > 0) {
    const nextVerse = Math.max(
      1,
      Math.min(prev.bible.verses.length, targetIndexOrVerse)
    );
    return commitLiveState({
      ...prev,
      isBlank: false,
      bible: {
        ...prev.bible,
        verseNum: nextVerse,
      },
      updatedAt: Date.now(),
    });
  }
  if (prev.kind === 'hymn' && prev.hymn && prev.hymn.slides.length > 0) {
    const nextIndex = Math.max(
      0,
      Math.min(prev.hymn.slides.length - 1, targetIndexOrVerse)
    );
    return commitLiveState({
      ...prev,
      isBlank: false,
      hymn: {
        ...prev.hymn,
        slideIndex: nextIndex,
      },
      updatedAt: Date.now(),
    });
  }
  return prev;
}

export function setProjectorSlideTheme(isDarkSlide: boolean): LiveProjectorState {
  const prev = getLiveProjectorState();
  return commitLiveState({
    ...prev,
    isDarkSlide,
    updatedAt: Date.now(),
  });
}

export function setProjectorBlank(isBlank: boolean): LiveProjectorState {
  const prev = getLiveProjectorState();
  return commitLiveState({
    ...prev,
    isBlank,
    updatedAt: Date.now(),
  });
}

export function setProjectorHymnLang(langMode: ProjectorLangMode): LiveProjectorState {
  const prev = getLiveProjectorState();
  if (prev.kind !== 'hymn' || !prev.hymn) return prev;
  return commitLiveState({
    ...prev,
    hymn: {
      ...prev.hymn,
      langMode,
    },
    updatedAt: Date.now(),
  });
}

function toUrlSafeBase64(text: string): string {
  const bytes = new TextEncoder().encode(text);
  let binary = '';
  for (let i = 0; i < bytes.length; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return btoa(binary).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/g, '');
}

function fromUrlSafeBase64(b64: string): string {
  const normalized = b64.replace(/-/g, '+').replace(/_/g, '/');
  const padded = normalized + '='.repeat((4 - (normalized.length % 4)) % 4);
  const binary = atob(padded);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) {
    bytes[i] = binary.charCodeAt(i);
  }
  return new TextDecoder().decode(bytes);
}

export function encodeProjectorSnapshotHash(state: LiveProjectorState): string {
  if (typeof window === 'undefined' || state.kind === 'idle') return '';
  try {
    let compact: LiveProjectorState | null = null;
    if (state.kind === 'bible' && state.bible) {
      const safeVerse =
        state.bible.verses.length > 0
          ? Math.max(1, Math.min(state.bible.verses.length, state.bible.verseNum))
          : state.bible.verseNum;
      const activeText =
        state.bible.verses[safeVerse - 1] ?? state.bible.activeVerseText ?? '';
      compact = {
        kind: 'bible',
        isBlank: state.isBlank,
        isDarkSlide: state.isDarkSlide,
        updatedAt: state.updatedAt,
        bible: {
          bookIdx: state.bible.bookIdx,
          bookName: state.bible.bookName,
          chapterIdx: state.bible.chapterIdx,
          verseNum: safeVerse,
          verses: [],
          versionLabel: state.bible.versionLabel,
          activeVerseText: activeText,
        },
      };
    } else if (state.kind === 'hymn' && state.hymn) {
      const safeIdx =
        state.hymn.slides.length > 0
          ? Math.max(0, Math.min(state.hymn.slides.length - 1, state.hymn.slideIndex))
          : 0;
      const activeSlide = state.hymn.slides[safeIdx];
      compact = {
        kind: 'hymn',
        isBlank: state.isBlank,
        isDarkSlide: state.isDarkSlide,
        updatedAt: state.updatedAt,
        hymn: {
          hymnId: state.hymn.hymnId,
          hymnNumber: state.hymn.hymnNumber,
          hymnTitle: state.hymn.hymnTitle,
          slideIndex: 0,
          slides: activeSlide ? [activeSlide] : [],
          langMode: state.hymn.langMode,
          languageLabel: state.hymn.languageLabel,
          displaySlideNumber: state.hymn.displaySlideNumber ?? safeIdx + 1,
          displayTotalSlides: state.hymn.displayTotalSlides ?? state.hymn.slides.length,
        },
      };
    }
    if (!compact) return '';
    return `#live=${toUrlSafeBase64(JSON.stringify(compact))}`;
  } catch {
    return '';
  }
}

export function parseProjectorSnapshotHash(hash: string): LiveProjectorState | null {
  if (!hash || !hash.startsWith('#live=')) return null;
  try {
    const encoded = hash.slice('#live='.length).split('&')[0];
    if (!encoded) return null;
    const parsed = JSON.parse(fromUrlSafeBase64(encoded)) as LiveProjectorState;
    if (
      parsed &&
      (parsed.kind === 'idle' || parsed.kind === 'bible' || parsed.kind === 'hymn')
    ) {
      return {
        kind: parsed.kind,
        isBlank: Boolean(parsed.isBlank),
        isDarkSlide: Boolean(parsed.isDarkSlide),
        bible: parsed.bible,
        hymn: parsed.hymn,
        updatedAt: parsed.updatedAt || 0,
      };
    }
  } catch {
    // ignore malformed hash
  }
  return null;
}
