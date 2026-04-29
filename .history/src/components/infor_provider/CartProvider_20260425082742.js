import React, { createContext, useMemo, useState } from "react";

const CartContext = createContext();

const CartProvider = (props) => {
  const [items, setItems] = useState(null);

  const subtotal = useMemo(() => {}, []);
  return (
    <CartContext.Provider
      value={{ items, setItems }}
      {...props}
    ></CartContext.Provider>
  );
};

export { CartContext, CartProvider };
