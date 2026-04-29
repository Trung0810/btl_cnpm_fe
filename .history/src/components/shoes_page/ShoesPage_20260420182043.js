import React, { Fragment, useContext } from "react";
import Search from "../search/Search";
import GridLayout from "../grid_layout/GridLayout";
import { InforContext } from "../infor_provider/InforProvider";

const ShoesPage = () => {
  return (
    <Fragment>
      <Search></Search>
      <GridLayout></GridLayout>
    </Fragment>
  );
};

export default ShoesPage;
