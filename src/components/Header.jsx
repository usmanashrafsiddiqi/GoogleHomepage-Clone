// Import React to define a component
import React from 'react';

// Import external CSS file for styling the header
import './Header.css';

// Define the Header functional component
const Header = () => {
  return (
    
    <header className="header">
      {/* Navigation section holding the links and icons */}
      <nav className="header-links">
        {/* Link to Gmail */}
        <a href="https://mail.google.com">Gmail</a>

        {/* Link to Google Images */}
        <a href="https://www.google.com/imghp">Images</a>

        {/* Placeholder for Google apps menu icon (grid icon) */}
        <div className="grid-icon">☰</div>

        {/* User avatar/profile picture */}
        <img
          className="avatar"
          src="https://www.gstatic.com/images/branding/product/1x/avatar_circle_blue_512dp.png"
          alt="Profile"
        />
      </nav>
    </header>
  );
};

// Export the Header component so it can be used in other files
export default Header;
