import React, { Fragment } from "react";
import AdminSidebar from "../admin_sidebar/AdminSidebar";
import AdminProducts from "../admin_products/AdminProducts";

const AdminPage = () => {
  return (
    <Fragment>
      <AdminSidebar></AdminSidebar>
      <AdminProducts></AdminProducts>
    </Fragment>
  );
};

export default AdminPage;
