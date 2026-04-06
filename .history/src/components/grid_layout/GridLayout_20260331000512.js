import React, { Fragment } from "react";
import FilterShoesList from "../filter_shoes_list/FilterShoesList";
import ShoesGrid from "../shoes_grid/ShoesGrid";

const GridLayout = () => {
  return (
    <Fragment>
      <FilterShoesList></FilterShoesList>
      <ShoesGrid></ShoesGrid>
    </Fragment>
  );
};

export default GridLayout;
