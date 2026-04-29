import React, { Fragment } from "react";
import Search from "../search/Search";
import GridLayout from "../grid_layout/GridLayout";

const ShoesPage = ({ type }) => {
  return (
    <Fragment>
      <Search></Search>
      <GridLayout type={type}></GridLayout>
    </Fragment>
  );
};

export default ShoesPage;
