import React, { useContext } from "react";
import { Fragment } from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import { Outlet } from "react-router-dom";
import { InforContext } from "../infor_provider/InforProvider";

const MainLayout = () => {
  const { admin } = useContext(InforContext);
  return (
    <Fragment>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </Fragment>
  );
};

export default MainLayout;
