import React, { useContext, useEffect, useState } from "react";
import CartItem from "./CartItem";
import axios from "axios";
import { CartContext } from "../infor_provider/CartProvider";
import "./CartList.css";

const CartList = () => {
  const [loading, setLoading] = useState(false);
  const { cart, setCart, setReady } = useContext(CartContext);

  const token = localStorage.getItem("accessToken");

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setR;
        const response = await axios.get("http://localhost:8888/v1/api/carts", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log("🚀 ~ fetchData ~ response:", response);

        setCart(response.data.data);
      } catch (error) {
        console.log("🚀 ~ fetchData ~ error:", error.response.data.error);
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 500);
      }
    };
    fetchData();
  }, []);

  const handleSetQuantity = async (shoesId, color, size, mode) => {
    let newItem = {};
    const newItems = cart.items.map((item) => {
      if (
        item.shoesId === shoesId &&
        item.color === color &&
        item.size === size
      ) {
        let newQuantity = item.quantity;
        if (mode === "increment") {
          newQuantity++;
        } else {
          newQuantity = Math.max(1, newQuantity - 1);
        }
        newItem = {
          ...item,
          quantity: newQuantity,
        };

        return newItem;
      }
      return item;
    });

    const newTotal = newItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0,
    );

    setCart((prev) => ({ ...prev, items: newItems, total: newTotal }));

    const data = {
      shoesId: newItem.shoesId,
      color: newItem.color,
      size: newItem.size,
      quantity: newItem.quantity,
    };

    try {
      const response = await axios.put(
        "http://localhost:8888/v1/api/carts/items",
        data,
        { headers: { Authorization: `Bearer ${token}` } },
      );
      console.log("🚀 ~ handleSetQuantity ~ response:", response);
    } catch (error) {
      console.log("🚀 ~ handleSetQuantity ~ error:", error.response.data.error);
    }
  };

  const handleRemove = async (shoesId, color, size) => {
    const removedItem = cart.items.find(
      (item) =>
        item.shoesId === shoesId && item.color === color && item.size === size,
    );

    const newItems = cart.items.filter(
      (item) =>
        !(
          item.shoesId === shoesId &&
          item.color === color &&
          item.size === size
        ),
    );

    const newTotal = cart.total - removedItem.quantity * removedItem.price;

    setCart((prev) => ({ ...prev, items: newItems, total: newTotal }));

    const data = {
      shoesId: removedItem.shoesId,
      color: removedItem.color,
      size: removedItem.size,
    };

    try {
      const response = await axios.delete(
        "http://localhost:8888/v1/api/carts/items",
        { data, headers: { Authorization: `Bearer ${token}` } },
      );
      console.log("🚀 ~ handleRemove ~ response:", response);
    } catch (error) {
      console.log("🚀 ~ handleRemove ~ error:", error.response.data);
    }
  };

  if (loading) {
    return (
      <div className="cart-list">
        <h2 className="cart-list-title">Cart List</h2>
        <div className="loading"></div>
      </div>
    );
  }

  return (
    <div className="cart-list">
      <h2 className="cart-list-title">Cart List</h2>
      {cart && cart.items?.length > 0 && (
        <div className="cart-list-header">
          <span>Item</span>
          <span>Quantity</span>
          <span>Unit price</span>
        </div>
      )}
      <ul className="cart-list-item">
        {cart && cart.items?.length > 0 ? (
          cart.items.map((item) => (
            <CartItem
              key={`${item.shoesId} - ${item.color} - ${item.size}`}
              shoesId={item.shoesId}
              name={item.name}
              image={item.image}
              brand={item.brand}
              type={item.type}
              category={item.category}
              color={item.color}
              size={item.size}
              quantity={item.quantity}
              price={item.price}
              handleSetQuantity={handleSetQuantity}
              handleRemove={handleRemove}
            ></CartItem>
          ))
        ) : (
          <div
            style={{
              fontSize: "40px",
              fontWeight: "500",
              margin: "50px auto",
            }}
          >
            Your cart is empty. Start shopping now!
          </div>
        )}
      </ul>
    </div>
  );
};

export default CartList;
