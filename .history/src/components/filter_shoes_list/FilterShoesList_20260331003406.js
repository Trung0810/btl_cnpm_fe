import React from "react";
import "./FilterShoesList.css";
import FilterShoes from "./FilterShoes";

const FilterShoesList = () => {
  return (
    <div className="filter-shoes-list">
      <FilterShoes></FilterShoes>
      <FilterShoes></FilterShoes>
    </div>
  );
};

export default FilterShoesList;
