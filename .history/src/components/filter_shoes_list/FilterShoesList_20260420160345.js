import React from "react";
import "./FilterShoesList.css";
import FilterShoes from "./FilterShoes";

const FilterShoesList = () => {
  return (
    <div className="filter-shoes-list">
      <FilterShoes params="brand"></FilterShoes>
      <FilterShoes params="category"></FilterShoes>
    </div>
  );
};

export default FilterShoesList;
