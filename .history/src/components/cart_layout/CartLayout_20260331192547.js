import React from "react";
import CartList from "../cart_list/CartList";
import Order from "../order/Order";

const CartLayout = () => {
  return (
    <div className="cart-layout">
      <CartList></CartList>
      <Order></Order>
    </div>
  );
};

export default CartLayout;
