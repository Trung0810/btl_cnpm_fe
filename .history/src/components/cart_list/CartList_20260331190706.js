import React from "react";
import CartItem from "./CartItem";
import "./CartList.css";

const CartList = () => {
  return (
    <div className="cart-list">
      <h2 className="cart-list-title">Cart List</h2>
      <div className="cart-list-header">
        <span>Item</span>
        <span>Quantity</span>
        <span>Unit price</span>
      </div>
      <ul className="cart-list-item">
        <CartItem></CartItem>
        <CartItem></CartItem>
        <CartItem></CartItem>
      </ul>
    </div>
  );
};

export default CartList;
