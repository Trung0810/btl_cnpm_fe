import React from "react";
import ShoesCard from "./ShoesCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "./ShoesList.css";
import "swiper/css";

const ShoesList = ({ title }) => {
  return (
    <div className="shoes-list">
      <h3 className="shoes-list-title">{title}</h3>
      <Swiper grabCursor={true} spaceBetween={60} slidesPerView={"auto"}>
        <SwiperSlide style={{ width: "350px" }}>
          <ShoesCard></ShoesCard>
        </SwiperSlide>
        <SwiperSlide style={{ width: "350px" }}>
          <ShoesCard></ShoesCard>
        </SwiperSlide>
        <SwiperSlide style={{ width: "350px" }}>
          <ShoesCard></ShoesCard>
        </SwiperSlide>
        <SwiperSlide style={{ width: "350px" }}>
          <ShoesCard></ShoesCard>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ShoesList;
