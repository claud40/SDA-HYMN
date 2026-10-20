export type TextSizePreference = 'standard' | 'large' | 'xlarge' | 'elder';
export type LineSpacingPreference = 'normal' | 'relaxed' | 'loose';
export type FontPreference = 'serif' | 'sans';

export interface TypographySettings {
  textSize: TextSizePreference;
  lineSpacing: LineSpacingPreference;
  fontFamily: FontPreference;
}

export const TYPOGRAPHY_CONFIG = {
  textSize: {
    standard: {
      versePx: 16,
      titlePx: 24,
      numPx: 14,
      label: 'Standard',
      desc: '16px',
    },
    large: {
      versePx: 19,
      titlePx: 28,
      numPx: 16,
      label: 'Large',
      desc: '19px',
    },
    xlarge: {
      versePx: 23,
      titlePx: 34,
      numPx: 18,
      label: 'Extra Large',
      desc: '23px',
    },
    elder: {
      versePx: 28,
      titlePx: 42,
      numPx: 22,
      label: 'Senior / Elder',
      desc: '28px',
    },
  },
  lineSpacing: {
    normal: {
      multiplier: 1.5,
      label: 'Normal',
      desc: '1.5x spacing',
    },
    relaxed: {
      multiplier: 1.85,
      label: 'Relaxed',
      desc: '1.85x spacing',
    },
    loose: {
      multiplier: 2.3,
      label: 'Loose',
      desc: '2.3x spacing',
    },
  },
  fontFamily: {
    serif: "'Lora', Georgia, Cambria, serif",
    sans: "'Plus Jakarta Sans', system-ui, -apple-system, sans-serif",
  },
} as const;

export const getStoredTypography = (): TypographySettings => {
  if (typeof window === 'undefined') {
    return { textSize: 'large', lineSpacing: 'relaxed', fontFamily: 'serif' };
  }
  const textSize = (localStorage.getItem('hymnal_text_size') as TextSizePreference) || 'large';
  const lineSpacing = (localStorage.getItem('hymnal_line_spacing') as LineSpacingPreference) || 'relaxed';
  const fontFamily = (localStorage.getItem('hymnal_font_family') as FontPreference) || 'serif';
  return { textSize, lineSpacing, fontFamily };
};

export const applyTypographyToDOM = (settings: TypographySettings) => {
  if (typeof document === 'undefined') return;

  const root = document.documentElement;
  const sizeCfg = TYPOGRAPHY_CONFIG.textSize[settings.textSize] || TYPOGRAPHY_CONFIG.textSize.large;
  const spacingCfg = TYPOGRAPHY_CONFIG.lineSpacing[settings.lineSpacing] || TYPOGRAPHY_CONFIG.lineSpacing.relaxed;
  const fontVal = TYPOGRAPHY_CONFIG.fontFamily[settings.fontFamily] || TYPOGRAPHY_CONFIG.fontFamily.serif;

  // Set CSS variables on root
  root.style.setProperty('--hymn-verse-size', `${sizeCfg.versePx}px`);
  root.style.setProperty('--hymn-title-size', `${sizeCfg.titlePx}px`);
  root.style.setProperty('--hymn-num-size', `${sizeCfg.numPx}px`);
  root.style.setProperty('--hymn-line-height', `${spacingCfg.multiplier}`);
  root.style.setProperty('--hymn-font-family', fontVal);

  root.dataset.hymnTextSize = settings.textSize;
  root.dataset.hymnLineSpacing = settings.lineSpacing;
  root.dataset.hymnFont = settings.fontFamily;

  localStorage.setItem('hymnal_text_size', settings.textSize);
  localStorage.setItem('hymnal_line_spacing', settings.lineSpacing);
  localStorage.setItem('hymnal_font_family', settings.fontFamily);

  // Broadcast event for all active components
  window.dispatchEvent(
    new CustomEvent('hymnal-typography-change', {
      detail: settings,
    })
  );
  window.dispatchEvent(
    new CustomEvent('hymnal-settings-change', {
      detail: settings,
    })
  );
};
