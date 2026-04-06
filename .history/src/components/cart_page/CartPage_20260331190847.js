import React, { Fragment } from "react";
import CartList from "../cart_list/CartList";
import Order from "../order/Order";

const CartPage = () => {
  return (
    <Fragment>
      <CartList></CartList>
      <Order></Order>
    </Fragment>
  );
};

export default CartPage;
