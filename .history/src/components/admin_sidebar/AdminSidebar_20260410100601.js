import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./AdminSidebar.css";
import { InforContext } from "../infor_provider/InforProvider";

const AdminSidebar = () => {
  const { handleLogout } = useContext(InforContext);

  return (
    <div className="admin-sidebar">
      <h2 className="admin-sidebar-title">Admin</h2>
      <ul className="admin-sidebar-menu">
        <Link to={"/admin/product"} className="admin-sidebar-item">
          Products management
        </Link>
        <Link to={"/admin/order"} className="admin-sidebar-item">
          Orders management
        </Link>
        <Link to={"/admin/customer"} className="admin-sidebar-item">
          Customers management
        </Link>
        <Link className="admin-sidebar-item" onClick={handleLogout}>
          Logout
        </Link>
      </ul>
    </div>
  );
};

export default AdminSidebar;
