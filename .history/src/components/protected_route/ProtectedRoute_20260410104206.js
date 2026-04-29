import React, { useContext } from "react";
import { InforContext } from "../infor_provider/InforProvider";
import { Navigate } from "react-router-dom";

const ProtectedRoute = () => {
  const { user } = useContext(InforContext);
  if (!user) {
    <Navigate to={"/login"}></Navigate>;
  }
  return Children;
};

export default ProtectedRoute;
