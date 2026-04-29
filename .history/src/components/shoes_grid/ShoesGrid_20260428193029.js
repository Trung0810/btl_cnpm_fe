import React, { useContext, useEffect, useState } from "react";
import ShoesCard from "../shoes_list/ShoesCard";
import axios from "axios";
import AddToCartFormPopup from "../popup/AddToCartFormPopup";
import { InforContext } from "../infor_provider/InforProvider";
import { useLocation, useNavigate } from "react-router-dom";
import { ShoesContext } from "../infor_provider/ShoesProvider";
import "./ShoesGrid.css";
import NoficationPopup from "../popup/NoficationPopup";

const ShoesGrid = () => {
  const [data, setData] = useState(null);
  const [quantity, setQuantity] = useState(0);
  const [limit, setLimit] = useState(6);
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  const { customer } = useContext(InforContext);
  const { path, setPath, currentPage, setCurrentPage, filter, setFilter } =
    useContext(ShoesContext);

  const { pathname } = useLocation();
  const shoesType = pathname.slice(1);

  const totalPage =
    quantity % limit === 0 ? quantity / limit : quantity / limit + 1;
  const arrayPage = [];
  for (let i = 1; i <= totalPage; i++) {
    arrayPage.push(i);
  }

  useEffect(() => {
    if (pathname !== path) {
      setPath(pathname);
      setCurrentPage(1);
      setFilter((prev) => ({
        name: "",
        brand: "all",
        type: shoesType,
        category: "all",
        price: false,
        rate: false,
        sort: null,
      }));
    }
    const fetchData = async () => {
      try {
        setLoading(true);
        const [shoesResponse, quantityResponse] = await Promise.all([
          axios.get(
            `http://localhost:8888/v1/api/shoes?${filter.name ? `name=${filter.name}&` : ""}brand=${filter.brand}&type=${filter.type}&category=${filter.category}&price=${filter.price}&rate=${filter.rate}${filter.sort ? `&sort=${filter.sort}` : ""}&page=${currentPage}&limit=${limit}`,
          ),
          axios.get(
            `http://localhost:8888/v1/api/quantities?name=${filter.name}&brand=${filter.brand}&type=${filter.type}&category=${filter.category}`,
          ),
        ]);
        console.log("🚀 ~ fetchData ~ quantityResponse:", quantityResponse);
        console.log("🚀 ~ fetchData ~ shoesResponse:", shoesResponse);

        setData(shoesResponse.data.data);
        setQuantity(quantityResponse.data.data);
      } catch (error) {
        console.log("🚀 ~ fetchData ~ error:", error);
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 500);
      }
    };
    fetchData();
  }, [currentPage, filter, path]);

  const handleShow = (id) => {
    if (!customer) {
      navigate("/login");
    } else {
      setSelectedId(id);
      setShow(true);
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
      <div className="shoes-grid" style={{ position: "relative" }}>
        <div className="shoes-bar"></div>
        <div className="loading"></div>
        <div className="shoes-bar"></div>
      </div>
    );
  }

  return (
    <div className="shoes-grid">
      <div className="shoes-bar">
        {arrayPage?.length > 0 ? (
          arrayPage.map((page, index) => (
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
          ))
        ) : (
          <div
            style={{ fontSize: "20px", fontWeight: "bold", color: "#ff0019" }}
          >
            Not Found product!
          </div>
        )}
      </div>
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

export default ShoesGrid;
