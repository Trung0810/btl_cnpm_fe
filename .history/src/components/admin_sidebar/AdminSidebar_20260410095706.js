import React from "react";
import "./AdminSidebar.css";
import { Link } from "react-router-dom";

const AdminSidebar = () => {
  return (
    <div className="admin-sidebar">
      <h2 className="admin-sidebar-title">Admin</h2>
      <ul className="admin-sidebar-menu">
        <Link>Products management</Link>
        <Link>Orders management</Link>
        <Link>Customers management</Link>
        <Link>Logout</Link>
      </ul>
    </div>
  );
};

export default AdminSidebar;
