import React, { Fragment } from "react";
import ShoesInfor from "../shoes_infor/ShoesInfor";
import Back from "../back/Back";

const DetailPage = () => {
  return (
    <Fragment>
      <Back></Back>
      <ShoesInfor></ShoesInfor>
    </Fragment>
  );
};

export default DetailPage;
