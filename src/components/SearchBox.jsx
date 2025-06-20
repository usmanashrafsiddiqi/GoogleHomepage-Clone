import React, { useState } from 'react';
import './SearchBox.css';

const SearchBox = () => {
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      window.location.href = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
    }
  };

  const feelingLucky = () => {
    window.location.href = 'https://www.google.com/doodles';
  };

  return (
    <form className="search-box" onSubmit={handleSearch}>
      <div className="search-input">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search Google or type a URL"
        />
      </div>
      <div className="buttons">
        <button type="submit">Google Search</button>
        <button type="button" onClick={feelingLucky}>I'm Feeling Lucky</button>
      </div>
    </form>
  );
};

export default SearchBox;
