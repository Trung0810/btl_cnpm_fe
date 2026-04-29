import React, { useContext, useEffect, useState } from "react";
import "./Order.css";
import { CartContext } from "../infor_provider/CartProvider";

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
    const newSummary = {
      subtotal: cart.total || 0,
      shipping: 100000,
      discount: (cart.total % 100) * 15 || 0,
      tax: (cart.total % 100) * 5 || 0,
      total: this.subtotal + this.shipping - this.discount + this.tax || 0,
    };
    setSummary(newSummary);
  }, [cart]);

  return (
    <div className="order">
      <h2 className="order-title">Summary</h2>
      <div className="order-infor">
        <div>
          <span>Subtotal:</span>
          <span>{summary && summary.subtotal}</span>
        </div>
        <div>
          <span>Shipping cost:</span>
          <span>{summary && summary.shipping}</span>
        </div>
        <div>
          <span>Discount (15%):</span>
          <span>{summary && summary.discount}</span>
        </div>
        <div>
          <span>Tax (5%):</span>
          <span>{summary && summary.tax}</span>
        </div>
        <div>
          <span>Total:</span>
          <span>{summary && summary.total}</span>
        </div>
      </div>
      <button className="order-button">Order</button>
    </div>
  );
};

export default Order;
