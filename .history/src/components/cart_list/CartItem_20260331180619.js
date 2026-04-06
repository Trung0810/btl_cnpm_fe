import React from "react";

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
        <p className="cart-item-name">Ten Giay</p>
        <p className="cart-item-color">Mau Sac</p>
      </div>
      <input
        type="number"
        name="quantity"
        id="quantity"
        className="cart-item-quantity"
      />
      <p className="cart-item-cost">500000d</p>
      <div className="cart-item-delete">
        <i className="fa fa-delete"></i>
      </div>
    </div>
  );
};

export default CartItem;
