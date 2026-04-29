import React, { useContext, useMemo } from "react";
import { CartContext } from "../infor_provider/CartProvider";
import "./Order.css";
import axios from "axios";

const Order = () => {
  const { cart } = useContext(CartContext);

  const token = localStorage.getItem("accessToken");

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

  const handleOrder = async () => {
    const data = cart;
    try {
      const [orderResponse, clearCartResponse] = await Promise.all([
        axios.post("http://localhost:8888/v1/api/orders", data, {
          headers: { Authorization: `Bearer ${token}` },
        }),
        axios.delete("http://localhost:8888/v1/api/carts/clear"),
      ]);
      console.log("🚀 ~ handleOrder ~ response:", response);
    } catch (error) {
      console.log("🚀 ~ handleOrder ~ error:", error.response.data);
    }
  };

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
      <button
        style={{ width: "100%", backgroundColor: "#20e3b4", color: "#fff" }}
        onClick={() => handleOrder()}
      >
        Order
      </button>
    </div>
  );
};

export default Order;
