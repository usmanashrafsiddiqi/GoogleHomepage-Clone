// Importing React and useState hook for managing component state
import React, { useState } from 'react';

// Importing external CSS specific to this component
import './SearchBox.css';

// Define the SearchBox functional component
const SearchBox = () => {
  // Declare a state variable `query` to store the text input value
  const [query, setQuery] = useState('');

  // Function to handle form submission (when "Google Search" is clicked or Enter is pressed)
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission 
    if (query) { // If the input is not empty
      // Redirect to Google Search results page with the user's query
      const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
      window.location.href = searchUrl;
    }
  };

  // Function to handle "I'm Feeling Lucky" button click
  const handleLuckyClick = () => {
    // Redirects user to Google's Doodles page
    window.location.href = 'https://www.google.com/doodles';
  };

  // JSX to render the input box and buttons
  return (
    <form className="search-box" onSubmit={handleSubmit}>
      {/* Input field for typing the search query */}
      <div className="search-input">
        <input
          type="text"
          value={query} // Input value is controlled by `query` state
          onChange={(e) => setQuery(e.target.value)} // Updates the query as user types
          placeholder="Search Google or type a URL" // Placeholder text
        />
      </div>

      {/* Buttons: Google Search and I'm Feeling Lucky */}
      <div className="buttons">
        {/* Submit button for searching */}
        <button type="submit">Google Search</button>

        {/* Button that redirects to Doodles page */}
        <button type="button" onClick={handleLuckyClick}>
          I'm Feeling Lucky
        </button>
      </div>
    </form>
  );
};

// Export the component so it can be used in other parts of the app
export default SearchBox;
