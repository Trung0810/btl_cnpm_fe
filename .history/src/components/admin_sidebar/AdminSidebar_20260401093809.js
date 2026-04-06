import React from "react";
import "./AdminSidebar.css";

const AdminSidebar = () => {
  return (
    <div className="admin-sidebar">
      <h2 className="admin-sidebar-title">Admin</h2>
      <ul className="admin-sidebar-menu">
        <li>Products management</li>
        <li>Orders management</li>
        <li>Customers management</li>
        <li>Logout</li>
      </ul>
    </div>
  );
};

export default AdminSidebar;
