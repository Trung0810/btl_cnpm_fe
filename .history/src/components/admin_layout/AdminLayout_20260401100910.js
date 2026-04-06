import React from "react";
import AdminSidebar from "../admin_sidebar/AdminSidebar";

const AdminLayout = () => {
  return (
    <div style={{ display: "flex" }}>
      <AdminSidebar></AdminSidebar>
    </div>
  );
};

export default AdminLayout;
