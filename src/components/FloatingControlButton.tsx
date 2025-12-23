import React, { useRef, useEffect } from 'react';

interface FloatingControlButtonProps {
  icon: string;
  label: string;
  isOpen: boolean;
  onToggle: () => void;
  onClose: () => void;
  children: React.ReactNode;
}

export default function FloatingControlButton({
  icon,
  label,
  isOpen,
  onToggle,
  onClose,
  children,
}: FloatingControlButtonProps) {
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  return (
    <div className="floating-control-wrapper" ref={dropdownRef}>
      <button
        className="floating-control-button"
        onClick={onToggle}
        aria-label={`Select ${label}`}
        title={`Select ${label}`}
      >
        <span className="floating-control-button__icon">{icon}</span>
        <span className="floating-control-button__label">{label}</span>
      </button>
      <div
        className={`floating-control-dropdown ${isOpen ? 'active' : ''}`}
        aria-hidden={!isOpen}
      >
        {children}
      </div>
    </div>
  );
}
