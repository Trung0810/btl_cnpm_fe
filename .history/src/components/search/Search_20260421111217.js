import React, { useContext } from "react";
import { debounce } from "lodash";
import { ShoesContext } from "../infor_provider/ShoesProvider";
import "./Search.css";

const Search = () => {
  const { filter, setFilter } = useContext(ShoesContextContext);

  return (
    <div className="search">
      <input
        type="text"
        name="shoes"
        className="search-input"
        placeholder="Search for shoes..."
        onChange={debounce(
          (event) =>
            setFilter((prev) => ({ ...prev, name: event.target.value })),
          500,
        )}
      />
      {/* <button className="search-button">Search</button> */}
    </div>
  );
};

export default Search;
