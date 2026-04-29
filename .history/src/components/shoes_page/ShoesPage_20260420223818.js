import React, { Fragment, useContext } from "react";
import Search from "../search/Search";
import GridLayout from "../grid_layout/GridLayout";
import { InforContext } from "../infor_provider/InforProvider";

const ShoesPage = () => {
  return (
    <Fragment>
      <Search></Search>
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
    </Fragment>
  );
};

export default ShoesPage;
