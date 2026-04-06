import React from "react";
import ShoesCard from "./ShoesCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "./ShoesList.css"
import "swiper/css";

const ShoesList = () => {
  return (
    <div className="shoes-list">
      <h3 className="shoes-list-title">Ban chay</h3>
      <Swiper grabCursor={true} spaceBetween={40} slidesPerView={"auto"}>
            <SwiperSlide>
              <ShoesCard></ShoesCard>
            </SwiperSlide>
            <SwiperSlide>
              <ShoesCard></ShoesCard>
            </SwiperSlide>
            <SwiperSlide>
              <ShoesCard></ShoesCard>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default ShoesList;
