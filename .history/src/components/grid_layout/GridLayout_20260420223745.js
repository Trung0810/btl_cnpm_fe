import React from "react";
import FilterShoesList from "../filter_shoes_list/FilterShoesList";
import ShoesGrid from "../shoes_grid/ShoesGrid";
import "./GridLayout.css";

const GridLayout = () => {
  return (
    <div
      className="grid-layout"
      style={{
        width: "90%",
        margin: "100px auto 0",
        display: "flex",
        columnGap: "20px",
      }}
    >
      <FilterShoesList></FilterShoesList>
      <ShoesGrid></ShoesGrid>
    </div>
  );
};

export default GridLayout;
