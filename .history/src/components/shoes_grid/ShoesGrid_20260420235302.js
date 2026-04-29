import React, { useContext, useEffect, useState } from "react";
import ShoesCard from "../shoes_list/ShoesCard";
import axios from "axios";
import AddToCartFormPopup from "../popup/AddToCartFormPopup";
import { InforContext } from "../infor_provider/InforProvider";
import { useLocation } from "react-router-dom";
import "./ShoesGrid.css";

const ShoesGrid = () => {
  const { pathname } = useLocation();
  const type = pathname.slice(1);

  const [data, setData] = useState(null);
  const [quantity, setQuantity] = useState(0);
  const [limit, setLimit] = useState(6);
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  const { path, setPath, currentPage, setCurrentPage, filter } =
    useContext(InforContext);

  // if (pathname !== path) {
  //   setPath(pathname);
  //   setCurrentPage(1);
  // }

  const totalPage =
    quantity % limit === 0 ? quantity / limit : quantity / limit + 1;
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
            `http://localhost:8888/v1/api/shoes?keyword=${filter.keyword}&brand=${filter.brand}&type=${type}&category=${filter.category}&price=${filter.price}&rate=${filter.rate}${filter.sort ? `&sort=${filter.sort}` : ""}&page=${currentPage}&limit=${limit}`,
          ),
          axios.get(
            `http://localhost:8888/v1/api/quantities?brand=${filter.brand}&type=${type}&category=${filter.category}`,
          ),
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
  }, [currentPage, filter]);

  const handleShow = (id) => {
    setShow(true);
    setSelectedId(id);
    document.body.style.overflow = "hidden";
  };

  const handleAddToCart = (id) => {};

  const handleCancel = () => {
    setShow(false);
    document.body.style.overflow = "unset";
  };

  return (
    <div className="shoes-grid">
      <div className="shoes-bar">
        {arrayPage.map((page, index) => (
          <div key={index} className="shoes-bar-page">
            <input
              type="radio"
              name="page"
              id={page}
              checked={page === currentPage}
              onChange={() => {}}
            />
            <label htmlFor={page} onClick={() => setCurrentPage(page)}>
              {page}
            </label>
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
      {show && (
        <AddToCartFormPopup
          id={selectedId}
          handleCancel={handleCancel}
          handleAddToCart={handleAddToCart}
        ></AddToCartFormPopup>
      )}
    </div>
  );
};

export default ShoesGrid;
