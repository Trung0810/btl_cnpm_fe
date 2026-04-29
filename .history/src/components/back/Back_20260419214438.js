import React from "react";
import { useNavigate } from "react-router-dom";

const Back = (page) => {
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
      onClick={() => navigate(`/${page}`)}
    >
      <i className="fa fa-arrow-left"></i> Homepage
    </button>
  );
};

export default Back;
