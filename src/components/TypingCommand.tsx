import React, { useState, useEffect, useRef } from 'react';

interface TypingCommandProps {
  onComplete: () => void;
  delay?: number;
}

interface Step {
  text: string;
  type: 'command' | 'error';
}

export default function TypingCommand({
  onComplete,
  delay = 0,
}: TypingCommandProps) {
  const [steps, setSteps] = useState<Step[]>([]);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showCards, setShowCards] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [isComplete, setIsComplete] = useState(false); // Add completion flag
  const commandRef = useRef<HTMLDivElement>(null);

  const allSteps: Step[] = [
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
    if (!hasStarted || currentStepIndex >= allSteps.length || isComplete)
      return;

    const step = allSteps[currentStepIndex];
    const startDelay = currentStepIndex === 0 ? delay : 800;

    const timeoutId = setTimeout(() => {
      setIsTyping(true);
      let currentIndex = 0;

      const typingInterval = setInterval(
        () => {
          if (currentIndex <= step.text.length) {
            setCurrentText(step.text.slice(0, currentIndex));
            currentIndex++;
          } else {
            clearInterval(typingInterval);
            setIsTyping(false);

            // Add completed step to the list
            setSteps((prev) => [...prev, step]);
            setCurrentText('');

            // Move to next step or finish
            setTimeout(
              () => {
                if (currentStepIndex < allSteps.length - 1) {
                  setCurrentStepIndex(currentStepIndex + 1);
                } else {
                  // All steps done, show cards
                  setIsComplete(true); // Mark as complete to stop further animations
                  setTimeout(() => {
                    setShowCards(true);
                    onComplete();
                    // Keep only the sudo command, remove first two
                    setTimeout(() => {
                      setSteps([allSteps[2]]); // Keep only sudo command
                    }, 500);
                  }, 300);
                }
              },
              step.type === 'error' ? 1000 : 500
            );
          }
        },
        step.type === 'error' ? 40 : 80
      );

      return () => {
        clearInterval(typingInterval);
      };
    }, startDelay);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [hasStarted, currentStepIndex, delay, onComplete]);

  return (
    <div
      ref={commandRef}
      className="text--center margin-bottom--xl"
      style={{ minHeight: '2.5rem' }}
    >
      {steps.map((step, index) => (
        <h2
          key={index}
          className="typing-command"
          style={{
            color:
              step.type === 'error' ? '#ff4444' : 'var(--ifm-color-secondary)',
            fontFamily: 'Courier New, monospace',
            textTransform: 'uppercase',
            letterSpacing: '3px',
            marginBottom: '0.5rem',
          }}
        >
          {step.text}
        </h2>
      ))}
      {currentText && (
        <h2
          className="typing-command"
          style={{
            color:
              allSteps[currentStepIndex]?.type === 'error'
                ? '#ff4444'
                : 'var(--ifm-color-secondary)',
            fontFamily: 'Courier New, monospace',
            textTransform: 'uppercase',
            letterSpacing: '3px',
            marginBottom: '0.5rem',
          }}
        >
          {currentText}
          {isTyping && <span className="typing-cursor">_</span>}
        </h2>
      )}
    </div>
  );
}
