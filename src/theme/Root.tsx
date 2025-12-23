import React, { useEffect } from 'react';
import { useLocation } from '@docusaurus/router';
import NetworkBackground from '../components/NetworkBackground';

export default function Root({ children }) {
  const location = useLocation();

  useEffect(() => {
    // Add a class to body based on the current page
    const isHomepage =
      location.pathname === '/' || location.pathname === '/rubenlinde/';

    if (isHomepage) {
      document.body.classList.add('homepage-root');
    } else {
      document.body.classList.remove('homepage-root');
    }

    // Cleanup on unmount
    return () => {
      document.body.classList.remove('homepage-root');
    };
  }, [location.pathname]);

  return (
    <>
      <NetworkBackground />
      {children}
    </>
  );
}
