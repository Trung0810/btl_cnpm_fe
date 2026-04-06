import React from "react";
import "./Banner.css";

const Banner = () => {
  // viet api de lay cac anh hien thi banner
  return (
    <div className="banner">
      <img
        src="https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="#"
        className="banner-background"
      />
      <div className="banner-overlay"></div>
      <div className="banner-area">
        <div className="banner-wrapper">
          <h1 className="banner-title">Nike air force 1</h1>
          <button className="banner-button">Xem chi tiet</button>
        </div>
        <div className="banner-wrapper">
          <img
            src="https://media.istockphoto.com/id/2222320816/photo/sport-running-shoes-isolated-on-white-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=IMmRA-LznqIx0hFZQqdP48q2aN_agcNeQhslwQIKj3M="
            alt="#"
            className="banner-image"
          />
        </div>
      </div>
      <i className="fa fa caret-left banner-icon banner-icon-left">dd</i>
      <i className="fa fa caret-right banner-icon banner-icon-right">dd</i>
    </div>
  );
};

export default Banner;
