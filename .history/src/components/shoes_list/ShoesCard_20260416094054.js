import React from "react";
import "./ShoesCard.css";

const ShoesCard = ({ name, image, type, category, price, rate }) => {
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
        <button className="shoes-card-button">Detail</button>
        <button className="shoes-card-button">Add to cart</button>
      </div>
    </div>
  );
};

export default ShoesCard;
