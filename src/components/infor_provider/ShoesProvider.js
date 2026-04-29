import React, { createContext, useState } from "react";

const ShoesContext = createContext();

const ShoesProvider = (props) => {
  const [path, setPath] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState({
    name: "",
    brand: "all",
    type: "",
    category: "all",
    price: false,
    rate: false,
    sort: null,
  });

  return (
    <ShoesContext.Provider
      value={{
        path,
        setPath,
        currentPage,
        setCurrentPage,
        filter,
        setFilter,
      }}
      {...props}
    ></ShoesContext.Provider>
  );
};

export { ShoesContext, ShoesProvider };
