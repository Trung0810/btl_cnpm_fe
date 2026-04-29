import React, { useContext } from "react";
import { InforContext } from "../infor_provider/InforProvider";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { loadData, customer, admin } = useContext(InforContext);
  if (loadData) {
    console.log("i am here");
    return <div></div>;
  }

  if (!loadData && !customer && !admin) {
    return <Navigate to={"/login"} replace></Navigate>;
  }

  return children;
};

export default ProtectedRoute;
