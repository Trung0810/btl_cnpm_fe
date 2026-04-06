import React, { useEffect, useRef } from "react";
import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-logo">
        <i className="fa fa-star"></i>
        <span>Shoes Store 16</span>
      </div>
      <ul className="header-menu">
        <li className="header-menu-item">Home</li>
        <li className="header-menu-item">Men</li>
        <li className="header-menu-item">Women</li>
        <li className="header-menu-item">|</li>
        <li className="header-menu-item">Cart</li>
      </ul>
    </div>
  );
};

export default Header;
