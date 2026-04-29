import React, { useEffect, useRef } from "react";
import "./header.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="header-logo">
        <i className="fa fa-star"></i>
        <span>Shoes Store 16</span>
      </div>
      <ul className="header-menu">
        <NavLink
          className="header-menu-item"
          style={({ isActive }) => ({ style: isActive ? "#20e3b4" : "" })}
        >
          Home
        </NavLink>
        <NavLink className="header-menu-item">Men</NavLink>
        <NavLink className="header-menu-item">Women</NavLink>
        <li className="header-menu-item">|</li>
        <li className="header-menu-item">Cart</li>
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
