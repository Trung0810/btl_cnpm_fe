import React, { Fragment } from "react";
import ShoesList from "../shoes_list/ShoesList";
import Banner from "../banner/Banner";

const HomePage = () => {
  return (
    <Fragment>
      <Banner></Banner>
      <ShoesList title="Best seller" criteria="rate"></ShoesList>
      <ShoesList title="On sale" criteria="price"></ShoesList>
    </Fragment>
  );
};

export default HomePage;
