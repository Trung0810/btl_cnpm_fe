import React from "react";
import FilterShoesList from "../filter_shoes_list/FilterShoesList";
import ShoesGrid from "../shoes_grid/ShoesGrid";
import "./GridLayout.css";

const GridLayout = ({ type }) => {
  return (
    <div className="grid-layout">
      <FilterShoesList></FilterShoesList>
      <ShoesGrid type={type}></ShoesGrid>
    </div>
  );
};

export default GridLayout;
