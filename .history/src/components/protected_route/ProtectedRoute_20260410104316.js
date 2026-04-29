import React, { useContext } from "react";
import { InforContext } from "../infor_provider/InforProvider";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { user } = useContext(InforContext);
  if (!user) {
    return <Navigate to={"/login"} replace={true}></Navigate>;
  }
  return children;
};

export default ProtectedRoute;
