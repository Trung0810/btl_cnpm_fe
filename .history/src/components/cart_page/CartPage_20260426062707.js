import React, { Fragment } from "react";
import CartLayout from "../cart_layout/CartLayout";
import Back from "../back/Back";
import OrderList from "../order_list/OrderList";

const CartPage = () => {
  return (
    <Fragment>
      <Back></Back>
      <CartLayout></CartLayout>
      <OrderList></OrderList>
    </Fragment>
  );
};

export default CartPage;
