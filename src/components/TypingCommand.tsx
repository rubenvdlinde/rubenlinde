import React, { useState, useEffect, useRef } from 'react';

interface TypingCommandProps {
  command: string;
  onComplete: () => void;
  delay?: number;
}

export default function TypingCommand({
  command,
  onComplete,
  delay = 0,
}: TypingCommandProps) {
  const [displayedText, setDisplayedText] = useState('');
  const [isComplete, setIsComplete] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const commandRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const currentRef = commandRef.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(currentRef);

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    const startDelay = setTimeout(() => {
      let currentIndex = 0;

      const typingInterval = setInterval(() => {
        if (currentIndex <= command.length) {
          setDisplayedText(command.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(typingInterval);
          setIsComplete(true);
          setTimeout(() => {
            onComplete();
          }, 300); // Small delay before showing cards
        }
      }, 80); // Typing speed

      return () => {
        clearInterval(typingInterval);
      };
    }, delay);

    return () => {
      clearTimeout(startDelay);
    };
  }, [hasStarted, command, delay, onComplete]);

  return (
    <h2
      ref={commandRef}
      className="text--center margin-bottom--xl typing-command"
      style={{
        color: 'var(--ifm-color-secondary)',
        fontFamily: 'Courier New, monospace',
        textTransform: 'uppercase',
        letterSpacing: '3px',
        minHeight: '2.5rem',
      }}
    >
      {displayedText}
      {!isComplete && hasStarted && <span className="typing-cursor">_</span>}
    </h2>
  );
}
