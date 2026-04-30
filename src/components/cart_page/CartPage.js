import React, { Fragment, useState } from "react";
import CartLayout from "../cart_layout/CartLayout";
import Back from "../back/Back";
import OrderList from "../order_list/OrderList";

const CartPage = () => {
  const [show, setShow] = useState(false);

  return (
    <Fragment>
      <Back></Back>
      <CartLayout></CartLayout>
      <button
        style={{
          backgroundColor: "#20e3b4",
          color: "#fff",
          fontWeight: "500",
          width: "250px",
          margin: " -80px 0 0 80px",
        }}
        onClick={() => setShow((prev) => !prev)}
      >
        {!show ? "Show Your Orders" : "Hidden"}
      </button>
      {show && <OrderList></OrderList>}
    </Fragment>
  );
};

export default CartPage;
