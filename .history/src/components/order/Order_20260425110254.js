import React, { useState } from "react";
import "./Order.css";

const Order = () => {
  const [summary, setSummary] = useState({});

  return (
    <div className="order">
      <h2 className="order-title">Summary</h2>
      <div className="order-infor">
        <div>
          <span>Subtotal:</span>
          <span>1500000d</span>
        </div>
        <div>
          <span>Shipping cost:</span>
          <span>100000d</span>
        </div>
        <div>
          <span>Discount (15%):</span>
          <span>225000d</span>
        </div>
        <div>
          <span>Tax (5%):</span>
          <span>75000d</span>
        </div>
        <div>
          <span>Total:</span>
          <span>1450000d</span>
        </div>
      </div>
      <button className="order-button">Order</button>
    </div>
  );
};

export default Order;
