import React, { useContext } from "react";
import { InforContext } from "../infor_provider/InforProvider";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { loading, customer, admin } = useContext(InforContext);
  if (!customer && !admin) {
    return <Navigate to={"/login"} replace></Navigate>;
  }
  return children;
};

export default ProtectedRoute;
