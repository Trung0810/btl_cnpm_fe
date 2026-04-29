import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { InforContext } from "../infor_provider/InforProvider";
import "./header.css";

const Header = () => {
  const { user } = useContext(InforContext);
  return (
    <div className="header">
      <div className="header-logo">
        <i className="fa fa-star"></i>
        {user && <span>Hello {user.username}!</span>}
        {!user && <span>Shoes Store 16</span>}
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
        <NavLink to={"/login"} className="header-auth-item">
          Login
        </NavLink>
        <NavLink to={"/register"} className="header-auth-item">
          Register
        </NavLink>
        {/* <div className="header-auth-item">Logout</div> */}
      </div>
    </div>
  );
};

export default Header;
