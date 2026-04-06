import React from "react";
import ShoesCard from "./ShoesCard";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

const ShoesList = () => {
  const data = [];
  return (
    <div className="shoes-list">
      <h3 className="shoes-list-title">Ban chay</h3>
      <Swiper grabCursor={true} spaceBetween={40} slidesPerView={"auto"}>
        {data &&
          data.map((item) => (
            <SwiperSlide key={item.id} style={{ width: "290px" }}>
              <ShoesCard id={item.id}></ShoesCard>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default ShoesList;
