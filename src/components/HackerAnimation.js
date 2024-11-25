import React, { useEffect, useState } from 'react';
import './HackerAnimation.css';

const HackerAnimation = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [isGlitching, setIsGlitching] = useState(false);

  const codeLines = [
    ">> Initializing Virtual Environment... ",
    ">> Establishing Secure Connection... ",
    ">> Brute-forcing Encryption Key... ",
    ">> Injecting Exploit into Memory... ",
    ">> Accessing Target System... ",
    ">> Exfiltrating Sensitive Data... ",
    ">> Operation Complete: Stealth Mode Activated. ",
  ];

  useEffect(() => {
    let currentLine = 0;
    let charIndex = 0;
    const typingSpeed = 80;

    const typeEffect = () => {
      if (currentLine < codeLines.length) {
        if (charIndex < codeLines[currentLine].length) {
          setDisplayedText((prev) => prev + codeLines[currentLine][charIndex]);
          charIndex++;
        } else {
          setDisplayedText((prev) => prev + '\n');
          charIndex = 0;
          currentLine++;
        }
      } else {
        setIsGlitching(true);
        clearInterval(typingInterval);
      }
    };

    const typingInterval = setInterval(typeEffect, typingSpeed);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <div className="hacker-animation">
      <pre>{displayedText}</pre>
      {isGlitching && <div className="glitch-effect">⚠️ SYSTEM ERROR DETECTED ⚠️</div>}
    </div>
  );
};

export default HackerAnimation;
