import React from "react";
import FilterShoesList from "../filter_shoes_list/FilterShoesList";
import ShoesGrid from "../shoes_grid/ShoesGrid";
import "./GridLayout.css";

const GridLayout = () => {
  return (
    <div className="gird-layout">
      <FilterShoesList></FilterShoesList>
      <ShoesGrid></ShoesGrid>
    </div>
  );
};

export default GridLayout;
