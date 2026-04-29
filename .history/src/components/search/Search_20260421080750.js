import React, { useContext } from "react";
import "./Search.css";
import { InforContext } from "../infor_provider/InforProvider";
import { debounce } from "lodash";

const Search = () => {
  const { filter, setFilter } = useContext(InforContext);

  return (
    <div className="search">
      <input
        type="text"
        name="shoes"
        className="search-input"
        placeholder="Search for shoes..."
        onChange={debounce(
          (event) =>
            setFilter((prev) => ({ ...prev, keyword: event.target.value })),
          500,
        )}
      />
      <button className="search-button">Search</button>
    </div>
  );
};

export default Search;
