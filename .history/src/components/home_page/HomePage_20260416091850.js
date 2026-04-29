import React, { Fragment } from "react";
import ShoesList from "../shoes_list/ShoesList";
import Banner from "../banner/Banner";

const HomePage = () => {
  return (
    <Fragment>
      <Banner></Banner>
      <ShoesList title="Best seller" criteria="rate" sort="-1"></ShoesList>
      <ShoesList title="On sale" criteria="price" sort="1"></ShoesList>
    </Fragment>
  );
};

export default HomePage;
