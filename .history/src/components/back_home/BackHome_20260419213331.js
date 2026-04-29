import React from "react";

const BackHome = () => {
  return (
    <button
      style={{
        backgroundColor: "#5C636A",
        color: "#fff",
        position: "absolute",
        top: "20px",
        left: "40px",
      }}
      onClick={() => navigate("/")}
    >
      <i className="fa fa-arrow-left"></i> Homepage
    </button>
  );
};

export default BackHome;
