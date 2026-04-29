import React, { Fragment } from "react";
import Search from "../search/Search";
import GridLayout from "../grid_layout/GridLayout";

const ShoesPage = ({ typeof }) => {
  return (
    <Fragment>
      <Search></Search>
      <GridLayout type={typeof}></GridLayout>
    </Fragment>
  );
};

export default ShoesPage;
