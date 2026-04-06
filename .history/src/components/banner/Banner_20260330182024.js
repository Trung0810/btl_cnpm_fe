import React from "react";
import "./Banner.css";

const Banner = () => {
  // viet api de lay cac anh hien thi banner
  return (
    <div className="banner">
      <div className="banner-overlay"></div>
      <img
        src="https://images.unsplash.com/photo-1579338559194-a162d19bf842?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNuZWFrZXJzfGVufDB8fDB8fHww"
        alt="#"
        className="banner-image"
      />
      <h1 className="banner-title">Nike air force 1</h1>
    </div>
  );
};

export default Banner;
