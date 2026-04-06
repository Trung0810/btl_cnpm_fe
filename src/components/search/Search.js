import React from "react";
import "./Search.css";

const Search = () => {
  return (
    <div className="search">
      <input
        type="text"
        name="shoes"
        className="search-input"
        placeholder="Search for shoes..."
      />
      <button className="search-button">Search</button>
    </div>
  );
};

export default Search;
