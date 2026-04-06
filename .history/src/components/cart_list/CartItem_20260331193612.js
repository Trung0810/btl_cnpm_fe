import React from "react";
import "./CartItem.css";

const CartItem = () => {
  return (
    <div className="cart-item">
      <div className="cart-item-wrapper">
        <img
          src="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="#"
          className="cart-item-image"
        />
      </div>
      <div className="cart-item-infor">
        <p>Ten Giay fffffffffffffffffffffffff</p>
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
