import React, { useContext } from "react";
import { InforContext } from "../infor_provider/InforProvider";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { authChecked, customer, admin } = useContext(InforContext);

  if (!authChecked) {
    return <div></div>;
  }

  if (!customer && !admin) {
    return <Navigate to="/login" replace></Navigate>;
  }

  return children;
};

export default ProtectedRoute;
