import React from "react";
import "./CartItem.css";

const CartItem = ({ image, name, color, size, quantity, price }) => {
  return (
    <div className="cart-item">
      <div className="cart-item-wrapper">
        <img src={image} alt="#" className="cart-item-image" />
      </div>
      <div className="cart-item-infor">
        <p>Ten Giay</p>
        <p>Mau Sac</p>
        <p>Kich co</p>
      </div>
      <div className="cart-item-quantity">
        <i className="fa fa-plus"></i>
        <span>1</span>
        <i className="fa fa-minus"></i>
      </div>
      <p className="cart-item-cost">500000d</p>
      <div className="cart-item-delete">
        <i className="fa fa-times"></i>
      </div>
    </div>
  );
};

export default CartItem;
