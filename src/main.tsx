import React, { Component, ReactNode, ErrorInfo } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Register Service Worker for offline hymnal access and reopening
if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/sw.js')
      .then((reg) => {
        reg.update().catch(() => {});
      })
      .catch((err) => {
        console.warn('[PWA] Service Worker registration failed:', err);
      });
  });
}

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

class RootErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('RootErrorBoundary caught error:', error, errorInfo);
  }

  handleReload = () => {
    try {
      localStorage.removeItem('hymnal_theme_pref');
      localStorage.removeItem('hymnal_text_size');
      localStorage.removeItem('hymnal_line_spacing');
    } catch {}
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#FAF8F5] text-stone-900 flex items-center justify-center p-4">
          <div className="max-w-md w-full bg-white rounded-3xl p-6 border border-stone-200 shadow-xl text-center space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-900/10 text-amber-900 flex items-center justify-center mx-auto text-xl font-bold">
              ✝
            </div>
            <h2 className="text-lg font-bold text-stone-900">Kristu Mu Nyimbo</h2>
            <p className="text-xs text-stone-600 leading-relaxed">
              Pali akasenda kasangilwe pa kweshesha. Tinyeni apa pa kutila mweshe kabili.
            </p>
            {this.state.error && (
              <pre className="text-[10px] p-3 rounded-xl bg-stone-100 text-stone-600 text-left overflow-x-auto max-h-32">
                {this.state.error.message}
              </pre>
            )}
            <button
              onClick={this.handleReload}
              className="w-full py-2.5 px-4 rounded-xl bg-amber-900 hover:bg-amber-950 text-white text-xs font-semibold shadow-xs transition-colors cursor-pointer"
            >
              Reload Hymnal (Bwelelani pa Kwamba)
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(
    <RootErrorBoundary>
      <App />
    </RootErrorBoundary>
  );
}
