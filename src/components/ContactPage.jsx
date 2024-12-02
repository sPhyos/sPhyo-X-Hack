import React from 'react';
import './ContactPage.css';

function ContactPage() {
  return (
    <div className="container contact-container">
      <h1>💻 Operative Network: Connect & Conquer</h1>
      <div className="contact-terminal">
        <p>
          Welcome, Shadow Operative. The network is live, and the connections are secure. 
          Here lies the gateway to knowledge sharing, collaboration, and digital domination.
        </p>
        <p>
          If you're a seeker of exploits or an architect of chaos, you're in the right place. 
          Let’s share zero-days, crack defenses, and build tools that echo in eternity.
        </p>
        <p>📡 <b>Mission Directives:</b></p>
        <ul className="terminal-list">
          <li>👾 Develop cutting-edge scripts and automation tools.</li>
          <li>⚡ Share and learn penetration testing techniques.</li>
          <li>🔍 Decode the mysteries of reverse engineering.</li>
          <li>🕵️ Collaborate on red-team operations.</li>
          <li>🌐 Share the ultimate secrets of OSINT mastery.</li>
        </ul>
        <p>💾 Ready to connect? Access your links below.</p>
      </div>
      <h2>🔗 Network Nodes</h2>
      <ul className="contact-links">
        <li><a href="https://linkedin.com/hacked" target="_blank" rel="noopener noreferrer">➜ LinkedIn: Professional Recon</a></li>
        <li><a href="https://github.com/hacked" target="_blank" rel="noopener noreferrer">➜ GitHub: Code Repository</a></li>
        <li><a href="https://t.me/hacked" target="_blank" rel="noopener noreferrer">➜ Telegram: Secure Comms</a></li>
      </ul>
      <div className="hacker-quotes">
        <h3>💡 Hacker Wisdom:</h3>
        <blockquote>
          <p>
            "Hackers are not inherently bad; they are explorers in a digital wilderness. 
            We understand systems not to destroy, but to perfect."
          </p>
          <footer>- Unknown</footer>
        </blockquote>
        <blockquote>
          <p>
            "Security is not a product but a process. Hackers expose the flaws 
            in systems, forcing them to evolve."
          </p>
          <footer>- Bruce Schneier</footer>
        </blockquote>
      </div>
    </div>
  );
}

export default ContactPage;
