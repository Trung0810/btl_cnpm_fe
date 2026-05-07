import React, { Fragment, useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { InforContext } from "../infor_provider/InforProvider";
import "./AdminSidebar.css";
import ChoosenPopup from "../popup/ChoosenPopup";

const AdminSidebar = () => {
  const [showPopup, setShowPopup] = useState(false);
  const { admin, handleLogout } = useContext(InforContext);

  const handleShow = () => {
    setShowPopup(true);
    document.body.style.overflow = "hidden";
  };

  const handleAction = () => {
    handleLogout();
    setShowPopup(false);
  };

  const handleCancel = () => {
    setShowPopup(false);
    document.body.style.overflow = "unset";
  };

  return (
    <Fragment>
      <div className="admin-sidebar">
        <h2 className="admin-sidebar-title">Hello {admin && admin.username}</h2>
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
          <li className="admin-sidebar-item" onClick={() => handleShow()}>
            Logout
          </li>
        </ul>
      </div>
      <div style={{ position: "relative" }}>
        {showPopup && (
          <ChoosenPopup
            title={"Are you sure you want to log out?"}
            description={""}
            handleAction={handleAction}
            handleCancel={handleCancel}
            action={"Logout"}
          ></ChoosenPopup>
        )}
      </div>
    </Fragment>
  );
};

export default AdminSidebar;
