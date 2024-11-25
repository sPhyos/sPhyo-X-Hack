import React from 'react';
import HackerAnimation from './HackerAnimation';
import './HomePage.css';

function HomePage() {
  return (
    <div className="container homepage-container">
      <h1>💻 Welcome to the Hacker's Den</h1>
      <HackerAnimation />
      <p>
        This is a sanctuary for those who see code as poetry, exploits as art, and hacking as a way of life. 
        From penetration testing to digital reconnaissance, the journey into the matrix begins here.
      </p>
      <h2>🔒 Hacker Arsenal:</h2>
      <ul className="arsenal-list">
        <li>🕵️‍♂️ Stealthy Network Reconnaissance</li>
        <li>💣 Crafting Custom Exploits</li>
        <li>👨‍💻 Reverse Engineering Malware</li>
        <li>🔐 Breaking Cryptographic Algorithms</li>
        <li>🔍 Conducting Forensic Analysis</li>
      </ul>
      <button className="explore-button">🚀 Dive into the Matrix</button>
    </div>
  );
}

export default HomePage;
