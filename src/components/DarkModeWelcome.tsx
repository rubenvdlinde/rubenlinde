import React, { useState, useEffect } from 'react';
import { useLocation } from '@docusaurus/router';

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
          <h2>🌙 Welcome to the Dark Side</h2>
        </div>
        <div className="darkmode-modal-body">
          <p>
            We&apos;ve set your experience to <strong>dark mode</strong> for the
            true developer experience.
          </p>
          <p>
            Dark mode is easier on the eyes and perfect for late-night coding
            sessions! 💻
          </p>
          <p>Also everything just looks much cooler in darkmode.</p>
        </div>
        <div className="darkmode-modal-actions">
          <button
            onClick={handleSwitchToLight}
            className="darkmode-modal-button darkmode-modal-button-light"
          >
            ☀️ Switch to Light Mode
          </button>
          <button
            onClick={handleClose}
            className="darkmode-modal-button darkmode-modal-button-dark"
          >
            Stay in Dark Mode ✨
          </button>
        </div>
      </div>
    </div>
  );
}
