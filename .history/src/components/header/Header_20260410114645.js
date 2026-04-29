import React, { Fragment, useContext } from "react";
import { NavLink } from "react-router-dom";
import { InforContext } from "../infor_provider/InforProvider";
import "./header.css";

const Header = () => {
  const { customer, handleLogout } = useContext(InforContext);

  return (
    <div className="header">
      <div className="header-logo">
        <i className="fa fa-star"></i>
        {customer && <span>Hello {customer && customer.username}!</span>}
        {!customer && <span>Shoes Store 16</span>}
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
        {!user && (
          <Fragment>
            <NavLink to={"/login"} className="header-auth-item">
              Login
            </NavLink>
            <NavLink to={"/register"} className="header-auth-item">
              Register
            </NavLink>
          </Fragment>
        )}
        {user && (
          <NavLink to={"/"} className="header-auth-item" onClick={handleLogout}>
            Logout
          </NavLink>
        )}
      </ul>
    </div>
  );
};

export default Header;
