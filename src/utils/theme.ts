export type ThemePreference = 'system' | 'light' | 'dark';

export const getStoredThemePreference = (): ThemePreference => {
  if (typeof window === 'undefined') return 'light';
  const saved = localStorage.getItem('hymnal_theme_pref');
  if (saved === 'dark' || saved === 'light' || saved === 'system') {
    return saved;
  }
  return 'light';
};

let systemThemeListener: ((e: MediaQueryListEvent) => void) | null = null;
let systemMediaWatcher: MediaQueryList | null = null;

export const applyThemeToDOM = (pref: ThemePreference) => {
  if (typeof document === 'undefined') return;

  const root = document.documentElement;
  const body = document.body;
  const metaThemeColor = document.querySelector('meta[name="theme-color"]');

  // Clean up any existing system media query listener
  if (systemMediaWatcher && systemThemeListener) {
    systemMediaWatcher.removeEventListener('change', systemThemeListener);
    systemThemeListener = null;
    systemMediaWatcher = null;
  }

  const setDarkClass = (isDark: boolean) => {
    if (isDark) {
      root.classList.add('dark');
      if (document.body) document.body.classList.add('dark');
      if (metaThemeColor) {
        metaThemeColor.setAttribute('content', '#0c0a09');
      }
    } else {
      root.classList.remove('dark');
      if (document.body) document.body.classList.remove('dark');
      if (metaThemeColor) {
        metaThemeColor.setAttribute('content', '#FAF8F5');
      }
    }
  };

  if (pref === 'dark') {
    setDarkClass(true);
  } else if (pref === 'light') {
    setDarkClass(false);
  } else {
    // System preference
    systemMediaWatcher = window.matchMedia('(prefers-color-scheme: dark)');
    setDarkClass(systemMediaWatcher.matches);

    systemThemeListener = (e: MediaQueryListEvent) => {
      setDarkClass(e.matches);
      window.dispatchEvent(new CustomEvent('hymnal-theme-change', { detail: { theme: 'system', isDark: e.matches } }));
    };
    systemMediaWatcher.addEventListener('change', systemThemeListener);
  }

  localStorage.setItem('hymnal_theme_pref', pref);
  window.dispatchEvent(new CustomEvent('hymnal-theme-change', { detail: { theme: pref } }));
};
