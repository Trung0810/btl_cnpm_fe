import React from "react";
import CartList from "../cart_list/CartList";
import Order from "../order/Order";

const CartPage = () => {
  return (
    <div style={{ display: "flex" }}>
      <CartList></CartList>
      <Order></Order>
    </div>
  );
};

export default CartPage;
