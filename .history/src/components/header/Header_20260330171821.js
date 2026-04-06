import React from "react";
import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-logo">
        <i className="fa fa-star"></i>
        <span>NHOM 16</span>
      </div>
      <ul className="header-menu">
        <li className="header-menu-item">Trang chu</li>
        <li className="header-menu-item">Giay nam</li>
        <li className="header-menu-item">Giay nu</li>
      </ul>
    </div>
  );
};

export default Header;
