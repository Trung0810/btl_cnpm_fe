import React from "react";

const Back = (path) => {
  return (
    <button
      style={{
        backgroundColor: "#5C636A",
        color: "#fff",
        position: "absolute",
        top: "20px",
        left: "40px",
      }}
      onClick={() => window.history.back()}
    >
      <i className="fa fa-arrow-left"></i> Back
    </button>
  );
};

export default Back;
