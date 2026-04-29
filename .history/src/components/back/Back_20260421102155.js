import React from "react";
import { useNavigate } from "react-router-dom";

const Back = ({ path }) => {
  const navigate = useNavigate();
  return (
    <button
      style={{
        backgroundColor: "#5C636A",
        color: "#fff",
        position: "absolute",
        top: "20px",
        left: "40px",
      }}
      onClick={() => {
        path ? navigate(`${path}`) : window.history.back();
      }}
    >
      <i className="fa fa-arrow-left"></i> Back
    </button>
  );
};

export default Back;
