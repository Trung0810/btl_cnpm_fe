import React, { useContext, useMemo } from "react";
import { CartContext } from "../infor_provider/CartProvider";
import "./Order.css";

const Order = () => {
  const { cart } = useContext(CartContext);

  const summary = useMemo(() => {
    if (!cart || !cart.total) return null;

    const subtotal = cart.total;
    const shipping = 100000;
    const discount = subtotal * 0.15;
    const tax = subtotal * 0.05;
    const total = subtotal + shipping - discount + tax;

    return { subtotal, shipping, discount, tax, total };
  }, [cart]);

  if (!cart || !cart.items || cart.items.length === 0 || !summary) {
    return <div></div>;
  }

  return (
    <div className="order">
      <h2 className="order-title">Summary</h2>
      <div className="order-infor">
        <div>
          <span>Subtotal:</span>
          <span>{summary.subtotal}</span>
        </div>
        <div>
          <span>Shipping cost:</span>
          <span>{summary.shipping}</span>
        </div>
        <div>
          <span>Discount (15%):</span>
          <span>{summary.discount}</span>
        </div>
        <div>
          <span>Tax (5%):</span>
          <span>{summary.tax}</span>
        </div>
        <div>
          <span>Total:</span>
          <span>{summary.total}</span>
        </div>
      </div>
      <button className="order-button">Order</button>
    </div>
  );
};

export default Order;
