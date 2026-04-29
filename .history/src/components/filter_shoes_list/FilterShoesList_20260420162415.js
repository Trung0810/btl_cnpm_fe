import React, { useState } from "react";
import "./FilterShoesList.css";
import FilterShoes from "./FilterShoes";

const FilterShoesList = () => {
  const { filter, setFilter } = useState({ brand: "", category: "" });
  console.log("🚀 ~ FilterShoesList ~ filter:", filter);

  return (
    <div className="filter-shoes-list">
      <FilterShoes params="brand"></FilterShoes>
      <FilterShoes params="category"></FilterShoes>
    </div>
  );
};

export default FilterShoesList;
