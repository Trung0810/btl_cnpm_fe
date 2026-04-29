import React, { Fragment } from "react";
import ShoesInfor from "../shoes_infor/ShoesInfor";
import { useNavigate } from "react-router-dom";
import BackHome from "../back_home/BackHome";

const DetailPage = () => {
  const navigate = useNavigate();

  return (
    <Fragment>
      <BackHome></BackHome>
      <ShoesInfor></ShoesInfor>
    </Fragment>
  );
};

export default DetailPage;
