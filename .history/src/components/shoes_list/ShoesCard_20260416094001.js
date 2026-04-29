import React from "react";
import "./ShoesCard.css";

const ShoesCard = ({ image, name, price, rate }) => {
  return (
    <div className="shoes-card">
      <div className="shoes-card-wrapper">
        <img
          src={`/shoes_image/${item.type}/${item.category}/${item.image}`}
          alt="#"
          className="shoes-card-image"
        />
      </div>
      <h3 className="shoes-card-name">{name}</h3>
      <div className="shoes-card-box">
        <span>Cost: 500000d</span>
        <span>
          4<i className="fa fa-star"></i>
        </span>
      </div>
      <div className="shoes-card-option">
        <button className="shoes-card-button">Detail</button>
        <button className="shoes-card-button">Add to cart</button>
      </div>
    </div>
  );
};

export default ShoesCard;
