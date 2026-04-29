import React from "react";
import "./ShoesCard.css";
import { useNavigate } from "react-router-dom";

const ShoesCard = ({ id, name, image, type, category, price, rate }) => {
  const navigate = useNavigate();

  return (
    <div className="shoes-card">
      <div className="shoes-card-wrapper">
        <img
          src={`/shoes_image/${type}/${category}/${image}`}
          alt="#"
          className="shoes-card-image"
        />
      </div>
      <h3 className="shoes-card-name">{name}</h3>
      <div className="shoes-card-box">
        <span>Price: {price}d</span>
        <span>
          {rate}
          <i className="fa fa-star"></i>
        </span>
      </div>
      <div className="shoes-card-option">
        <button
          className="shoes-card-button"
          onClick={() => navigate(`/detail/${id}`)}
        >
          Detail
        </button>
        <button className="shoes-card-button">Add to cart</button>
      </div>
    </div>
  );
};

export default ShoesCard;
