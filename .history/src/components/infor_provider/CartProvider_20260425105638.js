import React, { createContext, useMemo, useState } from "react";

const CartContext = createContext();

const CartProvider = (props) => {
  const [cart, setCart] = useState(null);

  return (
    <CartContext.Provider
      value={{ cart, setCart }}
      {...props}
    ></CartContext.Provider>
  );
};

export { CartContext, CartProvider };
