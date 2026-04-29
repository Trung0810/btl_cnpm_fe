import React from "react";
import "./CartItem.css";
import standardization from "../helper_function/Standardization";

const CartItem = ({
  shoesId,
  name,
  image,
  brand,
  type,
  category,
  color,
  size,
  quantity,
  price,
  handleSetQuantity,
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
        <i
          className="fa fa-plus"
          onClick={() => handleSetQuantity("increment")}
        ></i>
        <span>{quantity}</span>
        <i
          className="fa fa-minus"
          onClick={() => handleSetQuantity("decrement")}
        ></i>
      </div>
      <p className="cart-item-cost">{price}</p>
      <div className="cart-item-delete">
        <i className="fa fa-times"></i>
      </div>
    </div>
  );
};

export default CartItem;
