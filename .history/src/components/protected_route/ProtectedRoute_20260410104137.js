import React, { useContext } from "react";
import { InforContext } from "../infor_provider/InforProvider";

const ProtectedRoute = () => {
  const { user } = useContext(InforContext);
  return Children;
};

export default ProtectedRoute;
