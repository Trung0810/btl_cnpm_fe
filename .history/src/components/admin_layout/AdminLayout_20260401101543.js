import React from "react";
import AdminSidebar from "../admin_sidebar/AdminSidebar";
import AdminProduct from "../admin_product/AdminProduct";

const AdminLayout = () => {
  return (
    <div style={{ display: "flex" }}>
      <AdminSidebar></AdminSidebar>
      <AdminProduct></AdminProduct>
    </div>
  );
};

export default AdminLayout;
