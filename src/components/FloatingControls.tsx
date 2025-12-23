import React, { useState, useEffect } from 'react';
import { useLocation } from '@docusaurus/router';
import Link from '@docusaurus/Link';
import FloatingControlButton from './FloatingControlButton';

export default function FloatingControls() {
  const location = useLocation();
  const [colorMode, setColorModeState] = useState<'light' | 'dark'>('dark');
  const [showLangDropdown, setShowLangDropdown] = useState(false);
  const [showThemeDropdown, setShowThemeDropdown] = useState(false);

  // Check if we're on the homepage
  const isHomepage =
    location.pathname === '/' || location.pathname === '/rubenlinde/';

  // Determine current locale from pathname
  const currentLocale =
    location.pathname.startsWith('/en') || location.pathname.startsWith('/en/')
      ? 'en'
      : 'nl';

  // Calculate the alternate locale path
  const getLocalePath = (locale: string) => {
    const currentPath = location.pathname;
    if (locale === 'nl') {
      // Switch to Dutch
      if (currentPath.startsWith('/en')) {
        return currentPath.replace(/^\/en/, '') || '/';
      }
      return currentPath;
    } else {
      // Switch to English
      if (currentPath.startsWith('/en')) {
        return currentPath;
      }
      return `/en${currentPath === '/' ? '' : currentPath}`;
    }
  };

  useEffect(() => {
    // Get the current theme from the document
    const isDark =
      document.documentElement.getAttribute('data-theme') === 'dark';
    setColorModeState(isDark ? 'dark' : 'light');

    // Listen for theme changes
    const observer = new MutationObserver(() => {
      const isDark =
        document.documentElement.getAttribute('data-theme') === 'dark';
      setColorModeState(isDark ? 'dark' : 'light');
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme'],
    });

    return () => observer.disconnect();
  }, []);

  const setTheme = (mode: 'light' | 'dark') => {
    document.documentElement.setAttribute('data-theme', mode);
    localStorage.setItem('theme', mode);
    setColorModeState(mode);
    setShowThemeDropdown(false);
  };

  // Get short labels for current selection
  const languageLabel = currentLocale.toUpperCase();
  const themeLabel = colorMode === 'dark' ? 'Dark' : 'Light';

  return (
    <div
      className={
        isHomepage ? 'homepage-floating-controls' : 'floating-controls'
      }
    >
      {/* Language Selector */}
      <FloatingControlButton
        icon="🌐"
        label={languageLabel}
        isOpen={showLangDropdown}
        onToggle={() => setShowLangDropdown(!showLangDropdown)}
        onClose={() => setShowLangDropdown(false)}
      >
        <Link
          to={getLocalePath('nl')}
          className={`floating-control-dropdown-item ${currentLocale === 'nl' ? 'active' : ''}`}
          onClick={() => setShowLangDropdown(false)}
        >
          🇳🇱 Nederlands
        </Link>
        <Link
          to={getLocalePath('en')}
          className={`floating-control-dropdown-item ${currentLocale === 'en' ? 'active' : ''}`}
          onClick={() => setShowLangDropdown(false)}
        >
          🇬🇧 English
        </Link>
      </FloatingControlButton>

      {/* Theme Toggle */}
      <FloatingControlButton
        icon={colorMode === 'dark' ? '🌙' : '☀️'}
        label={themeLabel}
        isOpen={showThemeDropdown}
        onToggle={() => setShowThemeDropdown(!showThemeDropdown)}
        onClose={() => setShowThemeDropdown(false)}
      >
        <button
          className={`floating-control-dropdown-item ${colorMode === 'dark' ? 'active' : ''}`}
          onClick={() => setTheme('dark')}
        >
          🌙 Dark Mode
        </button>
        <button
          className={`floating-control-dropdown-item ${colorMode === 'light' ? 'active' : ''}`}
          onClick={() => setTheme('light')}
        >
          ☀️ Light Mode
        </button>
      </FloatingControlButton>
    </div>
  );
}
