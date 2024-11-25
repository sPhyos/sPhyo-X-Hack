import React from 'react';
import './AboutPage.css';

function AboutPage() {
  return (
    <div className="container about-container">
      <h1>👾 About the Hacker</h1>
      <div className="intro-section">
        <p>
          In the shadows of cyberspace, I am a black hat hacker, driven by curiosity and fueled by the art of breaking barriers. 
          From exploiting zero-days to crafting custom scripts, I delve into the digital underworld to understand, innovate, and challenge the system.
        </p>
      </div>
      <h2>🎯 My Mission</h2>
      <p>
        Black hat hacking is about bending the rules of the digital game. It's not just about chaos but a way to expose flaws, push boundaries, 
        and explore the unknown. Every system has a weakness; I aim to find it before others do.
      </p>
      <h2>🛠️ Tools of the Trade</h2>
      <p>
        A hacker's toolbox is as varied as the systems they breach. Here are some of my go-to tools:
      </p>
      <ul className="hacker-tools">
        <li>👨‍💻 Kali Linux: The ultimate penetration testing OS.</li>
        <li>⚡ Metasploit: For rapid vulnerability exploitation.</li>
        <li>🌐 Burp Suite: Mastering web application pentesting.</li>
        <li>🔍 Wireshark: Decoding packets like a pro.</li>
        <li>🛡️ John the Ripper: Breaking encryption one password at a time.</li>
        <li>🤖 Custom Payloads: Handcrafted scripts for maximum impact.</li>
      </ul>
      <h2>💀 Black Hat Chronicles</h2>
      <p>
        Black hat hackers have shaped the cybersecurity landscape with legendary exploits. From the first worm in 1988 
        to the infamous Anonymous collective, the digital frontier has been a battleground of creativity and chaos.
      </p>
      <blockquote className="hacker-quote">
        "Hacking isn't about breaking and entering; it's about looking at the world differently."
        <footer>- A Shadow Operative</footer>
      </blockquote>
      <h2>📚 Knowledge is Power</h2>
      <p>
        In the realm of hacking, knowledge is the ultimate weapon. Exploring vulnerabilities, bypassing firewalls, and 
        reverse-engineering software are just the beginning. The journey of a black hat hacker is endless learning.
      </p>
    </div>
  );
}

export default AboutPage;
