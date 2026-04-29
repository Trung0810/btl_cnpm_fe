import React, { Fragment } from "react";
import ShoesInfor from "../shoes_infor/ShoesInfor";
import { useNavigate } from "react-router-dom";

const DetailPage = () => {
  const navigate = useNavigate();

  return (
    <Fragment>
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
      <ShoesInfor></ShoesInfor>
    </Fragment>
  );
};

export default DetailPage;
