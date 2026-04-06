import React, { Fragment } from "react";
import ShoesInfor from "../shoes_infor/ShoesInfor";

const DetailPage = () => {
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
      >
        <i className="fa fa-arrow-left"></i> Homepage
      </button>
      <ShoesInfor></ShoesInfor>
    </Fragment>
  );
};

export default DetailPage;
