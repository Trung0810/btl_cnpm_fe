import React from "react";
import CartList from "../cart_list/CartList";
import Order from "../order/Order";
import "./CartLayout.css";

const CartLayout = () => {
  return (
    <div className="cart-layout">
      <h2 className="cart-title">Cart List</h2>
      <CartList></CartList>
      <Order></Order>
    </div>
  );
};

export default CartLayout;
