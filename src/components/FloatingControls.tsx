import React, { useState, useEffect } from 'react';
import { useLocation } from '@docusaurus/router';

export default function FloatingControls() {
  const location = useLocation();
  const [colorMode, setColorModeState] = useState<'light' | 'dark'>('dark');

  // Check if we're on the homepage
  const isHomepage =
    location.pathname === '/' || location.pathname === '/rubenlinde/';

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
      {/* Language Selector - simple text for now */}
      <button
        className="floating-control-button"
        onClick={() => {
          // For now, just a placeholder - could link to /en/ or show a menu
          console.log('Language selector clicked');
        }}
        title="Language selector"
      >
        🌐 NL
      </button>

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
