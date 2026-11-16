import React from 'react';
import { X, Check, Globe } from 'lucide-react';
import { HYMNAL_LANGUAGES, HymnalLanguageId } from '../data/languages';

interface ChooseLanguageModalProps {
  isOpen: boolean;
  activeLanguage: HymnalLanguageId;
  isLoading: boolean;
  onSelectLanguage: (lang: HymnalLanguageId) => void;
  onClose: () => void;
}

export const ChooseLanguageModal: React.FC<ChooseLanguageModalProps> = ({
  isOpen,
  activeLanguage,
  isLoading,
  onSelectLanguage,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="choose-language-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="w-full max-w-md bg-[#FAF8F5] dark:bg-stone-900 rounded-2xl border border-stone-200 dark:border-stone-800 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="px-5 py-4 border-b border-stone-200/80 dark:border-stone-800 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <Globe className="w-4.5 h-4.5 text-amber-900 dark:text-amber-400" />
            <h2
              id="choose-language-title"
              className="font-serif text-lg font-bold text-stone-900 dark:text-stone-100"
            >
              Choose Language
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-10 h-10 rounded-xl flex items-center justify-center text-stone-500 hover:text-stone-900 dark:text-stone-400 dark:hover:text-stone-100 hover:bg-stone-200/60 dark:hover:bg-stone-800 transition-colors"
            aria-label="Close choose language dialog"
          >
            <X className="w-4.5 h-4.5" />
          </button>
        </div>

        <div className="p-4 space-y-2.5">
          {HYMNAL_LANGUAGES.map((lang) => {
            const isSelected = lang.id === activeLanguage;
            return (
              <button
                key={lang.id}
                type="button"
                disabled={!lang.available || isLoading}
                onClick={() => {
                  if (lang.available) {
                    onSelectLanguage(lang.id);
                    onClose();
                  }
                }}
                className={`w-full text-left p-4 rounded-xl border transition-all flex items-center justify-between gap-3 min-h-[56px] ${
                  !lang.available
                    ? 'bg-stone-100/70 dark:bg-stone-950/40 border-stone-200/70 dark:border-stone-800/70 opacity-60 cursor-not-allowed'
                    : isSelected
                    ? 'bg-amber-900 text-white border-amber-900 shadow-sm'
                    : 'bg-white dark:bg-stone-950/60 border-stone-200 dark:border-stone-800 text-stone-900 dark:text-stone-100 hover:border-amber-700/50'
                }`}
              >
                <div className="min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-serif text-base font-bold">{lang.label}</span>
                    <span
                      aria-hidden="true"
                      className={isSelected ? 'text-amber-200' : 'text-stone-400'}
                    >
                      ·
                    </span>
                    <span
                      className={`text-xs font-medium ${
                        isSelected ? 'text-amber-100' : 'text-stone-500 dark:text-stone-400'
                      }`}
                    >
                      {lang.bookTitle}
                    </span>
                  </div>
                  <p
                    className={`text-xs mt-1 ${
                      isSelected ? 'text-amber-100/90' : 'text-stone-500 dark:text-stone-400'
                    }`}
                  >
                    {lang.available
                      ? `${lang.englishName} · ${lang.hymnCount} hymns`
                      : `${lang.englishName} · Upcoming`}
                  </p>
                </div>

                {lang.available ? (
                  <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                      isSelected
                        ? 'bg-amber-800 text-white'
                        : 'bg-stone-100 dark:bg-stone-800 text-stone-400'
                    }`}
                  >
                    {isSelected && <Check className="w-4 h-4" />}
                  </div>
                ) : (
                  <span className="text-xs font-medium text-stone-400 dark:text-stone-500 shrink-0">
                    Upcoming
                  </span>
                )}
              </button>
            );
          })}
        </div>

        <div className="px-5 py-3 border-t border-stone-200/80 dark:border-stone-800 text-xs text-stone-500 dark:text-stone-400">
          Selected hymnbooks stay saved for offline reading in church.
        </div>
      </div>
    </div>
  );
};
