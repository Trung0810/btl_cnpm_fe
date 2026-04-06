import React, { Fragment } from "react";
import ShoesList from "../shoes_list/ShoesList";

const HomePage = () => {
  return (
    <Fragment>
      <ShoesList title="Trending"></ShoesList>
      <ShoesList title="Best seller"></ShoesList>
      <ShoesList title="On sale"></ShoesList>
    </Fragment>
  );
};

export default HomePage;
