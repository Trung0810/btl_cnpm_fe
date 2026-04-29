import axios, { AxiosHeaders } from "axios";
import React, { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = (props) => {
  const [cart, setCart] = useState(null);

  const token = localStorage.getItem("accessToken");

  const handleAddToCart = async (data) => {
    try {
      const response = await axios.post(
        "http://localhost:8888/v1/api/carts",
        data,
        { headers: { Authorization: `Bearer ${token}` } },
      );
      console.log("🚀 ~ handleAddToCart ~ response:", response);
    } catch (error) {
      console.log("🚀 ~ handleAddToCart ~ error:", error.response.data);
    }
  };

  return (
    <CartContext.Provider
      value={{ cart, setCart, handleAddToCart }}
      {...props}
    ></CartContext.Provider>
  );
};

export { CartContext, CartProvider };
