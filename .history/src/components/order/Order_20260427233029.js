import React, { useContext, useMemo, useState } from "react";
import { CartContext } from "../infor_provider/CartProvider";
import axios from "axios";
import "./Order.css";
import NoficationPopup from "../popup/NoficationPopup";

const Order = () => {
  const [loading, setLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const { cart, setCart } = useContext(CartContext);

  const token = localStorage.getItem("accessToken");

  const summary = useMemo(() => {
    if (!cart || !cart.items || !cart.items.length > 0 || !cart.total)
      return null;

    const subtotal = cart.total;
    const shipping = 100000;
    const discount = subtotal * 0.15;
    const tax = subtotal * 0.05;
    const total = subtotal + shipping - discount + tax;

    return { subtotal, shipping, discount, tax, total };
  }, [cart]);

  if (!summary) {
    return <div></div>;
  }

  const handleOrder = async () => {
    const data = cart;

    try {
      setLoading(true);
      const [orderResponse, clearCartResponse] = await Promise.all([
        axios.post("http://localhost:8888/v1/api/orders", data, {
          headers: { Authorization: `Bearer ${token}` },
        }),
        axios.delete("http://localhost:8888/v1/api/carts/clear", {
          headers: { Authorization: `Bearer ${token}` },
        }),
      ]);

      console.log("🚀 ~ handleOrder ~ orderResponse:", orderResponse);
      console.log("🚀 ~ handleOrder ~ clearCartResponse:", clearCartResponse);

      setShowPopup(true);

      setCart(clearCartResponse.data.data);
    } catch (error) {
      console.log("🚀 ~ handleOrder ~ error:", error.orderResponse.data);
      console.log("🚀 ~ handleOrder ~ error:", error.clearCartResponse.data);
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 500);
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
      {showPopup && (
        <NoficationPopup
          status="success"
          title="Order successfully"
          description=""
          handleShow={() => setShowPopup(false)}
        ></NoficationPopup>
      )}
    </div>
  );
};

export default Order;
