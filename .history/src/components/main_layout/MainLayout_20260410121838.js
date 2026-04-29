import React, { useContext } from "react";
import { Fragment } from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import { Navigate, Outlet } from "react-router-dom";
import { InforContext } from "../infor_provider/InforProvider";

const MainLayout = () => {
  const { admin, customer } = useContext(InforContext);

  if (admin) {
    return <Navigate to="/admin" replace />;
  }
  if(customer) {

    return (
      <Fragment>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </Fragment>
}
  );
};

export default MainLayout;
