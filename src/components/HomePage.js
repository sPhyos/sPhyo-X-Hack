import React from 'react';
import HackerAnimation from './HackerAnimation';

function HomePage() {
  return (
    <div className="container">
      <h1>Welcome to the Hacker's Hub</h1>
      <HackerAnimation />
      <p>
        This is where code meets chaos. Welcome to a digital playground where 
        every vulnerability is an opportunity and every exploit is a story waiting to unfold.
      </p>
      <h2>Hacker Arsenal:</h2>
      <ul>
        <li>Custom Exploit Development</li>
        <li>Network Reconnaissance</li>
        <li>Red Team Simulations</li>
        <li>Cryptographic Cracking</li>
        <li>Reverse Engineering Malware</li>
      </ul>
      <button className="button">Explore More</button>
    </div>
  );
}

export default HomePage;
