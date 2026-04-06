import React from "react";
import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="logo"></div>
      <ul className="menu">
        <li className="menu-item">Trang chu</li>
        <li className="menu-item">Giay nam</li>
        <li className="menu-item">Giay nu</li>
      </ul>
    </div>
  );
};

export default Header;
