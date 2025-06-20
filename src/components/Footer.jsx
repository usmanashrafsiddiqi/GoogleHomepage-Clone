// Import React to create the functional component
import React from 'react';

// Import CSS styles for the Footer component
import './Footer.css';

// Define the Footer functional component
const Footer = () => {
  return (
    // Footer container
    <footer className="footer">
      {/* Country information (like "India") */}
      <div className="footer-country">India</div>

      {/* Links section grouped into two parts */}
      <div className="footer-links">
        {/* Left-side links */}
        <div>
          {/* Each link opens the respective Google informational page in a new tab */}
          <a href="https://about.google/" target="_blank" rel="noopener noreferrer">About</a>
          <a href="https://ads.google.com/" target="_blank" rel="noopener noreferrer">Advertising</a>
          <a href="https://smallbusiness.withgoogle.com/" target="_blank" rel="noopener noreferrer">Business</a>
          <a href="https://www.google.com/search/howsearchworks/" target="_blank" rel="noopener noreferrer">How Search works</a>
        </div>

        {/* Right-side links */}
        <div>
          {/* These are policy and settings related links from official Google */}
          <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Privacy</a>
          <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer">Terms</a>
          <a href="https://www.google.com/preferences" target="_blank" rel="noopener noreferrer">Settings</a>
        </div>
      </div>
    </footer>
  );
};


export default Footer;
