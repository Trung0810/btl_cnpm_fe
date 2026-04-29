import React, { useContext, useEffect, useState } from "react";
import ShoesCard from "./ShoesCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import axios from "axios";
import AddToCartFormPopup from "../popup/AddToCartFormPopup";
import { InforContext } from "../infor_provider/InforProvider";
import { useNavigate } from "react-router-dom";
import "./ShoesList.css";
import NoficationPopup from "../popup/NoficationPopup";

const ShoesList = ({ title, criteria, sort }) => {
  const [data, setData] = useState(null);
  const [show, setShow] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  const { loading, setLoading, customer } = useContext(InforContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `http://localhost:8888/v1/api/shoes?sort=${sort}&${criteria}=true&limit=9`,
        );
        console.log("🚀 ~ fetchData ~ response:", response);

        setData(response.data.data);
      } catch (error) {
        console.log("🚀 ~ fetchData ~ error:", error);
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 500);
      }
    };
    fetchData();
  }, []);

  const handleShow = (id) => {
    if (!customer) {
      navigate("/login");
    } else {
      setShow(true);
      setSelectedId(id);
      document.body.style.overflow = "hidden";
    }
  };

  const handleCancel = (added = false) => {
    setShow(false);
    if (added) {
      setShowPopup(true);
    }
    document.body.style.overflow = "unset";
  };

  if (loading) {
    return (
      <div className="shoes-list" style={{ position: "relative" }}>
        <div className="loading"></div>
        <h3 className="shoes-list-title">{title}</h3>
      </div>
    );
  }

  return (
    <div className="shoes-list">
      <h3 className="shoes-list-title">{title}</h3>
      <Swiper grabCursor={true} spaceBetween={60} slidesPerView={"auto"}>
        {data &&
          data.length > 0 &&
          data.map((item) => (
            <SwiperSlide key={item._id} style={{ width: "350px" }}>
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
      {show && (
        <AddToCartFormPopup
          id={selectedId}
          handleCancel={handleCancel}
        ></AddToCartFormPopup>
      )}
      {showPopup && (
        <NoficationPopup
          status="success"
          title="Add product successfully"
          description=""
          handleShow={() => setShowPopup(false)}
        ></NoficationPopup>
      )}
    </div>
  );
};

export default ShoesList;
