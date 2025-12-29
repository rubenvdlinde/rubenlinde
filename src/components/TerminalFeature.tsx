import React, { useEffect, useRef, useState } from 'react';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

interface TerminalFeatureProps {
  title: string;
  icon: string;
  description: string;
  tags?: string[];
  delay?: number;
  startImmediately?: boolean;
}

const TerminalFeature: React.FC<TerminalFeatureProps> = ({
  title,
  icon,
  description,
  tags = [],
  delay = 0,
  startImmediately = false,
}) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [showTags, setShowTags] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const { i18n } = useDocusaurusContext();

  useEffect(() => {
    // If startImmediately is true, skip IntersectionObserver
    if (startImmediately && !hasStarted) {
      setHasStarted(true);

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
            // Show tags after typing is complete
            setTimeout(() => setShowTags(true), 300);
          }
        }, 30);
      }, delay);

      return;
    }

    // Otherwise, use IntersectionObserver
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
                  // Show tags after typing is complete
                  setTimeout(() => setShowTags(true), 300);
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
  }, [description, hasStarted, delay, startImmediately]);

  const baseUrl = i18n.currentLocale === 'en' ? '/en/blog' : '/blog';

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
      {showTags && tags.length > 0 && (
        <div className="feature-card__tags">
          {tags.map((tag) => (
            <Link
              key={tag}
              to={`${baseUrl}/tags/${tag}`}
              className="feature-card__tag"
            >
              {tag}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default TerminalFeature;
