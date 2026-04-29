import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { InforContext } from "../infor_provider/InforProvider";
import "./AdminSidebar.css";

const AdminSidebar = () => {
  const { user, handleLogout } = useContext(InforContext);

  return (
    <div className="admin-sidebar">
      <h2 className="admin-sidebar-title">Hello {user.username}!</h2>
      <ul className="admin-sidebar-menu">
        <NavLink to={"/admin/product"} className="admin-sidebar-item">
          Products management
        </NavLink>
        <NavLink to={"/admin/order"} className="admin-sidebar-item">
          Orders management
        </NavLink>
        <NavLink to={"/admin/customer"} className="admin-sidebar-item">
          Customers management
        </NavLink>
        <NavLink className="admin-sidebar-item" onClick={handleLogout}>
          Logout
        </NavLink>
      </ul>
    </div>
  );
};

export default AdminSidebar;
