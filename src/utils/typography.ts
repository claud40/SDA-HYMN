export type TextSizePreference = 'standard' | 'large' | 'xlarge' | 'elder';
export type LineSpacingPreference = 'normal' | 'relaxed' | 'loose';
export type FontPreference = 'serif' | 'sans';

export interface TypographySettings {
  textSize: TextSizePreference;
  lineSpacing: LineSpacingPreference;
  fontFamily: FontPreference;
  isBold?: boolean;
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
    return { textSize: 'large', lineSpacing: 'relaxed', fontFamily: 'serif', isBold: false };
  }
  const textSize = (localStorage.getItem('hymnal_text_size') as TextSizePreference) || 'large';
  const lineSpacing = (localStorage.getItem('hymnal_line_spacing') as LineSpacingPreference) || 'relaxed';
  const fontFamily = (localStorage.getItem('hymnal_font_family') as FontPreference) || 'serif';
  const isBold = localStorage.getItem('hymnal_bold_text') === 'true';
  return { textSize, lineSpacing, fontFamily, isBold };
};

export const applyTypographyToDOM = (settings: TypographySettings) => {
  if (typeof document === 'undefined') return;

  const root = document.documentElement;
  const sizeCfg = TYPOGRAPHY_CONFIG.textSize[settings.textSize] || TYPOGRAPHY_CONFIG.textSize.large;
  const spacingCfg = TYPOGRAPHY_CONFIG.lineSpacing[settings.lineSpacing] || TYPOGRAPHY_CONFIG.lineSpacing.relaxed;
  const fontVal = TYPOGRAPHY_CONFIG.fontFamily[settings.fontFamily] || TYPOGRAPHY_CONFIG.fontFamily.serif;
  const isBold = settings.isBold ?? (localStorage.getItem('hymnal_bold_text') === 'true');
  const fontWeightVal = isBold ? '700' : '400';

  // Set CSS variables on root and body for immediate global reactivity
  const lineGap = `${(spacingCfg.multiplier - 1) * 0.45}rem`;
  const cardTitlePx = `${Math.max(16, Math.round(sizeCfg.titlePx * 0.62))}px`;

  root.style.setProperty('--hymn-verse-size', `${sizeCfg.versePx}px`);
  root.style.setProperty('--hymn-title-size', `${sizeCfg.titlePx}px`);
  root.style.setProperty('--hymn-num-size', `${sizeCfg.numPx}px`);
  root.style.setProperty('--hymn-line-height', `${spacingCfg.multiplier}`);
  root.style.setProperty('--hymn-line-gap', lineGap);
  root.style.setProperty('--card-title-size', cardTitlePx);
  root.style.setProperty('--hymn-font-family', fontVal);
  root.style.setProperty('--hymn-font-weight', fontWeightVal);

  if (document.body) {
    document.body.style.setProperty('--hymn-verse-size', `${sizeCfg.versePx}px`);
    document.body.style.setProperty('--hymn-title-size', `${sizeCfg.titlePx}px`);
    document.body.style.setProperty('--hymn-num-size', `${sizeCfg.numPx}px`);
    document.body.style.setProperty('--hymn-line-height', `${spacingCfg.multiplier}`);
    document.body.style.setProperty('--hymn-line-gap', lineGap);
    document.body.style.setProperty('--card-title-size', cardTitlePx);
    document.body.style.setProperty('--hymn-font-family', fontVal);
    document.body.style.setProperty('--hymn-font-weight', fontWeightVal);
  }

  root.dataset.hymnTextSize = settings.textSize;
  root.dataset.hymnLineSpacing = settings.lineSpacing;
  root.dataset.hymnFont = settings.fontFamily;
  root.dataset.hymnBold = String(isBold);

  localStorage.setItem('hymnal_text_size', settings.textSize);
  localStorage.setItem('hymnal_line_spacing', settings.lineSpacing);
  localStorage.setItem('hymnal_font_family', settings.fontFamily);
  localStorage.setItem('hymnal_bold_text', String(isBold));

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

export type ColumnSpacingPreference = 'very-tight' | 'tight' | 'medium' | 'wide' | 'very-wide';

export const COLUMN_SPACING_CONFIG: Record<
  ColumnSpacingPreference,
  {
    label: string;
    desc: string;
    gapPx: number;
    maxWidth: string;
  }
> = {
  'very-tight': {
    label: 'Very Tight',
    desc: 'Compact',
    gapPx: 12,
    maxWidth: '42rem',
  },
  tight: {
    label: 'Tight',
    desc: 'Close',
    gapPx: 20,
    maxWidth: '48rem',
  },
  medium: {
    label: 'Medium',
    desc: 'Default',
    gapPx: 36,
    maxWidth: '58rem',
  },
  wide: {
    label: 'Wide',
    desc: 'Spacious',
    gapPx: 56,
    maxWidth: '68rem',
  },
  'very-wide': {
    label: 'Very Wide',
    desc: 'Broad',
    gapPx: 84,
    maxWidth: '78rem',
  },
};

const COLUMN_SPACING_STORAGE_KEY = 'hymnal_dual_column_spacing';

export const getStoredColumnSpacing = (): ColumnSpacingPreference => {
  if (typeof window === 'undefined') return 'medium';
  try {
    const saved = localStorage.getItem(COLUMN_SPACING_STORAGE_KEY) as ColumnSpacingPreference | null;
    if (saved && saved in COLUMN_SPACING_CONFIG) {
      return saved;
    }
  } catch {
    // ignore storage errors
  }
  return 'medium';
};

export const applyColumnSpacing = (spacing: ColumnSpacingPreference) => {
  const cfg = COLUMN_SPACING_CONFIG[spacing] || COLUMN_SPACING_CONFIG.medium;
  if (typeof document !== 'undefined') {
    document.documentElement.style.setProperty('--hymn-dual-gap', `${cfg.gapPx}px`);
    document.documentElement.style.setProperty('--hymn-dual-max-width', cfg.maxWidth);
    document.documentElement.dataset.hymnColumnSpacing = spacing;
  }
  try {
    localStorage.setItem(COLUMN_SPACING_STORAGE_KEY, spacing);
  } catch {
    // ignore storage errors
  }
  if (typeof window !== 'undefined') {
    window.dispatchEvent(
      new CustomEvent('hymnal-settings-change', {
        detail: { columnSpacing: spacing },
      })
    );
  }
};
