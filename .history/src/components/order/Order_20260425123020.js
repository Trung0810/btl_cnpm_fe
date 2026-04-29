import React, { useContext, useEffect, useState } from "react";
import "./Order.css";
import { CartContext } from "../infor_provider/CartProvider";
import { sum } from "lodash";

const Order = () => {
  const [summary, setSummary] = useState(null);
  const { cart } = useContext(CartContext);

  useEffect(() => {
    const cartTotal = (cart && cart.total) || 0;
    const newSummary = {
      subtotal: cartTotal || 0,
      shipping: 100000,
      discount: (cartTotal % 100) * 15 || 0,
      tax: (cartTotal % 100) * 5 || 0,
      total: this.subtotal + this.shipping - this.discount + this.tax,
    };
    setSummary(newSummary);
  }, [cart]);

  return (
    <div className="order">
      {summary && (
        <div>
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
      )}
    </div>
  );
};

export default Order;
