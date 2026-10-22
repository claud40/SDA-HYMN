import React, { useState, useEffect, useMemo, useRef } from 'react';
import {
  X,
  Settings,
  Sun,
  Moon,
  Monitor,
  Type,
  Smartphone,
  Check,
  RotateCcw,
  Sparkles,
  Bookmark,
  Clock,
  ArrowLeft,
  ArrowRight,
  Shield,
  FileText,
  Globe,
  Trash2,
  Eye,
  ChevronRight,
  CheckCircle2,
  Sliders,
  Compass,
  BookOpen,
  Star,
  Heart,
  Share2,
  MessageSquare,
  Send,
  Copy,
  ExternalLink,
  Mail,
  MessageCircle,
  Gift,
  ThumbsUp,
  AlertCircle,
  Phone
} from 'lucide-react';
import { Hymn, SAMPLE_HYMNS } from '../data/hymns';
import { AdventistLogo } from './AdventistLogo';
import {
  applyThemeToDOM,
  getStoredThemePreference,
  ThemePreference
} from '../utils/theme';
import {
  applyTypographyToDOM,
  getStoredTypography,
  TYPOGRAPHY_CONFIG,
  TextSizePreference as DefaultTextSize,
  LineSpacingPreference,
  FontPreference as DefaultFontFamily,
} from '../utils/typography';

export type { ThemePreference, DefaultTextSize, DefaultFontFamily, LineSpacingPreference };
export type AutoScrollSpeed = 'slow' | 'normal' | 'fast';
export type AppLanguage = 'bemba' | 'english' | 'tonga' | 'nyanja';

export interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  favorites?: string[];
  recentHymns?: { hymnId: string; number: number; title: string; timestamp: number }[];
  allHymns?: Hymn[];
  onSelectHymn?: (hymn: Hymn) => void;
  onViewFavorites?: () => void;
  onClearRecentHistory?: () => void;
  onShowSplashScreen?: () => void;
}

type SettingsTab = 'all' | 'appearance' | 'reading' | 'preferences' | 'feedback' | 'support' | 'about';

