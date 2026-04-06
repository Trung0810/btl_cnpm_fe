import React, { useEffect, useRef } from "react";
import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-logo">
        <i className="fa fa-star"></i>
        <span>Shoes Store</span>
      </div>
      <ul className="header-menu">
        <li className="header-menu-item">Home</li>
        <li className="header-menu-item">Giay nam</li>
        <li className="header-menu-item">Giay nu</li>
      </ul>
    </div>
  );
};

export default Header;
