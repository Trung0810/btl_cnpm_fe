import React from "react";
import { Link } from "react-router-dom";
import "./AdminSidebar.css";

const AdminSidebar = () => {
  return (
    <div className="admin-sidebar">
      <h2 className="admin-sidebar-title">Admin</h2>
      <ul className="admin-sidebar-menu">
        <Link to={"/admin/product"} className="admin-sidebar-item">
          Products management
        </Link>
        <Link to={"/admin/product"} className="admin-sidebar-item">
          Orders management
        </Link>
        <Link to={"/admin/product"} className="admin-sidebar-item">
          Customers management
        </Link>
        <Link className="admin-sidebar-item">Logout</Link>
      </ul>
    </div>
  );
};

export default AdminSidebar;
