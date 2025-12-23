import React from 'react';
import NetworkBackground from '../components/NetworkBackground';

// This component wraps the entire application
export default function Root({ children }) {
  return (
    <>
      <NetworkBackground />
      {children}
    </>
  );
}
