import React, { useEffect, useState } from 'react';
import './HackerAnimation.css';

const HackerAnimation = () => {
  const [displayedText, setDisplayedText] = useState('');
  const codeLines = [
    "Initializing system... ",
    " Accessing secure server... ",
    " Bypassing firewall... ",
    " Executing exploit payload... ",
    " Compiling report: Success ",
    " Warning: Intrusion detected! ",
    " Session terminated: 192.168.0.101 ",
  ];

  useEffect(() => {
    let currentLine = 0;
    let charIndex = 0;
    const typingSpeed = 100; 

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
        clearInterval(typingInterval);
      }
    };

    const typingInterval = setInterval(typeEffect, typingSpeed);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <div className="hacker-animation">
      <pre>{displayedText}</pre>
    </div>
  );
};

export default HackerAnimation;
