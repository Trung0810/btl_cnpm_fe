import React, { Fragment, useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { InforContext } from "../infor_provider/InforProvider";
import ChoosenPopup from "../popup/ChoosenPopup";
import "./header.css";

const Header = () => {
  const [showPopup, setShowPopup] = useState(false);
  const { customer, handleLogout } = useContext(InforContext);

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
    <div>
      <div className="header">
        <div className="header-logo">
          <i className="fa fa-star"></i>
          <span>
            {customer ? `Hello ${customer.username}` : "Shoes Store 16"}
          </span>
        </div>
        <ul className="header-menu">
          <NavLink
            to={"/"}
            className="header-menu-item"
            style={({ isActive }) => ({ color: isActive ? "#20e3b4" : "" })}
          >
            Home
          </NavLink>
          <NavLink
            to={"/men"}
            className="header-menu-item"
            style={({ isActive }) => ({ color: isActive ? "#20e3b4" : "" })}
          >
            Men
          </NavLink>
          <NavLink
            to={"/women"}
            className="header-menu-item"
            style={({ isActive }) => ({ color: isActive ? "#20e3b4" : "" })}
          >
            Women
          </NavLink>
          <li className="header-menu-item">|</li>
          <NavLink
            to={"/cart"}
            className="header-menu-item"
            style={({ isActive }) => ({ color: isActive ? "#20e3b4" : "" })}
          >
            Cart
          </NavLink>
        </ul>
        <ul className="header-auth">
          {!customer && (
            <Fragment>
              <NavLink to={"/login"} className="header-auth-item">
                Login
              </NavLink>
              <NavLink to={"/register"} className="header-auth-item">
                Register
              </NavLink>
            </Fragment>
          )}
          {customer && (
            <li className="header-auth-item" onClick={() => handleShow()}>
              Logout
            </li>
          )}
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
    </div>
  );
};

export default Header;
