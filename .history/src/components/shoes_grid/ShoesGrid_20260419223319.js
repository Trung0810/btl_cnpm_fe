import React, { useEffect, useState } from "react";
import ShoesCard from "../shoes_list/ShoesCard";
import "./ShoesGrid.css";
import axios from "axios";

const ShoesGrid = () => {
  const [data, setData] = useState(null);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `http://localhost:8888/v1/api/shoes?type=men&page=${page}&limit=6`,
        );
        console.log("🚀 ~ fetchData ~ response:", response);

        setData(response.data.data);
      } catch (error) {
        console.log("🚀 ~ fetchData ~ error:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleShow = (id) => {
    setShow(true);
    setSelectedId(id);
    document.body.style.overflow = "hidden";
  };

  return (
    <div className="shoes-grid">
      <div className="shoes-bar"></div>
      <div className="shoes-grid-layout">
        {data &&
          data.length > 0 &&
          data.map((item) => (
            <ShoesCard
              key={item._id}
              id={item._id}
              name={item.name}
              image={item.image}
              type={item.type}
              category={item.category}
              price={item.price}
              rate={item.rate}
              handleShow={handleShow}
            ></ShoesCard>
          ))}
      </div>
      <div className="shoes-bar"></div>
    </div>
  );
};

export default ShoesGrid;
