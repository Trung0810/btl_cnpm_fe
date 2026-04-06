import React from "react";
import "./Banner.css";

const Banner = () => {
  // viet api de lay cac anh hien thi banner
  return (
    <div className="banner">
      <div className="banner-area">
        <img
          src="https://media.istockphoto.com/id/2222320816/photo/sport-running-shoes-isolated-on-white-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=IMmRA-LznqIx0hFZQqdP48q2aN_agcNeQhslwQIKj3M="
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
