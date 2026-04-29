import React, { useContext } from "react";
import "./Search.css";
import { InforContext } from "../infor_provider/InforProvider";

const Search = () => {
  const { filter, setFilter } = useContext(InforContext);

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