export const SettingsModal: React.FC<SettingsModalProps> = ({
  isOpen,
  onClose,
  favorites = [],
  recentHymns = [],
  allHymns = SAMPLE_HYMNS,
  onSelectHymn,
  onViewFavorites,
  onClearRecentHistory,
  onShowSplashScreen,
}) => {
  // Active settings section tab for easy navigation
  const [activeTab, setActiveTab] = useState<SettingsTab>('all');

  // 1. Appearance
  const [themePref, setThemePref] = useState<ThemePreference>(() => getStoredThemePreference());

  // 2. Text & Reading
  const [defaultTextSize, setDefaultTextSize] = useState<DefaultTextSize>(() => {
    return (localStorage.getItem('hymnal_text_size') as DefaultTextSize) || 'large';
  });
  const [lineSpacing, setLineSpacing] = useState<LineSpacingPreference>(() => {
    return (localStorage.getItem('hymnal_line_spacing') as LineSpacingPreference) || 'relaxed';
  });
  const [defaultFontFamily, setDefaultFontFamily] = useState<DefaultFontFamily>(() => {
    return (localStorage.getItem('hymnal_font_family') as DefaultFontFamily) || 'serif';
  });

  // Language
  const [appLang, setAppLang] = useState<AppLanguage>(() => {
    return (localStorage.getItem('hymnal_app_lang') as AppLanguage) || 'bemba';
  });

  // Reading Options (Auto-scroll & Wake Lock)
  const [autoScrollEnabled, setAutoScrollEnabled] = useState<boolean>(() => {
    return localStorage.getItem('hymnal_autoscroll_enabled') === 'true';
  });
  const [autoScrollSpeed, setAutoScrollSpeed] = useState<AutoScrollSpeed>(() => {
    return (localStorage.getItem('hymnal_autoscroll_speed') as AutoScrollSpeed) || 'normal';
  });
  const [keepScreenAwake, setKeepScreenAwake] = useState<boolean>(() => {
    return localStorage.getItem('hymnal_wake_lock') === 'true';
  });

  // About & User Guide Expansion
  const [isAboutExpanded, setIsAboutExpanded] = useState<boolean>(false);
  const mainScrollRef = useRef<HTMLElement>(null);
  const aboutSectionRef = useRef<HTMLElement>(null);

  // Legal modal/expansion
  const [legalView, setLegalView] = useState<'privacy' | 'terms' | null>(null);

  // Reset Confirmation Modal
  const [isResetConfirmOpen, setIsResetConfirmOpen] = useState<boolean>(false);

  // Feedback toast message
  const [feedbackMsg, setFeedbackMsg] = useState<string | null>(null);

  // Rate & Review State
  const [userRating, setUserRating] = useState<number>(() => {
    const saved = localStorage.getItem('hymnal_user_rating');
    return saved ? parseInt(saved, 10) : 5;
  });
  const [hoverRating, setHoverRating] = useState<number>(0);
  const [ratingSubmitted, setRatingSubmitted] = useState<boolean>(() => {
    return localStorage.getItem('hymnal_rating_submitted') === 'true';
  });
  const [ratingComment, setRatingComment] = useState<string>(() => {
    return localStorage.getItem('hymnal_rating_comment') || '';
  });

  // Feedback Submission Form State
  const [feedbackCategory, setFeedbackCategory] = useState<'lyrics' | 'tune' | 'feature' | 'general'>('lyrics');
  const [feedbackHymnNum, setFeedbackHymnNum] = useState<string>('');
  const [feedbackMessage, setFeedbackMessage] = useState<string>('');
  const [feedbackSender, setFeedbackSender] = useState<string>('');
  const [feedbackHistory, setFeedbackHistory] = useState<Array<{ id: string; category: string; hymnNum?: string; message: string; date: string }>>(() => {
    try {
      return JSON.parse(localStorage.getItem('hymnal_feedback_history') || '[]');
    } catch {
      return [];
    }
  });

  // Share & Link Copy State
  const [isCopiedLink, setIsCopiedLink] = useState<boolean>(false);
  const [isCopiedSupport, setIsCopiedSupport] = useState<boolean>(false);

  // Sync state on open and ensure scroll starts at the top
  useEffect(() => {
    if (isOpen) {
      setThemePref(getStoredThemePreference());
      setDefaultTextSize((localStorage.getItem('hymnal_text_size') as DefaultTextSize) || 'large');
      setLineSpacing((localStorage.getItem('hymnal_line_spacing') as LineSpacingPreference) || 'relaxed');
      setDefaultFontFamily((localStorage.getItem('hymnal_font_family') as DefaultFontFamily) || 'serif');
      setAppLang((localStorage.getItem('hymnal_app_lang') as AppLanguage) || 'bemba');
      setAutoScrollEnabled(localStorage.getItem('hymnal_autoscroll_enabled') === 'true');
      setAutoScrollSpeed((localStorage.getItem('hymnal_autoscroll_speed') as AutoScrollSpeed) || 'normal');
      setKeepScreenAwake(localStorage.getItem('hymnal_wake_lock') === 'true');

      if (mainScrollRef.current) {
        mainScrollRef.current.scrollTop = 0;
      }
    }
  }, [isOpen]);

  // When switching settings categories, reset scroll to top
  useEffect(() => {
    if (mainScrollRef.current) {
      mainScrollRef.current.scrollTop = 0;
    }
  }, [activeTab]);

  // Close on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (legalView) setLegalView(null);
        else if (isResetConfirmOpen) setIsResetConfirmOpen(false);
        else onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, legalView, isResetConfirmOpen]);

  const showFeedback = (msg: string) => {
    setFeedbackMsg(msg);
    setTimeout(() => setFeedbackMsg(null), 3000);
  };

  // Theme Change
  const handleSelectTheme = (pref: ThemePreference) => {
    setThemePref(pref);
    applyThemeToDOM(pref);
    showFeedback(`Theme set to: ${pref === 'dark' ? 'Night Sanctuary (Dark)' : pref === 'light' ? 'Warm Parchment (Light)' : 'Follow System'}`);
  };

  // Text size
  const handleSelectTextSize = (size: DefaultTextSize) => {
    setDefaultTextSize(size);
    applyTypographyToDOM({
      textSize: size,
      lineSpacing,
      fontFamily: defaultFontFamily,
    });
    showFeedback(`Text size set to: ${TYPOGRAPHY_CONFIG.textSize[size].label} (${TYPOGRAPHY_CONFIG.textSize[size].desc})`);
  };

  // Line spacing
  const handleSelectLineSpacing = (spacing: LineSpacingPreference) => {
    setLineSpacing(spacing);
    applyTypographyToDOM({
      textSize: defaultTextSize,
      lineSpacing: spacing,
      fontFamily: defaultFontFamily,
    });
    showFeedback(`Line spacing set to: ${TYPOGRAPHY_CONFIG.lineSpacing[spacing].label} (${TYPOGRAPHY_CONFIG.lineSpacing[spacing].desc})`);
  };

  // Font family
  const handleSelectFontFamily = (font: DefaultFontFamily) => {
    setDefaultFontFamily(font);
    applyTypographyToDOM({
      textSize: defaultTextSize,
      lineSpacing,
      fontFamily: font,
    });
    showFeedback(`Font family set to: ${font === 'serif' ? 'Traditional Lora Serif' : 'Modern Clean Sans'}`);
  };

  // Language
  const handleSelectLanguage = (lang: AppLanguage) => {
    setAppLang(lang);
    localStorage.setItem('hymnal_app_lang', lang);
    showFeedback(lang === 'bemba' ? 'Language set to: Bemba (Primary Catalog)' : `Language set to: ${lang.toUpperCase()} (Support in preparation)`);
  };

  // Reading options
  const handleToggleAutoScroll = () => {
    const next = !autoScrollEnabled;
    setAutoScrollEnabled(next);
    localStorage.setItem('hymnal_autoscroll_enabled', String(next));
    window.dispatchEvent(new CustomEvent('hymnal-settings-change', { detail: { autoScrollEnabled: next } }));
    showFeedback(next ? 'Auto-scroll enabled' : 'Auto-scroll disabled');
  };

  const handleSelectAutoScrollSpeed = (speed: AutoScrollSpeed) => {
    setAutoScrollSpeed(speed);
    localStorage.setItem('hymnal_autoscroll_speed', speed);
    window.dispatchEvent(new CustomEvent('hymnal-settings-change', { detail: { autoScrollSpeed: speed } }));
    showFeedback(`Auto-scroll speed set to: ${speed.toUpperCase()}`);
  };

  const handleToggleKeepAwake = () => {
    const next = !keepScreenAwake;
    setKeepScreenAwake(next);
    localStorage.setItem('hymnal_wake_lock', String(next));
    window.dispatchEvent(new CustomEvent('hymnal-settings-change', { detail: { keepScreenAwake: next } }));
    showFeedback(next ? 'Keep screen awake enabled' : 'Keep screen awake disabled');
  };

  // Clear recent history
  const handleClearHistory = () => {
    if (onClearRecentHistory) {
      onClearRecentHistory();
    }
    try {
      localStorage.removeItem('KristuMuNyimbo_recentHistory');
    } catch {}
    showFeedback('Recently viewed hymn history has been cleared');
  };

  const handleToggleAbout = () => {
    const next = !isAboutExpanded;
    setIsAboutExpanded(next);
    if (next) {
      setTimeout(() => {
        aboutSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 50);
    }
  };

  // Reset Preferences Action
  const handleConfirmReset = () => {
    handleSelectTheme('light');
    handleSelectTextSize('large');
    handleSelectLineSpacing('relaxed');
    handleSelectFontFamily('serif');
    handleSelectLanguage('bemba');
    setAutoScrollEnabled(false);
    localStorage.setItem('hymnal_autoscroll_enabled', 'false');
    setAutoScrollSpeed('normal');
    localStorage.setItem('hymnal_autoscroll_speed', 'normal');
    setKeepScreenAwake(false);
    localStorage.setItem('hymnal_wake_lock', 'false');

    setIsResetConfirmOpen(false);
    showFeedback('All preferences have been restored to default values');
  };

  // Rating Actions
  const handleSaveRating = () => {
    localStorage.setItem('hymnal_user_rating', userRating.toString());
    localStorage.setItem('hymnal_rating_submitted', 'true');
    localStorage.setItem('hymnal_rating_comment', ratingComment);
    setRatingSubmitted(true);
    showFeedback(`Twalumba! Thank you for rating Kristu Mu Nyimbo ${userRating} stars!`);
  };

  // Feedback Submission
  const handleSubmitFeedback = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!feedbackMessage.trim()) {
      showFeedback('Please enter your feedback message or typo details.');
      return;
    }
    const newEntry = {
      id: Date.now().toString(),
      category: feedbackCategory,
      hymnNum: feedbackHymnNum.trim() || undefined,
      message: feedbackMessage.trim(),
      sender: feedbackSender.trim() || undefined,
      date: new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }),
    };
    const updated = [newEntry, ...feedbackHistory].slice(0, 15);
    setFeedbackHistory(updated);
    localStorage.setItem('hymnal_feedback_history', JSON.stringify(updated));
    setFeedbackMessage('');
    setFeedbackHymnNum('');
    showFeedback('Feedback recorded! Twalumba saana for helping improve Kristu Mu Nyimbo.');
  };

  // Send via Mailto
  const handleSendEmailFeedback = () => {
    const categoryLabels = {
      lyrics: 'Hymn Lyric or Stanza Correction',
      tune: 'Song Audio Melody or Tune',
      feature: 'App Feature Suggestion',
      general: 'General Praise or Feedback',
    };
    const subject = encodeURIComponent(
      `[Kristu Mu Nyimbo Feedback] ${categoryLabels[feedbackCategory]}${feedbackHymnNum ? ` - Hymn #${feedbackHymnNum}` : ''}`
    );
    const body = encodeURIComponent(
      `Shaleni Bwino / Greetings,\n\n` +
      `Feedback Category: ${categoryLabels[feedbackCategory]}\n` +
      (feedbackHymnNum ? `Hymn Number: #${feedbackHymnNum}\n` : '') +
      (feedbackSender ? `Sender / Church: ${feedbackSender}\n` : '') +
      `Date: ${new Date().toLocaleString()}\n\n` +
      `Feedback / Correction Details:\n${feedbackMessage || '(Please specify your remarks or correction notes here)'}\n\n` +
      `----------------------------------------\n` +
      `App: Kristu Mu Nyimbo — Bemba SDA Hymnal (v2.5.0 PWA)\n` +
      `Seventh-day Adventist Church • Zambia Union Conference Publications`
    );
    window.location.href = `mailto:worship@kristumunyimbo.adventist.org.zm?subject=${subject}&body=${body}`;
  };

  // Send Feedback directly via WhatsApp (+260771500266)
  const handleSendWhatsAppFeedback = () => {
    const categoryLabels = {
      lyrics: 'Hymn Lyric Correction',
      tune: 'Hymn Melody/Tune',
      feature: 'App Feature Suggestion',
      general: 'Praise / Feedback',
    };
    const message = encodeURIComponent(
      `*Kristu Mu Nyimbo Feedback*\n` +
      `Category: ${categoryLabels[feedbackCategory]}\n` +
      (feedbackHymnNum ? `Hymn #: ${feedbackHymnNum}\n` : '') +
      (feedbackSender ? `From: ${feedbackSender}\n` : '') +
      `Message: ${feedbackMessage || 'Greetings from church!'}`
    );
    window.open(`https://wa.me/260771500266?text=${message}`, '_blank');
  };

  // Share App via Web Share API or Clipboard
  const handleShareApp = async () => {
    const shareData = {
      title: 'Kristu Mu Nyimbo — Bemba SDA Hymnal',
      text: 'Lumbanyani Lesa! Sing praises with Kristu Mu Nyimbo — the digital Bemba Seventh-day Adventist Hymnal with fast number search, verses, and 100% offline access.',
      url: window.location.href,
    };
    if (navigator.share) {
      try {
        await navigator.share(shareData);
        showFeedback('Kristu Mu Nyimbo shared successfully!');
        return;
      } catch (err) {
        if ((err as Error).name !== 'AbortError') {
          handleCopyLink();
        }
      }
    } else {
      handleCopyLink();
    }
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setIsCopiedLink(true);
    showFeedback('App link copied to clipboard!');
    setTimeout(() => setIsCopiedLink(false), 2500);
  };

  const handleShareWhatsApp = () => {
    const text = encodeURIComponent(
      `Mwashibukeni! Sing praises to God with the Kristu Mu Nyimbo Bemba Seventh-day Adventist Hymnal app (100% offline):\n${window.location.href}`
    );
    window.open(`https://wa.me/?text=${text}`, '_blank');
  };

  const handleCopySupportInfo = () => {
    const details = `Kristu Mu Nyimbo Digital Ministry Support\nAirtel Money / Mobile Money: +260771500266 (+260 771 500 266)\nReference: Kristu Mu Nyimbo Hymnal Project\nSeventh-day Adventist Church Zambia Union Conference`;
    navigator.clipboard.writeText(details);
    setIsCopiedSupport(true);
    showFeedback('Support details (+260771500266) copied to clipboard!');
    setTimeout(() => setIsCopiedSupport(false), 2500);
  };

  if (!isOpen) return null;

  const categories = [
    { id: 'all', label: 'All Settings', icon: Sliders },
    { id: 'appearance', label: 'Appearance & Text', icon: Sun },
    { id: 'reading', label: 'Reading Options', icon: BookOpen },
    { id: 'preferences', label: 'My Preferences', icon: Bookmark },
    { id: 'feedback', label: 'Feedback & Rating', icon: MessageSquare },
    { id: 'support', label: 'Share & Support Us', icon: Heart },
    { id: 'about', label: 'About & User Guide', icon: Sparkles },
  ] as const;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="settings-dialog-title"
      className="fixed inset-0 z-50 w-full w-screen h-full h-screen h-[100dvh] flex flex-col bg-[#FAF8F5] dark:bg-stone-950 text-stone-900 dark:text-stone-100 overflow-hidden animate-in fade-in duration-200"
    >
      {/* Top Header Bar spanning full width */}
      <header className="shrink-0 h-14 sm:h-16 px-3 sm:px-6 lg:px-8 border-b border-stone-200/80 dark:border-stone-800 bg-[#FAF8F5]/95 dark:bg-stone-950/95 backdrop-blur-md flex items-center justify-between gap-3 z-10">
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            type="button"
            onClick={onClose}
            className="h-9 px-2.5 sm:px-3 rounded-xl flex items-center gap-1.5 text-xs sm:text-sm font-medium bg-stone-200/60 hover:bg-stone-200 dark:bg-stone-800/80 dark:hover:bg-stone-800 text-stone-800 dark:text-stone-200 transition-colors cursor-pointer"
            aria-label="Back to hymnal"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Back</span>
          </button>

          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-amber-900/10 dark:bg-amber-400/10 text-amber-900 dark:text-amber-400 flex items-center justify-center shrink-0">
              <Settings className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div>
              <h1 id="settings-dialog-title" className="text-sm sm:text-base lg:text-lg font-bold text-stone-900 dark:text-stone-100 font-sans tracking-tight leading-none">
                Settings
              </h1>
              <p className="text-[10px] sm:text-xs text-stone-500 dark:text-stone-400 hidden xs:block mt-0.5">
                Kristu Mu Nyimbo Preferences & Tools
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setIsResetConfirmOpen(true)}
            className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-stone-300 dark:border-stone-700 hover:border-red-400 text-stone-600 hover:text-red-600 dark:text-stone-400 dark:hover:text-red-400 text-xs font-medium transition-colors cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset Defaults</span>
          </button>

          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 bg-amber-900 hover:bg-amber-950 text-white rounded-xl text-xs font-semibold shadow-xs transition-colors cursor-pointer flex items-center gap-1.5"
          >
            <Check className="w-3.5 h-3.5" />
            <span>Done</span>
          </button>
        </div>
      </header>

      {/* Main Responsive Body (Sidebar on tablet/desktop, horizontal tabs on mobile) */}
      <div className="flex-1 flex flex-col md:flex-row overflow-hidden w-full">
        {/* Desktop / Tablet Left Sidebar Navigation */}
        <aside className="hidden md:flex w-64 lg:w-72 shrink-0 border-r border-stone-200 dark:border-stone-800 bg-stone-100/50 dark:bg-stone-900/40 flex-col overflow-y-auto p-4 space-y-1">
          <div className="text-[10px] uppercase font-bold tracking-wider text-stone-400 px-3 py-1.5">
            Categories
          </div>
          {categories.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-xs font-medium transition-all text-left cursor-pointer ${
                  isActive
                    ? 'bg-amber-900 text-white font-semibold shadow-xs'
                    : 'text-stone-700 dark:text-stone-300 hover:bg-stone-200/50 dark:hover:bg-stone-800/60'
                }`}
              >
                <Icon className={`w-4 h-4 shrink-0 ${isActive ? 'text-white' : 'text-amber-800 dark:text-amber-400'}`} />
                <span className="truncate">{item.label}</span>
              </button>
            );
          })}

          <div className="pt-4 mt-auto border-t border-stone-200/80 dark:border-stone-800">
            <div className="p-3 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-[11px] text-amber-900 dark:text-amber-300">
              <span className="font-semibold block mb-0.5">100% Offline PWA</span>
              <span>All hymns, audio previews, and settings operate entirely on your device with no internet connection required.</span>
            </div>
          </div>
        </aside>

        {/* Mobile Horizontal Tabs Navigation Bar */}
        <div className="md:hidden shrink-0 border-b border-stone-200/90 dark:border-stone-800 bg-white/80 dark:bg-stone-900/80 backdrop-blur-md px-3 py-2 flex items-center gap-1.5 overflow-x-auto no-scrollbar scroll-smooth">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => {
                  setActiveTab(cat.id as SettingsTab);
                  mainScrollRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`px-3 py-1.5 rounded-xl text-xs font-medium whitespace-nowrap flex items-center gap-1.5 shrink-0 transition-colors cursor-pointer ${
                  isActive
                    ? 'bg-amber-900 text-white dark:bg-amber-500 dark:text-stone-950 font-bold shadow-xs'
                    : 'bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-300 hover:bg-stone-200 dark:hover:bg-stone-700'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Main Full-Screen Scrollable Content Area */}
        <main ref={mainScrollRef} className="flex-1 overflow-y-auto px-3 sm:px-6 md:px-8 lg:px-12 py-4 sm:py-6 space-y-5 sm:space-y-6">
          <div className="max-w-4xl mx-auto space-y-6">

            {/* Notification Feedback Toast */}
            {feedbackMsg && (
              <div className="p-3 bg-amber-900/10 dark:bg-amber-400/10 border border-amber-800/20 text-amber-900 dark:text-amber-300 text-xs rounded-2xl flex items-center gap-2 animate-in fade-in shrink-0">
                <CheckCircle2 className="w-4 h-4 shrink-0 text-amber-800 dark:text-amber-400" />
                <span className="font-medium">{feedbackMsg}</span>
              </div>
            )}

            {/* ========================================================
                SECTION 1: APPEARANCE
               ======================================================== */}
            {(activeTab === 'all' || activeTab === 'appearance') && (
              <section className="bg-white dark:bg-stone-900/80 rounded-2xl p-4 sm:p-6 border border-stone-200 dark:border-stone-800 shadow-xs space-y-3">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold uppercase tracking-wider text-amber-900 dark:text-amber-400 flex items-center gap-2">
                    <Sun className="w-4 h-4 text-amber-700 dark:text-amber-400" />
                    <span>1. Appearance & Theme</span>
                  </label>
                  <span className="text-[11px] text-stone-400 font-mono">
                    {themePref === 'dark' ? 'Night Sanctuary' : themePref === 'light' ? 'Warm Parchment' : 'Auto System'}
                  </span>
                </div>
                <p className="text-xs text-stone-500 dark:text-stone-400">
                  Choose a visual theme suitable for church worship, choir rehearsals, and personal devotion.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-1">
                  {/* Light Theme */}
                  <button
                    type="button"
                    onClick={() => handleSelectTheme('light')}
                    className={`p-3.5 rounded-2xl border text-left flex flex-col gap-2 transition-all cursor-pointer ${
                      themePref === 'light'
                        ? 'border-amber-800 bg-amber-50/80 dark:bg-amber-950/40 text-amber-950 dark:text-amber-200 ring-2 ring-amber-800/20 shadow-xs'
                        : 'border-stone-200 dark:border-stone-800 bg-stone-50/50 dark:bg-stone-800/60 text-stone-700 dark:text-stone-300 hover:border-stone-300 dark:hover:border-stone-700'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <Sun className="w-4 h-4 text-amber-700 dark:text-amber-400" />
                      {themePref === 'light' && <Check className="w-3.5 h-3.5 text-amber-800 dark:text-amber-400" />}
                    </div>
                    <div>
                      <div className="text-xs font-bold">Light</div>
                      <div className="text-[10px] text-stone-500 dark:text-stone-400">Warm Parchment</div>
                    </div>
                  </button>

                  {/* Dark Theme */}
                  <button
                    type="button"
                    onClick={() => handleSelectTheme('dark')}
                    className={`p-3.5 rounded-2xl border text-left flex flex-col gap-2 transition-all cursor-pointer ${
                      themePref === 'dark'
                        ? 'border-amber-800 bg-amber-50/80 dark:bg-amber-950/40 text-amber-950 dark:text-amber-200 ring-2 ring-amber-800/20 shadow-xs'
                        : 'border-stone-200 dark:border-stone-800 bg-stone-50/50 dark:bg-stone-800/60 text-stone-700 dark:text-stone-300 hover:border-stone-300 dark:hover:border-stone-700'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <Moon className="w-4 h-4 text-stone-600 dark:text-amber-400" />
                      {themePref === 'dark' && <Check className="w-3.5 h-3.5 text-amber-800 dark:text-amber-400" />}
                    </div>
                    <div>
                      <div className="text-xs font-bold">Dark</div>
                      <div className="text-[10px] text-stone-500 dark:text-stone-400">Night Sanctuary</div>
                    </div>
                  </button>

                  {/* System Theme */}
                  <button
                    type="button"
                    onClick={() => handleSelectTheme('system')}
                    className={`p-3.5 rounded-2xl border text-left flex flex-col gap-2 transition-all cursor-pointer ${
                      themePref === 'system'
                        ? 'border-amber-800 bg-amber-50/80 dark:bg-amber-950/40 text-amber-950 dark:text-amber-200 ring-2 ring-amber-800/20 shadow-xs'
                        : 'border-stone-200 dark:border-stone-800 bg-stone-50/50 dark:bg-stone-800/60 text-stone-700 dark:text-stone-300 hover:border-stone-300 dark:hover:border-stone-700'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <Monitor className="w-4 h-4 text-stone-500 dark:text-stone-400" />
                      {themePref === 'system' && <Check className="w-3.5 h-3.5 text-amber-800 dark:text-amber-400" />}
                    </div>
                    <div>
                      <div className="text-xs font-bold">System</div>
                      <div className="text-[10px] text-stone-500 dark:text-stone-400">Follow Device</div>
                    </div>
                  </button>
                </div>
              </section>
            )}

            {/* ========================================================
                SECTION 2: TEXT AND READING WITH LIVE PREVIEW
               ======================================================== */}
            {(activeTab === 'all' || activeTab === 'appearance') && (
              <section className="bg-white dark:bg-stone-900/80 rounded-2xl p-4 sm:p-6 border border-stone-200 dark:border-stone-800 shadow-xs space-y-4">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold uppercase tracking-wider text-amber-900 dark:text-amber-400 flex items-center gap-2">
                    <Type className="w-4 h-4 text-amber-700 dark:text-amber-400" />
                    <span>2. Text & Typography</span>
                  </label>
                </div>

                {/* Text Size Stepper */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold text-stone-800 dark:text-stone-200">
                      Hymn Text Size
                    </span>
                    <span className="text-[11px] text-stone-500 font-mono">
                      {defaultTextSize === 'elder' ? '24px (Senior)' : defaultTextSize === 'xlarge' ? '21px (Extra Large)' : defaultTextSize === 'large' ? '18px (Large)' : '16px (Standard)'}
                    </span>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {[
                      { id: 'standard', label: 'Standard', desc: '16px' },
                      { id: 'large', label: 'Large', desc: '18px' },
                      { id: 'xlarge', label: 'Extra Large', desc: '21px' },
                      { id: 'elder', label: 'Senior', desc: '24px' },
                    ].map((item) => (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => handleSelectTextSize(item.id as DefaultTextSize)}
                        className={`p-3 rounded-xl border text-center transition-all cursor-pointer ${
                          defaultTextSize === item.id
                            ? 'border-amber-800 bg-amber-900 text-white font-bold shadow-xs'
                            : 'border-stone-200 dark:border-stone-800 bg-stone-50/50 dark:bg-stone-800/60 text-stone-700 dark:text-stone-300 hover:border-amber-700/40'
                        }`}
                      >
                        <div className="text-xs">{item.label}</div>
                        <div className={`text-[10px] ${defaultTextSize === item.id ? 'text-amber-200' : 'text-stone-400'}`}>
                          {item.desc}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Line Spacing */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold text-stone-800 dark:text-stone-200">
                      Line Spacing
                    </span>
                    <span className="text-[11px] text-stone-500 font-mono">
                      {lineSpacing === 'loose' ? '2.3x (Loose)' : lineSpacing === 'relaxed' ? '1.85x (Relaxed)' : '1.5x (Normal)'}
                    </span>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { id: 'normal', label: 'Normal', desc: '1.5x' },
                      { id: 'relaxed', label: 'Relaxed', desc: '1.85x' },
                      { id: 'loose', label: 'Loose', desc: '2.3x' },
                    ].map((item) => (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => handleSelectLineSpacing(item.id as LineSpacingPreference)}
                        className={`p-3 rounded-xl border text-center transition-all cursor-pointer ${
                          lineSpacing === item.id
                            ? 'border-amber-800 bg-amber-900 text-white font-bold shadow-xs'
                            : 'border-stone-200 dark:border-stone-800 bg-stone-50/50 dark:bg-stone-800/60 text-stone-700 dark:text-stone-300 hover:border-amber-700/40'
                        }`}
                      >
                        <div className="text-xs">{item.label}</div>
                        <div className={`text-[10px] ${lineSpacing === item.id ? 'text-amber-200' : 'text-stone-400'}`}>
                          {item.desc}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Font Family Choice */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between p-3.5 rounded-2xl bg-stone-50/80 dark:bg-stone-800/60 border border-stone-200 dark:border-stone-800 gap-2">
                  <div>
                    <div className="text-xs font-bold text-stone-900 dark:text-stone-100">Font Family</div>
                    <div className="text-[11px] text-stone-500 dark:text-stone-400">Choose between Traditional Lora Serif or Modern Clean Sans</div>
                  </div>
                  <div className="flex rounded-xl overflow-hidden border border-stone-300 dark:border-stone-700 self-start sm:self-auto">
                    <button
                      type="button"
                      onClick={() => handleSelectFontFamily('serif')}
                      className={`px-3 py-1.5 text-xs font-serif transition-colors cursor-pointer ${
                        defaultFontFamily === 'serif'
                          ? 'bg-amber-900 text-white font-bold'
                          : 'bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-300'
                      }`}
                    >
                      Lora Serif
                    </button>
                    <button
                      type="button"
                      onClick={() => handleSelectFontFamily('sans')}
                      className={`px-3 py-1.5 text-xs font-sans transition-colors cursor-pointer ${
                        defaultFontFamily === 'sans'
                          ? 'bg-amber-900 text-white font-bold'
                          : 'bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-300'
                      }`}
                    >
                      Modern Sans
                    </button>
                  </div>
                </div>

                {/* LIVE LYRICS PREVIEW BOX */}
                <div className="mt-3 rounded-2xl p-4 sm:p-5 border border-amber-800/30 dark:border-amber-600/30 bg-[#FAF8F5] dark:bg-stone-950 transition-colors">
                  <div className="flex items-center justify-between pb-2 border-b border-amber-800/20 dark:border-amber-600/20 mb-3">
                    <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-900 dark:text-amber-400">
                      <Eye className="w-3.5 h-3.5" />
                      <span>Live Lyric Preview</span>
                    </div>
                    <span className="text-[10px] text-stone-400 font-mono">HYMN 1 SAMPLE</span>
                  </div>

                  <div
                    style={{
                      fontFamily: TYPOGRAPHY_CONFIG.fontFamily[defaultFontFamily],
                    }}
                    className="text-stone-900 dark:text-stone-100 transition-all"
                  >
                    <h4
                      className="font-bold text-amber-900 dark:text-amber-400 mb-2.5"
                      style={{
                        fontSize: `${Math.min(26, TYPOGRAPHY_CONFIG.textSize[defaultTextSize].titlePx * 0.8)}px`,
                        fontFamily: TYPOGRAPHY_CONFIG.fontFamily[defaultFontFamily],
                      }}
                    >
                      Hymn 1 — Mwe Mweo Wandi, Cisheni Muli Lesa
                    </h4>

                    {/* Verse Preview (4 distinct hymn stanzas) */}
                    <div
                      style={{
                        fontSize: `${TYPOGRAPHY_CONFIG.textSize[defaultTextSize].versePx}px`,
                        lineHeight: TYPOGRAPHY_CONFIG.lineSpacing[lineSpacing].multiplier,
                        fontFamily: TYPOGRAPHY_CONFIG.fontFamily[defaultFontFamily],
                      }}
                      className="transition-all"
                    >
                      {[
                        '1. Mwe mweo wandi, cisheni muli Lesa;',
                        'Nimwe wine wansangulwile lelo.',
                        'Ndemulumba no mutima onse,',
                        'Mwe Mupusushi wandi.',
                      ].map((line, idx) => (
                        <p
                          key={idx}
                          className="font-medium text-stone-800 dark:text-stone-200 transition-all"
                          style={{
                            lineHeight: TYPOGRAPHY_CONFIG.lineSpacing[lineSpacing].multiplier,
                            marginBottom: `${(TYPOGRAPHY_CONFIG.lineSpacing[lineSpacing].multiplier - 1) * 0.45}rem`,
                          }}
                        >
                          {line}
                        </p>
                      ))}
                    </div>

                    {/* Chorus Preview */}
                    <div
                      className="mt-3 p-3.5 rounded-xl bg-amber-900/10 dark:bg-amber-400/10 border border-amber-900/20 dark:border-amber-400/20 italic transition-all"
                      style={{
                        fontSize: `${Math.max(14, TYPOGRAPHY_CONFIG.textSize[defaultTextSize].versePx - 2)}px`,
                        lineHeight: TYPOGRAPHY_CONFIG.lineSpacing[lineSpacing].multiplier,
                        fontFamily: TYPOGRAPHY_CONFIG.fontFamily[defaultFontFamily],
                      }}
                    >
                      <span className="font-bold uppercase tracking-wider not-italic text-[10px] text-amber-900 dark:text-amber-400 block mb-1">
                        Chorus:
                      </span>
                      {[
                        'Citemwiko cakwe cankutemwa;',
                        'Nimwe mulopwe wandi umupya,',
                        'Nkalatasha pe na pe!',
                      ].map((cLine, cIdx) => (
                        <p
                          key={cIdx}
                          className="text-stone-700 dark:text-stone-300 transition-all"
                          style={{
                            lineHeight: TYPOGRAPHY_CONFIG.lineSpacing[lineSpacing].multiplier,
                            marginBottom: `${(TYPOGRAPHY_CONFIG.lineSpacing[lineSpacing].multiplier - 1) * 0.4}rem`,
                          }}
                        >
                          {cLine}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </section>
            )}

            {/* ========================================================
                SECTION 3: READING OPTIONS (Auto-Scroll & Keep Awake)
               ======================================================== */}
            {(activeTab === 'all' || activeTab === 'reading') && (
              <section className="bg-white dark:bg-stone-900/80 rounded-2xl p-4 sm:p-6 border border-stone-200 dark:border-stone-800 shadow-xs space-y-4">
                <label className="text-xs font-bold uppercase tracking-wider text-amber-900 dark:text-amber-400 flex items-center gap-2">
                  <Sliders className="w-4 h-4 text-amber-700 dark:text-amber-400" />
                  <span>3. Reading Options</span>
                </label>

                {/* Keep Screen Awake Switch */}
                <div className="p-4 rounded-2xl bg-stone-50/80 dark:bg-stone-800/60 border border-stone-200 dark:border-stone-800 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5">
                    <Smartphone className="w-4 h-4 text-amber-800 dark:text-amber-400 shrink-0" />
                    <div>
                      <div className="text-xs font-bold text-stone-900 dark:text-stone-100">
                        Keep Screen Awake
                      </div>
                      <div className="text-[11px] text-stone-500 dark:text-stone-400">
                        Prevents your device screen from turning off while reading hymns
                      </div>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={handleToggleKeepAwake}
                    className={`w-11 h-6 rounded-full transition-colors relative focus:outline-hidden cursor-pointer ${
                      keepScreenAwake ? 'bg-amber-900' : 'bg-stone-300 dark:bg-stone-700'
                    }`}
                    role="switch"
                    aria-checked={keepScreenAwake}
                  >
                    <span
                      className={`w-4 h-4 rounded-full bg-white absolute top-1 transition-transform ${
                        keepScreenAwake ? 'left-6' : 'left-1'
                      }`}
                    />
                  </button>
                </div>

                {/* Auto-Scroll Hymns */}
                <div className="p-4 rounded-2xl bg-stone-50/80 dark:bg-stone-800/60 border border-stone-200 dark:border-stone-800 space-y-3">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <div className="text-xs font-bold text-stone-900 dark:text-stone-100">
                        Auto-Scroll Hymns
                      </div>
                      <div className="text-[11px] text-stone-500 dark:text-stone-400">
                        Gently scrolls lyrics downward while you are singing or playing an instrument
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={handleToggleAutoScroll}
                      className={`w-11 h-6 rounded-full transition-colors relative focus:outline-hidden cursor-pointer ${
                        autoScrollEnabled ? 'bg-amber-900' : 'bg-stone-300 dark:bg-stone-700'
                      }`}
                      role="switch"
                      aria-checked={autoScrollEnabled}
                    >
                      <span
                        className={`w-4 h-4 rounded-full bg-white absolute top-1 transition-transform ${
                          autoScrollEnabled ? 'left-6' : 'left-1'
                        }`}
                      />
                    </button>
                  </div>

                  {autoScrollEnabled && (
                    <div className="pt-2 border-t border-stone-200/80 dark:border-stone-700/80 animate-in fade-in">
                      <span className="text-[11px] font-semibold text-stone-700 dark:text-stone-300 block mb-2">
                        Scroll Speed
                      </span>
                      <div className="grid grid-cols-3 gap-2">
                        {[
                          { id: 'slow', label: 'Slow', desc: '15 px/s' },
                          { id: 'normal', label: 'Normal', desc: '25 px/s' },
                          { id: 'fast', label: 'Fast', desc: '40 px/s' },
                        ].map((s) => (
                          <button
                            key={s.id}
                            type="button"
                            onClick={() => handleSelectAutoScrollSpeed(s.id as AutoScrollSpeed)}
                            className={`p-2.5 rounded-xl border text-center transition-all cursor-pointer ${
                              autoScrollSpeed === s.id
                                ? 'border-amber-800 bg-amber-900 text-white font-bold'
                                : 'border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-800 text-stone-700 dark:text-stone-300'
                            }`}
                          >
                            <div className="text-xs">{s.label}</div>
                            <div className={`text-[10px] ${autoScrollSpeed === s.id ? 'text-amber-200' : 'text-stone-400'}`}>
                              {s.desc}
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </section>
            )}

            {/* ========================================================
                SECTION 4: MY PREFERENCES (Favorites & Recent Hymns)
               ======================================================== */}
            {(activeTab === 'all' || activeTab === 'preferences') && (
              <section className="bg-white dark:bg-stone-900/80 rounded-2xl p-4 sm:p-6 border border-stone-200 dark:border-stone-800 shadow-xs space-y-3.5">
                <label className="text-xs font-bold uppercase tracking-wider text-amber-900 dark:text-amber-400 flex items-center gap-2">
                  <Bookmark className="w-4 h-4 text-amber-700 dark:text-amber-400" />
                  <span>4. My Preferences</span>
                </label>

                {/* Favorites summary */}
                <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-600/20 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5">
                    <Bookmark className="w-4 h-4 text-amber-800 dark:text-amber-400 fill-current shrink-0" />
                    <div>
                      <div className="text-xs font-bold text-stone-900 dark:text-stone-100">
                        Favorite Hymns
                      </div>
                      <div className="text-[11px] text-stone-500 dark:text-stone-400">
                        You have {favorites.length} saved hymns in your collection
                      </div>
                    </div>
                  </div>
                  {onViewFavorites && (
                    <button
                      type="button"
                      onClick={onViewFavorites}
                      className="px-3.5 py-2 rounded-xl bg-amber-900 hover:bg-amber-950 text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer shadow-xs self-start sm:self-auto"
                    >
                      <span>View All Favorites</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>

                {/* Recently Viewed Hymns */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold text-stone-800 dark:text-stone-200 flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-stone-500" />
                      <span>Recently Viewed Hymns</span>
                    </span>

                    {recentHymns && recentHymns.length > 0 && (
                      <button
                        type="button"
                        onClick={handleClearHistory}
                        className="text-[11px] text-stone-500 hover:text-red-600 dark:text-stone-400 dark:hover:text-red-400 flex items-center gap-1 transition-colors cursor-pointer"
                      >
                        <Trash2 className="w-3 h-3" />
                        <span>Clear History</span>
                      </button>
                    )}
                  </div>

                  {recentHymns && recentHymns.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {recentHymns.slice(0, 4).map((record) => {
                        const fullHymn = allHymns.find((h) => h.id === record.hymnId || h.number === record.number);
                        return (
                          <button
                            key={record.hymnId}
                            type="button"
                            onClick={() => {
                              if (fullHymn && onSelectHymn) {
                                onSelectHymn(fullHymn);
                              }
                            }}
                            className="p-3 rounded-xl border border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-800/40 hover:bg-amber-50/60 dark:hover:bg-amber-950/20 text-left flex items-center justify-between transition-colors cursor-pointer"
                          >
                            <div className="truncate pr-2">
                              <span className="text-[10px] font-mono font-bold text-amber-800 dark:text-amber-400 mr-1.5">
                                #{record.number}
                              </span>
                              <span className="text-xs font-medium text-stone-800 dark:text-stone-200 truncate">
                                {record.title}
                              </span>
                            </div>
                            <ChevronRight className="w-3.5 h-3.5 text-stone-400 shrink-0" />
                          </button>
                        );
                      })}
                    </div>
                  ) : (
                    <p className="text-xs text-stone-400 dark:text-stone-500 italic p-3 rounded-xl bg-stone-50 dark:bg-stone-800/30 border border-stone-200/50 dark:border-stone-800/50">
                      No recently viewed hymns recorded yet.
                    </p>
                  )}
                </div>
              </section>
            )}

            {/* ========================================================
                SECTION 5: LANGUAGE SELECTION
               ======================================================== */}
            {(activeTab === 'all' || activeTab === 'appearance') && (
              <section className="bg-white dark:bg-stone-900/80 rounded-2xl p-4 sm:p-6 border border-stone-200 dark:border-stone-800 shadow-xs space-y-3">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold uppercase tracking-wider text-amber-900 dark:text-amber-400 flex items-center gap-2">
                    <Globe className="w-4 h-4 text-amber-700 dark:text-amber-400" />
                    <span>5. Language Selection</span>
                  </label>
                  <span className="text-[10px] font-mono text-emerald-700 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-md">
                    Bemba (Active)
                  </span>
                </div>
                <p className="text-xs text-stone-500 dark:text-stone-400">
                  Choose your interface language. Bemba is currently active; additional Zambian and regional hymnal editions are being prepared.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                  {[
                    { id: 'bemba', name: 'Bemba', status: 'Active (Native Hymnal)' },
                    { id: 'english', name: 'English (SDA Hymnal)', status: 'In Preparation' },
                    { id: 'tonga', name: 'Tonga (Kristu Mu Nyimbo)', status: 'In Preparation' },
                    { id: 'nyanja', name: 'Nyanja (Nyimbo Za Khristu)', status: 'In Preparation' },
                  ].map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => handleSelectLanguage(item.id as AppLanguage)}
                      className={`p-3 rounded-xl border text-left flex flex-col gap-1 transition-all cursor-pointer ${
                        appLang === item.id
                          ? 'border-amber-800 bg-amber-50 dark:bg-amber-950/40 text-amber-950 dark:text-amber-200 ring-2 ring-amber-800/20'
                          : 'border-stone-200 dark:border-stone-800 bg-stone-50/50 dark:bg-stone-800/60 text-stone-700 dark:text-stone-300 hover:border-stone-300 dark:hover:border-stone-700'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold">{item.name}</span>
                        {appLang === item.id && <Check className="w-3.5 h-3.5 text-amber-800 dark:text-amber-400" />}
                      </div>
                      <span className="text-[10px] text-stone-400">{item.status}</span>
                    </button>
                  ))}
                </div>
              </section>
            )}

            {/* ========================================================
                SECTION 6: SEND FEEDBACK & RATE APP
               ======================================================== */}
            {(activeTab === 'all' || activeTab === 'feedback') && (
              <section className="bg-white dark:bg-stone-900/80 rounded-2xl p-4 sm:p-6 border border-stone-200 dark:border-stone-800 shadow-xs space-y-6">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold uppercase tracking-wider text-amber-900 dark:text-amber-400 flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-amber-700 dark:text-amber-400" />
                    <span>6. Feedback & Rate Kristu Mu Nyimbo</span>
                  </label>
                  <span className="text-[11px] text-amber-900 dark:text-amber-400 font-semibold bg-amber-500/10 px-2 py-0.5 rounded-md">
                    Worship Community
                  </span>
                </div>
                <p className="text-xs text-stone-500 dark:text-stone-400">
                  Rate your worship experience, report hymn lyric typos or tune issues, and help us improve the Bemba Seventh-day Adventist digital hymnal.
                </p>

                {/* Sub-Card A: Star Rating & Review */}
                <div className="p-4 sm:p-5 rounded-2xl bg-amber-500/5 dark:bg-stone-800/50 border border-amber-500/20 space-y-3.5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                      <span className="text-xs font-bold text-stone-900 dark:text-stone-100">Rate This App</span>
                    </div>
                    {ratingSubmitted && (
                      <span className="text-[10px] text-emerald-700 dark:text-emerald-400 font-semibold flex items-center gap-1 bg-emerald-500/10 px-2 py-0.5 rounded-md">
                        <Check className="w-3 h-3" /> Saved on Device
                      </span>
                    )}
                  </div>

                  {/* 5-Star Rating Buttons */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-1">
                    <div className="flex items-center gap-1.5" onMouseLeave={() => setHoverRating(0)}>
                      {[1, 2, 3, 4, 5].map((star) => {
                        const isFilled = star <= (hoverRating || userRating);
                        return (
                          <button
                            key={star}
                            type="button"
                            onClick={() => setUserRating(star)}
                            onMouseEnter={() => setHoverRating(star)}
                            className="p-1.5 -m-1.5 rounded-lg hover:scale-110 transition-transform cursor-pointer focus:outline-hidden"
                            aria-label={`Rate ${star} stars`}
                          >
                            <Star
                              className={`w-7 h-7 sm:w-8 sm:h-8 transition-colors ${
                                isFilled
                                  ? 'text-amber-500 fill-amber-500 drop-shadow-xs'
                                  : 'text-stone-300 dark:text-stone-600'
                              }`}
                            />
                          </button>
                        );
                      })}
                    </div>

                    <div className="text-xs font-semibold text-amber-900 dark:text-amber-300">
                      {(hoverRating || userRating) === 5 && '★★★★★ Outstanding • True Blessing!'}
                      {(hoverRating || userRating) === 4 && '★★★★☆ Very Good • Great Worship Tool'}
                      {(hoverRating || userRating) === 3 && '★★★☆☆ Good • Helpful for Singing'}
                      {(hoverRating || userRating) === 2 && '★★☆☆☆ Fair • Needs Improvements'}
                      {(hoverRating || userRating) === 1 && '★☆☆☆☆ Needs Major Polish'}
                    </div>
                  </div>

                  {/* Optional Review Comment */}
                  <div className="space-y-2 pt-1">
                    <input
                      type="text"
                      value={ratingComment}
                      onChange={(e) => setRatingComment(e.target.value)}
                      placeholder="Optional: Write a quick review or testimony (e.g. 'Helps our choir during Sabbath services')..."
                      className="w-full text-xs px-3.5 py-2.5 rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-700 text-stone-900 dark:text-stone-100 placeholder:text-stone-400 focus:outline-hidden focus:ring-2 focus:ring-amber-500/30"
                    />
                    <div className="flex items-center justify-between pt-1">
                      <span className="text-[10px] text-stone-400">
                        Your rating is stored locally on this device.
                      </span>
                      <button
                        type="button"
                        onClick={handleSaveRating}
                        className="px-4 py-1.5 rounded-xl bg-amber-900 hover:bg-amber-950 dark:bg-amber-500 dark:hover:bg-amber-600 text-white dark:text-stone-950 text-xs font-bold shadow-xs transition-colors cursor-pointer flex items-center gap-1.5"
                      >
                        <Check className="w-3.5 h-3.5" />
                        <span>Save Rating</span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Sub-Card B: Send Feedback & Typo Corrections */}
                <div className="p-4 sm:p-5 rounded-2xl bg-stone-50/80 dark:bg-stone-800/40 border border-stone-200 dark:border-stone-700/80 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Send className="w-4 h-4 text-amber-700 dark:text-amber-400" />
                      <span className="text-xs font-bold text-stone-900 dark:text-stone-100">
                        Send Feedback or Typo Correction
                      </span>
                    </div>
                    <span className="text-[10px] text-stone-400 font-mono">
                      Offline & Email Ready
                    </span>
                  </div>

                  {/* Feedback Category Selector */}
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-semibold text-stone-600 dark:text-stone-400">
                      Feedback Category:
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {[
                        { id: 'lyrics', label: 'Lyric / Typo Correction', icon: '📝' },
                        { id: 'tune', label: 'Audio Melody / Tune', icon: '🎵' },
                        { id: 'feature', label: 'Feature Suggestion', icon: '💡' },
                        { id: 'general', label: 'Praise & Worship', icon: '🙏' },
                      ].map((cat) => (
                        <button
                          key={cat.id}
                          type="button"
                          onClick={() => setFeedbackCategory(cat.id as any)}
                          className={`p-2.5 rounded-xl border text-left text-xs transition-all cursor-pointer flex items-center gap-2 ${
                            feedbackCategory === cat.id
                              ? 'bg-amber-900 text-white font-semibold border-amber-900 dark:bg-amber-500 dark:text-stone-950 shadow-xs'
                              : 'bg-white dark:bg-stone-900/60 text-stone-700 dark:text-stone-300 border-stone-200 dark:border-stone-700 hover:border-amber-400'
                          }`}
                        >
                          <span>{cat.icon}</span>
                          <span className="truncate">{cat.label}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Hymn Number (if applicable) & Sender */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    <div>
                      <label className="block text-[11px] font-medium text-stone-600 dark:text-stone-400 mb-1">
                        Hymn Number (if reporting a hymn):
                      </label>
                      <input
                        type="text"
                        value={feedbackHymnNum}
                        onChange={(e) => setFeedbackHymnNum(e.target.value)}
                        placeholder="e.g. 7 or 18 (Optional)"
                        className="w-full text-xs px-3 py-2 rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-700 text-stone-900 dark:text-stone-100 placeholder:text-stone-400 focus:outline-hidden focus:ring-2 focus:ring-amber-500/30"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-medium text-stone-600 dark:text-stone-400 mb-1">
                        Your Name / Church (Optional):
                      </label>
                      <input
                        type="text"
                        value={feedbackSender}
                        onChange={(e) => setFeedbackSender(e.target.value)}
                        placeholder="e.g. Elder Banda / Lusaka SDA"
                        className="w-full text-xs px-3 py-2 rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-700 text-stone-900 dark:text-stone-100 placeholder:text-stone-400 focus:outline-hidden focus:ring-2 focus:ring-amber-500/30"
                      />
                    </div>
                  </div>

                  {/* Message / Details Area */}
                  <div>
                    <label className="block text-[11px] font-medium text-stone-600 dark:text-stone-400 mb-1">
                      Details / Correction Notes:
                    </label>
                    <textarea
                      rows={3}
                      value={feedbackMessage}
                      onChange={(e) => setFeedbackMessage(e.target.value)}
                      placeholder="Please specify stanza number, incorrect Bemba word, suggested correction, or feature proposal..."
                      className="w-full text-xs px-3.5 py-2.5 rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-700 text-stone-900 dark:text-stone-100 placeholder:text-stone-400 focus:outline-hidden focus:ring-2 focus:ring-amber-500/30 resize-none"
                    />
                  </div>

                  {/* Action Buttons: Offline Save + Email */}
                  <div className="flex flex-wrap items-center justify-between gap-2 pt-1">
                    <button
                      type="button"
                      onClick={handleSubmitFeedback}
                      className="px-4 py-2 rounded-xl bg-amber-900 hover:bg-amber-950 dark:bg-amber-500 dark:hover:bg-amber-600 text-white dark:text-stone-950 text-xs font-bold transition-colors shadow-xs cursor-pointer flex items-center gap-1.5"
                    >
                      <Check className="w-3.5 h-3.5" />
                      <span>Submit Feedback (Save Locally)</span>
                    </button>

                    <div className="flex flex-wrap items-center gap-2">
                      <button
                        type="button"
                        onClick={handleSendWhatsAppFeedback}
                        className="px-3.5 py-2 rounded-xl border border-emerald-600/30 hover:border-emerald-600 text-emerald-800 dark:text-emerald-300 hover:bg-emerald-50/50 dark:hover:bg-emerald-950/20 bg-white dark:bg-stone-900 text-xs font-medium transition-colors cursor-pointer flex items-center gap-1.5"
                        title="Send feedback via WhatsApp (+260771500266)"
                      >
                        <MessageCircle className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                        <span>WhatsApp (+260771500266)</span>
                      </button>
                      <button
                        type="button"
                        onClick={handleSendEmailFeedback}
                        className="px-3.5 py-2 rounded-xl border border-stone-300 dark:border-stone-700 hover:border-amber-500 text-stone-700 dark:text-stone-300 hover:text-amber-900 dark:hover:text-amber-400 bg-white dark:bg-stone-900 text-xs font-medium transition-colors cursor-pointer flex items-center gap-1.5"
                        title="Send directly to hymnal committee email"
                      >
                        <Mail className="w-3.5 h-3.5 text-amber-700 dark:text-amber-400" />
                        <span>Send via Email</span>
                      </button>
                    </div>
                  </div>

                  {/* Saved Feedback History (if any) */}
                  {feedbackHistory.length > 0 && (
                    <div className="pt-3 border-t border-stone-200 dark:border-stone-700/60 space-y-2">
                      <div className="text-[11px] font-semibold text-stone-500 dark:text-stone-400">
                        Your Logged Feedback ({feedbackHistory.length}):
                      </div>
                      <div className="space-y-1.5 max-h-36 overflow-y-auto pr-1">
                        {feedbackHistory.map((item) => (
                          <div
                            key={item.id}
                            className="p-2.5 rounded-xl bg-white dark:bg-stone-900 border border-stone-200/80 dark:border-stone-800 text-[11px] flex items-start justify-between gap-2"
                          >
                            <div className="min-w-0">
                              <div className="flex items-center gap-1.5 font-semibold text-stone-800 dark:text-stone-200">
                                <span className="capitalize text-amber-800 dark:text-amber-400">[{item.category}]</span>
                                {item.hymnNum && <span>Hymn #{item.hymnNum}</span>}
                              </div>
                              <p className="text-stone-600 dark:text-stone-400 truncate mt-0.5">{item.message}</p>
                            </div>
                            <span className="text-[10px] text-stone-400 shrink-0 font-mono">{item.date}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </section>
            )}

            {/* ========================================================
                SECTION 7: SHARE & SUPPORT US
               ======================================================== */}
            {(activeTab === 'all' || activeTab === 'support') && (
              <section className="bg-white dark:bg-stone-900/80 rounded-2xl p-4 sm:p-6 border border-stone-200 dark:border-stone-800 shadow-xs space-y-6">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold uppercase tracking-wider text-amber-900 dark:text-amber-400 flex items-center gap-2">
                    <Heart className="w-4 h-4 text-amber-700 dark:text-amber-400" />
                    <span>7. Share & Support Us</span>
                  </label>
                  <span className="text-[11px] text-amber-900 dark:text-amber-400 font-semibold bg-amber-500/10 px-2 py-0.5 rounded-md">
                    Church Ministry
                  </span>
                </div>
                <p className="text-xs text-stone-500 dark:text-stone-400">
                  Help spread God's praise by sharing Kristu Mu Nyimbo with choir members, youth departments, and church families, and discover ways to support this digital worship ministry.
                </p>

                {/* Sub-Card A: Share the App */}
                <div className="p-4 sm:p-5 rounded-2xl bg-amber-500/5 dark:bg-stone-800/50 border border-amber-500/20 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-amber-900/10 dark:bg-amber-400/10 text-amber-900 dark:text-amber-400 flex items-center justify-center shrink-0">
                      <Share2 className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-stone-900 dark:text-stone-100">
                        Share Kristu Mu Nyimbo
                      </h4>
                      <p className="text-[11px] text-stone-500 dark:text-stone-400">
                        Invite your local church, choir, and family to sing 100% offline.
                      </p>
                    </div>
                  </div>

                  {/* Share Action Buttons */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                    {/* Native Share */}
                    <button
                      type="button"
                      onClick={handleShareApp}
                      className="p-3 rounded-xl bg-amber-900 hover:bg-amber-950 dark:bg-amber-500 dark:hover:bg-amber-600 text-white dark:text-stone-950 text-xs font-bold transition-all shadow-xs cursor-pointer flex items-center justify-center gap-2"
                    >
                      <Share2 className="w-4 h-4" />
                      <span>Share App</span>
                    </button>

                    {/* Copy Link */}
                    <button
                      type="button"
                      onClick={handleCopyLink}
                      className="p-3 rounded-xl border border-stone-300 dark:border-stone-700 hover:border-amber-500 bg-white dark:bg-stone-900 text-stone-800 dark:text-stone-200 text-xs font-semibold transition-all cursor-pointer flex items-center justify-center gap-2"
                    >
                      {isCopiedLink ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4 text-amber-700 dark:text-amber-400" />}
                      <span>{isCopiedLink ? 'Copied Link!' : 'Copy Link'}</span>
                    </button>

                    {/* WhatsApp */}
                    <button
                      type="button"
                      onClick={handleShareWhatsApp}
                      className="p-3 rounded-xl border border-emerald-600/30 hover:border-emerald-600 bg-emerald-50/50 dark:bg-emerald-950/20 text-emerald-900 dark:text-emerald-300 text-xs font-semibold transition-all cursor-pointer flex items-center justify-center gap-2"
                    >
                      <MessageCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                      <span>Share on WhatsApp</span>
                    </button>
                  </div>
                </div>

                {/* Sub-Card B: Support Our Ministry */}
                <div className="p-4 sm:p-5 rounded-2xl bg-stone-50/80 dark:bg-stone-800/40 border border-stone-200 dark:border-stone-700/80 space-y-4">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-700 dark:text-amber-400 flex items-center justify-center shrink-0">
                      <Gift className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-stone-900 dark:text-stone-100">
                        Ways to Support This Ministry
                      </h4>
                      <p className="text-[11px] text-stone-500 dark:text-stone-400">
                        How you can partner in blessing believers with Christian hymnody across Zambia.
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[11px]">
                    {/* 1. Prayer Support */}
                    <div className="p-3.5 rounded-xl bg-white dark:bg-stone-900 border border-stone-200/80 dark:border-stone-700/60 space-y-1">
                      <div className="font-bold text-stone-900 dark:text-stone-100 flex items-center gap-1.5">
                        <Heart className="w-3.5 h-3.5 text-rose-500" />
                        <span>1. Prayer & Fellowship</span>
                      </div>
                      <p className="text-stone-600 dark:text-stone-400 leading-relaxed">
                        Keep the software developers, translators, and song leaders in prayer as we prepare hymns that bring spiritual revival and Christ-centered worship.
                      </p>
                    </div>

                    {/* 2. Church & Youth Promotion */}
                    <div className="p-3.5 rounded-xl bg-white dark:bg-stone-900 border border-stone-200/80 dark:border-stone-700/60 space-y-1">
                      <div className="font-bold text-stone-900 dark:text-stone-100 flex items-center gap-1.5">
                        <ThumbsUp className="w-3.5 h-3.5 text-blue-500" />
                        <span>2. Church & Choir Outreach</span>
                      </div>
                      <p className="text-stone-600 dark:text-stone-400 leading-relaxed">
                        Demonstrate the app to your local church music committee, choir conductors, and Adventist Youth (AY) singing bands.
                      </p>
                    </div>

                    {/* 3. Proofreading & Review */}
                    <div className="p-3.5 rounded-xl bg-white dark:bg-stone-900 border border-stone-200/80 dark:border-stone-700/60 space-y-1">
                      <div className="font-bold text-stone-900 dark:text-stone-100 flex items-center gap-1.5">
                        <FileText className="w-3.5 h-3.5 text-amber-600" />
                        <span>3. Bemba Lyric Proofreading</span>
                      </div>
                      <p className="text-stone-600 dark:text-stone-400 leading-relaxed">
                        Report any missing punctuation, verse errors, or chorus discrepancies so the digital hymnal exactly mirrors the printed Zambia Union Conference hymnal.
                      </p>
                    </div>

                    {/* 4. Financial / Offering Support */}
                    <div className="p-3.5 rounded-xl bg-white dark:bg-stone-900 border border-stone-200/80 dark:border-stone-700/60 space-y-1">
                      <div className="font-bold text-stone-900 dark:text-stone-100 flex items-center gap-1.5">
                        <Gift className="w-3.5 h-3.5 text-emerald-600" />
                        <span>4. Ministry Contributions</span>
                      </div>
                      <p className="text-stone-600 dark:text-stone-400 leading-relaxed">
                        Support hosting, domain maintenance, and audio recordings of traditional four-part hymn harmonies for worshipers with no internet.
                      </p>
                    </div>
                  </div>

                  {/* Contribution Info Box */}
                  <div className="p-3.5 sm:p-4 rounded-xl bg-stone-100 dark:bg-stone-900/80 border border-stone-200 dark:border-stone-700 text-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="space-y-1">
                      <div className="font-bold text-stone-900 dark:text-stone-100 flex items-center gap-1.5">
                        <Phone className="w-3.5 h-3.5 text-amber-700 dark:text-amber-400" />
                        <span>Zambia Mobile Money & Ministry Contact:</span>
                      </div>
                      <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs">
                        <a
                          href="tel:+260771500266"
                          className="font-mono font-bold text-amber-900 dark:text-amber-400 hover:underline inline-flex items-center gap-1"
                          title="Call +260771500266"
                        >
                          +260771500266
                        </a>
                        <span className="text-[11px] text-stone-500 dark:text-stone-400">
                          (Airtel / Mobile Money)
                        </span>
                        <span className="text-stone-300 dark:text-stone-700 hidden sm:inline">•</span>
                        <span className="text-[11px] text-stone-600 dark:text-stone-400">
                          Ref: <strong className="font-semibold text-stone-800 dark:text-stone-200">Kristu Mu Nyimbo</strong>
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <a
                        href="https://wa.me/260771500266?text=Mwashibukeni!%20I%20would%20like%20to%20support%20the%20Kristu%20Mu%20Nyimbo%20hymnal%20ministry."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1.5 rounded-xl border border-emerald-600/30 hover:border-emerald-600 text-emerald-800 dark:text-emerald-300 text-xs font-semibold bg-emerald-50/50 dark:bg-emerald-950/20 flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                        title="Chat on WhatsApp (+260771500266)"
                      >
                        <MessageCircle className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                        <span>WhatsApp</span>
                      </a>
                      <button
                        type="button"
                        onClick={handleCopySupportInfo}
                        className="px-3.5 py-1.5 rounded-xl border border-stone-300 dark:border-stone-700 hover:border-amber-500 text-stone-700 dark:text-stone-300 hover:text-amber-900 dark:hover:text-amber-400 text-xs font-semibold bg-white dark:bg-stone-800 flex items-center justify-center gap-1.5 transition-colors cursor-pointer shrink-0"
                      >
                        {isCopiedSupport ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                        <span>{isCopiedSupport ? 'Copied Details' : 'Copy Details'}</span>
                      </button>
                    </div>
                  </div>
                </div>
              </section>
            )}

            {/* ========================================================
                SECTION 8: ABOUT KRISTU MU NYIMBO & USER GUIDE
               ======================================================== */}
            {(activeTab === 'all' || activeTab === 'about') && (
              <section ref={aboutSectionRef} className="bg-white dark:bg-stone-900/80 rounded-2xl p-4 sm:p-6 border border-stone-200 dark:border-stone-800 shadow-xs space-y-4">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold uppercase tracking-wider text-amber-900 dark:text-amber-400 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-amber-700 dark:text-amber-400" />
                    <span>8. About Kristu Mu Nyimbo</span>
                  </label>
                  <span className="px-2 py-0.5 rounded-md bg-amber-900/10 dark:bg-amber-400/10 text-amber-900 dark:text-amber-400 font-mono text-[10px] font-bold">
                    v2.5.0 PWA
                  </span>
                </div>

                {/* Primary Action Button */}
                <button
                  type="button"
                  onClick={handleToggleAbout}
                  className="w-full p-4 rounded-2xl border border-stone-200 dark:border-stone-800 bg-stone-50/80 dark:bg-stone-800/60 hover:bg-stone-100 dark:hover:bg-stone-800 text-left transition-all cursor-pointer flex items-center justify-between gap-3 group shadow-xs"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-10 h-10 rounded-xl bg-amber-900/10 dark:bg-amber-400/10 text-amber-900 dark:text-amber-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                      <Compass className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs sm:text-sm font-bold text-stone-900 dark:text-stone-100 flex items-center gap-2">
                        <span>About Kristu Mu Nyimbo & User Guide</span>
                      </div>
                      <p className="text-[11px] text-stone-500 dark:text-stone-400 truncate mt-0.5">
                        {isAboutExpanded ? 'Tap to hide app overview and navigation guide' : 'Tap to read app overview, navigation guide & credits'}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-900 hover:bg-amber-950 text-white text-xs font-semibold shrink-0 shadow-xs transition-colors">
                    <span>{isAboutExpanded ? 'Hide Guide' : 'View Guide'}</span>
                    <ChevronRight className={`w-3.5 h-3.5 transition-transform duration-200 ${isAboutExpanded ? 'rotate-90' : ''}`} />
                  </div>
                </button>

                {/* Expanded About & User Guide Content */}
                {isAboutExpanded && (
                  <div className="p-4 sm:p-6 rounded-2xl bg-stone-100/70 dark:bg-stone-800/60 border border-stone-200 dark:border-stone-700/80 space-y-4 text-xs text-stone-700 dark:text-stone-300 animate-in fade-in duration-150">
                    <div className="flex items-center gap-3.5 pb-2 border-b border-stone-200/80 dark:border-stone-700/80">
                      <div className="w-14 h-14 rounded-2xl bg-white border border-amber-500/30 p-1.5 flex items-center justify-center shrink-0 shadow-sm">
                        <AdventistLogo className="w-full h-full" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2">
                          <h3 className="font-bold text-sm sm:text-base text-stone-900 dark:text-stone-100 truncate">
                            Kristu Mu Nyimbo
                          </h3>
                          <span className="px-2 py-0.5 rounded-md bg-amber-900/10 dark:bg-amber-400/10 text-amber-900 dark:text-amber-400 font-mono text-[10px] font-bold shrink-0">
                            v2.5.0 PWA
                          </span>
                        </div>
                        <p className="text-[11px] text-amber-800 dark:text-amber-400 font-medium">
                          Seventh-day Adventist Church • Bemba Hymnal
                        </p>
                        <p className="text-[10px] text-stone-400 mt-0.5">
                          Zambia Union Conference Publications
                        </p>
                      </div>
                    </div>

                    <p className="text-[11px] sm:text-xs leading-relaxed text-stone-600 dark:text-stone-400">
                      Kristu Mu Nyimbo is the official digital edition of the Seventh-day Adventist Hymnal in the Bemba language of Zambia. It is designed to assist believers in Sabbath worship, congregational singing, Bible study, and private family devotions. Fully offline with zero internet required.
                    </p>

                    {/* HOW TO NAVIGATE THE APP (DETAILED USER GUIDE) */}
                    <div className="pt-4 border-t border-stone-200/80 dark:border-stone-700/80 space-y-3">
                      <div className="flex items-center gap-2 font-bold text-xs sm:text-sm text-stone-900 dark:text-stone-100">
                        <Compass className="w-4 h-4 text-amber-800 dark:text-amber-400" />
                        <span>How to Navigate the App (User Guide)</span>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[11px]">
                        {/* Step 1: Search & Fast Dialpad */}
                        <div className="p-3.5 rounded-xl bg-white dark:bg-stone-900/70 border border-stone-200/80 dark:border-stone-700/60 space-y-1">
                          <div className="font-semibold text-stone-900 dark:text-stone-100 flex items-center gap-1.5">
                            <span>1. Search & Numeric Dialpad</span>
                          </div>
                          <p className="text-stone-600 dark:text-stone-400 leading-relaxed">
                            Enter any hymn number (e.g. <strong>7</strong>), Bemba lyric snippet, or song title in the top search bar. Or tap the <strong>6-dots / Dialpad (#)</strong> button on the top bar or bottom navigation for instant 10-key numeric keypad jumping.
                          </p>
                        </div>

                        {/* Step 2: Hymn Reader Controls */}
                        <div className="p-3.5 rounded-xl bg-white dark:bg-stone-900/70 border border-stone-200/80 dark:border-stone-700/60 space-y-1">
                          <div className="font-semibold text-stone-900 dark:text-stone-100 flex items-center gap-1.5">
                            <span>2. Reading & Typography</span>
                          </div>
                          <p className="text-stone-600 dark:text-stone-400 leading-relaxed">
                            Tap any hymn to open the full-screen reader. Tap <strong>A+ / A-</strong> to change text size, tap the <strong>Theme</strong> icon to toggle night sanctuary mode, and choose between <strong>Lora Serif</strong> and <strong>Modern Sans</strong> typography.
                          </p>
                        </div>

                        {/* Step 3: Page Navigation & Swiping */}
                        <div className="p-3.5 rounded-xl bg-white dark:bg-stone-900/70 border border-stone-200/80 dark:border-stone-700/60 space-y-1">
                          <div className="font-semibold text-stone-900 dark:text-stone-100 flex items-center gap-1.5">
                            <span>3. Flipping Hymns (Prev / Next)</span>
                          </div>
                          <p className="text-stone-600 dark:text-stone-400 leading-relaxed">
                            Inside the reader, tap <strong>Previous Hymn</strong> or <strong>Next Hymn</strong> at the bottom bar to flip sequentially through songs. On a laptop or computer keyboard, use the <strong>← and → arrow keys</strong>.
                          </p>
                        </div>

                        {/* Step 4: Auto-Scroll & Melodies */}
                        <div className="p-3.5 rounded-xl bg-white dark:bg-stone-900/70 border border-stone-200/80 dark:border-stone-700/60 space-y-1">
                          <div className="font-semibold text-stone-900 dark:text-stone-100 flex items-center gap-1.5">
                            <span>4. Hands-Free Scroll & Tunes</span>
                          </div>
                          <p className="text-stone-600 dark:text-stone-400 leading-relaxed">
                            Tap <strong>Scroll</strong> to start smooth auto-scrolling while singing or playing an instrument. Tap <strong>Tune</strong> to listen to melodic audio previews for rehearsals, church song leaders, and choir practice.
                          </p>
                        </div>

                        {/* Step 5: Favorites & Sabbath Planner */}
                        <div className="p-3.5 rounded-xl bg-white dark:bg-stone-900/70 border border-stone-200/80 dark:border-stone-700/60 space-y-1 sm:col-span-2">
                          <div className="font-semibold text-stone-900 dark:text-stone-100 flex items-center gap-1.5">
                            <span>5. Favorites & Sabbath Service Planner</span>
                          </div>
                          <p className="text-stone-600 dark:text-stone-400 leading-relaxed">
                            Tap the bookmark ribbon on any hymn card or reader toolbar to save it to your <strong>Favorites</strong> list. Open the <strong>Service Planner</strong> tab to assemble Sabbath worship setlists (prelude, opening hymn, scripture hymn, and closing benediction).
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Credits & Acknowledgements */}
                    <div className="pt-3 border-t border-stone-200/80 dark:border-stone-700/80 space-y-1.5 text-[11px]">
                      <div className="font-semibold text-stone-900 dark:text-stone-100">
                        Credits & Acknowledgements:
                      </div>
                      <ul className="space-y-1 text-stone-600 dark:text-stone-400 pl-2">
                        <li>• <strong>Publisher:</strong> Seventh-day Adventist Church — Zambia Union Conference Publications</li>
                        <li>• <strong>Bemba Translations:</strong> [Translators & Hymnal Review Committee: Zambia Union Conference Publications — Placeholder]</li>
                        <li>• <strong>Music & Melodies:</strong> Traditional Christian Hymnal Tunes (Church Copyrights & Public Domain)</li>
                        <li>• <strong>Application Engineering:</strong> [Digital Worship Ministry & PWA Software Team Placeholder]</li>
                      </ul>
                    </div>

                    {/* Replay Opening Screen with Adventist Logo */}
                    {onShowSplashScreen && (
                      <div className="pt-3 border-t border-stone-200/80 dark:border-stone-700/80">
                        <button
                          type="button"
                          onClick={() => {
                            onClose();
                            onShowSplashScreen();
                          }}
                          className="w-full p-3 rounded-xl bg-amber-900/10 hover:bg-amber-900/20 dark:bg-amber-400/10 dark:hover:bg-amber-400/20 border border-amber-800/20 dark:border-amber-400/30 text-amber-950 dark:text-amber-200 font-semibold text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer"
                        >
                          <AdventistLogo className="w-5 h-5 shrink-0" variant="gold" />
                          <span>View Opening Screen (Adventist Logo)</span>
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </section>
            )}

            {/* ========================================================
                SECTION 9: PRIVACY AND LEGAL
               ======================================================== */}
            {(activeTab === 'all' || activeTab === 'about') && (
              <section className="bg-white dark:bg-stone-900/80 rounded-2xl p-4 sm:p-6 border border-stone-200 dark:border-stone-800 shadow-xs space-y-3">
                <label className="text-xs font-bold uppercase tracking-wider text-amber-900 dark:text-amber-400 flex items-center gap-2">
                  <Shield className="w-4 h-4 text-amber-700 dark:text-amber-400" />
                  <span>9. Privacy & Legal</span>
                </label>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {/* Privacy Policy */}
                  <button
                    type="button"
                    onClick={() => setLegalView(legalView === 'privacy' ? null : 'privacy')}
                    className="p-4 rounded-xl border border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-800/60 hover:bg-stone-100 dark:hover:bg-stone-700 text-left transition-colors cursor-pointer"
                  >
                    <div className="flex items-center justify-between text-xs font-bold text-stone-900 dark:text-stone-100 mb-1">
                      <span className="flex items-center gap-1.5">
                        <Shield className="w-3.5 h-3.5 text-amber-800 dark:text-amber-400" />
                        Privacy Policy
                      </span>
                      <ChevronRight className={`w-3.5 h-3.5 text-stone-400 transition-transform ${legalView === 'privacy' ? 'rotate-90' : ''}`} />
                    </div>
                    <p className="text-[11px] text-stone-500 dark:text-stone-400">
                      100% offline. No personal data is collected or tracked. Everything remains stored on your local device.
                    </p>
                  </button>

                  {/* Terms and Conditions */}
                  <button
                    type="button"
                    onClick={() => setLegalView(legalView === 'terms' ? null : 'terms')}
                    className="p-4 rounded-xl border border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-800/60 hover:bg-stone-100 dark:hover:bg-stone-700 text-left transition-colors cursor-pointer"
                  >
                    <div className="flex items-center justify-between text-xs font-bold text-stone-900 dark:text-stone-100 mb-1">
                      <span className="flex items-center gap-1.5">
                        <FileText className="w-3.5 h-3.5 text-amber-800 dark:text-amber-400" />
                        Terms & Conditions
                      </span>
                      <ChevronRight className={`w-3.5 h-3.5 text-stone-400 transition-transform ${legalView === 'terms' ? 'rotate-90' : ''}`} />
                    </div>
                    <p className="text-[11px] text-stone-500 dark:text-stone-400">
                      Terms of use for spiritual worship, missionary outreach, and congregational singing.
                    </p>
                  </button>
                </div>

                {/* Expanded Legal Viewer */}
                {legalView === 'privacy' && (
                  <div className="p-4 sm:p-5 rounded-2xl bg-stone-50 dark:bg-stone-900/90 border border-stone-200 dark:border-stone-700 text-xs text-stone-700 dark:text-stone-300 space-y-2 animate-in fade-in">
                    <div className="flex items-center justify-between font-bold text-stone-900 dark:text-stone-100">
                      <span>Privacy Policy</span>
                      <button type="button" onClick={() => setLegalView(null)} className="text-stone-400 hover:text-stone-600">
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                    <p className="text-[11px] leading-relaxed">
                      1. <strong>Local Storage Only:</strong> The Kristu Mu Nyimbo application operates completely offline and does not store your name, email, or personal identity on external servers. All user preferences, favorites, and recent history are saved locally on your device via IndexedDB.
                    </p>
                    <p className="text-[11px] leading-relaxed">
                      2. <strong>Zero Tracking:</strong> No analytics or tracking scripts monitor your personal reading or worship habits.
                    </p>
                    <p className="text-[10px] text-stone-400 italic">
                      [Official Legal Privacy Policy: Standard Seventh-day Adventist Media Privacy Policy Placeholder]
                    </p>
                  </div>
                )}

                {legalView === 'terms' && (
                  <div className="p-4 sm:p-5 rounded-2xl bg-stone-50 dark:bg-stone-900/90 border border-stone-200 dark:border-stone-700 text-xs text-stone-700 dark:text-stone-300 space-y-2 animate-in fade-in">
                    <div className="flex items-center justify-between font-bold text-stone-900 dark:text-stone-100">
                      <span>Terms & Conditions</span>
                      <button type="button" onClick={() => setLegalView(null)} className="text-stone-400 hover:text-stone-600">
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                    <p className="text-[11px] leading-relaxed">
                      1. <strong>Spiritual Use:</strong> All hymns and musical arrangements are provided solely for Christian worship, Sabbath School, missionary outreach, and personal devotion.
                    </p>
                    <p className="text-[11px] leading-relaxed">
                      2. <strong>Intellectual Property:</strong> Hymn lyrics, musical scores, and denominational emblems remain the intellectual property of their respective creators and the Seventh-day Adventist Church.
                    </p>
                    <p className="text-[10px] text-stone-400 italic">
                      [Terms & Conditions: Standard Seventh-day Adventist Publications Worship Guidelines Placeholder]
                    </p>
                  </div>
                )}
              </section>
            )}

            {/* ========================================================
                SECTION 10: RESET PREFERENCES
               ======================================================== */}
            <section className="p-4 sm:p-6 rounded-2xl bg-stone-100 dark:bg-stone-900/60 border border-stone-200 dark:border-stone-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <div className="text-xs font-bold text-stone-900 dark:text-stone-100 flex items-center gap-1.5">
                  <RotateCcw className="w-4 h-4 text-stone-500" />
                  <span>10. Reset Preferences</span>
                </div>
                <div className="text-[11px] text-stone-500 dark:text-stone-400">
                  Restore all appearance, typography, line spacing, and reading settings back to defaults
                </div>
              </div>

              <button
                type="button"
                onClick={() => setIsResetConfirmOpen(true)}
                className="px-4 py-2 rounded-xl border border-stone-300 dark:border-stone-700 hover:border-red-400 text-stone-700 hover:text-red-700 dark:text-stone-300 dark:hover:text-red-400 bg-white dark:bg-stone-800 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer shrink-0"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset to Defaults</span>
              </button>
            </section>

          </div>
        </main>
      </div>

      {/* Confirmation Dialog for Reset Preferences */}
      {isResetConfirmOpen && (
        <div
          className="fixed inset-0 z-60 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in"
          onClick={() => setIsResetConfirmOpen(false)}
        >
          <div
            className="w-full max-w-md bg-white dark:bg-stone-900 rounded-3xl p-6 border border-stone-200 dark:border-stone-800 shadow-2xl space-y-4 animate-in zoom-in-95"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-12 h-12 rounded-2xl bg-amber-900/10 dark:bg-amber-400/10 text-amber-900 dark:text-amber-400 flex items-center justify-center mx-auto">
              <RotateCcw className="w-6 h-6" />
            </div>

            <div className="text-center space-y-1.5">
              <h3 className="text-base font-bold text-stone-900 dark:text-stone-100">
                Are you sure you want to reset all preferences?
              </h3>
              <p className="text-xs text-stone-500 dark:text-stone-400 leading-relaxed">
                All settings for appearance theme, hymn text size, line spacing, font family, and reading options will be restored to their initial default values.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-2.5 pt-2">
              <button
                type="button"
                onClick={() => setIsResetConfirmOpen(false)}
                className="py-2.5 px-4 rounded-xl border border-stone-300 dark:border-stone-700 text-stone-700 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-800 text-xs font-semibold transition-colors cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleConfirmReset}
                className="py-2.5 px-4 rounded-xl bg-amber-900 hover:bg-amber-950 text-white text-xs font-semibold shadow-xs transition-colors cursor-pointer"
              >
                Confirm Reset
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
