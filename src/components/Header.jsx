import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <nav className="header-links">
        <a href="https://mail.google.com">Gmail</a>
        <a href="https://www.google.com/imghp">Images</a>
        <div className="grid-icon">☰</div>
        <img
          className="avatar"
          src="https://www.gstatic.com/images/branding/product/1x/avatar_circle_blue_512dp.png"
          alt="Profile"
        />
      </nav>
    </header>
  );
};

export default Header;
