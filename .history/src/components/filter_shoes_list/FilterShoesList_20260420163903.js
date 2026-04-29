import React from "react";
import FilterShoes from "./FilterShoes";
import "./FilterShoesList.css";

const FilterShoesList = () => {
  return (
    <div className="filter-shoes-list">
      <FilterShoes params="brand"></FilterShoes>
      <FilterShoes params="category"></FilterShoes>
      <FilterShoes params="sort"></FilterShoes>
    </div>
  );
};

export default FilterShoesList;
