import React from "react";
import AdminSidebar from "../admin_sidebar/AdminSidebar";
import AdminProducts from "../admin_products/AdminProducts";

const AdminPage = () => {
  return (
    <div>
      <AdminSidebar></AdminSidebar>
      <AdminProducts></AdminProducts>
    </div>
  );
};

export default AdminPage;
