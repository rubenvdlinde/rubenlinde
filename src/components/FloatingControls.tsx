import React, { useState, useEffect } from 'react';
import { useLocation } from '@docusaurus/router';
import Link from '@docusaurus/Link';

export default function FloatingControls() {
  const location = useLocation();
  const [colorMode, setColorModeState] = useState<'light' | 'dark'>('dark');

  // Check if we're on the homepage
  const isHomepage =
    location.pathname === '/' || location.pathname === '/rubenlinde/';

  // Determine current locale from pathname
  const currentLocale =
    location.pathname.startsWith('/en') || location.pathname.startsWith('/en/')
      ? 'en'
      : 'nl';

  // Calculate the alternate locale path
  const getAlternateLocalePath = () => {
    if (currentLocale === 'nl') {
      // Switching to English
      if (location.pathname === '/' || location.pathname === '') {
        return '/en/';
      }
      return `/en${location.pathname}`;
    } else {
      // Switching to Dutch - remove /en prefix
      if (location.pathname === '/en' || location.pathname === '/en/') {
        return '/';
      }
      return location.pathname.replace('/en/', '/').replace('/en', '/');
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

  const toggleColorMode = () => {
    const newMode = colorMode === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newMode);
    localStorage.setItem('theme', newMode);
    setColorModeState(newMode);
  };

  return (
    <div
      className={
        isHomepage ? 'homepage-floating-controls' : 'floating-controls'
      }
    >
      {/* Language Selector */}
      <Link
        to={getAlternateLocalePath()}
        className="floating-control-button"
        title={
          currentLocale === 'nl'
            ? 'Switch to English'
            : 'Wissel naar Nederlands'
        }
      >
        🌐 {currentLocale === 'nl' ? 'EN' : 'NL'}
      </Link>

      {/* Theme Toggle */}
      <button
        className="floating-control-button"
        onClick={toggleColorMode}
        aria-label="Toggle dark mode"
        title={
          colorMode === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'
        }
      >
        {colorMode === 'dark' ? '☀️' : '🌙'}
      </button>
    </div>
  );
}
