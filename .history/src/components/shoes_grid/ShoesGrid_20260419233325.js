import React, { useEffect, useState } from "react";
import ShoesCard from "../shoes_list/ShoesCard";
import axios from "axios";
import "./ShoesGrid.css";

const ShoesGrid = () => {
  const [data, setData] = useState(null);
  const [quantity, setQuantity] = useState(0);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(6);
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  const totalPage = quantity / limit;
  const arrayPage = [];
  for (let i = 1; i <= totalPage; i++) {
    arrayPage.push(i);
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const [shoesResponse, quantityResponse] = await Promise.all([
          axios.get(
            `http://localhost:8888/v1/api/shoes?type=men&page=${page}&limit=${limit}`,
          ),
          axios.get("http://localhost:8888/v1/api/quantities?type=men"),
        ]);
        console.log("🚀 ~ fetchData ~ quantityResponse:", quantityResponse);
        console.log("🚀 ~ fetchData ~ shoesResponse:", shoesResponse);

        setData(shoesResponse.data.data);
        setQuantity(quantityResponse.data.data);
      } catch (error) {
        console.log("🚀 ~ fetchData ~ error:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [page]);

  const handleShow = (id) => {
    setShow(true);
    setSelectedId(id);
    document.body.style.overflow = "hidden";
  };

  return (
    <div className="shoes-grid">
      <div className="shoes-bar">
        {arrayPage.map((page, index) => (
          <div
            key={index}
            className="shoes-bar-page"
            onClick={() => setPage(page)}
          >
            {page}
          </div>
        ))}
      </div>
      {loading && <div className="loading"></div>}
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
