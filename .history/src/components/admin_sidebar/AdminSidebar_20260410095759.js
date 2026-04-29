import React from "react";
import "./AdminSidebar.css";
import { Link } from "react-router-dom";

const AdminSidebar = () => {
  return (
    <div className="admin-sidebar">
      <h2 className="admin-sidebar-title">Admin</h2>
      <ul className="admin-sidebar-menu">
        <Link className="admin-sidebar-menu">Products management</Link>
        <Link className="admin-sidebar-menu">Orders management</Link>
        <Link className="admin-sidebar-menu">Customers management</Link>
        <Link className="admin-sidebar-menu">Logout</Link>
      </ul>
    </div>
  );
};

export default AdminSidebar;
