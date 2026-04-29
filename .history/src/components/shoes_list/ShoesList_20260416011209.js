import React, { useEffect, useState } from "react";
import ShoesCard from "./ShoesCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "./ShoesList.css";
import "swiper/css";
import axios from "axios";

const ShoesList = ({ title }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8888/v1/api/shoes?");
      } catch (error) {}
    };
    fetchData();
  }, []);

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
