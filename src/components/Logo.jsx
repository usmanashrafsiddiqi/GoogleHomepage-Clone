import React from 'react';
import './Logo.css';

const Logo = () => {
  return (
    <div className="logo">
      <img
        src="/assets/google.png" // 🔥 this path works from the `public` folder
        alt="Google"
      />
    </div>
  );
};

export default Logo;
