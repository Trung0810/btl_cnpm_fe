import React from "react";
import FilterShoesList from "../filter_shoes_list/FilterShoesList";
import ShoesGrid from "../shoes_grid/ShoesGrid";
import "./GridLayout.css";

const GridLayout = ({ typeof }) => {
  return (
    <div className="grid-layout">
      <FilterShoesList></FilterShoesList>
      <ShoesGrid typeof={typeof}></ShoesGrid>
    </div>
  );
};

export default GridLayout;
