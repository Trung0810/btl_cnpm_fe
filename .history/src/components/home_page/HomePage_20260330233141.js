import React, { Fragment } from "react";
import ShoesList from "../shoes_list/ShoesList";
import Banner from "../banner/Banner";

const HomePage = () => {
  return (
    <Fragment>
      <Banner></Banner>
      <ShoesList title="Trending"></ShoesList>
      <ShoesList title="Best seller"></ShoesList>
      <ShoesList title="On sale"></ShoesList>
    </Fragment>
  );
};

export default HomePage;
