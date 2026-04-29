import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../infor_provider/CartProvider";
import "./Order.css";

const Order = () => {
  const [summary, setSummary] = useState({
    subtotal: 0,
    shipping: 0,
    discount: 0,
    tax: 0,
    total: 0,
  });
  const { cart } = useContext(CartContext);

  useEffect(() => {
    const cartTotal = (cart && cart.total) || 0;

    const subtotal = cartTotal;
    const shipping = 100000;
    const discount = (cartTotal % 100) * 15;
    const tax = (cartTotal % 100) * 5;
    const total = subtotal + shipping - discount + tax;

    setSummary({
      subtotal,
      shipping,
      discount,
      tax,
      total,
    });
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
