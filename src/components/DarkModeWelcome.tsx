import React, { useState, useEffect } from 'react';
import { useLocation } from '@docusaurus/router';
import { translate } from '@docusaurus/Translate';

export default function DarkModeWelcome() {
  const [showModal, setShowModal] = useState(false);
  const location = useLocation();

  // Only show on homepage
  const isHomepage =
    location.pathname === '/' || location.pathname === '/rubenlinde/';

  useEffect(() => {
    if (!isHomepage) return;

    // Check if user has already made a choice
    const hasSeenModal = localStorage.getItem('darkmode-welcome-seen');
    if (hasSeenModal) return;

    // Check if browser prefers light mode
    const prefersDark = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches;

    // Force dark mode
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');

    // If browser prefers light, show the modal
    if (!prefersDark) {
      setShowModal(true);
    } else {
      // Mark as seen even if we don't show modal
      localStorage.setItem('darkmode-welcome-seen', 'true');
    }
  }, [isHomepage]);

  const handleSwitchToLight = () => {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
    localStorage.setItem('darkmode-welcome-seen', 'true');
    setShowModal(false);
  };

  const handleClose = () => {
    localStorage.setItem('darkmode-welcome-seen', 'true');
    setShowModal(false);
  };

  if (!showModal || !isHomepage) {
    return null;
  }

  return (
    <div className="darkmode-modal-overlay">
      <div className="darkmode-modal">
        <div className="darkmode-modal-header">
          <h2>
            🌙{' '}
            {translate({
              id: 'darkModeWelcome.title',
              message: 'Welcome to the Dark Side',
              description: 'Title for dark mode welcome modal',
            })}
          </h2>
        </div>
        <div className="darkmode-modal-body">
          <p>
            {translate({
              id: 'darkModeWelcome.message1',
              message:
                "We've set your experience to dark mode for the true developer experience.",
              description: 'First message in dark mode welcome modal',
            })}
          </p>
          <p>
            {translate({
              id: 'darkModeWelcome.message2',
              message:
                'Dark mode is easier on the eyes and perfect for late-night coding sessions! 💻',
              description: 'Second message in dark mode welcome modal',
            })}
          </p>
          <p>
            {translate({
              id: 'darkModeWelcome.message3',
              message: 'Also everything just looks much cooler in darkmode.',
              description: 'Third message in dark mode welcome modal',
            })}
          </p>
        </div>
        <div className="darkmode-modal-actions">
          <button
            onClick={handleSwitchToLight}
            className="darkmode-modal-button darkmode-modal-button-light"
          >
            ☀️{' '}
            {translate({
              id: 'darkModeWelcome.switchToLight',
              message: 'Switch to Light Mode',
              description: 'Button to switch to light mode',
            })}
          </button>
          <button
            onClick={handleClose}
            className="darkmode-modal-button darkmode-modal-button-dark"
          >
            {translate({
              id: 'darkModeWelcome.stayInDark',
              message: 'Stay in Dark Mode ✨',
              description: 'Button to stay in dark mode',
            })}
          </button>
        </div>
      </div>
    </div>
  );
}
