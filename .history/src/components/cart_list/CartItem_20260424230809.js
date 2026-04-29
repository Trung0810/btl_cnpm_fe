import React from "react";
import "./CartItem.css";
import standardization from "../helper_function/Standardization";

const CartItem = ({
  image,
  name,
  type,
  category,
  color,
  size,
  quantity,
  price,
}) => {
  return (
    <div className="cart-item">
      <div className="cart-item-wrapper">
        <img
          src={`/shoes_image/${type}/${category}/${image}`}
          alt="#"
          className="cart-item-image"
        />
      </div>
      <div className="cart-item-infor">
        <p>{standardization(name)}</p>
        <p>Color: {standardization(color)}</p>
        <p>Size: {size}</p>
      </div>
      <div className="cart-item-quantity">
        <i className="fa fa-plus"></i>
        <span>{quantity}</span>
        <i className="fa fa-minus"></i>
      </div>
      <p className="cart-item-cost">{price}</p>
      <div className="cart-item-delete">
        <i className="fa fa-times"></i>
      </div>
    </div>
  );
};

export default CartItem;
