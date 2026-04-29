import React from "react";
import { NavLink } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-logo">
        <i className="fa fa-star"></i>
        <span>Shoes Store 16</span>
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
      <div className="header-auth">
        <div className="header-auth-item">Login</div>
        <div className="header-auth-item">Register</div>
        {/* <div className="header-auth-item">Logout</div> */}
      </div>
    </div>
  );
};

export default Header;
