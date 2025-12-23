import React, { useEffect, useRef, useState } from 'react';
import Heading from '@theme/Heading';

interface TerminalFeatureProps {
  title: string;
  icon: string;
  description: string;
  delay?: number;
}

const TerminalFeature: React.FC<TerminalFeatureProps> = ({
  title,
  icon,
  description,
  delay = 0,
}) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasStarted) {
            setHasStarted(true);

            // Delay before starting the typing animation
            setTimeout(() => {
              setIsTyping(true);
              let currentIndex = 0;

              const typingInterval = setInterval(() => {
                if (currentIndex < description.length) {
                  setDisplayedText(description.slice(0, currentIndex + 1));
                  currentIndex++;
                } else {
                  setIsTyping(false);
                  clearInterval(typingInterval);
                }
              }, 30);
            }, delay);
          }
        });
      },
      { threshold: 0.2 }
    );

    const currentRef = cardRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [description, hasStarted, delay]);

  return (
    <div ref={cardRef} className="feature-card">
      <Heading as="h3" className="feature-card__title">
        <span className="feature-card__icon">{icon}</span> {title}
      </Heading>
      <p className="feature-card__description">
        {displayedText}
        {isTyping && displayedText.length < description.length && (
          <span className="terminal-cursor">█</span>
        )}
      </p>
    </div>
  );
};

export default TerminalFeature;
