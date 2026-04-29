import React, { useEffect, useState } from "react";
import CartItem from "./CartItem";
import axios from "axios";
import "./CartList.css";

const CartList = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState(null);

  const token = localStorage.getItem("accessToken");

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get("http://localhost:8888/v1/api/carts", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log("🚀 ~ fetchData ~ response:", response);

        setData(response.data.data);
        setItems(response.data.data.items);
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
    const newItems = items.map((item) => {
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
    setItems(newItems);

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
    } catch (error) {
      console.log("🚀 ~ handleSetQuantity ~ error:", error.response.data.error);
    }
  };

  const handleRemove = async (shoesId, color, size) => {
    const removedItem = items.find(
      (item) =>
        item.shoesId === shoesId && item.color === color && item.size === size,
    );

    const newItems = items.filter(
      (item) =>
        !(
          item.shoesId === shoesId &&
          item.color === color &&
          item.size === size
        ),
    );
    setItems(newItems);

    const data = {
      shoesId: removedItem.shoesId,
      color: removedItem.color,
      size: removedItem.size,
    };
    console.log("🚀 ~ handleRemove ~ data:", data);

    try {
      const response = await axios.delete(
        "http://localhost:8888/v1/api/carts/items",
        data,
        { headers: { Authorization: `Bearer ${token}` } },
      );
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
      <div className="cart-list-header">
        <span>Item</span>
        <span>Quantity</span>
        <span>Unit price</span>
      </div>
      <ul className="cart-list-item">
        {items && items.length > 0 ? (
          items.map((item) => (
            <CartItem
              key={item.shoesId}
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
