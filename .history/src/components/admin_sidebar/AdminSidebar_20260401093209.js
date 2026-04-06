import React from "react";
import "./AdminSidebar.css";

const AdminSidebar = () => {
  return (
    <div className="admin-sidebar">
      <h2 className="admin-sidebar-title">Admin</h2>
      <ul className="admin-sidebar-menu">
        <li className="admin-sidebar-item">Products management</li>
        <li className="admin-sidebar-item">Orders management</li>
        <li className="admin-sidebar-item">Customers management</li>
        <li className="admin-sidebar-item">Logout</li>
      </ul>
    </div>
  );
};

export default AdminSidebar;
