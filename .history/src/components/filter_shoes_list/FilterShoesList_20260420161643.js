import React, { useState } from "react";
import "./FilterShoesList.css";
import FilterShoes from "./FilterShoes";

const FilterShoesList = () => {
  const [filter, setFilter] = useState({ brand: "", category: "" });
  return (
    <div className="filter-shoes-list">
      <FilterShoes params="brand" setFilter={setFilter}></FilterShoes>
      <FilterShoes params="category" setFilter={setFilter}></FilterShoes>
    </div>
  );
};

export default FilterShoesList;
