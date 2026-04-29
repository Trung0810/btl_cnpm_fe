import React, { Fragment } from "react";
import CartLayout from "../cart_layout/CartLayout";
import Back from "../back/Back";

const CartPage = () => {
  return (
    <Fragment>
      <Back></Back>
      <CartLayout></CartLayout>
    </Fragment>
  );
};

export default CartPage;
