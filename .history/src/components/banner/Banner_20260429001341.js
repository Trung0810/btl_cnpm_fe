import React, { useEffect, useState } from "react";
import "./Banner.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import axios from "axios";

const Banner = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          "http://localhost:8888/v1/api/shoes/new-collection",
        );
        console.log("🚀 ~ fetchData ~ response:", response);

        setData(response.data.data);
      } catch (error) {
        console.log("🚀 ~ fetchData ~ error:", error.response.data);
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 500);
      }
    };
    fetchData();
  }, []);

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
        {data &&
          data.length > 0 &&
          data.map((item) => (
            <SwiperSlide key={item._id}>
              <ShoesCard
                id={item._id}
                name={item.name}
                image={item.image}
                type={item.type}
                category={item.category}
                price={item.price}
                rate={item.rate}
                handleShow={handleShow}
              ></ShoesCard>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default Banner;
