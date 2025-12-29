import React, { useState, useEffect } from 'react';
import { useLocation } from '@docusaurus/router';
import { translate } from '@docusaurus/Translate';
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
      // Switch to Dutch (remove /en prefix)
      if (currentPath === '/en/' || currentPath === '/en') {
        return '/'; // EN homepage -> NL homepage
      }
      if (currentPath.startsWith('/en/')) {
        return currentPath.replace(/^\/en/, ''); // /en/blog -> /blog
      }
      return currentPath;
    } else {
      // Switch to English (add /en prefix)
      if (currentPath.startsWith('/en')) {
        return currentPath; // Already on EN
      }
      // Ensure trailing slash for homepage
      return currentPath === '/' ? '/en/' : `/en${currentPath}`;
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
  const themeLabel =
    colorMode === 'dark'
      ? translate({
          id: 'theme.mode.dark.short',
          message: 'Dark',
          description: 'Short label for dark mode',
        })
      : translate({
          id: 'theme.mode.light.short',
          message: 'Light',
          description: 'Short label for light mode',
        });

  return (
    <div
      className={
        isHomepage ? 'homepage-floating-controls' : 'floating-controls'
      }
    >
      {/* Home Button - only show when not on homepage */}
      {!isHomepage && (
        <a
          href={currentLocale === 'en' ? '/en/' : '/'}
          className="floating-control-button"
        >
          <span className="floating-control-button__icon">🏠</span>
          <span className="floating-control-button__label">
            {translate({
              id: 'nav.home',
              message: 'Home',
              description: 'Home navigation label',
            })}
          </span>
        </a>
      )}

      {/* Blog Button */}
      <a
        href={currentLocale === 'en' ? '/en/blog' : '/blog'}
        className="floating-control-button"
      >
        <span className="floating-control-button__icon">📝</span>
        <span className="floating-control-button__label">Blog</span>
      </a>

      {/* Language Selector */}
      <FloatingControlButton
        icon="🌐"
        label={languageLabel}
        isOpen={showLangDropdown}
        onToggle={() => setShowLangDropdown(!showLangDropdown)}
        onClose={() => setShowLangDropdown(false)}
      >
        <a
          href={getLocalePath('nl')}
          className={`floating-control-dropdown-item ${currentLocale === 'nl' ? 'active' : ''}`}
          onClick={() => setShowLangDropdown(false)}
        >
          🇳🇱{' '}
          {translate({
            id: 'language.nl',
            message: 'Nederlands',
            description: 'Dutch language label',
          })}
        </a>
        <a
          href={getLocalePath('en')}
          className={`floating-control-dropdown-item ${currentLocale === 'en' ? 'active' : ''}`}
          onClick={() => setShowLangDropdown(false)}
        >
          🇬🇧{' '}
          {translate({
            id: 'language.en',
            message: 'English',
            description: 'English language label',
          })}
        </a>
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
          🌙{' '}
          {translate({
            id: 'theme.mode.dark',
            message: 'Dark Mode',
            description: 'Dark mode label',
          })}
        </button>
        <button
          className={`floating-control-dropdown-item ${colorMode === 'light' ? 'active' : ''}`}
          onClick={() => setTheme('light')}
        >
          ☀️{' '}
          {translate({
            id: 'theme.mode.light',
            message: 'Light Mode',
            description: 'Light mode label',
          })}
        </button>
      </FloatingControlButton>
    </div>
  );
}
