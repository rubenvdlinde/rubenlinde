import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from '@docusaurus/router';
import Link from '@docusaurus/Link';

export default function FloatingControls() {
  const location = useLocation();
  const [colorMode, setColorModeState] = useState<'light' | 'dark'>('dark');
  const [showLangDropdown, setShowLangDropdown] = useState(false);
  const [showThemeDropdown, setShowThemeDropdown] = useState(false);
  const langDropdownRef = useRef<HTMLDivElement>(null);
  const themeDropdownRef = useRef<HTMLDivElement>(null);

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

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        langDropdownRef.current &&
        !langDropdownRef.current.contains(event.target as Node)
      ) {
        setShowLangDropdown(false);
      }
      if (
        themeDropdownRef.current &&
        !themeDropdownRef.current.contains(event.target as Node)
      ) {
        setShowThemeDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const setTheme = (mode: 'light' | 'dark') => {
    document.documentElement.setAttribute('data-theme', mode);
    localStorage.setItem('theme', mode);
    setColorModeState(mode);
    setShowThemeDropdown(false);
  };

  return (
    <div
      className={
        isHomepage ? 'homepage-floating-controls' : 'floating-controls'
      }
    >
      {/* Language Selector with Dropdown */}
      <div style={{ position: 'relative' }} ref={langDropdownRef}>
        <button
          className="floating-control-button"
          onClick={() => setShowLangDropdown(!showLangDropdown)}
          aria-label="Select language"
          title="Select language"
        >
          🌐
        </button>
        <div
          className={`floating-control-dropdown ${showLangDropdown ? 'active' : ''}`}
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
        </div>
      </div>

      {/* Theme Toggle with Dropdown */}
      <div style={{ position: 'relative' }} ref={themeDropdownRef}>
        <button
          className="floating-control-button"
          onClick={() => setShowThemeDropdown(!showThemeDropdown)}
          aria-label="Select theme"
          title="Select theme"
        >
          {colorMode === 'dark' ? '🌙' : '☀️'}
        </button>
        <div
          className={`floating-control-dropdown ${showThemeDropdown ? 'active' : ''}`}
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
        </div>
      </div>
    </div>
  );
}
