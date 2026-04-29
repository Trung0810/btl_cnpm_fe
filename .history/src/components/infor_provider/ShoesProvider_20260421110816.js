import React, { createContext } from "react";

const ShoesContext = createContext();

const ShoesProvider = () => {
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
        customer,
        setCustomer,
        handleLogout,
        admin,
        setAdmin,
      }}
      {...props}
    ></ShoesContext.Provider>
  );
};

export default ShoesProvider;
