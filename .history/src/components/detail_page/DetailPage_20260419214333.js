import React, { Fragment } from "react";
import ShoesInfor from "../shoes_infor/ShoesInfor";
import BackHome from "../back/Back";

const DetailPage = () => {
  return (
    <Fragment>
      <BackHome></BackHome>
      <ShoesInfor></ShoesInfor>
    </Fragment>
  );
};

export default DetailPage;
