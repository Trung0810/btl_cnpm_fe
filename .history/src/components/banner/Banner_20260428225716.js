import React from "react";
import "./Banner.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Banner = () => {
  return (
    <div className="banner">
      <img
        src="https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="#"
        className="banner-background"
      />
      <i className="fa fa-caret-left banner-icon banner-icon-left"></i>
      <i className="fa fa-caret-right banner-icon banner-icon-right"></i>
      <Swiper>
        <SwiperSlide>
          <div className="banner-area">
            <div className="banner-wrapper">
              <h1 className="banner-title">New Collection</h1>
              <h2 className="banner-name-item">Shoes Name</h2>
              <div className="banner-category">
                <span>Youthful</span>
                <span>Fashionable</span>
                <span>Modern</span>
              </div>
              <button className="banner-button">Detail</button>
            </div>
            <div className="banner-wrapper">
              <img
                src="https://media.istockphoto.com/id/2222320816/photo/sport-running-shoes-isolated-on-white-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=IMmRA-LznqIx0hFZQqdP48q2aN_agcNeQhslwQIKj3M="
                alt="#"
                className="banner-image"
              />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
