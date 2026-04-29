import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const InforContext = createContext();

const InforProvider = (props) => {
  const [customer, setCustomer] = useState(null);
  const [admin, setAdmin] = useState(null);
  const [pathname, setPathname] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState({
    keyword: "",
    brand: "all",
    category: "all",
    price: false,
    rate: false,
    sort: null,
  });
  const navigate = useNavigate();

  console.log(filter);

  const handleLogout = () => {
    setCustomer(null);
    setAdmin(null);
    localStorage.removeItem("accessToken");
    navigate("/", { replace: true });
    console.log("hehehe");
  };

  const handleAddToCart = () => {};
  return (
    <InforContext.Provider
      value={{
        customer,
        setCustomer,
        handleLogout,
        admin,
        setAdmin,
        pathname,
        setPathname,
        currentPage,
        setCurrentPage,
        filter,
        setFilter,
      }}
      {...props}
    ></InforContext.Provider>
  );
};

export { InforContext, InforProvider };
