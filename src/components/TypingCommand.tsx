import React, { useState, useEffect, useRef } from 'react';

interface TypingCommandProps {
  onComplete: () => void;
  delay?: number;
}

export default function TypingCommand({
  onComplete,
  delay = 0,
}: TypingCommandProps) {
  const [displayedText, setDisplayedText] = useState('');
  const [currentStep, setCurrentStep] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const commandRef = useRef<HTMLHeadingElement>(null);

  const steps = [
    { text: '$ cat expertise.txt', type: 'command' },
    { text: 'cat: expertise.txt: Permission denied', type: 'error' },
    { text: '$ sudo cat expertise.txt', type: 'command' },
  ];

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
    if (!hasStarted || currentStep >= steps.length) return;

    const step = steps[currentStep];
    const startDelay = currentStep === 0 ? delay : 800; // Delay between steps

    const timeoutId = setTimeout(() => {
      let currentIndex = 0;

      const typingInterval = setInterval(
        () => {
          if (currentIndex <= step.text.length) {
            setDisplayedText(step.text.slice(0, currentIndex));
            currentIndex++;
          } else {
            clearInterval(typingInterval);

            // Move to next step after a pause
            setTimeout(
              () => {
                if (currentStep < steps.length - 1) {
                  setCurrentStep(currentStep + 1);
                } else {
                  setIsComplete(true);
                  setTimeout(() => {
                    onComplete();
                  }, 300);
                }
              },
              step.type === 'error' ? 1500 : 500
            );
          }
        },
        step.type === 'error' ? 40 : 80
      ); // Faster for error message

      return () => {
        clearInterval(typingInterval);
      };
    }, startDelay);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [hasStarted, currentStep, delay, onComplete, steps]);

  const step = steps[currentStep];
  const isError = step?.type === 'error';

  return (
    <div
      ref={commandRef}
      className="text--center margin-bottom--xl"
      style={{ minHeight: '2.5rem' }}
    >
      <h2
        className="typing-command"
        style={{
          color: isError ? '#ff4444' : 'var(--ifm-color-secondary)',
          fontFamily: 'Courier New, monospace',
          textTransform: 'uppercase',
          letterSpacing: '3px',
          marginBottom: '0.5rem',
        }}
      >
        {displayedText}
        {!isComplete && hasStarted && <span className="typing-cursor">_</span>}
      </h2>
    </div>
  );
}
