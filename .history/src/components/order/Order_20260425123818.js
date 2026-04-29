import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../infor_provider/CartProvider";
import "./Order.css";

const Order = () => {
  const [summary, setSummary] = useState(null);
  const { cart } = useContext(CartContext);

  useEffect(() => {
    const cartTotal = (cart && cart.total) || 0;

    const subtotal = cartTotal;
    const shipping = 100000;
    const discount = (cartTotal % 100) * 15 || 0;
    const tax = (cartTotal % 100) * 5 || 0;

    const total = subtotal + shipping - discount + tax;

    setSummary({
      subtotal,
      shipping,
      discount,
      tax,
      total,
    });
  }, [cart]);

  return (
    <div className="order">
      <h2 className="order-title">Summary</h2>
      {cart && cart.items?.lemgth > 0 && (
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
      )}
      <button className="order-button">Order</button>
    </div>
  );
};

export default Order;
