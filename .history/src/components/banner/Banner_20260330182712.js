import React from "react";
import "./Banner.css";

const Banner = () => {
  // viet api de lay cac anh hien thi banner
  return (
    <div className="banner">
      <img
        src="https://images.unsplash.com/photo-1533628635777-112b2239b1c7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="#"
        className="banner-background"
      />
      <div className="banner-area">
        <img
          src="https://images.unsplash.com/photo-1465453869711-7e174808ace9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNuZWFrZXJzfGVufDB8fDB8fHww"
          alt="#"
          className="banner-image"
        />
        <div className="banner-overlay"></div>
        <h1 className="banner-title">Nike air force 1</h1>
        <button className="banner-button">Xem chi tiet</button>
      </div>
    </div>
  );
};

export default Banner;
